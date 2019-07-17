import React, { FC, forwardRef, Ref } from 'react';
import { Pie } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { withChartContainer } from '../../internal/ChartContainer/withChartContainer';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { populateData } from '../../util/populateData';
import { formatTooltipLabelForPieCharts, mergeConfig } from '../../util/utils';
import { PieChartPlaceholder } from './Placeholder';

export interface PieChartPropTypes extends ChartBaseProps {}

const PieChart = withChartContainer(
  forwardRef((props: PieChartPropTypes, ref: Ref<any>) => {
    const {
      labels,
      datasets,
      colors,
      categoryAxisFormatter,
      getDatasetAtEvent,
      getElementAtEvent,
      valueAxisFormatter,
      options,
      width,
      height
    } = props;

    const theme: any = useTheme();
    const data = populateData(labels, datasets, colors, theme.theme, true);

    const mergedOptions = mergeConfig(
      {
        tooltips: {
          callbacks: {
            label: formatTooltipLabelForPieCharts(categoryAxisFormatter, valueAxisFormatter)
          }
        },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'end',
            color: (context) => {
              return /* sapUiBaseText */ '#32363a';
            },
            formatter: valueAxisFormatter
          }
        }
      },
      options
    );

    return (
      <Pie
        ref={ref}
        data={data}
        height={height}
        width={width}
        options={mergedOptions}
        getDatasetAtEvent={getDatasetAtEvent}
        getElementAtEvent={getElementAtEvent}
      />
    );
  })
);

// @ts-ignore
PieChart.LoadingPlaceholder = PieChartPlaceholder;
PieChart.defaultProps = {
  ...ChartBaseDefaultProps
};
PieChart.displayName = 'PieChart';

export { PieChart };
