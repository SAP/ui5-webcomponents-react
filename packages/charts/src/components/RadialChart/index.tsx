import { StyleClassHelper, withStyles } from '@ui5-webcomponents-react/base';
import { ChartOptions } from 'chart.js';
import React, { CSSProperties, PureComponent, Ref } from 'react';
import { ChartInternalProps } from '../../interfaces/ChartInternalProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { mergeConfig } from '../../util/utils';
import { DonutChart } from '../DonutChart';

export interface RadialChartPropTypes extends CommonProps {
  value: number;
  maxValue?: number;
  displayValue: number | string;
  colors?: Array<CSSProperties['color']>;
  options?: ChartOptions;
  height?: number;
  width?: number;
  innerChartRef?: Ref<any>;
}

const styles = () => ({
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
});

@withStyles(styles)
export class RadialChart extends PureComponent<RadialChartPropTypes> {
  static defaultProps = {
    ...ChartBaseDefaultProps,
    maxValue: 100,
    colors: ['sapUiChartPaletteQualitativeHue1', 'sapUiChartPaletteSemanticNeutralLight3'],
    internalNoMerge: true
  };

  render() {
    const { maxValue, value, displayValue, classes, style, className, colors, options } = this
      .props as RadialChartPropTypes & ChartInternalProps;

    const data = [value, maxValue - value];
    const mergedOptions = mergeConfig(
      {
        cutoutPercentage: 90,
        tooltips: {
          enabled: false
        },
        legend: {
          display: false
        },
        plugins: {
          datalabels: false
        }
      },
      options
    );

    const outerClasses = StyleClassHelper.of(classes.radialChart);
    if (className) {
      outerClasses.put(className);
    }

    return (
      <div className={outerClasses.toString()} style={style}>
        <DonutChart
          innerChartRef={this.props.innerChartRef}
          datasets={[{ data }]}
          colors={colors}
          options={mergedOptions}
        />
        <div
          className={classes.content}
          style={{ maxWidth: `${this.props.width}px`, maxHeight: `${this.props.height}px` }}
        >
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
  }
}
