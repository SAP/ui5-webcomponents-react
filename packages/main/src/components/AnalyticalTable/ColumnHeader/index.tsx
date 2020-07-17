import { getRTL } from '@ui5/webcomponents-base/dist/config/RTL';
import '@ui5/webcomponents-icons/dist/icons/filter';
import '@ui5/webcomponents-icons/dist/icons/group-2';
import '@ui5/webcomponents-icons/dist/icons/sort-ascending';
import '@ui5/webcomponents-icons/dist/icons/sort-descending';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
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
  useRef
} from 'react';
import { Ui5PopoverDomRef } from '../../../interfaces/Ui5PopoverDomRef';
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
  isDraggable: boolean;
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
    color: ThemingParameters.sapContent_IconColor,
    right: getRTL() === false ? '0.5rem' : undefined,
    left: getRTL() === true ? '0.5rem' : undefined
  },
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
    '&:hover, &:active': {
      backgroundColor: ThemingParameters.sapContent_DragAndDropActiveColor
    }
  }
};

const useStyles = createComponentStyles(styles, { name: 'TableColumnHeader' });

/**
 * <code>import { ColumnHeader } from '@ui5/webcomponents-react/lib/ColumnHeader';</code>
 */
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
    isDraggable,
    dragOver,
    role
  } = props;

  const isFiltered = column.filterValue && column.filterValue.length > 0;

  const textStyle = useMemo(() => {
    let margin = 0;

    if (column.isSorted) margin++;
    if (column.isGrouped) margin++;
    if (isFiltered) margin++;

    if (margin === 0) {
      return {};
    }

    if (margin > 0) margin += 0.5;

    if (getRTL()) {
      return {
        marginLeft: `${margin}rem`
      };
    }
    return {
      marginRight: `${margin}rem`
    };
  }, [column.isSorted, column.isGrouped, isFiltered]);

  const hasPopover = column.canGroupBy || column.canSort || column.canFilter;

  const popoverRef = useRef<Ui5PopoverDomRef>(null);

  const onOpenPopover = useCallback(
    (e) => {
      if (popoverRef.current && hasPopover) {
        popoverRef.current.openBy(e.currentTarget);
      }
    },
    [popoverRef, hasPopover]
  );

  if (!column) return null;

  return (
    <>
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
          <Text
            tooltip={typeof children === 'string' ? children : null}
            wrapping={false}
            style={textStyle}
            className={classes.text}
          >
            {children}
          </Text>
          <div className={classes.iconContainer}>
            {isFiltered && <Icon name="filter" />}
            {column.isSorted && <Icon name={column.isSortedDesc ? 'sort-descending' : 'sort-ascending'} />}
            {column.isGrouped && <Icon name="group-2" />}
          </div>
        </div>
        {hasPopover && <ColumnHeaderModal column={column} onSort={onSort} onGroupBy={onGroupBy} ref={popoverRef} />}
      </div>
      {column.canResize && column.getResizerProps && (
        <div
          {...column.getResizerProps()}
          data-resizer
          className={classes.resizer}
          style={{ left: `${column.totalLeft + column.totalFlexWidth}px` }}
        />
      )}
    </>
  );
};
