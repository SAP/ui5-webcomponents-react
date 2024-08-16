import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import TableSelectionMode from '@ui5/webcomponents/dist/types/TableSelectionMode.js';
import TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import group2Icon from '@ui5/webcomponents-icons/dist/group-2.js';
import listIcon from '@ui5/webcomponents-icons/dist/list.js';
import searchIcon from '@ui5/webcomponents-icons/dist/search.js';
import { enrichEventWithDetails, useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import type { ReactElement, RefObject } from 'react';
import { Children, cloneElement, useEffect, useId, useReducer, useRef, useState } from 'react';
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
import { stopPropagation } from '../../internal/stopPropagation.js';
import type {
  DialogDomRef,
  InputPropTypes,
  SegmentedButtonPropTypes,
  TableSelectionDomRef
} from '../../webComponents/index.js';
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
import { classNames, styleData } from './FilterBarDialog.module.css.js';
import type { FilterBarPropTypes } from './types.js';

interface ForceRequiredObject {
  required: string[];
  target: TableSelectionDomRef;
  selected: Set<string>;
  prevSelected: Set<string>;
  selectedKeys: Set<string>;
}

addCustomCSSWithScoping(
  'ui5-table',
  `
:host([data-component-name="FilterBarDialogTable"]) #table,
:host([data-component-name="FilterBarDialogPanelTable"]) #table {
   grid-template-columns: var(--_ui5wcr-CheckBoxWidthHeight) minmax(3rem, auto) minmax(3rem, 25%) !important;
}
:host([data-component-name="FilterBarDialogTable"][data-is-grouped]) #nodata-row {
  display: none;
}
`
);

addCustomCSSWithScoping(
  'ui5-table-header-row',
  `
:host([data-component-name="FilterBarDialogGroupTableHeaderRow"]) :first-child {
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

interface FilterDialogPropTypes {
  open: boolean;
  handleDialogClose: FilterBarPropTypes['onFiltersDialogClose'];
  children: ReactElement<FilterGroupItemInternalProps>[];
  showRestoreButton: boolean;
  handleRestoreFilters: FilterBarPropTypes['onRestore'];
  handleDialogSave: (e, selectionChangePayload, orderedChildren) => void;
  onFiltersDialogSelectionChange?: FilterBarPropTypes['onFiltersDialogSelectionChange'];
  handleDialogSearch?: FilterBarPropTypes['onFiltersDialogSearch'];
  handleDialogCancel?: FilterBarPropTypes['onFiltersDialogCancel'];
  onAfterFiltersDialogOpen: FilterBarPropTypes['onAfterFiltersDialogOpen'];
  dialogRef: RefObject<DialogDomRef>;
  enableReordering?: FilterBarPropTypes['enableReordering'];
  isPhone?: boolean;
}

export const FilterDialog = (props: FilterDialogPropTypes) => {
  const {
    open,
    handleDialogClose,
    children,
    showRestoreButton,
    handleRestoreFilters,
    handleDialogSave,
    onFiltersDialogSelectionChange,
    handleDialogSearch,
    handleDialogCancel,
    onAfterFiltersDialogOpen,
    dialogRef,
    enableReordering,
    isPhone
  } = props;
  useStylesheet(styleData, 'FilterBarDialog');
  const uniqueId = useId();
  const [searchString, setSearchString] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<undefined | string[]>(undefined);
  const [requiredFilters, setRequiredKeys] = useState({});
  const [showValues, toggleValues] = useReducer((prev) => !prev, false);
  const [messageBoxOpen, setMessageBoxOpen] = useState(false);
  const [forceRequired, setForceRequired] = useState<ForceRequiredObject>();
  const [showBtnsOnHover, setShowBtnsOnHover] = useState(true);
  const [isListView, setIsListView] = useState(true);
  const [filteredAttribute, setFilteredAttribute] = useState<ActiveFilterAttributes>('all');
  const [currentReorderedItem, setCurrentReorderedItem] = useState<OnReorderParams | Record<string, never>>({});
  const [orderedChildren, setOrderedChildren] = useState([]);
  const [updatedIndex, setUpdatedIndex] = useState(undefined);

  const currentReorderedItemOrderId = currentReorderedItem?.filterKey;
  const selected = (selectedFilters ?? []).join(' ');

  const dialogSearchRef = useRef(null);
  const tableRef = useRef(null);
  const okBtnRef = useRef(null);
  const prevIsListView = useRef(true);
  const selectionChangePayloadRef = useRef({ selectedFilterKeys: selectedFilters ?? [] });
  const initialSelected = useRef<string[] | undefined>(undefined);
  const prevRowKey = useRef(undefined);

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

  const handleReorder = (e: OnReorderParams) => {
    setCurrentReorderedItem(e);
  };

  const handleFocusFallback = () => {
    const rowKey = currentReorderedItem?.target?.rowKey;
    if (rowKey && tableRef.current && rowKey !== prevRowKey.current) {
      // we have to retrigger the internal item navigation logic after reordering,
      // otherwise keyboard nav and general focus handling is not working properly
      setTimeout(() => {
        const itemNav = tableRef.current._tableNavigation;
        itemNav._gridWalker.setGrid(itemNav._getNavigationItemsOfGrid());
        tableRef.current.querySelector(`[row-key="${rowKey}"]`).focus();
      }, 0);
      prevRowKey.current = rowKey;
    }
  };

  const visibleChildren = () =>
    children.filter((item) => {
      return !!item?.props && !item?.props?.hidden;
    });

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
      return cloneElement<FilterGroupItemInternalProps>(child, {
        'data-index': index
      });
    });
  };

  const handleSearch = (e: Parameters<InputPropTypes['onInput']>[0]) => {
    if (typeof handleDialogSearch === 'function') {
      handleDialogSearch(enrichEventWithDetails(e, { value: e.target.value, element: e.target }));
    }
    setSearchString(e.target.value);
  };
  const handleSave = (e) => {
    const orderedChildrenIds = enableReordering ? orderedChildren.map((child) => child.props.filterKey) : [];
    handleDialogSave(e, selectionChangePayloadRef.current, orderedChildrenIds);
  };

  const handleClose = (e) => {
    stopPropagation(e);
    if (e.target !== e.currentTarget) {
      return;
    }
    if (typeof handleDialogCancel === 'function') {
      handleDialogCancel(true);
    }
    handleDialogClose('escPressed');
  };

  const handleCancel = () => {
    if (typeof handleDialogCancel === 'function') {
      handleDialogCancel(false);
    }
    handleDialogClose('cancelButtonPressed');
  };

  const handleRestore = () => {
    setMessageBoxOpen(true);
  };
  const handleViewChange: SegmentedButtonPropTypes['onSelectionChange'] = (e) => {
    const selectedItem = e.detail.selectedItems.at(0);
    prevIsListView.current = isListView;
    setIsListView(selectedItem.dataset.id === 'list');
  };

  const handleMessageBoxClose = (action) => {
    if (action === 'OK') {
      const payload = {
        source: 'dialog' as const,
        selectedFilterKeys: initialSelected.current,
        previousSelectedFilterKeys: selectedFilters
      };
      setSelectedFilters(initialSelected.current);
      setOrderedChildren(visibleChildren());
      handleRestoreFilters(payload);
    }
    setMessageBoxOpen(false);
    okBtnRef.current.focus();
  };

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
      prevRowKey.current = undefined;
    }
  }, [updatedIndex]);

  const handleAttributeFilterChange = (e) => {
    setFilteredAttribute(e.detail.selectedOption.dataset.id);
  };

  const fireOnFiltersDialogSelectionChange = (_selected, selectedKeys, prevSelected, prevent = false) => {
    setSelectedFilters(Array.from(_selected));
    if (!prevent && typeof onFiltersDialogSelectionChange === 'function') {
      const payload = {
        toggledFilterKeys: selectedKeys,
        selected: selectedKeys.size === 1 ? _selected.has(selectedKeys.values().next().value) : undefined,
        selectedFilterKeys: _selected,
        previousSelectedFilterKeys: prevSelected
      };
      onFiltersDialogSelectionChange(payload);
    }
  };

  useEffect(() => {
    if (selectedFilters?.length) {
      selectionChangePayloadRef.current = { selectedFilterKeys: selectedFilters };
    }
  }, [selectedFilters]);

  const handleCheckBoxChange = (e) => {
    if (e.target.hasAttribute('ui5-table-selection')) {
      const _selected: Set<string> = new Set(e.target.selected.length ? e.target.selected.split(' ') : []);
      const prevSelected: Set<string> = new Set(selectedFilters ?? []);
      const alwaysSelected = Object.keys(requiredFilters).filter((key) => requiredFilters[key]);
      const selectedKeys: Set<string> = _selected.symmetricDifference(prevSelected);

      // reset required filters to `true`
      if (alwaysSelected.length) {
        setForceRequired({
          required: alwaysSelected,
          target: e.target,
          selected: _selected,
          prevSelected,
          selectedKeys
        });
        return;
      }

      fireOnFiltersDialogSelectionChange(_selected, selectedKeys, prevSelected);
    }
  };

  useEffect(() => {
    if (forceRequired && forceRequired.target) {
      const { prevSelected, selectedKeys, selected: _selected, required, target } = forceRequired;
      required.forEach((requiredString) => {
        _selected.add(requiredString);
      });

      setTimeout(() => {
        target.selected = Array.from(_selected).join(' ');
        const prevent = selectedKeys.size === 1 && required.includes(selectedKeys.values().next().value);
        fireOnFiltersDialogSelectionChange(_selected, selectedKeys, prevSelected, prevent);
      });

      setForceRequired(undefined);
    }
  }, [forceRequired]);

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

    // filter groups
    return Object.keys(groups)
      .sort((x, y) => (x === 'default' ? -1 : y === 'role' ? 1 : 0))
      .map((item, index) => {
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
                  selected={selected}
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
  };

  useEffect(() => {
    if (initialSelected.current === undefined && selected.length) {
      initialSelected.current = selectedFilters;
    }
  }, [selected]);

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
        currentReorderedItemOrderId,
        setSelectedKeys: setSelectedFilters,
        setRequiredKeys,
        prevIsListView
      }}
    >
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
          <FlexBox direction={FlexBoxDirection.Row}>
            <Select
              onChange={handleAttributeFilterChange}
              title={fieldsByAttributeText}
              accessibleName={fieldsByAttributeText}
              onClose={(e) => {
                e.stopPropagation();
              }}
            >
              <Option selected={filteredAttribute === 'all'} data-id="all">
                {allText}
              </Option>
              {/*todo: visible doesn't work anymore*/}
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
            <span className={classNames.spacer} />
            <Button
              design={ButtonDesign.Transparent}
              onClick={toggleValues}
              aria-live="polite"
              className={classNames.showValuesBtn}
            >
              {showValues ? hideValuesText : showValuesText}
            </Button>
            <SegmentedButton onSelectionChange={handleViewChange}>
              <SegmentedButtonItem icon={listIcon} data-id="list" selected={isListView} accessibleName={listViewText} />
              <SegmentedButtonItem
                icon={group2Icon}
                data-id="group"
                selected={!isListView}
                accessibleName={groupViewText}
              />
            </SegmentedButton>
          </FlexBox>
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
          className={!isListView && classNames.inactiveTable}
          data-component-name="FilterBarDialogTable"
          data-is-grouped={!isListView}
          nodata={!isListView ? <span /> : undefined}
          tabIndex={!isListView ? -1 : undefined}
          features={
            <>
              <TableSelection mode={TableSelectionMode.Multiple} onChange={handleCheckBoxChange} selected={selected} />
            </>
          }
          headerRow={
            <TableHeaderRow
              data-component-name={!isListView ? 'FilterBarDialogGroupTableHeaderRow' : 'FilterBarDialogTableHeaderRow'}
            >
              <TableHeaderCell>{filterText}</TableHeaderCell>
              {!showValues && <TableHeaderCell className={classNames.tHactive}>{activeText}</TableHeaderCell>}
            </TableHeaderRow>
          }
        >
          {isListView && renderChildren()}
        </Table>
        {!isListView && renderGroups()}
      </Dialog>
      {showRestoreButton && messageBoxOpen && (
        <MessageBox
          open
          type={MessageBoxType.Warning}
          actions={[MessageBoxAction.OK, MessageBoxAction.Cancel]}
          onClose={handleMessageBoxClose}
          data-component-name="FilterBarDialogResetMessageBox"
        >
          {i18nBundle.getText(FILTER_DIALOG_RESET_WARNING)}
        </MessageBox>
      )}
    </FilterBarDialogContext.Provider>
  );
};
