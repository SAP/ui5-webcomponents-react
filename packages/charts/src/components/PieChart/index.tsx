import React, { PureComponent } from 'react';
import { Pie } from 'react-chartjs-2';
import { populateData } from '../../util/populateData';
import { ChartInternalProps } from '../../interfaces/ChartInternalProps';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { deprecationNotice } from '@fiori-for-react/utils';
import { formatTooltipLabelForPieCharts, mergeConfig } from '../../util/utils';
import { withChartContainer } from '../ChartContainer/withChartContainer';
import { PieChartPlaceholder } from './Placeholder';

export interface PieChartPropTypes extends ChartBaseProps {
  // TODO Remove v5
  data?: number[];
  // TODO Remove v5
  valueFormatter?: (val) => number | string;
}

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
      data,
      datasets,
      colors,
      theme,
      valueFormatter,
      categoryAxisFormatter,
      getDatasetAtEvent,
      getElementAtEvent,
      valueAxisFormatter,
      options
    } = this.props as PieChartPropTypes & ChartInternalProps;

    // TODO Remove v5
    if (data) {
      deprecationNotice(
        'PieChart',
        `The prop 'data' is deprecated and will be removed on the next major release.
Please use 'datasets' instead. Migration path:
Old: data={ [1,2,3] } --> New: datasets={ [{ data: [1, 2, 3] }] }`
      );
    }

    // TODO Remove v5
    if (valueFormatter) {
      deprecationNotice(
        'PieChart',
        `The prop 'valueFormatter' is deprecated and will be removed on the next major release.
Please use 'valueAxisFormatter' instead.`
      );
    }

    const doughnut = data
      ? populateData(labels, [{ data }], colors, theme.theme, true)
      : populateData(labels, datasets, colors, theme.theme, true);

    const mergedOptions = mergeConfig(
      {
        tooltips: {
          callbacks: {
            label: formatTooltipLabelForPieCharts(categoryAxisFormatter, valueFormatter || valueAxisFormatter)
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
            formatter: valueFormatter || valueAxisFormatter
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
