import React, { useCallback } from 'react';
import { useVirtual } from 'react-virtual';
import { ColumnHeader } from './index';

export const ColumnHeaderContainer = (props) => {
  const {
    headerProps,
    headerGroup,
    onSort,
    onGroupByChanged,
    handleDragStart,
    handleDragOver,
    handleOnDrop,
    handleDragEnter,
    handleOnDragEnd,
    dragOver,

    visibleColumns,
    tableRef,
    visibleColumnsWidth
  } = props;
  const columnVirtualizer = useVirtual({
    size: visibleColumnsWidth.length,
    parentRef: tableRef,
    estimateSize: useCallback(
      (index) => {
        // console.log(index, visibleColumns[index].totalWidth);
        return visibleColumnsWidth[index];
      },
      [visibleColumnsWidth]
    ),
    horizontal: true,
    overscan: 10
  });
  return (
    <div {...headerProps} role="rowgroup" style={{ width: `${columnVirtualizer.totalSize}px` }}>
      {columnVirtualizer.virtualItems.map((virtualColumn) => {
        const column = headerGroup.headers[virtualColumn.index];
        const isLastColumn = !column.disableResizing && virtualColumn.index + 1 === headerGroup.headers.length;
        return (
          // eslint-disable-next-line react/jsx-key
          <ColumnHeader
            {...column.getHeaderProps()}
            isLastColumn={isLastColumn}
            onSort={onSort}
            onGroupBy={onGroupByChanged}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleOnDrop}
            onDragEnter={handleDragEnter}
            onDragEnd={handleOnDragEnd}
            dragOver={column.id === dragOver}
            isDraggable={column.canReorder}
            virtualColumn={virtualColumn}
          >
            {column.render('Header')}
          </ColumnHeader>
        );
      })}
    </div>
  );
};
