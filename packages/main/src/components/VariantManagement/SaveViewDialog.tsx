import { useI18nBundle, useIsomorphicId } from '@ui5/webcomponents-react-base';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { BarDesign } from '../../enums';
import { ButtonDesign } from '../../enums/ButtonDesign';
import { FlexBoxAlignItems } from '../../enums/FlexBoxAlignItems';
import { FlexBoxDirection } from '../../enums/FlexBoxDirection';
import {
  APPLY_AUTOMATICALLY,
  CANCEL,
  FILE_ALREADY_EXISTS,
  PUBLIC,
  SAVE,
  SAVE_VIEW,
  SET_AS_DEFAULT,
  SPECIFY_VIEW_NAME,
  VIEW
} from '../../i18n/i18n-defaults';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { SelectedVariant } from '../../internal/VariantManagementContext';
import { Bar } from '../../webComponents/Bar';
import { Button, ButtonDomRef } from '../../webComponents/Button';
import { CheckBox } from '../../webComponents/CheckBox';
import { Dialog, DialogDomRef } from '../../webComponents/Dialog';
import { Input } from '../../webComponents/Input';
import { Label } from '../../webComponents/Label';
import { FlexBox } from '../FlexBox';

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
    portalContainer
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
  const errorTextAlreadyExists = i18nBundle.getText(FILE_ALREADY_EXISTS);
  const errorTextEmpty = i18nBundle.getText(SPECIFY_VIEW_NAME);

  const [isDefault, setDefault] = useState(selectedVariant.isDefault);
  const [isPublic, setPublic] = useState(selectedVariant.global);
  const [applyAutomatically, setApplyAutomatically] = useState(selectedVariant.applyAutomatically);
  const [variantName, setVariantName] = useState(selectedVariant.children);
  const [variantNameInvalid, setVariantNameInvalid] = useState<string | boolean>(false);

  const handleInputChange = (e) => {
    setVariantName(e.target.value);
    if (variantNames.includes(e.target.value)) {
      setVariantNameInvalid(errorTextAlreadyExists);
    } else if (e.target.value.length === 0) {
      setVariantNameInvalid(errorTextEmpty);
    } else {
      setVariantNameInvalid(false);
    }
  };

  const onSave = (e) => {
    if (variantNames.includes(variantName)) {
      setVariantNameInvalid(errorTextAlreadyExists);
      inputRef.current?.focus();
    } else if (variantName.length === 0) {
      setVariantNameInvalid(errorTextEmpty);
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

  useEffect(() => {
    saveViewDialogRef.current.show();
    return () => {
      saveViewDialogRef.current?.close();
    };
  }, []);

  return createPortal(
    <Dialog
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
          className={classes.input}
          id={`view-${uniqueId}`}
          value={variantName}
          valueState={!variantNameInvalid ? 'None' : 'Error'}
          valueStateMessage={<div>{variantNameInvalid}</div>}
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
    portalContainer
  );
};
