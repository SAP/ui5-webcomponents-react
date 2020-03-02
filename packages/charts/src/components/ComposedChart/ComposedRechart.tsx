import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { LineChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/LineChartPlaceholder';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { ComponentType, CSSProperties, FC, forwardRef, Ref, useCallback } from 'react';
import {
  Area,
  Bar,
  Brush,
  CartesianGrid,
  ComposedChart as ComposedChartLib,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { LabelObject } from '../../interfaces/LabelObject';
import { AxisTicks } from '../../internal/CustomElements';

enum ChartTypes {
  line = Line,
  bar = Bar,
  area = Area
}

type AvailableChartTypes = 'line' | 'bar' | 'area' | string;

interface ChartElement {
  color?: CSSProperties['color'];
  valueFormatter?: (element: any) => unknown;
  type: AvailableChartTypes;
  accessor: string;
  stackId?: string;
  [key: string]: unknown | number;
}

export interface ComposedChartProps extends RechartBaseProps {
  placeHolder?: ComponentType<unknown>;
  elements: ChartElement[];
  defaults?: ChartElement;
}

const mergeWithDefaults = (config, defaults) => {
  return {
    ...defaults,
    ...config
  };
};

/**
 * <code>import { ComposedChart } from '@ui5/webcomponents-react-charts/lib/next/ComposedChart';</code>
 */
const ComposedChart: FC<ComposedChartProps> = forwardRef((props: ComposedChartProps, ref: Ref<any>) => {
  const {
    height = '500px',
    width = '100%',
    loading,
    dataset,
    labelKey = 'name',
    onDataPointClick,
    defaults = { barSize: 20, barGap: 3, lineType: 'monotone', label: { position: 'top' }, stackId: undefined },
    elements,
    onLegendClick,
    chartConfig = {
      yAxisVisible: false,
      xAxisVisible: true,
      legendVisible: true,
      gridStroke: ThemingParameters.sapUiListTableFooterBorder,
      gridHorizontal: true,
      gridVertical: false,
      yAxisId: '',
      yAxisColor: ThemingParameters.sapNeutralBorderColor,
      legendPosition: 'bottom',
      zoomingTool: false,
      dataLabel: false,
      barSize: undefined,
      barGap: undefined,
      secondYAxis: {
        name: undefined,
        dataKey: undefined,
        color: undefined
      }
    },
    style,
    className,
    tooltip,
    slot
  } = props;

  useInitialize();

  const chartRef = useConsolidatedRef<any>(ref);

  const onDataPointClickInternal = useCallback(
    (payload, eventOrIndex, event) => {
      if (payload.name && onDataPointClick) {
        onDataPointClick(
          Event.of(null, event ?? eventOrIndex, {
            value: payload.value.length ? payload.value[1] - payload.value[0] : payload.value,
            xIndex: payload.index ?? eventOrIndex,
            dataKey: payload.value.length
              ? Object.keys(payload).filter((key) =>
                  payload.value.length
                    ? payload[key] === payload.value[1] - payload.value[0]
                    : payload[key] === payload.value && key !== 'value'
                )[0]
              : payload.dataKey ??
                Object.keys(payload).find((key) => payload[key] === payload.value && key !== 'value'),
            payload: payload.payload
          })
        );
      } else {
        onDataPointClick(
          Event.of(null, event ?? eventOrIndex, {
            value: eventOrIndex.value,
            xIndex: eventOrIndex.index ?? eventOrIndex,
            dataKey:
              eventOrIndex.dataKey ??
              Object.keys(eventOrIndex).find((key) => eventOrIndex[key] === eventOrIndex.value && key !== 'value'),
            payload: eventOrIndex.payload
          })
        );
      }
    },
    [onDataPointClick]
  );

  const onItemLegendClick = useLegendItemClick(onLegendClick);

  let paddingCharts = 20;
  elements.forEach((chartElement) => {
    chartElement.type === 'bar'
      ? chartElement.barSize
        ? (paddingCharts += chartElement.barSize as number)
        : (paddingCharts += 20)
      : 0;
  });

  return (
    <ChartContainer
      ref={chartRef}
      width={width}
      height={height}
      loading={loading}
      dataset={dataset}
      placeholder={LineChartPlaceholder}
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
    >
      <ComposedChartLib margin={{ left: 20, right: 20, top: 20, bottom: 20 }} ref={chartRef} data={dataset}>
        <CartesianGrid
          vertical={chartConfig.gridVertical}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {(chartConfig.xAxisVisible ?? true) && (
          <XAxis
            dataKey={labelKey}
            tick={<AxisTicks />}
            padding={{ left: paddingCharts / 2, right: paddingCharts / 2 }}
          />
        )}
        <YAxis axisLine={chartConfig.yAxisVisible ?? false} tickLine={false} yAxisId="left" />
        {chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey && (
          <YAxis
            dataKey={chartConfig.secondYAxis.dataKey}
            stroke={chartConfig.secondYAxis.color}
            // label={{
            //   value: chartConfig.secondYAxis.name,
            //   angle: -90,
            //   position: 'outside',
            //   fill: ThemingParameters.sapContent_LabelColor
            // }}
            orientation="right"
            yAxisId="right"
          />
        )}
        <Tooltip />
        {chartConfig.legendVisible && <Legend onClick={onItemLegendClick} verticalAlign={chartConfig.legendPosition} />}
        {elements.map((config, index) => {
          const { type, accessor, color, lineType, ...safeProps } = mergeWithDefaults(config, defaults);
          const ChartElement = (ChartTypes[type] as any) as FC<any>;
          const yAxisId = chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey === accessor ? 'right' : 'left';

          const chartElementProps: any = {};

          switch (config.type) {
            case 'line':
              chartElementProps.stroke = color ?? `var(--sapUiChartAccent${(index % 12) + 1})`;
              chartElementProps.activeDot = {
                onClick: onDataPointClickInternal
              };
              chartElementProps.type = lineType;
              break;
            case 'bar':
              chartElementProps.barSize = chartConfig.barSize ?? defaults.barSize;
              chartElementProps.barGap = chartConfig.barGap ?? defaults.barGap;
              chartElementProps.stackId = config.stackId ?? undefined;
              chartElementProps.fill = color ?? `var(--sapUiChartAccent${(index % 12) + 1})`;
              chartElementProps.onClick = onDataPointClickInternal;
              break;
            case 'area':
              chartElementProps.fill = color ?? `var(--sapUiChartAccent${(index % 12) + 1})`;
              chartElementProps.onClick = onDataPointClickInternal;
              break;
          }
          return (
            <ChartElement key={index} dataKey={accessor} yAxisId={yAxisId} {...safeProps} {...chartElementProps} />
          );
        })}
        {chartConfig.zoomingTool && (
          <Brush dataKey={labelKey} stroke={`var(--sapUiChartAccent6)`} travellerWidth={10} height={20} />
        )}
      </ComposedChartLib>
    </ChartContainer>
  );
});

ComposedChart.displayName = 'ComposedChart';

export { ComposedChart };
