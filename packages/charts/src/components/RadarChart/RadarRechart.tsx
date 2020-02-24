import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { PieChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/PieChartPlaceholder';
import React, { FC, forwardRef, Ref, useCallback } from 'react';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RadarChartLib,
  Tooltip
} from 'recharts';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { useResolveDataKeys } from '../../internal/useResolveDataKeys';

export interface RadarChartProps extends RechartBaseProps {}

const RadarChart: FC<RadarChartProps> = forwardRef((props: RadarChartProps, ref: Ref<any>) => {
  const {
    color,
    loading,
    labelKey = 'label',
    width = '100%',
    height = '500px',
    dataset,
    dataKeys,
    noLegend = false,
    onDataPointClick,
    onLegendClick,
    chartConfig = {
      yAxisVisible: true,
      xAxisVisible: true,
      legendVisible: true,
      gridHorizontal: true,
      gridVertical: true,
      legendPosition: 'bottom',
      strokeWidth: 1,
      zoomingTool: false,
      strokeOpacity: 1,
      dataLabel: false,
      paddingAngle: 0,
      innerRadius: undefined,
      polarGridType: 'circle'
    }
  } = props;

  useInitialize();

  const chartRef = useConsolidatedRef<any>(ref);

  const currentDataKeys = useResolveDataKeys(dataKeys, labelKey, dataset);

  const onItemLegendClick = useCallback(
    (e) => {
      if (onLegendClick) {
        onLegendClick(
          Event.of(null, e, {
            dataKey: currentDataKeys[0],
            value: e.value,
            chartType: e.type,
            color: e.color,
            payload: e.payload
          })
        );
      }
    },
    [onLegendClick]
  );

  const onDataPointClickInternal = useCallback(
    (e) => {
      if (e && onDataPointClick && e.value) {
        onDataPointClick(
          Event.of(null, e, {
            value: e.value,
            dataKey: e.dataKey,
            name: e.payload.label,
            xIndex: e.index,
            payload: e.payload
          })
        );
      }
    },
    [onDataPointClick]
  );

  return (
    <ChartContainer
      dataset={dataset}
      ref={chartRef}
      loading={loading}
      placeholder={PieChartPlaceholder}
      width={width}
      height={height}
    >
      <RadarChartLib data={dataset}>
        <PolarGrid gridType={chartConfig.polarGridType} />
        <PolarAngleAxis dataKey={labelKey} />
        <PolarRadiusAxis />
        {currentDataKeys.map((key, index) => (
          <Radar
            key={index}
            activeDot={{ onClick: onDataPointClickInternal }}
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

RadarChart.displayName = 'RadarChart';

export { RadarChart };
