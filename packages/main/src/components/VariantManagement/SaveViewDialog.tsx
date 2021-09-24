import { useI18nBundle } from '@ui5/webcomponents-react-base/hooks/useI18nBundle';
import { Dialog } from '@ui5/webcomponents-react/dist/Dialog';
import { Select } from '@ui5/webcomponents-react/dist/Select';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import {
  ButtonDesign,
  CheckBox,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Input,
  Label
} from '../..';
import { CANCEL, SAVE } from '../../../dist/assets/i18n/i18n-defaults';
import { Ui5DialogDomRef } from '../../interfaces/Ui5DialogDomRef';
import { Bar } from '../../webComponents/Bar';
import { Button } from '../../webComponents/Button';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';

//todo prop types
//todo needs currently selected item
export const SaveViewDialog = (props) => {
  const { onAfterClose, handleSave, selectedVariant, showShare, showApplyAutomatically, showSetAsDefault } = props;
  const saveViewDialogRef = useRef<Ui5DialogDomRef>(null);
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const cancelText = i18nBundle.getText(CANCEL);
  const saveText = i18nBundle.getText(SAVE);

  const [isDefault, setDefault] = useState(selectedVariant.isDefault);
  const [isPublic, setPublic] = useState(selectedVariant.public);
  const [applyAutomatically, setApplyAutomatically] = useState(selectedVariant.applyAutomatically);
  const [variantName, setVariantName] = useState(selectedVariant.children ?? '');

  const handleInputChange = (e) => {
    setVariantName(e.target.value);
  };

  const onSave = (e) => {
    handleSave(e, { ...selectedVariant, children: variantName, isDefault, ['public']: isPublic, applyAutomatically });
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

  return (
    <Dialog
      ref={saveViewDialogRef}
      headerText="todo Save View"
      onAfterClose={onAfterClose}
      footer={
        <Bar
          //todo cb
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
          View
        </Label>
        <Input
          style={{ width: '100%', margin: '0.1875rem 0' /* todo cozy: 0.25rem 0*/ }}
          id="view"
          value={variantName}
          onChange={handleInputChange}
        />
        <FlexBox
          alignItems={FlexBoxAlignItems.Start}
          direction={FlexBoxDirection.Column}
          style={{ padding: '0 0.5rem' }}
        >
          {showSetAsDefault && (
            <CheckBox onChange={handleChangeDefault} text="todo Set as Default" checked={isDefault} />
          )}
          {showShare && <CheckBox onChange={handleChangePublic} text="todo Public" checked={isPublic} />}
          {showApplyAutomatically && (
            <CheckBox
              onChange={handleChangeApplyAutomatically}
              text="todo Apply Automatically"
              checked={applyAutomatically}
            />
          )}
        </FlexBox>
      </FlexBox>
    </Dialog>
  );
};
