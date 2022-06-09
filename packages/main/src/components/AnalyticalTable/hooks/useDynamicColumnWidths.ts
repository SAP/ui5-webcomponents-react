import { TableScaleWidthMode } from '../../../enums/TableScaleWidthMode';
import { DEFAULT_COLUMN_WIDTH } from '../defaults/Column';
import { AnalyticalTableColumnDefinition } from '../index';

const ROW_SAMPLE_SIZE = 20;
const DEFAULT_HEADER_NUM_CHAR = 10;
const MAX_WIDTH = 700;
const CELL_PADDING_PX = 18; /* padding left and right 0.5rem each (16px) + borders (1px) + buffer (1px) */

// a function, which approximates header px sizes given a character length
const approximateHeaderPxFromCharLength = (charLength) =>
  charLength < 15 ? Math.sqrt(charLength * 1500) : 8 * charLength;
const approximateContentPxFromCharLength = (charLength) => 8 * charLength;

const columnsDeps = (deps, { instance: { state, webComponentsReactProperties, visibleColumns, data } }) => {
  const isLoadingPlaceholder = !data?.length && webComponentsReactProperties.loading;
  return [
    ...deps,
    state.tableClientWidth,
    state.hiddenColumns.length,
    visibleColumns?.length,
    webComponentsReactProperties.scaleWidthMode,
    isLoadingPlaceholder
  ];
};
interface IColumnMeta {
  contentPxAvg: number;
  headerPx: number;
  headerDefinesWidth?: boolean;
}
const stringToPx = (str, id) => {
  const ruler = document.getElementById(`smartScaleModeHelper-${id}`);
  if (ruler) {
    ruler.innerHTML = str;
    console.log(str);
    return ruler.offsetWidth;
  }
  return 0;
};
const smartColumns = (columns: AnalyticalTableColumnDefinition[], instance, visibleColumns) => {
  const { rows, state, webComponentsReactProperties } = instance;
  const rowSample = rows.slice(0, ROW_SAMPLE_SIZE);
  const { tableClientWidth: totalWidth } = state;

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
          contentPxAvg: 0
        };
        return metadata;
      }

      const contentPxAvg =
        rowSample.reduce((acc, item) => {
          const dataPoint = item.values?.[columnIdOrAccessor];
          let val = 0;
          if (dataPoint) {
            if (typeof dataPoint === 'string')
              val = stringToPx(dataPoint, webComponentsReactProperties.uniqueId) + CELL_PADDING_PX;
            if (typeof dataPoint === 'number')
              val = stringToPx(dataPoint + '', webComponentsReactProperties.uniqueId) + CELL_PADDING_PX;
          }
          return acc + val;
        }, 0) / (rowSample.length || 1);

      metadata[columnIdOrAccessor] = {
        headerPx:
          typeof column.Header === 'string'
            ? Math.max(stringToPx(column.Header, webComponentsReactProperties.uniqueId) + CELL_PADDING_PX, 60)
            : 60,
        contentPxAvg: contentPxAvg
      };
      return metadata;
    },
    {}
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
      let max = Math.max(column.minWidth || 0, column.width || 0, headerPx);
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
        targetWidth = Math.min(availableWidthPrio1 * factor, contentPxAvg);
        availableWidthPrio2 -= targetWidth;
      }
      return {
        ...column,
        nextWidth: targetWidth || headerPx
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
        width: targetWidth
      };
    } else {
      return {
        ...column,
        width: Math.max(column.width || 0, 60, headerPx)
      };
    }
  });
};

