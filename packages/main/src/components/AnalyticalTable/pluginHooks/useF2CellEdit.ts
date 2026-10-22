import { useI18nBundle } from '@ui5/webcomponents-react-base';
import type { Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { FocusEventHandler, KeyboardEventHandler } from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { INCLUDES_X, MOVE_TO_CONTENT_F2 } from '../../../i18n/i18n-defaults.js';
import type {
  AnalyticalTablePluginHookOptions,
  CellInstance,
  CellType,
  ColumnType,
  PluginHook,
  ReactTableHooks,
  TableInstance,
} from '../types/index.js';
import { NAVIGATION_KEYS } from '../util/index.js';

const NON_STANDARD_INTERACTIVE_ELEMENTS = [
  '[ui5-checkbox]',
  '[ui5-switch]',
  '[ui5-radio-button]',
  '[ui5-rating-indicator]',
  '[ui5-segmented-button]',
  '[ui5-select]',
  '[ui5-slider]',
  '[ui5-split-button]',
  '[ui5-icon][mode="Interactive"]',
];

// Frames to wait for a component's focus DOM ref to become resolvable (nested shadow roots may render late).
const MAX_FOCUS_REF_RETRIES = 3;

const useF2CellEditPlugin = (hooks: ReactTableHooks, disabled: boolean) => {
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const lastFocusedBodyRowRef = useRef<number | null>(null);

  const setCellProps = useCallback(
    (props, { cell, instance }: { cell: CellType; instance: TableInstance }) => {
      const { dispatch, state, webComponentsReactProperties } = instance;
      const { tableRef } = webComponentsReactProperties;
      const { interactiveElementName } = cell.column;
      const inputName =
        typeof interactiveElementName === 'function' ? interactiveElementName(cell) : interactiveElementName;
      const ariaLabel =
        (interactiveElementName ? i18nBundle.getText(INCLUDES_X, inputName) : '') + ' ' + props['aria-label'];

      const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (state.cellContentTabIndex === 0 && NAVIGATION_KEYS.has(e.key) && !e.key.includes('Arrow')) {
          e.preventDefault();
        }

        if (e.key === 'F2') {
          if (e.currentTarget === e.target && interactiveElementName) {
            const interactiveElement = findFirstFocusableInside(e.target as HTMLElement);
            if (interactiveElement) {
              dispatch({ type: 'CELL_CONTENT_TAB_INDEX', payload: 0 });
              e.currentTarget.tabIndex = -1;
              requestAnimationFrame(() => {
                interactiveElement.focus();
              });
            }
          }
          if (e.currentTarget !== e.target) {
            dispatch({ type: 'CELL_CONTENT_TAB_INDEX', payload: -1 });
            e.currentTarget.tabIndex = 0;
            e.currentTarget.focus();
          }
        }

        // Shift+Tab on body cell -> focus same column header cell
        if (e.key === 'Tab' && e.shiftKey && e.currentTarget === e.target) {
          const rowIndex = parseInt(e.currentTarget.dataset.rowIndex, 10);
          const columnIndex = parseInt(e.currentTarget.dataset.columnIndex, 10);

          if (rowIndex > 0) {
            lastFocusedBodyRowRef.current = rowIndex;
            const headerCell: HTMLElement | null = tableRef.current.querySelector(
              `div[data-column-index="${columnIndex}"][data-row-index="0"]`,
            );
            if (headerCell) {
              e.preventDefault();
              e.currentTarget.tabIndex = -1;
              headerCell.tabIndex = 0;
              headerCell.focus();
            }
          }
        }
      };

      const handleFocus: FocusEventHandler<HTMLDivElement> = (e) => {
        if (typeof props.onFocus === 'function') {
          props.onFocus(e);
        }

        if (e.currentTarget !== e.target) {
          dispatch({ type: 'CELL_CONTENT_TAB_INDEX', payload: 0 });
        } else {
          dispatch({ type: 'CELL_CONTENT_TAB_INDEX', payload: -1 });
        }

        const rowIndex = parseInt(e.currentTarget.dataset.rowIndex, 10);
        if (rowIndex > 0) {
          lastFocusedBodyRowRef.current = rowIndex;
        }
      };

      return [props, { onKeyDown: handleKeyDown, onFocus: handleFocus, 'aria-label': ariaLabel }];
    },
    [i18nBundle],
  );

  const setHeaderProps = useCallback((headerProps, { instance }: { instance: TableInstance; column: ColumnType }) => {
    const { webComponentsReactProperties } = instance;
    const { tableRef } = webComponentsReactProperties;

    // Tab on header cell -> focus same column body cell
    const handleKeyDown: KeyboardEventHandler<HTMLElement> = (e) => {
      if (typeof headerProps.onKeyDown === 'function') {
        headerProps.onKeyDown(e);
      }

      if (e.key === 'Tab' && !e.shiftKey && e.currentTarget === e.target) {
        const columnIndex = parseInt(e.currentTarget.dataset.columnIndex, 10);
        const targetRowIndex = lastFocusedBodyRowRef.current ?? 1;
        let targetCell: HTMLElement | null = tableRef.current.querySelector(
          `div[data-column-index="${columnIndex}"][data-row-index="${targetRowIndex}"]`,
        );
        if (!targetCell) {
          targetCell = tableRef.current.querySelector(
            `div[data-column-index="${columnIndex}"][data-visible-row-index="1"]`,
          );
        }
        if (targetCell) {
          e.preventDefault();
          e.currentTarget.tabIndex = -1;
          targetCell.tabIndex = 0;
          targetCell.focus();
          targetCell.scrollIntoView({ block: 'nearest' });
        }
      }
    };

    return [headerProps, { onKeyDown: handleKeyDown }];
  }, []);

  const setTableProps = useCallback(
    (tableProps) => {
      const f2Description = i18nBundle.getText(MOVE_TO_CONTENT_F2);
      const existingDescription = tableProps['aria-description'];
      const ariaDescription = existingDescription ? `${existingDescription} ${f2Description}` : f2Description;

      return [tableProps, { 'aria-description': ariaDescription }];
    },
    [i18nBundle],
  );

  // `useInstanceBeforeDimensions` is called as a React hook by react-table, so it must always be
  // registered (stable hook count); it no-ops internally when disabled.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  hooks.useInstanceBeforeDimensions.push((instance: TableInstance) => useInstanceBeforeDimensions(instance, disabled));
  if (disabled) {
    return;
  }
  hooks.getTableProps.push(setTableProps);
  hooks.getCellProps.push(setCellProps);
  hooks.getHeaderProps.push(setHeaderProps);
  hooks.stateReducers.push(stateReducer);
};

