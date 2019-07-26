import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import React, { forwardRef, Ref, RefObject, useMemo, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { DEFAULT_OPTIONS } from '../../config';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { useLegend, useLegendItemClickHandler } from '../../internal/ChartLegend';
import { withChartContainer } from '../../internal/withChartContainer';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { useChartData } from '../../util/populateData';
import { formatTooltipLabel, useMergedConfig } from '../../util/utils';
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
    noLegend
  } = props;

  const lineChartDefaultConfig = useMemo(() => {
    return {
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
    };
  }, [categoryAxisFormatter, valueAxisFormatter]);
  const chartOptions = useMergedConfig(lineChartDefaultConfig, options);

  const theme: any = useTheme();
  const data = useChartData(labels, datasets, colors, theme.theme);

  const chartRef = useConsolidatedRef<any>(ref);
  const legendRef: RefObject<HTMLDivElement> = useRef();
  const handleLegendItemPress = useLegendItemClickHandler(chartRef, legendRef);
  useLegend(chartRef, legendRef, noLegend, handleLegendItemPress);

  return (
    <>
      <Line
        ref={chartRef}
        data={data}
        height={height}
        width={width}
        options={chartOptions}
        getDatasetAtEvent={getDatasetAtEvent}
        getElementAtEvent={getElementAtEvent}
      />
      <div ref={legendRef} className="legend" />
    </>
  );
});
// @ts-ignore
LineChartComponent.LoadingPlaceholder = LineChartPlaceholder;

const LineChart = withChartContainer(LineChartComponent);

LineChart.defaultProps = {
  ...ChartBaseDefaultProps
};
LineChart.displayName = 'LineChart';

export { LineChart };
