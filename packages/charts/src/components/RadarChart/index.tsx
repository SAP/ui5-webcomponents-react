import React, { FC, forwardRef, Ref } from 'react';
import { Radar } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { withChartContainer } from '../../internal/ChartContainer/withChartContainer';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { populateData } from '../../util/populateData';
import { formatTooltipLabel, mergeConfig } from '../../util/utils';

export interface RadarChartPropTypes extends ChartBaseProps {}

const RadarChart: FC<RadarChartPropTypes> = withChartContainer(
  forwardRef((props: RadarChartPropTypes, ref: Ref<any>) => {
    const {
      labels,
      datasets,
      width,
      height,
      options,
      categoryAxisFormatter,
      getDatasetAtEvent,
      getElementAtEvent,
      valueAxisFormatter,
      colors
    } = props;

    const theme: any = useTheme();
    const data = populateData(labels, datasets, colors, theme.theme);

    const mergedOptions = mergeConfig(
      {
        scale: {
          ticks: {
            callback: valueAxisFormatter
          }
        },
        tooltips: {
          callbacks: {
            label: formatTooltipLabel(categoryAxisFormatter, valueAxisFormatter)
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

RadarChart.defaultProps = {
  ...ChartBaseDefaultProps
};
RadarChart.displayName = 'RadarChart';

export { RadarChart };
