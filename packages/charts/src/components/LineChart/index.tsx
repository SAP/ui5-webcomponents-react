import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import React, { forwardRef, Ref, RefObject, useCallback, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { DEFAULT_OPTIONS } from '../../config';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { withChartContainer } from '../../internal/ChartContainer/withChartContainer';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { useChartData } from '../../util/populateData';
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
      height,
      noLegend
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
    const data = useChartData(labels, datasets, colors, theme.theme);

    const chartRef = useConsolidatedRef<any>(ref);
    const legendRef: RefObject<HTMLDivElement> = useRef();
    const handleLegendItemPress = useCallback(
      (e) => {
        const clickTarget = (e.currentTarget as unknown) as HTMLLIElement;
        const datasetIndex = parseInt(clickTarget.dataset.datasetindex);
        const { chartInstance } = chartRef.current;
        const meta = chartInstance.getDatasetMeta(datasetIndex);
        meta.hidden = meta.hidden === null ? !chartInstance.data.datasets[datasetIndex].hidden : null;
        chartInstance.update();
        clickTarget.style.textDecoration = meta.hidden ? 'line-through' : 'unset';
      },
      [legendRef.current, chartRef.current]
    );

    useEffect(() => {
      if (noLegend) {
        legendRef.current.innerHTML = '';
      } else {
        legendRef.current.innerHTML = chartRef.current.chartInstance.generateLegend();
        legendRef.current.querySelectorAll('li').forEach((legendItem) => {
          legendItem.addEventListener('click', handleLegendItemPress);
        });
      }
    }, [chartRef.current, legendRef.current, noLegend]);

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
  })
);

// @ts-ignore
LineChart.LoadingPlaceholder = LineChartPlaceholder;
LineChart.defaultProps = {
  ...ChartBaseDefaultProps
};
LineChart.displayName = 'LineChart';

export { LineChart };
