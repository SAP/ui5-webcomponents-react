import React, { FC, forwardRef, Ref, RefObject, useRef, useEffect, useCallback } from 'react';
import { Radar } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
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
      colors,
      noLegend
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
        <Radar
          ref={chartRef}
          data={data}
          height={height}
          width={width}
          options={mergedOptions}
          getDatasetAtEvent={getDatasetAtEvent}
          getElementAtEvent={getElementAtEvent}
        />{' '}
        <div ref={legendRef} />
      </>
    );
  })
);

RadarChart.defaultProps = {
  ...ChartBaseDefaultProps
};
RadarChart.displayName = 'RadarChart';

export { RadarChart };
