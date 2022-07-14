import { debounce, enrichEventWithDetails, useI18nBundle, useIsRTL, useSyncRef } from '@ui5/webcomponents-react-base';
import clsx from 'clsx';
import React, {
  Children,
  cloneElement,
  CSSProperties,
  forwardRef,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { BusyIndicatorSize } from '../../enums/BusyIndicatorSize';
import { ButtonDesign } from '../../enums/ButtonDesign';
import { ToolbarStyle } from '../../enums/ToolbarStyle';
import { ADAPT_FILTERS, CLEAR, FILTERS, GO, HIDE_FILTER_BAR, RESTORE, SHOW_FILTER_BAR } from '../../i18n/i18n-defaults';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { BusyIndicator } from '../../webComponents/BusyIndicator';
import { Button } from '../../webComponents/Button';
import { DialogDomRef } from '../../webComponents/Dialog';
import { InputPropTypes } from '../../webComponents/Input';
import { Toolbar } from '../Toolbar';
import { ToolbarSeparator } from '../ToolbarSeparator';
import { ToolbarSpacer } from '../ToolbarSpacer';
import styles from './FilterBar.jss';
import { FilterDialog } from './FilterDialog';
import { filterValue, renderSearchWithValue, syncRef } from './utils';

export interface FilterBarPropTypes extends CommonProps {
  /**
   * Defines the filters of the `FilterBar`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FilterGroupItems` in order to preserve the intended design.
   */
  children: ReactNode | ReactNode[];
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
   * Sets the components outer HTML tag.
   *
   * __Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.
   */
  as?: keyof HTMLElementTagNameMap;
  /**
   * Defines where modals are rendered into via `React.createPortal`.
   *
   * Defaults to: `document.body`
   */
  portalContainer?: Element;
  /**
   * The event is fired when the `FilterBar` is collapsed/expanded.
   */
  onToggleFilters?: (event: CustomEvent<{ visible: boolean; filters: HTMLElement[]; search: HTMLElement }>) => void;
  /**
   * The event is fired when the "Save" button of the filter configuration dialog is clicked.
   */
  onFiltersDialogSave?: (
    event: CustomEvent<{
      elements: Record<string, HTMLElement>;
      toggledElements?: Record<string, HTMLElement>;
      filters: HTMLElement[];
      search: HTMLElement;
    }>
  ) => void;
  /**
   * The event is fired when the "Clear" button of the filter configuration dialog is clicked.
   */
  onFiltersDialogClear?: (
    event: CustomEvent<{ dialogSearch: HTMLElement; filters: HTMLElement[]; search: HTMLElement }>
  ) => void;
  /**
   * The event is fired when the "Cancel" button of the filter configuration dialog is clicked.
   */
  onFiltersDialogCancel?: (event: Ui5CustomEvent<HTMLElement>) => void;
  /**
   * The event is fired when the filter configuration dialog is opened.
   *
   * __Note:__ By adding `event.preventDefault()` to the function body, opening the dialog is prevented and you can add your own custom component. Even though this is possible, we highly recommend using the default dialog in order to preserve the intended design.
   */
  onFiltersDialogOpen?: (event: CustomEvent<{ dialog: HTMLElement }>) => void;
  /**
   * The event is fired when the filter configuration dialog is closed.
   */
  onFiltersDialogClose?: (event: Ui5CustomEvent<HTMLElement>) => void;
  /**
   * The event is fired when a filter is selected/unselected in the filter configuration dialog.
   */
  onFiltersDialogSelectionChange?: (
    event: CustomEvent<{ elements: Record<string, HTMLElement>; toggledElements?: Record<string, HTMLElement> }>
  ) => void;
  /**
   * The event is fired on input in the filter configuration dialog search field.
   */
  onFiltersDialogSearch?: (event: CustomEvent<{ value: string; element: HTMLElement }>) => void;
  /**
   * The event is fired when the "Clear" button is clicked.
   */
  onClear?: (event: CustomEvent<{ dialogSearch: HTMLElement; filters: HTMLElement[]; search: HTMLElement }>) => void;
  /**
   * The event is fired when the "Go" button is clicked.
   */
  onGo?: (
    event: CustomEvent<{
      elements: Record<string, HTMLElement>;
      toggledElements?: Record<string, HTMLElement>;
      filters: HTMLElement[];
      search: HTMLElement;
    }>
  ) => void;
  /**
   * The event is fired when the "Restore" button is clicked.
   */
  onRestore?: (
    event: CustomEvent<{ source: string; filters: HTMLElement[]; search: HTMLElement; dialogSearch?: HTMLElement }>
  ) => void;
}

const resizeObserverEntryWidth = (entry) => {
  if (entry.borderBoxSize) {
    // Firefox implements `borderBoxSize` as a single content rect, rather than an array
    return Array.isArray(entry.borderBoxSize) ? entry.borderBoxSize[0]?.inlineSize : entry.borderBoxSize?.inlineSize;
  }
  // Safari doesn't implement `borderBoxSize`
  return entry.target.getBoundingClientRect().width;
};

const useStyles = createUseStyles(styles, { name: 'FilterBar' });
/**
 * The `FilterBar` displays filters in a user-friendly manner to populate values for a query. It consists of a row containing the `VariantManagement`, the related buttons, and an area underneath displaying the filters. The filters are arranged in a logical row that is divided depending on the space available and the width of the filters. The area containing the filters can be hidden or shown using the "Hide FilterBar / Show FilterBar" button, the "Filters" button shows the filter dialog.
 In this dialog, the consumer has full control over the FilterBar. The filters in this dialog are displayed in one column and organized in groups. Each filter can be marked as visible in the FilterBar by selecting "Add to FilterBar".
 */
const FilterBar = forwardRef((props: FilterBarPropTypes, ref: RefObject<HTMLDivElement>) => {
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
    slot,
    search,
    variants,
    as,
    portalContainer,

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
    onRestore,
    ...rest
  } = props;

  const [showFilters, setShowFilters] = useState(useToolbar ? filterBarExpanded : true);
  const [mountFilters, setMountFilters] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>(undefined);
  const searchRef = useRef(null);
  const filterRefs = useRef({});
  const dialogRef = useRef<DialogDomRef>();
  const [dialogRefs, setDialogRefs] = useState({});
  const [toggledFilters, setToggledFilters] = useState({});
  const prevVisibleInFilterBarProps = useRef({});
  const prevSearchInputPropsValueRef = useRef<string>();
  const filterBarButtonsRef = useRef(null);
  const filterAreaRef = useRef(null);
  const [componentRef, filterBarRef] = useSyncRef<HTMLDivElement>(ref);

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

  const filterAreaClasses = clsx(classes.filterArea, showFilters ? classes.filterAreaOpen : classes.filterAreaClosed);

  const getFilterElements = () => {
    const search = searchRef.current?.querySelector(`[data-component-name="FilterBarSearch"]`);
    return {
      filters: filterRefs?.current ? Object.values(filterRefs.current).filter(Boolean) : [],
      search
    };
  };

  const handleToggle = (e) => {
    if (onToggleFilters) {
      onToggleFilters(enrichEventWithDetails(e, { visible: !showFilters, ...getFilterElements() }));
    }
    setShowFilters(!showFilters);
  };

  const [executeGo, setExecuteGo] = useState(false);
  const handleDialogSave = (e, newRefs, updatedToggledFilters, go = false) => {
    setDialogRefs(newRefs);
    const details = {
      elements: newRefs,
      toggledElements: { ...toggledFilters, ...updatedToggledFilters },
      ...getFilterElements()
    };
    if (typeof onGo === 'function' && go) {
      setExecuteGo(enrichEventWithDetails(e, details));
    }

    setToggledFilters((old) => ({ ...old, ...updatedToggledFilters }));
    if (onFiltersDialogSave) {
      onFiltersDialogSave(enrichEventWithDetails(e, details));
    }
    handleDialogClose(e);
  };

  const handleDialogOpen = (e) => {
    setDialogOpen(true);
    if (onFiltersDialogOpen) {
      onFiltersDialogOpen(enrichEventWithDetails(e, { dialog: dialogRef.current }));
    }
    if (e.defaultPrevented) {
      setDialogOpen(false);
    }
  };

  const handleDialogClose = (e) => {
    if (onFiltersDialogClose) {
      onFiltersDialogClose(enrichEventWithDetails(e));
    }
    setDialogOpen(false);
  };

  const handleGoOnFb = (e) => {
    if (typeof onGo === 'function') {
      onGo(enrichEventWithDetails(e, { elements: filterRefs.current, ...getFilterElements() }));
    }
  };

  const safeChildren = () => {
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
  };
  const prevChildren = useRef({});

  const renderChildren = () => {
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
            //Checkbox
            child.props.children?.props?.checked !== prevChildren.current?.[child.key]?.checked ||
            //Selectable
            (Array.isArray(child.props.children?.props?.children) &&
              child.props.children?.props?.children?.map((item) => item.props.selected).join(',') !==
                prevChildren?.current?.[child.key]?.children?.map((item) => item.props.selected).join(',')))
        ) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const { [child.key]: _omit, ...rest } = dialogRefs;
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
              if (!dialogOpen) syncRef(child.props.children.ref, node);
            }
          }
        });
      });
  };
  const handleRestoreFilters = (e, source, filterElements) => {
    if (source === 'dialog' && showGo) {
      setDialogOpen(false);
      setDialogOpen(true);
    } else if (source === 'filterBar' && showGoOnFB) {
      setMountFilters(false);
      setMountFilters(true);
    }
    if (onRestore) {
      onRestore(enrichEventWithDetails(e, { source, ...filterElements }));
    }
  };

  const handleFBRestore = (e) => {
    handleRestoreFilters(e, 'filterBar', getFilterElements());
  };

  const handleClear = (e) => {
    if (typeof onClear === 'function') {
      onClear(enrichEventWithDetails(e, getFilterElements()));
    }
  };

  const cssClasses = clsx(classes.outerContainer, className, useToolbar && classes.outerContainerWithToolbar);

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
        <Button onClick={handleClear} design={ButtonDesign.Transparent}>
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
            activeFiltersCount && parseInt(activeFiltersCount as string, 10) > 0 ? ` (${activeFiltersCount})` : ''
          }`}
        </Button>
      )}
      {showGoOnFB && (
        <Button onClick={handleGoOnFb} design={ButtonDesign.Emphasized}>
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
    const debouncedObserverFn = debounce(([area]) => {
      const firstChild = area.target?.children?.[0];
      if (firstChild && firstChild.offsetWidth !== firstChildWidth) {
        setFirstChildWidth(firstChild.offsetWidth + 16 /*margin*/);
      }
    }, 100);
    const filterAreaObserver = new ResizeObserver(debouncedObserverFn);
    if (!useToolbar && filterAreaRef.current) {
      filterAreaObserver.observe(filterAreaRef.current);
    }
    return () => {
      debouncedObserverFn.cancel();
      filterAreaObserver.disconnect();
    };
  }, [filterAreaRef.current, useToolbar]);

  useEffect(() => {
    const debouncedObserverFn = debounce(([area]) => {
      const filterWidth = resizeObserverEntryWidth(area);
      if (filterWidth !== filterBarButtonsWidth) {
        setFilterAreaWidth(filterWidth);
      }
    }, 100);
    const filterAreaObserver = new ResizeObserver(debouncedObserverFn);
    if (!useToolbar && filterAreaRef.current) {
      filterAreaObserver.observe(filterAreaRef.current);
    }
    return () => {
      debouncedObserverFn.cancel();
      filterAreaObserver.disconnect();
    };
  }, [filterAreaWidth, filterAreaRef.current, useToolbar]);

  useEffect(() => {
    const debouncedObserverFn = debounce(([buttons]) => {
      const buttonsWidth = resizeObserverEntryWidth(buttons);
      if (buttonsWidth !== filterBarButtonsWidth) {
        setFilterBarButtonsWidth(buttonsWidth);
      }
    }, 100);
    const filterBarButtonsObserver = new ResizeObserver(debouncedObserverFn);
    if (!useToolbar && filterBarButtonsRef.current) {
      filterBarButtonsObserver.observe(filterBarButtonsRef.current);
    }
    return () => {
      debouncedObserverFn.cancel();
      filterBarButtonsObserver.disconnect();
    };
  }, [filterBarButtonsRef.current, useToolbar, filterBarButtonsWidth]);

  const calculatedChildren = renderChildren();

  useEffect(() => {
    if (executeGo) {
      setExecuteGo((prevEvent) => {
        onGo(prevEvent as any);
        return false;
      });
    }
  }, [executeGo]);

  // calculates the number of spacers depending on the available width inside the row
  const renderSpacers = () => {
    if (firstChildWidth && filterAreaWidth && filterBarButtonsWidth) {
      const spacers = [];
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
  const CustomTag = as as React.ElementType;
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
          handleSearchValueChange={setSearchValue}
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
          portalContainer={portalContainer}
          dialogRef={dialogRef}
        >
          {safeChildren()}
        </FilterDialog>
      )}
      <CustomTag
        ref={componentRef}
        className={cssClasses}
        style={{ ['--_ui5wcr_filter_group_item_flex_basis']: filterContainerWidth, ...style } as CSSProperties}
        slot={slot}
        {...rest}
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
              <div className={filterAreaClasses} style={{ position: 'relative' }} ref={filterAreaRef}>
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
      </CustomTag>
    </>
  );
});

FilterBar.defaultProps = {
  as: 'div',
  filterContainerWidth: '13.125rem',
  useToolbar: true,
  filterBarExpanded: true,
  portalContainer: document.body
};

FilterBar.displayName = 'FilterBar';
export { FilterBar };
