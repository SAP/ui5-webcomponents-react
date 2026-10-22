import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { AnalyticalTableSelectionBehavior } from '../../../enums/AnalyticalTableSelectionBehavior.js';
import { AnalyticalTableSelectionMode } from '../../../enums/AnalyticalTableSelectionMode.js';
import { CheckBox } from '../../../webComponents/CheckBox/index.js';
import { getBy } from '../react-table/index.js';
import type { AnalyticalTablePluginHookOptions, ReactTableHooks, RowType, TableInstance } from '../types/index.js';

type DisableRowSelectionType = string | ((row: RowType) => boolean);

const customCheckBoxStyling = {
  verticalAlign: 'middle',
};

const headerProps = (
  props,
  {
    instance: {
      webComponentsReactProperties: { selectionMode, translatableTexts },
    },
  }: { instance: TableInstance },
) => {
  if (
    props.key === 'header___ui5wcr__internal_selection_column' &&
    selectionMode === AnalyticalTableSelectionMode.Multiple
  ) {
    const style = { ...props.style, cursor: 'auto' };
    const ariaLabel = props['aria-label']?.replace(translatableTexts.selectAllA11yText, '');
    return [
      props,
      {
        onClick: undefined,
        onKeyDown: undefined,
        onKeyUp: undefined,
        title: undefined,
        ['aria-label']: ariaLabel,
        style,
      },
    ];
  }
  return props;
};

const columns = (columns: TableInstance['columns']) => {
  return columns.map((column) => {
    if (column.id === '__ui5wcr__internal_selection_column') {
      return {
        ...column,
        Cell: (instance) => {
          const { webComponentsReactProperties, row } = instance;
          if (row.disableSelect === true) {
            if (row.isGrouped && webComponentsReactProperties.selectionMode === AnalyticalTableSelectionMode.Single) {
              return null;
            }
            if (webComponentsReactProperties.selectionMode === AnalyticalTableSelectionMode.Single) {
              return <div onClick={undefined} data-name="internal_selection_column" />;
            }
            return (
              <CheckBox
                {...row.getToggleRowSelectedProps()}
                disabled
                style={customCheckBoxStyling}
                data-name="internal_selection_column"
                tabIndex={-1}
              />
            );
          }
          return column.Cell(instance);
        },
        Header: () => null,
      };
    }
    return column;
  });
};

/**
 * A plugin hook for disabling row selection of specific rows.
 *
 * __Note:__ The "Select All" checkbox is not available with this hook.
 *
 * @param disableRowSelection - Can be either a `string` or a `function`. `string:` Defines the key in the dataset for disabling rows. If the value of the key is `true`, then the row will not be selectable. `function:` Programmatically disable rows for selection. The function receives the current row as parameter.
 *
 * @param {object} [options] - Additional options.
 * @param {boolean} [options.disabled=false] - If `true`, the hook does nothing. To toggle at runtime, re-create the hook at the same position in the (memoized) `tableHooks` array — never add or remove array entries.
 *
 * @deprecated It is not recommended to disable table rows, mainly because of the following reasons:
 *
 * * Users are not informed why items cannot be selected.
 * * ARIA lacks built-in support for selective item selection, complicating accessibility.
 * * Consistency to other applications which do not offer disabled items.
 */
export const useRowDisableSelection = (
  disableRowSelection: DisableRowSelectionType,
  options?: AnalyticalTablePluginHookOptions,
) => {
  const { disabled = false } = options ?? {};
  const disableRowAccessor =
    typeof disableRowSelection === 'function'
      ? disableRowSelection
      : (d) => getBy(d.original, disableRowSelection, undefined);

  const getRowProps = (rowProps, { row, instance }: { row: RowType; instance: TableInstance }) => {
    const { webComponentsReactProperties } = instance;
    if (webComponentsReactProperties.selectionMode === AnalyticalTableSelectionMode.None) {
      return rowProps;
    }
    if (disableRowAccessor(row) === true) {
      row.disableSelect = true;
      const handleClick = (e) => {
        if (typeof webComponentsReactProperties.onRowClick === 'function') {
          webComponentsReactProperties.onRowClick(enrichEventWithDetails(e, { row }));
        }
      };
      const onKeyDown = (e) => {
        if (e.code === 'Enter' || e.code === 'Space') {
          e.preventDefault();
          if (e.code === 'Enter' && typeof webComponentsReactProperties.onRowClick === 'function') {
            webComponentsReactProperties.onRowClick(enrichEventWithDetails(e, { row }));
          }
        }
      };
      const onKeyUp = (e) => {
        if (e.code === 'Space') {
          e.preventDefault();
          if (typeof webComponentsReactProperties.onRowClick === 'function') {
            webComponentsReactProperties.onRowClick(enrichEventWithDetails(e, { row }));
          }
        }
      };
      return {
        ...rowProps,
        onClick: handleClick,
        onKeyDown,
        onKeyUp,
        className: webComponentsReactProperties.classes.tr,
      };
    }
    return rowProps;
  };

  const columnDeps = (deps) => {
    return [...deps, disableRowSelection, disabled];
  };

  const cellProps = (
    cellProps,
    { cell: { row, column }, instance }: { cell: TableInstance['cell']; instance: TableInstance },
  ) => {
    const { selectionMode, selectionBehavior } = instance.webComponentsReactProperties;
    if (
      disableRowAccessor(row) === true &&
      selectionMode !== AnalyticalTableSelectionMode.None &&
      (selectionBehavior !== AnalyticalTableSelectionBehavior.RowSelector ||
        column.id === '__ui5wcr__internal_selection_column')
    ) {
      const { 'aria-label': _0, ...updatedCellProps } = cellProps;
      if (column.id === '__ui5wcr__internal_selection_column') {
        const style = { ...cellProps.style, cursor: 'auto' };
        return { ...updatedCellProps, 'aria-disabled': true, style };
      }
      const { 'aria-selected': _1, ...updatedCellProsWithOutSelected } = updatedCellProps;
      return updatedCellProsWithOutSelected;
    }

    return cellProps;
  };

  const toggleRowSelectedProps = (rowProps, { row, instance }: { row: RowType; instance: TableInstance }) => {
    if (instance.webComponentsReactProperties.selectionMode === AnalyticalTableSelectionMode.None) {
      return rowProps;
    }
    if (disableRowAccessor(row) === true) {
      const { title: _0, ...updatedRowProps } = rowProps;
      return updatedRowProps;
    }
    return rowProps;
  };

  const useDisableSelectionRow = (hooks: ReactTableHooks) => {
    // Push unconditionally: feeds a `useMemo` deps array whose size must stay constant across toggles.
    hooks.columnsDeps.push(columnDeps);
    if (disabled) {
      return;
    }
    hooks.getHeaderProps.push(headerProps);
    hooks.getRowProps.push(getRowProps);
    hooks.columns.push(columns);
    hooks.getCellProps.push(cellProps);
    hooks.getToggleRowSelectedProps.push(toggleRowSelectedProps);
  };

  useDisableSelectionRow.pluginName = 'useRowDisableSelection';

  return useDisableSelectionRow;
};
