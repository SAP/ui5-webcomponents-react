import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
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
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import styles from './FilterBar.jss';
import { FilterDialog } from './FilterDialog';
import { addRef, renderSearchWithValue, setPropsOfChildren } from './utils';

export interface FilterBarPropTypes extends CommonProps {
  children: ReactNode | ReactNodeArray;
  renderVariants?: () => JSX.Element;
  renderSearch?: () => ReactElement;
  useToolbar?: boolean;
  filterBarExpanded?: boolean;
  filterContainerWidth?: CSSProperties['width'];
  considerGroupName?: boolean;
  showClearOnFB?: boolean;
  showGoOnFB?: boolean;
  showFilterConfiguration?: boolean;
  showClearButton?: boolean;
  showRestoreButton?: boolean;
  showGo?: boolean;
  activeFiltersCount?: number | string;
  loading?: boolean;
  showSearchOnFiltersDialog?: boolean;
  showRestoreOnFB?: boolean;
  onToggleFilters?: (event: CustomEvent<{ visible?: boolean }>) => void;
  onFiltersDialogSave?: (event: CustomEvent<{ elements?: unknown; toggledElements?: unknown }>) => void;
  onFiltersDialogClear?: (event: CustomEvent) => void;
  onFiltersDialogOpen?: (event: CustomEvent) => void;
  onFiltersDialogClose?: (event: CustomEvent) => void;
  onFiltersDialogSelectionChange?: (event: CustomEvent<{ element?: unknown; checked?: unknown }>) => void;
  onFiltersDialogSearch?: (event: CustomEvent<{ value?: unknown }>) => void;
  onClear?: (event: CustomEvent) => void;
  onGo?: (event: CustomEvent) => void;
  onRestore?: (event: CustomEvent<{ source?: unknown }>) => void;
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
    showSearchOnFiltersDialog,

    onToggleFilters,
    onFiltersDialogOpen,
    onFiltersDialogClose,
    onFiltersDialogSave,
    onFiltersDialogClear,
    onClear,
    onFiltersDialogSelectionChange,
    onFiltersDialogSearch,
    onGo,
    onRestore
  } = props as FilterBarInternalProps;
  const [showFilters, setShowFilters] = useState(useToolbar ? filterBarExpanded : true);
  const [mountFilters, setMountFilters] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [filterRefs, setFilterRefs] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef(null);

  useEffect(() => {
    setShowFilters(useToolbar ? filterBarExpanded : true);
  }, [setShowFilters, useToolbar, filterBarExpanded]);

  const initChildrenWithRef = useCallback(() => {
    let innerFilterRefs = [];
    const newChildren = Children.toArray(children)
      .filter(Boolean)
      .map((child, index) => {
        const childrenRef = (node) => {
          innerFilterRefs.push({ node, key: child.key });
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
    setFilterRefs(innerFilterRefs);
    return newChildren;
  }, []);

  const [childrenWithRef, setChildrenWithRef] = useState(initChildrenWithRef);

  useEffect(() => {
    setChildrenWithRef(Children.toArray(children).filter(Boolean));
  }, [children, setChildrenWithRef]);

  const classes = useStyles();

  const filterAreaClasses = StyleClassHelper.of(classes.filterArea);
  if (showFilters) {
    filterAreaClasses.put(classes.filterAreaOpen);
  } else {
    filterAreaClasses.put(classes.filterAreaClosed);
  }

  const handleToggle = useCallback(
    (e) => {
      if (onToggleFilters) {
        onToggleFilters(enrichEventWithDetails(e, { visible: !showFilters }));
      }
      setShowFilters(!showFilters);
    },
    [showFilters, onToggleFilters, setShowFilters]
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
      let childrenWithNewProps = setPropsOfChildren(currentChildren, 'dialogRef');
      if (toggledElements) {
        childrenWithNewProps = handleToggleFilterVisible(toggledElements, childrenWithNewProps);
      }
      if (onFiltersDialogSave) {
        onFiltersDialogSave(enrichEventWithDetails(e, { elements: childrenWithNewProps, toggledElements }));
      }
      setChildrenWithRef(childrenWithNewProps);
      handleDialogClose(e);
    },
    [setPropsOfChildren, handleToggleFilterVisible, setChildrenWithRef, setDialogOpen, onFiltersDialogSave]
  );

  const handleDialogOpen = useCallback(
    (e) => {
      setChildrenWithRef(setPropsOfChildren(addRef(childrenWithRef, filterRefs, 'filterBarRef'), 'filterBarRef'));
      setDialogOpen(true);
      if (onFiltersDialogOpen) {
        onFiltersDialogOpen(enrichEventWithDetails(e));
      }
    },
    [setChildrenWithRef, childrenWithRef, filterRefs, setDialogOpen, onFiltersDialogOpen]
  );

  const handleDialogClose = useCallback(
    (e) => {
      if (onFiltersDialogClose) {
        onFiltersDialogClose(enrichEventWithDetails(e));
      }
      setDialogOpen(false);
    },
    [setDialogOpen, onFiltersDialogClose]
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
      if (onRestore) {
        onRestore(enrichEventWithDetails(e.getOriginalEvent(), { source }));
      }
    },
    [setDialogOpen, showGo, showGoOnFB, onRestore]
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
          onGo={onGo}
          handleRestoreFilters={handleRestoreFilters}
          searchValue={searchRef.current?.children[0]._state?.value}
          handleSearchValueChange={handleSearchValueChange}
          showClearButton={showClearButton}
          showRestoreButton={showRestoreButton}
          showSearch={showSearchOnFiltersDialog}
          renderFBSearch={renderSearch}
          handleToggleFilterVisible={handleToggleFilterVisible}
          handleClearFilters={onFiltersDialogClear}
          handleSelectionChange={onFiltersDialogSelectionChange}
          handleDialogSave={handleDialogSave}
          showGoButton={showGo}
          handleDialogSearch={onFiltersDialogSearch}
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
                    <Button onClick={onClear} design={ButtonDesign.Transparent}>
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
                    <Button onClick={onGo} design={ButtonDesign.Emphasized}>
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
  showSearchOnFiltersDialog: false,
  considerGroupName: false,
  loading: false,
  onToggleFilters: null,
  onFiltersDialogOpen: null,
  onFiltersDialogClose: null,
  onFiltersDialogSave: null,
  onFiltersDialogClear: null,
  onClear: null,
  onFiltersDialogSelectionChange: null,
  onFiltersDialogSearch: null,
  onGo: null,
  onRestore: null
};

FilterBar.displayName = 'FilterBar';
export { FilterBar };
