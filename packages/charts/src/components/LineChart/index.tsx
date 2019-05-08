import React, { PureComponent } from 'react';
import { Line } from 'react-chartjs-2';
import { populateData } from '../../util/populateData';
import { DEFAULT_OPTIONS } from '../../config';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { ChartInternalProps } from '../../interfaces/ChartInternalProps';
import { formatTooltipLabel, mergeConfig } from '../../util/utils';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { withChartContainer } from '../ChartContainer/withChartContainer';
import { LineChartPlaceholder } from './Placeholder';

export interface LineChartPropTypes extends ChartBaseProps {}

@withChartContainer
export class LineChart extends PureComponent<LineChartPropTypes> {
  static defaultProps = {
    ...ChartBaseDefaultProps
  };

  static LoadingPlaceholder = LineChartPlaceholder;

  render() {
    const {
      labels,
      datasets,
      colors,
      width,
      height,
      options,
      valueAxisFormatter,
      categoryAxisFormatter,
      getElementAtEvent,
      getDatasetAtEvent,
      theme
    } = this.props as LineChartPropTypes & ChartInternalProps;

    const chartOptions = mergeConfig(
      {
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                callback: valueAxisFormatter
              }
            }
          ],
          xAxes: DEFAULT_OPTIONS.scales.xAxes
        },
        tooltips: {
          callbacks: {
            label: formatTooltipLabel(categoryAxisFormatter, valueAxisFormatter)
          }
        },
        plugins: {
          datalabels: {
            // offset: 100
            formatter: valueAxisFormatter
          }
        }
      },
      options
    );

    const line = populateData(labels, datasets, colors, theme.theme);
    line.datasets.forEach((dataset) => {
      dataset.backgroundColor = 'transparent';
    });
    return (
      <Line
        ref={this.props.innerChartRef}
        data={line}
        height={height}
        width={width}
        options={chartOptions}
        // @ts-ignore
        getDatasetAtEvent={getDatasetAtEvent}
        // @ts-ignore
        getElementAtEvent={getElementAtEvent}
      />
    );
  }
}
