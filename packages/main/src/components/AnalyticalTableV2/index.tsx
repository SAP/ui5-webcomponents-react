import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { CssSizeVariables, useIsRTL, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, ReactElement } from 'react';
import { useMemo, useRef, useState } from 'react';
import { classNames, content } from './AnalyticalTableV2.module.css.js';
import { Cell } from './core/Cell.js';
import { Row } from './core/Row.js';
import { createRowProps } from './factories/index.js';
import { DensityFeature } from './features/exampleFeature.js';
import type { FeaturesList } from './types/index.js';
import { useColumnWidths } from './useColumnMode.js';
import { handleKeyboardNavigation } from './useKeyboardNavigation.js';
import { useRowSelection } from './useRowSelection.js';
import { useRowVirtualizer } from './useRowVirtualizer.js';
import { useSorting } from './useSorting.js';
import { useTableContainerResizeObserver } from './utils/useTableContainerResizeObserver.js';

interface AnalyticalTableV2Props {
  data?: any[];
  columns?: any[];
  rowHeight?: number;
  visibleRows?: number;
  // todo: fka scaleWidthMode
  columnMode?: string;
  sortable?: boolean;

  //todo: check if this should be controllable, if so add respective checks otherwise the table-option won't do anything
  enableRowPinning?: boolean;
  enableColumnPinning?: boolean;

  //todo: enum
  selectionMode?: 'None' | 'Single' | 'Multiple';
  selectionBehavior?: 'Row' | 'RowOnly' | 'RowSelector';
}

interface CSSPropertiesWithVars extends CSSProperties {
  '--_ui5WcrAnalyticalTableControlledRowHeight': string;
  '--_ui5WcrAnalyticalTableHeaderGroups': number;
  '--_ui5WcrAnalyticalTableTopRows': number;
  '--_ui5WcrAnalyticalTableBottomRows': number;
}

const ROW_HEIGHT_VAR = 'var(--_ui5WcrAnalyticalTableControlledRowHeight)';

