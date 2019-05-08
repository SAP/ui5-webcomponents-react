import React, { PureComponent } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { populateData } from '../../util/populateData';
import { ChartInternalProps } from '../../interfaces/ChartInternalProps';
import { DEFAULT_OPTIONS } from '../../config';
import { formatTooltipLabel, getTextWidth, mergeConfig } from '../../util/utils';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { deprecationNotice, LOG_LEVEL, Logger } from '@fiori-for-react/utils';
import { withChartContainer } from '../ChartContainer/withChartContainer';
import { BarChartPlaceholder } from './Placeholder';

export interface BarChartPropTypes extends ChartBaseProps {
  // TODO Remove v5
  yValueFormatter?: (d: any) => any;
}

@withChartContainer
export class BarChart extends PureComponent<BarChartPropTypes> {
  static defaultProps = {
    ...ChartBaseDefaultProps,
    internalNoMerge: true
  };

  static LoadingPlaceholder = BarChartPlaceholder;

  // private static checkIfDataLabelIsInScale(context) {
  //   const chartElement = getCurrentChartElementFromContext(context);
  //   const maxXAxis = chartElement._xScale.width + chartElement._xScale.left;
  //   const chartWidth = chartElement._model.x;
  //   return chartWidth / maxXAxis > 0.9;
  // }

  getAnchor = (context) => {
    const { yValueFormatter, valueAxisFormatter } = this.props;

    try {
      const datasetMeta = context.chart.getDatasetMeta(context.datasetIndex);
      const dataSetLength = context.chart.data.datasets.length;
      const xAxisId = datasetMeta.xAxisID;
      const yAxisId = datasetMeta.yAxisID;

      const xAxis = context.chart.scales[xAxisId];
      const yAxis = context.chart.scales[yAxisId];
      if (xAxis.options.stacked) {
        if (!yAxis.options.stacked) {
          return 'end';
        }
        if (dataSetLength - 1 === context.datasetIndex) {
          // highest stack
          return 'end';
        } else {
          const chartElement = datasetMeta.data[context.dataIndex];
          const barWidth = Math.abs(chartElement._model.base - chartElement._model.x);
          const text = (yValueFormatter || valueAxisFormatter)(context.dataset.data[context.dataIndex]);
          const textWidth = getTextWidth(text);
          if (barWidth < 1.5 * textWidth) {
            // arbitrary estimate
            return 'start';
          }

          return 'center';
        }
      }
    } catch (e) {
      Logger.log(LOG_LEVEL.WARNING, e.message);
    }
    return 'end';
  };

  render() {
    const {
      labels,
      datasets,
      theme,
      options,
      categoryAxisFormatter,
      valueAxisFormatter,
      yValueFormatter,
      getDatasetAtEvent,
      getElementAtEvent,
      colors
    } = this.props as BarChartPropTypes & ChartInternalProps;

    // TODO Remove v5
    if (yValueFormatter) {
      deprecationNotice(
        'BarChart',
        `The prop 'yValueFormatter' is deprecated and will be removed on the next major release.
Please use 'valueAxisFormatter' instead.`
      );
    }

    const bar = populateData(labels, datasets, colors, theme.theme);

    const mergedOptions = mergeConfig(
      {
        layout: {
          padding: {
            right: 15
          }
        },
        scales: {
          xAxes: [
            {
              ...DEFAULT_OPTIONS.scales.yAxes[0],
              ticks: {
                callback: yValueFormatter || valueAxisFormatter
              }
            }
          ],
          yAxes: [
            {
              ...DEFAULT_OPTIONS.scales.xAxes[0],
              ticks: {
                callback: categoryAxisFormatter
              }
            }
          ]
        },
        tooltips: {
          callbacks: {
            label: formatTooltipLabel(categoryAxisFormatter, valueAxisFormatter || yValueFormatter, 'xLabel')
          }
        },
        plugins: {
          datalabels: {
            // display: (context) => {
            //   const anchor = this.getAnchor(context);
            //   if (anchor === 'start') {
            //     // edge case
            //     const datasetMeta = context.chart.getDatasetMeta(context.datasetIndex);
            //     const chartElement = datasetMeta.data[context.dataIndex];
            //     const barWidth = Math.abs(chartElement._model.base - chartElement._model.x);
            //     const text = (yValueFormatter || valueAxisFormatter)(context.dataset.data[context.dataIndex]);
            //     const textWidth = getTextWidth(text);
            //     if (barWidth < textWidth - 5) {
            //       // arbitrary 5px tolerance
            //       return false;
            //     }
            //   }
            //   return true;
            // },
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
      <HorizontalBar
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
