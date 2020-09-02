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
    handleDragStart,
    handleDragOver,
    handleOnDrop,
    handleDragEnter,
    handleOnDragEnd,
    dragOver,

    tableRef,
    visibleColumnsWidth
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
    overscan: 5
  });

  const classes = useStyles();

  return (
    <div {...headerProps} role="rowgroup" style={{ width: `${columnVirtualizer.totalSize}px` }}>
      {columnVirtualizer.virtualItems.map((virtualColumn) => {
        const column = headerGroup.headers[virtualColumn.index];
        const isLastColumn = !column.disableResizing && virtualColumn.index + 1 === headerGroup.headers.length;
        return (
          <>
            <ColumnHeader
              {...column.getHeaderProps()}
              onSort={onSort}
              onGroupBy={onGroupByChanged}
              //todo
              // onDragStart={handleDragStart}
              // onDragOver={handleDragOver}
              // onDrop={handleOnDrop}
              // onDragEnter={handleDragEnter}
              // onDragEnd={handleOnDragEnd}
              // dragOver={column.id === dragOver}
              // isDraggable={column.canReorder}
              virtualColumn={virtualColumn}
            >
              {column.render('Header')}
            </ColumnHeader>
            {column.canResize && column.getResizerProps && (
              <div
                {...column.getResizerProps()}
                data-resizer
                className={classes.resizer}
                style={{ left: `${column.totalFlexWidth + column.totalLeft - (isLastColumn ? 3 : 0)}px` }}
              />
            )}
          </>
        );
      })}
    </div>
  );
};
