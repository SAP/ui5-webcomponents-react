import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import '@ui5/webcomponents/dist/icons/navigation-down-arrow';
import '@ui5/webcomponents/dist/icons/navigation-right-arrow';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useTheme } from 'react-jss';
import { FixedSizeList } from 'react-window';
import { JSSTheme } from '../../../interfaces/JSSTheme';

const ROW_HEIGHT_COMPACT = 32;
const ROW_HEIGHT_COZY = 44;

export const VirtualTableBody = (props) => {
  const {
    classes,
    tableBodyClasses,
    rowContainerStyling,
    onRowClicked,
    prepareRow,
    rows,
    visibleRows,
    minRows,
    columns,
    loading,
    noDataText,
    NoDataComponent,
    selectedRow,
    selectable
  } = props;

  const innerDivRef = useRef(null);
  const theme: JSSTheme = useTheme() as JSSTheme;

  const VirtualTableItem = useCallback(
    (itemProps) => {
      const { style, index } = itemProps;

      const row = rows[index];

      if (rows.length === 0 && !loading && index === 0) {
        return (
          <div style={style}>
            <NoDataComponent noDataText={noDataText} className={classes.noDataContainer} />
          </div>
        );
      }

      const rowStyle = {
        ...style,
        gridTemplateColumns: rowContainerStyling.gridTemplateColumns
      };

      if (!row) {
        return (
          <div key={`minRow-${index}`} className={classes.tr} style={rowStyle}>
            {columns.map((col, colIndex) => (
              <div className={classes.tableCell} key={`minRow-${index}-${colIndex}`} />
            ))}
          </div>
        );
      }

      prepareRow(row);

      const rowProps = row.getRowProps();

      const getPadding = (level) => {
        const isCompact = theme.contentDensity === 'Compact';
        switch (level) {
          case 1:
            return 0;
          case 2:
            return isCompact ? '1.5rem' : '1rem';
          case 3:
            return isCompact ? '2.25rem' : '1.5rem';
          case 4:
            return isCompact ? '2.75rem' : '2rem';
          default:
            return `${(isCompact ? 2.75 : 2) + (level - 4) * 0.5}rem`;
        }
      };
      return (
        <div key={rowProps.key} className={rowProps.className} style={rowStyle} onClick={onRowClicked(row)}>
          {row.cells.map((cell, i) => {
            return (
              <div {...cell.getCellProps()}>
                {row.canExpand && !cell.isGrouped ? (
                  <>
                    {i === 0 ? (
                      <span
                        {...row.getExpandedToggleProps({
                          style: {
                            paddingLeft: i === 0 ? getPadding(row.path.length) : 0
                          },
                          onClick: (e) => {
                            e.stopPropagation();
                            row.toggleExpanded();
                          }
                        })}
                      >
                        <Icon
                          src={`sap-icon://${row.isExpanded ? 'navigation-down-arrow' : 'navigation-right-arrow'}`}
                          className={classes.tableGroupExpandCollapseIcon}
                        />
                      </span>
                    ) : null}
                    <div className={classes.tableCellContent}>{cell.value && cell.render('Cell')}</div>
                  </>
                ) : cell.isGrouped ? (
                  <>
                    <span {...row.getExpandedToggleProps(row.isExpanded)}>
                      <Icon
                        src={`sap-icon://${row.isExpanded ? 'navigation-down-arrow' : 'navigation-right-arrow'}`}
                        className={classes.tableGroupExpandCollapseIcon}
                      />
                    </span>
                    <div className={classes.tableCellContent} title={`${cell.value} (${row.subRows.length})`}>
                      {cell.render('Cell')} ({row.subRows.length})
                    </div>
                  </>
                ) : cell.isAggregated ? (
                  // If the cell is aggregated, use the Aggregated
                  // renderer for cell
                  cell.render('Aggregated')
                ) : cell.isRepeatedValue ? null : ( // For cells with repeated values, render null
                  // Otherwise, just render the regular cell
                  <div
                    className={classes.tableCellContent}
                    style={{
                      paddingLeft: i === 0 ? `calc(${getPadding(row.path.length)} + 2rem)` : 0
                    }}
                  >
                    {cell.render('Cell')}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    },
    [classes, columns, rows, prepareRow, rowContainerStyling, selectedRow, selectable]
  );

  useEffect(() => {
    if (innerDivRef.current) {
      innerDivRef.current.classList = '';
      tableBodyClasses.split(' ').forEach((cssClass) => {
        innerDivRef.current.classList.add(cssClass);
      });
    }
  }, [innerDivRef.current, tableBodyClasses]);

  const { listHeight, itemCount, rowHeight } = useMemo(() => {
    const internalRowHeight = theme.contentDensity === ContentDensity.Compact ? ROW_HEIGHT_COMPACT : ROW_HEIGHT_COZY;

    return {
      listHeight: internalRowHeight * Math.max(rows.length < visibleRows ? rows.length : visibleRows, minRows),
      itemCount: Math.max(minRows, rows.length),
      rowHeight: internalRowHeight
    };
  }, [rows, visibleRows, minRows]);

  return (
    <FixedSizeList
      height={listHeight}
      itemCount={itemCount}
      itemSize={rowHeight}
      innerRef={innerDivRef}
      overscanCount={5}
    >
      {VirtualTableItem}
    </FixedSizeList>
  );
};
