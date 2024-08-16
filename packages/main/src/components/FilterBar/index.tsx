'use client';

import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import InputType from '@ui5/webcomponents/dist/types/InputType.js';
import searchIcon from '@ui5/webcomponents-icons/dist/search.js';
import { debounce, Device, enrichEventWithDetails, useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, ElementType, ReactElement } from 'react';
import { Children, cloneElement, forwardRef, isValidElement, useEffect, useId, useRef, useState } from 'react';
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
import type { ButtonDomRef, DialogDomRef } from '../../webComponents/index.js';
import { Button, Icon } from '../../webComponents/index.js';
import { FilterGroupItem } from '../FilterGroupItem/index.js';
import type { FilterGroupItemInternalProps } from '../FilterGroupItem/types.js';
import { Toolbar } from '../Toolbar/index.js';
import { ToolbarSpacer } from '../ToolbarSpacer/index.js';
import { classNames, styleData } from './FilterBar.module.css.js';
import { FilterDialog } from './FilterDialog.js';
import type { FilterBarChild, FilterBarPropTypes, SafeChildrenFn } from './types.js';

const isPhone = Device.isPhone();
const isTablet = Device.isTablet();
const isDesktop = Device.isDesktop();

const resizeObserverEntryWidth = (entry) => {
  if (entry.borderBoxSize.length) {
    return entry.borderBoxSize[0]?.inlineSize;
  }
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
  const [dialogOpen, setDialogOpen] = useState(false);
  const dialogRef = useRef<DialogDomRef>(null);
  const filterBarButtonsRef = useRef(null);
  const filterAreaRef = useRef<HTMLDivElement>(null);
  const filterBtnRef = useRef<ButtonDomRef>(null);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const uniqueId = useId();

  const clearText = i18nBundle.getText(CLEAR);
  const restoreText = i18nBundle.getText(RESTORE);
  const showFilterBarText = i18nBundle.getText(SHOW_FILTER_BAR);
  const hideFilterBarText = i18nBundle.getText(HIDE_FILTER_BAR);
  const goText = i18nBundle.getText(GO);
  const searchText = i18nBundle.getText(SEARCH);
  const filtersText = !hideToolbar ? i18nBundle.getText(FILTERS) : i18nBundle.getText(ADAPT_FILTERS);

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

  const handleToggle = (e) => {
    if (typeof onToggleFilters === 'function') {
      onToggleFilters(enrichEventWithDetails(e, { visible: !showFilters }));
    }
    setShowFilters(!showFilters);
  };

  const handleDialogSave = (e, selectionChangePayload, orderIds) => {
    const details = {
      ...selectionChangePayload,
      orderIds
    };
    if (onFiltersDialogSave) {
      onFiltersDialogSave(enrichEventWithDetails(e, details));
    }
    handleDialogClose();
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

  const handleDialogClose = () => {
    if (onFiltersDialogClose) {
      onFiltersDialogClose();
    }
    setDialogOpen(false);
    void filterBtnRef.current?.focus();
  };

  const handleGoOnFb = (e) => {
    if (typeof onGo === 'function') {
      onGo(e);
    }
  };

  const safeChildren = (() => {
    return Children.toArray(children);
  }) as SafeChildrenFn;

  const renderChildren = () => {
    const childProps: Partial<FilterGroupItemInternalProps & { 'data-with-toolbar'?: boolean }> = {
      considerGroupName,
      ['data-with-toolbar']: !hideToolbar
    };
    return (Children.toArray(children) as ReactElement<FilterGroupItemInternalProps>[])
      .filter((item) => {
        if (!isValidElement(item)) {
          return false;
        }
        return (
          (typeof item.props.hidden === 'undefined' || item?.props?.hidden !== true) &&
          (item.props?.required || item.props?.hiddenInFilterBar !== true)
        );
      })
      .map((child) => {
        if (filterContainerWidth) {
          childProps.style = { width: filterContainerWidth, ...child.props.style };
        }
        return cloneElement(child, { ...childProps });
      });
  };
  const handleRestoreFilters = (payload: Parameters<FilterBarPropTypes['onRestore']>[0]) => {
    if (onRestore) {
      onRestore(payload);
    }
  };

  const handleFBRestore = () => {
    handleRestoreFilters({
      source: 'filterBar',
      selectedFilterKeys: calculatedChildren.map((child) => `${child.props.filterKey}`),
      previousSelectedFilterKeys: null
    });
  };

  const handleClear = (e) => {
    if (typeof onClear === 'function') {
      onClear(e);
    }
  };

  const cssClasses = clsx(classNames.outerContainer, className, !hideToolbar && classNames.outerContainerWithToolbar);

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
        <div
          className={filterAreaClasses}
          style={{ position: 'relative' }}
          ref={filterAreaRef}
          data-component-name="FilterBarFilterArea"
        >
          {search && (
            <FilterGroupItem data-with-toolbar={!hideToolbar} filterKey={`${uniqueId}-search`}>
              <div className={classNames.searchContainer}>
                {cloneElement(search, {
                  placeholder: searchText,
                  noTypeahead: true,
                  showClearIcon: true,
                  type: InputType.Search,
                  icon: <Icon name={searchIcon} />
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
      </CustomTag>
      {dialogOpen && !hideFilterConfiguration && (
        <FilterDialog
          open={dialogOpen}
          handleDialogClose={handleDialogClose}
          handleRestoreFilters={handleRestoreFilters}
          showRestoreButton={showResetButton}
          onFiltersDialogSelectionChange={onFiltersDialogSelectionChange}
          handleDialogSave={handleDialogSave}
          handleDialogSearch={onFiltersDialogSearch}
          handleDialogCancel={onFiltersDialogCancel}
          onAfterFiltersDialogOpen={onAfterFiltersDialogOpen}
          dialogRef={dialogRef}
          enableReordering={enableReordering}
          isPhone={isPhone}
        >
          {safeChildren()}
        </FilterDialog>
      )}
    </>
  );
});

FilterBar.displayName = 'FilterBar';
export { FilterBar };
export type { FilterBarPropTypes };
