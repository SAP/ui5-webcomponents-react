import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import React, { forwardRef, Ref, RefObject, useMemo, useRef } from 'react';
import { Radar } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { useLegend, useLegendItemClickHandler } from '../../internal/ChartLegend';
import { withChartContainer } from '../../internal/withChartContainer';
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
  const handleLegendItemPress = useLegendItemClickHandler(chartRef, legendRef);
  useLegend(chartRef, legendRef, noLegend, handleLegendItemPress);

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
