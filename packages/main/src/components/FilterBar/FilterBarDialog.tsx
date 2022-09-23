import '@ui5/webcomponents-icons/dist/clear-all.js';
import '@ui5/webcomponents-icons/dist/group-2.js';
import '@ui5/webcomponents-icons/dist/list.js';
import '@ui5/webcomponents-icons/dist/search.js';
import { enrichEventWithDetails, useI18nBundle } from '@ui5/webcomponents-react-base';
import React, { Children, cloneElement, useEffect, useReducer, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { ButtonDesign, FlexBoxAlignItems, FlexBoxDirection, FlexBoxJustifyContent, TableMode } from '../../enums';
import { BarDesign } from '../../enums/BarDesign';
import { TitleLevel } from '../../enums/TitleLevel';
import {
  ACTIVE,
  ALL,
  BASIC,
  CANCEL,
  FIELD,
  FIELDS_BY_ATTRIBUTE,
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
} from '../../i18n/i18n-defaults';
import { addCustomCSSWithScoping } from '../../internal/addCustomCSSWithScoping';
import { stopPropagation } from '../../internal/stopPropagation';
import { Panel, Table, TableColumn } from '../../webComponents';
import { Bar } from '../../webComponents/Bar';
import { Button } from '../../webComponents/Button';
import { Dialog } from '../../webComponents/Dialog';
import { Icon } from '../../webComponents/Icon';
import { Input } from '../../webComponents/Input';
import { Option } from '../../webComponents/Option';
import { SegmentedButton } from '../../webComponents/SegmentedButton';
import { SegmentedButtonItem } from '../../webComponents/SegmentedButtonItem';
import { Select } from '../../webComponents/Select';
import { Title } from '../../webComponents/Title';
import { FilterGroupItem, FilterGroupItemPropTypes } from '../FilterGroupItem';
import { FlexBox } from '../FlexBox';
import { Toolbar } from '../Toolbar';
import { ToolbarSpacer } from '../ToolbarSpacer';
import styles from './FilterBarDialog.jss';
import { filterValue, syncRef } from './utils';

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

:host([data-component-name="FilterBarDialogPanelTable"]) .ui5-table-root {
  border-bottom: none;
}
/* don't display select all checkbox */
:host([data-component-name="FilterBarDialogPanelTable"]) thead th.ui5-table-select-all-column [ui5-checkbox],
:host([data-component-name="FilterBarDialogTable"]) thead th.ui5-table-select-all-column [ui5-checkbox] {
 visibility: hidden;
}
 `
);

//todo: remove this when it's possible to disable the selection of a row (https://github.com/SAP/ui5-webcomponents/issues/5662)
addCustomCSSWithScoping(
  'ui5-table-row',
  `:host([data-fbd-disabled="true"]) .ui5-table-multi-select-cell [ui5-checkbox] { pointer-events: none;}`
);

//todo: add method to customize select
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

// todo enhance types
interface FilterDialogPropTypes {
  filterBarRefs: any;
  open: boolean;
  handleDialogClose: any;
  children: any;
  showRestoreButton: boolean;
  showSearch: boolean;
  renderFBSearch: any;
  handleRestoreFilters: any;
  handleDialogSave: any;
  handleSearchValueChange: any;
  handleSelectionChange: any;
  handleDialogSearch: any;
  handleDialogCancel: any;
  portalContainer: any;
  dialogRef: any;
  isListView: boolean;
  setIsListView: any;
  filteredAttribute: string;
  setFilteredAttribute: any;
}

export const FilterDialog = (props: FilterDialogPropTypes) => {
  const {
    filterBarRefs,
    open,
    handleDialogClose,
    children,
    showRestoreButton,
    showSearch,
    renderFBSearch,
    handleRestoreFilters,
    handleDialogSave,
    handleSearchValueChange,
    handleSelectionChange,
    handleDialogSearch,
    handleDialogCancel,
    portalContainer,
    dialogRef,
    isListView,
    setIsListView,
    filteredAttribute,
    setFilteredAttribute
  } = props;
  const classes = useStyles();
  const [searchString, setSearchString] = useState('');
  const searchRef = useRef(null);
  const [toggledFilters, setToggledFilters] = useState({});
  const dialogRefs = useRef({});
  const dialogSearchRef = useRef(null);
  const [showValues, toggleValues] = useReducer((prev) => !prev, false);
  const [selectedFilters, setSelectedFilters] = useState(null);

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

  useEffect(() => {
    if (open) {
      dialogRef.current.show();
    }
  }, [open]);

  const handleSearch = (e) => {
    if (handleDialogSearch) {
      handleDialogSearch(enrichEventWithDetails(e, { value: e.target.value, element: e.target }));
    }
    setSearchString(e.target.value);
  };
  const handleSave = (e, go = false) => {
    if (renderFBSearch) {
      handleSearchValueChange(searchRef.current?.children[1].value);
    }
    if (go) {
      handleDialogSave(e, dialogRefs.current, toggledFilters, true);
    } else {
      handleDialogSave(e, dialogRefs.current, toggledFilters);
    }
  };

  const handleClose = (e, isCancel = false) => {
    setSelectedFilters(null);
    stopPropagation(e);
    if (!isCancel) {
      handleSave(e);
      return;
    }
    handleDialogClose(e);
  };

  const handleCancel = (e) => {
    if (handleDialogCancel) {
      handleDialogCancel(enrichEventWithDetails(e));
    }
    handleDialogClose(e, true);
  };

  const getFilterElements = () => {
    return {
      filters: dialogFilterRefs.current,
      dialogSearch: dialogSearchRef.current
    };
  };

  const handleRestore = (e) => {
    setSelectedFilters(null);
    handleRestoreFilters(e, 'dialog', getFilterElements());
  };

  const handleViewChange = (e) => {
    setIsListView(e.detail.selectedItem.dataset.id === 'list');
  };

  const renderChildren = () => {
    return children
      .filter((item) => {
        return (
          !!item?.props &&
          item.props?.visible &&
          (item.props?.label?.toLowerCase().includes(searchString.toLowerCase()) || searchString.length === 0) &&
          getActiveFilters(filteredAttribute, item)
        );
      })
      .map((child) => {
        const filterBarItemRef = filterBarRefs.current[child.key];
        let filterItemProps = {};
        if (filterBarItemRef) {
          filterItemProps = filterValue(filterBarItemRef, child);
        }
        if (!child.props.children) return child;
        return cloneElement<
          FilterGroupItemPropTypes & {
            'data-with-values': boolean;
            'data-selected': boolean;
            'data-react-key': boolean;
          }
        >(child, {
          'data-with-values': showValues,
          'data-selected':
            selectedFilters !== null
              ? !!selectedFilters?.[child.key]?.selected
              : child.props.visibleInFilterBar || child.props.required || child.type.displayName !== 'FilterGroupItem',
          'data-react-key': child.key,
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

  const handleAttributeFilterChange = (e) => {
    setFilteredAttribute(e.detail.selectedOption.dataset.id);
  };

  const handleCheckBoxChange = (e) => {
    e.preventDefault();
    const prevRowsByKey = e.detail.previouslySelectedRows.reduce(
      (acc, prevSelRow) => ({ ...acc, [prevSelRow.dataset.reactKey]: prevSelRow }),
      {}
    );
    const rowsByKey = e.detail.selectedRows.reduce(
      (acc, selRow) => ({ ...acc, [selRow.dataset.reactKey]: selRow }),
      {}
    );
    setSelectedFilters({ ...prevRowsByKey, ...rowsByKey });

    const changedRowKey =
      e.detail.previouslySelectedRows > e.detail.selectedRows
        ? compareObjects(prevRowsByKey, rowsByKey)
        : compareObjects(rowsByKey, prevRowsByKey);

    const element = rowsByKey[changedRowKey] || prevRowsByKey[changedRowKey];

    if (typeof handleSelectionChange === 'function') {
      //todo breaking change, element was previously react component
      handleSelectionChange(enrichEventWithDetails(e, { element, checked: element.selected }));
    }

    setToggledFilters((prev) => {
      return { ...prev, [changedRowKey]: element.selected };
    });
  };
  const dialogFilterRefs = useRef([]);
  const renderGroups = () => {
    const groups = {};
    let dialogFilters = [];
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
              className={classes.table}
              mode={TableMode.MultiSelect}
              data-component-name="FilterBarDialogPanelTable"
              onSelectionChange={handleCheckBoxChange}
            >
              {groups[item]}
            </Table>
          </Panel>
        );
      });
    dialogFilterRefs.current = dialogFilters;
    return filterGroups;
  };

  return createPortal(
    <Dialog
      ref={dialogRef}
      data-component-name="FilterBarDialog"
      onAfterClose={handleClose}
      resizable
      draggable
      className={classes.dialogComponent}
      preventFocusRestore
      header={
        <FlexBox
          alignItems={FlexBoxAlignItems.Center}
          className={classes.header}
          justifyContent={FlexBoxJustifyContent.SpaceBetween}
        >
          <Title level={TitleLevel.H4} title={filtersTitle}>
            {filtersTitle}
          </Title>
          {showRestoreButton && (
            <Button design={ButtonDesign.Transparent} onClick={handleRestore}>
              {resetText}
            </Button>
          )}
        </FlexBox>
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
        <Toolbar className={classes.subheader}>
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
          <Button design={ButtonDesign.Transparent} onClick={toggleValues}>
            {showValues ? hideValuesText : showValuesText}
          </Button>
          <SegmentedButton onSelectionChange={handleViewChange}>
            <SegmentedButtonItem icon="list" data-id="list" pressed={isListView} accessibleName={listViewText} />
            <SegmentedButtonItem icon="group-2" data-id="group" pressed={!isListView} accessibleName={groupViewText} />
          </SegmentedButton>
        </Toolbar>
        {showSearch && (
          <FlexBox className={classes.searchInputContainer}>
            <Input
              noTypeahead
              placeholder={searchForFiltersText}
              onInput={handleSearch}
              showClearIcon
              icon={<Icon name="search" />}
              ref={dialogSearchRef}
              className={classes.searchInput}
            />
          </FlexBox>
        )}
      </FlexBox>
      <Table
        data-component-name="FilterBarDialogTable"
        hideNoData={!isListView}
        className={classes.table}
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
    portalContainer
  );
};
