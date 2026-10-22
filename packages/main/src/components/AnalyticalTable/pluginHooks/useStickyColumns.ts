import iconPushpinOff from '@ui5/webcomponents-icons/dist/pushpin-off.js';
import iconPushpinOn from '@ui5/webcomponents-icons/dist/pushpin-on.js';
import { isDesktop } from '@ui5/webcomponents-react-base/Device';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { DEFAULT_COLUMN_WIDTH } from '../defaults/Column/index.js';
import { actions, functionalUpdate } from '../react-table/index.js';
import type {
  AnalyticalTableColumnHeaderModalItem,
  ColumnType,
  ReactTableHooks,
  TableInstance,
} from '../types/index.js';

const INTERNAL_START_COLUMNS = new Set(['__ui5wcr__internal_highlight_column', '__ui5wcr__internal_selection_column']);

// Min scrollable width reserved when checking fit: DEFAULT_COLUMN_WIDTH (60) desktop / 88 mobile.
const MOBILE_MIN_NON_STICKY_COL_WIDTH = 88;
const getMinNonStickyColWidth = () => (isDesktop() ? DEFAULT_COLUMN_WIDTH : MOBILE_MIN_NON_STICKY_COL_WIDTH);

// Hysteresis margin so the ~scrollbar-width `tableClientWidth` flip on sticky toggle can't oscillate auto-disable.
const STICKY_FIT_HYSTERESIS_PX = 4;

// Actions
actions.setStickyColumns = 'setStickyColumns';
actions.toggleStickyColumn = 'toggleStickyColumn';

// `state.stickyColumns` is the source of truth; the `sticky: 'start'` column option only seeds it at init.
function reducer(
  state: TableInstance['state'],
  action: {
    type: string;
    stickyColumns?: string[] | ((old: string[]) => string[]);
    columnId?: string;
    value?: boolean;
  },
  _previousState: TableInstance['state'],
  instance: TableInstance,
) {
  if (action.type === actions.init) {
    // Seed from `sticky: 'start'` (consumer `initialState.stickyColumns` wins); `instance.columns` are raw defs.
    if (state.stickyColumns) {
      return state;
    }
    const stickyColumns = (instance.columns ?? [])
      .filter((col) => col.sticky === 'start')
      .map((col) => (col.id ?? col.accessor) as string)
      .filter(Boolean);
    return { ...state, stickyColumns };
  }

  if (action.type === actions.setStickyColumns) {
    return { ...state, stickyColumns: functionalUpdate(action.stickyColumns, state.stickyColumns ?? []) };
  }

  if (action.type === actions.toggleStickyColumn) {
    const current = state.stickyColumns ?? [];
    const has = current.includes(action.columnId);
    const should = typeof action.value !== 'undefined' ? action.value : !has;
    const stickyColumns = should
      ? has
        ? current
        : [...current, action.columnId]
      : current.filter((id: string) => id !== action.columnId);
    return { ...state, stickyColumns };
  }
}

// Effective sticky set = user-pinned columns (`state.stickyColumns`) ∪ grouped columns (`state.groupBy`).
const getStickySet = (state: TableInstance['state']) =>
  new Set<string>([...(state?.stickyColumns ?? []), ...(state?.groupBy ?? [])]);

const isStickyStart = (col: ColumnType, stickySet: Set<string>) =>
  stickySet.has(col.id) || INTERNAL_START_COLUMNS.has(col.id);

// Internal start columns (selection, highlight) only pin when a user/grouped column is sticky.
const hasUserStickyColumn = (cols: ColumnType[], stickySet: Set<string>) =>
  cols.some((col) => stickySet.has(col.id) && !INTERNAL_START_COLUMNS.has(col.id));

const visibleColumns = (currentVisibleColumns: ColumnType[], { instance }: { instance: TableInstance }) => {
  const stickySet = getStickySet(instance.state);
  const hasUserSticky = hasUserStickyColumn(currentVisibleColumns, stickySet);
  if (!hasUserSticky) {
    return currentVisibleColumns;
  }

  const stickyStart: ColumnType[] = [];
  const nonSticky: ColumnType[] = [];
  for (const col of currentVisibleColumns) {
    if (isStickyStart(col, stickySet)) {
      stickyStart.push(col);
    } else {
      nonSticky.push(col);
    }
  }

  return [...stickyStart, ...nonSticky];
};

