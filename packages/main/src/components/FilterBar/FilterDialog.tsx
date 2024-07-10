import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import TableSelectionMode from '@ui5/webcomponents/dist/types/TableSelectionMode.js';
import TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import group2Icon from '@ui5/webcomponents-icons/dist/group-2.js';
import listIcon from '@ui5/webcomponents-icons/dist/list.js';
import searchIcon from '@ui5/webcomponents-icons/dist/search.js';
import { enrichEventWithDetails, useI18nBundle, useIsomorphicId, useStylesheet } from '@ui5/webcomponents-react-base';
import type { Dispatch, ReactElement, RefObject, SetStateAction } from 'react';
import { Children, cloneElement, useEffect, useReducer, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FlexBoxDirection, FlexBoxJustifyContent, MessageBoxAction, MessageBoxType } from '../../enums/index.js';
import {
  ACTIVE,
  ALL,
  BASIC,
  CANCEL,
  FIELDS_BY_ATTRIBUTE,
  FILTER,
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
import type { DialogDomRef, SegmentedButtonPropTypes, TableRowDomRef } from '../../webComponents/index.js';
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
  TableHeaderCell,
  TableHeaderRow,
  TableSelection,
  Title
} from '../../webComponents/index.js';
import type { FilterGroupItemInternalProps } from '../FilterGroupItem/types.js';
import { FlexBox } from '../FlexBox/index.js';
import { MessageBox } from '../MessageBox/index.js';
import { Toolbar } from '../Toolbar/index.js';
import { ToolbarSpacer } from '../ToolbarSpacer/index.js';
import { classNames, styleData } from './FilterBarDialog.module.css.js';
import type { FilterBarPropTypes } from './types.js';
import { filterValue, syncRef } from './utils.js';

addCustomCSSWithScoping(
  'ui5-table',
  `
:host([data-component-name="FilterBarDialogTable"][data-is-grouped]) #nodata-row {
  display: none;
}
`
);

addCustomCSSWithScoping(
  'ui5-table-header-row',
  `
:host([data-component-name="FilterBarDialogTableHeaderRow"]) :first-child {
  visibility: hidden;
}
`
);

