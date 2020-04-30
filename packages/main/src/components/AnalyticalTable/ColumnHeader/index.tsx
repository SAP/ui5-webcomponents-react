import '@ui5/webcomponents-icons/dist/icons/filter';
import '@ui5/webcomponents-icons/dist/icons/group-2';
import '@ui5/webcomponents-icons/dist/icons/sort-ascending';
import '@ui5/webcomponents-icons/dist/icons/sort-descending';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { TextAlign } from '@ui5/webcomponents-react/lib/TextAlign';
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
    padding: `0 0.5rem`,
    boxSizing: 'border-box'
  },
  iconContainer: {
    display: 'inline-block',
    position: 'absolute',
    color: ThemingParameters.sapContent_IconColor,
    right: '0',
    marginRight: '0.5rem',
    '& :last-child': {
      marginLeft: '0.25rem'
    }
  },
  resizer: {
    display: 'inline-block',
    width: '16px',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    transform: 'translateX(50%)',
    zIndex: 1
  },
  lastColumn: {
    right: '8px'
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
  const desc = column.isSortedDesc;

  const sortingIcon = column.isSorted ? <Icon name={desc ? 'sort-descending' : 'sort-ascending'} /> : null;
  const filterIcon = isFiltered ? <Icon name="filter" /> : null;
  const groupingIcon = column.isGrouped ? <Icon name="group-2" /> : null;

  const hasPopover = column.canGroupBy || column.canSort || column.canFilter;
  const innerStyle: CSSProperties = useMemo(() => {
    const modifiedStyles: CSSProperties = {
      cursor: hasPopover ? 'pointer' : 'auto'
    };
    if (column.canResize) {
      modifiedStyles.maxWidth = `calc(100% - 16px)`;
    }
    if (dragOver) {
      modifiedStyles.borderLeft = `3px solid ${ThemingParameters.sapSelectedColor}`;
    }
    if (column.id === '__ui5wcr__internal_highlight_column' || column.id === '__ui5wcr__internal_selection_column') {
      modifiedStyles.padding = 0;
    }
    if (column.hAlign === TextAlign.End) {
      modifiedStyles.justifyContent = 'flex-end';
      modifiedStyles.maxWidth = '';
    }
    return modifiedStyles;
  }, [column.canResize, dragOver, hasPopover]);

  const popoverRef = useRef<Ui5PopoverDomRef>(null);

  const onOpenPopover = useCallback(
    (e) => {
      if (popoverRef.current && hasPopover) {
        popoverRef.current.openBy(e.target);
      }
    },
    [popoverRef, hasPopover]
  );

  if (!column) return null;

  return (
    <div
      id={id}
      className={className}
      style={style}
      role={role}
      draggable={isDraggable}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      data-column-id={id}
    >
      <div style={innerStyle} onClick={onOpenPopover} className={classes.header}>
        <span
          title={typeof children === 'string' ? children : null}
          style={{ textOverflow: 'ellipsis', overflowX: 'hidden', whiteSpace: 'nowrap' }}
        >
          {children}
        </span>
        <div className={classes.iconContainer}>
          {filterIcon}
          {sortingIcon}
          {groupingIcon}
        </div>
      </div>
      {hasPopover && <ColumnHeaderModal column={column} onSort={onSort} onGroupBy={onGroupBy} ref={popoverRef} />}
      {column.canResize && column.getResizerProps && (
        <div {...column.getResizerProps()} className={`${classes.resizer}`} />
      )}
    </div>
  );
};
