import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import React, { forwardRef, Ref, RefObject, useCallback, useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { withChartContainer } from '../../internal/ChartContainer/withChartContainer';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { useChartData } from '../../util/populateData';
import { formatTooltipLabelForPieCharts, mergeConfig } from '../../util/utils';
import { PieChartPlaceholder } from '../PieChart/Placeholder';

export interface DonutChartPropTypes extends ChartBaseProps {}

const DonutChart = withChartContainer(
  forwardRef((props: DonutChartPropTypes, ref: Ref<any>) => {
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
      height,
      noLegend
    } = props;

    const theme: any = useTheme();
    const data = useChartData(labels, datasets, colors, theme.theme, true);

    const mergedOptions = mergeConfig(
      {
        cutoutPercentage: 70,
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

    const chartRef = useConsolidatedRef<any>(ref);
    const legendRef: RefObject<HTMLDivElement> = useRef();

    const handleLegendItemPress = useCallback(
      (e) => {
        const clickTarget = (e.currentTarget as unknown) as HTMLLIElement;
        const datasetIndex = parseInt(clickTarget.dataset.datasetindex);
        const { chartInstance } = chartRef.current;
        const meta = chartInstance.getDatasetMeta(0).data[datasetIndex];
        meta.hidden = !meta.hidden;
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
        <Pie
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
  })
);

// @ts-ignore
DonutChart.LoadingPlaceholder = PieChartPlaceholder;
DonutChart.defaultProps = {
  ...ChartBaseDefaultProps,
  colors: null
};
DonutChart.displayName = 'DonutChart';

export { DonutChart };
