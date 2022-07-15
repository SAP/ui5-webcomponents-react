import { isPhone, isTablet } from '@ui5/webcomponents-base/dist/Device.js';
import '@ui5/webcomponents-icons/dist/decline.js';
import '@ui5/webcomponents-icons/dist/favorite.js';
import '@ui5/webcomponents-icons/dist/unfavorite.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base';
import React, { Children, ComponentElement, MouseEventHandler, ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { ButtonDesign } from '../../enums/ButtonDesign';
import { APPLY_AUTOMATICALLY, CANCEL, CREATED_BY, DEFAULT, SAVE, SHARING, VIEW } from '../../i18n/i18n-defaults';
import { Bar } from '../../webComponents/Bar';
import { Button } from '../../webComponents/Button';
import { Dialog, DialogDomRef } from '../../webComponents/Dialog';
import { Table } from '../../webComponents/Table';
import { TableColumn } from '../../webComponents/TableColumn';
import { ManageViewsTableRows } from './ManageViewsTableRows';
import { VariantItemPropTypes } from './VariantItem';

const styles = {
  manageViewsDialog: {
    '&::part(content)': {
      padding: 0
    },
    '&::part(footer)': {
      padding: 0
    }
  }
};

const useStyles = createUseStyles(styles, { name: 'ManageViewsDialog' });

interface ManageViewsDialogPropTypes {
  children: ReactNode | ReactNode[];
  onAfterClose: any;
  handleSaveManageViews: (
    e: MouseEventHandler<HTMLElement>,
    payload: {
      updatedRows: any;
      defaultView: string;
      deletedRows: any;
    }
  ) => void;
  showShare: boolean;
  showApplyAutomatically: boolean;
  showSetAsDefault: boolean;
  showCreatedBy: boolean;
  variantNames: string[];
  portalContainer: Element;
}

export const ManageViewsDialog = (props: ManageViewsDialogPropTypes) => {
  const {
    children,
    onAfterClose,
    handleSaveManageViews,
    showShare,
    showApplyAutomatically,
    showSetAsDefault,
    showCreatedBy,
    variantNames,
    portalContainer
  } = props;
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const cancelText = i18nBundle.getText(CANCEL);
  const saveText = i18nBundle.getText(SAVE);
  const viewHeaderText = i18nBundle.getText(VIEW);
  const sharingHeaderText = i18nBundle.getText(SHARING);
  const defaultHeaderText = i18nBundle.getText(DEFAULT);
  const applyAutomaticallyHeaderText = i18nBundle.getText(APPLY_AUTOMATICALLY);
  const createdByHeaderText = i18nBundle.getText(CREATED_BY);

  const [changedVariantNames, setChangedVariantNames] = useState(new Map());
  const [invalidVariants, setInvalidVariants] = useState<Record<string, HTMLInputElement>>({});

  const classes = useStyles();

  const columns = (
    <>
      <TableColumn key="favorite-variant-item" />
      <TableColumn>{viewHeaderText}</TableColumn>
      {showShare && (
        <TableColumn demandPopin minWidth={600}>
          {sharingHeaderText}
        </TableColumn>
      )}
      {showSetAsDefault && (
        <TableColumn demandPopin minWidth={600} popinText={defaultHeaderText}>
          {defaultHeaderText}
        </TableColumn>
      )}
      {showApplyAutomatically && (
        <TableColumn demandPopin minWidth={600} popinText={applyAutomaticallyHeaderText}>
          {applyAutomaticallyHeaderText}
        </TableColumn>
      )}
      {showCreatedBy && (
        <TableColumn demandPopin minWidth={600} popinText={createdByHeaderText}>
          {createdByHeaderText}
        </TableColumn>
      )}
      <TableColumn key="delete-variant-item" />
    </>
  );
  const manageViewsRef = useRef<DialogDomRef>(null);

  useEffect(() => {
    manageViewsRef.current.show();
    return () => {
      manageViewsRef.current?.close();
    };
  }, []);

  const [childrenProps, setChildrenProps] = useState(
    Children.map(children, (child: ComponentElement<any, any>) => {
      return child.props;
    })
  );
  useEffect(() => {
    setChildrenProps(
      Children.map(children, (child: ComponentElement<any, any>) => {
        return child.props;
      })
    );
  }, [children]);

  const [defaultView, setDefaultView] = useState<string>();

  const changedTableRows = useRef({});
  const handleTableRowChange = (e, payload) => {
    if (payload) {
      changedTableRows.current[payload.currentVariant] = {
        ...(changedTableRows.current[payload.currentVariant] ?? {}),
        ...payload
      };
    }
  };
  const deletedTableRows = useRef(new Set([]));
  const handleDelete = (e) => {
    deletedTableRows.current.add(e.target.dataset.children);
    setChildrenProps((prev) =>
      prev
        .filter((item) => item.children !== e.target.dataset.children)
        .map((item) => {
          if (changedTableRows.current.hasOwnProperty(item.children)) {
            return { ...item, ...changedTableRows.current[item.children] };
          }
          return item;
        })
    );
  };

  const handleSave = (e) => {
    if (Object.keys(invalidVariants).length === 0) {
      handleSaveManageViews(e, {
        updatedRows: changedTableRows.current,
        defaultView,
        deletedRows: deletedTableRows.current
      });
    } else {
      Object.values(invalidVariants)[0].focus();
    }
  };

  return createPortal(
    <Dialog
      className={classes.manageViewsDialog}
      style={{ width: isPhone() || isTablet() ? '100%' : '70vw' }}
      data-component-name="VariantManagementManageViewsDialog"
      ref={manageViewsRef}
      onAfterClose={onAfterClose}
      headerText="Manage Views"
      footer={
        <Bar
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
      <Table columns={columns} stickyColumnHeader role="table">
        {childrenProps.map((itemProps: VariantItemPropTypes) => {
          return (
            <ManageViewsTableRows
              {...itemProps}
              setInvalidVariants={setInvalidVariants}
              setChangedVariantNames={setChangedVariantNames}
              changedVariantNames={changedVariantNames}
              variantNames={variantNames}
              handleRowChange={handleTableRowChange}
              handleDelete={handleDelete}
              defaultView={defaultView}
              setDefaultView={setDefaultView}
              showShare={showShare}
              showApplyAutomatically={showApplyAutomatically}
              showSetAsDefault={showSetAsDefault}
              showCreatedBy={showCreatedBy}
              key={itemProps?.children}
            />
          );
        })}
      </Table>
    </Dialog>,
    portalContainer
  );
};