export interface UseF2CellEditHook {
  /** Legacy direct usage: `tableHooks={[useF2CellEdit]}`. */
  (hooks: ReactTableHooks): void;
  /** Factory usage: `tableHooks={[useF2CellEdit({ disabled })]}`. */
  (options?: AnalyticalTablePluginHookOptions): PluginHook;
  pluginName: string;
  useCallbackRef: <T extends HTMLElement = HTMLElement>(props: CellInstance) => (node: T | null) => void;
}

// Distinguishes legacy direct usage (`[useF2CellEdit]`, react-table passes the hooks registry) from
// factory usage (`[useF2CellEdit({ disabled })]`). The registry always exposes array props.
const isHooksRegistry = (arg: unknown): arg is ReactTableHooks =>
  !!arg && Array.isArray((arg as ReactTableHooks).getCellProps);

/**
 * A plugin hook that enables F2-based cell editing for interactive elements inside a cell.
 *
 * To __ensure the hook works correctly__, make sure that:
 *
 * - Each column containing interactive elements has the `interactiveElementName` property set. __Note:__ This property is also used to describe the cell's content for screen readers.
 * - The callback Ref returned by `useF2CellEdit.useCallbackRef` is attached to every interactive element within the cell.
 *
 * It manages focus, keyboard navigation, and `tabindex` for cells with interactive content:
 * - Pressing `F2` moves focus between the cell container and its first interactive element.
 * - Pressing `Tab` on a focused header cell moves focus to the body cell in the same column at the last focused body row (or the first row if none was focused).
 * - Pressing `Shift+Tab` on a focused body cell moves focus back to the header cell of the same column.
 * - Updates the cell's `aria-label` with the interactive element's name for accessibility.
 * - Prevents standard navigation keys from interfering when editing a cell.
 *
 * @example
 * ```tsx
 * import type {
 *   AnalyticalTableCellInstance,
 *   AnalyticalTableColumnDefinition,
 *   InputDomRef,
 *   AnalyticalTablePropTypes,
 * } from '@ui5/webcomponents-react';
 * import { AnalyticalTableHooks, AnalyticalTable, Input } from '@ui5/webcomponents-react';
 *
 * const columns: AnalyticalTableColumnDefinition[] = [
 *   {
 *     Header: 'Input',
 *     id: 'input',
 *     Cell: (props: AnalyticalTableCellInstance) => {
 *       const callbackRef = AnalyticalTableHooks.useF2CellEdit.useCallbackRef<InputDomRef>(props);
 *       return <Input ref={callbackRef} />;
 *     },
 *     interactiveElementName: 'Input',
 *   },
 * ];
 *
 * const tableHooks: AnalyticalTablePropTypes['tableHooks'] = [AnalyticalTableHooks.useF2CellEdit];
 *
 * function TableWithInput() {
 *   return <AnalyticalTable data={data} columns={columns} tableHooks={tableHooks} />;
 * }
 * ```
 *
 * @param {AnalyticalTablePluginHookOptions=} [options] Optional configuration. Omit for legacy direct usage
 * (`tableHooks={[useF2CellEdit]}`), or pass to use the factory form (`tableHooks={[useF2CellEdit({ disabled })]}`).
 * @param {boolean=} options.disabled If `true`, the hook does nothing. To toggle at runtime, re-create the hook
 * at the same position in the (memoized) `tableHooks` array — never add or remove array entries. Defaults to `false`.
 *
 * @since 2.14.0
 */
