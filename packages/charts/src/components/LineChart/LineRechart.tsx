import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { LineChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/LineChartPlaceholder';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import { useResolveDataKeys } from '@ui5/webcomponents-react-charts/lib/useResolveDataKeys';
import React, { FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import {
  Brush,
  CartesianGrid,
  Legend,
  Line,
  LineChart as LineChartLib,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine
} from 'recharts';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { AxisTicks, DataLabel } from '../../internal/CustomElements';

type LineChartProps = RechartBaseProps;

/**
 * <code>import { LineChart } from '@ui5/webcomponents-react-charts/lib/next/LineChart';</code>
 */
const LineChart: FC<LineChartProps> = forwardRef((props: LineChartProps, ref: Ref<any>) => {
  const {
    color,
    loading,
    labelKey = 'name',
    width = '100%',
    height = '500px',
    dataset,
    dataKeys,
    noLegend = false,
    onDataPointClick,
    onLegendClick,
    yAxisFormatter = (el) => el,
    xAxisFormatter = (el) => el,
    dataLabelFormatter = (d) => d,
    dataLabelCustomElement = undefined,
    chartConfig = {
      yAxisVisible: false,
      xAxisVisible: true,
      gridStroke: ThemingParameters.sapUiListTableFooterBorder,
      gridHorizontal: true,
      gridVertical: false,
      yAxisColor: ThemingParameters.sapNeutralBorderColor,
      legendPosition: 'bottom',
      strokeWidth: 1,
      zoomingTool: false,
      strokeOpacity: 1,
      dataLabel: false,
      xAxisUnit: '',
      yAxisUnit: '',
      secondYAxis: {
        dataKey: undefined,
        name: undefined,
        color: undefined
      },
      referenceLine: {
        label: undefined,
        value: undefined,
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

  const currentDataKeys = useResolveDataKeys(dataKeys, labelKey, dataset);

  const colorSecondY = useMemo(
    () => (chartConfig.secondYAxis ? currentDataKeys.findIndex((key) => key === chartConfig.secondYAxis.dataKey) : 0),
    [chartConfig, currentDataKeys]
  );

  const onItemLegendClick = useLegendItemClick(onLegendClick);

  const onDataPointClickInternal = useCallback(
    (payload, eventOrIndex) => {
      if (eventOrIndex.dataKey && onDataPointClick) {
        onDataPointClick(
          Event.of(null, event, {
            value: eventOrIndex.value,
            dataKey: eventOrIndex.dataKey,
            xIndex: eventOrIndex.index,
            payload: eventOrIndex.payload
          })
        );
      }
    },
    [onDataPointClick]
  );

  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      placeholder={LineChartPlaceholder}
      width={width}
      height={height}
      ref={chartRef}
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
    >
      <LineChartLib
        margin={{ left: 20, right: 20, top: 20, bottom: 20 }}
        data={dataset}
        onClick={onDataPointClickInternal}
      >
        <CartesianGrid
          vertical={chartConfig.gridVertical}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {(chartConfig.xAxisVisible ?? true) && (
          <XAxis dataKey={labelKey} tick={(props) => AxisTicks(props, xAxisFormatter, chartConfig.xAxisUnit)} />
        )}
        <YAxis
          unit={chartConfig.yAxisUnit}
          axisLine={chartConfig.yAxisVisible ?? false}
          tickLine={false}
          yAxisId="left"
          tickFormatter={(e) => yAxisFormatter(e)}
        />
        {chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey && (
          <YAxis
            dataKey={chartConfig.secondYAxis.dataKey}
            stroke={chartConfig.secondYAxis.color ?? `var(--sapUiChartAccent${(colorSecondY % 12) + 1})`}
            label={{ value: chartConfig.secondYAxis.name, offset: 2, angle: +90, position: 'center' }}
            orientation="right"
            yAxisId="right"
          />
        )}
        {currentDataKeys.map((key, index) => (
          <Line
            yAxisId={chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey === key ? 'right' : 'left'}
            key={key}
            name={key}
            strokeOpacity={chartConfig.strokeOpacity}
            label={
              chartConfig.dataLabel
                ? dataLabelCustomElement
                  ? (props) => DataLabel(props, dataLabelFormatter, dataLabelCustomElement)
                  : {
                      content: (d) => dataLabelFormatter(d.value),
                      position: 'top',
                      fill: ThemingParameters.sapContent_LabelColor
                    }
                : false
            }
            type="monotone"
            dataKey={key}
            stroke={color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
            strokeWidth={chartConfig.strokeWidth}
            activeDot={{ onClick: onDataPointClickInternal }}
          />
        ))}
        {!noLegend && <Legend verticalAlign={chartConfig.legendPosition} onClick={onItemLegendClick} />}
        {chartConfig.referenceLine && (
          <ReferenceLine
            stroke={chartConfig.referenceLine.color}
            y={chartConfig.referenceLine.value}
            label={chartConfig.referenceLine.label}
            yAxisId={'left'}
          />
        )}
        <Tooltip />
        {chartConfig.zoomingTool && (
          <Brush dataKey={labelKey} stroke={`var(--sapUiChartAccent6)`} travellerWidth={10} height={20} />
        )}
      </LineChartLib>
    </ChartContainer>
  );
});

LineChart.displayName = 'LineChart';

export { LineChart };
