'use client';

import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import searchIcon from '@ui5/webcomponents-icons/dist/search.js';
import { debounce, Device, enrichEventWithDetails, useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, ElementType, ReactElement } from 'react';
import { Children, cloneElement, forwardRef, isValidElement, useEffect, useRef, useState } from 'react';
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
import type {
  ButtonDomRef,
  CheckBoxPropTypes,
  DialogDomRef,
  InputPropTypes,
  SelectPropTypes
} from '../../webComponents/index.js';
import { Button, Icon } from '../../webComponents/index.js';
import { FilterGroupItem } from '../FilterGroupItem/index.js';
import type { FilterGroupItemInternalProps } from '../FilterGroupItem/types.js';
import { Toolbar } from '../Toolbar/index.js';
import { ToolbarSpacer } from '../ToolbarSpacer/index.js';
import { classNames, styleData } from './FilterBar.module.css.js';
import { FilterDialog } from './FilterDialog.js';
import type { FilterBarChild, FilterBarPropTypes, ReactKeyWithoutBigInt, SafeChildrenFn } from './types.js';
import { filterValue, renderSearchWithValue, syncRef } from './utils.js';

const isPhone = Device.isPhone();
const isTablet = Device.isTablet();
const isDesktop = Device.isDesktop();

const resizeObserverEntryWidth = (entry) => {
  if (entry.borderBoxSize) {
    // Firefox implements `borderBoxSize` as a single content rect, rather than an array
    return Array.isArray(entry.borderBoxSize) ? entry.borderBoxSize[0]?.inlineSize : entry.borderBoxSize?.inlineSize;
  }
  // Safari doesn't implement `borderBoxSize`
  return entry.target.getBoundingClientRect().width;
};

/**
 * The `FilterBar` displays filters in a user-friendly manner to populate values for a query. It consists of a row containing the `VariantManagement` or a title, the related buttons, and an area underneath displaying the filters. The filters are arranged in a logical row that is divided depending on the space available and the width of the filters. The area containing the filters can be hidden or shown using the "Hide FilterBar / Show FilterBar" button, the "Filters" button shows the filter dialog.
 * In this dialog, the consumer has full control over the FilterBar. The filters in this dialog are displayed in one column and organized in groups. Each filter can be marked as visible in the FilterBar by selecting the respective row.
 *
 * __Responsiveness:__
 * The name of the view or title is always visible. The filter area varies:
 *
 * * Desktop: Expanded or collapsed by default
 * * Tablet: Collapsed by default
 * * Phone: Not displayed. Accessible through filter dialog.
 *
 *__Note:__ We recommend always fully controlling the filters, as otherwise, you may encounter discrepancies between the filters dialog and the FilterBar, especially when using complex or custom filter components.
 */
