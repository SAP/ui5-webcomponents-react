import group2Icon from '@ui5/webcomponents-icons/dist/group-2.js';
import listIcon from '@ui5/webcomponents-icons/dist/list.js';
import searchIcon from '@ui5/webcomponents-icons/dist/search.js';
import { enrichEventWithDetails, useI18nBundle, useIsomorphicId } from '@ui5/webcomponents-react-base';
import React, { Children, cloneElement, useEffect, useReducer, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import {
  BarDesign,
  ButtonDesign,
  FlexBoxDirection,
  FlexBoxJustifyContent,
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
import type { Ui5CustomEvent } from '../../interfaces/index.js';
import { addCustomCSSWithScoping } from '../../internal/addCustomCSSWithScoping.js';
import { useCanRenderPortal } from '../../internal/ssr.js';
import { stopPropagation } from '../../internal/stopPropagation.js';
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
import type { FilterGroupItemPropTypes } from '../FilterGroupItem/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { Toolbar } from '../Toolbar/index.js';
import { ToolbarSpacer } from '../ToolbarSpacer/index.js';
import styles from './FilterBarDialog.jss.js';
import { filterValue, syncRef } from './utils.js';

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
  handleDialogSave: (e, newRefs, updatedToggledFilters) => void;
  handleSearchValueChange: React.Dispatch<React.SetStateAction<string>>;
  handleSelectionChange?: (
    event: Ui5CustomEvent<
      TableDomRef,
      { element: TableRowDomRef; checked: boolean; selectedRows: unknown[]; previouslySelectedRows: unknown[] }
    >
  ) => void;
  handleDialogSearch?: (event: CustomEvent<{ value: string; element: HTMLElement }>) => void;
  handleDialogCancel?: (event: Ui5CustomEvent<HTMLElement>) => void;
  portalContainer: Element;
  dialogRef: React.MutableRefObject<DialogDomRef>;
  isListView: boolean;
  setIsListView: React.Dispatch<React.SetStateAction<boolean>>;
  filteredAttribute: string;
  setFilteredAttribute: React.Dispatch<React.SetStateAction<string>>;
  onAfterFiltersDialogOpen: (event: Ui5CustomEvent<DialogDomRef>) => void;
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
    isListView,
    setIsListView,
    filteredAttribute,
    setFilteredAttribute
  } = props;
  const classes = useStyles();
  const uniqueId = useIsomorphicId();
  const [searchString, setSearchString] = useState('');
  const [toggledFilters, setToggledFilters] = useState({});
  const dialogRefs = useRef({});
  const dialogSearchRef = useRef(null);
  const [showValues, toggleValues] = useReducer((prev) => !prev, false);

  const [forceRequired, setForceRequired] = useState<undefined | TableRowDomRef>();

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

  const handleSearch = (e) => {
    if (handleDialogSearch) {
      handleDialogSearch(enrichEventWithDetails(e, { value: e.target.value, element: e.target }));
    }
    setSearchString(e.target.value);
  };
  const handleSave = (e) => {
    handleDialogSave(e, dialogRefs.current, toggledFilters);
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

  const handleRestore = (e) => {
    setToggledFilters({});
    handleRestoreFilters(e, 'dialog', { filters: Array.from(dialogRef.current.querySelectorAll('ui5-table-row')) });
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

        let isSelected =
          child.props.visibleInFilterBar || child.props.required || child.type.displayName !== 'FilterGroupItem';
        if (Object.hasOwn(toggledFilters, child.key)) {
          isSelected = toggledFilters[child.key];
        }

        return cloneElement<
          FilterGroupItemPropTypes & {
            'data-with-values': boolean;
            'data-selected': boolean;
            'data-react-key': boolean;
          }
        >(child, {
          'data-with-values': showValues,
          'data-selected': isSelected,
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

    if (!e.target.hasAttribute('ui5-table')) {
      return;
    }
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

  return createPortal(
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
            <SegmentedButtonItem icon={listIcon} data-id="list" pressed={isListView} accessibleName={listViewText} />
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
  );
};
