import { deprecationNotice } from '@ui5/webcomponents-react-base/lib/Utils';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { withChartContainer } from '@ui5/webcomponents-react-charts/lib/withChartContainer';
import React, { FC, forwardRef, Ref, useEffect, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import { DEFAULT_OPTIONS } from '../../config';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { InternalProps } from '../../interfaces/InternalProps';
import { useLegend, useLegendItemClickHandler } from '../../internal/ChartLegend';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { useChartData } from '../../util/populateData';
import { formatAxisCallback, formatDataLabel, formatTooltipLabel, useMergedConfig } from '../../util/utils_deprecated';
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

  useEffect(() => {
    deprecationNotice(
      'LineChart',
      "This component is deprecated and will be removed with v0.10.0. Please use '@ui5/webcomponents-react-charts/lib/next/LineChart' instead."
    );
  }, []);

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

  const theme = getTheme();
  const data = useChartData(labels, datasets, colors, theme);

  const chartRef = useConsolidatedRef<any>(ref);
  const handleLegendItemPress = useLegendItemClickHandler(chartRef, legendRef);
  useLegend(chartRef, legendRef, noLegend, handleLegendItemPress);

  return (
    <Line
      ref={chartRef}
      data={data}
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
 * <br />
 * <b>This component is deprecated and will be removed with v0.10.0. Please use [this component](https://sap.github.io/ui5-webcomponents-react/?path=/docs/charts-linechart) instead.</b>
 */
const LineChart: FC<LineChartPropTypes> = withChartContainer(LineChartComponent);

LineChart.defaultProps = {
  ...ChartBaseDefaultProps
};
LineChart.displayName = 'LineChart';

export { LineChart };
