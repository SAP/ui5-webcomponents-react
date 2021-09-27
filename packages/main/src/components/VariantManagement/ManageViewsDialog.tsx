import '@ui5/webcomponents-icons/dist/decline.js';
import '@ui5/webcomponents-icons/dist/favorite.js';
import '@ui5/webcomponents-icons/dist/unfavorite.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base/dist/hooks';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { CANCEL, SAVE } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { Bar } from '@ui5/webcomponents-react/dist/Bar';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/dist/ButtonDesign';
import { CheckBox } from '@ui5/webcomponents-react/dist/CheckBox';
import { Dialog } from '@ui5/webcomponents-react/dist/Dialog';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import { Input } from '@ui5/webcomponents-react/dist/Input';
import { RadioButton } from '@ui5/webcomponents-react/dist/RadioButton';
import { Table } from '@ui5/webcomponents-react/dist/Table';
import { TableCell } from '@ui5/webcomponents-react/dist/TableCell';
import { TableColumn } from '@ui5/webcomponents-react/dist/TableColumn';
import { TableRow } from '@ui5/webcomponents-react/dist/TableRow';
import { Text } from '@ui5/webcomponents-react/dist/Text';
import React, { Children, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Ui5DialogDomRef } from '../../interfaces/Ui5DialogDomRef';
import { ManageViewsTableRows } from './MangeViewsTableRows';

//todo prop types
export const ManageViewsDialog = (props) => {
  const { children, onAfterClose, handleSaveManageViews, showShare, showApplyAutomatically, showSetAsDefault } = props;
  const columns = (
    <>
      <TableColumn key="favorite-variant-item" />
      <TableColumn>View</TableColumn>
      {showShare && <TableColumn>Sharing</TableColumn>}
      {showSetAsDefault && <TableColumn>Default</TableColumn>}
      {showApplyAutomatically && <TableColumn>Apply Automatically</TableColumn>}
      <TableColumn>Created By</TableColumn>
      <TableColumn key="delete-variant-item" />
    </>
  );
  const manageViewsRef = useRef<Ui5DialogDomRef>(null);
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const cancelText = i18nBundle.getText(CANCEL);
  const saveText = i18nBundle.getText(SAVE);

  useEffect(() => {
    manageViewsRef.current.show();
    return () => {
      manageViewsRef.current?.close();
    };
  }, []);

  const childrenProps = Children.map(children, (child) => {
    return child.props;
  });

  const [defaultView, setDefaultView] = useState<undefined | string>();
  //todo apply view automatically
  const [applyViewAutomatically, setApplyViewAutomatically] = useState<undefined | string[]>();

  const handleTableRowChange = (e, payload) => {
    //todo
    console.log(e, payload);
  };
  const handleDelete = (e, payload) => {
    //todo
    console.log(e, payload);
  };
  const handleSave = (e) => {};
  return createPortal(
    //todo i18n
    <Dialog
      //todo media query?
      //todo max-width (ui5 has some calculation there)
      style={{ width: '64%' }}
      ref={manageViewsRef}
      onAfterClose={onAfterClose}
      headerText="Manage Views"
      footer={
        <Bar
          //todo cb
          endContent={
            <>
              <Button design={ButtonDesign.Emphasized} onClick={handleSave}>
                {saveText}
              </Button>
              <Button design={ButtonDesign.Transparent} onClick={onAfterClose}>
                {cancelText}
              </Button>
            </>
          }
        />
      }
    >
      <Table columns={columns} style={{ minWidth: '600px' }}>
        {childrenProps.map((itemProps, index) => {
          return (
            <ManageViewsTableRows
              {...itemProps}
              handleRowChange={handleTableRowChange}
              handleDelete={handleDelete}
              index={index}
              defaultView={defaultView}
              setDefaultView={setDefaultView}
              showShare={showShare}
              showApplyAutomatically={showApplyAutomatically}
              showSetAsDefault={showSetAsDefault}
            />
          );
        })}
      </Table>
    </Dialog>,
    document.body
  );
};
