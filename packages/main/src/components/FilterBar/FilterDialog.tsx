import '@ui5/webcomponents-icons/dist/icons/search';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
// import { Input } from '@ui5/webcomponents-react/lib/Input';

import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import React, { Children, cloneElement, ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { CheckBox, FlexBoxAlignItems, Icon, TitleLevel, Input } from '../..';
import styles from './FilterBarDialog.jss';
import { addRef, renderSearchWithValue, setPropsOfChildren } from './utils';

//todo check dependencies arrays
const useStyles = createUseStyles(styles, { name: 'FilterBar' });
export const FilterDialog = (props) => {
  const {
    open,
    handleClose,
    children,
    showClearButton,
    showRestoreButton,
    showGoButton,
    showSearch,
    renderFBSearch,
    handleToggleFilterVisible,
    handleClearFilters,
    handleRestoreFilters,
    handleDialogSave,
    searchValue,
    handleSearchValueChange
  } = props;
  const classes = useStyles();
  const [searchString, setSearchString] = useState('');
  const [refs, setRefs] = useState([]);
  const searchRef = useRef(null);

  const initRefs = useCallback(() => {
    let refs = [];
    const newChildren = children.map((child, index) => {
      const childrenRef = (node) => {
        refs.push({ node, key: child.key });
        return node;
      };
      const filterChildren = child.props.children;
      return cloneElement(child as ReactElement<any>, {
        children: { ...filterChildren, ref: childrenRef }
      });
    });
    setRefs(refs);
    return newChildren;
  }, []);

  const [childrenWithNewRef, setChildrenWithRef] = useState(initRefs);

  useEffect(() => {
    setChildrenWithRef(children);
  }, [children]);

  const handleSearch = useCallback(
    (e) => {
      setSearchString(e.parameters.value);
    },
    [setSearchString]
  );
  const handleSave = useCallback(() => {
    handleDialogSave(addRef(childrenWithNewRef, refs, 'dialogRef'));
    handleSearchValueChange(searchRef.current?.children[1]._state.value);
  }, [handleDialogSave, childrenWithNewRef, refs]);

  const renderFooter = useCallback(() => {
    return (
      <FlexBox justifyContent={FlexBoxJustifyContent.End} className={classes.footer}>
        {showGoButton && <Button design={ButtonDesign.Emphasized}>Go</Button>}
        {showClearButton && <Button onClick={handleClearFilters}>Clear</Button>}
        {showRestoreButton && <Button onClick={handleRestore}>Restore</Button>}
        <Button onClick={handleSave}>Save</Button>
        <Button design={ButtonDesign.Transparent} onClick={handleClose}>
          Cancel
        </Button>
      </FlexBox>
    );
  }, [
    showClearButton,
    showRestoreButton,
    classes.footer,
    showGoButton,
    handleSave,
    handleClose,
    handleRestoreFilters,
    handleClearFilters
  ]);

  const renderHeader = useCallback(
    () => (
      <FlexBox direction={FlexBoxDirection.Column} className={classes.header}>
        <Title level={TitleLevel.H4}>Filters</Title>
        {showSearch && <Input placeholder="Search for Filters" onInput={handleSearch} icon={<Icon name="search" />} />}
      </FlexBox>
    ),
    [classes.header, showSearch, handleSearch]
  );

  const handleRestore = useCallback(() => {
    console.log('restore');
    //todo
    setChildrenWithRef(setPropsOfChildren(childrenWithNewRef, 'filterBarRef'));
  }, [childrenWithNewRef, setChildrenWithRef]);

  useEffect(() => {
    console.log(childrenWithNewRef);
  }, [childrenWithNewRef]);

  const renderChildren = useCallback(() => {
    const currentChildren = childrenWithNewRef
      .map((child) => {
        if (child.props.label?.toLowerCase().includes(searchString.toLowerCase()) || searchString.length === 0) {
          return child;
        }
      })
      .filter(Boolean);
    return currentChildren;
  }, [childrenWithNewRef, searchString]);

  const handleCheckBoxChange = useCallback(
    (element) => (e) => {
      handleToggleFilterVisible(e, element);
    },
    [handleToggleFilterVisible]
  );

  const renderSearch = useCallback(() => {
    return renderSearchWithValue(renderFBSearch, searchValue);
  }, [renderFBSearch, searchValue]);

  const renderGroups = useCallback(() => {
    let groups = {};
    Children.forEach(renderChildren(), (child) => {
      const childGroups = child.props.groupName;
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
            <div className={classes.singleFilter}>
              {el}
              <CheckBox
                checked={el.props.visibleInFilterBar || el.props.mandatory}
                onChange={handleCheckBoxChange(el)}
                disabled={el.props.mandatory}
              />
            </div>
          );
        });
        return (
          <div className={classes.groupContainer}>
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
  }, [renderChildren]);

  return (
    <Dialog open={open} onAfterClose={handleClose} header={renderHeader()} footer={renderFooter()}>
      <div className={classes.dialog}>
        {renderFBSearch && (
          <div className={classes.fbSearch} ref={searchRef}>
            <span />
            {renderSearch()}
          </div>
        )}
        {renderGroups()}
      </div>
    </Dialog>
  );
};
