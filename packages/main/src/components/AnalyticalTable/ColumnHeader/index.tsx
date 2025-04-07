import type { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import IconDesign from '@ui5/webcomponents/dist/types/IconDesign.js';
import IconMode from '@ui5/webcomponents/dist/types/IconMode.js';
import iconFilter from '@ui5/webcomponents-icons/dist/filter.js';
import iconGroup from '@ui5/webcomponents-icons/dist/group-2.js';
import iconSortAscending from '@ui5/webcomponents-icons/dist/sort-ascending.js';
import iconSortDescending from '@ui5/webcomponents-icons/dist/sort-descending.js';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type {
  AriaAttributes,
  CSSProperties,
  DragEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode
} from 'react';
import { useRef, useState } from 'react';
import { Icon } from '../../../webComponents/Icon/index.js';
import { Text } from '../../../webComponents/Text/index.js';
import type { ClassNames, ColumnType, DivWithCustomScrollProp } from '../types/index.js';
import { RenderColumnTypes } from '../types/index.js';

export interface ColumnHeaderProps {
  visibleColumnIndex: number;
  onDragStart: DragEventHandler<HTMLDivElement>;
  onDragOver: DragEventHandler<HTMLDivElement>;
  onDrop: DragEventHandler<HTMLDivElement>;
  onDragEnter: DragEventHandler<HTMLDivElement>;
  onDragEnd: DragEventHandler<HTMLDivElement>;
  dragOver: boolean;
  isDraggable: boolean;
  headerTooltip: string;
  virtualColumn: VirtualItem;
  columnVirtualizer: Virtualizer<DivWithCustomScrollProp, Element>;
  isRtl: boolean;
  children: ReactNode | ReactNode[];
  columnId?: string;
  showVerticalEndBorder: boolean;
  classNames: ClassNames;

  //getHeaderProps()
  id: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement> | undefined;
  onKeyUp?: KeyboardEventHandler<HTMLDivElement> | undefined;
  className: string;
  style: CSSProperties;
  column: ColumnType;
  role: string;
  isFiltered?: boolean;
  title?: string;
  ['aria-sort']?: AriaAttributes['aria-sort'];
  ['aria-label']?: AriaAttributes['aria-label'];
}

export const ColumnHeader = (props: ColumnHeaderProps) => {
  const {
    id,
    children,
    column,
    columnId,
    className,
    style,
    onDragEnter,
    onDragOver,
    onDragStart,
    onDrop,
    onDragEnd,
    headerTooltip,
    isDraggable,
    dragOver,
    role,
    virtualColumn,
    columnVirtualizer,
    isRtl,
    visibleColumnIndex,
    onClick,
    onKeyDown,
    onKeyUp,
    isFiltered,
    title,
    'aria-label': ariaLabel,
    'aria-sort': ariaSort,
    showVerticalEndBorder,
    classNames
  } = props;

  const columnIndex = virtualColumn.index;

  const [popoverOpen, setPopoverOpen] = useState(false);
  const columnHeaderRef = useRef<HTMLDivElement>(null);

  const childIsString = typeof children === 'string';
  const tooltip = (() => {
    if (headerTooltip) {
      return headerTooltip;
    }
    if (childIsString) {
      return children;
    }
    return null;
  })();

  const textStyle = (() => {
    let margin = 0;
    const style: CSSProperties = {};

    if (column.hAlign) {
      style.textAlign = column.hAlign.toLowerCase();
    }

    if (column.isSorted) margin += 0.8125;
    if (column.isGrouped) margin += 0.8125;
    if (isFiltered) margin += 0.8125;

    if (margin === 0) {
      return style;
    }

    if (margin > 0) {
      margin += 0.75;
    }

    style.marginInlineEnd = `${margin}rem`;

    return style;
  })();

  const hasPopover = column.canGroupBy || column.canSort || column.canFilter;

  const handleHeaderCellClick = (e) => {
    if (typeof onClick === 'function') {
      onClick(e);
    }
    if (hasPopover) {
      setPopoverOpen(true);
    }
  };

  const directionStyles = isRtl
    ? { right: 0, transform: `translateX(-${virtualColumn.start}px)` }
    : { left: 0, transform: `translateX(${virtualColumn.start}px)` };

  const handleHeaderCellKeyDown = (e) => {
    if (typeof onKeyDown === 'function') {
      onKeyDown(e);
    }
    if (hasPopover && e.code === 'Enter') {
      setPopoverOpen(true);
    }
    if (e.code === 'Space') {
      e.preventDefault();
    }
  };

  const handleHeaderCellKeyUp = (e) => {
    if (typeof onKeyUp === 'function') {
      onKeyUp(e);
    }
    if (hasPopover && e.code === 'Space' && !e.target.hasAttribute('ui5-li')) {
      setPopoverOpen(true);
    }
  };

  if (!column) return null;
  return (
    <div
      ref={columnHeaderRef}
      className={clsx(classNames.thContainer, showVerticalEndBorder && classNames.verticalEndBorder)}
      style={{
        position: 'absolute',
        insetBlockStart: 0,
        width: `${virtualColumn.size}px`,
        ...directionStyles
      }}
    >
      <div
        ref={columnVirtualizer.measureElement}
        data-visible-column-index={visibleColumnIndex}
        data-visible-row-index={0}
        data-row-index={0}
        data-column-index={columnIndex}
        tabIndex={-1}
        id={id}
        className={className}
        style={{
          ...style,
          borderInlineStart: dragOver ? `3px solid ${ThemingParameters.sapSelectedColor}` : undefined
        }}
        aria-haspopup={hasPopover ? 'menu' : undefined}
        role={role}
        draggable={isDraggable}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        onDrop={onDrop}
        onDragEnd={onDragEnd}
        data-column-id={columnId}
        onClick={handleHeaderCellClick}
        onKeyDown={handleHeaderCellKeyDown}
        onKeyUp={handleHeaderCellKeyUp}
        aria-label={ariaLabel}
        aria-sort={ariaSort}
        title={title}
      >
        <div
          className={clsx(
            classNames.header,
            columnId === '__ui5wcr__internal_selection_column' && classNames.selectAllCheckBoxContainer
          )}
          data-h-align={column.hAlign}
          data-component-name={`AnalyticalTableHeaderContentContainer-${columnId}`}
        >
          {childIsString ? (
            <Text
              title={tooltip}
              maxLines={1}
              style={textStyle}
              className={classNames.text}
              data-component-name={`AnalyticalTableHeaderTextContentContainer-${columnId}`}
            >
              {children}
            </Text>
          ) : (
            <span
              title={tooltip}
              style={textStyle}
              className={classNames.text}
              data-component-name={`AnalyticalTableHeaderContentContainer-${columnId}`}
            >
              {children}
            </span>
          )}
          <div
            className={classNames.iconContainer}
            data-component-name={`AnalyticalTableHeaderIconsContainer-${columnId}`}
          >
            {isFiltered && (
              <Icon
                design={IconDesign.NonInteractive}
                name={iconFilter}
                className={classNames.icon}
                mode={IconMode.Decorative}
              />
            )}
            {column.isSorted && (
              <Icon
                design={IconDesign.NonInteractive}
                name={column.isSortedDesc ? iconSortDescending : iconSortAscending}
                className={classNames.icon}
                mode={IconMode.Decorative}
              />
            )}
            {column.isGrouped && (
              <Icon
                design={IconDesign.NonInteractive}
                name={iconGroup}
                className={classNames.icon}
                mode={IconMode.Decorative}
              />
            )}
          </div>
        </div>
        {hasPopover &&
          popoverOpen &&
          // render the popover and add the props to the table instance
          column.render(RenderColumnTypes.Popover, {
            popoverProps: {
              openerRef: columnHeaderRef,
              setOpen: setPopoverOpen
            }
          })}
      </div>
    </div>
  );
};

ColumnHeader.displayName = 'ColumnHeader';
