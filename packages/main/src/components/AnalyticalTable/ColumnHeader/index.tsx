import type { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import iconFilter from '@ui5/webcomponents-icons/dist/filter.js';
import iconGroup from '@ui5/webcomponents-icons/dist/group-2.js';
import iconSortAscending from '@ui5/webcomponents-icons/dist/sort-ascending.js';
import iconSortDescending from '@ui5/webcomponents-icons/dist/sort-descending.js';
import { ThemingParameters, useStylesheet } from '@ui5/webcomponents-react-base';
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
import { Text } from '../../Text/index.js';
import type { ColumnType } from '../types/ColumnType.js';
import type { DivWithCustomScrollProp } from '../types/index.js';
import { classNames, styleData } from './ColumnHeader.module.css.js';
import { ColumnHeaderModal } from './ColumnHeaderModal.js';

export interface ColumnHeaderProps {
  visibleColumnIndex: number;
  onSort?: (e: CustomEvent<{ column: unknown; sortDirection: string }>) => void;
  onGroupBy?: (e: CustomEvent<{ column: unknown; isGrouped: boolean }>) => void;
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
  portalContainer: Element;
  columnId?: string;
  showVerticalEndBorder: boolean;

  //getHeaderProps()
  id: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement> | undefined;
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
  useStylesheet(styleData, ColumnHeader.displayName);
  const {
    id,
    children,
    column,
    columnId,
    className,
    style,
    onSort,
    onGroupBy,
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
    portalContainer,
    isFiltered,
    title,
    'aria-label': ariaLabel,
    'aria-sort': ariaSort,
    showVerticalEndBorder
  } = props;

  const columnIndex = virtualColumn.index;

  const [popoverOpen, setPopoverOpen] = useState(false);
  const columnHeaderRef = useRef<HTMLDivElement>(null);

  const tooltip = (() => {
    if (headerTooltip) {
      return headerTooltip;
    }
    if (typeof children === 'string') {
      return children;
    }
    return null;
  })();

  const textStyle = (() => {
    let margin = 0;
    const style: CSSProperties = {};

    if (column.hAlign) {
      style.textAlign = column.hAlign.toLowerCase() as any;
    }

    if (column.isSorted) margin++;
    if (column.isGrouped) margin++;
    if (isFiltered) margin++;

    if (margin === 0) {
      return style;
    }

    if (margin > 0) margin += 0.5;

    style.marginInlineEnd = `${margin}rem`;

    return style;
  })();

  const hasPopover = column.canGroupBy || column.canSort || column.canFilter;

  const handleHeaderCellClick = (e) => {
    onClick?.(e);
    if (hasPopover) {
      setPopoverOpen(true);
    }
  };

  const directionStyles = isRtl
    ? { right: 0, transform: `translateX(-${virtualColumn.start}px)` }
    : { left: 0, transform: `translateX(${virtualColumn.start}px)` };

  const handleHeaderCellKeyDown = (e) => {
    onKeyDown?.(e);
    if (hasPopover && e.code === 'Enter') {
      setPopoverOpen(true);
    }
    if (e.code === 'Space') {
      e.preventDefault();
    }
  };

  const handleHeaderCellKeyUp = (e) => {
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
        top: 0,
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
        <div className={classNames.header} data-h-align={column.hAlign}>
          <Text
            title={tooltip}
            wrapping={false}
            style={textStyle}
            className={clsx(
              classNames.text,
              columnId === '__ui5wcr__internal_selection_column' && classNames.selectAllCheckBoxContainer
            )}
            data-component-name={`AnalyticalTableHeaderHeaderContentContainer-${columnId}`}
          >
            {children}
          </Text>
          <div
            className={classNames.iconContainer}
            data-component-name={`AnalyticalTableHeaderIconsContainer-${columnId}`}
          >
            {isFiltered && <Icon name={iconFilter} aria-hidden />}
            {column.isSorted && (
              <Icon name={column.isSortedDesc ? iconSortDescending : iconSortAscending} aria-hidden />
            )}
            {column.isGrouped && <Icon name={iconGroup} aria-hidden />}
          </div>
        </div>
        {hasPopover && popoverOpen && (
          <ColumnHeaderModal
            isRtl={isRtl}
            column={column}
            onSort={onSort}
            onGroupBy={onGroupBy}
            openerRef={columnHeaderRef}
            open={popoverOpen}
            setPopoverOpen={setPopoverOpen}
            portalContainer={portalContainer}
          />
        )}
      </div>
    </div>
  );
};

ColumnHeader.displayName = 'ColumnHeader';
