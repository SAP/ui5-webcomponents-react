import { useMemo } from 'react';
import { AnalyticalTableScaleWidthMode } from '../../../enums/index.js';
import { DEFAULT_COLUMN_WIDTH } from '../defaults/Column/index.js';
import type { AnalyticalTableColumnDefinition, ReactTableHooks, TableInstance } from '../types/index.js';

interface IColumnMeta {
  contentPxAvg: number;
  headerPx: number;
  headerDefinesWidth?: boolean;
}

const ROW_SAMPLE_SIZE = 20;
const MAX_WIDTH = 700;
export const CELL_PADDING_PX = 18; /* padding left and right 0.5rem each (16px) + borders (1px) + buffer (1px) */

function findLongestString(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return str1 || str2 || undefined;
  }

  return str1.length > str2.length ? str1 : str2;
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

const calculateSmartColumns = (columns: AnalyticalTableColumnDefinition[], instance, hiddenColumns) => {
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

      let headerPx, contentPxAvg;

      if (column.scaleWidthModeOptions?.cellString) {
        contentPxAvg =
          stringToPx(column.scaleWidthModeOptions.cellString, webComponentsReactProperties.uniqueId) + CELL_PADDING_PX;
      } else {
        contentPxAvg = getContentPxAvg(rowSample, columnIdOrAccessor, webComponentsReactProperties.uniqueId);
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
        contentPxAvg,
      };
      return metadata;
    },
    {},
  );

  let totalContentPxAvgPrio1 = 0;
  let totalNumberColPrio2 = 0;

  // width reserved by predefined widths or columns defined by header
  const reservedWidth: number = visibleColumns.reduce((acc, column) => {
    const columnIdOrAccessor = (column.id ?? column.accessor) as string;
    const { contentPxAvg, headerPx } = columnMeta[columnIdOrAccessor];

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
      const max = Math.max(column.minWidth || 0, column.width || 0, headerPx);
      columnMeta[columnIdOrAccessor].headerDefinesWidth = true;
      return acc + max;
    }
  }, 0);

  const availableWidthPrio1 = totalWidth - reservedWidth;
  let availableWidthPrio2 = availableWidthPrio1;

  // Step 1: Give columns defined by content more space (priority 1)
  const visibleColumnsAdaptedPrio1 = visibleColumns.map((column) => {
    const columnIdOrAccessor = (column.id ?? column.accessor) as string;
    const meta = columnMeta[columnIdOrAccessor];
    if (meta && !column.minWidth && !column.width && !meta.headerDefinesWidth) {
      let targetWidth;
      const { contentPxAvg, headerPx } = meta;

      if (availableWidthPrio1 > 0) {
        const factor = contentPxAvg / totalContentPxAvgPrio1;
        targetWidth = Math.max(Math.min(availableWidthPrio1 * factor, contentPxAvg), headerPx);
        availableWidthPrio2 -= targetWidth;
      }
      return {
        ...column,
        nextWidth: targetWidth || headerPx,
      };
    }
    return column;
  });
  // Step 2: Give all columns more space (priority 2)
  return visibleColumnsAdaptedPrio1.map((column) => {
    const columnIdOrAccessor = (column.id ?? column.accessor) as string;
    const meta = columnMeta[columnIdOrAccessor];
    const { headerPx } = meta;
    if (meta && !column.minWidth && !column.width) {
      let targetWidth = column.nextWidth || headerPx;
      if (availableWidthPrio2 > 0) {
        targetWidth = targetWidth + availableWidthPrio2 * (1 / totalNumberColPrio2);
      }
      return {
        ...column,
        width: targetWidth,
      };
    } else {
      return {
        ...column,
        width: Math.max(column.width || 0, 60, headerPx),
      };
    }
  });
};

const columnsDeps = (
  deps,
  { instance: { state, webComponentsReactProperties, visibleColumns, data, rows, columns } },
) => {
  const isLoadingPlaceholder = !data?.length && webComponentsReactProperties.loading;
  const hasRows = rows?.length > 0;
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
  ];
};

