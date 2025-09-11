import { useMemo } from 'react';
import { AnalyticalTableScaleWidthMode } from '../../../enums/AnalyticalTableScaleWidthMode.js';
import type {
  AnalyticalTableColumnDefinition,
  ColumnType,
  ReactTableHooks,
  TableInstance,
  RowType,
} from '../types/index.js';

interface IColumnMeta {
  contentPxAvg: number;
  headerPx: number;
  headerDefinesWidth?: boolean;
  maxWidth?: number | undefined;
  width?: number | undefined;
}

const ROW_SAMPLE_SIZE = 20;
const MAX_WIDTH = 700;
export const CELL_PADDING_PX = 18; /* padding left and right 0.5rem each (16px) + borders (1px) + buffer (1px) */

function getContentPxLongest(rowSample: RowType[], columnIdOrAccessor: string, uniqueId) {
  return rowSample.reduce((max, item) => {
    const dataPoint = item.values?.[columnIdOrAccessor];

    if (dataPoint) {
      const val = stringToPx(dataPoint, uniqueId) + CELL_PADDING_PX;
      return Math.max(max, val);
    }

    return max;
  }, 0);
}

function getContentPxAvg(rowSample, columnIdOrAccessor, uniqueId) {
  return (
    rowSample.reduce((acc, item) => {
      const dataPoint = item.values?.[columnIdOrAccessor];

      let val = 0;
      if (dataPoint) {
        val = stringToPx(dataPoint, uniqueId) + CELL_PADDING_PX;
      }
      return acc + val;
    }, 0) / (rowSample.length || 1)
  );
}

function stringToPx(dataPoint, id, isHeader = false) {
  const elementId = isHeader ? 'scaleModeHelperHeader' : 'scaleModeHelper';
  const ruler = document.getElementById(`${elementId}-${id}`);
  if (ruler) {
    ruler.textContent = `${dataPoint}`;
    return ruler.scrollWidth;
  }
  return 0;
}

