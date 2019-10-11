import React, { useCallback, useMemo } from 'react';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { JSSTheme } from '../../../interfaces/JSSTheme';
import { useTheme } from 'react-jss';

export const Cells = ({ row, cell, index, classes }) => {
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
  const getExpandedToggleProps = useCallback(
    (param) => {
      return {
        ...row.getExpandedToggleProps(param)
      };
    },
    [row]
  );
  const i = index;
  const expandable = useMemo(() => {
    return (
      <>
        {i === 0 ? (
          <span
            {...getExpandedToggleProps({
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
    );
  }, [cell, classes, row, i]);

  const grouped = useMemo(() => {
    return (
      <>
        <span {...getExpandedToggleProps(row.isExpanded)}>
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

  const aggregated = useMemo(() => {
    return cell.render('Aggregated');
  }, [cell]);

  const repeatedValue = useMemo(() => {
    return null;
  }, []);

  const defaultCell = useMemo(() => {
    return (
      <div
        className={classes.tableCellContent}
        style={{
          paddingLeft: i === 0 ? `calc(${getPadding(row.path.length)} + 2rem)` : 0
        }}
      >
        {cell.render('Cell')}
      </div>
    );
  }, [cell, row, classes]);

  const renderCells = useCallback(() => {
    if (row.canExpand && !cell.isGrouped) {
      return expandable;
    }
    if (cell.isGrouped) {
      return grouped;
    }
    if (cell.isAggregated) {
      return aggregated;
    }
    if (cell.isRepeatedValue) {
      return repeatedValue;
    }
    return defaultCell;
  }, [row, cell]);

  return <div {...cell.getCellProps()}>{renderCells()}</div>;
};