const columns = (columns: TableInstance['columns'], { instance }: { instance: TableInstance }) => {
  if (!instance.state || !instance.rows) {
    return columns;
  }
  const { rows, state } = instance;
  const { hiddenColumns, tableClientWidth: totalWidth } = state;
  const { scaleWidthMode, loading, uniqueId } = instance.webComponentsReactProperties;

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
    return calculateSmartColumns(columns, instance, hiddenColumns);
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

  // AnalyticalTableScaleWidthMode.Grow

  const rowSample = rows.slice(0, ROW_SAMPLE_SIZE);

  const columnMeta = visibleColumns.reduce((acc, column) => {
    const columnIdOrAccessor = (column.id ?? column.accessor) as string;
    if (
      column.id === '__ui5wcr__internal_selection_column' ||
      column.id === '__ui5wcr__internal_highlight_column' ||
      column.id === '__ui5wcr__internal_navigation_column'
    ) {
      acc[columnIdOrAccessor] = {
        minHeaderWidth: column.width,
        fullWidth: column.width,
      };
      return acc;
    }

    const smartWidth = findLongestString(
      column.scaleWidthModeOptions?.headerString,
      column.scaleWidthModeOptions?.cellString,
    );

    if (smartWidth) {
      const width = Math.max(stringToPx(smartWidth, uniqueId) + CELL_PADDING_PX, 60);
      acc[columnIdOrAccessor] = {
        minHeaderWidth: width,
        fullWidth: width,
      };
      return acc;
    }

    const minHeaderWidth =
      typeof column.Header === 'string'
        ? stringToPx(column.Header, uniqueId, true) + CELL_PADDING_PX
        : DEFAULT_COLUMN_WIDTH;

    acc[columnIdOrAccessor] = {
      minHeaderWidth,
      fullWidth: Math.max(minHeaderWidth, getContentPxAvg(rowSample, columnIdOrAccessor, uniqueId)),
    };
    return acc;
  }, {});

  let reservedWidth = visibleColumns.reduce((acc, column) => {
    const { minHeaderWidth, fullWidth } = columnMeta[column.id ?? column.accessor];
    return acc + Math.max(column.minWidth || 0, column.width || 0, minHeaderWidth || 0, fullWidth) || 0;
  }, 0);

  let availableWidth = totalWidth - reservedWidth;

  if (availableWidth > 0) {
    let notReservedCount = 0;
    reservedWidth = visibleColumns.reduce((acc, column) => {
      const reserved = Math.max(column.minWidth || 0, column.width || 0) || 0;
      if (!reserved) {
        notReservedCount++;
      }
      return acc + reserved;
    }, 0);
    availableWidth = totalWidth - reservedWidth;

    return columns.map((column) => {
      const isColumnVisible = (column.isVisible ?? true) && !hiddenColumns.includes(column.id ?? column.accessor);
      const meta = columnMeta[column.id ?? (column.accessor as string)];

      if (isColumnVisible && meta) {
        const { minHeaderWidth } = meta;

        const targetWidth = availableWidth / notReservedCount;

        return {
          ...column,
          width: column.width ?? Math.min(targetWidth, MAX_WIDTH),
          minWidth: column.minWidth ?? minHeaderWidth,
        };
      }
      return column;
    });
  }

  return columns.map((column) => {
    const isColumnVisible = (column.isVisible ?? true) && !hiddenColumns.includes(column.id ?? column.accessor);
    const meta = columnMeta[column.id ?? (column.accessor as string)];
    if (isColumnVisible && meta) {
      const { fullWidth } = meta;
      return {
        ...column,
        width: column.width ?? fullWidth,
        maxWidth: column.maxWidth ?? MAX_WIDTH,
      };
    }
    return column;
  });
};

export const useDynamicColumnWidths = (hooks: ReactTableHooks) => {
  hooks.columns.push(columns);
  hooks.columnsDeps.push(columnsDeps);
};
