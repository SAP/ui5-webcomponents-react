import React, { PureComponent } from 'react';
import { ChartInternalProps } from '../../interfaces/ChartInternalProps';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { mergeConfig } from '../../util/utils';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { deprecationNotice } from '@fiori-for-react/utils';
import { PieChart } from '../PieChart';
import { withChartContainer } from '../ChartContainer/withChartContainer';

export interface DonutChartPropTypes extends ChartBaseProps {
  // TODO Remove v5
  data?: number[];
  // TODO Remove v5
  valueFormatter?: (val) => number | string;
}

@withChartContainer
export class DonutChart extends PureComponent<DonutChartPropTypes> {
  static defaultProps = {
    ...ChartBaseDefaultProps,
    colors: null,
    internalNoMerge: true
  };

  render() {
    const { data, datasets, valueFormatter, valueAxisFormatter, options, ...otherProps } = this
      .props as DonutChartPropTypes & ChartInternalProps;

    // TODO Remove v5
    if (data) {
      deprecationNotice(
        'DonutChart',
        `The prop 'data' is deprecated and will be removed on the next major release.
Please use 'datasets' instead. Migration path:
Old: data={ [1,2,3] } --> New: datasets={ [{ data: [1, 2, 3] }] }`
      );
    }

    // TODO Remove v5
    if (valueFormatter) {
      deprecationNotice(
        'DonutChart',
        `The prop 'valueFormatter' is deprecated and will be removed on the next major release.
Please use 'valueAxisFormatter' instead.`
      );
    }

    const pieData = data ? [{ data }] : datasets;
    const formatter = valueFormatter || valueAxisFormatter;

    const mergedOptions = mergeConfig(
      {
        cutoutPercentage: 70
      },
      options
    );

    return (
      <PieChart
        innerChartRef={this.props.innerChartRef}
        {...otherProps}
        datasets={pieData}
        valueAxisFormatter={formatter}
        options={mergedOptions}
      />
    );
  }
}