//todo forwardRef or React19 prop? --> prob forwardRef
function AnalyticalTableV2(props: AnalyticalTableV2Props): ReactElement<AnalyticalTableV2Props, 'div'> {
  const {
    columns,
    data,
    rowHeight,
    visibleRows = 15,
    enableRowPinning,
    enableColumnPinning,
    columnMode,
    sortable,
    selectionMode = 'None',
    selectionBehavior = 'Row'
  } = props;
  useStylesheet(content, AnalyticalTableV2.displayName);
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const isRTL = useIsRTL(tableContainerRef);
  const { tableWidth, horizontalScrollbarHeight, verticalScrollbarWidth } =
    useTableContainerResizeObserver(tableContainerRef);
  const [columnSizing, setColumnSizing] = useState({});

  //todo: refactor overload
  //@ts-expect-error: fix type later
  const [sortingOptions, sortingState] = useSorting(sortable);
  const [selectionOptions, selectionState] = useRowSelection(selectionMode, selectionBehavior, columns);

  //const setColumnSizing = useColumnWidths(tableWidth, reactTable.getAllLeafColumns().map((item) => item.columnDef)
  const reactTable = useReactTable({
    _features: [DensityFeature /*SelectionFeature*/],
    data,
    columns,
    //todo: check feasibility to use only row models that are implementing features used by the implementation
    getCoreRowModel: getCoreRowModel(),
    ...sortingOptions,
    ...selectionOptions,
    //todo: remove
    // debugTable: true,
    columnResizeDirection: isRTL ? 'rtl' : 'ltr',
    //todo: `false` doesn't disable pinning --> use `.getCanPin()`
    enableColumnPinning,
    enableRowPinning,
    state: {
      columnSizing,
      //todo: add types & clarify how to inject types (declare module '@tanstack/react-table' is probably not the best approach - probably we have to cast a lot...)
      //ColumnModesFeature
      //todo: type
      //@ts-expect-error: fix type later
      tableWidth,

      //DensityFeature
      density: 'md',
      ...sortingState,
      ...selectionState
    },
    initialState: {},
    // column sizing
    defaultColumn: {
      // need to overwrite default size for dynamic column widths
      size: undefined,
      minSize: 60
    },
    //ColumnModesFeature
    columnMode,
    onColumnSizingChange: setColumnSizing
  });

  //todo: remove test
  const activeFeatures: FeaturesList = useMemo(
    () => [selectionMode !== 'None' ? 'selection' : undefined, 'test'].filter(Boolean),
    [selectionMode]
  );
  const renderSelectionCell = selectionMode !== 'None' && selectionBehavior !== 'RowOnly';
  // console.log(enableRowPinning, enableColumnPinning);

  //todo: refactor to use getAllLeafColumns directly, or use the `columns` array?
  useColumnWidths(
    tableWidth,
    reactTable.getAllLeafColumns().map((item) => item.columnDef),
    setColumnSizing,
    verticalScrollbarWidth
  );

  const headerGroups = reactTable.getHeaderGroups();
  const topRows = reactTable.getTopRows();
  const centerRows = reactTable.getCenterRows();
  const bottomRows = reactTable.getBottomRows();
  const bodyRowCount = reactTable.getRowCount();
  const totalRowCount = bodyRowCount + headerGroups.length;
  const visibleLeafColumns = reactTable.getVisibleLeafColumns();

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
        <div
          data-component-name="AnalyticalTableV2Table"
          className={classNames.table}
          role="grid"
          aria-rowcount={totalRowCount}
          onKeyDown={(e) => handleKeyboardNavigation(e, totalRowCount, visibleLeafColumns.length, isRTL)}
        >
          <div className={clsx(classNames.sticky, classNames.headerGroups)} role="rowgroup">
            {headerGroups.map((headerGroup, groupIndex) => {
              return (
                <Row
                  key={headerGroup.id}
                  className={classNames.headerRow}
                  data-component-name="AnalyticalTableV2HeaderRow"
                  startIndex={groupIndex}
                >
                  {headerGroup.headers.map((header, index) => {
                    const isSortable = sortable && header.column.getCanSort();
                    //todo outsource to factory?
                    const isSelectionCell = renderSelectionCell && header.id === '_ui5wcr_selection_col';
                    return (
                      <Cell
                        key={header.id}
                        role="columnheader"
                        style={{
                          width: header.getSize(),
                          background: isSortable ? 'lightcyan' : 'lightgrey'
                        }}
                        renderable={header.column.columnDef.header}
                        cell={header}
                        //todo: using index does not work for group headers
                        startIndex={index}
                        isFirstFocusableCell={groupIndex === 0 && index === 0}
                        isSortable={isSortable}
                        isSelectionCell={isSelectionCell}
                      />
                    );
                  })}
                </Row>
              );
            })}
          </div>
          {topRows.length > 0 && (
            <div role="rowgroup" className={clsx(classNames.sticky, classNames.topRowsGroup)}>
              {topRows.map((row, index) => {
                const featureProps = createRowProps(activeFeatures, row);
                return (
                  <Row
                    key={row.id}
                    data-component-name="AnalyticalTableV2TopRow"
                    startIndex={headerGroups.length + index}
                    {...featureProps}
                  >
                    {row.getVisibleCells().map((cell, index) => {
                      //todo outsource to factory?
                      const isSelectionCell = renderSelectionCell && cell.id === '_ui5wcr_selection_col';
                      const isSelectableCell =
                        selectionMode !== 'None' && selectionBehavior === 'RowSelector' ? isSelectionCell : true;

                      return (
                        <Cell
                          key={cell.id}
                          role="gridcell"
                          renderable={cell.column.columnDef.cell}
                          cell={cell}
                          startIndex={index}
                          isSelectionCell={isSelectionCell}
                          isSelectableCell={isSelectableCell}
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
              const { className, ...featureProps } = createRowProps(activeFeatures, row);
              return (
                <Row
                  key={row.id}
                  startIndex={headerGroups.length + topRows.length + virtualRow.index}
                  style={{
                    transform: `translateY(${virtualRow.start}px)` //this should always be a `style` as it changes on scroll
                    // height: `${virtualRow.size}px`
                  }}
                  className={clsx(classNames.virtualizedRow, className)}
                  //todo: will only work if SelectionFeature is activated again
                  //{...row.getRowProps()}
                  {...featureProps}
                >
                  {row.getVisibleCells().map((cell, index) => {
                    //todo outsource to factory?
                    const isSelectionCell = renderSelectionCell && cell.id === '_ui5wcr_selection_col';
                    const isSelectableCell =
                      selectionMode !== 'None' && selectionBehavior === 'RowSelector' ? isSelectionCell : true;

                    return (
                      <Cell
                        key={cell.id}
                        role="gridcell"
                        renderable={cell.column.columnDef.cell}
                        cell={cell}
                        style={{ width: cell.column.getSize() }}
                        startIndex={index}
                        isSelectionCell={isSelectionCell}
                        isSelectableCell={isSelectableCell}
                      />
                    );
                  })}
                </Row>
              );
            })}
          </div>
          {bottomRows.length > 0 && (
            <div role="rowgroup" className={clsx(classNames.sticky, classNames.bottomRowsGroup)}>
              {bottomRows.map((row, index) => {
                const featureProps = createRowProps(activeFeatures, row);
                return (
                  <Row
                    key={row.id}
                    data-component-name="AnalyticalTableV2BottomRow"
                    startIndex={headerGroups.length + topRows.length + centerRows.length + index}
                    {...featureProps}
                  >
                    {row.getVisibleCells().map((cell, index) => {
                      //todo outsource to factory?
                      const isSelectionCell = renderSelectionCell && cell.id === '_ui5wcr_selection_col';
                      const isSelectableCell =
                        selectionMode !== 'None' && selectionBehavior === 'RowSelector' ? isSelectionCell : true;

                      return (
                        <Cell
                          key={cell.id}
                          role="gridcell"
                          renderable={cell.column.columnDef.cell}
                          cell={cell}
                          style={{ width: cell.column.getSize() }}
                          startIndex={index}
                          isSelectionCell={isSelectionCell}
                          isSelectableCell={isSelectableCell}
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
