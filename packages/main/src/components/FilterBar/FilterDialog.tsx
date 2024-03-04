import group2Icon from '@ui5/webcomponents-icons/dist/group-2.js';
import listIcon from '@ui5/webcomponents-icons/dist/list.js';
import searchIcon from '@ui5/webcomponents-icons/dist/search.js';
import { enrichEventWithDetails, useI18nBundle, useIsomorphicId } from '@ui5/webcomponents-react-base';
import type { Dispatch, MutableRefObject, SetStateAction } from 'react';
import React, { Children, cloneElement, useEffect, useReducer, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import {
  BarDesign,
  ButtonDesign,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  MessageBoxActions,
  MessageBoxTypes,
  TableMode,
  TitleLevel,
  ToolbarStyle
} from '../../enums/index.js';
import {
  ACTIVE,
  ALL,
  BASIC,
  CANCEL,
  FIELD,
  FIELDS_BY_ATTRIBUTE,
  FILTER_DIALOG_RESET_WARNING,
  FILTERS,
  GROUP_VIEW,
  HIDE_VALUES,
  LIST_VIEW,
  MANDATORY,
  OK,
  RESET,
  SEARCH_FOR_FILTERS,
  SHOW_VALUES,
  VISIBLE,
  VISIBLE_AND_ACTIVE
} from '../../i18n/i18n-defaults.js';
import { addCustomCSSWithScoping } from '../../internal/addCustomCSSWithScoping.js';
import type { OnReorderParams } from '../../internal/FilterBarDialogContext.js';
import { FilterBarDialogContext } from '../../internal/FilterBarDialogContext.js';
import { useCanRenderPortal } from '../../internal/ssr.js';
import { stopPropagation } from '../../internal/stopPropagation.js';
import type { Ui5CustomEvent } from '../../types/index.js';
import type { DialogDomRef, TableDomRef, TableRowDomRef } from '../../webComponents/index.js';
import {
  Bar,
  Button,
  Dialog,
  Icon,
  Input,
  Option,
  Panel,
  SegmentedButton,
  SegmentedButtonItem,
  Select,
  Table,
  TableColumn,
  Title
} from '../../webComponents/index.js';
import type { FilterGroupItemInternalProps } from '../FilterGroupItem/types.js';
import { FlexBox } from '../FlexBox/index.js';
import { MessageBox } from '../MessageBox/index.js';
import { Toolbar } from '../Toolbar/index.js';
import { ToolbarSpacer } from '../ToolbarSpacer/index.js';
import styles from './FilterBarDialog.jss.js';
import { filterValue, syncRef } from './utils.js';
import type { FilterBarPropTypes } from './index.js';

addCustomCSSWithScoping(
  'ui5-table',
  `
/* hide table header of panel table */
:host([data-component-name="FilterBarDialogPanelTable"]) thead {
  visibility: collapse;
}
/* don't display border of panel table */
:host([data-component-name="FilterBarDialogPanelTable"]) table {
  border-collapse: unset;
}

/* don't allow table cells to grow
todo: FilterBarDialogPanelTable
*/
:host([data-component-name="FilterBarDialogTable"]) table{
  table-layout: fixed;
}

:host([data-component-name="FilterBarDialogPanelTable"]) .ui5-table-root {
  border-bottom: none;
}
/* don't display select all checkbox */
:host([data-component-name="FilterBarDialogTable"]) thead th.ui5-table-select-all-column [ui5-checkbox] {
 visibility: hidden;
}

:host([data-component-name="FilterBarDialogPanelTable"]) thead th.ui5-table-select-all-column {
 display: none;
}
 `
);

const getActiveFilters = (activeFilterAttribute, filter) => {
  switch (activeFilterAttribute) {
    case 'all':
      return true;
    case 'visible':
      return filter.props?.visibleInFilterBar;
    case 'active':
      return filter.props?.active;
    case 'visibleAndActive':
      return filter.props?.visibleInFilterBar && filter.props?.active;
    case 'mandatory':
      return filter.props?.required;
    default:
      return true;
  }
};

const compareObjects = (firstObj, secondObj) =>
  Object.keys(firstObj).find((first) =>
    Object.keys(secondObj).every((second) => firstObj[second] !== secondObj[first])
  );

const useStyles = createUseStyles(styles, { name: 'FilterBarDialog' });

interface FilterDialogPropTypes {
  filterBarRefs: any;
  open: boolean;
  handleDialogClose: (event: Ui5CustomEvent<DialogDomRef>) => void;
  children: any;
  showRestoreButton: boolean;
  handleRestoreFilters: (e, source, filterElements) => void;
  handleDialogSave: (e, newRefs, updatedToggledFilters, orderedChildren) => void;
  handleSearchValueChange: Dispatch<SetStateAction<string>>;
  handleSelectionChange?: (
    event: Ui5CustomEvent<
      TableDomRef,
      { element: TableRowDomRef; checked: boolean; selectedRows: unknown[]; previouslySelectedRows: unknown[] }
    >
  ) => void;
  handleDialogSearch?: (event: CustomEvent<{ value: string; element: HTMLElement }>) => void;
  handleDialogCancel?: (event: Ui5CustomEvent<HTMLElement>) => void;
  portalContainer: Element;
  onAfterFiltersDialogOpen: (event: Ui5CustomEvent<DialogDomRef>) => void;
  dialogRef: MutableRefObject<DialogDomRef>;
  enableReordering?: FilterBarPropTypes['enableReordering'];
}

export const FilterDialog = (props: FilterDialogPropTypes) => {
  const {
    filterBarRefs,
    open,
    handleDialogClose,
    children,
    showRestoreButton,
    handleRestoreFilters,
    handleDialogSave,
    handleSelectionChange,
    handleDialogSearch,
    handleDialogCancel,
    onAfterFiltersDialogOpen,
    portalContainer,
    dialogRef,
    enableReordering
  } = props;
  const classes = useStyles();
  const uniqueId = useIsomorphicId();
  const [searchString, setSearchString] = useState('');
  const [toggledFilters, setToggledFilters] = useState({});
  const dialogRefs = useRef({});
  const dialogSearchRef = useRef(null);
  const [showValues, toggleValues] = useReducer((prev) => !prev, false);
  const [messageBoxOpen, setMessageBoxOpen] = useState(false);

  const [forceRequired, setForceRequired] = useState<undefined | TableRowDomRef>();
  const [showBtnsOnHover, setShowBtnsOnHover] = useState(true);
  const [isListView, setIsListView] = useState(true);
  const [filteredAttribute, setFilteredAttribute] = useState('all');
  const [currentReorderedItem, setCurrentReorderedItem] = useState<OnReorderParams | Record<string, never>>({});
  const tableRef = useRef(null);
  const handleReorder = (e: OnReorderParams) => {
    console.log('reorder', e);
    setCurrentReorderedItem(e);
  };

  const prevOderId = useRef(undefined);
  const handleFocusFallback = () => {
    const orderId = currentReorderedItem?.target?.dataset.orderId;
    if (orderId && tableRef.current && orderId !== prevOderId.current) {
      // we have to retrigger the internal item navigation logic after reordering,
      //  otherwise keyboard nav and general focus handling is not working properly
      setTimeout(() => {
        const itemNav = tableRef.current._itemNavigation;
        itemNav._getItems = () => Array.from(tableRef.current.querySelectorAll('[ui5-table-row]'));
        itemNav.setCurrentItem(tableRef.current.querySelector(`[data-order-id="${orderId}"]`));
      });
      prevOderId.current = orderId;
    }
  };

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const basicText = i18nBundle.getText(BASIC);
  const cancelText = i18nBundle.getText(CANCEL);
  const okText = i18nBundle.getText(OK);
  const searchForFiltersText = i18nBundle.getText(SEARCH_FOR_FILTERS);
  const filtersTitle = i18nBundle.getText(FILTERS);
  const resetText = i18nBundle.getText(RESET);
  const allText = i18nBundle.getText(ALL);
  const activeText = i18nBundle.getText(ACTIVE);
  const visibleText = i18nBundle.getText(VISIBLE);
  const visibleAndActiveText = i18nBundle.getText(VISIBLE_AND_ACTIVE);
  const mandatoryText = i18nBundle.getText(MANDATORY);
  const listViewText = i18nBundle.getText(LIST_VIEW);
  const groupViewText = i18nBundle.getText(GROUP_VIEW);
  const showValuesText = i18nBundle.getText(SHOW_VALUES);
  const hideValuesText = i18nBundle.getText(HIDE_VALUES);
  const fieldText = i18nBundle.getText(FIELD);
  const fieldsByAttributeText = i18nBundle.getText(FIELDS_BY_ATTRIBUTE);

  const filteredChildren = children.filter((item) => {
    return (
      !!item?.props &&
      item.props?.visible &&
      (item.props?.label?.toLowerCase().includes(searchString.toLowerCase()) || searchString.length === 0) &&
      getActiveFilters(filteredAttribute, item)
    );
  });

  const [orderedChildren, setOrderedChildren] = useState(filteredChildren);

  const renderChildren = () => {
    return orderedChildren.map((child, index) => {
      const filterBarItemRef = filterBarRefs.current[child.key];
      let filterItemProps = {};
      if (filterBarItemRef) {
        filterItemProps = filterValue(filterBarItemRef, child);
      }
      if (!child.props.children) return child;

      let isSelected =
        child.props.visibleInFilterBar || child.props.required || child.type.displayName !== 'FilterGroupItem';
      if (Object.hasOwn(toggledFilters, child.key)) {
        isSelected = toggledFilters[child.key];
      }

      return cloneElement<FilterGroupItemInternalProps>(child, {
        'data-selected': isSelected,
        'data-react-key': child.key,
        'data-index': index,
        children: {
          ...child.props.children,
          props: {
            ...child.props.children.props,
            ...filterItemProps
          },
          ref: (node) => {
            if (node) {
              dialogRefs.current[child.key] = node;
              syncRef(child.props.children.ref, node);
            }
          }
        }
      });
    });
  };

  const handleSearch = (e) => {
    if (handleDialogSearch) {
      handleDialogSearch(enrichEventWithDetails(e, { value: e.target.value, element: e.target }));
    }
    setSearchString(e.target.value);
  };
  const handleSave = (e) => {
    console.log(
      orderedChildren,
      orderedChildren.map((child) => child.props.orderId)
    );
    handleDialogSave(e, dialogRefs.current, toggledFilters, {
      orderedReactFilters: orderedChildren,
      orderedIds: orderedChildren.map((child) => child.props.orderId)
    });
  };

  const handleClose = (e) => {
    setToggledFilters({});
    stopPropagation(e);
    if (handleDialogCancel) {
      handleDialogCancel(e);
    }
    handleDialogClose(e);
  };

  const handleCancel = (e) => {
    if (handleDialogCancel) {
      handleDialogCancel(e);
    }
    handleDialogClose(e);
  };

  const handleRestore = () => {
    setMessageBoxOpen(true);
  };
  const handleViewChange = (e) => {
    //todo change deprecated property
    setIsListView(e.detail.selectedItem.dataset.id === 'list');
  };

  const handleMessageBoxClose = (e) => {
    if (e.detail.action === 'OK') {
      setToggledFilters({});
      handleRestoreFilters(e, 'dialog', { filters: Array.from(dialogRef.current.querySelectorAll('ui5-table-row')) });
    }
    setMessageBoxOpen(false);
  };

  const [updatedIndex, setUpdatedIndex] = useState(undefined);
  useEffect(() => {
    if (currentReorderedItem?.index != null) {
      setOrderedChildren((prev: any[]) => {
        const { index, direction } = currentReorderedItem;
        switch (direction) {
          case 'up':
            if (index > 0) {
              setUpdatedIndex(index - 1);
              const temp = prev[index];
              prev[index] = prev[index - 1];
              prev[index - 1] = temp;
            }
            break;
          case 'down':
            if (index < prev.length - 1) {
              setUpdatedIndex(index + 1);
              const temp = prev[index];
              prev[index] = prev[index + 1];
              prev[index + 1] = temp;
            }
            break;
          case 'top':
            if (index > 0) {
              setUpdatedIndex(0);
              const item = prev.splice(index, 1)[0];
              prev.unshift(item);
            }
            break;
          case 'bottom':
            if (index < prev.length - 1) {
              setUpdatedIndex(prev.length - 1);
              const item = prev.splice(index, 1)[0];
              prev.push(item);
            }
            break;
        }
        return [...prev];
      });
      void currentReorderedItem.target.focus();
    }
  }, [currentReorderedItem]);

  useEffect(() => {
    if (updatedIndex != null) {
      prevOderId.current = undefined;
    }
  }, [updatedIndex]);

  const handleAttributeFilterChange = (e) => {
    setFilteredAttribute(e.detail.selectedOption.dataset.id);
  };

  const handleCheckBoxChange = (e) => {
    if (e.target.hasAttribute('ui5-table')) {
      // preventDefault should only be called if the target is the table, otherwise bubbled `selection-change` events
      // also prevent their default behavior (e.g. the event of the MultiComboBox)
      e.preventDefault();
      const prevRowsByKey = e.detail.previouslySelectedRows.reduce(
        (acc, prevSelRow) => ({ ...acc, [prevSelRow.dataset.reactKey]: prevSelRow }),
        {}
      );
      const rowsByKey = e.detail.selectedRows.reduce(
        (acc, selRow) => ({ ...acc, [selRow.dataset.reactKey]: selRow }),
        {}
      );

      const changedRowKey =
        e.detail.previouslySelectedRows > e.detail.selectedRows
          ? compareObjects(prevRowsByKey, rowsByKey)
          : compareObjects(rowsByKey, prevRowsByKey);

      const element = rowsByKey[changedRowKey] || prevRowsByKey[changedRowKey];

      // todo: workaround until specific rows can be disabled
      if (element.dataset?.required === 'true') {
        setForceRequired(element);
        return;
      }

      if (typeof handleSelectionChange === 'function') {
        handleSelectionChange(enrichEventWithDetails(e, { element, checked: element.selected }));
      }

      setToggledFilters((prev) => {
        return { ...prev, [changedRowKey]: element.selected };
      });
    }
  };

  useEffect(() => {
    if (forceRequired) {
      forceRequired.setAttribute('selected', 'true');
      setForceRequired(undefined);
    }
  }, [forceRequired]);

  const canRenderPortal = useCanRenderPortal();
  if (!canRenderPortal) {
    return null;
  }

  const renderGroups = () => {
    const groups = {};
    Children.forEach(renderChildren(), (child) => {
      const childGroups = child.props.groupName ?? 'default';
      if (groups[childGroups]) {
        groups[childGroups].push(child);
      } else {
        groups[childGroups] = [child];
      }
    });

    const filterGroups = Object.keys(groups)
      .sort((x, y) => (x === 'default' ? -1 : y === 'role' ? 1 : 0))
      .map((item, index) => {
        return (
          <Panel
            headerText={item === 'default' ? basicText : item}
            className={classes.groupPanel}
            key={`${item === 'default' ? basicText : item}${index}`}
          >
            <Table
              mode={TableMode.MultiSelect}
              data-component-name="FilterBarDialogPanelTable"
              onSelectionChange={handleCheckBoxChange}
            >
              {groups[item]}
            </Table>
          </Panel>
        );
      });
    return filterGroups;
  };

  const currentReorderedItemOrderId = currentReorderedItem?.orderId;

  return (
    <FilterBarDialogContext.Provider
      value={{
        isFilterInDialog: true,
        enableReordering,
        onReorder: handleReorder,
        isListView,
        withValues: showValues,
        handleFocusFallback,
        showBtnsOnHover,
        setShowBtnsOnHover,
        currentReorderedItemOrderId
      }}
    >
      {createPortal(
        <Dialog
          open={open}
          ref={dialogRef}
          data-component-name="FilterBarDialog"
          onAfterClose={handleClose}
          onAfterOpen={onAfterFiltersDialogOpen}
          resizable
          draggable
          className={classes.dialogComponent}
          preventFocusRestore
          initialFocus={`${uniqueId}-fb-dialog-search`}
          header={
            <Bar
              design={BarDesign.Header}
              startContent={
                <Title level={TitleLevel.H4} title={filtersTitle}>
                  {filtersTitle}
                </Title>
              }
              endContent={
                showRestoreButton && (
                  <Button design={ButtonDesign.Transparent} onClick={handleRestore}>
                    {resetText}
                  </Button>
                )
              }
            />
          }
          footer={
            <Bar
              design={BarDesign.Footer}
              endContent={
                <FlexBox justifyContent={FlexBoxJustifyContent.End} className={classes.footer}>
                  <Button
                    onClick={handleSave}
                    data-component-name="FilterBarDialogSaveBtn"
                    design={ButtonDesign.Emphasized}
                  >
                    {okText}
                  </Button>
                  <Button
                    design={ButtonDesign.Transparent}
                    onClick={handleCancel}
                    data-component-name="FilterBarDialogCancelBtn"
                  >
                    {cancelText}
                  </Button>
                </FlexBox>
              }
            />
          }
        >
          <FlexBox direction={FlexBoxDirection.Column} className={classes.subheaderContainer}>
            <Toolbar className={classes.subheader} toolbarStyle={ToolbarStyle.Clear}>
              <Select
                onChange={handleAttributeFilterChange}
                title={fieldsByAttributeText}
                accessibleName={fieldsByAttributeText}
              >
                <Option selected={filteredAttribute === 'all'} data-id="all">
                  {allText}
                </Option>
                <Option selected={filteredAttribute === 'visible'} data-id="visible">
                  {visibleText}
                </Option>
                <Option selected={filteredAttribute === 'active'} data-id="active">
                  {activeText}
                </Option>
                <Option selected={filteredAttribute === 'visibleAndActive'} data-id="visibleAndActive">
                  {visibleAndActiveText}
                </Option>
                <Option selected={filteredAttribute === 'mandatory'} data-id="mandatory">
                  {mandatoryText}
                </Option>
              </Select>
              <ToolbarSpacer />
              <Button design={ButtonDesign.Transparent} onClick={toggleValues} aria-live="polite">
                {showValues ? hideValuesText : showValuesText}
              </Button>
              <SegmentedButton onSelectionChange={handleViewChange}>
                <SegmentedButtonItem
                  icon={listIcon}
                  data-id="list"
                  pressed={isListView}
                  accessibleName={listViewText}
                />
                <SegmentedButtonItem
                  icon={group2Icon}
                  data-id="group"
                  pressed={!isListView}
                  accessibleName={groupViewText}
                />
              </SegmentedButton>
            </Toolbar>
            <FlexBox className={classes.searchInputContainer}>
              <Input
                id={`${uniqueId}-fb-dialog-search`}
                noTypeahead
                placeholder={searchForFiltersText}
                onInput={handleSearch}
                showClearIcon
                icon={<Icon name={searchIcon} />}
                ref={dialogSearchRef}
                className={classes.searchInput}
                data-component-name="FilterBarDialogSearchInput"
              />
            </FlexBox>
          </FlexBox>
          <Table
            ref={tableRef}
            data-component-name="FilterBarDialogTable"
            hideNoData={!isListView}
            mode={TableMode.MultiSelect}
            onSelectionChange={handleCheckBoxChange}
            columns={
              <>
                <TableColumn>{fieldText}</TableColumn>
                {!showValues && <TableColumn className={classes.tHactive}>{activeText}</TableColumn>}
              </>
            }
          >
            {isListView && renderChildren()}
          </Table>
          {!isListView && renderGroups()}
        </Dialog>,
        portalContainer ?? document.body
      )}
      {showRestoreButton &&
        messageBoxOpen &&
        createPortal(
          <MessageBox
            open
            type={MessageBoxTypes.Warning}
            actions={[MessageBoxActions.OK, MessageBoxActions.Cancel]}
            onClose={handleMessageBoxClose}
            data-component-name="FilterBarDialogResetMessageBox"
          >
            {i18nBundle.getText(FILTER_DIALOG_RESET_WARNING)}
          </MessageBox>,
          document.body
        )}
    </FilterBarDialogContext.Provider>
  );
};