function calculateDefaultColumnWidths(tableWidth: number, columns: AnalyticalTableColumnDefinition[]) {
  // Columns w/ external width property
  const fixed = [];
  // Columns w/o external width property
  const dynamic = [];
  let fixedTotal = 0;

  // Separate fixed and dynamic columns
  for (const col of columns) {
    const minSize = col.minWidth ?? 0;
    const maxSize = col.maxWidth ?? Infinity;

    // External `width` defined
    if (col.width !== undefined) {
      let width = col.width;
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
  const remaining = tableWidth - fixedTotal;

  // Calc total min-width required by dynamic columns
  let totalFlexibleMin = 0;
  for (const { col } of dynamic) {
    totalFlexibleMin += col.minWidth ?? 0;
  }

  if (remaining < totalFlexibleMin) {
    // Not enough space - assign each dynamic column its `minSize`
    for (const dc of dynamic) {
      dc.width = dc.col.minWidth ?? 0;
    }
  } else if (dynamic.length) {
    // Grant same space for each dynamic column
    const initialShare = remaining / dynamic.length;
    for (const dc of dynamic) {
      const minSize = dc.col.minWidth ?? 0;
      const maxSize = dc.col.maxWidth ?? Infinity;
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
      assigned += width ?? 0;
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
      for (const { col, width } of dynamic) {
        if (width < (col.maxWidth ?? Infinity)) {
          expandableCount++;
        }
      }
      if (expandableCount === 0) {
        break;
      }
      const extra = remainingSpace / expandableCount;
      let used = 0;
      for (const dc of dynamic) {
        const maxWidth = dc.col.maxWidth ?? Infinity;
        if (dc.width < maxWidth) {
          const potential = dc.width + extra;
          if (potential > maxWidth) {
            used += maxWidth - dc.width;
            dc.width = maxWidth;
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

    // Shrink columns
    while (remainingSpace < 0) {
      let shrinkableCount = 0;
      for (const { col, width } of dynamic) {
        const min = col.minWidth ?? 0;
        if (width > min) {
          shrinkableCount++;
        }
      }
      if (shrinkableCount === 0) {
        break;
      }
      const reduction = Math.abs(remainingSpace) / shrinkableCount;
      let used = 0;
      for (const dc of dynamic) {
        const min = dc.col.minWidth ?? 0;
        if (dc.width > min) {
          const potential = dc.width - reduction;
          if (potential < min) {
            used += dc.width - min;
            dc.width = min;
          } else {
            dc.width = potential;
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
  for (const { col, width } of [...fixed, ...dynamic]) {
    const key = col.id ?? col.accessor;
    result[key] = width;
  }
  return result;
}

const calculateSmartAndGrowColumns = (
  columns: AnalyticalTableColumnDefinition[],
  instance: TableInstance,
  hiddenColumns: ColumnType,
  isGrow = false,
) => {
  const { rows, state, webComponentsReactProperties } = instance;
  const rowSample = rows.slice(0, ROW_SAMPLE_SIZE);
  const { tableClientWidth: totalWidth } = state;

  const visibleColumns = columns.filter(
    (column) => (column.isVisible ?? true) && !hiddenColumns.includes(column.id ?? column.accessor),
  );

  const columnMeta: Record<string, IColumnMeta> = visibleColumns.reduce(
    (metadata: Record<string, IColumnMeta>, column) => {
      const columnIdOrAccessor = (column.id ?? column.accessor) as string;
      if (
        column.id === '__ui5wcr__internal_selection_column' ||
        column.id === '__ui5wcr__internal_highlight_column' ||
        column.id === '__ui5wcr__internal_navigation_column'
      ) {
        metadata[columnIdOrAccessor] = {
          headerPx: column.width || column.minWidth || 60,
          contentPxAvg: 0,
        };
        return metadata;
      }

      let headerPx: number, contentPxLength: number;

      if (column.scaleWidthModeOptions?.cellString) {
        contentPxLength =
          stringToPx(column.scaleWidthModeOptions.cellString, webComponentsReactProperties.uniqueId) + CELL_PADDING_PX;
      } else {
        contentPxLength = isGrow
          ? getContentPxLongest(rowSample, columnIdOrAccessor, webComponentsReactProperties.uniqueId)
          : getContentPxAvg(rowSample, columnIdOrAccessor, webComponentsReactProperties.uniqueId);
      }

      if (column.scaleWidthModeOptions?.headerString) {
        headerPx = Math.max(
          stringToPx(column.scaleWidthModeOptions.headerString, webComponentsReactProperties.uniqueId, true) +
            CELL_PADDING_PX,
          60,
        );
      } else {
        headerPx =
          typeof column.Header === 'string'
            ? Math.max(stringToPx(column.Header, webComponentsReactProperties.uniqueId, true) + CELL_PADDING_PX, 60)
            : 60;
      }

      metadata[columnIdOrAccessor] = {
        headerPx,
        contentPxAvg: contentPxLength,
        // When Grow mode is active, static max width should be applied
        maxWidth: column.maxWidth ?? (isGrow ? MAX_WIDTH : undefined),
        width: column.width,
      };
      return metadata;
    },
    {},
  );

  let totalContentPxAvgPrio1 = 0;
  let totalNumberColPrio2 = 0;

  /**
   * Width reserved by predefined widths or columns defined by header
   * Grow: full content width or header width (if wider) if not restricted by maxWidth
   */
  const reservedWidth: number = visibleColumns.reduce((acc, column) => {
    const columnIdOrAccessor = (column.id ?? column.accessor) as string;
    const { contentPxAvg, headerPx } = columnMeta[columnIdOrAccessor];
    if (isGrow) {
      totalContentPxAvgPrio1 += columnMeta[columnIdOrAccessor].contentPxAvg;
      const targetWidth = Math.min(
        Math.max(column.minWidth ?? 0, column.width ?? Math.max(contentPxAvg, headerPx)),
        column.maxWidth ?? MAX_WIDTH,
      );

      if (targetWidth !== column.maxWidth) {
        totalNumberColPrio2++;
      }
      return acc + targetWidth;
    }

    if (contentPxAvg > headerPx) {
      if (!column.minWidth && !column.width) {
        totalContentPxAvgPrio1 += columnMeta[columnIdOrAccessor].contentPxAvg;
        totalNumberColPrio2++;
        return acc;
      } else {
        return acc + Math.max(column.minWidth || 0, column.width || 0);
      }
    } else {
      if (!column.minWidth && !column.width) {
        totalNumberColPrio2++;
      }
      const max = Math.max(column.minWidth || 0, column.width ?? headerPx);
      columnMeta[columnIdOrAccessor].headerDefinesWidth = true;
      return acc + max;
    }
  }, 0);

  const availableWidthPrio1 = totalWidth - reservedWidth;
  let availableWidthPrio2 = availableWidthPrio1;

  /**
   * Step 1: Give columns defined by content more space (priority 1)
   * Grow: Give all columns the required space necessary to display the full content (up to the maxWidth)
   */
  const visibleColumnsAdaptedPrio1 = visibleColumns.map((column) => {
    const columnIdOrAccessor = (column.id ?? column.accessor) as string;
    const meta = columnMeta[columnIdOrAccessor];
    if (meta && !column.minWidth && !column.width && !meta.headerDefinesWidth) {
      let targetWidth: number;
      const { contentPxAvg, headerPx } = meta;

      if (isGrow) {
        targetWidth = Math.min(Math.max(contentPxAvg, headerPx), meta.maxWidth);
      } else if (availableWidthPrio1 > 0) {
        const factor = contentPxAvg / totalContentPxAvgPrio1;
        targetWidth = Math.max(Math.min(availableWidthPrio1 * factor, contentPxAvg), headerPx);
        availableWidthPrio2 -= targetWidth;
      }

      return {
        ...column,
        nextWidth: targetWidth || headerPx,
        maxWidth: isGrow ? (column?.maxWidth ?? MAX_WIDTH) : Infinity,
      };
    }
    return column;
  });

  let fullWidthOfAllColumns = 0;
  let lessThanMaxWidthCount = 0;

  /**
   * Step 2: Give all columns more space (priority 2)
   */
  const visibleColumnsAdaptedPrio2 = visibleColumnsAdaptedPrio1.map((column) => {
    const columnIdOrAccessor = (column.id ?? column.accessor) as string;
    const meta = columnMeta[columnIdOrAccessor];
    const { headerPx } = meta;

    if (meta && !column.minWidth && !column.width) {
      let targetWidth = column.nextWidth || headerPx;
      if (availableWidthPrio2 > 0) {
        targetWidth = Math.min(
          targetWidth + availableWidthPrio2 * (1 / totalNumberColPrio2),
          column.maxWidth ?? Infinity,
        );
        if (targetWidth < (column.maxWidth ?? Infinity)) {
          lessThanMaxWidthCount++;
        }
      }
      fullWidthOfAllColumns += targetWidth;
      return {
        ...column,
        width: targetWidth,
      };
    } else {
      const targetWidth = Math.max(Math.min(column.width ?? 0, headerPx), column.minWidth ?? 0);
      if (targetWidth < (column.maxWidth ?? Infinity) && !meta.width) {
        lessThanMaxWidthCount++;
      }
      fullWidthOfAllColumns += targetWidth;
      return {
        ...column,
        width: targetWidth,
      };
    }
  });

  // Step 3: Distribute remaining width to all columns that are not at their maxWidth
  let remainingWidth = totalWidth - fullWidthOfAllColumns;
  if (remainingWidth > 0) {
    return visibleColumnsAdaptedPrio2.map((column) => {
      const columnIdOrAccessor = (column.id ?? column.accessor) as string;
      const meta = columnMeta[columnIdOrAccessor];
      if (column.width !== column.maxWidth && !meta.width) {
        const proportionalRemainingWidth = remainingWidth / (lessThanMaxWidthCount || 1);
        let proportionalWidth = column.width + proportionalRemainingWidth;
        // if maxWidth is reached, distribute the remaining width to the other columns
        if (proportionalWidth > column.maxWidth) {
          proportionalWidth = column.maxWidth;
          remainingWidth -= proportionalWidth - column.width;
          if (lessThanMaxWidthCount >= 2) {
            lessThanMaxWidthCount -= 1;
          }
        }

        return { ...column, width: proportionalWidth };
      }
      return column;
    });
  }
  return visibleColumnsAdaptedPrio2;
};

const useColumnsDeps = (
  deps,
  { instance: { state, webComponentsReactProperties, visibleColumns, data, rows, columns } },
) => {
  const isLoadingPlaceholder = !data?.length && webComponentsReactProperties.loading;
  const hasRows = rows?.length > 0;

  const colsEqual = useMemo(() => {
    return visibleColumns
      ?.filter(
        (col) =>
          col.id !== '__ui5wcr__internal_selection_column' &&
          col.id !== '__ui5wcr__internal_highlight_column' &&
          col.id !== '__ui5wcr__internal_navigation_column',
      )
      .every((visCol) => {
        const id = visCol.id ?? visCol.accessor;
        return columns.some((item) => {
          return item.accessor === id || item.id === id;
        });
      });
  }, [visibleColumns, columns]);

  return [
    ...deps,
    hasRows,
    colsEqual,
    visibleColumns?.length,
    !state.tableColResized && state.tableClientWidth,
    state.hiddenColumns.length,
    webComponentsReactProperties.scaleWidthMode,
    isLoadingPlaceholder,
    webComponentsReactProperties.fontsReady,
  ];
};

const columns = (columns: TableInstance['columns'], { instance }: { instance: TableInstance }) => {
  const { scaleWidthMode, loading, fontsReady } = instance.webComponentsReactProperties;
  const { state } = instance;
  const { hiddenColumns, tableClientWidth: totalWidth } = state;
  if (!instance.state || !instance.rows || !fontsReady) {
    return columns;
  }

  if (columns.length === 0 || !totalWidth || !AnalyticalTableScaleWidthMode[scaleWidthMode]) {
    return columns;
  }

  // map columns to visibleColumns
  const visibleColumns = instance.visibleColumns
    .map((visCol) => {
      const column = columns.find((col) => {
        return (
          col.id === visCol.id || (col.accessor !== undefined && visCol.id !== undefined && col.accessor === visCol.id)
        );
      });
      if (column) {
        return column;
      }
      return column ?? false;
    })
    .filter(Boolean) as TableInstance['columns'];

  if (scaleWidthMode === AnalyticalTableScaleWidthMode.Smart) {
    return calculateSmartAndGrowColumns(columns, instance, hiddenColumns);
  }

  if (scaleWidthMode === AnalyticalTableScaleWidthMode.Grow) {
    return calculateSmartAndGrowColumns(columns, instance, hiddenColumns, true);
  }

  const hasData = instance.data.length > 0;

  if (scaleWidthMode === AnalyticalTableScaleWidthMode.Default || (!hasData && loading)) {
    const calculatedWidths = calculateDefaultColumnWidths(totalWidth, visibleColumns);
    return columns.map((column) => {
      const calculatedWidth = calculatedWidths[column.id] || calculatedWidths[column.accessor];
      if (typeof calculatedWidth !== 'number') {
        if (visibleColumns.length === columns.length) {
          console.warn('Could not determine column width!');
        }
        return column;
      }
      return { ...column, width: calculatedWidth };
    });
  }
};

export const useDynamicColumnWidths = (hooks: ReactTableHooks) => {
  hooks.columns.push(columns);
  hooks.columnsDeps.push(useColumnsDeps);
};
