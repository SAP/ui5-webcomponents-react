import { Column, flexRender, getCoreRowModel, Row, useReactTable } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';

interface AnalyticalTableV2Props {
  data?: any[];
  columns?: any[];
}

const ROW_HEIGHT = 44;

const getCommonPinningStyles = (column: Column<any>): CSSProperties => {
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn = isPinned === 'left' && column.getIsLastColumn('left');
  const isFirstRightPinnedColumn = isPinned === 'right' && column.getIsFirstColumn('right');

  return {
    boxShadow: isLastLeftPinnedColumn
      ? '-4px 0 4px -4px gray inset'
      : isFirstRightPinnedColumn
        ? '4px 0 4px -4px gray inset'
        : undefined,
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    opacity: isPinned ? 0.95 : 1,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
    background: isPinned ? 'lightgreen' : 'transparent'
  };
};

//todo forwardRef or React19? --> prob forwardRef
function AnalyticalTableV2(props: AnalyticalTableV2Props): JSX.Element {
  const { columns, data } = props;
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [tableWidth, setTableWidth] = useState(0);

  useEffect(() => {
    const tableContainer = tableContainerRef.current;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.borderBoxSize) {
          const borderBoxWidth = entry.borderBoxSize[0].inlineSize;
          setTableWidth(borderBoxWidth);
        }
      }
    });

    if (tableContainer) {
      resizeObserver.observe(tableContainer, { box: 'border-box' });
    }

    return () => {
      if (tableContainer) {
        resizeObserver.unobserve(tableContainer);
      }
    };
  }, []);

  const reactTable = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    //todo: remove
    debugTable: true,
    //todo: optional
    enableColumnPinning: true,
    initialState: {
      columnPinning: {
        left: ['c_pinned'],
        right: ['friend_age']
      },
      rowPinning: {
        bottom: ['0', '1'],
        top: ['499', '498']
      }
    },
    enableRowPinning: true
  });

  // not pinned
  const centerRows = reactTable.getCenterRows();
  const bottomRows = reactTable.getBottomRows();
  const topRows = reactTable.getTopRows();
  const headerGroups = reactTable.getHeaderGroups();

  console.log(topRows);

  //todo: fixed height - can be updated to use dynamic height => implement virtualizer so it can be extended
  const rowVirtualizer = useVirtualizer({
    count: centerRows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 5
    // paddingStart: topRows.length ? topRows.length * ROW_HEIGHT : 0
    // paddingEnd: bottomRows.length ? bottomRows.length * ROW_HEIGHT : 0
  });

  console.log(rowVirtualizer.getTotalSize());

  const virtualizedContainerHeight = rowVirtualizer.getSize();
  const tableHeight = 11 * ROW_HEIGHT;

  const { rows } = reactTable.getRowModel();

  return (
    <>
      <div
        ref={tableContainerRef}
        style={{
          overflow: 'auto', //our scrollable table container
          position: 'relative',
          height: `${11 * ROW_HEIGHT}px`, // todo: 10 rows + single header --> adjust if multiple headers are rendered
          background: 'lightblue'
        }}
      >
        <div style={{ display: 'grid' }} role="grid">
          <div
            style={{
              display: 'grid',
              position: 'sticky',
              insetBlockStart: 0,
              zIndex: 1
            }}
            role="rowgroup"
          >
            {headerGroups.map((headerGroup) => {
              return (
                <div
                  role="row"
                  key={headerGroup.id}
                  style={{ display: 'flex', width: '100%', height: `${ROW_HEIGHT}px`, background: 'lightgrey' }}
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <div
                        role="columnheader"
                        key={header.id}
                        style={{
                          display: 'flex',
                          width: header.getSize(),
                          //todo: sticky cols
                          ...getCommonPinningStyles(header.column)
                        }}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          {topRows.length > 0 && (
            <div
              role="rowgroup"
              style={{
                background: 'lightyellow',
                position: 'sticky',
                zIndex: 1,
                insetBlockStart: headerGroups.length * ROW_HEIGHT,
                height: topRows.length * ROW_HEIGHT + 'px'
              }}
            >
              {topRows.map((row, index, arr) => {
                return (
                  <div
                    key={row.id}
                    role="row"
                    style={{
                      display: 'flex',
                      width: '100%',
                      height: `${ROW_HEIGHT}px`
                    }}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <div
                          key={cell.id}
                          role="gridcell"
                          style={{
                            display: 'flex',
                            width: cell.column.getSize(),
                            //todo: sticky cols
                            ...getCommonPinningStyles(cell.column)
                          }}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
          {/*  todo: if only the table body should be scrolled (scrollbar not over header) then we can't use this approach*/}
          <div
            role="rowgroup"
            style={{
              display: 'grid',
              height: `${rowVirtualizer.getTotalSize()}px`, //tells scrollbar how big the table is
              position: 'relative'
              // Do NOT add overflow:hidden here
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const row = centerRows[virtualRow.index] as Row<any>; //todo: check if type can be inferred from `data`
              return (
                <div
                  role="row"
                  key={row.id}
                  data-index={virtualRow.index} //needed for dynamic row height measurement
                  style={{
                    display: 'flex',
                    position: 'absolute',
                    transform: `translateY(${virtualRow.start}px)`, //this should always be a `style` as it changes on scroll
                    height: `${virtualRow.size}px`,
                    width: '100%',
                    insetInlineStart: 0,
                    insetBlockStart: 0
                  }}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <div
                        role="gridcell"
                        key={cell.id}
                        style={{
                          display: 'flex',
                          width: cell.column.getSize(),
                          //todo: sticky cols
                          ...getCommonPinningStyles(cell.column)
                        }}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          {bottomRows.length > 0 && (
            <div
              role="rowgroup"
              style={{
                background: 'lightyellow',
                position: 'sticky',
                insetBlockEnd: 0,
                height: bottomRows.length * ROW_HEIGHT + 'px'
              }}
            >
              {bottomRows.map((row) => {
                return (
                  <div
                    key={row.id}
                    role="row"
                    style={{
                      display: 'flex',
                      width: '100%',
                      height: `${ROW_HEIGHT}px`
                    }}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <div
                          key={cell.id}
                          role="gridcell"
                          style={{
                            display: 'flex',
                            width: cell.column.getSize(),
                            //todo: sticky cols
                            ...getCommonPinningStyles(cell.column)
                          }}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export type { AnalyticalTableV2Props };
export { AnalyticalTableV2 };
