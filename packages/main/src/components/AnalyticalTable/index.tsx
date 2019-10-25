import { Device } from '@ui5/webcomponents-react-base/lib/Device';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { TextAlign } from '@ui5/webcomponents-react/lib/TextAlign';
import { VerticalAlign } from '@ui5/webcomponents-react/lib/VerticalAlign';
import React, {
  ComponentType,
  FC,
  forwardRef,
  ReactNode,
  ReactText,
  Ref,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useExpanded, useFilters, useGroupBy, useSortBy, useTable } from 'react-table';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import styles from './AnayticalTable.jss';
import { ColumnHeader } from './ColumnHeader';
import { DEFAULT_COLUMN_WIDTH, DefaultColumn } from './defaults/Column';
import { DefaultLoadingComponent } from './defaults/LoadingComponent';
import { TablePlaceholder } from './defaults/LoadingComponent/TablePlaceholder';
import { DefaultNoDataComponent } from './defaults/NoDataComponent';
import { useResizeColumns } from './hooks/useResizeColumns';
import { useRowSelection } from './hooks/useRowSelection';
import { useTableCellStyling } from './hooks/useTableCellStyling';
import { useTableHeaderGroupStyling } from './hooks/useTableHeaderGroupStyling';
import { useTableHeaderStyling } from './hooks/useTableHeaderStyling';
import { useTableRowStyling } from './hooks/useTableRowStyling';
import { useTableScrollHandles } from './hooks/useTableScrollHandles';
import { useTableStyling } from './hooks/useTableStyling';
import { makeTemplateColumns } from './hooks/utils';
import { TitleBar } from './TitleBar';
import { VirtualTableBody } from './virtualization/VirtualTableBody';

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
  groupBy?: string[];

  // appearance

  minRows?: number;
  visibleRows?: number;
  loading?: boolean;
  busyIndicatorEnabled?: boolean;
  noDataText?: string;
  rowHeight?: number;

  // events

  onSort?: (e?: Event) => void;
  onGroup?: (e?: Event) => void;
  onRowSelected?: (e?: Event) => any;
  onRowExpandChange?: (e?: Event) => any;
  /**
   * additional options which will be passed to [react-table´s useTable hook](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#table-options)
   */
  reactTableOptions?: object;
  tableHooks?: Array<() => any>;
  subRowsKey?: string;
  selectedRowKey?: string;
  isTreeTable?: boolean;

  // default components

  NoDataComponent?: ComponentType<any>;
  LoadingComponent?: ComponentType<any>;
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'AnalyticalTable' });

