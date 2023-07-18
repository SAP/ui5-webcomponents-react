import type { Virtualizer } from '@tanstack/react-virtual';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { forwardRef, Fragment } from 'react';
import { createUseStyles } from 'react-jss';
import type { DivWithCustomScrollProp } from '../index.js';
import { ColumnHeader } from './index.js';

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

interface ColumnHeaderContainerProps {
  headerProps: Record<string, unknown>;
  headerGroup: Record<string, any>;
  onSort: (e: CustomEvent<{ column: unknown; sortDirection: string }>) => void;
  onGroupByChanged: (e: CustomEvent<{ column?: Record<string, unknown>; isGrouped?: boolean }>) => void;
  onDragStart: any;
  onDragOver: any;
  onDrop: any;
  onDragEnter: any;
  onDragEnd: any;
  dragOver: any;
  resizeInfo: Record<string, unknown>;
  isRtl: boolean;
  portalContainer: Element;
  columnVirtualizer: Virtualizer<DivWithCustomScrollProp, Element>;
  uniqueId: string;
  showVerticalEndBorder: boolean;
}

const useStyles = createUseStyles(styles, { name: 'Resizer' });

export const ColumnHeaderContainer = forwardRef<HTMLDivElement, ColumnHeaderContainerProps>((props, ref) => {
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
    isRtl,
    portalContainer,
    columnVirtualizer,
    uniqueId,
    showVerticalEndBorder
  } = props;

  const classes = useStyles();

  return (
    <div
      {...headerProps}
      style={{ width: `${columnVirtualizer.getTotalSize()}px` }}
      ref={ref}
      data-component-name="AnalyticalTableHeaderRow"
    >
      {columnVirtualizer.getVirtualItems().map((virtualColumn, index) => {
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
              showVerticalEndBorder={showVerticalEndBorder}
              id={`${uniqueId}${rest?.id ?? ''}`}
              columnId={rest.id}
              visibleColumnIndex={index}
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
              columnVirtualizer={columnVirtualizer}
              isRtl={isRtl}
              portalContainer={portalContainer}
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
