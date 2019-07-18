import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import bestContrast from 'get-best-contrast-color';
import React, { forwardRef, Ref, useEffect, useRef, RefObject, useCallback } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { DEFAULT_OPTIONS } from '../../config';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { withChartContainer } from '../../internal/ChartContainer/withChartContainer';
import { generateLegend } from '../../internal/ChartLegend';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { populateData } from '../../util/populateData';
import { formatTooltipLabel, getTextWidth, mergeConfig } from '../../util/utils';
import { BarChartPlaceholder } from './Placeholder';

export interface BarChartPropTypes extends ChartBaseProps {}

const BarChart = withChartContainer(
  forwardRef((props: BarChartPropTypes, ref: Ref<any>) => {
    const {
      labels,
      datasets,
      options,
      categoryAxisFormatter,
      valueAxisFormatter,
      getDatasetAtEvent,
      getElementAtEvent,
      colors,
      width,
      height,
      noLegend
    } = props as BarChartPropTypes;

    const theme: any = useTheme();
    const data = populateData(labels, datasets, colors, theme.theme);

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

    const mergedOptions = mergeConfig(
      {
        scales: {
          xAxes: [
            {
              ...DEFAULT_OPTIONS.scales.yAxes[0],
              ticks: {
                callback: valueAxisFormatter
              }
            }
          ],
          yAxes: [
            {
              ...DEFAULT_OPTIONS.scales.xAxes[0],
              ticks: {
                callback: categoryAxisFormatter
              }
            }
          ]
        },
        tooltips: {
          callbacks: {
            label: formatTooltipLabel(categoryAxisFormatter, valueAxisFormatter, 'xLabel')
          }
        },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'start',
            clip: true,
            display: (context) => {
              const datasetMeta = context.chart.getDatasetMeta(context.datasetIndex);
              const dataMeta = datasetMeta.data[context.dataIndex];
              const width = dataMeta._view.x - dataMeta._view.base;
              const formattedValue = valueAxisFormatter(context.dataset.data[context.dataIndex]);
              const textWidth = getTextWidth(formattedValue) + 4; // offset
              return width >= textWidth;
            },
            formatter: valueAxisFormatter,
            color: (context) => {
              const datasetMeta = context.chart.getDatasetMeta(context.datasetIndex);
              const dataMeta = datasetMeta.data[context.dataIndex];
              return bestContrast(dataMeta._view.backgroundColor, [
                /* sapUiBaseText */ '#32363a',
                /* sapUiContentContrastTextColor */ '#ffffff'
              ]);
            }
          }
        }
      },
      options
    );

    return (
      <>
        <HorizontalBar
          ref={chartRef}
          data={data}
          height={height}
          width={width}
          options={mergedOptions}
          getDatasetAtEvent={getDatasetAtEvent}
          getElementAtEvent={getElementAtEvent}
        />
        <div ref={legendRef} />
      </>
    );
  })
);

// @ts-ignore
BarChart.LoadingPlaceholder = BarChartPlaceholder;
BarChart.defaultProps = {
  ...ChartBaseDefaultProps
};
BarChart.displayName = 'BarChart';

export { BarChart };
