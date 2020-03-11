import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { LineChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/LineChartPlaceholder';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { ComponentType, CSSProperties, FC, forwardRef, Ref, useCallback, useMemo } from 'react';
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
import { DataLabel } from '../../internal/CustomElements';
import { renderAxisTicks } from '../../util/Utils';

enum ChartTypes {
  line = Line,
  bar = Bar,
  area = Area
}

const BAR_DEFAULT_PADDING = 20;

type AvailableChartTypes = 'line' | 'bar' | 'area' | string;

interface ChartElement {
  color?: CSSProperties['color'];
  dataLabelFormatter?: (d: number) => unknown;
  dataLabelCustomElement?: undefined;
  type: AvailableChartTypes;
  accessor: string;
  stackId?: string;

  [key: string]: unknown | number;
}

export interface ComposedChartProps extends RechartBaseProps {
  placeholder?: ComponentType<unknown>;
  elements?: ChartElement[];
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
    noLegend = false,
    xAxisFormatter = (el) => el,
    yAxisFormatter = (el) => el,
    defaults = {
      barSize: 20,
      barGap: 3,
      lineType: 'monotone',
      dataLabelFormatter: (d) => d,
      dataLabelCustomElement: undefined,
      label: { position: 'top' },
      stackId: undefined
    },
    elements,
    onLegendClick,
    chartConfig = {
      xAxisUnit: '',
      yAxisUnit: '',
      yAxisVisible: false,
      xAxisVisible: true,
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

  const paddingCharts = useMemo(
    () =>
      elements?.reduce((acc, chartElement) => {
        if (chartElement.type === 'bar') {
          // @ts-ignore
          acc += chartElement?.barSize ?? 20;
        }
        return acc;
      }, BAR_DEFAULT_PADDING),
    [elements]
  );

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
      <ComposedChartLib margin={{ right: 30, top: 40, bottom: 30 }} data={dataset}>
        <CartesianGrid
          vertical={chartConfig.gridVertical}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {(chartConfig.xAxisVisible ?? true) && (
          <XAxis
            interval={0}
            dataKey={labelKey}
            tick={(props) => renderAxisTicks(props, xAxisFormatter, chartConfig.xAxisUnit)}
            padding={{ left: paddingCharts / 2, right: paddingCharts / 2 }}
          />
        )}
        <YAxis
          axisLine={chartConfig.yAxisVisible ?? false}
          unit={chartConfig.yAxisUnit}
          tickLine={false}
          yAxisId="left"
          tickFormatter={yAxisFormatter}
        />
        {chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey && (
          <YAxis
            unit={chartConfig.yAxisUnit}
            dataKey={chartConfig.secondYAxis.dataKey}
            stroke={chartConfig.secondYAxis.color}
            orientation="right"
            yAxisId="right"
          />
        )}
        <Tooltip />
        {!noLegend && (
          <Legend
            onClick={onItemLegendClick}
            verticalAlign={chartConfig.legendPosition}
            wrapperStyle={{
              paddingTop: 20
            }}
          />
        )}
        {elements?.map((config, index) => {
          const {
            type,
            accessor,
            color,
            lineType,
            dataLabelFormatter,
            dataLabelCustomElement,
            ...safeProps
          } = mergeWithDefaults(config, defaults);
          const ChartElement = (ChartTypes[type] as any) as FC<any>;
          const yAxisId = chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey === accessor ? 'right' : 'left';

          const chartElementProps: any = {};

          switch (config.type) {
            case 'line':
              chartElementProps.stroke = color ?? `var(--sapUiChartAccent${(index % 12) + 1})`;
              chartElementProps.activeDot = {
                onClick: onDataPointClickInternal
              };
              chartElementProps.label = chartConfig.dataLabel
                ? dataLabelCustomElement
                  ? (props) => DataLabel(props, dataLabelFormatter, dataLabelCustomElement)
                  : {
                      content: (d) => dataLabelFormatter(d.value),
                      position: 'top',
                      fontSize: ThemingParameters.sapUiFontSmallSize,
                      fill: ThemingParameters.sapContent_LabelColor
                    }
                : false;
              chartElementProps.type = lineType;
              break;
            case 'bar':
              chartElementProps.barSize = chartConfig.barSize ?? defaults.barSize;
              chartElementProps.barGap = chartConfig.barGap ?? defaults.barGap;
              chartElementProps.stackId = config.stackId ?? undefined;
              chartElementProps.fill = color ?? `var(--sapUiChartAccent${(index % 12) + 1})`;
              chartElementProps.onClick = onDataPointClickInternal;
              chartElementProps.label = chartConfig.dataLabel
                ? dataLabelCustomElement
                  ? (props) => DataLabel(props, dataLabelFormatter, dataLabelCustomElement)
                  : {
                      content: (d) => dataLabelFormatter(d.value),
                      position: 'top',
                      fontSize: ThemingParameters.sapUiFontSmallSize,
                      fill: ThemingParameters.sapContent_LabelColor
                    }
                : false;
              break;
            case 'area':
              chartElementProps.type = 'monotone';
              chartElementProps.fillOpacity = 0.3;
              chartElementProps.fill = color ?? `var(--sapUiChartAccent${(index % 12) + 1})`;
              chartElementProps.onClick = onDataPointClickInternal;
              chartElementProps.label = chartConfig.dataLabel
                ? dataLabelCustomElement
                  ? (props) => DataLabel(props, dataLabelFormatter, dataLabelCustomElement)
                  : {
                      content: (d) => dataLabelFormatter(d.value),
                      position: 'top',
                      fontSize: ThemingParameters.sapUiFontSmallSize,
                      fill: ThemingParameters.sapContent_LabelColor
                    }
                : false;
              break;
          }
          return (
            <ChartElement key={index} dataKey={accessor} yAxisId={yAxisId} {...safeProps} {...chartElementProps} />
          );
        })}
        {chartConfig.zoomingTool && (
          <Brush y={0} dataKey={labelKey} stroke={`var(--sapUiChartAccent6)`} travellerWidth={10} height={20} />
        )}
      </ComposedChartLib>
    </ChartContainer>
  );
});

ComposedChart.displayName = 'ComposedChart';

export { ComposedChart };
