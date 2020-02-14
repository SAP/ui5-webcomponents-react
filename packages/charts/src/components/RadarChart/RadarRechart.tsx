import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import React, { forwardRef, Ref, useMemo, useCallback } from 'react';
import { useInitialize } from '../../lib/initialize';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import {
  Radar,
  RadarChart as RadarChartLib,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip
} from 'recharts';
import { useTheme } from 'react-jss';
import { PieChartPlaceholder } from '../PieChart/Placeholder';
import { ChartContainer } from '../../internal/ChartContainer';

export interface RadarChartProps extends RechartBaseProps {}

const RadarRechart = forwardRef((props: RadarChartProps, ref: Ref<any>) => {
  const {
    color,
    loading,
    labelKey = 'label',
    width = '100%',
    height = '500px',
    dataset,
    dataKeys,
    noLegend = false,
    onDataPointClickHandler,
    onLegendClickHandler,
    chartConfig = {
      yAxisVisible: true,
      xAxisVisible: true,
      legendVisible: true,
      gridStroke: 'white',
      gridHorizontal: true,
      gridVertical: true,
      yAxisColor: 'black',
      legendPosition: 'bottom',
      strokeWidth: 1,
      zoomingTool: false,
      strokeOpacity: 1,
      dataLabel: false,
      paddingAngle: 0,
      innerRadius: undefined,
      polarGridType: 'circle'
    }
  } = props as RadarChartProps;

  useInitialize();

  const { parameters }: any = useTheme();
  const chartRef = useConsolidatedRef<any>(ref);

  const currentDataKeys =
    dataKeys ?? useMemo(() => (dataset ? Object.keys(dataset[0]).filter((key) => key !== labelKey) : []), [dataset]);

  const onItemLegendClick = useCallback(
    (e) => {
      if (onLegendClickHandler) {
        onLegendClickHandler({
          dataKey: currentDataKeys[0],
          value: e.value,
          chartType: e.type,
          color: e.color,
          payload: e.payload
        });
      }
    },
    [onLegendClickHandler]
  );

  const onDataPointClick = useCallback(
    (e) => {
      if (e && onDataPointClickHandler && e.value) {
        onDataPointClickHandler({
          value: e.value,
          dataKey: e.dataKey,
          xValue: e.payload.label,
          xIndex: e.index,
          payload: e.payload
        });
      }
    },
    [onDataPointClickHandler]
  );

  return (
    <ChartContainer
      dataset={dataset}
      ref={ref}
      loading={loading}
      placeholder={PieChartPlaceholder}
      width={width}
      height={height}
    >
      <RadarChartLib data={dataset} style={{ fontSize: parameters.sapUiFontSmallSize }}>
        <PolarGrid gridType={chartConfig.polarGridType} />
        <PolarAngleAxis dataKey={labelKey} />
        <PolarRadiusAxis />
        {currentDataKeys.map((key, index) => (
          <Radar
            key={index}
            activeDot={{ onClick: onDataPointClick }}
            name={key}
            dataKey={key}
            stroke={color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
            fill={color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
            fillOpacity={0.5}
          />
        ))}
        <Tooltip />
        {!noLegend && <Legend onClick={onItemLegendClick} />}
      </RadarChartLib>
    </ChartContainer>
  );
});

export { RadarRechart };