type ActiveFilterAttributes = 'all' | 'visible' | 'active' | 'visibleAndActive' | 'mandatory';
const getActiveFilters = (
  activeFilterAttribute: ActiveFilterAttributes,
  filter: ReactElement<FilterGroupItemInternalProps>
) => {
  switch (activeFilterAttribute) {
    case 'all':
      return true;
    case 'visible':
      return filter.props?.hiddenInFilterBar !== true;
    case 'active':
      return filter.props?.active;
    case 'visibleAndActive':
      return filter.props?.hiddenInFilterBar !== true && filter.props?.active;
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

interface FilterDialogPropTypes {
  filterBarRefs: any;
  open: boolean;
  handleDialogClose: (event: Ui5CustomEvent<DialogDomRef>) => void;
  children: ReactElement<FilterGroupItemInternalProps>[];
  showRestoreButton: boolean;
  handleRestoreFilters: (e, source, filterElements) => void;
  handleDialogSave: (e, newRefs, updatedToggledFilters, orderedChildren) => void;
  handleSearchValueChange: Dispatch<SetStateAction<string>>;
  handleSelectionChange?: FilterBarPropTypes['onFiltersDialogSelectionChange'];
  handleDialogSearch?: (event: CustomEvent<{ value: string; element: HTMLElement }>) => void;
  handleDialogCancel?: (event: Ui5CustomEvent<HTMLElement>) => void;
  portalContainer: Element;
  onAfterFiltersDialogOpen: (event: Ui5CustomEvent<DialogDomRef>) => void;
  dialogRef: RefObject<DialogDomRef>;
  enableReordering?: FilterBarPropTypes['enableReordering'];
  isPhone?: boolean;
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
    enableReordering,
    isPhone
  } = props;
  useStylesheet(styleData, 'FilterBarDialog');
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
  const [filteredAttribute, setFilteredAttribute] = useState<ActiveFilterAttributes>('all');
  const [currentReorderedItem, setCurrentReorderedItem] = useState<OnReorderParams | Record<string, never>>({});
  const tableRef = useRef(null);
  const okBtnRef = useRef(null);
  const handleReorder = (e: OnReorderParams) => {
    setCurrentReorderedItem(e);
  };

  const prevOderId = useRef(undefined);
  const handleFocusFallback = () => {
    const orderId = currentReorderedItem?.target?.dataset.orderId;
    if (orderId && tableRef.current && orderId !== prevOderId.current) {
      // we have to retrigger the internal item navigation logic after reordering,
      // otherwise keyboard nav and general focus handling is not working properly
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
  const filterText = i18nBundle.getText(FILTER);
  const fieldsByAttributeText = i18nBundle.getText(FIELDS_BY_ATTRIBUTE);

  const visibleChildren = () =>
    children.filter((item) => {
      return !!item?.props && !item?.props?.hidden;
    });

  const [orderedChildren, setOrderedChildren] = useState([]);

  useEffect(() => {
    if (children.length) {
      setOrderedChildren(visibleChildren());
    }
  }, [children]);

  const renderChildren = () => {
    const searchStringLower = searchString.toLowerCase();
    const filteredChildren =
      searchStringLower.length > 0 || filteredAttribute !== 'all'
        ? orderedChildren.filter(
            (item) =>
              (searchStringLower === '' || item.props.label?.toLowerCase().includes(searchStringLower)) &&
              getActiveFilters(filteredAttribute, item)
          )
        : orderedChildren;

    return filteredChildren.map((child, index) => {
      const filterBarItemRef = filterBarRefs.current[child.key];
      let isSelected =
        child.props.hiddenInFilterBar !== true || child.props.required || child.type.displayName !== 'FilterGroupItem';
      if (toggledFilters.hasOwnProperty(child.key)) {
        isSelected = toggledFilters[child.key];
      }

      const filterItemProps = filterBarItemRef ? filterValue(filterBarItemRef, child) : {};

      return cloneElement<FilterGroupItemInternalProps>(child, {
        'data-selected': isSelected,
        'data-react-key': child.key,
        'data-index': index,
        children: {
          ...child.props.children,
          props: {
            ...(child.props.children.props || {}),
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
    if (typeof handleDialogSearch === 'function') {
      handleDialogSearch(enrichEventWithDetails(e, { value: e.target.value, element: e.target }));
    }
    setSearchString(e.target.value);
  };
  const handleSave = (e) => {
    const orderedChildrenIds = enableReordering ? orderedChildren.map((child) => child.props.orderId) : [];
    handleDialogSave(e, dialogRefs.current, toggledFilters, orderedChildrenIds);
  };

  const handleClose = (e) => {
    setToggledFilters({});
    stopPropagation(e);
    if (typeof handleDialogCancel === 'function') {
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
  const handleViewChange: SegmentedButtonPropTypes['onSelectionChange'] = (e) => {
    const selectedItem = e.detail.selectedItems.at(0);
    setIsListView(selectedItem.dataset.id === 'list');
  };

  const handleMessageBoxClose = (e) => {
    if (e.detail.action === 'OK') {
      setToggledFilters({});
      setOrderedChildren(visibleChildren());
      handleRestoreFilters(e, 'dialog', { filters: Array.from(dialogRef.current.querySelectorAll('ui5-table-row')) });
    }
    setMessageBoxOpen(false);
    okBtnRef.current.focus();
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
        const selectedRows = groups[item].map((child) => child.props['data-react-key']).join(' ');
        return (
          <Panel
            headerText={item === 'default' ? basicText : item}
            className={classNames.groupPanel}
            key={`${item === 'default' ? basicText : item}${index}`}
          >
            <Table
              className={classNames.tableInGroup}
              data-component-name="FilterBarDialogPanelTable"
              features={
                <TableSelection
                  mode={TableSelectionMode.Multiple}
                  selected={selectedRows}
                  onChange={handleCheckBoxChange}
                />
              }
              headerRow={
                <TableHeaderRow className={classNames.groupedTableHeader}>
                  <TableHeaderCell>{filterText}</TableHeaderCell>
                  {!showValues && <TableHeaderCell className={classNames.tHactive}>{activeText}</TableHeaderCell>}
                </TableHeaderRow>
              }
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
          data-is-phone={isPhone}
          onClose={handleClose}
          onOpen={onAfterFiltersDialogOpen}
          resizable
          draggable
          className={classNames.dialogComponent}
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
                <FlexBox justifyContent={FlexBoxJustifyContent.End} className={classNames.footer}>
                  <Button
                    ref={okBtnRef}
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
          <FlexBox direction={FlexBoxDirection.Column} className={classNames.subheaderContainer}>
            <Toolbar className={classNames.subheader} toolbarStyle="Clear">
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
                  selected={isListView}
                  accessibleName={listViewText}
                />
                <SegmentedButtonItem
                  icon={group2Icon}
                  data-id="group"
                  selected={!isListView}
                  accessibleName={groupViewText}
                />
              </SegmentedButton>
            </Toolbar>
            <FlexBox className={classNames.searchInputContainer}>
              <Input
                id={`${uniqueId}-fb-dialog-search`}
                noTypeahead
                placeholder={searchForFiltersText}
                onInput={handleSearch}
                showClearIcon
                icon={<Icon name={searchIcon} />}
                ref={dialogSearchRef}
                className={classNames.searchInput}
                data-component-name="FilterBarDialogSearchInput"
              />
            </FlexBox>
          </FlexBox>
          <Table
            ref={tableRef}
            data-component-name="FilterBarDialogTable"
            data-is-grouped={!isListView}
            nodata={!isListView ? <span /> : undefined}
            tabIndex={!isListView ? -1 : undefined}
            features={
              <>
                <TableSelection mode={TableSelectionMode.Multiple} onChange={handleCheckBoxChange} />
              </>
            }
            headerRow={
              <TableHeaderRow data-component-name="FilterBarDialogTableHeaderRow">
                <TableHeaderCell>{filterText}</TableHeaderCell>
                {!showValues && <TableHeaderCell className={classNames.tHactive}>{activeText}</TableHeaderCell>}
              </TableHeaderRow>
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
            type={MessageBoxType.Warning}
            actions={[MessageBoxAction.OK, MessageBoxAction.Cancel]}
            onClose={handleMessageBoxClose}
            data-component-name="FilterBarDialogResetMessageBox"
          >
            {i18nBundle.getText(FILTER_DIALOG_RESET_WARNING)}
          </MessageBox>,
          portalContainer ?? document.body
        )}
    </FilterBarDialogContext.Provider>
  );
};
