import type { RowModel, SortingState, Table } from '@tanstack/react-table';
import { getSortedRowModel } from '@tanstack/react-table';
import type { Dispatch, SetStateAction } from 'react';
import { useMemo, useState } from 'react';

interface SortingTableOptions {
  //todo: type
  getSortedRowModel: (table: Table<unknown>) => () => RowModel<unknown>;
  onSortingChange: Dispatch<SetStateAction<SortingState>>;
}

interface SortingTableState {
  sorting: SortingState;
}

type EmptyObject = Record<string, never>;

//todo: overload or conditional return type --> overload - only use conditional return if complex generic is required
export function useSorting(sortable: true): [SortingTableOptions, SortingTableState];
export function useSorting(sortable: false | undefined): [EmptyObject, EmptyObject];

export function useSorting(sortable?: boolean): [SortingTableOptions, SortingTableState] | [EmptyObject, EmptyObject] {
  const [sorting, setSorting] = useState<SortingState>([]);

  return useMemo(() => {
    if (!sortable) {
      return [{}, {}] as [EmptyObject, EmptyObject];
    }

    return [
      {
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting
      },
      { sorting }
    ] as [SortingTableOptions, SortingTableState];
  }, [sortable, sorting]);
}
