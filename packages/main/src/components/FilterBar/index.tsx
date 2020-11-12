import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { useI18nText } from '@ui5/webcomponents-react-base/lib/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import {
  CLEAR,
  FILTERS,
  GO,
  HIDE_FILTER_BAR,
  RESTORE,
  SHOW_FILTER_BAR
} from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { InputPropTypes } from '@ui5/webcomponents-react/lib/Input';
import { Toolbar } from '@ui5/webcomponents-react/lib/Toolbar';
import { ToolbarSeparator } from '@ui5/webcomponents-react/lib/ToolbarSeparator';
import { ToolbarSpacer } from '@ui5/webcomponents-react/lib/ToolbarSpacer';
import { ToolbarStyle } from '@ui5/webcomponents-react/lib/ToolbarStyle';
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
import styles from './FilterBar.jss';
import { FilterDialog } from './FilterDialog';
import { filterValue, renderSearchWithValue } from './utils';

export interface FilterBarPropTypes extends CommonProps {
  /**
   * Defines the filters of the `FilterBar`.<br />
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FilterGroupItems` in order to preserve the intended design.
   */
  children: ReactNode | ReactNodeArray;
  /**
   * Defines the search field next to the variants of the `FilterBar`.
   */
  search?: ReactElement<InputPropTypes>;
  /**
   * Defines the variants of the `FilterBar`.<br />
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `VariantManagement` in order to preserve the intended design.
   */
  variants?: ReactNode;
  /**
   * Defines whether the button toolbar is displayed.
   */
  useToolbar?: boolean;
  /**
   * Defines whether the `FilterBar` is expanded.
   */
  filterBarExpanded?: boolean;
  /**
   * Defines the width of the `FilterGroupItems`.
   */
  filterContainerWidth?: CSSProperties['width'];
  /**
   * Defines whether the `groupName` of the `FilterGroupItems` is displayed.
   */
  considerGroupName?: boolean;
  /**
   * Defines whether the "Clear" button is displayed in the `FilterBar`.
   */
  showClearOnFB?: boolean;
  /**
   * Defines whether the "Go" button is displayed in the `FilterBar`.
   */
  showGoOnFB?: boolean;
  /**
   * Defines whether the "Filter" button is displayed in the `FilterBar`.<br />
   * __Note:__ Clicking on the button will open the filter configuration dialog, where you can add/remove filters to the `FilterBar`.
   */
  showFilterConfiguration?: boolean;
  /**
   * Defines whether the "Clear" button is displayed in the filter configuration dialog.
   */
  showClearButton?: boolean;
  /**
   * Defines whether the "Restore" button is displayed in the filter configuration dialog.
   */
  showRestoreButton?: boolean;
  /**
   * Defines whether the "Go" button is displayed in the filter configuration dialog.
   */
  showGo?: boolean;
  /**
   * Defines the number of active filters displayed in the "Filter" button.<br />
   * __Note__: If `showFilterConfiguration` is `false` this prop has no effect.
   */
  activeFiltersCount?: number | string;
  /**
   * Indicates whether a loading indicator should be shown in the `FilterBar`.
   */
  loading?: boolean;
  /**
   * Defines whether a search field for filters is displayed in the filter configuration dialog.
   */
  showSearchOnFiltersDialog?: boolean;
  /**
   * Defines whether the "Restore" button is displayed in the `FilterBar`.
   */
  showRestoreOnFB?: boolean;
  /**
   * The event is fired when the `FilterBar` is collapsed/expanded.
   */
  onToggleFilters?: (event: CustomEvent<{ visible?: boolean }>) => void;
  /**
   * The event is fired when the "Save" button of the filter configuration dialog is clicked.
   */
  onFiltersDialogSave?: (event: CustomEvent<{ elements?: unknown; toggledElements?: unknown }>) => void;
  /**
   * The event is fired when the "Clear" button of the filter configuration dialog is clicked.
   */
  onFiltersDialogClear?: (event: CustomEvent) => void;
  /**
   * The event is fired when the "Cancel" button of the filter configuration dialog is clicked.
   */
  onFiltersDialogCancel?: (event: CustomEvent) => void;
  /**
   * The event is fired when the filter configuration dialog is opened.
   */
  onFiltersDialogOpen?: (event: CustomEvent) => void;
  /**
   * The event is fired when the filter configuration dialog is closed.
   */
  onFiltersDialogClose?: (event: CustomEvent) => void;
  /**
   * The event is fired when a filter is selected/unselected in the filter configuration dialog.
   */
  onFiltersDialogSelectionChange?: (event: CustomEvent<{ element?: unknown; checked?: unknown }>) => void;
  /**
   * The event is fired on input in the filter configuration dialog search field.
   */
  onFiltersDialogSearch?: (event: CustomEvent<{ value?: unknown }>) => void;
  /**
   * The event is fired when the "Clear" button is clicked.
   */
  onClear?: (event: CustomEvent) => void;
  /**
   * The event is fired when the "Go" button is clicked.
   */
  onGo?: (event: CustomEvent) => void;
  /**
   * The event is fired when the "Restore" button is clicked.
   */
  onRestore?: (event: CustomEvent<{ source?: unknown }>) => void;
}

