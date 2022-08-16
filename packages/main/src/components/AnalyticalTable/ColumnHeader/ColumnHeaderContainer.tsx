import { VirtualItem } from '@tanstack/react-virtual';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { forwardRef, Fragment, MutableRefObject, Ref } from 'react';
import { createUseStyles } from 'react-jss';
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
    '&:hover, &:active': {
      backgroundColor: ThemingParameters.sapContent_DragAndDropActiveColor
    }
  }
};
//todo remove unused props
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
  portalContainer: Element;
  uniqueId: string;
  //todo
  virtualizer: any;
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
    resizeInfo,
    reactWindowRef,
    isRtl,
    portalContainer,
    uniqueId,
    virtualizer
  } = props;

  reactWindowRef.current = {
    ...reactWindowRef.current,
    horizontalScrollToOffset: virtualizer.scrollToOffset,
    horizontalScrollToIndex: virtualizer.scrollToIndex
  };

  const classes = useStyles();

  return (
    <div
      {...headerProps}
      style={{ width: `${virtualizer.getTotalSize()}px` }}
      ref={ref}
      data-component-name="AnalyticalTableHeaderRow"
    >
      {/*todo type*/}
      {virtualizer.getVirtualItems().map((virtualColumn: VirtualItem<any>, index) => {
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
              visibleColumnIndex={index}
              columnIndex={virtualColumn.index}
              onSort={onSort}
              onGroupBy={onGroupByChanged}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onDragEnter={onDragEnter}
              onDragEnd={onDragEnd}
              dragOver={column.id === dragOver}
              headerTooltip={column.headerTooltip}
              isDraggable={(column.canReorder || !column.disableDragAndDrop) && !resizeInfo.isResizingColumn}
              virtualColumn={virtualColumn}
              isRtl={isRtl}
              portalContainer={portalContainer}
              uniqueId={uniqueId}
            >
              {column.render('Header')}
            </ColumnHeader>
          </Fragment>
        );
      })}
    </div>
  );
});

ColumnHeaderContainer.displayName = 'ColumnHeaderContainer';
