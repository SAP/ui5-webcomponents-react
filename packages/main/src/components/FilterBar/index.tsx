'use client';

import searchIcon from '@ui5/webcomponents-icons/dist/search.js';
import { debounce, Device, enrichEventWithDetails, useI18nBundle } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, ElementType, ReactElement, ReactNode } from 'react';
import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { ButtonDesign, ToolbarStyle } from '../../enums/index.js';
import {
  ADAPT_FILTERS,
  CLEAR,
  FILTERS,
  GO,
  HIDE_FILTER_BAR,
  RESTORE,
  SEARCH,
  SHOW_FILTER_BAR
} from '../../i18n/i18n-defaults.js';
import type { CommonProps, Ui5CustomEvent } from '../../interfaces/index.js';
import type {
  ButtonDomRef,
  DialogDomRef,
  InputPropTypes,
  TableDomRef,
  TableRowDomRef
} from '../../webComponents/index.js';
import { Button, Icon } from '../../webComponents/index.js';
import { FilterGroupItem } from '../FilterGroupItem/index.js';
import type { FilterGroupItemPropTypes } from '../FilterGroupItem/index.js';
import { Toolbar } from '../Toolbar/index.js';
import { ToolbarSpacer } from '../ToolbarSpacer/index.js';
import styles from './FilterBar.jss.js';
import { FilterDialog } from './FilterDialog.js';
import { filterValue, renderSearchWithValue, syncRef } from './utils.js';

const isPhone = Device.isPhone();
const isTablet = Device.isTablet();

