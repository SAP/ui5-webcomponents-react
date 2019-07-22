import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import React, { forwardRef, Ref, RefObject, useCallback, useEffect, useRef, useMemo } from 'react';
import { Radar } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { withChartContainer } from '../../internal/ChartContainer/withChartContainer';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { useChartData } from '../../util/populateData';
import { formatTooltipLabel, useMergedConfig } from '../../util/utils';

export interface RadarChartPropTypes extends ChartBaseProps {}

const RadarChartComponent = forwardRef((props: RadarChartPropTypes, ref: Ref<any>) => {
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
  const data = useChartData(labels, datasets, colors, theme.theme);

  const radarChartDefaultConfig = useMemo(() => {
    return {
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
    };
  }, [categoryAxisFormatter, valueAxisFormatter]);
  const mergedOptions = useMergedConfig(radarChartDefaultConfig, options);

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
      <div ref={legendRef} className="legend" />
    </>
  );
});
const RadarChart = withChartContainer(RadarChartComponent);

RadarChart.defaultProps = {
  ...ChartBaseDefaultProps
};
RadarChart.displayName = 'RadarChart';

export { RadarChart };
