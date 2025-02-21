import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { CssSizeVariables, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, ReactElement } from 'react';
import { useRef, useState } from 'react';
import { classNames, styleData } from './AnalyticalTableV2.module.css.js';
import { Cell } from './core/Cell.js';
import { Row } from './core/Row.js';
import { DensityFeature, ColumnModesFeature } from './features/exampleFeature.js';
import { useColumnWidths } from './useColumnMode.js';
import { useRowVirtualizer } from './useRowVirtualizer.js';
import { useTableContainerResizeObserver } from './utils/useTableContainerResizeObserver.js';

interface AnalyticalTableV2Props {
  data?: any[];
  columns?: any[];
  rowHeight?: number;
  visibleRows?: number;
  // todo: fka scaleWidthMode
  columnMode?: string;

  //todo: check if this should be controllable, if so add respective checks otherwise the table-option won't do anything
  enableRowPinning?: boolean;
  enableColumnPinning?: boolean;
}

interface CSSPropertiesWithVars extends CSSProperties {
  '--_ui5WcrAnalyticalTableControlledRowHeight': string;
  '--_ui5WcrAnalyticalTableHeaderGroups': number;
  '--_ui5WcrAnalyticalTableTopRows': number;
  '--_ui5WcrAnalyticalTableBottomRows': number;
}

const ROW_HEIGHT_VAR = 'var(--_ui5WcrAnalyticalTableControlledRowHeight)';

//todo forwardRef or React19? --> prob forwardRef
function AnalyticalTableV2(props: AnalyticalTableV2Props): ReactElement<AnalyticalTableV2Props, 'div'> {
  const { columns, data, rowHeight, visibleRows = 15, enableRowPinning, enableColumnPinning, columnMode } = props;
  useStylesheet(styleData, AnalyticalTableV2.displayName);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const { tableWidth, horizontalScrollbarHeight, verticalScrollbarWidth } =
    useTableContainerResizeObserver(tableContainerRef);
  const [columnSizing, setColumnSizing] = useState({});
  //const setColumnSizing = useColumnWidths(tableWidth, reactTable.getAllLeafColumns().map((item) => item.columnDef)
  const reactTable = useReactTable({
    _features: [DensityFeature, ColumnModesFeature],
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    //todo: remove
    debugTable: true,
    //todo: optional
    // enableColumnPinning: false,
    // enableRowPinning: false,
    state: {
      columnSizing,
      //todo: add types & clarify how to inject types (declare module '@tanstack/react-table' is probably not the best approach - probably we have to cast a lot...)
      //ColumnModesFeature
      tableWidth,

      //DensityFeature
      density: 'md'
    },
    // initialState: {
    //   columnPinning: {
    //     left: ['c_pinned'],
    //     right: ['friend_age']
    //   },
    //   rowPinning: {
    //     bottom: ['0', '1'],
    //     top: ['499', '498']
    //   }
    // }
    // column sizing
    defaultColumn: {
      size: 0,
      minSize: 60
    },
    //ColumnModesFeature
    columnMode,
    onColumnSizingChange: setColumnSizing
  });
  console.log(enableRowPinning, enableColumnPinning);

  useColumnWidths(
    tableWidth,
    //todo: refactor to use getAllLeafColumns directly, or use the `columns` array?
    reactTable.getAllLeafColumns().map((item) => item.columnDef),
    setColumnSizing,
    verticalScrollbarWidth
  );

  const headerGroups = reactTable.getHeaderGroups();
  const topRows = reactTable.getTopRows();
  const centerRows = reactTable.getCenterRows();
  const bottomRows = reactTable.getBottomRows();

  const rowVirtualizer = useRowVirtualizer<HTMLDivElement>(rowHeight, tableContainerRef, { count: centerRows.length });

  // const { rows } = reactTable.getRowModel();

  return (
    <>
      <div
        ref={tableContainerRef}
        style={
          {
            visibility: tableWidth === 0 ? 'hidden' : undefined,
            '--_ui5WcrAnalyticalTableControlledRowHeight':
              typeof rowHeight === 'number' ? `${rowHeight}px` : CssSizeVariables.ui5WcrAnalyticalTableRowHeight,
            '--_ui5WcrAnalyticalTableHeaderGroups': headerGroups.length,
            '--_ui5WcrAnalyticalTableTopRows': topRows.length,
            '--_ui5WcrAnalyticalTableBottomRows': bottomRows.length,
            height: `calc(${headerGroups.length} * ${ROW_HEIGHT_VAR} + ${visibleRows} * ${ROW_HEIGHT_VAR} + ${horizontalScrollbarHeight}px)`
          } as CSSPropertiesWithVars
        }
        className={classNames.tableContainer}
      >
        <div className={classNames.tableBodyContainer} role="grid">
          <div className={clsx(classNames.sticky, classNames.headerGroups)} role="rowgroup">
            {headerGroups.map((headerGroup) => {
              return (
                <Row
                  key={headerGroup.id}
                  className={classNames.headerRow}
                  data-component-name="AnalyticalTableV2HeaderRow"
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <Cell
                        key={header.id}
                        role="columnheader"
                        style={{ width: header.getSize() }}
                        renderable={header.column.columnDef.header}
                        cell={header}
                      />
                    );
                  })}
                </Row>
              );
            })}
          </div>
          {topRows.length > 0 && (
            <div role="rowgroup" className={clsx(classNames.sticky, classNames.topRowsGroup)}>
              {topRows.map((row) => {
                return (
                  <Row key={row.id} data-component-name="AnalyticalTableV2TopRow">
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <Cell
                          key={cell.id}
                          role="gridcell"
                          renderable={cell.column.columnDef.cell}
                          cell={cell}
                          // style={{ width: cell.column.getSize() }}
                        />
                      );
                    })}
                  </Row>
                );
              })}
            </div>
          )}
          <div
            role="rowgroup"
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              position: 'relative'
              // Do NOT add overflow:hidden here
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const row = centerRows[virtualRow.index];
              return (
                <Row
                  key={row.id}
                  data-index={virtualRow.index}
                  style={{
                    transform: `translateY(${virtualRow.start}px)` //this should always be a `style` as it changes on scroll
                    // height: `${virtualRow.size}px`
                  }}
                  className={classNames.virtualizedRow}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <Cell
                        key={cell.id}
                        role="gridcell"
                        renderable={cell.column.columnDef.cell}
                        cell={cell}
                        style={{ width: cell.column.getSize() }}
                      />
                    );
                  })}
                </Row>
              );
            })}
          </div>
          {bottomRows.length > 0 && (
            <div role="rowgroup" className={clsx(classNames.sticky, classNames.bottomRowsGroup)}>
              {bottomRows.map((row) => {
                return (
                  <Row key={row.id} data-component-name="AnalyticalTableV2BottomRow">
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <Cell
                          key={cell.id}
                          role="gridcell"
                          renderable={cell.column.columnDef.cell}
                          cell={cell}
                          style={{ width: cell.column.getSize() }}
                        />
                      );
                    })}
                  </Row>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

AnalyticalTableV2.displayName = 'AnalyticalTableV2';

export type { AnalyticalTableV2Props };
export { AnalyticalTableV2 };
