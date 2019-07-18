import bestContrast from 'get-best-contrast-color';
import React, { forwardRef, Ref, RefObject, useEffect, useRef, useCallback } from 'react';
import { Bar } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import { DEFAULT_OPTIONS } from '../../config';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { withChartContainer } from '../../internal/ChartContainer/withChartContainer';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { populateData } from '../../util/populateData';
import { formatTooltipLabel, getTextHeight, getTextWidth, mergeConfig } from '../../util/utils';
import { ColumnChartPlaceholder } from './Placeholder';

export interface ColumnChartPropTypes extends ChartBaseProps {}

const ColumnChart = withChartContainer(
  forwardRef((props: ColumnChartPropTypes, ref: Ref<any>) => {
    const {
      labels,
      datasets,
      categoryAxisFormatter,
      valueAxisFormatter,
      getDatasetAtEvent,
      getElementAtEvent,
      colors,
      options,
      width,
      height,
      noLegend
    } = props;

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
              ...DEFAULT_OPTIONS.scales.xAxes[0],
              ticks: {
                callback: categoryAxisFormatter
              }
            }
          ],
          yAxes: [
            {
              ...DEFAULT_OPTIONS.scales.yAxes[0],
              ticks: {
                ...DEFAULT_OPTIONS.scales.yAxes[0].ticks,
                callback: valueAxisFormatter
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
            display: (context) => {
              const datasetMeta = context.chart.getDatasetMeta(context.datasetIndex);
              const dataMeta = datasetMeta.data[context.dataIndex];
              const height = dataMeta._view.base - dataMeta._view.y; // offset
              if (height < getTextHeight() + 6) {
                return false;
              }
              const formattedValue = valueAxisFormatter(context.dataset.data[context.dataIndex]);
              const textWidth = getTextWidth(formattedValue);
              return textWidth < dataMeta._view.width;
            },
            anchor: 'end',
            align: 'start',
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
        <Bar
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
ColumnChart.LoadingPlaceholder = ColumnChartPlaceholder;
ColumnChart.defaultProps = {
  ...ChartBaseDefaultProps
};
ColumnChart.displayName = 'ColumnChart';

export { ColumnChart };