export interface FilterBarPropTypes extends CommonProps {
  /**
   * Defines the filters of the `FilterBar`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FilterGroupItems` in order to preserve the intended design.
   */
  children: ReactNode | ReactNode[];
  /**
   * Defines the search field rendered as first filter item.
   *
   * __Note:__ Per default `placeholder`, `icon`, `noTypeahead` and `showClearIcon` are applied to the search input.
   *
   * __Note:__ The field is only available in the FilterBar not inside the filter configuration dialog.
   */
  search?: ReactElement<InputPropTypes>;
  /**
   * Specifies header text or variant management that is shown in the toolbar on the first position
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `VariantManagement`, `Text` or `Title` in order to preserve the intended design.
   *
   * __Note:__ If `hideToolbar` is `true` this prop has no effect.
   */
  header?: ReactNode;
  /**
   * Defines whether the toolbar on top of the filter items is displayed.
   *
   * __Note__: If set to `true`, `header`, `search` and the "Hide/Show FilterBar" button are not available and the rest of the buttons are moved to the bottom right side of the filter area.
   */
  hideToolbar?: boolean;
  /**
   * Defines whether the `FilterBar` is collapsed.
   */
  filterBarCollapsed?: boolean;
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
  hideFilterConfiguration?: boolean;
  /**
   * Defines whether the "Reset" button is displayed in the filter configuration dialog.
   */
  showResetButton?: boolean;
  /**
   * Defines whether the "Hide/Show Filters" button is displayed in the `FilterBar`.
   *
   * __Note:__ If `hideToolbar` is `true` this prop has no effect.
   */
  hideToggleFiltersButton?: boolean;
  /**
   * Defines the number of active filters displayed in the "Filter" button.
   *
   * __Note__: If `hideFilterConfiguration` is `true` this prop has no effect.
   */
  activeFiltersCount?: number | string;
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
   * You can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).
   *
   * Defaults to: `document.body`
   */
  portalContainer?: Element;
  /**
   * The event is fired when the `FilterBar` is collapsed/expanded.
   */
  onToggleFilters?: (event: CustomEvent<{ visible: boolean; filters: HTMLElement[]; search: HTMLElement }>) => void;
  /**
   * The event is fired when the "Go" button of the filter configuration dialog is clicked.
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
   * The event is fired when the "Cancel" button of the filter configuration dialog is clicked or when the dialog is closed by pressing the "Escape" key.
   */
  onFiltersDialogCancel?: (event: Ui5CustomEvent) => void;
  /**
   * The event is fired when the filter configuration dialog is opened.
   *
   * __Note:__ By adding `event.preventDefault()` to the function body, opening the dialog is prevented and you can add your own custom component. Even though this is possible, we highly recommend using the default dialog in order to preserve the intended design.
   */
  onFiltersDialogOpen?: (event: CustomEvent) => void;
  /**
   * The event is fired after the filter configuration dialog has been opened.
   */
  onAfterFiltersDialogOpen?: (event: Ui5CustomEvent<DialogDomRef>) => void;
  /**
   * The event is fired when the filter configuration dialog is closed.
   */
  onFiltersDialogClose?: (event: Ui5CustomEvent) => void;
  /**
   * The event is fired when a filter is selected/unselected in the filter configuration dialog.
   */
  onFiltersDialogSelectionChange?: (
    event: Ui5CustomEvent<
      TableDomRef,
      { element: TableRowDomRef; checked: boolean; selectedRows: unknown[]; previouslySelectedRows: unknown[] }
    >
  ) => void;
  /**
   * The event is fired on input in the filter configuration dialog search field.
   */
  onFiltersDialogSearch?: (event: CustomEvent<{ value: string; element: HTMLElement }>) => void;
  /**
   * The event is fired when the "Clear" button is clicked.
   */
  onClear?: (event: CustomEvent<{ filters: HTMLElement[]; search: HTMLElement }>) => void;
  /**
   * The event is fired when the "Go" button is clicked.
   */
  onGo?: (
    event: CustomEvent<{
      elements: Record<string, HTMLElement>;
      filters: HTMLElement[];
      search: HTMLElement;
    }>
  ) => void;
  /**
   * The event is fired when the "Restore" button is clicked.
   */
  onRestore?: (
    event: CustomEvent<{ source: string; filters: HTMLElement[] | TableRowDomRef[]; search?: HTMLElement }>
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
 * The `FilterBar` displays filters in a user-friendly manner to populate values for a query. It consists of a row containing the `VariantManagement` or a title, the related buttons, and an area underneath displaying the filters. The filters are arranged in a logical row that is divided depending on the space available and the width of the filters. The area containing the filters can be hidden or shown using the "Hide FilterBar / Show FilterBar" button, the "Filters" button shows the filter dialog.
 In this dialog, the consumer has full control over the FilterBar. The filters in this dialog are displayed in one column and organized in groups. Each filter can be marked as visible in the FilterBar by selecting "Add to FilterBar".
 */
const FilterBar = forwardRef<HTMLDivElement, FilterBarPropTypes>((props, ref) => {
  const {
    children,
    hideToolbar,
    filterBarCollapsed,
    considerGroupName,
    filterContainerWidth = '13.125rem',
    activeFiltersCount,
    showClearOnFB,
    showGoOnFB,
    hideFilterConfiguration,
    showRestoreOnFB,
    showResetButton,
    hideToggleFiltersButton,
    style,
    className,
    slot,
    search,
    header,
    as = 'div',
    portalContainer,
    onToggleFilters,
    onFiltersDialogOpen,
    onAfterFiltersDialogOpen,
    onFiltersDialogCancel,
    onFiltersDialogClose,
    onFiltersDialogSave,
    onClear,
    onFiltersDialogSelectionChange,
    onFiltersDialogSearch,
    onGo,
    onRestore,
    ...rest
  } = props;
  const initiallyShowFilters = (() => {
    if (!hideToolbar) {
      if (filterBarCollapsed !== undefined) {
        return filterBarCollapsed;
      }
      return !isTablet;
    }
    return true;
  })();
  const [showFilters, setShowFilters] = useState(initiallyShowFilters);
  const [mountFilters, setMountFilters] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>(undefined);
  const searchRef = useRef(null);
  const filterRefs = useRef({});
  const dialogRef = useRef<DialogDomRef>(null);
  const [dialogRefs, setDialogRefs] = useState({});
  const [toggledFilters, setToggledFilters] = useState({});
  const prevVisibleInFilterBarProps = useRef({});
  const prevSearchInputPropsValueRef = useRef<string>();
  const filterBarButtonsRef = useRef(null);
  const filterAreaRef = useRef<HTMLDivElement>(null);
  const filterBtnRef = useRef<ButtonDomRef>(null);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const clearText = i18nBundle.getText(CLEAR);
  const restoreText = i18nBundle.getText(RESTORE);
  const showFilterBarText = i18nBundle.getText(SHOW_FILTER_BAR);
  const hideFilterBarText = i18nBundle.getText(HIDE_FILTER_BAR);
  const goText = i18nBundle.getText(GO);
  const searchText = i18nBundle.getText(SEARCH);
  const filtersText = !hideToolbar ? i18nBundle.getText(FILTERS) : i18nBundle.getText(ADAPT_FILTERS);

  // dialog
  const [isListView, setIsListView] = useState(true);
  const [filteredAttribute, setFilteredAttribute] = useState('all');

  useEffect(() => {
    Children.toArray(children).forEach((item) => {
      if (isValidElement(item)) {
        setToggledFilters((prev) => {
          if (!item.props.hasOwnProperty('visibleInFilterBar') && prev?.[item.key] === undefined) {
            return { ...prev, [item.key]: true };
          }
          if (item.props.hasOwnProperty('visibleInFilterBar')) {
            return { ...prev, [item.key]: item.props.visibleInFilterBar };
          }
          return prev;
        });
      }
    });
  }, [children, setToggledFilters]);

  useEffect(() => {
    if (filterBarCollapsed !== undefined) {
      setShowFilters(!hideToolbar ? !filterBarCollapsed : true);
    }
  }, [setShowFilters, hideToolbar, filterBarCollapsed]);

  const classes = useStyles();

  const filterAreaClasses = clsx(
    classes.filterArea,
    showFilters && (!isPhone || (isPhone && hideToolbar)) ? classes.filterAreaOpen : classes.filterAreaClosed
  );

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
  const handleDialogSave = (e, newRefs, updatedToggledFilters) => {
    setDialogRefs(newRefs);

    const details = {
      elements: newRefs,
      toggledElements: { ...toggledFilters, ...updatedToggledFilters },
      ...getFilterElements()
    };

    setToggledFilters((old) => ({ ...old, ...updatedToggledFilters }));
    if (onFiltersDialogSave) {
      onFiltersDialogSave(enrichEventWithDetails(e, details));
    }
    handleDialogClose(e);
  };

  const handleDialogOpen = (e) => {
    if (typeof onFiltersDialogOpen === 'function') {
      onFiltersDialogOpen(e);
    }
    if (e.defaultPrevented) {
      setDialogOpen(false);
    } else {
      setDialogOpen(true);
    }
  };

  const handleDialogClose = (e) => {
    if (onFiltersDialogClose) {
      onFiltersDialogClose(enrichEventWithDetails(e));
    }
    setDialogOpen(false);
    filterBtnRef.current?.focus();
  };

  const handleGoOnFb = (e) => {
    if (typeof onGo === 'function') {
      onGo(enrichEventWithDetails(e, { elements: filterRefs.current, ...getFilterElements() }));
    }
  };

  const safeChildren = () => {
    if (Object.keys(toggledFilters).length > 0) {
      return Children.toArray(children).map((child) => {
        if (isValidElement(child) && toggledFilters?.[child.key] !== undefined) {
          // @ts-expect-error: child should always be a FilterGroupItem w/o portal
          return cloneElement<FilterGroupItemPropTypes, HTMLDivElement>(child, {
            visibleInFilterBar: toggledFilters[child.key]
          });
        }
        return child;
      });
    }
    return Children.toArray(children);
  };
  const prevChildren = useRef({});

  const renderChildren = () => {
    const childProps = { considerGroupName, ['data-in-fb']: true, ['data-with-toolbar']: !hideToolbar } as any;

    return safeChildren()
      .filter((item): item is ReactElement => {
        if (!isValidElement(item)) {
          return false;
        }
        return item?.props?.visible && item.props?.visibleInFilterBar;
      })
      .map((child) => {
        // necessary because of varying widths of input elements
        if (filterContainerWidth) {
          childProps.style = { width: filterContainerWidth, ...child.props.style };
        }
        if (hideFilterConfiguration) {
          return cloneElement(child, { ...childProps });
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
          return cloneElement(child, {
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

        return cloneElement(child, {
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
    if (source === 'filterBar' && showGoOnFB) {
      setMountFilters(false);
    }
    if (onRestore) {
      onRestore(enrichEventWithDetails(e, { source, ...filterElements }));
    }
  };

  useEffect(() => {
    if (!mountFilters) {
      setMountFilters(true);
    }
  }, [mountFilters]);

  const handleFBRestore = (e) => {
    handleRestoreFilters(e, 'filterBar', getFilterElements());
  };

  const handleClear = (e) => {
    if (typeof onClear === 'function') {
      onClear(enrichEventWithDetails(e, getFilterElements()));
    }
  };

  const cssClasses = clsx(classes.outerContainer, className, !hideToolbar && classes.outerContainerWithToolbar);

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
      {showGoOnFB && (
        <Button onClick={handleGoOnFb} design={ButtonDesign.Emphasized}>
          {goText}
        </Button>
      )}
      {!hideToggleFiltersButton && !hideToolbar && !isPhone && (
        <Button
          onClick={handleToggle}
          design={ButtonDesign.Transparent}
          className={classes.showFiltersBtn}
          aria-live="polite"
        >
          {showFilters ? hideFilterBarText : showFilterBarText}
        </Button>
      )}
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
      {!hideFilterConfiguration && (
        <Button onClick={handleDialogOpen} aria-haspopup="dialog" design={ButtonDesign.Transparent} ref={filterBtnRef}>
          {`${filtersText}${
            activeFiltersCount && parseInt(activeFiltersCount as string, 10) > 0 ? ` (${activeFiltersCount})` : ''
          }`}
        </Button>
      )}
    </>
  );

  const hasButtons = ToolbarButtons.props.children.some(Boolean);
  const [filterBarButtonsWidth, setFilterBarButtonsWidth] = useState(undefined);

  const [filterAreaWidth, setFilterAreaWidth] = useState(undefined);
  const [firstChildWidth, setFirstChildWidth] = useState(undefined);
  useEffect(() => {
    const debouncedObserverFn = debounce(([area]: ResizeObserverEntry[]) => {
      const firstChild = area.target?.children?.[0] as HTMLDivElement;
      if (firstChild && firstChild.offsetWidth !== firstChildWidth) {
        setFirstChildWidth(firstChild.offsetWidth + 16 /*margin*/);
      }
    }, 100);
    const filterAreaObserver = new ResizeObserver(debouncedObserverFn);
    if (hideToolbar && filterAreaRef.current) {
      filterAreaObserver.observe(filterAreaRef.current);
    }
    return () => {
      debouncedObserverFn.cancel();
      filterAreaObserver.disconnect();
    };
  }, [filterAreaRef.current, hideToolbar]);

  useEffect(() => {
    const debouncedObserverFn = debounce(([area]: ResizeObserverEntry[]) => {
      const filterWidth = resizeObserverEntryWidth(area);
      if (filterWidth !== filterBarButtonsWidth) {
        setFilterAreaWidth(filterWidth);
      }
    }, 100);
    const filterAreaObserver = new ResizeObserver(debouncedObserverFn);
    if (hideToolbar && filterAreaRef.current) {
      filterAreaObserver.observe(filterAreaRef.current);
    }
    return () => {
      debouncedObserverFn.cancel();
      filterAreaObserver.disconnect();
    };
  }, [filterAreaWidth, filterAreaRef.current, hideToolbar]);

  useEffect(() => {
    const debouncedObserverFn = debounce(([buttons]: ResizeObserverEntry[]) => {
      const buttonsWidth = resizeObserverEntryWidth(buttons);
      if (buttonsWidth !== filterBarButtonsWidth) {
        setFilterBarButtonsWidth(buttonsWidth);
      }
    }, 100);
    const filterBarButtonsObserver = new ResizeObserver(debouncedObserverFn);
    if (hideToolbar && filterBarButtonsRef.current) {
      filterBarButtonsObserver.observe(filterBarButtonsRef.current);
    }
    return () => {
      debouncedObserverFn.cancel();
      filterBarButtonsObserver.disconnect();
    };
  }, [filterBarButtonsRef.current, hideToolbar, filterBarButtonsWidth]);

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
        spacers.push(<div key={`filter-spacer-${i}`} className={classes.spacer} />);
      }
      return spacers;
    }
    return null;
  };
  const CustomTag = as as ElementType;
  return (
    <>
      {dialogOpen && !hideFilterConfiguration && (
        <FilterDialog
          filterBarRefs={filterRefs}
          open={dialogOpen}
          handleDialogClose={handleDialogClose}
          handleRestoreFilters={handleRestoreFilters}
          handleSearchValueChange={setSearchValue}
          showRestoreButton={showResetButton}
          handleSelectionChange={onFiltersDialogSelectionChange}
          handleDialogSave={handleDialogSave}
          handleDialogSearch={onFiltersDialogSearch}
          handleDialogCancel={onFiltersDialogCancel}
          onAfterFiltersDialogOpen={onAfterFiltersDialogOpen}
          portalContainer={portalContainer}
          dialogRef={dialogRef}
          isListView={isListView}
          setIsListView={setIsListView}
          filteredAttribute={filteredAttribute}
          setFilteredAttribute={setFilteredAttribute}
        >
          {safeChildren()}
        </FilterDialog>
      )}
      <CustomTag
        ref={ref}
        className={cssClasses}
        style={{ ['--_ui5wcr_filter_group_item_flex_basis']: filterContainerWidth, ...style } as CSSProperties}
        slot={slot}
        {...rest}
      >
        {!hideToolbar && (
          <Toolbar className={classes.filterBarHeader} toolbarStyle={ToolbarStyle.Clear}>
            {header}
            {hasButtons && <ToolbarSpacer />}
            {ToolbarButtons}
          </Toolbar>
        )}
        {mountFilters && (
          <div className={filterAreaClasses} style={{ position: 'relative' }} ref={filterAreaRef}>
            {search && (
              <FilterGroupItem data-in-fb visibleInFilterBar>
                <div ref={searchRef}>
                  {renderSearchWithValue(search, searchValue, {
                    placeholder: searchText,
                    icon: <Icon name={searchIcon} />,
                    noTypeahead: true,
                    showClearIcon: true
                  })}
                </div>
              </FilterGroupItem>
            )}
            {calculatedChildren}
            {hideToolbar && (
              <>
                {renderSpacers()}
                <div
                  style={{
                    width: filterBarButtonsWidth ? `${filterBarButtonsWidth}px` : '120px',
                    minWidth: filterBarButtonsWidth ? `${filterBarButtonsWidth}px` : '120px'
                  }}
                  className={classes.lastSpacer}
                >
                  <div className={classes.filterBarButtons} ref={filterBarButtonsRef}>
                    {ToolbarButtons}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </CustomTag>
    </>
  );
});

FilterBar.displayName = 'FilterBar';
export { FilterBar };
