import React, { PureComponent } from 'react';
import { Radar } from 'react-chartjs-2';
import { populateData } from '../../util/populateData';
import { ChartInternalProps } from '../../interfaces/ChartInternalProps';
import { formatTooltipLabel, mergeConfig } from '../../util/utils';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { deprecationNotice } from '@fiori-for-react/utils';
import { HSLColor } from '@fiori-for-react/styles';
import { withChartContainer } from '../ChartContainer/withChartContainer';

export interface RadarChartPropTypes extends ChartBaseProps {
  // TODO Remove v5
  yValueFormatter?: (label: any) => any;
}

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
      yValueFormatter,
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

    // TODO Remove v5
    if (yValueFormatter) {
      deprecationNotice(
        'DonutChart',
        `The prop 'yValueFormatter' is deprecated and will be removed on the next major release.
Please use 'valueAxisFormatter' instead.`
      );
    }

    const mergedOptions = mergeConfig(
      {
        scale: {
          ticks: {
            callback: yValueFormatter || valueAxisFormatter
          }
        },
        tooltips: {
          callbacks: {
            label: formatTooltipLabel(categoryAxisFormatter, yValueFormatter || valueAxisFormatter)
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
