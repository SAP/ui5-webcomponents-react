//todo remove
/* eslint-disable */
//@ts-nocheck

import type { TableFeature, Row, Updater, RowData } from '@tanstack/react-table';
import { KeyboardEvent } from 'react';

//todo: maybe apply handlers directly and come back to this once this PR made it into the table implementation:https://github.com/TanStack/table/pull/5927
export const SelectionFeature: TableFeature<RowData> = {
  createRow: (row: Row<RowData>, table) => {
    row.selectionBehavior = table.options.selectionBehavior;

    if (table.options.enableRowSelection) {
      row.getRowProps = () => ({
        onClick: (e) => {
          if (table.options.enableRowSelection) {
            if (row.selectionBehavior !== 'RowSelector') {
              console.log(e);
              row.toggleSelected!();
            }
          }
        },
        onKeyDown: (e: KeyboardEvent) => {
          if (e.key === 'Enter' && table.options.enableRowSelection) {
            row.toggleSelected!();
          }
        },
        'data-selection-behavior': row.selectionBehavior
      });
    }
  }
};
