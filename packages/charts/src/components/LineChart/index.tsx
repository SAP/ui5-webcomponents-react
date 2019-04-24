import React, { PureComponent } from 'react';
import { Line } from 'react-chartjs-2';
import { populateData } from '../../util/populateData';
import { DEFAULT_OPTIONS } from '../../config';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { ChartInternalProps } from '../../interfaces/ChartInternalProps';
import { formatTooltipLabel, mergeConfig } from '../../util/utils';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { deprecationNotice } from '@fiori-for-react/utils';
import { withChartContainer } from '../ChartContainer/withChartContainer';

export interface LineChartPropTypes extends ChartBaseProps {
  // TODO Remove v5
  yValueFormatter?: (e) => any;
}

@withChartContainer
export class LineChart extends PureComponent<LineChartPropTypes> {
  static defaultProps = {
    ...ChartBaseDefaultProps
  };

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
      theme,
      yValueFormatter
    } = this.props as LineChartPropTypes & ChartInternalProps;

    // TODO Remove v5
    if (yValueFormatter) {
      deprecationNotice(
        'LineChart',
        `The prop 'yValueFormatter' is deprecated and will be removed on the next major release.
Please use 'valueAxisFormatter' instead.`
      );
    }

    const chartOptions = mergeConfig(
      {
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                callback: yValueFormatter || valueAxisFormatter
              }
            }
          ],
          xAxes: DEFAULT_OPTIONS.scales.xAxes
        },
        tooltips: {
          callbacks: {
            label: formatTooltipLabel(categoryAxisFormatter, yValueFormatter || valueAxisFormatter)
          }
        },
        plugins: {
          datalabels: {
            // offset: 100
            formatter: yValueFormatter || valueAxisFormatter
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
