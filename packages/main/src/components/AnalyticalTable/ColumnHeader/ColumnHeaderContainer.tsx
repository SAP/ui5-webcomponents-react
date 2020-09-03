import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useVirtual } from 'react-virtual';
import { ColumnHeader } from './index';

const styles = {
  resizer: {
    display: 'inline-block',
    width: '3px',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    top: 0,
    transform: 'translateX(-50%)',
    zIndex: 1,
    cursor: 'col-resize',
    willChange: 'transform',
    '&:hover, &:active': {
      backgroundColor: ThemingParameters.sapContent_DragAndDropActiveColor
    }
  }
};

const useStyles = createUseStyles(styles);

export const ColumnHeaderContainer = (props) => {
  const {
    headerProps,
    headerGroup,
    onSort,
    onGroupByChanged,
    onDragStart,
    onDragOver,
    onDrop,
    onDragEnter,
    onDragEnd,
    dragOver,

    tableRef,
    visibleColumnsWidth,
    overscanCountHorizontal,
    resizeInfo
  } = props;
  const columnVirtualizer = useVirtual({
    size: visibleColumnsWidth.length,
    parentRef: tableRef,
    estimateSize: useCallback(
      (index) => {
        return visibleColumnsWidth[index];
      },
      [visibleColumnsWidth]
    ),
    horizontal: true,
    overscan: overscanCountHorizontal
  });

  const classes = useStyles();

  return (
    <div {...headerProps} role="rowgroup" style={{ width: `${columnVirtualizer.totalSize}px` }}>
      {columnVirtualizer.virtualItems.map((virtualColumn) => {
        const column = headerGroup.headers[virtualColumn.index];
        const isLastColumn = !column.disableResizing && virtualColumn.index + 1 === headerGroup.headers.length;
        return (
          <>
            {column.canResize && column.getResizerProps && (
              <div
                {...column.getResizerProps()}
                data-resizer
                className={classes.resizer}
                style={{ left: `${column.totalFlexWidth + column.totalLeft - (isLastColumn ? 3 : 0)}px` }}
              />
            )}
            <ColumnHeader
              {...column.getHeaderProps()}
              onSort={onSort}
              onGroupBy={onGroupByChanged}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onDragEnter={onDragEnter}
              onDragEnd={onDragEnd}
              dragOver={column.id === dragOver}
              isDraggable={column.canReorder && !resizeInfo.isResizingColumn}
              virtualColumn={virtualColumn}
            >
              {column.render('Header')}
            </ColumnHeader>
          </>
        );
      })}
    </div>
  );
};
