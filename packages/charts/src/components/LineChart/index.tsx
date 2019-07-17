import React, { forwardRef, Ref } from 'react';
import { Line } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { DEFAULT_OPTIONS } from '../../config';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { withChartContainer } from '../../internal/ChartContainer/withChartContainer';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { populateData } from '../../util/populateData';
import { formatTooltipLabel, mergeConfig } from '../../util/utils';
import { LineChartPlaceholder } from './Placeholder';

export interface LineChartPropTypes extends ChartBaseProps {}

const LineChart = withChartContainer(
  forwardRef((props: LineChartPropTypes, ref: Ref<any>) => {
    const {
      labels,
      datasets,
      colors,
      options,
      valueAxisFormatter,
      categoryAxisFormatter,
      getElementAtEvent,
      getDatasetAtEvent,
      width,
      height
    } = props;

    const chartOptions = mergeConfig(
      {
        scales: {
          yAxes: [
            {
              ...DEFAULT_OPTIONS.scales.yAxes[0],
              display: true,
              ticks: {
                ...DEFAULT_OPTIONS.scales.yAxes[0].ticks,
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
            formatter: valueAxisFormatter
          }
        }
      },
      options
    );

    const theme: any = useTheme();
    const data = populateData(labels, datasets, colors, theme.theme);
    return (
      <Line
        ref={ref}
        data={data}
        height={height}
        width={width}
        options={chartOptions}
        getDatasetAtEvent={getDatasetAtEvent}
        getElementAtEvent={getElementAtEvent}
      />
    );
  })
);

// @ts-ignore
LineChart.LoadingPlaceholder = LineChartPlaceholder;
LineChart.defaultProps = {
  ...ChartBaseDefaultProps
};
LineChart.displayName = 'LineChart';

export { LineChart };
