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
import React, {
  Children,
  cloneElement,
  ReactElement,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { FlexBoxAlignItems, FlexBoxDirection, FlexBoxJustifyContent, FlexBoxWrap, ListMode } from '../../enums';
import { BarDesign } from '../../enums/BarDesign';
import { ButtonDesign } from '../../enums/ButtonDesign';
import { TitleLevel } from '../../enums/TitleLevel';
import { stopPropagation } from '../../internal/stopPropagation';
import { CustomListItem, List } from '../../webComponents';
import { Bar } from '../../webComponents/Bar';
import { Button } from '../../webComponents/Button';
import { CheckBox } from '../../webComponents/CheckBox';
import { Dialog } from '../../webComponents/Dialog';
import { Icon } from '../../webComponents/Icon';
import { Input } from '../../webComponents/Input';
import { Option } from '../../webComponents/Option';
import { SegmentedButton } from '../../webComponents/SegmentedButton';
import { SegmentedButtonItem } from '../../webComponents/SegmentedButtonItem';
import { Select } from '../../webComponents/Select';
import { Title } from '../../webComponents/Title';
import { FilterGroupItemPropTypes } from '../FilterGroupItem';
import { FlexBox } from '../FlexBox';
import { Text } from '../Text';
import { Toolbar } from '../Toolbar';
import { ToolbarSpacer } from '../ToolbarSpacer';
import styles from './FilterBarDialog.jss';
import { filterValue, renderSearchWithValue, syncRef } from './utils';

//todo doesn't work
const userEvent = (e, type, child) => {
  if (typeof child.props.children.props?.[type] === 'function') {
    child.props.children.props[type](e);
  }
};

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
  //todo init false
  const [showValues, toggleValues] = useReducer((prev) => !prev, true);
  const [selectedItems, setSelectedItems] = useState({});
  const [set, setSet] = useState(true);
  const [selectedItem, setSelectedItem] = useState(true);

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

  const timeout = useRef();

  const renderChildren = () => {
    return children
      .filter((item) => {
        return (
          !!item?.props &&
          item.props?.visible &&
          (item.props?.label?.toLowerCase().includes(searchString.toLowerCase()) || searchString.length === 0)
        );
      })
      .map((child) => {
        const filterBarItemRef = filterBarRefs.current[child.key];
        let filterItemProps = {};
        if (filterBarItemRef) {
          filterItemProps = filterValue(filterBarItemRef, child);
        }
        if (!child.props.children) return child;
        return cloneElement<FilterGroupItemPropTypes & { 'data-with-values': boolean; 'data-selected': boolean }>(
          child,
          {
            'data-with-values': showValues,
            'data-selected': selectedItem,
            children: {
              ...child.props.children,
              props: {
                ...child.props.children.props,
                ...filterItemProps,
                onClick: (e) => {
                  clearTimeout(timeout.current);
                  userEvent(e, 'onClick', child);
                },
                onKeyDown: (e) => {
                  if (e.code === 'Enter' || e.code === 'Space') {
                    clearTimeout(timeout.current);
                  }
                  // todo: workaround for https://github.com/SAP/ui5-webcomponents/issues/974
                  if (e.code === 'Space') {
                    e.target.value += ' ';
                  }
                  userEvent(e, 'onKeyDown', child);
                },
                onKeyUp: (e) => {
                  if (e.code === 'Enter' || e.code === 'Space') {
                    clearTimeout(timeout.current);
                  }
                  userEvent(e, 'onKeyUp', child);
                }
              },
              ref: (node) => {
                if (node) {
                  dialogRefs.current[child.key] = node;
                  syncRef(child.props.children.ref, node);
                }
              }
            }
          }
        );
      });
  };

  const handleCheckBoxChange = useCallback(
    (element) => (e) => {
      if (handleSelectionChange) {
        handleSelectionChange(enrichEventWithDetails(e, { element, checked: e.target.checked }));
      }
      setToggledFilters((old) => ({ ...old, [element.key]: e.target.checked }));
    },
    [setToggledFilters, handleSelectionChange]
  );
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
        const filters = groups[item].map((el) => {
          return (
            <div
              data-component-name="FilterDialogSingleFilterContainer"
              className={classes.singleFilter}
              key={`${el.key}-container`}
              ref={(node) => {
                if (node) {
                  dialogFilters.push(node.children?.[0]?.children?.[0]?.children?.[1]);
                }
              }}
            >
              {el}
              <CheckBox
                role="checkbox"
                checked={el.props.visibleInFilterBar || el.props.required || el.type.displayName !== 'FilterGroupItem'}
                onChange={handleCheckBoxChange(el)}
                disabled={el.props.required || el.type.displayName !== 'FilterGroupItem'}
              />
            </div>
          );
        });
        return (
          <div className={classes.groupContainer} key={item}>
            <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} alignItems={FlexBoxAlignItems.Center}>
              <Title
                level={TitleLevel.H5}
                className={index === 0 ? classes.groupTitle : ''}
                title={item === 'default' ? basicText : item}
              >
                {item === 'default' ? basicText : item}
              </Title>
              {index === 0 && <Text wrapping={false}>{showOnFilterBarText}</Text>}
            </FlexBox>
            <div className={classes.filters}>{filters}</div>
          </div>
        );
      });
    dialogFilterRefs.current = dialogFilters;
    return filterGroups;
  };

  console.log(selectedItem);

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
          {/*// todo i18n, cb*/}
          <Select>
            <Option selected>All</Option>
          </Select>
          <ToolbarSpacer />
          <Button design={ButtonDesign.Transparent} onClick={toggleValues}>
            {showValues ? 'Hide Values' : 'Show Values'}
          </Button>
          <SegmentedButton>
            <SegmentedButtonItem icon="list" />
            <SegmentedButtonItem icon="group-2" />
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
      <List
        onItemClick={(e) => {
          // e.isMarked = 'button';
          // todo save the clicked item here, add a timeout and cancel it if filter item is clicked
          e.preventDefault();
          timeout.current = setTimeout(() => {
            setSelectedItem((prev) => !prev);
          });
          console.log('li-click', e);
        }}
        //todo change visible items
        onSelectionChange={(e) => {
          console.log('change', e);

          // setSelectedItems(
          //   e.detail.selectedItems.reduce(
          //     (acc: Record<string, any>, cur: HTMLElement) => ({ ...acc, [cur.dataset.uuid]: true }),
          //     {}
          //   )
          // );
          // if (typeof handleSelectionChange === 'function') {
          //   //todo element was rect node previously, check how this can be achieved
          //   handleSelectionChange(enrichEventWithDetails(e, { element, checked: e.target.checked }));
          // }
          // setToggledFilters((old) => ({ ...old, [element.key]: e.target.checked }));
          // console.log(e, e.detail.selectedItems, e.detail.previouslySelectedItems);
        }}
        mode={ListMode.MultiSelect}
        header={
          <FlexBox
            alignItems={FlexBoxAlignItems.Center}
            //todo rtl
            style={{
              paddingLeft: '0.5rem',
              paddingRight: '1rem',
              height: 'var(--_ui5_list_item_base_height)',
              backgroundColor: ThemingParameters.sapList_HeaderBackground
            }}
            wrap={FlexBoxWrap.NoWrap}
          >
            <Icon
              interactive
              name="clear-all"
              style={{ cursor: 'pointer', padding: '0 var(--_ui5_checkbox_wrapper_padding)' }}
            />
            <FlexBox style={{ flexGrow: 1 }}>
              <Text style={{ flexBasis: '80%' }}>Filter</Text>
              {!showValues && <Text style={{ flexGrow: 1, textAlign: 'center' }}>Active</Text>}
            </FlexBox>
          </FlexBox>
        }
      >
        {renderChildren()}
      </List>
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
