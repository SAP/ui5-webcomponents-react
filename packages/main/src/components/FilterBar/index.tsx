import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
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
  useRef,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
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

  //todo naming
  showDialogSearch?: boolean;
  //todo
  showRestoreOnFB?: boolean;
  handleDialogOpen?: () => {};
  handleDialogClose?: () => {};
  handleReset?: () => {};
  handleRestore?: () => {};
  loading: boolean;
}

interface FilterBarInternalProps extends FilterBarPropTypes, ClassProps {}

const useStyles = createUseStyles(styles, { name: 'FilterBar' });

/**
 * <code>import { FilterBar } from '@ui5/webcomponents-react/lib/FilterBar';</code>
 */
const FilterBar: FC<FilterBarPropTypes> = forwardRef((props: FilterBarPropTypes, ref: RefObject<HTMLDivElement>) => {
  const {
    children,
    renderVariants,
    renderSearch,
    useToolbar,
    filterBarExpanded,
    considerGroupName,
    filterContainerWidth,
    showClearOnFB,
    showGoOnFB,
    showGo,
    showFilterConfiguration,
    showRestoreOnFB,
    showClearButton,
    showRestoreButton,
    showDialogSearch
  } = props as FilterBarInternalProps;
  const [showFilters, setShowFilters] = useState(useToolbar ? filterBarExpanded : true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [filterRefs, setFilterRefs] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef(null);

  //todo change to useEffect
  const initRef = useCallback(() => {
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

  const [activeChildren, setActiveChildren] = useState(initRef);

  const classes = useStyles();

  const handleHideFilterBar = useCallback(() => {
    setShowFilters(!showFilters);
  }, [showFilters]);

  const filterAreaClasses = StyleClassHelper.of(classes.filterArea);
  if (showFilters) {
    filterAreaClasses.put(classes.filterAreaOpen);
  } else {
    filterAreaClasses.put(classes.filterAreaClosed);
  }

  const handleDialogSave = (currentChildren) => {
    //todo Event.of
    setActiveChildren(setPropsOfChildren(currentChildren, 'dialogRef'));
    setDialogOpen(false);
  };

  const handleDialogOpen = () => {
    //todo Event.of
    setActiveChildren(setPropsOfChildren(addRef(activeChildren, filterRefs, 'filterBarRef'), 'filterBarRef'));
    setDialogOpen(true);
  };

  const handleDialogClose = useCallback(() => {
    //todo Event.of
    setDialogOpen(false);
  }, [setDialogOpen]);

  const handleClearFilters = useCallback(() => {
    //todo Event.of

  }, []);
  const handleRestoreFilters = useCallback(() => {
    //todo Event.of
  }, []);
  const handleToggleFilterVisible = useCallback(
    (e, element) => {
      //todo Event.of
      const checked = e.parameters.checked;
      const newChildren = activeChildren.map((child) => {
        if (child.key === element.key) {
          return cloneElement(child as ReactElement<any>, {
            visibleInFilterBar: checked
          });
        }
        return child;
      });
      setActiveChildren(newChildren);
    },
    [activeChildren, setActiveChildren]
  );
  const handleGo = useCallback(() => {
    //todo Event.of
  }, []);

  const passThroughProps = usePassThroughHtmlProps(props);

  const renderChildren = useCallback(() => {
    let childProps = { considerGroupName: considerGroupName, inFB: true };
    return activeChildren.map((child) => {
      if (filterContainerWidth) {
        childProps.style = { width: filterContainerWidth, ...child.props.style };
      }
      return cloneElement(child as ReactElement<any>, childProps);
    });
  }, [filterContainerWidth, considerGroupName, activeChildren]);

  const handleSearchValueChange = useCallback(
    (newVal) => {
      console.log(newVal);
      setSearchValue(newVal);
    },
    [setSearchValue]
  );

  return (
    <>
      <FilterDialog
        handleClose={handleDialogClose}
        searchValue={searchRef.current?.children[0]._state.value}
        handleSearchValueChange={handleSearchValueChange}
        open={dialogOpen}
        showClearButton={showClearButton}
        showRestoreButton={showRestoreButton}
        showSearch={showDialogSearch}
        renderFBSearch={renderSearch}
        handleToggleFilterVisible={handleToggleFilterVisible}
        handleClearFilters={handleClearFilters}
        handleRestoreFilters={handleRestoreFilters}
        handleDialogSave={handleDialogSave}
        showGoButton={showGo}
      >
        {activeChildren}
      </FilterDialog>
      <div ref={ref} className={classes.outerContainer} {...passThroughProps}>
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
                <Button onClick={handleClearFilters} design={ButtonDesign.Transparent}>
                  Clear
                </Button>
              )}
              {showRestoreOnFB && (
                <Button onClick={handleRestoreFilters} design={ButtonDesign.Transparent}>
                  Restore
                </Button>
              )}
              <Button onClick={handleHideFilterBar} design={ButtonDesign.Transparent}>
                {showFilters ? 'Hide Filter Bar' : 'Show Filter Bar'}
              </Button>
              {showFilterConfiguration && <Button onClick={handleDialogOpen}>Filters (X)</Button>}
              {showGoOnFB && <Button design={ButtonDesign.Emphasized}>Go</Button>}
            </div>
          )}
        </div>
        <div className={filterAreaClasses.valueOf()}>{renderChildren()}</div>
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
  considerGroupName: false
};

FilterBar.displayName = 'FilterBar';
export { FilterBar };