const useStickyMetadata = (instance: TableInstance, onAutoToggleSticky?: OnAutoToggleSticky, disabled = false) => {
  const { visibleColumns: visCols, state, dispatch, flatHeaders } = instance;
  // Native vertical-scrollbar width (0 on overlay systems); reserved in the fit check below.
  const scrollbarSize = instance.webComponentsReactProperties?.scrollbarWidth ?? 0;

  // Instance methods + per-column toggle (mirrors useColumnOrder / useColumnVisibility).
  const setStickyColumns = useCallback(
    (stickyColumns: string[] | ((old: string[]) => string[])) =>
      dispatch({ type: actions.setStickyColumns, stickyColumns }),
    [dispatch],
  );
  const toggleStickyColumn = useCallback(
    (columnId: string, value?: boolean) => dispatch({ type: actions.toggleStickyColumn, columnId, value }),
    [dispatch],
  );
  if (!disabled) {
    // `instance` is mutable
    // eslint-disable-next-line react-hooks/immutability
    instance.setStickyColumns = setStickyColumns;
    // eslint-disable-next-line react-hooks/immutability
    instance.toggleStickyColumn = toggleStickyColumn;
    flatHeaders?.forEach((column: ColumnType) => {
      if (column.disableSticky) {
        return;
      }
      column.toggleSticky = (value?: boolean) =>
        dispatch({ type: actions.toggleStickyColumn, columnId: column.id, value });
    });
  }

  // No early returns: keep all hooks below unconditional (rules-of-hooks).
  const stickySet = getStickySet(state);
  const hasUserSticky = hasUserStickyColumn(visCols, stickySet);
  // Gate on `fontsReady`: widths stay at the 150px default until fonts load, skewing an early fit-check.
  const measured = (state?.tableClientWidth ?? 0) > 0 && !!instance.webComponentsReactProperties?.fontsReady;

  let stickyStartIndices: number[] = [];
  let totalStickyStartWidth = 0;
  let autoDisabled = false;

  if (!disabled && hasUserSticky) {
    for (let i = 0; i < visCols.length; i++) {
      const col = visCols[i];
      if (isStickyStart(col, stickySet)) {
        stickyStartIndices.push(i);
        totalStickyStartWidth += col.totalWidth ?? 0;
      } else {
        break;
      }
    }

    // Disable sticky when columns no longer fit. Skipped on first render before measurement.
    if (measured) {
      // Reserve the scrollbar + hysteresis margin only while inactive (`tableClientWidth` excludes it once active).
      const wasActive = (instance.stickyStartIndices?.length ?? 0) > 0;
      const reservedScrollable = getMinNonStickyColWidth() + (wasActive ? 0 : scrollbarSize + STICKY_FIT_HYSTERESIS_PX);
      const fits = state.tableClientWidth - reservedScrollable > totalStickyStartWidth;
      if (!fits) {
        autoDisabled = true;
        stickyStartIndices = [];
        totalStickyStartWidth = 0;
      }
    }
  }

  // Keep a stable reference while the contents are unchanged so downstream `useMemo`/`useCallback`
  // deps in the table don't rebuild every render. Keyed on the contents, not the array identity.
  const stickyStartIndicesKey = stickyStartIndices.join(',');
  const stableStickyStartIndices = useMemo(
    () => stickyStartIndices,
    // eslint-disable-next-line react-hooks/exhaustive-deps -- key captures the contents; array identity is intentionally ignored
    [stickyStartIndicesKey],
  );

  // Assign unconditionally so toggling off clears prior pins (indices are empty when disabled).
  Object.assign(instance, { stickyStartIndices: stableStickyStartIndices, totalStickyStartWidth });

  // Notify on width-driven enable/disable transitions (frozen-set config itself is untouched). The
  // transition guard means a stable-vs-new callback identity never causes a spurious re-fire.
  const prevDisabledRef = useRef(false);
  useEffect(() => {
    if (disabled || !hasUserSticky || !measured) {
      prevDisabledRef.current = false;
      return;
    }
    if (autoDisabled !== prevDisabledRef.current) {
      prevDisabledRef.current = autoDisabled;
      onAutoToggleSticky?.({ enabled: !autoDisabled, stickyColumns: state.stickyColumns ?? [] });
    }
  }, [autoDisabled, hasUserSticky, measured, state.stickyColumns, onAutoToggleSticky, disabled]);
};

