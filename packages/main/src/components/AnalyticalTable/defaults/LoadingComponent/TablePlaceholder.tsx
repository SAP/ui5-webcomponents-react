import { CssSizeVariables, ThemingParameters } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, FC } from 'react';
import { createUseStyles } from 'react-jss';
import { resolveCellAlignment } from '../../util/index.js';

const getArrayOfLength = (len) => Array.from(Array(len).keys());

const useStyles = createUseStyles(
  {
    '@keyframes placeholderShimmer': {
      '0%': {
        backgroundPositionX: '100%'
      },
      '100%': {
        backgroundPositionX: '0'
      }
    },
    animation: {
      animationDuration: '2s',
      animationFillMode: 'forwards',
      animationIterationCount: 'infinite',
      animationName: '$placeholderShimmer',
      animationTimingFunction: 'linear',
      backgroundImage: ThemingParameters.sapContent_Placeholderloading_Gradient,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '1000px 104px'
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      height: CssSizeVariables.ui5WcrAnalyticalTableRowHeight
    },
    cellContainer: {
      display: 'flex',
      paddingInline: '0.25rem',
      boxSizing: 'border-box'
    },
    cell: {
      height: ThemingParameters.sapFontSize,
      width: '60%',
      borderRadius: ThemingParameters.sapElement_BorderCornerRadius
    }
  },
  { name: 'AnalyticalTablePlaceholder ' }
);

interface TablePlaceholderPropTypes {
  columns: any[];
  rows: number;
  style: CSSProperties;
}

export const TablePlaceholder: FC<TablePlaceholderPropTypes> = (props) => {
  const { columns, rows, style } = props;

  const classes = useStyles();

  return (
    <div
      style={{
        backgroundColor: ThemingParameters.sapList_Background,
        width: '100%',
        ...style
      }}
      data-component-name="AnalyticalTableLoadingPlaceholder"
    >
      {getArrayOfLength(rows).map((_, index) => {
        return (
          <div className={classes.row} key={`row-${index}`}>
            {columns.map((col) => {
              return (
                <div
                  key={`row${index}-${col.id}`}
                  className={classes.cellContainer}
                  style={{ width: col.totalWidth, ...resolveCellAlignment(col) }}
                >
                  <div className={clsx(classes.cell, classes.animation)} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

TablePlaceholder.displayName = 'TablePlaceholder';

TablePlaceholder.defaultProps = {
  rows: 5
};
