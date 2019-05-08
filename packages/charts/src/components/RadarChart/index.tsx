import React, { PureComponent } from 'react';
import { Radar } from 'react-chartjs-2';
import { populateData } from '../../util/populateData';
import { ChartInternalProps } from '../../interfaces/ChartInternalProps';
import { formatTooltipLabel, mergeConfig } from '../../util/utils';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { HSLColor } from '@fiori-for-react/styles';
import { withChartContainer } from '../ChartContainer/withChartContainer';

export interface RadarChartPropTypes extends ChartBaseProps {}

@withChartContainer
export class RadarChart extends PureComponent<RadarChartPropTypes> {
  static defaultProps = {
    ...ChartBaseDefaultProps
  };

  render() {
    const {
      labels,
      datasets,
      theme,
      width,
      height,
      options,
      categoryAxisFormatter,
      getDatasetAtEvent,
      getElementAtEvent,
      valueAxisFormatter,
      colors
    } = this.props as RadarChartPropTypes & ChartInternalProps;

    const bar = populateData(labels, datasets, colors, theme.theme);
    bar.datasets.map(
      (set) =>
        (set.backgroundColor = HSLColor.of(set.backgroundColor)
          .setAlpha(0.3)
          .toString())
    );

    const mergedOptions = mergeConfig(
      {
        scale: {
          ticks: {
            callback: valueAxisFormatter
          }
        },
        tooltips: {
          callbacks: {
            label: formatTooltipLabel(categoryAxisFormatter, valueAxisFormatter)
          }
        },
        plugins: {
          datalabels: false
        }
      },
      options
    );

    return (
      <Radar
        ref={this.props.innerChartRef}
        data={bar}
        height={height}
        width={width}
        options={mergedOptions}
        // @ts-ignore
        getDatasetAtEvent={getDatasetAtEvent}
        // @ts-ignore
        getElementAtEvent={getElementAtEvent}
      />
    );
  }
}
