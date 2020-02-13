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
    width = '50%',
    height = '500px',
    dataset,
    noLegend = false,
    dataPointClickHandler,
    legendClickHandler,
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
      innerRadius: undefined
    }
  } = props as RadarChartProps;

  useInitialize();

  const { parameters }: any = useTheme();
  const chartRef = useConsolidatedRef<any>(ref);

  const dataKeys = useMemo(() => (dataset ? Object.keys(dataset[0]).filter((key) => key !== labelKey) : []), [dataset]);

  const onItemLegendClick = useCallback(
    (e) => {
      if (legendClickHandler) {
        legendClickHandler({
          dataKey: dataKeys[0],
          value: e.value,
          chartType: e.type,
          color: e.color,
          payload: e.payload
        });
      }
    },
    [dataset]
  );

  const onDataPointClick = useCallback(
    (e) => {
      if (e && dataPointClickHandler && e.value) {
        dataPointClickHandler({
          value: e.value,
          dataKey: e.dataKey,
          xValue: e.payload.label,
          xIndex: e.index,
          payload: e.payload
        });
      }
    },
    [dataset]
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
        <PolarGrid />
        <PolarAngleAxis dataKey={labelKey} />
        <PolarRadiusAxis />
        {dataKeys.map((key, index) => (
          <Radar
            activeDot={{ onClick: onDataPointClick }}
            name={key}
            dataKey={key}
            stroke={color ? color : `var(--sapUiChartAccent${(index % 12) + 1})`}
            fill={color ? color : `var(--sapUiChartAccent${(index % 12) + 1})`}
            fillOpacity={0.5}
          />
        ))}
        <Tooltip />
        {!noLegend && <Legend onClick={onItemLegendClick} />}{' '}
      </RadarChartLib>
    </ChartContainer>
  );
});

export { RadarRechart };
