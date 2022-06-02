import '@ui5/webcomponents-icons/dist/clear-all.js';
import '@ui5/webcomponents-icons/dist/group-2.js';
import '@ui5/webcomponents-icons/dist/list.js';
import '@ui5/webcomponents-icons/dist/search.js';
import { enrichEventWithDetails, useI18nBundle } from '@ui5/webcomponents-react-base';
import { CssSizeVariables, ThemingParameters } from '@ui5/webcomponents-react-base/src';
import {
  BASIC,
  CANCEL,
  CLEAR,
  FILTERS,
  GO,
  RESTORE,
  SAVE,
  SEARCH_FOR_FILTERS,
  SHOW_ON_FILTER_BAR
} from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import React, { Children, cloneElement, useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { FlexBoxAlignItems, FlexBoxDirection, FlexBoxJustifyContent, TableMode } from '../../enums';
import { BarDesign } from '../../enums/BarDesign';
import { ButtonDesign } from '../../enums/ButtonDesign';
import { TitleLevel } from '../../enums/TitleLevel';
import { addCustomCSSWithScoping } from '../../internal/addCustomCSSWithScoping';
import { stopPropagation } from '../../internal/stopPropagation';
import { Panel, Table, TableCell, TableColumn, TableRow } from '../../webComponents';
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
import { Text } from '../Text';
import { Toolbar } from '../Toolbar';
import { ToolbarSpacer } from '../ToolbarSpacer';
import styles from './FilterBarDialog.jss';
import { filterValue, renderSearchWithValue, syncRef } from './utils';

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

//todo active is not implemented
const getActiveFilters = (activeFilterAttribute, filter) => {
  switch (activeFilterAttribute) {
    case 'all':
      return true;
    case 'visible':
      return filter.props?.visibleInFilterBar;
    case 'active':
      //todo
      return true;
    case 'visibleAndActive':
      //todo
      return true;
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
// todo "active" implementation
// todo required implementation
const useStyles = createUseStyles(styles, { name: 'FilterBarDialog' });
export const FilterDialogV2 = (props) => {
  const {
    filterBarRefs,
    open,
    handleDialogClose,
    children,
    showClearButton,
    showRestoreButton,
    showGoButton,
    showSearch,
    renderFBSearch,
    handleClearFilters,
    handleRestoreFilters,
    handleDialogSave,
    searchValue,
    handleSearchValueChange,
    onGo,
    handleSelectionChange,
    handleDialogSearch,
    handleDialogCancel,
    portalContainer,
    dialogRef
  } = props;
  const classes = useStyles();
  const [searchString, setSearchString] = useState('');
  const searchRef = useRef(null);
  const [toggledFilters, setToggledFilters] = useState({});
  const dialogRefs = useRef({});
  const dialogSearchRef = useRef(null);
  const [showValues, toggleValues] = useReducer((prev) => !prev, false);
  const [isListView, setIsListView] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState(null);
  const [filteredAttribute, setFilteredAttribute] = useState('all');

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const basicText = i18nBundle.getText(BASIC);
  const cancelText = i18nBundle.getText(CANCEL);
  const clearText = i18nBundle.getText(CLEAR);
  const restoreText = i18nBundle.getText(RESTORE);
  const saveText = i18nBundle.getText(SAVE);
  const searchForFiltersText = i18nBundle.getText(SEARCH_FOR_FILTERS);
  const showOnFilterBarText = i18nBundle.getText(SHOW_ON_FILTER_BAR);
  const filtersTitle = i18nBundle.getText(FILTERS);
  const goText = i18nBundle.getText(GO);

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

  const handleClose = (e) => {
    setSelectedFilters(null);
    stopPropagation(e);
    if (!showGoButton) {
      handleSave(e);
      return;
    }
    handleDialogClose(e);
  };

  const handleDialogGo = (e) => {
    if (typeof onGo === 'function') {
      handleSave(e, true);
    }
  };

  const handleCancel = (e) => {
    if (handleDialogCancel) {
      handleDialogCancel(enrichEventWithDetails(e));
    }
    handleDialogClose(e);
  };

  const getFilterElements = () => {
    const search = searchRef.current?.querySelector(`[data-component-name="FilterBarSearch"]`);
    return {
      filters: dialogFilterRefs.current,
      search,
      dialogSearch: dialogSearchRef.current
    };
  };

  const handleRestore = (e) => {
    handleRestoreFilters(e, 'dialog', getFilterElements());
  };

  const handleClear = (e) => {
    if (typeof handleClearFilters === 'function') {
      handleClearFilters(enrichEventWithDetails(e, getFilterElements()));
    }
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
          }
        >(child, {
          'data-with-values': showValues,
          'data-selected':
            selectedFilters !== null
              ? !!selectedFilters[child.key]
              : child.props.visibleInFilterBar || child.props.required || child.type.displayName !== 'FilterGroupItem',
          // todo key?
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

  //todo can be simplified?
  const handleCheckBoxChange = (e) => {
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
          <Panel headerText={item === 'default' ? basicText : item} className={classes.groupPanel}>
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
        // const filters = groups[item].map((el) => {
        //   return (
        //     <div
        //       data-component-name="FilterDialogSingleFilterContainer"
        //       className={classes.singleFilter}
        //       key={`${el.key}-container`}
        //       ref={(node) => {
        //         if (node) {
        //           dialogFilters.push(node.children?.[0]?.children?.[0]?.children?.[1]);
        //         }
        //       }}
        //     >
        //       {el}
        //       <CheckBox
        //         role="checkbox"
        //         checked={el.props.visibleInFilterBar || el.props.required || el.type.displayName !== 'FilterGroupItem'}
        //         onChange={handleCheckBoxChange(el)}
        //         disabled={el.props.required || el.type.displayName !== 'FilterGroupItem'}
        //       />
        //     </div>
        //   );
        // });
        // return (
        //   <div className={classes.groupContainer} key={item}>
        //     <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} alignItems={FlexBoxAlignItems.Center}>
        //       <Title
        //         level={TitleLevel.H5}
        //         className={index === 0 ? classes.groupTitle : ''}
        //         title={item === 'default' ? basicText : item}
        //       >
        //         {item === 'default' ? basicText : item}
        //       </Title>
        //       {index === 0 && <Text wrapping={false}>{showOnFilterBarText}</Text>}
        //     </FlexBox>
        //     <div className={classes.filters}>{filters}</div>
        //   </div>
        // );
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
      style={{ width: '40rem' }}
      className={classes.dialogComponent}
      header={
        <FlexBox
          alignItems={FlexBoxAlignItems.Center}
          className={classes.header}
          justifyContent={FlexBoxJustifyContent.SpaceBetween}
        >
          <Title level={TitleLevel.H4} title={filtersTitle}>
            {filtersTitle}
          </Title>
          {/*todo i18n, cb*/}
          <Button design={ButtonDesign.Transparent}>Reset</Button>
        </FlexBox>
      }
      footer={
        <Bar
          design={BarDesign.Footer}
          endContent={
            <FlexBox justifyContent={FlexBoxJustifyContent.End} className={classes.footer}>
              {showGoButton && (
                <Button
                  onClick={handleDialogGo}
                  design={ButtonDesign.Emphasized}
                  title={goText}
                  data-component-name="FilterBarDialogGoBtn"
                >
                  {goText}
                </Button>
              )}
              {showClearButton && (
                <Button onClick={handleClear} data-component-name="FilterBarDialogClearBtn">
                  {clearText}
                </Button>
              )}
              {showRestoreButton && (
                <Button onClick={handleRestore} data-component-name="FilterBarDialogRestoreBtn">
                  {restoreText}
                </Button>
              )}
              <Button onClick={handleSave} data-component-name="FilterBarDialogSaveBtn">
                {saveText}
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
      <FlexBox
        direction={FlexBoxDirection.Column}
        style={{ padding: '0 1rem', boxShadow: ThemingParameters.sapContent_HeaderShadow }}
      >
        {/*todo a11y maybe use header tags here*/}
        <Toolbar style={{ paddingBottom: '0.25rem' }} className={classes.subheader}>
          {/*// todo i18n, a11y*/}
          <Select onChange={handleAttributeFilterChange} title="Show Fields by Attribute">
            <Option selected={filteredAttribute === 'all'} data-id="all">
              All
            </Option>
            <Option selected={filteredAttribute === 'visible'} data-id="visible">
              Visible
            </Option>
            <Option selected={filteredAttribute === 'active'} data-id="active">
              Active
            </Option>
            <Option selected={filteredAttribute === 'visibleAndActive'} data-id="visibleAndActive">
              Visible and Active
            </Option>
            <Option selected={filteredAttribute === 'mandatory'} data-id="mandatory">
              Mandatory
            </Option>
          </Select>
          <ToolbarSpacer />
          <Button design={ButtonDesign.Transparent} onClick={toggleValues}>
            {showValues ? 'Hide Values' : 'Show Values'}
          </Button>
          <SegmentedButton onSelectionChange={handleViewChange}>
            {/*todo a11y i18n*/}
            <SegmentedButtonItem icon="list" data-id="list" pressed={isListView} />
            <SegmentedButtonItem icon="group-2" data-id="group" pressed={!isListView} />
          </SegmentedButton>
        </Toolbar>
        {showSearch && (
          <FlexBox style={{ height: CssSizeVariables.sapWcrToolbarHeight, paddingBottom: '0.25rem' }}>
            {/*todo  clear btn*/}
            <Input
              placeholder={searchForFiltersText}
              onInput={handleSearch}
              icon={<Icon name="search" />}
              ref={dialogSearchRef}
              style={{ width: '100%' }}
            />
          </FlexBox>
        )}
      </FlexBox>
      <Table
        data-component-name="FilterBarDialogTable"
        hideNoData={!isListView}
        className={classes.table}
        /*todo implement special handling for multi select in group view*/
        mode={TableMode.MultiSelect}
        onSelectionChange={handleCheckBoxChange}
        columns={
          //todo i18n
          <>
            <TableColumn>Field</TableColumn>
            {!showValues && (
              <TableColumn className={classes.tHactive} style={{ width: '25%' }}>
                Active
              </TableColumn>
            )}
          </>
        }
      >
        {isListView && renderChildren()}
      </Table>
      {!isListView && renderGroups()}
    </Dialog>,
    portalContainer
  );

  //todo old

  return createPortal(
    <Dialog
      ref={dialogRef}
      header={
        <FlexBox direction={FlexBoxDirection.Column} alignItems={FlexBoxAlignItems.Center} className={classes.header}>
          <Title level={TitleLevel.H4} title={filtersTitle}>
            {filtersTitle}
          </Title>
          {showSearch && (
            <Input
              placeholder={searchForFiltersText}
              onInput={handleSearch}
              icon={<Icon name="search" />}
              ref={dialogSearchRef}
            />
          )}
        </FlexBox>
      }
      footer={
        <Bar
          design={BarDesign.Footer}
          endContent={
            <FlexBox justifyContent={FlexBoxJustifyContent.End} className={classes.footer}>
              {showGoButton && (
                <Button
                  onClick={handleDialogGo}
                  design={ButtonDesign.Emphasized}
                  title={goText}
                  data-component-name="FilterBarDialogGoBtn"
                >
                  {goText}
                </Button>
              )}
              {showClearButton && (
                <Button onClick={handleClear} data-component-name="FilterBarDialogClearBtn">
                  {clearText}
                </Button>
              )}
              {showRestoreButton && (
                <Button onClick={handleRestore} data-component-name="FilterBarDialogRestoreBtn">
                  {restoreText}
                </Button>
              )}
              <Button onClick={handleSave} data-component-name="FilterBarDialogSaveBtn">
                {saveText}
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
      onAfterClose={handleClose}
      data-component-name="FilterBarDialog"
    >
      <div className={classes.dialog} data-component-name="FilterBarDialogContent">
        {renderFBSearch && (
          <div className={classes.fbSearch} ref={searchRef}>
            <span />
            {renderSearchWithValue(renderFBSearch, searchValue)}
          </div>
        )}
        {renderGroups()}
      </div>
    </Dialog>,
    portalContainer
  );
};
