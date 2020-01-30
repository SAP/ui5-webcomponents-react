import { useCallback, useEffect, useMemo } from 'react';
import { DEFAULT_COLUMN_WIDTH } from '../defaults/Column';
import { TableScaleWidthMode } from '../../../enums/TableScaleWidthMode';

const ROW_SAMPLE_SIZE = 20;
const DEFAULT_HEADER_NUM_CHAR = 10;
const MAX_WIDTH = 700;

// a function, which approximates header px sizes given a character length
const approximateHeaderPxFromCharLength = (charLength) =>
  charLength < 15 ? Math.sqrt(charLength * 1500) : 8 * charLength;
const approximateContentPxFromCharLength = (charLength) => 8 * charLength;

export const useDynamicColumnWidths = (scaleWidthMode, columns, rows, totalWidth, hiddenColumns, setColumnWidth) => {
  const updateTableSizes = useCallback(() => {
    const visibleColumns = columns.filter(Boolean).filter((item) => {
      return (item.isVisible ?? true) && !hiddenColumns.includes(item.accessor);
    });
    const columnsWithFixedWidth = visibleColumns.filter(({ width }) => width ?? false).map(({ width }) => width);
    const fixedWidth = columnsWithFixedWidth.reduce((acc, val) => acc + val, 0);

    const defaultColumnsCount = visibleColumns.length - columnsWithFixedWidth.length;

    //check if columns are visible and table has width
    if (visibleColumns.length > 0 && totalWidth > 0) {
      //set fixedWidth as defaultWidth if visible columns have fixed value
      if (visibleColumns.length === columnsWithFixedWidth.length) {
        setColumnWidth(fixedWidth / visibleColumns.length);
        return;
      }
      //spread default columns
      if (totalWidth >= fixedWidth + defaultColumnsCount * DEFAULT_COLUMN_WIDTH) {
        setColumnWidth((totalWidth - fixedWidth) / defaultColumnsCount);
      } else {
        //set defaultWidth for default columns if table is overflowing
        setColumnWidth(DEFAULT_COLUMN_WIDTH);
      }
    } else {
      setColumnWidth(DEFAULT_COLUMN_WIDTH);
    }
  }, [totalWidth, columns, hiddenColumns.length]);

  useEffect(() => {
    if (scaleWidthMode === TableScaleWidthMode.Default) {
      updateTableSizes();
    }
  }, [scaleWidthMode, updateTableSizes]);

  return useMemo(() => {
    if (columns.length === 0 || !totalWidth || scaleWidthMode === TableScaleWidthMode.Default) return columns;

    const visibleColumns = columns.filter(Boolean).filter((item) => {
      return (item.isVisible ?? true) && !hiddenColumns.includes(item.accessor);
    });

    const rowSample = rows.slice(0, ROW_SAMPLE_SIZE);

    const columnMeta = visibleColumns.reduce((acc, column) => {
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
        if (totalCharNum > 0 && isColumnVisible) {
          const { minHeaderWidth, contentCharAvg } = columnMeta[column.accessor];
          const targetWidth = (contentCharAvg / totalCharNum) * availableWidth + minHeaderWidth;

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
  }, [scaleWidthMode, columns, rows.length, totalWidth, hiddenColumns.length]); // too expensive to check for reference equality on rows
};
