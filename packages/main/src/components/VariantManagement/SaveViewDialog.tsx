import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import { enrichEventWithDetails, useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import { useId, useRef, useState } from 'react';
import { FlexBoxAlignItems, FlexBoxDirection } from '../../enums/index.js';
import {
  APPLY_AUTOMATICALLY,
  CANCEL,
  PUBLIC,
  SAVE,
  SAVE_VIEW,
  SET_AS_DEFAULT,
  SPECIFY_VIEW_NAME,
  VARIANT_MANAGEMENT_ERROR_DUPLICATE,
  VIEW
} from '../../i18n/i18n-defaults.js';
import { trimAndRemoveSpaces } from '../../internal/utils.js';
import type { SelectedVariant } from '../../internal/VariantManagementContext.js';
import type { Ui5CustomEvent } from '../../types/index.js';
import type { ButtonDomRef, DialogDomRef, InputPropTypes } from '../../webComponents/index.js';
import { Bar, Button, CheckBox, Dialog, Input, Label } from '../../webComponents/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { classNames, styleData } from './SaveViewDialog.module.css.js';
import type { VariantManagementPropTypes } from './types.js';

interface SaveViewDialogPropTypes {
  onAfterClose: (event: Ui5CustomEvent<DialogDomRef>) => void;
  handleSave: (event: Ui5CustomEvent<ButtonDomRef>, selectedVariant: SelectedVariant) => void;
  selectedVariant: SelectedVariant;
  showShare: boolean;
  showApplyAutomatically: boolean;
  showSetAsDefault: boolean;
  variantNames: string[];
  saveViewInputProps?: Omit<InputPropTypes, 'value'>;
  onSaveViewCancel?: VariantManagementPropTypes['onSaveViewCancel'];
}

export const SaveViewDialog = (props: SaveViewDialogPropTypes) => {
  const {
    onAfterClose,
    handleSave,
    selectedVariant,
    showShare,
    showApplyAutomatically,
    showSetAsDefault,
    variantNames,
    saveViewInputProps,
    onSaveViewCancel
  } = props;
  const saveViewDialogRef = useRef<DialogDomRef | null>(null);
  const inputRef = useRef(undefined);
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  useStylesheet(styleData, 'SaveViewDialog');
  const uniqueId = useId();

  const cancelText = i18nBundle.getText(CANCEL);
  const saveText = i18nBundle.getText(SAVE);
  const headingText = i18nBundle.getText(SAVE_VIEW);
  const defaultCbLabel = i18nBundle.getText(SET_AS_DEFAULT);
  const publicCbLabel = i18nBundle.getText(PUBLIC);
  const applyAutomaticallyCbLabel = i18nBundle.getText(APPLY_AUTOMATICALLY);
  const inputLabelText = i18nBundle.getText(VIEW);
  const errorTextAlreadyExists = i18nBundle.getText(VARIANT_MANAGEMENT_ERROR_DUPLICATE);
  const errorTextEmpty = i18nBundle.getText(SPECIFY_VIEW_NAME);

  const [isDefault, setDefault] = useState(selectedVariant.isDefault);
  const [isPublic, setPublic] = useState(selectedVariant.global);
  const [applyAutomatically, setApplyAutomatically] = useState(selectedVariant.applyAutomatically);
  const [variantName, setVariantName] = useState(selectedVariant.children);
  const [variantNameInvalid, setVariantNameInvalid] = useState<string | boolean>(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleInputChange = (e) => {
    if (typeof saveViewInputProps?.onInput === 'function') {
      saveViewInputProps.onInput(e);
    }
    const trimmedValue = trimAndRemoveSpaces(e.target.value);
    setVariantName(trimmedValue);
    if (variantNames.includes(trimmedValue)) {
      setVariantNameInvalid(errorTextAlreadyExists);
    } else if (trimmedValue.length === 0) {
      setVariantNameInvalid(errorTextEmpty);
    } else if (e.isInvalid) {
      setIsInvalid(true);
    } else {
      setVariantNameInvalid(false);
      setIsInvalid(false);
    }
  };

  const onSave = (e) => {
    if (variantNames.includes(variantName)) {
      setVariantNameInvalid(errorTextAlreadyExists);
      inputRef.current?.focus();
    } else if (variantName.length === 0) {
      setVariantNameInvalid(errorTextEmpty);
      inputRef.current?.focus();
    } else if (isInvalid) {
      inputRef.current?.focus();
    } else {
      setVariantNameInvalid(false);
      handleSave(e, { ...selectedVariant, children: variantName, isDefault, global: isPublic, applyAutomatically });
    }
  };

  const handleClose = (e) => {
    if (e.detail.escPressed) {
      handleCancel(e);
    } else {
      onAfterClose(e);
    }
  };

  const handleCancel = (e) => {
    if (typeof onSaveViewCancel === 'function') {
      onSaveViewCancel(
        enrichEventWithDetails(e, {
          ...selectedVariant,
          children: variantName,
          isDefault,
          global: isPublic,
          applyAutomatically,
          isInvalid
        })
      );
    }
    setIsInvalid(false);
    inputRef.current.isInvalid = false;
    saveViewDialogRef.current.open = false;
  };

  const handleChangeDefault = (e) => {
    setDefault(e.target.checked);
  };
  const handleChangePublic = (e) => {
    setPublic(e.target.checked);
  };
  const handleChangeApplyAutomatically = (e) => {
    setApplyAutomatically(e.target.checked);
  };

  return (
    <Dialog
      open
      className={classNames.dialog}
      ref={saveViewDialogRef}
      headerText={headingText}
      onClose={onAfterClose}
      onBeforeClose={handleClose}
      initialFocus={`view-${uniqueId}`}
      footer={
        <Bar
          design={BarDesign.Footer}
          endContent={
            <>
              <Button design={ButtonDesign.Emphasized} onClick={onSave}>
                {saveText}
              </Button>
              <Button design={ButtonDesign.Transparent} onClick={handleCancel}>
                {cancelText}
              </Button>
            </>
          }
        />
      }
    >
      <FlexBox direction={FlexBoxDirection.Column} alignItems={FlexBoxAlignItems.Start}>
        <Label for={`view-${uniqueId}`} showColon>
          {inputLabelText}
        </Label>
        <Input
          accessibleName={inputLabelText}
          ref={inputRef}
          {...saveViewInputProps}
          valueState={saveViewInputProps?.valueState ?? (!variantNameInvalid ? 'None' : 'Negative')}
          valueStateMessage={saveViewInputProps?.valueStateMessage ?? <div>{variantNameInvalid}</div>}
          className={clsx(classNames.input, saveViewInputProps?.className)}
          id={`view-${uniqueId}`}
          value={variantName}
          onInput={handleInputChange}
        />
        <FlexBox
          alignItems={FlexBoxAlignItems.Start}
          direction={FlexBoxDirection.Column}
          className={classNames.checkBoxesContainer}
        >
          {showSetAsDefault && <CheckBox onChange={handleChangeDefault} text={defaultCbLabel} checked={isDefault} />}
          {showShare && <CheckBox onChange={handleChangePublic} text={publicCbLabel} checked={isPublic} />}
          {showApplyAutomatically && (
            <CheckBox
              onChange={handleChangeApplyAutomatically}
              text={applyAutomaticallyCbLabel}
              checked={applyAutomatically}
            />
          )}
        </FlexBox>
      </FlexBox>
    </Dialog>
  );
};