const NAVIGATION_COLUMN = '__ui5wcr__internal_navigation_column';

export interface AnalyticalTableStickyColumnsChangeDetail {
  /** The column that was frozen or unfrozen. */
  column: ColumnType;
  /** `true` if the column is now frozen (sticky), `false` if it was unfrozen. */
  sticky: boolean;
  /** The resulting list of user-frozen column ids after the toggle. */
  stickyColumns: string[];
}

/** Fired only when a column is frozen/unfrozen via the popover; programmatic pinning does not trigger it. */
type OnStickyColumnsChange = (detail: AnalyticalTableStickyColumnsChangeDetail) => void;

export interface AnalyticalTableStickyAutoToggleDetail {
  /** `true` if sticky rendering is now active (columns fit), `false` if auto-disabled (container too narrow). */
  enabled: boolean;
  /** Current user-frozen column ids. Unchanged by the auto-toggle — the frozen-set config persists. */
  stickyColumns: string[];
}

/** Fired when sticky rendering auto-disables (too narrow) or re-enables (fits again); the frozen set is untouched. */
type OnAutoToggleSticky = (detail: AnalyticalTableStickyAutoToggleDetail) => void;

export interface UseStickyColumnsOptions {
  /** Fired only when a column is frozen/unfrozen via the header popover (not on programmatic pinning). */
  onStickyColumnsChange?: OnStickyColumnsChange;
  /** Fired when sticky rendering auto-disables due to limited width, and again when it re-enables. */
  onAutoToggleSticky?: OnAutoToggleSticky;
  /**
   * If `true`, the hook does nothing. To toggle at runtime, re-create the hook at the same position in
   * the (memoized) `tableHooks` array — never add or remove array entries.
   *
   * @default false
   */
  disabled?: boolean;
}

// Contributes a Freeze/Unfreeze menu item to the column header popover (generic `columnHeaderModalItems` hook).
const getColumnHeaderModalItems = (
  items: AnalyticalTableColumnHeaderModalItem[],
  { instance, column }: { instance: TableInstance; column: ColumnType },
  onStickyColumnsChange?: OnStickyColumnsChange,
) => {
  // Internal columns pin implicitly; don't expose a toggle for them.
  if (INTERNAL_START_COLUMNS.has(column.id) || column.id === NAVIGATION_COLUMN) {
    return items;
  }
  // Grouped columns are force-pinned by grouping — a toggle here couldn't take effect.
  if (instance.state?.groupBy?.includes(column.id) || typeof column.toggleSticky !== 'function') {
    return items;
  }
  const isFrozen = (instance.state?.stickyColumns ?? []).includes(column.id);
  const { freezeColumnText, unfreezeColumnText } = instance.webComponentsReactProperties?.translatableTexts ?? {};
  return [
    ...items,
    {
      id: 'ui5wcr-sticky-toggle',
      text: isFrozen ? unfreezeColumnText : freezeColumnText,
      icon: isFrozen ? iconPushpinOff : iconPushpinOn,
      run: ({ instance: inst, column: clickedColumn }) => {
        const current = inst.state?.stickyColumns ?? [];
        const sticky = !current.includes(clickedColumn.id);
        const stickyColumns = sticky
          ? [...current, clickedColumn.id]
          : current.filter((id: string) => id !== clickedColumn.id);
        clickedColumn.toggleSticky?.(sticky);
        // Popover-only callback — programmatic toggleStickyColumn/setStickyColumns intentionally skip this.
        onStickyColumnsChange?.({ column: clickedColumn, sticky, stickyColumns });
      },
    },
  ];
};

const setHeaderProps = (
  headerProps,
  { column, instance }: { column: TableInstance['column']; instance: TableInstance },
) => {
  const stickyActive = (instance.stickyStartIndices?.length ?? 0) > 0;
  const stickySet = getStickySet(instance.state);
  if (!stickyActive || !column || !stickySet.has(column.id)) {
    return headerProps;
  }
  const fixedColumnText = instance.webComponentsReactProperties?.translatableTexts?.fixedColumnText;
  if (!fixedColumnText) {
    return headerProps;
  }
  const existingLabel = headerProps?.['aria-label'] ?? '';
  return [headerProps, { 'aria-label': existingLabel ? `${existingLabel} ${fixedColumnText}` : fixedColumnText }];
};

