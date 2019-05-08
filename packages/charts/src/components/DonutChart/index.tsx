import React, { PureComponent } from 'react';
import { ChartInternalProps } from '../../interfaces/ChartInternalProps';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { mergeConfig } from '../../util/utils';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { PieChart } from '../PieChart';
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
    const { options, ...otherProps } = this.props as DonutChartPropTypes & ChartInternalProps;

    const mergedOptions = mergeConfig(
      {
        cutoutPercentage: 70
      },
      options
    );

    return <PieChart innerChartRef={this.props.innerChartRef} {...otherProps} options={mergedOptions} />;
  }
}
