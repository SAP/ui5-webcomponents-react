import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { TextAlign } from '@ui5/webcomponents-react/lib/TextAlign';
import React, { CSSProperties, FC, useCallback, useMemo } from 'react';
import { useTheme } from 'react-jss';
import { JSSTheme } from '../../../interfaces/JSSTheme';

interface Props {
  row: any;
  cell: any;
  columnIndex: number;
  isTreeTable: boolean;
  classes: Record<string, string>;
}

export const Cell: FC<Props> = ({ row, cell, columnIndex, classes, isTreeTable }) => {
  const theme: JSSTheme = useTheme() as JSSTheme;
  const isCompact = theme.contentDensity === 'Compact';

  const getPadding = useCallback(
    (level) => {
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
    },
    [isCompact]
  );
  const expandable = useMemo(() => {
    let paddingLeft = null;
    if (row.canExpand) {
      paddingLeft = columnIndex === 0 ? getPadding(row.path.length) : 0;
    } else {
      paddingLeft = columnIndex === 0 ? `calc(${getPadding(row.path.length)} + 2rem)` : 0;
    }
    const style: CSSProperties = {
      paddingLeft
    };

    return (
      <>
        {columnIndex === 0 && row.canExpand ? (
          <span {...row.getExpandedToggleProps({ style })}>
            <Icon
              src={`sap-icon://${row.isExpanded ? 'navigation-down-arrow' : 'navigation-right-arrow'}`}
              className={classes.tableGroupExpandCollapseIcon}
            />
          </span>
        ) : null}
        <div className={classes.tableCellContent} style={!row.canExpand ? { paddingLeft } : undefined}>
          {cell.value && cell.render('Cell')}
        </div>
      </>
    );
  }, [cell, classes, row, columnIndex]);

  const grouped = useMemo(() => {
    const style: CSSProperties = {};
    if (cell.column.hAlign && (cell.column.hAlign !== TextAlign.Left || cell.column.hAlign !== TextAlign.Begin)) {
      style.marginRight = 'auto';
    }
    return (
      <>
        <span {...row.getExpandedToggleProps({ style })}>
          <Icon
            src={`sap-icon://${row.isExpanded ? 'navigation-down-arrow' : 'navigation-right-arrow'}`}
            className={classes.tableGroupExpandCollapseIcon}
          />
        </span>
        <div className={classes.tableCellContent} title={`${cell.value} (${row.subRows.length})`}>
          {cell.render('Cell')} ({row.subRows.length})
        </div>
      </>
    );
  }, [row, classes, cell]);

  const renderedCell = useMemo(() => {
    if (isTreeTable) {
      return expandable;
    }
    if (cell.isGrouped) {
      return grouped;
    }
    if (cell.isAggregated) {
      return cell.render('Aggregated');
    }
    if (cell.isRepeatedValue) {
      return null;
    }
    return <div className={classes.tableCellContent}>{cell.render('Cell')}</div>;
  }, [cell, expandable, grouped, isTreeTable]);

  return <div {...cell.getCellProps()}>{renderedCell}</div>;
};