const useStyles = createComponentStyles(styles, { name: 'FilterBar' });
/**
 * The `FilterBar` displays filters in a user-friendly manner to populate values for a query. It consists of a row containing the `VariantManagement`, the related buttons, and an area underneath displaying the filters. The filters are arranged in a logical row that is divided depending on the space available and the width of the filters. The area containing the filters can be hidden or shown using the "Hide FilterBar / Show FilterBar" button, the "Filters" button shows the filter dialog.
 In this dialog, the consumer has full control over the FilterBar. The filters in this dialog are displayed in one column and organized in groups. Each filter can be marked as visible in the FilterBar by selecting "Add to FilterBar".
 */
const FilterBar: FC<FilterBarPropTypes> = forwardRef((props: FilterBarPropTypes, ref: RefObject<HTMLDivElement>) => {
  const {
    children,
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
    style,
    className,
    tooltip,
    slot,
    search,
    variants,

    onToggleFilters,
    onFiltersDialogOpen,
    onFiltersDialogCancel,
    onFiltersDialogClose,
    onFiltersDialogSave,
    onFiltersDialogClear,
    onClear,
    onFiltersDialogSelectionChange,
    onFiltersDialogSearch,
    onGo,
    onRestore
  } = props;
  const [showFilters, setShowFilters] = useState(useToolbar ? filterBarExpanded : true);
  const [mountFilters, setMountFilters] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>(undefined);
  const searchRef = useRef(null);
  const filterRefs = useRef({});
  const [dialogRefs, setDialogRefs] = useState({});
  const [toggledFilters, setToggledFilters] = useState({});
  const prevVisibleInFilterBarProps = useRef({});
  const prevSearchInputPropsValueRef = useRef<string>();

  const [clearText, restoreText, showFilterBarText, hideFilterBarText, goText, filtersText] = useI18nText(
    '@ui5/webcomponents-react',
    CLEAR,
    RESTORE,
    SHOW_FILTER_BAR,
    HIDE_FILTER_BAR,
    GO,
    FILTERS
  );

  useEffect(() => {
    Children.toArray(children).forEach((item: ReactElement<any>) => {
      setToggledFilters((prev) => {
        if (!item.props.hasOwnProperty('visibleInFilterBar') && prev?.[item.key] === undefined) {
          return { ...prev, [item.key]: true };
        }
        if (item.props.hasOwnProperty('visibleInFilterBar')) {
          return { ...prev, [item.key]: item.props.visibleInFilterBar };
        }
        return prev;
      });
    });
  }, [children, setToggledFilters]);

  useEffect(() => {
    setShowFilters(useToolbar ? filterBarExpanded : true);
  }, [setShowFilters, useToolbar, filterBarExpanded]);

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

  const handleDialogSave = useCallback(
    (e, newRefs, updatedToggledFilters) => {
      setDialogRefs(newRefs);
      setToggledFilters((old) => ({ ...old, ...updatedToggledFilters }));
      if (onFiltersDialogSave) {
        onFiltersDialogSave(
          enrichEventWithDetails(e, {
            elements: newRefs,
            toggledElements: { ...toggledFilters, ...updatedToggledFilters }
          })
        );
      }
      handleDialogClose(e);
    },
    [setDialogOpen, setDialogRefs, setToggledFilters, onFiltersDialogSave, toggledFilters]
  );

  const handleDialogOpen = useCallback(
    (e) => {
      setDialogOpen(true);
      if (onFiltersDialogOpen) {
        onFiltersDialogOpen(enrichEventWithDetails(e));
      }
    },
    [setDialogOpen, onFiltersDialogOpen]
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

  const passThroughProps = usePassThroughHtmlProps(props, [
    'onToggleFilters',
    'onFiltersDialogOpen',
    'onFiltersDialogClose',
    'onFiltersDialogSave',
    'onFiltersDialogClear',
    'onClear',
    'onFiltersDialogSelectionChange',
    'onFiltersDialogSearch',
    'onGo',
    'onRestore',
    'onFiltersDialogCancel'
  ]);

  const safeChildren = useCallback(() => {
    if (Object.keys(toggledFilters).length > 0) {
      return Children.toArray(children).map((child: ReactElement) => {
        if (toggledFilters?.[child.key] !== undefined) {
          return cloneElement(child, {
            visibleInFilterBar: toggledFilters[child.key]
          });
        }
        return child;
      });
    }
    return Children.toArray(children) as unknown[];
  }, [toggledFilters, children]);

  const prevChildren = useRef({});

  const renderChildren = useCallback(() => {
    const childProps = { considerGroupName, inFB: true } as any;
    return safeChildren()
      .filter((item: ReactElement<any, any>) => {
        return item?.props?.visible && item.props?.visibleInFilterBar;
      })
      .map((child: ReactElement<any, any>) => {
        if (filterContainerWidth) {
          childProps.style = { width: filterContainerWidth, ...child.props.style };
        }
        if (!showFilterConfiguration) {
          return cloneElement(child as ReactElement<any>, { ...childProps });
        }
        prevVisibleInFilterBarProps.current[child.key] = child.props.visibleInFilterBar;
        let filterItemProps = {};
        if (Object.keys(dialogRefs).length > 0) {
          const dialogItemRef = dialogRefs[child.key];
          if (dialogItemRef) {
            filterItemProps = filterValue(dialogItemRef, child);
          }
        }
        if (!child.props.children) {
          return cloneElement(child as ReactElement<any>, {
            ...childProps
          });
        }
        if (
          prevChildren.current?.[child.key] &&
          //Input
          (child.props.children?.props?.value !== prevChildren.current?.[child.key]?.value ||
            //Combobox
            child.props.children?.props?.filterValue !== prevChildren.current?.[child.key]?.filterValue ||
            //Checkbox
            child.props.children?.props?.checked !== prevChildren.current?.[child.key]?.checked ||
            //Selectable
            child.props.children?.props?.children?.map((item) => item.props.selected).join(',') !==
              prevChildren?.current?.[child.key]?.children?.map((item) => item.props.selected).join(','))
        ) {
          // @ts-ignore
          const { [child.key]: omit, ...rest } = dialogRefs;
          setDialogRefs(rest);
        }
        prevChildren.current[child.key] = child.props.children.props;

        return cloneElement(child as ReactElement<any>, {
          ...childProps,
          children: {
            ...child.props.children,
            props: {
              ...child.props.children.props,
              ...filterItemProps
            },
            ref: (node) => {
              filterRefs.current[child.key] = node;
            }
          }
        });
      });
  }, [filterContainerWidth, considerGroupName, dialogRefs, safeChildren, showFilterConfiguration]);

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
        onRestore(enrichEventWithDetails(e, { source }));
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

  const cssClasses = StyleClassHelper.of(classes.outerContainer);
  if (className) {
    cssClasses.put(className);
  }
  if (filterContainerWidth) {
    cssClasses.put(classes.filterItemExpand);
  }

  useEffect(() => {
    prevSearchInputPropsValueRef.current = search?.props?.value;
  }, [search?.props?.value]);

  const prevSearchInputPropsValue = prevSearchInputPropsValueRef.current;

  useEffect(() => {
    if (prevSearchInputPropsValue !== search?.props?.value) {
      setSearchValue(search?.props?.value);
    }
  }, [prevSearchInputPropsValue, search?.props?.value]);

  return (
    <>
      {dialogOpen && showFilterConfiguration && (
        <FilterDialog
          filterBarRefs={filterRefs}
          open={dialogOpen}
          handleDialogClose={handleDialogClose}
          onGo={onGo}
          handleRestoreFilters={handleRestoreFilters}
          searchValue={searchRef.current?.children[0].value}
          handleSearchValueChange={handleSearchValueChange}
          showClearButton={showClearButton}
          showRestoreButton={showRestoreButton}
          showSearch={showSearchOnFiltersDialog}
          renderFBSearch={search}
          handleClearFilters={onFiltersDialogClear}
          handleSelectionChange={onFiltersDialogSelectionChange}
          handleDialogSave={handleDialogSave}
          showGoButton={showGo}
          handleDialogSearch={onFiltersDialogSearch}
          handleDialogCancel={onFiltersDialogCancel}
        >
          {safeChildren()}
        </FilterDialog>
      )}
      <div ref={ref} className={cssClasses.toString()} style={style} title={tooltip} slot={slot} {...passThroughProps}>
        {loading ? (
          <BusyIndicator active className={classes.loadingContainer} size={BusyIndicatorSize.Large} />
        ) : (
          <>
            <Toolbar className={classes.filterBarHeader} toolbarStyle={ToolbarStyle.Clear}>
              {variants}
              {search && <ToolbarSeparator />}
              {search && <div ref={searchRef}>{renderSearchWithValue(search, searchValue)}</div>}
              <ToolbarSpacer />
              {useToolbar && showClearOnFB && (
                <Button onClick={onClear} design={ButtonDesign.Transparent}>
                  {clearText}
                </Button>
              )}
              {useToolbar && showRestoreOnFB && (
                <Button onClick={handleFBRestore} design={ButtonDesign.Transparent}>
                  {restoreText}
                </Button>
              )}
              {useToolbar && (
                <Button onClick={handleToggle} design={ButtonDesign.Transparent} className={classes.showFiltersBtn}>
                  {showFilters ? hideFilterBarText : showFilterBarText}
                </Button>
              )}
              {useToolbar && showFilterConfiguration && (
                <Button onClick={handleDialogOpen}>
                  {`${filtersText}${
                    activeFiltersCount && parseInt(activeFiltersCount as string) > 0 ? ` (${activeFiltersCount})` : ''
                  }`}
                </Button>
              )}
              {useToolbar && showGoOnFB && (
                <Button onClick={onGo} design={ButtonDesign.Emphasized}>
                  {goText}
                </Button>
              )}
            </Toolbar>
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
  onFiltersDialogCancel: null,
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
