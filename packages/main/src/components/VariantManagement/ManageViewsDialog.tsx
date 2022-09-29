import { isPhone, isTablet } from '@ui5/webcomponents-base/dist/Device.js';
import searchIcon from '@ui5/webcomponents-icons/dist/search.js';
import { ThemingParameters, useI18nBundle } from '@ui5/webcomponents-react-base';
import React, { Children, ComponentElement, MouseEventHandler, ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { BarDesign, FlexBoxAlignItems, FlexBoxDirection } from '../../enums';
import { ButtonDesign } from '../../enums/ButtonDesign';
import {
  APPLY_AUTOMATICALLY,
  CANCEL,
  CREATED_BY,
  DEFAULT,
  MANAGE_VIEWS,
  SAVE,
  SHARING,
  VIEW,
  SEARCH
} from '../../i18n/i18n-defaults';
import { Icon, Input } from '../../webComponents';
import { Bar } from '../../webComponents/Bar';
import { Button } from '../../webComponents/Button';
import { Dialog, DialogDomRef } from '../../webComponents/Dialog';
import { Table } from '../../webComponents/Table';
import { TableColumn } from '../../webComponents/TableColumn';
import { FlexBox } from '../FlexBox';
import { ManageViewsTableRows } from './ManageViewsTableRows';
import { VariantItemPropTypes } from './VariantItem';

const styles = {
  manageViewsDialog: {
    width: isPhone() || isTablet() ? '100%' : '70vw',
    '&::part(content), &::part(header)': {
      padding: 0
    },
    '&::part(footer)': {
      padding: 0,
      borderBlockStart: 'none'
    }
  },
  headerText: {
    margin: 0,
    textAlign: 'center',
    alignSelf: 'start',
    minHeight: 'var(--_ui5_popup_default_header_height)',
    maxHeight: 'var(--_ui5_popup_default_header_height)',
    lineHeight: 'var(--_ui5_popup_default_header_height)',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    display: 'inline-block',
    paddingInlineStart: '1rem',
    fontFamily: '"72override",var(--_ui5_popup_header_font_family)',
    fontSize: '1rem'
  },
  search: { width: 'calc(100% - 2rem)', marginBlockEnd: '0.5rem' },
  inputIcon: { cursor: 'pointer', color: ThemingParameters.sapContent_IconColor }
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
  showOnlyFavorites?: boolean;
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
    portalContainer,
    showOnlyFavorites
  } = props;
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const cancelText = i18nBundle.getText(CANCEL);
  const saveText = i18nBundle.getText(SAVE);
  const viewHeaderText = i18nBundle.getText(VIEW);
  const sharingHeaderText = i18nBundle.getText(SHARING);
  const defaultHeaderText = i18nBundle.getText(DEFAULT);
  const applyAutomaticallyHeaderText = i18nBundle.getText(APPLY_AUTOMATICALLY);
  const createdByHeaderText = i18nBundle.getText(CREATED_BY);
  const manageViewsText = i18nBundle.getText(MANAGE_VIEWS);
  const searchText = i18nBundle.getText(SEARCH);

  const [changedVariantNames, setChangedVariantNames] = useState(new Map());
  const [invalidVariants, setInvalidVariants] = useState<Record<string, HTMLInputElement>>({});

  const classes = useStyles();

  const columns = (
    <>
      {showOnlyFavorites && <TableColumn key="favorite-variant-item" />}
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

  const [filteredProps, setFilteredProps] = useState(childrenProps);
  useEffect(() => {
    setFilteredProps(childrenProps);
  }, [childrenProps]);

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

  const handleSearchInput = (e) => {
    const lowerCaseVal = e.target.value.toLowerCase();
    setFilteredProps(
      childrenProps.filter(
        (item) =>
          item.children?.toLowerCase()?.includes(lowerCaseVal) || item.author?.toLowerCase()?.includes(lowerCaseVal)
      )
    );
  };

  return createPortal(
    <Dialog
      className={classes.manageViewsDialog}
      data-component-name="VariantManagementManageViewsDialog"
      ref={manageViewsRef}
      onAfterClose={onAfterClose}
      headerText={manageViewsText}
      header={
        <FlexBox direction={FlexBoxDirection.Column} style={{ width: '100%' }} alignItems={FlexBoxAlignItems.Center}>
          <h2 className={classes.headerText}>{manageViewsText}</h2>
          <Input
            className={classes.search}
            placeholder={searchText}
            showClearIcon
            icon={<Icon name={searchIcon} className={classes.inputIcon} />}
            onInput={handleSearchInput}
          />
        </FlexBox>
      }
      resizable
      footer={
        <Bar
          design={BarDesign.Footer}
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
        {filteredProps.map((itemProps: VariantItemPropTypes) => {
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
              showOnlyFavorites={showOnlyFavorites}
            />
          );
        })}
      </Table>
    </Dialog>,
    portalContainer
  );
};
