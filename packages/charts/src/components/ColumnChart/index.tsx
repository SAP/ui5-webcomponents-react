import { deprecationNotice } from '@fiori-for-react/utils';
import React, { PureComponent } from 'react';
import { Bar } from 'react-chartjs-2';
import { DEFAULT_OPTIONS } from '../../config';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { ChartInternalProps } from '../../interfaces/ChartInternalProps';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { populateData } from '../../util/populateData';
import { formatTooltipLabel, getTextHeight, getTextWidth, mergeConfig } from '../../util/utils';
import { withChartContainer } from '../ChartContainer/withChartContainer';

export interface ColumnChartPropTypes extends ChartBaseProps {
  // TODO Remove v5
  yValueFormatter?: (label: any) => any;
}

@withChartContainer
export class ColumnChart extends PureComponent<ColumnChartPropTypes> {
  static defaultProps = {
    ...ChartBaseDefaultProps
  };

  componentDidMount() {
    this.setState({ options: { ...this.props.options } });
  }

  getAnchor = (context) => {
    const datasetMeta = context.chart.getDatasetMeta(context.datasetIndex);
    const dataSetLength = context.chart.data.datasets.length;
    const xAxisId = datasetMeta.xAxisID;
    const yAxisId = datasetMeta.yAxisID;

    const xAxis = context.chart.scales[xAxisId];
    const yAxis = context.chart.scales[yAxisId];

    if (datasetMeta.type === 'bar') {
      if (yAxis.options.stacked) {
        if (!xAxis.options.stacked) {
          return 'end';
        }

        if (dataSetLength - 1 === context.datasetIndex) {
          // highest stack
          return 'end';
        } else {
          const chartElement = datasetMeta.data[context.dataIndex];
          const barHeight = Math.abs(chartElement._model.base - chartElement._model.y);
          const textHeight = getTextHeight();
          if (barHeight < 1.5 * textHeight) {
            // arbitrary estimate
            return 'start';
          }
          return 'center';
        }
      }
      if (Object.keys(context.chart.scales).length > 2) {
        return 'center';
      }
    }
    return 'end';
  };

  render() {
    const {
      labels,
      datasets,
      theme,
      categoryAxisFormatter,
      valueAxisFormatter,
      yValueFormatter,
      getDatasetAtEvent,
      getElementAtEvent,
      colors,
      options
    } = this.props as ColumnChartPropTypes & ChartInternalProps;

    const bar = populateData(labels, datasets, colors, theme.theme);
    // TODO Remove v5
    if (yValueFormatter) {
      deprecationNotice(
        'ColumnChart',
        `The prop 'yValueFormatter' is deprecated and will be removed on the next major release.
Please use 'valueAxisFormatter' instead.`
      );
    }

    const mergedOptions = mergeConfig(
      {
        animation: false,
        layout: {
          padding: {
            top: 15
          }
        },
        scales: {
          xAxes: [
            {
              ...DEFAULT_OPTIONS.scales.xAxes[0],
              ticks: {
                callback: categoryAxisFormatter
              }
            }
          ],
          yAxes: [
            {
              ...DEFAULT_OPTIONS.scales.yAxes[0],
              ticks: {
                callback: yValueFormatter || valueAxisFormatter
              }
            }
          ]
        },
        tooltips: {
          callbacks: {
            label: formatTooltipLabel(categoryAxisFormatter, yValueFormatter || valueAxisFormatter)
          }
        },
        plugins: {
          datalabels: {
            display: (context) => {
              const anchor = this.getAnchor(context);
              const datasetMeta = context.chart.getDatasetMeta(context.datasetIndex);
              const chartElement = datasetMeta.data[context.dataIndex];

              if (anchor === 'start') {
                // edge case
                const barHeight = Math.abs(chartElement._model.base - chartElement._model.y);
                const textHeight = getTextHeight();
                if (barHeight < textHeight) {
                  return false;
                }
              }

              // check whether label fits in bar
              const barWidth = chartElement._model.width;
              const text = (yValueFormatter || valueAxisFormatter)(context.dataset.data[context.dataIndex]);
              const textWidth = getTextWidth(text);
              if (barWidth < textWidth) {
                return false;
              }

              return true;
            },
            anchor: this.getAnchor,
            align: 'end',
            offset: 0,
            formatter: yValueFormatter || valueAxisFormatter,
            color: (context) => {
              const anchor = this.getAnchor(context);
              if (anchor === 'end') {
                return '#666';
              } else {
                return '#fff';
              }
            }
          }
        }
      },
      options
    );

    return (
      <Bar
        ref={this.props.innerChartRef}
        data={bar}
        height={this.props.height}
        width={this.props.width}
        options={mergedOptions}
        // @ts-ignore
        getDatasetAtEvent={getDatasetAtEvent}
        // @ts-ignore
        getElementAtEvent={getElementAtEvent}
      />
    );
  }
}
