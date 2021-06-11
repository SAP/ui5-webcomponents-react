import { useConsolidatedRef, useI18nBundle, useIsRTL } from '@ui5/webcomponents-react-base/dist/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import { debounce, enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';
import {
  CLEAR,
  FILTERS,
  ADAPT_FILTERS,
  GO,
  HIDE_FILTER_BAR,
  RESTORE,
  SHOW_FILTER_BAR
} from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { BusyIndicator } from '@ui5/webcomponents-react/dist/BusyIndicator';
import { BusyIndicatorSize } from '@ui5/webcomponents-react/dist/BusyIndicatorSize';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/dist/ButtonDesign';
import { InputPropTypes } from '@ui5/webcomponents-react/dist/Input';
import { Toolbar } from '@ui5/webcomponents-react/dist/Toolbar';
import { ToolbarSeparator } from '@ui5/webcomponents-react/dist/ToolbarSeparator';
import { ToolbarSpacer } from '@ui5/webcomponents-react/dist/ToolbarSpacer';
import { ToolbarStyle } from '@ui5/webcomponents-react/dist/ToolbarStyle';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, {
  Children,
  cloneElement,
  CSSProperties,
  FC,
  forwardRef,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import styles from './FilterBar.jss';
import { FilterDialog } from './FilterDialog';
import { filterValue, renderSearchWithValue } from './utils';

export interface FilterBarPropTypes extends CommonProps {
  /**
   * Defines the filters of the `FilterBar`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FilterGroupItems` in order to preserve the intended design.
   */
  children: ReactNode | ReactNodeArray;
  /**
   * Defines the search field next to the variants of the `FilterBar`.
   *
   * __Note:__ If `useToolbar` is `false` this prop has no effect.
   */
  search?: ReactElement<InputPropTypes>;
  /**
   * Defines the variants of the `FilterBar`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `VariantManagement` in order to preserve the intended design.
   * __Note:__ If `useToolbar` is `false` this prop has no effect.
   */
  variants?: ReactNode;
  /**
   * Defines whether the toolbar on top of the filter items is displayed.
   *
   * __Note__: If set to `false`, `variants`, `search` and the "Hide/Show FilterBar" button are not available and the rest of the buttons are moved to the bottom right side of the filter area.
   */
  useToolbar?: boolean;
  /**
   * Defines whether the `FilterBar` is expanded.
   */
  filterBarExpanded?: boolean;
  /**
   * Defines the width of the `FilterGroupItems`.
   *
   * __Note:__ If your filter elements (e.g. `DateRangePicker`) have an internal `minWidth`, please make sure to overwrite it with `minWidth:'auto'` or the corresponding `filterContainerWidth` otherwise it can lead to unintended behavior.
   * __Note:__ This prop is not supported with IE11, there it defaults to `13.125rem`.
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
   * Defines whether the "Filter" button is displayed in the `FilterBar`.
   *
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
   * Defines whether the "Hide/Show Filters" button is displayed in the `FilterBar`.
   *
   * __Note:__ If `useToolbar` is `false` this prop has no effect.
   */
  hideToggleFiltersButton?: boolean;
  /**
   * Defines the number of active filters displayed in the "Filter" button.
   *
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
  onClear?: MouseEventHandler<HTMLButtonElement>;
  /**
   * The event is fired when the "Go" button is clicked.
   */
  onGo?: MouseEventHandler<HTMLButtonElement>;
  /**
   * The event is fired when the "Restore" button is clicked.
   */
  onRestore?: (event: CustomEvent<{ source?: unknown }>) => void;
}

const resizeObserverEntryWidth = (entry) => {
  if (entry.borderBoxSize) {
    // Firefox implements `borderBoxSize` as a single content rect, rather than an array
    return Array.isArray(entry.borderBoxSize) ? entry.borderBoxSize[0]?.inlineSize : entry.borderBoxSize?.inlineSize;
  }
  // Safari doesn't implement `borderBoxSize`
  return entry?.target.getBoundingClientRect().width;
};

const useStyles = createUseStyles(styles, { name: 'FilterBar' });
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
    hideToggleFiltersButton,
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
  const filterBarButtonsRef = useRef(null);
  const filterAreaRef = useRef(null);
  const filterBarRef = useConsolidatedRef<HTMLDivElement>(ref);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const clearText = i18nBundle.getText(CLEAR);
  const restoreText = i18nBundle.getText(RESTORE);
  const showFilterBarText = i18nBundle.getText(SHOW_FILTER_BAR);
  const hideFilterBarText = i18nBundle.getText(HIDE_FILTER_BAR);
  const goText = i18nBundle.getText(GO);
  const filtersText = useToolbar ? i18nBundle.getText(FILTERS) : i18nBundle.getText(ADAPT_FILTERS);

  const isRtl = useIsRTL(filterBarRef);
  const transformRightRTL = isRtl ? 'Left' : 'Right';

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
    const childProps = { considerGroupName, ['data-in-fb']: true, ['data-with-toolbar']: useToolbar } as any;
    return safeChildren()
      .filter((item: ReactElement<any, any>) => {
        return item?.props?.visible && item.props?.visibleInFilterBar;
      })
      .map((child: ReactElement<any, any>) => {
        // necessary because of varying widths of input elements
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
  }, [filterContainerWidth, considerGroupName, dialogRefs, safeChildren, showFilterConfiguration, useToolbar]);

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
  if (useToolbar) {
    cssClasses.put(classes.outerContainerWithToolbar);
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

  const ToolbarButtons = (
    <>
      {showClearOnFB && (
        <Button onClick={onClear} design={ButtonDesign.Transparent}>
          {clearText}
        </Button>
      )}
      {showRestoreOnFB && (
        <Button onClick={handleFBRestore} design={ButtonDesign.Transparent}>
          {restoreText}
        </Button>
      )}
      {!hideToggleFiltersButton && useToolbar && (
        <Button onClick={handleToggle} design={ButtonDesign.Transparent} className={classes.showFiltersBtn}>
          {showFilters ? hideFilterBarText : showFilterBarText}
        </Button>
      )}
      {showFilterConfiguration && (
        <Button onClick={handleDialogOpen} aria-haspopup="dialog">
          {`${filtersText}${
            activeFiltersCount && parseInt(activeFiltersCount as string) > 0 ? ` (${activeFiltersCount})` : ''
          }`}
        </Button>
      )}
      {showGoOnFB && (
        <Button onClick={onGo} design={ButtonDesign.Emphasized}>
          {goText}
        </Button>
      )}
    </>
  );
  const hasButtons = ToolbarButtons.props.children.some(Boolean);

  const [filterBarButtonsWidth, setFilterBarButtonsWidth] = useState(undefined);
  const [filterAreaWidth, setFilterAreaWidth] = useState(undefined);
  const [firstChildWidth, setFirstChildWidth] = useState(undefined);

  useEffect(() => {
    const filterAreaObserver = new ResizeObserver(
      debounce(([area]) => {
        const firstChild = area.target?.children?.[0];
        if (firstChild && firstChild.offsetWidth !== firstChildWidth) {
          setFirstChildWidth(firstChild.offsetWidth + 16 /*margin*/);
        }
      }, 100)
    );
    if (!useToolbar && filterAreaRef.current) {
      filterAreaObserver.observe(filterAreaRef.current);
    }
    return () => {
      filterAreaObserver.disconnect();
    };
  }, [filterAreaRef.current, useToolbar]);

  useEffect(() => {
    const filterAreaObserver = new ResizeObserver(
      debounce(([area]) => {
        const filterWidth = resizeObserverEntryWidth(area);
        if (filterWidth !== filterBarButtonsWidth) {
          setFilterAreaWidth(filterWidth);
        }
      }, 100)
    );
    if (!useToolbar && filterAreaRef.current) {
      filterAreaObserver.observe(filterAreaRef.current);
    }
    return () => {
      filterAreaObserver.disconnect();
    };
  }, [filterAreaWidth, filterAreaRef.current, useToolbar]);

  useEffect(() => {
    const filterBarButtonsObserver = new ResizeObserver(
      debounce(([buttons]) => {
        const buttonsWidth = resizeObserverEntryWidth(buttons);
        if (buttonsWidth !== filterBarButtonsWidth) {
          setFilterBarButtonsWidth(buttonsWidth);
        }
      }, 100)
    );
    if (!useToolbar && filterBarButtonsRef.current) {
      filterBarButtonsObserver.observe(filterBarButtonsRef.current);
    }
    return () => {
      filterBarButtonsObserver.disconnect();
    };
  }, [filterBarButtonsRef.current, useToolbar, filterBarButtonsWidth]);

  const calculatedChildren = renderChildren();
  // calculates the number of spacers depending on the available width inside the row
  const renderSpacers = () => {
    if (firstChildWidth && filterAreaWidth && filterBarButtonsWidth) {
      let spacers = [];
      const filterItemsWidth = calculatedChildren.length * firstChildWidth;
      //early return if enough space is available
      if (filterAreaWidth - filterBarButtonsWidth > filterItemsWidth) {
        return null;
      }
      const usedSpaceLastRow = filterItemsWidth % filterAreaWidth;
      const emptySpaceLastRow = filterAreaWidth - usedSpaceLastRow;
      // deduct width of buttons container of the empty space in the last row to calculate number of spacers
      const numberOfSpacers = Math.floor((emptySpaceLastRow - filterBarButtonsWidth) / firstChildWidth);
      for (let i = 0; i < numberOfSpacers; i++) {
        spacers.push(
          <div
            key={`filter-spacer-${i}`}
            className={classes.spacer}
            style={{
              [`margin${transformRightRTL}`]: '1rem'
            }}
          />
        );
      }
      return spacers;
    }
    return null;
  };

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
      <div
        ref={filterBarRef}
        className={cssClasses.toString()}
        style={{ ['--_ui5wcr_filter_group_item_flex_basis']: filterContainerWidth, ...style } as CSSProperties}
        title={tooltip}
        slot={slot}
        {...passThroughProps}
      >
        {loading ? (
          <BusyIndicator active className={classes.loadingContainer} size={BusyIndicatorSize.Large} />
        ) : (
          <>
            {useToolbar && (
              <Toolbar className={classes.filterBarHeader} toolbarStyle={ToolbarStyle.Clear}>
                {variants}
                {variants && search && <ToolbarSeparator />}
                {search && <div ref={searchRef}>{renderSearchWithValue(search, searchValue)}</div>}
                {hasButtons && <ToolbarSpacer />}
                {ToolbarButtons}
              </Toolbar>
            )}
            {mountFilters && (
              <div className={filterAreaClasses.className} style={{ position: 'relative' }} ref={filterAreaRef}>
                {calculatedChildren}
                {!useToolbar && (
                  <>
                    {renderSpacers()}
                    <div
                      style={{
                        width: filterBarButtonsWidth ? `${filterBarButtonsWidth}px` : '120px',
                        minWidth: filterBarButtonsWidth ? `${filterBarButtonsWidth}px` : '120px',
                        [`margin${transformRightRTL}`]: '1rem'
                      }}
                      className={classes.lastSpacer}
                    >
                      <div
                        className={classes.filterBarButtons}
                        ref={filterBarButtonsRef}
                        style={{
                          [`margin${transformRightRTL}`]: '1rem',
                          left: isRtl ? 0 : 'auto',
                          right: isRtl ? 'auto' : 0
                        }}
                      >
                        {ToolbarButtons}
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
});

FilterBar.defaultProps = {
  filterContainerWidth: '13.125rem',
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
  hideToggleFiltersButton: false,
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
