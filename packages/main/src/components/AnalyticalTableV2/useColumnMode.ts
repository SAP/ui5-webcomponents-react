import type { ColumnDef } from '@tanstack/react-table';
import { useEffect } from 'react';

function calculateDefaultColumnWidths(tableWidth: number, columns: ColumnDef<any>[], verticalScrollbarWidth) {
  // columns with external size
  const fixed = [];
  const dynamic = [];
  let fixedTotal = 0;

  // separate fixed and dynamic columns
  for (const col of columns) {
    const minSize = col.minSize ?? 0;
    const maxSize = col.maxSize;
    // external `size` defined
    if (col.size !== 0) {
      let width = col.size;
      if (width < minSize) {
        width = minSize;
      }
      if (width > maxSize) {
        width = maxSize;
      }
      fixedTotal += width;
      fixed.push({ col, width });
    } else {
      dynamic.push({ col, width: 0 });
    }
  }

  // Determine remaining width for dynamic columns
  const remaining = tableWidth - fixedTotal - verticalScrollbarWidth;

  // Calc total min-width required by dynamic columns
  let totalFlexibleMin = 0;
  for (const { col } of dynamic) {
    totalFlexibleMin += col.minSize ?? 0;
  }

  if (remaining < totalFlexibleMin) {
    // Not enough space - assign each dynamic column its `minSize`
    for (const dc of dynamic) {
      dc.width = dc.col.minSize ?? 0;
    }
  } else if (dynamic.length) {
    // grant same space for each dynamic column
    const initialShare = remaining / dynamic.length;
    for (const dc of dynamic) {
      const minSize = dc.col.minSize ?? 0;
      const maxSize = dc.col.maxSize;
      let width = initialShare;
      if (width < minSize) {
        width = minSize;
      }
      if (width > maxSize) {
        width = maxSize;
      }
      dc.width = width;
    }

    // Calc assigned width and remaining space
    let assigned = 0;
    for (const { width } of dynamic) {
      assigned += width;
    }
    let remainingSpace = remaining - assigned;

    // Share remaining space among columns that can grow
    while (remainingSpace > 0) {
      let expandableCount = 0;
      for (const { col, width } of dynamic) {
        if (width < col.maxSize) {
          expandableCount++;
        }
      }
      if (expandableCount === 0) {
        break;
      }
      const extra = remainingSpace / expandableCount;
      let used = 0;
      for (const dc of dynamic) {
        const { maxSize } = dc.col;
        if (dc.width < maxSize) {
          const potential = dc.width + extra;
          if (potential > maxSize) {
            used += maxSize - dc.width;
            dc.width = maxSize;
          } else {
            dc.width = potential;
            used += extra;
          }
        }
      }
      remainingSpace -= used;
      if (used === 0) {
        break;
      }
    }
  }

  const result = {};
  for (const { col, width } of [...fixed, ...dynamic]) {
    const key = col.id ?? col.accessorKey;
    result[key] = width;
  }
  return result;
}

//todo types
//todo implement other modes (pass different calc function - check what can be reused)
//todo debounce?
export function useColumnWidths(
  tableWidth: number,
  columnDefs: ColumnDef<any>[],
  setColumnSizing,
  verticalScrollbarWidth
) {
  useEffect(() => {
    if (!tableWidth) {
      return;
    }

    setColumnSizing(calculateDefaultColumnWidths(tableWidth, columnDefs, verticalScrollbarWidth));
    //todo: check deps
  }, [tableWidth, columnDefs.length, verticalScrollbarWidth]);
}
