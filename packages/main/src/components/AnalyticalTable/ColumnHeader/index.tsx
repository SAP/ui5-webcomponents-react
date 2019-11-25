import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React, { CSSProperties, DragEventHandler, FC, ReactNode, ReactNodeArray, useMemo } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { JSSTheme } from '../../../interfaces/JSSTheme';
import { Resizer } from './Resizer';
import { ColumnType } from '../types/ColumnType';
import { ColumnHeaderModal } from './ColumnHeaderModal';
import '@ui5/webcomponents/dist/icons/filter';
import '@ui5/webcomponents/dist/icons/group-2';
import '@ui5/webcomponents/dist/icons/sort-descending';
import '@ui5/webcomponents/dist/icons/sort-ascending';

export interface ColumnHeaderProps {
  id: string;
  defaultSortDesc: boolean;
  onFilteredChange: (event: Event) => void;
  children: ReactNode | ReactNodeArray;
  grouping: string;
  className: string;
  column: ColumnType;
  style: CSSProperties;
  groupable: boolean;
  sortable: boolean;
  filterable: boolean;
  isLastColumn?: boolean;
  onSort?: (e: Event) => void;
  onGroupBy?: (e: Event) => void;
  onDragStart: DragEventHandler<HTMLDivElement>;
  onDragOver: DragEventHandler<HTMLDivElement>;
  onDrop: DragEventHandler<HTMLDivElement>;
  onDragEnter: DragEventHandler<HTMLDivElement>;
  onDragEnd: DragEventHandler<HTMLDivElement>;
  dragOver: boolean;
  isResizing: boolean;
  isDraggable: boolean;
  isDroppable: boolean;
}

const styles = ({ parameters }: JSSTheme) => ({
  header: {
    padding: `0 0.5rem`,
    height: '100%',
    display: 'flex',
    justifyContent: 'begin',
    alignItems: 'center',
    textAlign: 'left',
    fontFamily: parameters.sapUiFontFamily,
    fontSize: parameters.sapMFontMediumSize,
    fontWeight: 'normal',
    color: parameters.sapUiListTextColor,
    background: parameters.sapUiListHeaderBackground,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    position: 'relative'
  },
  iconContainer: {
    display: 'inline-block',
    position: 'absolute',
    color: parameters.sapUiContentIconColor,
    right: '0',
    marginRight: '0.5rem',
    '& :last-child': {
      marginLeft: '0.25rem'
    }
  }
});

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'TableColumnHeader' });

export const ColumnHeader: FC<ColumnHeaderProps> = (props) => {
  const classes = useStyles(props);

  const {
    id,
    children,
    column,
    className,
    style,
    groupable,
    sortable,
    filterable,
    isLastColumn,
    onSort,
    onGroupBy,
    onDragEnter,
    onDragOver,
    onDragStart,
    onDrop,
    onDragEnd,
    isDraggable,
    isDroppable,
    dragOver
  } = props;

  const openBy = useMemo(() => {
    if (!column) return null;

    const isFiltered = column.filterValue && column.filterValue.length > 0;
    const desc = column.isSortedDesc;

    const classNames = StyleClassHelper.of(classes.header);

    const sortingIcon = column.isSorted ? <Icon src={desc ? 'sort-descending' : 'sort-ascending'} /> : null;
    const filterIcon = isFiltered ? <Icon src="sap-icon://filter" /> : null;
    const groupingIcon = column.isGrouped ? <Icon src="sap-icon://group-2" /> : null;

    return (
      <div className={classNames.valueOf()}>
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
    );
  }, [classes, column.filterValue, column.isSorted, column.isGrouped, column.isSortedDesc, children]);

  const isResizable = !isLastColumn && column.canResize;
  const theme = useTheme() as JSSTheme;
  const innerStyle: CSSProperties = useMemo(() => {
    const modifiedStyles = {
      ...style,
      width: '100%',
      fontWeight: 'normal',
      cursor: 'pointer',
      height: '100%',
      overflowX: 'hidden'
    };
    if (isResizable) {
      modifiedStyles.maxWidth = `calc(100% - 16px)`;
    }
    if (dragOver) {
      isDroppable
        ? (modifiedStyles.borderLeft = '3px solid ' + theme.parameters.sapSelectedColor)
        : (modifiedStyles.borderLeft = '3px solid ' + theme.parameters.sapWarningBorderColor);
    }
    return modifiedStyles as CSSProperties;
  }, [style, isResizable]);

  if (!column) return null;

  return (
    <div
      id={id}
      className={className}
      style={style}
      role="columnheader"
      draggable={isDraggable}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
    >
      {groupable || sortable || filterable ? (
        <ColumnHeaderModal
          openBy={openBy}
          showFilter={filterable}
          showGroup={groupable && column.disableGrouping !== true}
          showSort={sortable}
          column={column}
          style={innerStyle}
          onSort={onSort}
          onGroupBy={onGroupBy}
        />
      ) : (
        <div style={{ ...innerStyle, display: 'inline-block', cursor: 'auto' }}>{openBy}</div>
      )}
      {isResizable && <Resizer {...props} />}
    </div>
  );
};
