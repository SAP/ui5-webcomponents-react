import React, { PureComponent } from 'react';
import { ChartInternalProps } from '../../interfaces/ChartInternalProps';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { populateData } from '../../util/populateData';
import { formatTooltipLabelForPieCharts, mergeConfig } from '../../util/utils';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { Pie } from 'react-chartjs-2';
import { withChartContainer } from '../ChartContainer/withChartContainer';
import { PieChartPlaceholder } from '../PieChart/Placeholder';

export interface DonutChartPropTypes extends ChartBaseProps {}

@withChartContainer
export class DonutChart extends PureComponent<DonutChartPropTypes> {
  static defaultProps = {
    ...ChartBaseDefaultProps,
    colors: null,
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
    } = this.props as DonutChartPropTypes & ChartInternalProps;

    const doughnut = populateData(labels, datasets, colors, theme.theme, true);

    const mergedOptions = mergeConfig(
      {
        cutoutPercentage: 70,
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
