import React, { CSSProperties, FC, forwardRef, Ref } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { resolveColors } from '../../util/populateData';

const BarStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  labelContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  valueContainer: {
    display: 'flex'
  },
  valueBar: { height: '4px' },
  fillUp: {
    height: '4px',
    backgroundColor: '#f1f2f3',
    flexGrow: 1
  },
  label: {
    color: 'hsl(0, 0%, 40%)',
    display: 'block',
    overflow: 'hidden',
    fontFamily: "'72', Arial, Helvetica, sans-serif",
    fontWeight: 'normal',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: '12px',
    maxWidth: '70%'
  },
  text: {
    paddingLeft: '6px',
    display: 'inline-block',
    overflow: 'hidden',
    fontSize: '14px',
    boxSizing: 'border-box',
    fontFamily: "'72', Arial, Helvetica, sans-serif",
    fontWeight: 'normal',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: '#333333',
    textAlign: 'right'
  }
};

const useStyles = createUseStyles(BarStyles, { name: 'MicroBarChart' });

interface DataItems {
  value: number;
  label: string;
}

export interface MicroBarChartPropTypes extends CommonProps {
  dataset: DataItems[];
  maxWidth?: CSSProperties['width'];
  colors?: Array<CSSProperties['color']>;
  visibleDatasetCount?: number;
  valueFormatter?: (value: any) => string | number;
  labelFormatter?: (value: any) => string | number;
}

/**
 * <code>import { MicroBarChart } from '@ui5/webcomponents-react-charts/lib/MicroBarChart';</code>
 */
const MicroBarChart: FC<MicroBarChartPropTypes> = forwardRef(
  (props: MicroBarChartPropTypes, ref: Ref<HTMLDivElement>) => {
    const { className, dataset, colors, maxWidth, visibleDatasetCount, valueFormatter, labelFormatter, style } = props;
    const classes = useStyles();
    const theme: any = useTheme();
    const visibleDatasetArray = visibleDatasetCount ? dataset.slice(0, visibleDatasetCount) : dataset;

    const colorPalette = resolveColors(colors, theme.theme);

    const maxValue = Math.max(...dataset.map((item) => item.value));

    return (
      <div className={`${classes.container} ${className}`} style={{ maxWidth, ...style }} ref={ref}>
        {visibleDatasetArray.map((item, index) => {
          return (
            <div key={item.label}>
              <div className={classes.labelContainer}>
                <span className={classes.label} title={`${labelFormatter(item.label)}`}>
                  {labelFormatter(item.label)}
                </span>
                <span
                  className={classes.text}
                  style={{
                    fontSize: '12px'
                  }}
                  title={`${valueFormatter(item.value)}`}
                >
                  {valueFormatter(item.value)}
                </span>
              </div>
              <div className={classes.valueContainer}>
                <div
                  className={classes.valueBar}
                  style={{
                    width: `${(item.value / maxValue) * 100}%`,
                    backgroundColor: colorPalette[index]
                  }}
                />
                <div className={classes.fillUp} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

MicroBarChart.displayName = 'MicroBarChart';
MicroBarChart.defaultProps = {
  valueFormatter: (value) => value,
  labelFormatter: (value) => value
};

export { MicroBarChart };
