import { Event, StyleClassHelper } from '@ui5/webcomponents-react-base';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { TextAlign } from '@ui5/webcomponents-react/lib/TextAlign';
import { VerticalAlign } from '@ui5/webcomponents-react/lib/VerticalAlign';
import { ReactComponentLike } from 'prop-types';
import React, { CSSProperties, FC, forwardRef, ReactNode, ReactText, Ref, useCallback, useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useExpanded, useFilters, useGroupBy, useSortBy, useTable, useTableState } from 'react-table';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import styles from './AnayticalTable.jss';
import { ColumnHeader } from './columnHeader';
import { DefaultFilterComponent } from './columnHeader/DefaultFilterComponent';
import { DefaultNoDataComponent } from './DefaultNoDataComponent';
import { LoadingComponent } from './LoadingComponent';
import { TitleBar } from './titleBar';

export interface ColumnConfiguration {
  accessor?: string;
  width?: number;
  hAlign?: TextAlign;
  vAlign?: VerticalAlign;
  canResize?: boolean;
  minWidth?: number;
  [key: string]: any;
}

export interface TableProps extends CommonProps {
  cellHeight?: CSSProperties['height'];
  loading?: boolean;
  filterable?: boolean;
  sortable?: boolean;
  groupable?: boolean;
  selectable?: boolean;
  data: object[];
  /**
   * In addition to the standard 'react-table' column config you can pass the properties 'hAlign' and 'vAlign'.
   * These will align the text inside the column accordingly.
   * values for hAlign: Begin | End | Left | Right | Center | Initial (default)
   * values for vAlign: Bottom | Middle | Top | Inherit (default)
   */
  columns: ColumnConfiguration[];
  /**
   * Component or text of title section of the Table (if not set it will be hidden)
   */
  title?: ReactText | ReactNode;
  /**
   * Extension section of the Table. If not set, no extension area will be rendered
   */
  renderExtension?: () => ReactNode;
  minRows?: number;
  /*
   * Pass in any react-table props you need
   */
  reactTableProps?: object;
  pivotBy?: string[] | number[];
  getTableProps?: () => any;
  getHeaderGroupsProps?: () => any;
  getHeaderProps?: () => any;
  getRowProps?: () => any;
  getCellProps?: () => any;
  onRowSelected?: (e?: Event) => any;
  NoDataComponent?: ReactComponentLike;
  noDataText?: string;
  stickyHeader?: boolean;
  onSort?: (e?: Event) => void;
  useTableProps?: object;
  tableHooks?: Array<() => any>;
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles);

const defaultColumn = {
  Filter: DefaultFilterComponent,
  canResize: true,
  minWidth: 30,
  Aggregated: () => null,
  defaultFilter: (filter, row) => {
    return new RegExp(filter.value, 'gi').test(String(row[filter.id]));
  }
};

