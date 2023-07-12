import { useI18nBundle, useIsomorphicId } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { BarDesign, ButtonDesign, FlexBoxAlignItems, FlexBoxDirection } from '../../enums/index.js';
import {
  APPLY_AUTOMATICALLY,
  CANCEL,
  VARIANT_MANAGEMENT_ERROR_DUPLICATE,
  PUBLIC,
  SAVE,
  SAVE_VIEW,
  SET_AS_DEFAULT,
  SPECIFY_VIEW_NAME,
  VIEW
} from '../../i18n/i18n-defaults.js';
import type { Ui5CustomEvent } from '../../interfaces/index.js';
import { useCanRenderPortal } from '../../internal/ssr.js';
import { trimAndRemoveSpaces } from '../../internal/utils.js';
import type { SelectedVariant } from '../../internal/VariantManagementContext.js';
import type { ButtonDomRef, DialogDomRef, InputPropTypes } from '../../webComponents/index.js';
import { Bar, Button, CheckBox, Dialog, Input, Label } from '../../webComponents/index.js';
import { FlexBox } from '../FlexBox/index.js';

const useStyles = createUseStyles(
  {
    dialog: {
      '&::part(footer)': {
        borderBlockStart: 'none',
        padding: 0
      }
    },
    input: { width: '100%', marginBlock: '0.1875rem' },
    checkBoxesContainer: { paddingInline: '0.5rem' }
  },
  { name: 'SaveViewDialogStyles' }
);

interface SaveViewDialogPropTypes {
  onAfterClose: (event: Ui5CustomEvent<DialogDomRef>) => void;
  handleSave: (event: Ui5CustomEvent<ButtonDomRef>, selectedVariant: SelectedVariant) => void;
  selectedVariant: SelectedVariant;
  showShare: boolean;
  showApplyAutomatically: boolean;
  showSetAsDefault: boolean;
  variantNames: string[];
  portalContainer: Element;
  saveViewInputProps?: Omit<InputPropTypes, 'value'>;
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
    portalContainer,
    saveViewInputProps
  } = props;
  const saveViewDialogRef = useRef<DialogDomRef>(null);
  const inputRef = useRef(undefined);
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const classes = useStyles();
  const uniqueId = useIsomorphicId();

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

  const handleCancel = () => {
    saveViewDialogRef.current.close();
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

  const canRenderPortal = useCanRenderPortal();
  if (!canRenderPortal) {
    return null;
  }

  return createPortal(
    <Dialog
      open
      className={classes.dialog}
      ref={saveViewDialogRef}
      headerText={headingText}
      onAfterClose={onAfterClose}
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
          valueState={saveViewInputProps?.valueState ?? (!variantNameInvalid ? 'None' : 'Error')}
          valueStateMessage={saveViewInputProps?.valueStateMessage ?? <div>{variantNameInvalid}</div>}
          className={clsx(classes.input, saveViewInputProps?.className)}
          id={`view-${uniqueId}`}
          value={variantName}
          onInput={handleInputChange}
        />
        <FlexBox
          alignItems={FlexBoxAlignItems.Start}
          direction={FlexBoxDirection.Column}
          className={classes.checkBoxesContainer}
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
    </Dialog>,
    portalContainer ?? document.body
  );
};