/**
 * Plugin hook that pins columns to the inline-start of the table, keeping them visible while the user
 * scrolls horizontally. Internal columns rendered before the sticky region (selection, highlight) are
 * auto-pinned alongside.
 *
 * Pass via `tableHooks` to opt in:
 *
 * ```tsx
 * import { AnalyticalTable, AnalyticalTableHooks } from '@ui5/webcomponents-react';
 *
 * const tableHooks = [AnalyticalTableHooks.useStickyColumns()];
 *
 * <AnalyticalTable tableHooks={tableHooks} columns={columns} data={data} />
 * ```
 *
 * Mark columns with `sticky: 'start'` in the column definition to pin them initially, and/or toggle at
 * runtime via the `tableInstance` ref (`tableInstance.current.setStickyColumns(...)` /
 * `tableInstance.current.toggleStickyColumn(id)`). The `sticky: 'start'` option only seeds the initial
 * state; `state.stickyColumns` is authoritative.
 *
 * Auto-disables the sticky *rendering* when the container is too narrow to fit the frozen columns plus a
 * usable scrollable area, and re-enables it when the container grows again. The frozen-set config
 * (`state.stickyColumns`) is **kept** across auto-disable, so pins are not lost on resize — desirable for
 * user-resizable containers (dialogs, splitters). While auto-disabled, a frozen column that is not first
 * stays hoisted to the start as an ordinary (unfrozen) column; to revert its order when there is not
 * enough room, toggle its sticky state off.
 *
 * `renderRowSubComponent` and `responsivePopIn` are not supported.
 *
 * @param {UseStickyColumnsOptions=} options Optional callbacks.
 * @param {OnStickyColumnsChange=} options.onStickyColumnsChange Fired when a column is frozen/unfrozen via
 * the column header popover. Programmatic pinning (`tableInstance.toggleStickyColumn`/`setStickyColumns`)
 * does not trigger it, since the app developer already controls those calls.
 * @param {OnAutoToggleSticky=} options.onAutoToggleSticky Fired when sticky rendering auto-disables due to
 * limited width (`{ enabled: false }`) and again when it re-enables (`{ enabled: true }`). The frozen set
 * itself is unchanged; use this to reflect the state change in the UI (e.g. a toast).
 * @param {boolean=} options.disabled If `true`, the hook does nothing. To toggle at runtime, re-create the
 * hook at the same position in the (memoized) `tableHooks` array — never add or remove array entries.
 * Defaults to `false`.
 *
 * @experimental The API and behavior may change without notice.
 */
export const useStickyColumns = (options: UseStickyColumnsOptions = {}) => {
  const { onStickyColumnsChange, onAutoToggleSticky, disabled = false } = options;
  const useStickyColumnsHooks = (hooks: ReactTableHooks) => {
    // react-table calls each `useInstance` entry as a hook in stable order every render; the arrow only
    // threads the options through, so this is not a conditional hook call. It must always be registered
    // (stable hook count) and no-ops internally when disabled.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    hooks.useInstance.push((instance) => useStickyMetadata(instance, onAutoToggleSticky, disabled));
    // Push unconditionally and keep `disabled` in the result: this feeds a `useMemo` deps array whose size
    // must stay constant, and the memo must re-derive on toggle.
    hooks.visibleColumnsDeps.push((deps, { instance }) => [
      ...deps,
      instance.state.stickyColumns,
      instance.state.groupBy,
      disabled,
    ]);
    if (disabled) {
      return;
    }
    hooks.stateReducers.push(reducer);
    hooks.visibleColumns.push(visibleColumns);
    hooks.getHeaderProps.push(setHeaderProps);
    hooks.columnHeaderModalItems.push((items, meta) => getColumnHeaderModalItems(items, meta, onStickyColumnsChange));
  };
  useStickyColumnsHooks.pluginName = 'useStickyColumns';
  return useStickyColumnsHooks;
};