export const AnalyticalTable: FC<TableProps> = forwardRef((props: TableProps, ref: Ref<HTMLTableElement>) => {
  const {
    columns,
    data,
    groupable,
    sortable,
    filterable,
    className,
    style,
    tooltip,
    title,
    renderExtension,
    cellHeight,
    loading,
    pivotBy,
    minRows,
    NoDataComponent,
    noDataText,
    selectable,
    onRowSelected,
    stickyHeader,
    onSort,
    useTableProps,
    tableHooks
  } = props;

  const [selectedRow, setSelectedRow] = useState(null);

  const classes = useStyles();

  const useTableStyling = useCallback(
    (instance) => {
      instance.getTableProps.push(() => ({
        className: classes.table,
        style: {
          width: '100%'
        }
      }));

      instance.getHeaderGroupProps.push(() => ({
        className: classes.tableHeaderRow
      }));
      instance.getHeaderProps.push(() => ({
        className: classes.th
      }));

      instance.getRowProps.push((row) => {
        let className = classes.tr;
        if (row.isAggregated) {
          className += ` ${classes.tableGroupHeader}`;
        }
        return {
          className
        };
      });

      instance.getCellProps.push(({ column }) => {
        const style: CSSProperties = {};

        if (cellHeight) {
          style.height = cellHeight;
        }
        switch (column.hAlign) {
          case TextAlign.Begin:
            style.textAlign = 'start';
            break;
          case TextAlign.Center:
            style.textAlign = 'center';
            break;
          case TextAlign.End:
            style.textAlign = 'end';
            break;
          case TextAlign.Left:
            style.textAlign = 'left';
            break;
          case TextAlign.Right:
            style.textAlign = 'right';
            break;
        }
        switch (column.vAlign) {
          case VerticalAlign.Bottom:
            style.verticalAlign = 'bottom';
            break;
          case VerticalAlign.Middle:
            style.verticalAlign = 'inherit';
            break;
          case VerticalAlign.Top:
            style.verticalAlign = 'top';
            break;
        }

        return {
          className: classes.td,
          style
        };
      });
      return instance;
    },
    [classes]
  );

  const tableState = useTableState({
    groupBy: groupable ? pivotBy : []
  });

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      // @ts-ignore
      columns,
      data,
      defaultColumn,
      state: tableState,
      ...useTableProps
    },
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    useTableStyling,
    ...tableHooks
  );

  const minimumRows = useMemo(() => {
    const missingRows = minRows - rows.length;

    if (missingRows > 0 && rows.length > 0) {
      const intData = [];
      for (let i = 0; i < missingRows; i++) {
        intData.push({
          key: `minRow-${i}`
        });
      }
      return intData;
    }

    return [];
  }, [rows]);

  const onRowClicked = useCallback(
    (row) => (e) => {
      const newKey = row.getRowProps().key;
      setSelectedRow(selectedRow === newKey ? null : newKey);
      if (typeof onRowSelected === 'function') {
        onRowSelected(Event.of(null, e, { row }));
      }
    },
    [selectedRow]
  );

  const tableBodyClasses = StyleClassHelper.of(classes.tbody);
  if (selectable) {
    tableBodyClasses.put(classes.selectable);
  }

  // Render the UI for your table
  return (
    <div className={className} style={style} title={tooltip} ref={ref}>
      {title && <TitleBar>{title}</TitleBar>}
      {typeof renderExtension === 'function' && <div>{renderExtension()}</div>}
      <div className={classes.tableContainer}>
        <table {...getTableProps()}>
          <thead className={classes.tHead}>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => {
                  return (
                    <ColumnHeader
                      {...column.getHeaderProps()}
                      column={column}
                      groupable={groupable}
                      sortable={sortable}
                      filterable={filterable}
                      sticky={stickyHeader}
                      isLastColumn={index === columns.length - 1}
                      onSort={onSort}
                    >
                      {column.render('Header')}
                    </ColumnHeader>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody className={tableBodyClasses.valueOf()}>
            {rows.map((row) => {
              prepareRow(row);
              const rowProps = row.getRowProps();
              const { className: rowClasses } = rowProps;
              let finalRowClasses = rowClasses;
              if (selectable && rowProps.key === selectedRow) {
                finalRowClasses = `${finalRowClasses} ${classes.selectedRow}`;
              }
              return (
                <tr {...rowProps} className={finalRowClasses} onClick={onRowClicked(row)}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>
                        {cell.isGrouped ? (
                          <>
                            <span {...row.getExpandedToggleProps()}>
                              <Icon
                                src={`sap-icon://${
                                  row.isExpanded ? 'navigation-down-arrow' : 'navigation-right-arrow'
                                }`}
                                className={classes.tableGroupExpandCollapseIcon}
                              />
                            </span>
                            <span>
                              {cell.render('Cell')} ({row.subRows.length})
                            </span>
                          </>
                        ) : cell.isAggregated ? (
                          // If the cell is aggregated, use the Aggregated
                          // renderer for cell
                          cell.render('Aggregated')
                        ) : cell.isRepeatedValue ? null : ( // For cells with repeated values, render null
                          // Otherwise, just render the regular cell
                          cell.render('Cell')
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            {minimumRows.map((minRow) => (
              <tr key={minRow.key} className={classes.tr}>
                {columns.map((col, index) => (
                  <td key={`${minRow.key}-${index}`} className={classes.td} />
                ))}
              </tr>
            ))}
            {loading && <LoadingComponent />}
          </tbody>
        </table>
        {!loading && rows.length === 0 && (
          <NoDataComponent noDataText={noDataText} className={classes.noDataContainer} />
        )}
      </div>
    </div>
  );
});

AnalyticalTable.displayName = 'AnalyticalTable';
AnalyticalTable.defaultProps = {
  loading: false,
  sortable: true,
  filterable: false,
  groupable: false,
  selectable: false,
  data: [],
  columns: [],
  title: null,
  cellHeight: null,
  minRows: 10,
  pivotBy: [],
  NoDataComponent: DefaultNoDataComponent,
  noDataText: 'No Data',
  stickyHeader: true,
  useTableProps: {},
  tableHooks: []
};
