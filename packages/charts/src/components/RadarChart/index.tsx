import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { withChartContainer } from '@ui5/webcomponents-react-charts/lib/withChartContainer';
import React, { FC, forwardRef, Ref, useMemo } from 'react';
import { Radar } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { InternalProps } from '../../interfaces/InternalProps';
import { useLegend, useLegendItemClickHandler } from '../../internal/ChartLegend';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { useChartData } from '../../util/populateData';
import { formatAxisCallback, formatTooltipLabel, useMergedConfig } from '../../util/Utils';

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
    noLegend,
    legendRef
  } = props as RadarChartPropTypes & InternalProps;

  const theme: any = useTheme();
  const data = useChartData(labels, datasets, colors, theme.theme);

  const radarChartDefaultConfig = useMemo(() => {
    return {
      scale: {
        ticks: {
          callback: formatAxisCallback(valueAxisFormatter)
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
  const handleLegendItemPress = useLegendItemClickHandler(chartRef, legendRef);
  useLegend(chartRef, legendRef, noLegend, handleLegendItemPress);

  return (
    <Radar
      ref={chartRef}
      data={data}
      height={height}
      width={width}
      options={mergedOptions}
      getDatasetAtEvent={getDatasetAtEvent}
      getElementAtEvent={getElementAtEvent}
    />
  );
});

/**
 * <code>import { RadarChart } from '@ui5/webcomponents-react-charts/lib/RadarChart';</code>
 */
const RadarChart: FC<RadarChartPropTypes> = withChartContainer(RadarChartComponent);

RadarChart.defaultProps = {
  ...ChartBaseDefaultProps
};
RadarChart.displayName = 'RadarChart';

export { RadarChart };
