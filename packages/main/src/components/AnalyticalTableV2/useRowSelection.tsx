import type { CellContext, ColumnDef, HeaderContext } from '@tanstack/react-table';
import { useMemo } from 'react';
import { CheckBox } from '../../webComponents/CheckBox/index.js';
import type { AnalyticalTableV2Props } from './index.js';

interface SelectionTableOptions<TData> {
  enableRowSelection: boolean;
  enableMultiRowSelection: boolean;
  selectionBehavior: AnalyticalTableV2Props['selectionBehavior'];
  columns?: ColumnDef<TData, any>[];
}

export interface SelectionState {
  columnPinning: {
    left: ['_ui5wcr_selection_col'];
  };
}

const SelectionHeader = <TData,>({ table }: HeaderContext<TData, unknown>) => {
  if (!table.options.enableMultiRowSelection) {
    return null;
  }
  const isSomeSelected = table.getIsSomeRowsSelected();
  return <CheckBox checked={table.getIsAllRowsSelected() || isSomeSelected} indeterminate={isSomeSelected} />;
};

const SelectionCell = <TData,>({ row, table }: CellContext<TData, unknown>) => {
  if (!table.options.enableMultiRowSelection) {
    return null;
  }
  const someSelected = row.getIsSomeSelected();
  return (
    <CheckBox
      checked={row.getIsSelected() || someSelected}
      indeterminate={someSelected}
      // onChange={row.getToggleSelectedHandler()}
    />
  );
};

//todo types
const selectionColumn: ColumnDef<any, any> = {
  id: '_ui5wcr_selection_col',
  // todo: centralize defaults
  minSize: 44,
  size: 44,
  maxSize: 44,
  // todo: how to handle multiple headers?
  header: SelectionHeader,
  cell: SelectionCell
};

//todo type
export function useRowSelection<TData = unknown>(
  mode: AnalyticalTableV2Props['selectionMode'],
  behavior: AnalyticalTableV2Props['selectionBehavior'],
  userColumns: AnalyticalTableV2Props['columns']
): [SelectionTableOptions<TData>, SelectionState] {
  const selectionTableOptions = useMemo(() => {
    // todo: fully control selection state? (onRowSelectionChange)
    const options: SelectionTableOptions<TData> = {
      enableRowSelection: mode !== 'None',
      enableMultiRowSelection: mode === 'Multiple',
      selectionBehavior: behavior
    };
    if (mode !== 'None' && behavior !== 'RowOnly') {
      options.columns = [selectionColumn as ColumnDef<TData, any>, ...userColumns];
    }
    return options;
  }, [mode, userColumns, behavior]);

  const selectionState: SelectionState = {
    columnPinning: {
      left: ['_ui5wcr_selection_col']
    }
  };

  return [selectionTableOptions, selectionState];
}
