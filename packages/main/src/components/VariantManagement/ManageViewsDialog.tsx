import '@ui5/webcomponents-icons/dist/decline.js';
import '@ui5/webcomponents-icons/dist/favorite.js';
import '@ui5/webcomponents-icons/dist/unfavorite.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base/dist/hooks';
import {
  APPLY_AUTOMATICALLY,
  CANCEL,
  CREATED_BY,
  DEFAULT,
  SAVE,
  SHARING,
  VIEW
} from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { Bar } from '@ui5/webcomponents-react/dist/Bar';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/dist/ButtonDesign';
import { Dialog } from '@ui5/webcomponents-react/dist/Dialog';
import { Table } from '@ui5/webcomponents-react/dist/Table';
import { TableColumn } from '@ui5/webcomponents-react/dist/TableColumn';
import React, { Children, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Ui5DialogDomRef } from '../../interfaces/Ui5DialogDomRef';
import { ManageViewsTableRows } from './MangeViewsTableRows';
import { VariantItemPropTypes } from './VariantItem';

//todo styles
//todo i18n
//todo prop types
export const ManageViewsDialog = (props) => {
  const {
    children,
    onAfterClose,
    handleSaveManageViews,
    showShare,
    showApplyAutomatically,
    showSetAsDefault,
    variantNames
  } = props;
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const cancelText = i18nBundle.getText(CANCEL);
  const saveText = i18nBundle.getText(SAVE);
  const viewHeaderText = i18nBundle.getText(VIEW);
  const sharingHeaderText = i18nBundle.getText(SHARING);
  const defaultHeaderText = i18nBundle.getText(DEFAULT);
  const applyAutomaticallyHeaderText = i18nBundle.getText(APPLY_AUTOMATICALLY);
  const createdByHeaderText = i18nBundle.getText(CREATED_BY);

  const columns = (
    <>
      <TableColumn key="favorite-variant-item" />
      <TableColumn>{viewHeaderText}</TableColumn>
      {showShare && <TableColumn>{sharingHeaderText}</TableColumn>}
      {showSetAsDefault && <TableColumn>{defaultHeaderText}</TableColumn>}
      {showApplyAutomatically && <TableColumn>{applyAutomaticallyHeaderText}</TableColumn>}
      <TableColumn>{createdByHeaderText}</TableColumn>
      <TableColumn key="delete-variant-item" />
    </>
  );
  const manageViewsRef = useRef<Ui5DialogDomRef>(null);

  useEffect(() => {
    manageViewsRef.current.show();
    return () => {
      manageViewsRef.current?.close();
    };
  }, []);

  const [childrenProps, setChildrenProps] = useState(
    Children.map(children, (child) => {
      return child.props;
    })
  );

  const [defaultView, setDefaultView] = useState<undefined | string>();

  const changedTableRows = useRef({});
  const handleTableRowChange = (e, payload) => {
    changedTableRows.current[payload?.currentVariant] = {
      ...(changedTableRows.current[payload?.currentVariant] ?? {}),
      ...payload
    };
  };
  const deletedTableRows = useRef(new Set([]));
  const handleDelete = (e) => {
    deletedTableRows.current.add(e.target.dataset.children);
    setChildrenProps((prev) => prev.filter((item) => item.children !== e.target.dataset.children));
  };
  const handleSave = (e) => {
    handleSaveManageViews(e, {
      updatedRows: changedTableRows.current,
      defaultView,
      deletedRows: deletedTableRows.current
    });
  };
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
      {/*todo width*/}
      <Table columns={columns} style={{ minWidth: '600px' }}>
        {childrenProps.map((itemProps: VariantItemPropTypes, index) => {
          return (
            <ManageViewsTableRows
              {...itemProps}
              variantNames={variantNames}
              handleRowChange={handleTableRowChange}
              handleDelete={handleDelete}
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