const AnalyticalTable: FC<TableProps> = forwardRef((props: TableProps, ref: Ref<HTMLDivElement>) => {
  const {
    columns,
    data,
    className,
    style,
    tooltip,
    title,
    renderExtension,
    loading,
    groupBy,
    selectable,
    onRowSelected,
    reactTableOptions,
    tableHooks,
    busyIndicatorEnabled,
    subRowsKey,
    onGroup,
    rowHeight,
    selectedRowKey,
    isTreeTable,
    LoadingComponent
  } = props;
  const theme = useTheme() as JSSTheme;
  const classes = useStyles({ ...props, ...theme });
  const [tableWidth, setTableWidth] = useState(null);

  const [selectedRowPath, onRowClicked] = useRowSelection(onRowSelected, selectedRowKey);
  const [resizedColumns, onColumnSizeChanged] = useResizeColumns();

  const [analyticalTableRef, reactWindowRef] = useTableScrollHandles(ref);

  const getSubRows = useCallback((row) => row[subRowsKey] || [], [subRowsKey]);

  const { getTableProps, headerGroups, rows, prepareRow, setState, state: tableState } = useTable(
    {
      columns,
      data,
      defaultColumn: DefaultColumn,
      getSubRows,
      ...reactTableOptions
    },
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    useTableStyling(classes),
    useTableHeaderGroupStyling(classes, resizedColumns),
    useTableHeaderStyling(classes, onColumnSizeChanged),
    useTableRowStyling(classes, resizedColumns, selectable, selectedRowPath, selectedRowKey),
    useTableCellStyling(classes, rowHeight),
    ...tableHooks
  );

  useEffect(() => {
    setState((old) => {
      return {
        ...old,
        groupBy
      };
    });
  }, [groupBy, setState]);

  const tableBodyClasses = StyleClassHelper.of(classes.tbody);
  if (selectable) {
    tableBodyClasses.put(classes.selectable);
  }

  const tableContainerClasses = StyleClassHelper.of(classes.tableContainer);

  if (theme.contentDensity === ContentDensity.Compact) {
    tableContainerClasses.put(classes.compactSize);
  }

  if (!!rowHeight) {
    tableContainerClasses.put(classes.modifiedRowHeight);
  }

  const rowContainerStyling = useMemo(() => {
    return {
      gridTemplateColumns: makeTemplateColumns(headerGroups.map(({ headers }) => headers).flat(), resizedColumns)
    };
  }, [headerGroups, resizedColumns]);

  const onGroupByChanged = useCallback(
    (e) => {
      const { column, isGrouped } = e.getParameters();
      let groupedColumns = [];
      if (isGrouped) {
        groupedColumns = [...tableState.groupBy, column.id];
      } else {
        groupedColumns = tableState.groupBy.filter((group) => group !== column.id);
      }
      setState((old) => {
        return {
          ...old,
          groupBy: groupedColumns
        };
      });
      onGroup(
        Event.of(null, e.getOriginalEvent(), {
          column,
          groupedColumns
        })
      );
    },
    [tableState.groupBy, onGroup]
  );

  const headerRef = useRef(null);
  const onWindowResize = useCallback(() => {
    if (headerRef.current) {
      setTableWidth(headerRef.current.scrollWidth);
    }
  }, [setTableWidth, headerRef.current]);

  useEffect(() => {
    Device.resize.attachHandler(onWindowResize, null);
    return () => {
      Device.resize.detachHandler(onWindowResize, null);
    };
  }, [onWindowResize]);

  useEffect(() => {
    if (headerRef.current) {
      setTableWidth(headerRef.current.scrollWidth);
    }
  }, [headerRef.current, setTableWidth, resizedColumns]);

  return (
    <div className={className} style={style} title={tooltip} ref={analyticalTableRef}>
      {title && <TitleBar>{title}</TitleBar>}
      {typeof renderExtension === 'function' && <div>{renderExtension()}</div>}
      <div className={tableContainerClasses.valueOf()} ref={headerRef}>
        <div {...getTableProps()}>
          {headerGroups.map((headerGroup) => {
            let headerProps = {};
            if (headerGroup.getHeaderGroupProps) {
              headerProps = headerGroup.getHeaderGroupProps();
            }
            return (
              <header {...headerProps}>
                {headerGroup.headers.map((column, index) => (
                  <ColumnHeader
                    {...column.getHeaderProps()}
                    isLastColumn={index === columns.length - 1}
                    groupable={props.groupable}
                    sortable={props.sortable}
                    filterable={props.filterable}
                    onSort={props.onSort}
                    onGroupBy={onGroupByChanged}
                  >
                    {column.render('Header')}
                  </ColumnHeader>
                ))}
              </header>
            );
          })}
          {loading && busyIndicatorEnabled && data.length > 0 && <LoadingComponent />}
          {loading && data.length === 0 && <TablePlaceholder columns={columns.length} rows={props.minRows} />}
          {data.length > 0 && (
            <VirtualTableBody
              {...props}
              isTreeTable={isTreeTable}
              defaultColumnWidth={DEFAULT_COLUMN_WIDTH}
              resizedColumns={resizedColumns}
              tableWidth={tableWidth}
              tableBodyClasses={tableBodyClasses}
              rowContainerStyling={rowContainerStyling}
              prepareRow={prepareRow}
              rows={rows}
              classes={classes}
              onRowClicked={onRowClicked}
              columns={columns}
              selectedRow={selectedRowPath}
              rowHeight={rowHeight}
              reactWindowRef={reactWindowRef}
            />
          )}
        </div>
      </div>
    </div>
  );
});

AnalyticalTable.displayName = 'AnalyticalTable';
AnalyticalTable.defaultProps = {
  loading: false,
  busyIndicatorEnabled: true,
  sortable: true,
  filterable: false,
  groupable: false,
  selectable: false,
  data: [],
  columns: [],
  title: null,
  minRows: 5,
  groupBy: [],
  NoDataComponent: DefaultNoDataComponent,
  LoadingComponent: DefaultLoadingComponent,
  noDataText: 'No Data',
  reactTableOptions: {},
  tableHooks: [],
  visibleRows: 15,
  subRowsKey: 'subRows',
  onGroup: () => {},
  isTreeTable: false
};

export { AnalyticalTable };
