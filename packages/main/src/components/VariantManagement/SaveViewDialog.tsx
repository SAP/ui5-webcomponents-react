import { useI18nBundle } from '@ui5/webcomponents-react-base/hooks/useI18nBundle';
import { Dialog } from '@ui5/webcomponents-react/dist/Dialog';
import { Select } from '@ui5/webcomponents-react/dist/Select';
import React, { useEffect, useReducer, useRef } from 'react';
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

//todo needs currently selected item
export const SaveViewDialog = (props) => {
  const { onAfterClose, children, handleSave } = props;
  const saveViewDialogRef = useRef<Ui5DialogDomRef>(null);
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const cancelText = i18nBundle.getText(CANCEL);
  const saveText = i18nBundle.getText(SAVE);

  const [isDefault, setDefault] = useReducer((prev) => !prev, false);
  const [isPublic, setPublic] = useReducer((prev) => !prev, false);
  const [applyAutomatically, setApplyAutomatically] = useReducer((prev) => !prev, false);

  const handleChangeDefault = (e) => {};
  const handleChangePublic = (e) => {};
  const handleChangeApplyAutomatically = (e) => {};

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
              <Button design={ButtonDesign.Emphasized} onClick={handleSave}>
                {saveText}
              </Button>
              <Button design={ButtonDesign.Transparent}>{cancelText}</Button>
            </>
          }
        />
      }
    >
      <FlexBox direction={FlexBoxDirection.Column} alignItems={FlexBoxAlignItems.Start}>
        <Label for="view" showColon>
          View
        </Label>
        <Input style={{ width: '100%', margin: '0.1875rem 0' /* todo cozy: 0.25rem 0*/ }} id="view">
          TODO
        </Input>
        <FlexBox
          alignItems={FlexBoxAlignItems.Start}
          direction={FlexBoxDirection.Column}
          style={{ padding: '0 0.5rem' }}
        >
          <CheckBox onChange={handleChangeDefault} text="todo Set as Default" checked={isDefault} />
          <CheckBox onChange={handleChangePublic} text="todo Public" checked={isPublic} />
          <CheckBox
            onChange={handleChangeApplyAutomatically}
            text="todo Apply Automatically"
            checked={applyAutomatically}
          />
        </FlexBox>
      </FlexBox>
    </Dialog>
  );
};
