import { TableScaleWidthMode } from '@ui5/webcomponents-react/lib/TableScaleWidthMode';
import { DEFAULT_COLUMN_WIDTH } from '../defaults/Column';

const ROW_SAMPLE_SIZE = 20;
const DEFAULT_HEADER_NUM_CHAR = 10;
const MAX_WIDTH = 700;

// a function, which approximates header px sizes given a character length
const approximateHeaderPxFromCharLength = (charLength) =>
  charLength < 15 ? Math.sqrt(charLength * 1500) : 8 * charLength;
const approximateContentPxFromCharLength = (charLength) => 8 * charLength;

export const useDynamicColumnWidths = (hooks) => {
  hooks.columns.push((columns, { instance }) => {
    if (!instance.state || !instance.rows) {
      return columns;
    }

    const { rows, state } = instance;

    const { hiddenColumns, tableClientWidth: totalWidth } = state;
    const { scaleWidthMode, loading } = instance.webComponentsReactProperties;

    const visibleColumns = columns.filter(Boolean).filter((item) => {
      return (item.isVisible ?? true) && !hiddenColumns.includes(item.accessor);
    });

    const calculateDefaultTableWidth = () => {
      const columnsWithFixedWidth = visibleColumns.filter(({ width }) => width ?? false).map(({ width }) => width);
      const fixedWidth = columnsWithFixedWidth.reduce((acc, val) => acc + val, 0);

      const defaultColumnsCount = visibleColumns.length - columnsWithFixedWidth.length;

      // check if columns are visible and table has width
      if (visibleColumns.length > 0 && totalWidth > 0) {
        // set fixedWidth as defaultWidth if visible columns have fixed value
        if (visibleColumns.length === columnsWithFixedWidth.length) {
          return fixedWidth / visibleColumns.length;
        }
        // spread default columns
        if (totalWidth >= fixedWidth + defaultColumnsCount * DEFAULT_COLUMN_WIDTH) {
          return (totalWidth - fixedWidth) / defaultColumnsCount;
        } else {
          // set defaultWidth for default columns if table is overflowing
          return DEFAULT_COLUMN_WIDTH;
        }
      } else {
        return DEFAULT_COLUMN_WIDTH;
      }
    };

    if (columns.length === 0 || !totalWidth) return columns;

    const hasData = rows.some((row) => !row.original?.emptyRow);

    if (scaleWidthMode === TableScaleWidthMode.Default || (!hasData && loading)) {
      const defaultWidth = calculateDefaultTableWidth();
      return columns.map((column) => ({ ...column, width: column.width ?? defaultWidth }));
    }

    const rowSample = rows.slice(0, ROW_SAMPLE_SIZE);

    const columnMeta = visibleColumns.reduce((acc, column) => {
      if (column.id === '__ui5wcr__internal_selection_column') {
        acc[column.accessor] = {
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
          const dataPoint = row.values?.[column.accessor];
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
          const dataPoint = item.values?.[column.accessor];
          let val = 0;
          if (dataPoint) {
            if (typeof dataPoint === 'string') val = dataPoint.length;
            if (typeof dataPoint === 'number') val = (dataPoint + '').length;
          }
          return acc + val;
        }, 0) / rowSample.length;

      const minHeaderWidth = approximateHeaderPxFromCharLength(headerLength);

      acc[column.accessor] = {
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
      const { minHeaderWidth, fullWidth } = columnMeta[column.accessor];
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

    if (scaleWidthMode === TableScaleWidthMode.Smart || availableWidth > 0) {
      if (scaleWidthMode === TableScaleWidthMode.Grow) {
        reservedWidth = visibleColumns.reduce((acc, column) => {
          const { minHeaderWidth } = columnMeta[column.accessor];
          return acc + Math.max(column.minWidth || 0, column.width || 0, minHeaderWidth || 0) || 0;
        }, 0);
        availableWidth = totalWidth - reservedWidth;
      }

      return columns.map((column) => {
        const isColumnVisible = (column.isVisible ?? true) && !hiddenColumns.includes(column.accessor);
        if (isColumnVisible) {
          const { minHeaderWidth, contentCharAvg } = columnMeta[column.accessor];
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
      const isColumnVisible = (column.isVisible ?? true) && !hiddenColumns.includes(column.accessor);
      if (isColumnVisible) {
        const { fullWidth } = columnMeta[column.accessor];
        return {
          ...column,
          width: column.width ?? fullWidth,
          maxWidth: MAX_WIDTH
        };
      }
      return column;
    });
  });
};
