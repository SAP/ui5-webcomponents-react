import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React, { forwardRef, Fragment, MutableRefObject, Ref, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useVirtual, VirtualItem } from 'react-virtual';
import { ColumnHeader } from './index';

const styles = {
  resizer: {
    display: 'inline-block',
    width: '3px',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    top: 0,
    zIndex: 1,
    cursor: 'col-resize',
    willChange: 'transform',
    '&:hover, &:active': {
      backgroundColor: ThemingParameters.sapContent_DragAndDropActiveColor
    }
  }
};

interface ColumnHeaderContainerProps {
  headerProps: Record<string, unknown>;
  headerGroup: Record<string, any>;
  onSort: (e: CustomEvent<{ column: unknown; sortDirection: string }>) => void;
  onGroupByChanged: (e: CustomEvent<{ column?: any; isGrouped?: boolean }>) => void;
  onDragStart: any;
  onDragOver: any;
  onDrop: any;
  onDragEnter: any;
  onDragEnd: any;
  dragOver: any;
  tableRef: MutableRefObject<any>;
  visibleColumnsWidth: any[];
  overscanCountHorizontal: number;
  resizeInfo: Record<string, unknown>;
  reactWindowRef: MutableRefObject<any>;
  isRtl: boolean;
}

const useStyles = createUseStyles(styles, { name: 'Resizer' });

export const ColumnHeaderContainer = forwardRef((props: ColumnHeaderContainerProps, ref: Ref<HTMLDivElement>) => {
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
    resizeInfo,
    reactWindowRef,
    isRtl
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

  reactWindowRef.current = {
    ...reactWindowRef.current,
    horizontalScrollToOffset: columnVirtualizer.scrollToOffset,
    horizontalScrollToIndex: columnVirtualizer.scrollToIndex
  };

  const classes = useStyles();

  return (
    <div {...headerProps} role="rowgroup" style={{ width: `${columnVirtualizer.totalSize}px` }} ref={ref}>
      {columnVirtualizer.virtualItems.map((virtualColumn: VirtualItem) => {
        const column = headerGroup.headers[virtualColumn.index];
        if (!column) {
          return null;
        }
        const isLastColumn = !column.disableResizing && virtualColumn.index + 1 === headerGroup.headers.length;
        const resizerDirectionStyle = isRtl
          ? {
              right: `${column.totalFlexWidth + column.totalLeft - (isLastColumn ? 3 : 0)}px`,
              transform: 'translateX(50%)'
            }
          : {
              left: `${column.totalFlexWidth + column.totalLeft - (isLastColumn ? 3 : 0)}px`,
              transform: 'translateX(-50%)'
            };

        const { key, ...rest } = column.getHeaderProps();
        return (
          <Fragment key={key}>
            {column.canResize && column.getResizerProps && (
              <div
                {...column.getResizerProps()}
                data-resizer
                className={classes.resizer}
                style={resizerDirectionStyle}
              />
            )}
            <ColumnHeader
              {...rest}
              onSort={onSort}
              onGroupBy={onGroupByChanged}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onDragEnter={onDragEnter}
              onDragEnd={onDragEnd}
              dragOver={column.id === dragOver}
              headerTooltip={column.headerTooltip}
              isDraggable={column.canReorder && !resizeInfo.isResizingColumn}
              virtualColumn={virtualColumn}
              isRtl={isRtl}
            >
              {column.render('Header')}
            </ColumnHeader>
          </Fragment>
        );
      })}
    </div>
  );
});
