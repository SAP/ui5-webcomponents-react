import { withStyles } from '@fiori-for-react/styles';
import React, { Component, CSSProperties, ReactNode, ReactText } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { BusyIndicator } from '../../lib/BusyIndicator';
import { TextAlign } from '../../lib/TextAlign';
import { VerticalAlign } from '../../lib/VerticalAlign';
import styles from './AnayticalTable.jss';
import { ColumnHeader } from './columnHeader';
import { Pagination } from './pagination';
import { TitleBar } from './titleBar';
import { FilterEntry } from './types/FilterEntry';

const CustomLoadingComponent = (props) => {
  let className = '-loading';
  if (props.loading) {
    className += ' -active';
  }
  return (
    <div className={className}>
      <BusyIndicator />
    </div>
  );
};

export interface ColumnConfiguration {
  accessor?: string;
  width?: number;
  hAlign?: TextAlign;
  vAlign?: VerticalAlign;

  [key: string]: any;
}

export interface TableProps extends CommonProps {
  alternateRowColors?: boolean;
  cellHeight?: CSSProperties['height'];
  loading?: boolean;
  filterable?: boolean;
  sortable?: boolean;
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
  showPagination?: boolean;
  defaultPageSize?: number;
  minRows?: number;
  numItems?: number;
  getTrProps?: (state?: object, rowInfo?: object, column?: object, instance?: object) => object;
  /*
   * Pass in any react-table props you need
   */
  reactTableProps?: object;
}

interface TablePropsInternal extends TableProps, ClassProps {}

interface TableState {
  filtered: FilterEntry[];
}

@withStyles(styles)
export class AnalyticalTable extends Component<TablePropsInternal, TableState> {
  static defaultProps = {
    alternateRowColors: false,
    loading: false,
    sortable: true,
    filterable: false,
    data: [],
    columns: [],
    title: null,
    cellHeight: null,
    showPagination: true,
    defaultPageSize: 10,
    minRows: 10,
    numItems: null,
    getTrProps: () => ({})
  };

  state = {
    filtered: []
  };

  getTableProps = () => {
    const { classes } = this.props;
    return {
      className: classes.table
    };
  };

  getTheadProps = (state, rowInfo, column, instance) => {
    const { classes } = this.props;
    return {
      className: classes.tHead
    };
  };

  getTheadThProps = (tableData, notNeededParam, column) => {
    return {
      filtered: tableData.filtered,
      sorted: tableData.sorted,
      filterable: tableData.filterable,
      sortable: tableData.sortable,
      defaultSortDesc: tableData.defaultSortDesc,
      column,
      firstColumn: tableData.allVisibleColumns.length > 0 ? tableData.allVisibleColumns[0].id === column.id : false,
      onFilteredChange: this.onFilteredChange
    };
  };

  getTrProps = (...args) => {
    const { classes, getTrProps } = this.props;
    return {
      className: classes.tr,
      ...getTrProps(...args)
    };
  };

  getTrGroupProps = () => {
    const { classes } = this.props;
    return {
      className: classes.trGroup
    };
  };

  getTdProps = (state, rowInfo, column, instance) => {
    const { classes, cellHeight } = this.props;
    const enhancedProps: {
      className: string;
      style: CSSProperties;
    } = {
      className: classes.td,
      style: {}
    };
    if (cellHeight) {
      (enhancedProps.style as CSSProperties).height = cellHeight;
    }
    switch (column.hAlign) {
      case TextAlign.Begin:
        enhancedProps.style.justifyContent = 'flex-start';
        break;
      case TextAlign.Center:
        enhancedProps.style.justifyContent = 'center';
        break;
      case TextAlign.End:
        enhancedProps.style.justifyContent = 'flex-end';
        break;
      case TextAlign.Left:
        enhancedProps.style.justifyContent = 'left';
        break;
      case TextAlign.Right:
        enhancedProps.style.justifyContent = 'right';
        break;
    }
    switch (column.vAlign) {
      case VerticalAlign.Bottom:
        enhancedProps.style.alignItems = 'flex-end';
        break;
      case VerticalAlign.Middle:
        enhancedProps.style.alignItems = 'center';
        break;
      case VerticalAlign.Top:
        enhancedProps.style.alignItems = 'flex-start';
        break;
    }
    return enhancedProps;
  };

  getTbodyProps = () => {
    const { classes } = this.props;
    return {
      className: classes.tBody
    };
  };

  getPaginationProps = (props) => {
    const { numItems } = this.props;
    return {
      numItems: numItems || props.sortedData.length
    };
  };

  private static DEFAULT_FILTER_METHOD(filter, row) {
    return new RegExp(filter.value, 'gi').test(String(row[filter.id]));
  }

  private onFilteredChange = (event) => {
    const filtered = event.getParameter('currentFilters');
    this.setState({ filtered });
  };

  render() {
    const {
      data,
      columns,
      alternateRowColors,
      loading,
      title,
      showPagination,
      defaultPageSize,
      minRows,
      reactTableProps,
      filterable,
      sortable,
      className,
      renderExtension,
      style,
      classes,
      tooltip
    } = this.props;

    let tableClassName = '';
    if (alternateRowColors) {
      tableClassName += '-striped';
    }

    return (
      <div className={className} style={style} title={tooltip}>
        {title && <TitleBar>{title}</TitleBar>}
        {typeof renderExtension === 'function' && <div className={classes.extension}>{renderExtension()}</div>}
        <ReactTable
          data={data}
          loading={loading}
          columns={columns}
          minRows={minRows}
          defaultPageSize={defaultPageSize}
          className={tableClassName}
          showPagination={showPagination}
          getTheadThProps={this.getTheadThProps}
          getTheadProps={this.getTheadProps}
          getTableProps={this.getTableProps}
          getTrProps={this.getTrProps}
          getTrGroupProps={this.getTrGroupProps}
          getTdProps={this.getTdProps}
          getTbodyProps={this.getTbodyProps}
          getPaginationProps={this.getPaginationProps}
          LoadingComponent={CustomLoadingComponent}
          PaginationComponent={Pagination}
          PreviousComponent={undefined}
          NextComponent={undefined}
          ThComponent={ColumnHeader}
          multiSort={false}
          filterable={filterable}
          filtered={this.state.filtered}
          defaultFilterMethod={AnalyticalTable.DEFAULT_FILTER_METHOD}
          onFilteredChange={this.onFilteredChange}
          sortable={sortable}
          {...reactTableProps}
        />
      </div>
    );
  }
}
