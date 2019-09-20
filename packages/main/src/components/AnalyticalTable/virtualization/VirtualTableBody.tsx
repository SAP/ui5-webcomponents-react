import React, { useCallback, useEffect, useRef } from 'react';
import { FixedSizeList } from 'react-window';
import { Icon } from '../../../webComponents/Icon';

const ROW_HEIGHT = 32;

export const VirtualTableBody = (props) => {
  const { classes, tableBodyClasses, rowContainerStyling, onRowClicked, prepareRow, rows, visibleRows } = props;

  const innerDivRef = useRef(null);

  const VirtualTableItem = useCallback(
    (itemProps) => {
      const { style, index } = itemProps;

      const row = rows[index];

      prepareRow(row);

      const rowProps = row.getRowProps();

      return (
        <div
          key={rowProps.key}
          className={rowProps.className}
          style={{
            ...style,
            gridTemplateColumns: rowContainerStyling.gridTemplateColumns
          }}
          onClick={onRowClicked(row)}
        >
          {row.cells.map((cell) => (
            <div {...cell.getCellProps()}>
              {cell.isGrouped ? (
                <>
                  <span {...row.getExpandedToggleProps()}>
                    <Icon
                      src={`sap-icon://${row.isExpanded ? 'navigation-down-arrow' : 'navigation-right-arrow'}`}
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
                <div className={classes.tableCellContent}>{cell.render('Cell')}</div>
              )}
            </div>
          ))}
        </div>
      );
    },
    [rows, prepareRow]
  );

  useEffect(() => {
    if (innerDivRef.current) {
      tableBodyClasses.split(' ').forEach((cssClass) => {
        innerDivRef.current.classList.add(cssClass);
      });
    }
  }, [innerDivRef.current]);

  return (
    <FixedSizeList
      height={ROW_HEIGHT * visibleRows}
      itemCount={rows.length}
      itemSize={ROW_HEIGHT}
      innerRef={innerDivRef}
      overscanCount={5}
    >
      {VirtualTableItem}
    </FixedSizeList>
  );
};