const columns = (columns: AnalyticalTableColumnDefinition[], { instance }) => {
  if (!instance.state || !instance.rows) {
    return columns;
  }
  const { rows, state } = instance;
  const { hiddenColumns, tableClientWidth: totalWidth } = state;
  const { scaleWidthMode, loading } = instance.webComponentsReactProperties;

  if (columns.length === 0 || !totalWidth || !TableScaleWidthMode[scaleWidthMode]) {
    return columns;
  }

  //map columns to visibleColumns
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
    .filter(Boolean);

  if (scaleWidthMode === TableScaleWidthMode.Smart) {
    return smartColumns(columns, instance, visibleColumns);
  }

  const calculateDefaultTableWidth = () => {
    const columnsWithWidthProperties = visibleColumns
      .filter((column) => column.width ?? column.minWidth ?? column.maxWidth ?? false)
      .map((column) => ({
        accessor: column.id ?? column.accessor,
        minWidth: column.minWidth,
        width: column.width,
        maxWidth: column.maxWidth
      }));
    let availableWidth = totalWidth;
    let defaultColumnsCount = visibleColumns.length;

    const columnsWithFixedWidth = columnsWithWidthProperties
      .map((column) => {
        const { width, minWidth, maxWidth, accessor } = column;
        if (width) {
          // necessary because of default minWidth
          const acceptedWidth =
            accessor !== '__ui5wcr__internal_highlight_column' &&
            accessor !== '__ui5wcr__internal_selection_column' &&
            accessor !== '__ui5wcr__internal_navigation_column' &&
            width < 60
              ? 60
              : width;

          availableWidth -= acceptedWidth;
          defaultColumnsCount--;
          return acceptedWidth;
        }
        const columnsWithMaxWidth = columnsWithWidthProperties.filter((item) => item.maxWidth);
        const aggregatedColumnsMaxWidth = columnsWithMaxWidth.reduce((acc, cur) => acc + cur.maxWidth, 0);
        const aggregatedColumnsMinWidth = columnsWithWidthProperties
          .filter((item) => item.minWidth && !item.maxWidth)
          .reduce((acc, cur) => acc + cur.minWidth, 0);

        if (minWidth > availableWidth / defaultColumnsCount) {
          // don't apply minWidth if enough space is available because of maxWidth properties
          if (
            availableWidth - aggregatedColumnsMaxWidth >
            aggregatedColumnsMinWidth + (visibleColumns.length - columnsWithWidthProperties.length) * 60
          ) {
            // apply minWidth only if it's larger than the calculated available width
            if (minWidth > (availableWidth - aggregatedColumnsMaxWidth) / columnsWithMaxWidth.length) {
              availableWidth -= minWidth;
              defaultColumnsCount--;
              return minWidth;
            }
            return false;
          }
          availableWidth -= minWidth;
          defaultColumnsCount--;
          return minWidth;
        }
        if (maxWidth < availableWidth / defaultColumnsCount) {
          availableWidth -= maxWidth;
          defaultColumnsCount--;
          return maxWidth;
        }
        return false;
      })
      .filter(Boolean);

    const fixedWidth = columnsWithFixedWidth.reduce((acc, val) => acc + val, 0);
    // check if columns are visible and table has width
    if (visibleColumns.length > 0 && totalWidth > 0) {
      // set fixedWidth as defaultWidth if all visible columns have fixed value
      if (visibleColumns.length === columnsWithFixedWidth.length) {
        return fixedWidth / visibleColumns.length;
      }
      // spread default columns
      if (totalWidth >= fixedWidth + defaultColumnsCount * DEFAULT_COLUMN_WIDTH) {
        return (totalWidth - fixedWidth) / defaultColumnsCount;
      }
    }
    return DEFAULT_COLUMN_WIDTH;
  };

  const hasData = instance.data.length > 0;

  if (scaleWidthMode === TableScaleWidthMode.Default || (!hasData && loading)) {
    const defaultWidth = calculateDefaultTableWidth();
    return columns.map((column) => ({ ...column, width: column.width ?? defaultWidth }));
  }

  const rowSample = rows.slice(0, ROW_SAMPLE_SIZE);

  const columnMeta = visibleColumns.reduce((acc, column) => {
    if (
      column.id === '__ui5wcr__internal_selection_column' ||
      column.id === '__ui5wcr__internal_highlight_column' ||
      column.id === '__ui5wcr__internal_navigation_column'
    ) {
      acc[column.id ?? column.accessor] = {
        minHeaderWidth: column.width,
        fullWidth: column.width,
        contentCharAvg: 0
      };
      return acc;
    }

    const headerLength = typeof column.Header === 'string' ? column.Header.length : DEFAULT_HEADER_NUM_CHAR;

    // max character length
    const contentMaxCharLength = Math.max(
      headerLength,
      ...rowSample.map((row) => {
        const dataPoint = row.values?.[column.id ?? column.accessor];
        if (dataPoint) {
          if (typeof dataPoint === 'string') return dataPoint.length;
          if (typeof dataPoint === 'number') return (dataPoint + '').length;
        }
        return 0;
      })
    );

    // avg character length
    const contentCharAvg =
      rowSample.reduce((acc, item) => {
        const dataPoint = item.values?.[column.id ?? column.accessor];
        let val = 0;
        if (dataPoint) {
          if (typeof dataPoint === 'string') val = dataPoint.length;
          if (typeof dataPoint === 'number') val = (dataPoint + '').length;
        }
        return acc + val;
      }, 0) / rowSample.length;

    const minHeaderWidth = approximateHeaderPxFromCharLength(headerLength);

    acc[column.id ?? column.accessor] = {
      minHeaderWidth,
      fullWidth: Math.max(minHeaderWidth, approximateContentPxFromCharLength(contentMaxCharLength)),
      contentCharAvg
    };
    return acc;
  }, {});

  const totalCharNum = Object.values(columnMeta).reduce(
    (acc: number, item: any) => acc + item.contentCharAvg,
    0
  ) as number;

  let reservedWidth = visibleColumns.reduce((acc, column) => {
    const { minHeaderWidth, fullWidth } = columnMeta[column.id ?? column.accessor];
    return (
      acc +
        Math.max(
          column.minWidth || 0,
          column.width || 0,
          minHeaderWidth || 0,
          scaleWidthMode === TableScaleWidthMode.Grow ? fullWidth : 0
        ) || 0
    );
  }, 0);

  let availableWidth = totalWidth - reservedWidth;

  if (availableWidth > 0) {
    if (scaleWidthMode === TableScaleWidthMode.Grow) {
      reservedWidth = visibleColumns.reduce((acc, column) => {
        const { minHeaderWidth } = columnMeta[column.id ?? column.accessor];
        return acc + Math.max(column.minWidth || 0, column.width || 0, minHeaderWidth || 0) || 0;
      }, 0);
      availableWidth = totalWidth - reservedWidth;
    }

    return columns.map((column) => {
      const isColumnVisible = (column.isVisible ?? true) && !hiddenColumns.includes(column.id ?? column.accessor);
      const meta = columnMeta[column.id ?? (column.accessor as string)];
      if (isColumnVisible && meta) {
        const { minHeaderWidth, contentCharAvg } = meta;
        const additionalSpaceFactor = totalCharNum > 0 ? contentCharAvg / totalCharNum : 1 / visibleColumns.length;

        const targetWidth = additionalSpaceFactor * availableWidth + minHeaderWidth;

        return {
          ...column,
          width: column.width ?? targetWidth,
          minWidth: column.minWidth ?? minHeaderWidth
        };
      }

      return column;
    });
  }

  // TableScaleWidthMode Grow
  return columns.map((column) => {
    const isColumnVisible = (column.isVisible ?? true) && !hiddenColumns.includes(column.id ?? column.accessor);
    const meta = columnMeta[column.id ?? (column.accessor as string)];
    if (isColumnVisible && meta) {
      const { fullWidth } = meta;
      return {
        ...column,
        width: column.width ?? fullWidth,
        maxWidth: MAX_WIDTH
      };
    }
    return column;
  });
};

export const useDynamicColumnWidths = (hooks) => {
  hooks.columns.push(columns);
  hooks.columnsDeps.push(columnsDeps);
};
