import '@ui5/webcomponents-icons/dist/search';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { useI18nText } from '@ui5/webcomponents-react-base/lib/hooks';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import {
  BASIC,
  CANCEL,
  CLEAR,
  RESTORE,
  SAVE,
  SEARCH_FOR_FILTERS,
  SHOW_ON_FILTER_BAR
} from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import { BarDesign } from '@ui5/webcomponents-react/lib/BarDesign';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React, { Children, cloneElement, ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Ui5DialogDomRef } from '../../interfaces/Ui5DialogDomRef';
import { stopPropagation } from '../../internal/stopPropagation';
import styles from './FilterBarDialog.jss';
import { filterValue, renderSearchWithValue } from './utils';
import { createPortal } from 'react-dom';

const useStyles = createComponentStyles(styles, { name: 'FilterBarDialog' });
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
    handleDialogCancel
  } = props;
  const classes = useStyles();
  const [searchString, setSearchString] = useState('');
  const searchRef = useRef(null);
  const [toggledFilters, setToggledFilters] = useState({});
  const dialogRefs = useRef({});
  const dialogRef = useRef<Ui5DialogDomRef>();

  const [
    basicText,
    cancelText,
    clearText,
    restoreText,
    saveText,
    searchForFiltersText,
    showOnFilterBarText
  ] = useI18nText(
    '@ui5/webcomponents-react',
    BASIC,
    CANCEL,
    CLEAR,
    RESTORE,
    SAVE,
    SEARCH_FOR_FILTERS,
    SHOW_ON_FILTER_BAR
  );

  useEffect(() => {
    if (open) {
      dialogRef.current.open();
    }
  }, [open]);

  const handleSearch = useCallback(
    (e) => {
      if (handleDialogSearch) {
        handleDialogSearch(enrichEventWithDetails(e, { value: e.target.value }));
      }
      setSearchString(e.target.value);
    },
    [setSearchString, handleDialogSearch]
  );
  const handleSave = useCallback(
    (e) => {
      if (renderFBSearch) {
        handleSearchValueChange(searchRef.current?.children[1].value);
      }
      handleDialogSave(e, dialogRefs.current, toggledFilters);
    },
    [renderFBSearch, handleSearchValueChange, searchRef, handleDialogSave, toggledFilters, dialogRefs]
  );

  const handleClose = useCallback(
    (e) => {
      stopPropagation(e);
      if (!showGoButton) {
        handleSave(e);
        return;
      }
      handleDialogClose(e);
    },
    [showGoButton, handleSave, handleDialogClose]
  );

  const handleDialogGo = useCallback(
    (e) => {
      if (onGo) {
        onGo(enrichEventWithDetails(e));
      }
      handleDialogClose(e);
    },
    [onGo, handleDialogClose]
  );

  const handleRestore = useCallback(
    (e) => {
      handleRestoreFilters(e, 'dialog');
    },
    [handleRestoreFilters]
  );

  const handleCancel = useCallback(
    (e) => {
      if (handleDialogCancel) {
        handleDialogCancel(enrichEventWithDetails(e));
      }
      handleDialogClose(e);
    },
    [handleDialogCancel]
  );

  const footerContentRight = useMemo(
    () => (
      <FlexBox justifyContent={FlexBoxJustifyContent.End} className={classes.footer}>
        {showGoButton && (
          <Button onClick={handleDialogGo} design={ButtonDesign.Emphasized}>
            Go
          </Button>
        )}
        {showClearButton && <Button onClick={handleClearFilters}>{clearText}</Button>}
        {showRestoreButton && <Button onClick={handleRestore}>{restoreText}</Button>}
        <Button onClick={handleSave}>{saveText}</Button>
        <Button design={ButtonDesign.Transparent} onClick={handleCancel}>
          {cancelText}
        </Button>
      </FlexBox>
    ),
    [
      showGoButton,
      classes.footer,
      handleDialogGo,
      showClearButton,
      handleClearFilters,
      showRestoreButton,
      handleRestore,
      handleSave,
      handleCancel
    ]
  );

  const renderFooter = useCallback(() => {
    return <Bar design={BarDesign.Footer} contentRight={footerContentRight} />;
  }, [footerContentRight]);

  const renderHeader = useCallback(
    () => (
      <FlexBox direction={FlexBoxDirection.Column} alignItems={FlexBoxAlignItems.Center} className={classes.header}>
        <Title level={TitleLevel.H4}>Filters</Title>
        {showSearch && (
          <Input placeholder={searchForFiltersText} onInput={handleSearch} icon={<Icon name="search" />} />
        )}
      </FlexBox>
    ),
    [classes.header, showSearch, handleSearch]
  );

  const renderChildren = useCallback(() => {
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
              dialogRefs.current[child.key] = node;
            }
          }
        });
      });
  }, [children, searchString, filterBarRefs]);

  const handleCheckBoxChange = useCallback(
    (element) => (e) => {
      if (handleSelectionChange) {
        handleSelectionChange(enrichEventWithDetails(e, { element, checked: e.target.checked }));
      }
      setToggledFilters((old) => ({ ...old, [element.key]: e.target.checked }));
    },
    [setToggledFilters, handleSelectionChange]
  );
  const renderGroups = useCallback(() => {
    let groups = {};
    Children.forEach(renderChildren(), (child) => {
      const childGroups = child.props.groupName ?? 'default';
      if (groups[childGroups]) {
        groups[childGroups].push(child);
      } else {
        groups[childGroups] = [child];
      }
    });
    return Object.keys(groups)
      .sort((x, y) => (x === 'default' ? -1 : y === 'role' ? 1 : 0))
      .map((item, index) => {
        const filters = groups[item].map((el) => {
          return (
            <div className={classes.singleFilter} key={`${el.key}-container`}>
              {el}
              <CheckBox
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
              <Title level={TitleLevel.H5} className={index === 0 ? classes.groupTitle : ''}>
                {item === 'default' ? basicText : item}
              </Title>
              {index === 0 && <Text wrapping={false}>{showOnFilterBarText}</Text>}
            </FlexBox>
            <div className={classes.filters}>{filters}</div>
          </div>
        );
      });
  }, [renderChildren, toggledFilters, handleCheckBoxChange]);

  return createPortal(
    <Dialog ref={dialogRef} header={renderHeader()} footer={renderFooter()} onAfterClose={handleClose}>
      <div className={classes.dialog}>
        {renderFBSearch && (
          <div className={classes.fbSearch} ref={searchRef}>
            <span />
            {renderSearchWithValue(renderFBSearch, searchValue)}
          </div>
        )}
        {renderGroups()}
      </div>
    </Dialog>,
    document.body
  );
};
