import '@ui5/webcomponents-icons/dist/filter.js';
import '@ui5/webcomponents-icons/dist/group-2.js';
import '@ui5/webcomponents-icons/dist/sort-ascending.js';
import '@ui5/webcomponents-icons/dist/sort-descending.js';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, {
  CSSProperties,
  DragEventHandler,
  FC,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  useRef,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { VirtualItem } from 'react-virtual';
import { Icon } from '../../../webComponents/Icon';
import { Text } from '../../Text';
import { ColumnType } from '../types/ColumnType';
import { ColumnHeaderModal } from './ColumnHeaderModal';

export interface ColumnHeaderProps {
  visibleColumnIndex: number;
  columnIndex: number;
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
  isRtl: boolean;
  children: ReactNode | ReactNode[];
  portalContainer: Element;

  //getHeaderProps()
  id: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement> | undefined;
  className: string;
  style: CSSProperties;
  column: ColumnType;
  role: string;
}

const styles = {
  header: {
    height: '100%',
    display: 'flex',
    justifyContent: 'begin',
    alignItems: 'center',
    textAlign: 'left',
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    fontWeight: 'normal',
    color: ThemingParameters.sapList_TextColor,
    background: ThemingParameters.sapList_HeaderBackground,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    position: 'relative',
    width: '100%',
    overflowX: 'hidden',
    overflowY: 'hidden',
    boxSizing: 'border-box'
  },
  text: {
    width: '100%',
    textAlign: 'start'
  },
  iconContainer: {
    display: 'inline-block',
    position: 'absolute',
    color: ThemingParameters.sapContent_IconColor
  }
};

const useStyles = createUseStyles(styles, { name: 'TableColumnHeader' });

export const ColumnHeader: FC<ColumnHeaderProps> = (props: ColumnHeaderProps) => {
  const classes = useStyles();
  const {
    id,
    children,
    column,
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
    isRtl,
    columnIndex,
    visibleColumnIndex,
    onClick,
    onKeyDown,
    portalContainer
  } = props;

  const isFiltered = column.filterValue && column.filterValue.length > 0;
  const [popoverOpen, setPopoverOpen] = useState(false);

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

    if (isRtl) {
      style.marginLeft = `${margin}rem`;
    } else {
      style.marginRight = `${margin}rem`;
    }

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

  const iconContainerDirectionStyles = isRtl ? { left: '0.5rem' } : { right: '0.5rem' };

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
    if (hasPopover && e.code === 'Space') {
      setPopoverOpen(true);
    }
  };

  const targetRef = useRef();
  if (!column) return null;

  return (
    <div
      ref={targetRef}
      style={{
        position: 'absolute',
        top: 0,
        width: `${virtualColumn.size}px`,
        ...directionStyles
      }}
    >
      <div
        data-visible-column-index={visibleColumnIndex}
        data-visible-row-index={0}
        data-row-index={0}
        data-column-index={columnIndex}
        tabIndex={-1}
        id={id}
        className={className}
        style={{
          ...style,
          cursor: hasPopover ? 'pointer' : 'auto',
          borderLeft: dragOver ? `3px solid ${ThemingParameters.sapSelectedColor}` : undefined
        }}
        aria-haspopup={hasPopover ? 'menu' : undefined}
        role={role}
        draggable={isDraggable}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        onDrop={onDrop}
        onDragEnd={onDragEnd}
        data-column-id={id}
        onClick={handleHeaderCellClick}
        onKeyDown={handleHeaderCellKeyDown}
        onKeyUp={handleHeaderCellKeyUp}
      >
        <div className={classes.header} data-h-align={column.hAlign}>
          <Text
            title={tooltip}
            wrapping={false}
            style={textStyle}
            className={classes.text}
            data-component-name={`AnalyticalTableHeaderHeaderContentContainer-${id}`}
          >
            {children}
          </Text>
          <div
            className={classes.iconContainer}
            style={iconContainerDirectionStyles}
            data-component-name={`AnalyticalTableHeaderIconsContainer-${id}`}
          >
            {isFiltered && <Icon name="filter" />}
            {column.isSorted && <Icon name={column.isSortedDesc ? 'sort-descending' : 'sort-ascending'} />}
            {column.isGrouped && <Icon name="group-2" />}
          </div>
        </div>
        {hasPopover && targetRef.current && (
          <ColumnHeaderModal
            isRtl={isRtl}
            column={column}
            onSort={onSort}
            onGroupBy={onGroupBy}
            targetRef={targetRef}
            open={popoverOpen}
            setPopoverOpen={setPopoverOpen}
            portalContainer={portalContainer}
          />
        )}
      </div>
    </div>
  );
};