export const useF2CellEdit = ((hooksOrOptions?: ReactTableHooks | AnalyticalTablePluginHookOptions) => {
  if (isHooksRegistry(hooksOrOptions)) {
    useF2CellEditPlugin(hooksOrOptions, false);
    return;
  }
  const { disabled = false } = hooksOrOptions ?? {};
  // The returned `plugin` is pushed into `tableHooks` and invoked by react-table as a hook; threading
  // `disabled` through this arrow is not a conditional hook call.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const plugin = (hooks: ReactTableHooks) => useF2CellEditPlugin(hooks, disabled);
  plugin.pluginName = 'useF2CellEdit';
  return plugin;
}) as UseF2CellEditHook;
useF2CellEdit.pluginName = 'useF2CellEdit';

/**
 * Returns a callback ref for a cell's interactive element, setting its `tabindex` based on the cell state.
 *
 * **Must be attached to every interactive element inside the cell!**
 *
 * @param props - The table cell props containing state.
 *
 * @example
 * ```tsx
 *  Cell: (props: AnalyticalTableCellInstance) => {
 *    const callbackRef = useF2CellEdit.useCallbackRef(props);
 *    return <Input ref={callbackRef} />;
 *  },
 * ```
 */
useF2CellEdit.useCallbackRef = <T extends HTMLElement = HTMLElement>(props: CellInstance) => {
  const cellContentTabIndex = props.state.cellContentTabIndex === -1 ? '-1' : '0';
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useCallback(
    (node: T | null) => {
      if (node) {
        const setTabIndex = (el: Element | Ui5DomRef, retries = 0) => {
          if (typeof (el as Ui5DomRef).getFocusDomRefAsync === 'function') {
            void (el as Ui5DomRef)
              .getFocusDomRefAsync()
              .then((resolved) => {
                if (resolved && resolved !== el) {
                  setTabIndex(resolved);
                } else if (el.isConnected && !resolved && retries < MAX_FOCUS_REF_RETRIES) {
                  if (process.env.NODE_ENV === 'development' && retries === 0) {
                    console.warn(
                      `useF2CellEdit: the focus DOM ref of <${(el as HTMLElement).localName}> did not resolve.`,
                    );
                  }
                  // Focus DOM ref not ready yet (e.g. StepInput's nested NumberInput shadow); retry before falling back, so tabindex isn't stamped on the wrong (host) element.
                  requestAnimationFrame(() => setTabIndex(el, retries + 1));
                } else {
                  el.setAttribute('tabindex', cellContentTabIndex);
                }
              })
              .catch(() => {
                // fail silently
              });
          } else {
            el.setAttribute('tabindex', cellContentTabIndex);
          }
        };

        setTabIndex(node);
      }
    },
    [cellContentTabIndex],
  );
};

const stateReducer: TableInstance['stateReducer'] = (state, action, _prevState) => {
  const { payload, type } = action;

  if (type === 'CELL_CONTENT_TAB_INDEX') {
    return { ...state, cellContentTabIndex: payload };
  }
  return state;
};

function findFirstFocusableInside(element: HTMLElement) {
  if (!element) return null;

  function recursiveFindInteractiveElement(el) {
    for (const child of el.children) {
      const style = getComputedStyle(child);
      if (child.disabled || style.display === 'none' || style.visibility === 'hidden') {
        continue;
      }

      const focusableSelectors = [
        'a[href]',
        'button',
        'input',
        'textarea',
        'select',
        '[tabindex]:not([tabindex="-1"])',
        ...NON_STANDARD_INTERACTIVE_ELEMENTS,
      ];

      if (child.matches(focusableSelectors.join(','))) {
        return child;
      }

      if (child.shadowRoot) {
        const shadowFocusable = recursiveFindInteractiveElement(child.shadowRoot);
        if (shadowFocusable) return shadowFocusable;
      }

      const nestedFocusable = recursiveFindInteractiveElement(child);
      if (nestedFocusable) return nestedFocusable;
    }
    return null;
  }

  return recursiveFindInteractiveElement(element);
}

/**
 * Init `cellContentTabIndex` if the plugin hook is used.
 */
function useInstanceBeforeDimensions(instance: TableInstance, disabled: boolean) {
  const { dispatch } = instance;
  useEffect(() => {
    if (disabled) {
      return;
    }
    dispatch({ type: 'CELL_CONTENT_TAB_INDEX', payload: -1 });
  }, [dispatch, disabled]);
}
