import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import bestContrast from 'get-best-contrast-color';
import React, { forwardRef, Ref, RefObject, useCallback, useEffect, useRef, useMemo } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { DEFAULT_OPTIONS } from '../../config';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { withChartContainer } from '../../internal/ChartContainer/withChartContainer';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { useChartData } from '../../util/populateData';
import { formatTooltipLabel, getTextWidth, useMergedConfig } from '../../util/utils';
import { BarChartPlaceholder } from './Placeholder';

export interface BarChartPropTypes extends ChartBaseProps {}

const BarChartComponent = forwardRef((props: BarChartPropTypes, ref: Ref<any>) => {
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

  const barChartDefaultConfig = useMemo(() => {
    return {
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
    };
  }, [valueAxisFormatter, categoryAxisFormatter]);

  const mergedOptions = useMergedConfig(barChartDefaultConfig, options);

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
      <div ref={legendRef} className="legend" />
    </>
  );
});
// @ts-ignore
BarChartComponent.LoadingPlaceholder = BarChartPlaceholder;
const BarChart = withChartContainer(BarChartComponent);

BarChart.defaultProps = {
  ...ChartBaseDefaultProps
};
BarChart.displayName = 'BarChart';

export { BarChart };
