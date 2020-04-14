import '@ui5/webcomponents-icons/dist/icons/search';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
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
import React, { Children, cloneElement, ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import styles from './FilterBarDialog.jss';
import { filterValue, renderSearchWithValue } from './utils';

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
    handleDialogCancel,
  } = props;
  const classes = useStyles();
  const [searchString, setSearchString] = useState('');
  const searchRef = useRef(null);
  const [toggledFilters, setToggledFilters] = useState({});
  const dialogRefs = useRef({});
  const dialogRef = useRef();

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

  const renderFooterContentRight = useCallback(
    () => (
      <FlexBox justifyContent={FlexBoxJustifyContent.End} className={classes.footer}>
        {showGoButton && (
          <Button onClick={handleDialogGo} design={ButtonDesign.Emphasized}>
            Go
          </Button>
        )}
        {showClearButton && <Button onClick={handleClearFilters}>Clear</Button>}
        {showRestoreButton && <Button onClick={handleRestore}>Restore</Button>}
        <Button onClick={handleSave}>Save</Button>
        <Button design={ButtonDesign.Transparent} onClick={handleCancel}>
          Cancel
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
      handleCancel,
    ]
  );

  const renderFooter = useCallback(() => {
    return <Bar design={BarDesign.Footer} renderContentRight={renderFooterContentRight} />;
  }, [renderFooterContentRight]);

  const renderHeader = useCallback(
    () => (
      <FlexBox direction={FlexBoxDirection.Column} className={classes.header}>
        <Title level={TitleLevel.H4}>Filters</Title>
        {showSearch && <Input placeholder="Search for Filters" onInput={handleSearch} icon={<Icon name="search" />} />}
      </FlexBox>
    ),
    [classes.header, showSearch, handleSearch]
  );

  const renderChildren = useCallback(() => {
    const currentChildren = children
      .filter((item) => {
        if (item.type.displayName !== 'FilterGroupItem') return true; //needed for deprecated FilterItem or custom elements
        return (
          !!item?.props &&
          item.props?.visible &&
          (item.props?.label?.toLowerCase().includes(searchString.toLowerCase()) || searchString.length === 0)
        );
      })
      .map((child) => {
        if (child.type.displayName !== 'FilterGroupItem') return child; //needed for deprecated FilterItem or custom elements
        const filterBarItemRef = filterBarRefs.current[child.key];
        let filterItemProps = {};
        if (filterBarItemRef) {
          filterItemProps = filterValue(filterBarItemRef, child);
        }
        return cloneElement(child as ReactElement<any>, {
          children: {
            ...child.props.children,
            props: {
              ...child.props.children.props,
              ...filterItemProps,
            },
            ref: (node) => {
              dialogRefs.current[child.key] = node;
            },
          },
        });
      });

    return currentChildren;
  }, [children, searchString, filterBarRefs]);

  const handleCheckBoxChange = useCallback(
    (element, toggledFilters) => (e) => {
      if (handleSelectionChange) {
        handleSelectionChange(enrichEventWithDetails(e, { element, checked: e.target.checked }));
      }
      setToggledFilters({ ...toggledFilters, [element.key]: e.target.checked });
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
                onChange={handleCheckBoxChange(el, toggledFilters)}
                disabled={el.props.required || el.type.displayName !== 'FilterGroupItem'}
              />
            </div>
          );
        });
        return (
          <div className={classes.groupContainer} key={item}>
            <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} alignItems={FlexBoxAlignItems.Center}>
              <Title level={TitleLevel.H5} className={index === 0 ? classes.groupTitle : ''}>
                {item === 'default' ? 'Basic' : item}
              </Title>
              {index === 0 && <Text wrapping={false}>Show on Filter Bar</Text>}
            </FlexBox>
            <div className={classes.filters}>{filters}</div>
          </div>
        );
      });
  }, [renderChildren, toggledFilters, handleCheckBoxChange]);

  return (
    <Dialog ref={dialogRef} onAfterClose={handleClose} header={renderHeader()} footer={renderFooter()}>
      <div className={classes.dialog}>
        {renderFBSearch && (
          <div className={classes.fbSearch} ref={searchRef}>
            <span />
            {renderSearchWithValue(renderFBSearch, searchValue)}
          </div>
        )}
        {renderGroups()}
      </div>
    </Dialog>
  );
};
