import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { withChartContainer } from '@ui5/webcomponents-react-charts/lib/withChartContainer';
import React, { FC, forwardRef, Ref, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { DEFAULT_OPTIONS } from '../../config';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { InternalProps } from '../../interfaces/InternalProps';
import { useLegend, useLegendItemClickHandler } from '../../internal/ChartLegend';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { useChartData } from '../../util/populateData';
import { formatAxisCallback, formatDataLabel, formatTooltipLabel, useMergedConfig } from '../../util/Utils';
import { LineChartPlaceholder } from './Placeholder';

export interface LineChartPropTypes extends ChartBaseProps {}

const LineChartComponent = forwardRef((props: LineChartPropTypes, ref: Ref<any>) => {
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
    height,
    noLegend,
    legendRef
  } = props as LineChartPropTypes & InternalProps;

  const lineChartDefaultConfig = useMemo(() => {
    return {
      scales: {
        yAxes: [
          {
            ...DEFAULT_OPTIONS.scales.yAxes[0],
            display: true,
            ticks: {
              ...DEFAULT_OPTIONS.scales.yAxes[0].ticks,
              callback: formatAxisCallback(valueAxisFormatter)
            }
          }
        ],
        xAxes: [
          {
            ...DEFAULT_OPTIONS.scales.xAxes[0],
            ticks: {
              callback: formatAxisCallback(categoryAxisFormatter)
            }
          }
        ]
      },
      tooltips: {
        callbacks: {
          label: formatTooltipLabel(categoryAxisFormatter, valueAxisFormatter)
        }
      },
      plugins: {
        datalabels: {
          formatter: formatDataLabel(valueAxisFormatter)
        }
      }
    };
  }, [categoryAxisFormatter, valueAxisFormatter]);
  const chartOptions = useMergedConfig(lineChartDefaultConfig, options);

  const theme: any = useTheme();
  const data = useChartData(labels, datasets, colors, theme.theme);

  const chartRef = useConsolidatedRef<any>(ref);
  const handleLegendItemPress = useLegendItemClickHandler(chartRef, legendRef);
  useLegend(chartRef, legendRef, noLegend, handleLegendItemPress);

  return (
    <Line
      ref={chartRef}
      data={data}
      height={height}
      width={width}
      options={chartOptions}
      getDatasetAtEvent={getDatasetAtEvent}
      getElementAtEvent={getElementAtEvent}
    />
  );
});
// @ts-ignore
LineChartComponent.LoadingPlaceholder = LineChartPlaceholder;
/**
 * <code>import { LineChart } from '@ui5/webcomponents-react-charts/lib/LineChart';</code>
 */
const LineChart: FC<LineChartPropTypes> = withChartContainer(LineChartComponent);

LineChart.defaultProps = {
  ...ChartBaseDefaultProps
};
LineChart.displayName = 'LineChart';

export { LineChart };
