import React, { PureComponent } from 'react';
import { Pie } from 'react-chartjs-2';
import { populateData } from '../../util/populateData';
import { ChartInternalProps } from '../../interfaces/ChartInternalProps';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { formatTooltipLabelForPieCharts, mergeConfig } from '../../util/utils';
import { withChartContainer } from '../ChartContainer/withChartContainer';
import { PieChartPlaceholder } from './Placeholder';

export interface PieChartPropTypes extends ChartBaseProps {}

@withChartContainer
export class PieChart extends PureComponent<PieChartPropTypes> {
  static defaultProps = {
    ...ChartBaseDefaultProps,
    internalNoMerge: true
  };

  static LoadingPlaceholder = PieChartPlaceholder;

  render() {
    const {
      labels,
      datasets,
      colors,
      theme,
      categoryAxisFormatter,
      getDatasetAtEvent,
      getElementAtEvent,
      valueAxisFormatter,
      options
    } = this.props as PieChartPropTypes & ChartInternalProps;

    const doughnut = populateData(labels, datasets, colors, theme.theme, true);

    const mergedOptions = mergeConfig(
      {
        tooltips: {
          callbacks: {
            label: formatTooltipLabelForPieCharts(categoryAxisFormatter, valueAxisFormatter)
          }
        },
        plugins: {
          datalabels: {
            anchor: 'center',
            align: 'center',
            offset: 0,
            color: (context) => {
              return parseInt(context.dataset.backgroundColor[context.datasetIndex], 16) > 0xffffff / 2
                ? '#666'
                : '#fff';
            },
            formatter: valueAxisFormatter
          }
        }
      },
      options
    );

    return (
      <Pie
        ref={this.props.innerChartRef}
        data={doughnut}
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
