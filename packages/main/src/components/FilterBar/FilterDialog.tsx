import '@ui5/webcomponents-icons/dist/search.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base/dist/hooks';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';
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
import { Bar } from '@ui5/webcomponents-react/dist/Bar';
import { BarDesign } from '@ui5/webcomponents-react/dist/BarDesign';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/dist/ButtonDesign';
import { CheckBox } from '@ui5/webcomponents-react/dist/CheckBox';
import { Dialog } from '@ui5/webcomponents-react/dist/Dialog';
import { FlexBox } from '@ui5/webcomponents-react/dist/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/dist/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/dist/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/dist/FlexBoxJustifyContent';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import { Input } from '@ui5/webcomponents-react/dist/Input';
import { Text } from '@ui5/webcomponents-react/dist/Text';
import { Title } from '@ui5/webcomponents-react/dist/Title';
import { TitleLevel } from '@ui5/webcomponents-react/dist/TitleLevel';
import { DialogDomRef } from '@ui5/webcomponents-react/dist/Dialog';
import React, { Children, cloneElement, ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { stopPropagation } from '../../internal/stopPropagation';
import styles from './FilterBarDialog.jss';
import { filterValue, renderSearchWithValue, syncRef } from './utils';

const useStyles = createUseStyles(styles, { name: 'FilterBarDialog' });
export const FilterDialog = (props) => {
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
    portalContainer
  } = props;
  const classes = useStyles();
  const [searchString, setSearchString] = useState('');
  const searchRef = useRef(null);
  const [toggledFilters, setToggledFilters] = useState({});
  const dialogRefs = useRef({});
  const dialogRef = useRef<DialogDomRef>();
  const dialogSearchRef = useRef(null);

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
        return cloneElement(child as ReactElement<any>, {
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
                <Button onClick={handleDialogGo} design={ButtonDesign.Emphasized} title={goText}>
                  {goText}
                </Button>
              )}
              {showClearButton && <Button onClick={handleClear}>{clearText}</Button>}
              {showRestoreButton && <Button onClick={handleRestore}>{restoreText}</Button>}
              <Button onClick={handleSave}>{saveText}</Button>
              <Button design={ButtonDesign.Transparent} onClick={handleCancel}>
                {cancelText}
              </Button>
            </FlexBox>
          }
        />
      }
      onAfterClose={handleClose}
    >
      <div className={classes.dialog} role="dialog">
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
