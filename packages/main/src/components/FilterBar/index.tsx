import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import React, {
  Children,
  cloneElement,
  CSSProperties,
  FC,
  forwardRef,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { BusyIndicator } from '../../webComponents/BusyIndicator';
import styles from './FilterBar.jss';
import { FilterDialog } from './FilterDialog';
import { addRef, renderSearchWithValue, setPropsOfChildren } from './utils';

export interface FilterBarPropTypes extends CommonProps {
  renderVariants?: () => JSX.Element;
  renderSearch?: () => ReactElement;
  useToolbar?: boolean;
  filterBarExpanded?: boolean;
  children: ReactNode | ReactNodeArray;
  filterContainerWidth?: CSSProperties['width'];
  considerGroupName?: boolean;
  showClearOnFB?: boolean;
  showGoOnFB?: boolean;
  showFilterConfiguration?: boolean;
  showClearButton?: boolean;
  showRestoreButton?: boolean;
  showGo?: boolean;
  activeFiltersCount: number | string;
  loading: boolean;
  showSearchOnDialog?: boolean;
  showRestoreOnFB?: boolean;

  //todo is implemented
  handleToggleFilters?: (e) => {};
  handleFiltersDialogSave?: (e) => {};
  handleFiltersDialogClear?: (e) => {};
  handleFiltersDialogOpen?: (e) => {};
  handleFiltersDialogClose?: (e) => {};
  handleFiltersDialogSelectionChange: (e) => {};
  handleFiltersDialogSearch: (e) => {};
  handleClear?: (e) => {};
  handleGo?: (e) => {};
  handleRestore?: (e) => {};
  //todo


}

interface FilterBarInternalProps extends FilterBarPropTypes, ClassProps {}

const useStyles = createComponentStyles(styles, { name: 'FilterBar' });

/**
 * <code>import { FilterBar } from '@ui5/webcomponents-react/lib/FilterBar';</code>
 */
const FilterBar: FC<FilterBarPropTypes> = forwardRef((props: FilterBarPropTypes, ref: RefObject<HTMLDivElement>) => {
  const {
    children,
    renderVariants,
    renderSearch,
    useToolbar,
    loading,
    filterBarExpanded,
    considerGroupName,
    filterContainerWidth,
    activeFiltersCount,
    showClearOnFB,
    showGoOnFB,
    showGo,
    showFilterConfiguration,
    showRestoreOnFB,
    showClearButton,
    showRestoreButton,
    showSearchOnDialog,

    handleToggleFilters,
    handleFiltersDialogOpen,
    handleFiltersDialogClose,
    handleFiltersDialogSave,
    handleFiltersDialogClear,
    handleClear,
    handleFiltersDialogSelectionChange,
    handleFiltersDialogSearch,
    handleGo,
    handleRestore
  } = props as FilterBarInternalProps;
  const [showFilters, setShowFilters] = useState(useToolbar ? filterBarExpanded : true);
  const [mountFilters, setMountFilters] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [filterRefs, setFilterRefs] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef(null);
  //todo imports
  const initChildrenWithRef = useCallback(() => {
    let filterRefs = [];
    const newChildren = Children.toArray(children)
      .filter(Boolean)
      .map((child) => {
        const childrenRef = (node) => {
          filterRefs.push({ node, key: child.key });
          return node;
        };
        const filterChildren = child.props.children;
        return cloneElement(child as ReactElement<any>, {
          children: {
            ...filterChildren,
            ref: childrenRef
          }
        });
      });
    setFilterRefs(filterRefs);
    return newChildren;
  }, [children, setFilterRefs]);

  const [childrenWithRef, setChildrenWithRef] = useState(initChildrenWithRef);

  useEffect(() => {
    setChildrenWithRef(initChildrenWithRef);
  }, [initChildrenWithRef, setChildrenWithRef]);

  const classes = useStyles();

  const filterAreaClasses = StyleClassHelper.of(classes.filterArea);
  if (showFilters) {
    filterAreaClasses.put(classes.filterAreaOpen);
  } else {
    filterAreaClasses.put(classes.filterAreaClosed);
  }

  const handleToggle = useCallback(
    (e) => {
      handleToggleFilters(Event.of(null, e.getOriginalEvent(), { visible: !showFilters }));
      setShowFilters(!showFilters);
    },
    [showFilters, handleToggleFilters, setShowFilters]
  );

  const handleToggleFilterVisible = useCallback((elements, children) => {
    const newChildren = children.map((child) => {
      const currentChild = elements.filter((item) => item.element.key === child.key)[0];
      if (currentChild) {
        return cloneElement(child as ReactElement<any>, {
          visibleInFilterBar: currentChild.event.parameters.checked
        });
      }
      return child;
    });
    return newChildren;
  }, []);

  const handleDialogSave = useCallback(
    (e, currentChildren, toggledElements) => {
      //todo Event.of
      let childrenWithNewProps = setPropsOfChildren(currentChildren, 'dialogRef');
      if (toggledElements) {
        childrenWithNewProps = handleToggleFilterVisible(toggledElements, childrenWithNewProps);
      }
      handleFiltersDialogSave(
        Event.of(null, e.getOriginalEvent(), { elements: childrenWithNewProps, toggledElements })
      );
      setChildrenWithRef(childrenWithNewProps);
      handleDialogClose(e);
    },
    [setPropsOfChildren, handleToggleFilterVisible, setChildrenWithRef, setDialogOpen, handleFiltersDialogSave]
  );

  const handleDialogOpen = useCallback(
    (e) => {
      handleFiltersDialogOpen(Event.of(null, e.getOriginalEvent()));
      setChildrenWithRef(setPropsOfChildren(addRef(childrenWithRef, filterRefs, 'filterBarRef'), 'filterBarRef'));
      setDialogOpen(true);
    },
    [handleFiltersDialogOpen, setPropsOfChildren, addRef, childrenWithRef, filterRefs, setDialogOpen]
  );

  const handleDialogClose = useCallback(
    (e) => {
      handleFiltersDialogClose(Event.of(null, e.getOriginalEvent()));
      setDialogOpen(false);
    },
    [setDialogOpen, handleFiltersDialogClose]
  );

  const passThroughProps = usePassThroughHtmlProps(props);

  const renderChildren = useCallback(() => {
    let childProps = { considerGroupName: considerGroupName, inFB: true };
    return childrenWithRef.map((child) => {
      if (filterContainerWidth) {
        childProps.style = { width: filterContainerWidth, ...child.props.style };
      }
      return cloneElement(child as ReactElement<any>, childProps);
    });
  }, [filterContainerWidth, considerGroupName, childrenWithRef]);

  const handleSearchValueChange = useCallback(
    (newVal) => {
      setSearchValue(newVal);
    },
    [setSearchValue]
  );

  const handleRestoreFilters = useCallback(
    (e, source) => {
      if (source === 'dialog' && showGo) {
        setDialogOpen(false);
        setDialogOpen(true);
      } else if (source === 'filterBar' && showGoOnFB) {
        setMountFilters(false);
        setMountFilters(true);
      }
      handleRestore(Event.of(null, e.getOriginalEvent(), { source }));
    },
    [setDialogOpen, showGo, showGoOnFB, handleRestore]
  );

  const handleFBRestore = useCallback(
    (e) => {
      handleRestoreFilters(e, 'filterBar');
    },
    [handleRestoreFilters]
  );

  return (
    <>
      {dialogOpen && showFilterConfiguration && (
        <FilterDialog
          open={dialogOpen}
          handleDialogClose={handleDialogClose}
          handleGo={handleGo}
          handleRestoreFilters={handleRestoreFilters}
          searchValue={searchRef.current?.children[0]._state.value}
          handleSearchValueChange={handleSearchValueChange}
          showClearButton={showClearButton}
          showRestoreButton={showRestoreButton}
          showSearch={showSearchOnDialog}
          renderFBSearch={renderSearch}
          handleToggleFilterVisible={handleToggleFilterVisible}
          handleClearFilters={handleFiltersDialogClear}
          handleSelectionChange={handleFiltersDialogSelectionChange}
          handleDialogSave={handleDialogSave}
          showGoButton={showGo}
          handleDialogSearch={handleFiltersDialogSearch}
        >
          {childrenWithRef}
        </FilterDialog>
      )}
      <div ref={ref} className={classes.outerContainer} {...passThroughProps}>
        {loading ? (
          <BusyIndicator active className={classes.loadingContainer} />
        ) : (
          <>
            <div className={classes.filterBarHeader}>
              {renderVariants && renderVariants()}
              {renderSearch && (
                <div className={classes.vLine} ref={searchRef}>
                  {renderSearchWithValue(renderSearch, searchValue)}
                </div>
              )}
              {useToolbar && (
                <div className={classes.headerRowRight}>
                  {showClearOnFB && (
                    <Button onClick={handleClear} design={ButtonDesign.Transparent}>
                      Clear
                    </Button>
                  )}
                  {showRestoreOnFB && (
                    <Button onClick={handleFBRestore} design={ButtonDesign.Transparent}>
                      Restore
                    </Button>
                  )}
                  <Button onClick={handleToggle} design={ButtonDesign.Transparent} className={classes.showFiltersBtn}>
                    {showFilters ? 'Hide Filter Bar' : 'Show Filter Bar'}
                  </Button>
                  {showFilterConfiguration && (
                    <Button onClick={handleDialogOpen}>
                      {`Filters${
                        activeFiltersCount && parseInt(activeFiltersCount) > 0 ? ` (${activeFiltersCount})` : ''
                      }`}
                    </Button>
                  )}
                  {showGoOnFB && (
                    <Button onClick={handleGo} design={ButtonDesign.Emphasized}>
                      Go
                    </Button>
                  )}
                </div>
              )}
            </div>
            {mountFilters && <div className={filterAreaClasses.valueOf()}>{renderChildren()}</div>}
          </>
        )}
      </div>
    </>
  );
});

FilterBar.defaultProps = {
  useToolbar: true,
  filterBarExpanded: true,
  showClearOnFB: false,
  showGo: false,
  showRestoreOnFB: false,
  showGoOnFB: false,
  showFilterConfiguration: false,
  showClearButton: false,
  showRestoreButton: false,
  showDialogSearch: false,
  considerGroupName: false,
  loading: false
};

FilterBar.displayName = 'FilterBar';
export { FilterBar };
