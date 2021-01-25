import '@ui5/webcomponents-icons/dist/filter';
import '@ui5/webcomponents-icons/dist/group-2';
import '@ui5/webcomponents-icons/dist/sort-ascending';
import '@ui5/webcomponents-icons/dist/sort-descending';
import { createUseStyles } from 'react-jss';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import React, {
  CSSProperties,
  DragEventHandler,
  FC,
  ReactNode,
  ReactNodeArray,
  useCallback,
  useMemo,
  useRef,
  useState
} from 'react';
import { VirtualItem } from 'react-virtual';
import { ColumnType } from '../types/ColumnType';
import { ColumnHeaderModal } from './ColumnHeaderModal';

export interface ColumnHeaderProps {
  id: string;
  defaultSortDesc: boolean;
  children: ReactNode | ReactNodeArray;
  grouping: string;
  className: string;
  column: ColumnType;
  style: CSSProperties;
  onSort?: (e: CustomEvent<{ column: unknown; sortDirection: string }>) => void;
  onGroupBy?: (e: CustomEvent<{ column: unknown; isGrouped: boolean }>) => void;
  onDragStart: DragEventHandler<HTMLDivElement>;
  onDragOver: DragEventHandler<HTMLDivElement>;
  onDrop: DragEventHandler<HTMLDivElement>;
  onDragEnter: DragEventHandler<HTMLDivElement>;
  onDragEnd: DragEventHandler<HTMLDivElement>;
  dragOver: boolean;
  isResizing: boolean;
  headerTooltip: string;
  isDraggable: boolean;
  role: string;
  isLastColumn: boolean;
  virtualColumn: VirtualItem;
  isRtl: boolean;
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
    boxSizing: 'border-box',
    '&[data-h-align="End"]': {
      '& $text': {
        textAlign: 'end'
      }
    }
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
  const classes = useStyles(props);
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
    isRtl
  } = props;

  const isFiltered = column.filterValue && column.filterValue.length > 0;
  const [popoverOpen, setPopoverOpen] = useState(false);

  const tooltip = useMemo(() => {
    if (headerTooltip) {
      return headerTooltip;
    }
    if (typeof children === 'string') {
      return children;
    }
    return null;
  }, [children, headerTooltip]);

  const textStyle = useMemo(() => {
    let margin = 0;

    if (column.isSorted) margin++;
    if (column.isGrouped) margin++;
    if (isFiltered) margin++;

    if (margin === 0) {
      return {};
    }

    if (margin > 0) margin += 0.5;

    if (isRtl) {
      return {
        marginLeft: `${margin}rem`
      };
    }
    return {
      marginRight: `${margin}rem`
    };
  }, [column.isSorted, column.isGrouped, isFiltered, isRtl]);

  const hasPopover = column.canGroupBy || column.canSort || column.canFilter;

  const onOpenPopover = useCallback(() => {
    if (hasPopover) {
      setPopoverOpen(true);
    }
  }, [hasPopover]);
  const directionStyles = isRtl
    ? { right: 0, transform: `translateX(-${virtualColumn.start}px)` }
    : { left: 0, transform: `translateX(${virtualColumn.start}px)` };

  const iconContainerDirectionStyles = isRtl ? { right: '0.5rem' } : { left: '0.5rem' };

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
        id={id}
        className={className}
        style={{
          ...style,
          cursor: hasPopover ? 'pointer' : 'auto',
          borderLeft: dragOver ? `3px solid ${ThemingParameters.sapSelectedColor}` : undefined
        }}
        role={role}
        draggable={isDraggable}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        onDrop={onDrop}
        onDragEnd={onDragEnd}
        data-column-id={id}
        onClick={onOpenPopover}
      >
        <div className={classes.header} data-h-align={column.hAlign}>
          <Text tooltip={tooltip} wrapping={false} style={textStyle} className={classes.text}>
            {children}
          </Text>
          <div className={classes.iconContainer} style={iconContainerDirectionStyles}>
            {isFiltered && <Icon name="filter" />}
            {column.isSorted && <Icon name={column.isSortedDesc ? 'sort-descending' : 'sort-ascending'} />}
            {column.isGrouped && <Icon name="group-2" />}
          </div>
        </div>
        {hasPopover && targetRef.current && (
          <ColumnHeaderModal
            column={column}
            onSort={onSort}
            onGroupBy={onGroupBy}
            targetRef={targetRef}
            open={popoverOpen}
            setPopoverOpen={setPopoverOpen}
          />
        )}
      </div>
    </div>
  );
};
