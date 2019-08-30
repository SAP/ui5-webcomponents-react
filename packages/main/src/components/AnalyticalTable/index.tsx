import React, { CSSProperties, FC, forwardRef, ReactNode, ReactText, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { useExpanded, useFilters, useGroupBy, useSortBy, useTable } from 'react-table';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { TextAlign } from '../../lib/TextAlign';
import { VerticalAlign } from '../../lib/VerticalAlign';
import { Icon } from '../../webComponents/Icon';
import styles from './AnayticalTable.jss';
import { ColumnHeader } from './columnHeader';
import { DefaultFilterComponent } from './columnHeader/DefaultFilterComponent';
import { LoadingComponent } from './LoadingComponent';
import { TitleBar } from './titleBar';

export interface ColumnConfiguration {
  accessor?: string;
  width?: number;
  hAlign?: TextAlign;
  vAlign?: VerticalAlign;

  [key: string]: any;
}

export interface TableProps extends CommonProps {
  cellHeight?: CSSProperties['height'];
  loading?: boolean;
  filterable?: boolean;
  sortable?: boolean;
  groupable?: boolean;
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
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles);

const defaultColumn = {
  Filter: DefaultFilterComponent,
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
    loading
  } = props;

  const classes = useStyles();

  const myCustomHook = (instance) => {
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

    instance.getRowProps.push(() => {
      return {
        className: classes.tr
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
  };

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useFilters,
    useSortBy,
    useGroupBy,
    useExpanded,
    myCustomHook
  );

  // Render the UI for your table
  return (
    <div className={className} style={style} title={tooltip} ref={ref}>
      {title && <TitleBar>{title}</TitleBar>}
      {typeof renderExtension === 'function' && <div>{renderExtension()}</div>}
      <table {...getTableProps()}>
        <thead className={classes.tHead}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <ColumnHeader
                    {...column.getHeaderProps()}
                    column={column}
                    groupable={groupable}
                    sortable={sortable}
                    filterable={filterable}
                  >
                    {column.render('Header')}
                  </ColumnHeader>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className={classes.tbody}>
          {rows.map(
            (row, i) =>
              prepareRow(row) || (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>
                        {cell.isGrouped ? (
                          <>
                            <span {...row.getExpandedToggleProps()}>
                              <Icon src={`sap-icon://${row.isExpanded ? 'slim-arrow-down' : 'slim-arrow-right'}`} />
                            </span>{' '}
                            {cell.render('Cell')} ({row.subRows.length})
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
              )
          )}
          {loading && <LoadingComponent />}
        </tbody>
      </table>
    </div>
  );
});

AnalyticalTable.displayName = 'AnalyticalTable';
AnalyticalTable.defaultProps = {
  loading: false,
  sortable: true,
  filterable: false,
  groupable: false,
  data: [],
  columns: [],
  title: null,
  cellHeight: null,
  defaultPageSize: 10,
  minRows: 10,
  numItems: null,
  pivotBy: []
};

// export class AnalyticalTable2 extends Component<TablePropsInternal, TableState> {
//
//   render() {
//     const {
//       loading,
//       showPagination,
//       defaultPageSize,
//       minRows,
//       reactTableProps,
//     } = this.props;
//
//     return (

//         <ReactTable
//           loading={loading}
//           minRows={minRows}
//           defaultPageSize={defaultPageSize}
//           LoadingComponent={LoadingComponent}
//           ResizerComponent={Resizer}
//         />
//     );
//   }
// }
