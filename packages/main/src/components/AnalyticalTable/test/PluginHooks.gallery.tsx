import { useCallback, useMemo, useState } from 'react';
import { AnalyticalTableSelectionMode } from '../../../enums/AnalyticalTableSelectionMode.js';
import { AnalyticalTable } from '../index.js';
import type { AnalyticalTableColumnDefinition, AnalyticalTablePropTypes } from '../index.js';
import * as AnalyticalTableHooks from '../pluginHooks/AnalyticalTableHooks.js';

export type DisableableHook =
  | 'useStickyColumns'
  | 'useManualRowSelect'
  | 'useRowDisableSelection'
  | 'useIndeterminateRowSelection'
  | 'useOnColumnResize'
  | 'useAnnounceEmptyCells'
  | 'useF2CellEdit'
  | 'useOrderedMultiSort';

interface Row {
  name: string;
  age: number;
  note: string;
  isSelected?: boolean;
  blocked?: boolean;
  subRows?: Row[];
}

const flatData: Row[] = [
  { name: 'Peter', age: 40, note: '', isSelected: true, blocked: true },
  { name: 'Kristen', age: 30, note: 'note-1', isSelected: false, blocked: false },
  { name: 'Max', age: 20, note: '', isSelected: false, blocked: true },
  { name: 'Anna', age: 10, note: 'note-2', isSelected: false, blocked: false },
];

const treeData: Row[] = [
  {
    name: 'Parent',
    age: 1,
    note: 'root',
    subRows: [
      { name: 'Child-A', age: 2, note: 'a' },
      { name: 'Child-B', age: 3, note: 'b' },
    ],
  },
];

const baseColumns: AnalyticalTableColumnDefinition[] = [
  { Header: 'Name', accessor: 'name', width: 150 },
  { Header: 'Age', accessor: 'age', width: 150 },
  { Header: 'Note', accessor: 'note', width: 150 },
];

const stickyColumns: AnalyticalTableColumnDefinition[] = [
  { Header: 'Name', accessor: 'name', width: 150 },
  { Header: 'Age', accessor: 'age', width: 150 },
  // Non-first sticky column so the enabled reorder (hoist to start) is observable.
  { Header: 'Note', accessor: 'note', width: 150, sticky: 'start' },
  { Header: 'Age 2', accessor: 'age', id: 'age2', width: 150 },
  { Header: 'Note 2', accessor: 'note', id: 'note2', width: 150 },
];

const multiSortColumns: AnalyticalTableColumnDefinition[] = [
  { Header: 'Name', accessor: 'name', width: 150, enableMultiSort: true },
  { Header: 'Age', accessor: 'age', width: 150, enableMultiSort: true },
  { Header: 'Note', accessor: 'note', width: 150, enableMultiSort: true },
];

interface HookConfig {
  columns: AnalyticalTableColumnDefinition[];
  data: Row[];
  containerWidth: string;
  table: Partial<AnalyticalTablePropTypes>;
}

function getConfig(hook: DisableableHook): HookConfig {
  switch (hook) {
    case 'useStickyColumns':
      return { columns: stickyColumns, data: flatData, containerWidth: '500px', table: {} };
    case 'useManualRowSelect':
      return {
        columns: baseColumns,
        data: flatData,
        containerWidth: '600px',
        table: { selectionMode: AnalyticalTableSelectionMode.Multiple },
      };
    case 'useRowDisableSelection':
      return {
        columns: baseColumns,
        data: flatData,
        containerWidth: '600px',
        table: { selectionMode: AnalyticalTableSelectionMode.Multiple },
      };
    case 'useIndeterminateRowSelection':
      return {
        columns: baseColumns,
        data: treeData,
        containerWidth: '600px',
        table: {
          selectionMode: AnalyticalTableSelectionMode.Multiple,
          isTreeTable: true,
          reactTableOptions: { selectSubRows: true },
        },
      };
    case 'useOrderedMultiSort':
      return { columns: multiSortColumns, data: flatData, containerWidth: '600px', table: { sortable: true } };
    default:
      return { columns: baseColumns, data: flatData, containerWidth: '600px', table: {} };
  }
}

function useTableHooks(hook: DisableableHook, disabled: boolean, onResize: () => void) {
  return useMemo<AnalyticalTablePropTypes['tableHooks']>(() => {
    /* eslint-disable react-hooks/rules-of-hooks -- factory calls, not React hooks */
    switch (hook) {
      case 'useStickyColumns':
        return [AnalyticalTableHooks.useStickyColumns({ disabled })];
      case 'useManualRowSelect':
        return [AnalyticalTableHooks.useManualRowSelect('isSelected', { disabled })];
      case 'useRowDisableSelection':
        return [AnalyticalTableHooks.useRowDisableSelection('blocked', { disabled })];
      case 'useIndeterminateRowSelection':
        return [AnalyticalTableHooks.useIndeterminateRowSelection(undefined, { disabled })];
      case 'useOnColumnResize':
        return [AnalyticalTableHooks.useOnColumnResize(onResize, { disabled })];
      case 'useAnnounceEmptyCells':
        return [AnalyticalTableHooks.useAnnounceEmptyCells({ disabled })];
      case 'useF2CellEdit':
        return [AnalyticalTableHooks.useF2CellEdit({ disabled })];
      case 'useOrderedMultiSort':
        return [AnalyticalTableHooks.useOrderedMultiSort(['note', 'name'], { disabled })];
    }
    /* eslint-enable react-hooks/rules-of-hooks */
  }, [hook, disabled, onResize]);
}

interface DisableHooksHarnessProps {
  hook: DisableableHook;
  disabled?: boolean;
}

/**
 * Mounts a single plugin hook with a `disabled` flag and a runtime toggle that re-creates the hook at the same
 * `tableHooks` index — the supported way to flip `disabled` without violating the rules of hooks.
 */
export const DisableHooksHarness = ({ hook, disabled: initialDisabled = false }: DisableHooksHarnessProps) => {
  const [disabled, setDisabled] = useState(initialDisabled);
  const [resizeCount, setResizeCount] = useState(0);
  const onResize = useCallback(() => setResizeCount((c) => c + 1), []);
  const tableHooks = useTableHooks(hook, disabled, onResize);
  const { columns, data, containerWidth, table } = getConfig(hook);
  const style = useMemo(() => ({ width: containerWidth }), [containerWidth]);

  return (
    <>
      <button type="button" data-testid="toggle-disabled" onClick={() => setDisabled((d) => !d)}>
        toggle
      </button>
      <span data-testid="disabled-state">{String(disabled)}</span>
      <span data-testid="resize-count">{resizeCount}</span>
      <AnalyticalTable style={style} columns={columns} data={data} tableHooks={tableHooks} {...table} />
    </>
  );
};
