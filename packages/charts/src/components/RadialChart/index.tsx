import { StyleClassHelper } from '@ui5/webcomponents-react-base';
import { ChartOptions } from 'chart.js';
import React, { CSSProperties, forwardRef, Ref, useMemo } from 'react';
// @ts-ignore
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { useMergedConfig } from '../../util/utils';
import { DonutChart } from '../DonutChart';

export interface RadialChartPropTypes extends CommonProps {
  value: number;
  maxValue?: number;
  displayValue: number | string;
  colors?: Array<CSSProperties['color']>;
  options?: ChartOptions;
  height?: number;
  width?: number;
}

const styles = {
  radialChart: {
    position: 'relative'
  },
  content: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
    fontSize: '2rem'
  }
};

const useStyles = createUseStyles(styles);

const RadialChart = forwardRef((props: RadialChartPropTypes, ref: Ref<HTMLDivElement>) => {
  const { maxValue, value, displayValue, style, className, colors, options, width, height } = props;

  const data = [value, maxValue - value];
  const radialChartDefaultConfig = useMemo(() => {
    return {
      cutoutPercentage: 90,
      tooltips: {
        enabled: false
      },
      plugins: {
        datalabels: false
      }
    };
  }, []);
  const mergedOptions = useMergedConfig(radialChartDefaultConfig, options);

  const classes = useStyles();

  const radialChartContainerStyles = useMemo(
    () => ({
      width: `${width}px`,
      height: `${height}px`,
      ...style
    }),
    [width, height, style]
  );

  const outerClasses = StyleClassHelper.of(classes.radialChart);
  if (className) {
    outerClasses.put(className);
  }

  return (
    <div className={outerClasses.toString()} style={radialChartContainerStyles}>
      <DonutChart
        ref={ref}
        datasets={[{ data }]}
        colors={colors}
        options={mergedOptions}
        width={width}
        height={height}
        style={{ paddingTop: 0 }}
        noLegend
      />
      <div className={classes.content}>
        <h3
          style={{
            color: '#333333',
            fontSize: '20px',
            margin: '0',
            cursor: 'text',
            display: 'inline-block',
            position: 'relative',
            textShadow: '0 0 0.125rem #ffffff',
            fontFamily: "'72', Arial, Helvetica, sans-serif",
            fontWeight: 'normal'
          }}
        >
          {displayValue as string}
        </h3>
      </div>
    </div>
  );
});

RadialChart.defaultProps = {
  ...ChartBaseDefaultProps,
  maxValue: 100,
  colors: ['#5899DA', '#adbcc3']
};

export { RadialChart };
