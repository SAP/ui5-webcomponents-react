import type { Virtualizer } from '@tanstack/react-virtual';
import { forwardRef, Fragment } from 'react';
import type { ClassNames, DivWithCustomScrollProp } from '../types/index.js';
import { RenderColumnTypes } from '../types/index.js';
import { ColumnHeader } from './index.js';

interface ColumnHeaderContainerProps {
  classNames: ClassNames;
  headerProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headerGroup: Record<string, any>;
  resizeInfo: Record<string, unknown>;
  isRtl: boolean;
  columnVirtualizer: Virtualizer<DivWithCustomScrollProp, Element>;
  uniqueId: string;
  showVerticalEndBorder: boolean;
}

export const ColumnHeaderContainer = forwardRef<HTMLDivElement, ColumnHeaderContainerProps>((props, ref) => {
  const {
    headerProps,
    headerGroup,
    resizeInfo,
    isRtl,
    columnVirtualizer,
    uniqueId,
    showVerticalEndBorder,
    classNames
  } = props;
  const { key, ...reactTableHeaderProps } = headerProps;

  return (
    <div
      key={key}
      {...reactTableHeaderProps}
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
                data-component-name="AnalyticalTableResizer"
                className={classNames.resizer}
                style={resizerDirectionStyle}
              />
            )}
            <ColumnHeader
              {...rest}
              showVerticalEndBorder={showVerticalEndBorder}
              id={`${uniqueId}${rest?.id ?? ''}`}
              columnId={rest.id}
              visibleColumnIndex={index}
              headerTooltip={column.headerTooltip}
              isDraggable={!column.disableDragAndDrop && !resizeInfo.isResizingColumn}
              virtualColumn={virtualColumn}
              columnVirtualizer={columnVirtualizer}
              isRtl={isRtl}
              classNames={classNames}
            >
              {column.render(RenderColumnTypes.Header)}
            </ColumnHeader>
          </Fragment>
        );
      })}
    </div>
  );
});

ColumnHeaderContainer.displayName = 'ColumnHeaderContainer';