const FilterBar = forwardRef<HTMLDivElement, FilterBarPropTypes>((props, ref) => {
  const {
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
    enableReordering,
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
  const children = props.children as FilterBarChild | FilterBarChild[];
  const initiallyShowFilters = (() => {
    if (!hideToolbar) {
      if (filterBarCollapsed !== undefined) {
        return filterBarCollapsed;
      }
      // isTablet is true for some desktops with touch screens
      return !(isTablet && !isDesktop);
    }
    return true;
  })();
  const [showFilters, setShowFilters] = useState(initiallyShowFilters);
  const [mountFilters, setMountFilters] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>(undefined);
  const [dialogRefs, setDialogRefs] = useState({});
  const [toggledFilters, setToggledFilters] = useState({});

  const searchRef = useRef(null);
  const filterRefs = useRef({});
  const dialogRef = useRef<DialogDomRef>(null);
  const prevVisibleInFilterBarProps = useRef({});
  const prevSearchInputPropsValueRef = useRef<string>(undefined);
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

  useEffect(() => {
    Children.toArray(children).forEach((item) => {
      if (isValidElement(item)) {
        const key = item.key as ReactKeyWithoutBigInt;
        setToggledFilters((prev) => {
          if (!item.props.hasOwnProperty('hiddenInFilterBar') && prev?.[key] === undefined) {
            return { ...prev, [key]: true };
          }
          if (item.props.hasOwnProperty('hiddenInFilterBar')) {
            return {
              ...prev,
              [key]: (item as ReactElement<FilterGroupItemInternalProps>).props.hiddenInFilterBar !== true
            };
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

  useStylesheet(styleData, FilterBar.displayName);

  const filterAreaClasses = clsx(
    classNames.filterArea,
    showFilters && (!isPhone || (isPhone && hideToolbar)) ? classNames.filterAreaOpen : classNames.filterAreaClosed
  );

  const getFilterElements = () => {
    const search = searchRef.current?.querySelector(`[data-component-name="FilterBarSearch"]`);
    return {
      filters: filterRefs?.current ? Object.values(filterRefs.current).filter(Boolean) : [],
      search
    };
  };

  const handleToggle = (e) => {
    if (typeof onToggleFilters === 'function') {
      onToggleFilters(enrichEventWithDetails(e, { visible: !showFilters, ...getFilterElements() }));
    }
    setShowFilters(!showFilters);
  };

  const [executeGo, setExecuteGo] = useState(false);
  const handleDialogSave = (e, newRefs, updatedToggledFilters, orderIds) => {
    setDialogRefs(newRefs);
    const details = {
      elements: newRefs,
      toggledElements: { ...toggledFilters, ...updatedToggledFilters },
      ...getFilterElements(),
      orderIds
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
      onFiltersDialogClose(e);
    }
    setDialogOpen(false);
    void filterBtnRef.current?.focus();
  };

  const handleGoOnFb = (e) => {
    if (typeof onGo === 'function') {
      onGo(enrichEventWithDetails(e, { elements: filterRefs.current, ...getFilterElements() }));
    }
  };

  const safeChildren = (() => {
    if (Object.keys(toggledFilters).length > 0) {
      return Children.toArray(children).map((child) => {
        if (isValidElement(child)) {
          const key = child.key as ReactKeyWithoutBigInt;
          if (toggledFilters?.[key] !== undefined) {
            // @ts-expect-error: child should always be a FilterGroupItem w/o portal
            return cloneElement<FilterGroupItemInternalProps, HTMLDivElement>(child, {
              hiddenInFilterBar: !toggledFilters[key]
            });
          }
        }
        return child;
      });
    }
    return Children.toArray(children);
  }) as SafeChildrenFn;
  const prevChildren = useRef({});

  const renderChildren = () => {
    const childProps: Partial<FilterGroupItemInternalProps & { 'data-with-toolbar'?: boolean }> = {
      considerGroupName,
      ['data-with-toolbar']: !hideToolbar
    };

    return safeChildren()
      .filter((item) => {
        if (!isValidElement(item)) {
          return false;
        }
        return (
          (typeof item.props.hidden === 'undefined' || item?.props?.hidden !== true) &&
          item.props?.hiddenInFilterBar !== true
        );
      })
      .map((child) => {
        const key = child.key as ReactKeyWithoutBigInt;
        // necessary because of varying widths of input elements
        if (filterContainerWidth) {
          childProps.style = { width: filterContainerWidth, ...child.props.style };
        }
        if (hideFilterConfiguration) {
          return cloneElement(child, { ...childProps });
        }
        prevVisibleInFilterBarProps.current[key] = child.props.hiddenInFilterBar !== true;
        let filterItemProps = {};
        if (Object.keys(dialogRefs).length > 0) {
          const dialogItemRef = dialogRefs[key];
          if (dialogItemRef) {
            filterItemProps = filterValue(dialogItemRef, child);
          }
        }
        if (!child.props.children) {
          return cloneElement(child, {
            ...childProps
          });
        }
        const filter = child.props.children as ReactElement<Record<string, any>>;
        if (
          prevChildren.current?.[key] &&
          //Input
          ((filter as ReactElement<InputPropTypes>)?.props?.value !== prevChildren.current?.[key]?.value ||
            //Checkbox
            (filter as ReactElement<CheckBoxPropTypes>)?.props?.checked !== prevChildren.current?.[key]?.checked ||
            //Selectable
            (Array.isArray((filter as ReactElement<SelectPropTypes>)?.props?.children) &&
              (filter as ReactElement<SelectPropTypes>)?.props?.children
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore children is iterable here
                ?.map((item) => item.props.selected)
                .join(',') !== prevChildren?.current?.[key]?.children?.map((item) => item.props.selected).join(',')))
        ) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const { [child.key]: _omit, ...rest } = dialogRefs;
          setDialogRefs(rest);
        }
        prevChildren.current[key] = filter.props;

        return cloneElement(child, {
          ...childProps,
          children: {
            ...filter,
            props: {
              ...filter.props,
              ...filterItemProps
            },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore: todo check React19 support
            ref: (node) => {
              filterRefs.current[key] = node;
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore: todo check React19 support
              if (!dialogOpen) syncRef(filter.ref, node);
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

  const cssClasses = clsx(classNames.outerContainer, className, !hideToolbar && classNames.outerContainerWithToolbar);

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
          className={classNames.showFiltersBtn}
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
      // deduct width of buttons container of the empty space in the last row to calculate number of spacers (-1 because of "lastSpacer")
      const numberOfSpacers = Math.floor((emptySpaceLastRow - filterBarButtonsWidth) / firstChildWidth) - 1;
      for (let i = 0; i < numberOfSpacers; i++) {
        spacers.push(<div key={`filter-spacer-${i}`} className={classNames.spacer} />);
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
          enableReordering={enableReordering}
          isPhone={isPhone}
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
          <Toolbar className={classNames.filterBarHeader} toolbarStyle="Clear">
            {header}
            {hasButtons && <ToolbarSpacer />}
            {ToolbarButtons}
          </Toolbar>
        )}
        {mountFilters && (
          <div
            className={filterAreaClasses}
            style={{ position: 'relative' }}
            ref={filterAreaRef}
            data-component-name="FilterBarFilterArea"
          >
            {search && (
              <FilterGroupItem data-with-toolbar={!hideToolbar}>
                <div ref={searchRef} className={classNames.searchContainer}>
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
                  className={classNames.lastSpacer}
                >
                  <div className={classNames.filterBarButtons} ref={filterBarButtonsRef}>
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
export type { FilterBarPropTypes };
