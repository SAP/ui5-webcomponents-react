import { useI18nBundle } from '@ui5/webcomponents-react-base';
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
} from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ButtonDesign } from '../../enums/ButtonDesign';
import { FlexBoxAlignItems } from '../../enums/FlexBoxAlignItems';
import { FlexBoxDirection } from '../../enums/FlexBoxDirection';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { SelectedVariant } from '../../internal/VariantManagementContext';
import { Bar } from '../../webComponents/Bar';
import { Button, ButtonDomRef } from '../../webComponents/Button';
import { CheckBox } from '../../webComponents/CheckBox';
import { Dialog, DialogDomRef } from '../../webComponents/Dialog';
import { Input } from '../../webComponents/Input';
import { Label } from '../../webComponents/Label';
import { FlexBox } from '../FlexBox';

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
      ref={saveViewDialogRef}
      headerText={headingText}
      onAfterClose={onAfterClose}
      footer={
        <Bar
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
        <Label for="view" showColon>
          {inputLabelText}
        </Label>
        <Input
          accessibleName="view"
          ref={inputRef}
          style={{ width: '100%', margin: '0.1875rem 0' }}
          id="view"
          value={variantName}
          valueState={!variantNameInvalid ? 'None' : 'Error'}
          valueStateMessage={<div>{variantNameInvalid}</div>}
          onInput={handleInputChange}
        />
        <FlexBox
          alignItems={FlexBoxAlignItems.Start}
          direction={FlexBoxDirection.Column}
          style={{ padding: '0 0.5rem' }}
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
