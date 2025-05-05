import type { ColumnDef } from '@tanstack/react-table';
import { useEffect } from 'react';

//todo: share function between AT & ATV2
function calculateDefaultColumnWidths(tableWidth: number, columns: ColumnDef<any>[], verticalScrollbarWidth: number) {
  // Columns w/ external size property
  const fixed = [];
  // Columns w/o external size property
  const dynamic = [];
  let fixedTotal = 0;

  // Separate fixed and dynamic columns
  for (const col of columns) {
    const minSize = col.minSize ?? 0;
    const maxSize = col.maxSize ?? Infinity;

    // External `size` defined
    if (col.size !== undefined) {
      let size = col.size;
      if (size < minSize) {
        size = minSize;
      }
      if (size > maxSize) {
        size = maxSize;
      }
      fixedTotal += size;
      fixed.push({ col, size });
    } else {
      dynamic.push({ col, size: 0 });
    }
  }

  // Determine remaining size for dynamic columns
  const remaining = tableWidth - fixedTotal - verticalScrollbarWidth;

  // Calc total min-width required by dynamic columns
  let totalFlexibleMin = 0;
  for (const { col } of dynamic) {
    totalFlexibleMin += col.minSize ?? 0;
  }

  if (remaining < totalFlexibleMin) {
    // Not enough space - assign each dynamic column its `minSize`
    for (const dc of dynamic) {
      dc.size = dc.col.minSize ?? 0;
    }
  } else if (dynamic.length) {
    // Grant same space for each dynamic column
    const initialShare = remaining / dynamic.length;
    for (const dc of dynamic) {
      const minSize = dc.col.minSize ?? 0;
      const maxSize = dc.col.maxSize ?? Infinity;
      let size = initialShare;
      if (size < minSize) {
        size = minSize;
      }
      if (size > maxSize) {
        size = maxSize;
      }
      dc.size = size;
    }

    // Calc assigned size and remaining space
    let assigned = 0;
    for (const { size } of dynamic) {
      assigned += size ?? 0;
    }

    /**
     * - negative: table overflows
     * - positive: table has white-space between last column and borderInlineEnd
     */
    let remainingSpace = remaining - assigned;

    // Grow or shrink columns that are still dynamic

    // Grow columns
    while (remainingSpace > 0) {
      let expandableCount = 0;
      for (const { col, size } of dynamic) {
        if (size < (col.maxSize ?? Infinity)) {
          expandableCount++;
        }
      }
      if (expandableCount === 0) {
        break;
      }
      const extra = remainingSpace / expandableCount;
      let used = 0;
      for (const dc of dynamic) {
        const maxSize = dc.col.maxSize ?? Infinity;
        if (dc.size < maxSize) {
          const potential = dc.size + extra;
          if (potential > maxSize) {
            used += maxSize - dc.size;
            dc.size = maxSize;
          } else {
            dc.size = potential;
            used += extra;
          }
        }
      }
      remainingSpace -= used;
      if (used === 0) {
        break;
      }
    }

    // Shrink columns
    while (remainingSpace < 0) {
      let shrinkableCount = 0;
      for (const { col, size } of dynamic) {
        const min = col.minSize ?? 0;
        if (size > min) {
          shrinkableCount++;
        }
      }
      if (shrinkableCount === 0) {
        break;
      }
      const reduction = Math.abs(remainingSpace) / shrinkableCount;
      let used = 0;
      for (const dc of dynamic) {
        const min = dc.col.minSize ?? 0;
        if (dc.size > min) {
          const potential = dc.size - reduction;
          if (potential < min) {
            used += dc.size - min;
            dc.size = min;
          } else {
            dc.size = potential;
            used += reduction;
          }
        }
      }
      remainingSpace += used;
      if (used === 0) {
        break;
      }
    }
  }

  const result = {};
  for (const { col, size } of [...fixed, ...dynamic]) {
    // todo: accessorKey sufficient here?
    const key = col.id ?? col.accessorKey;
    result[key] = size;
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
