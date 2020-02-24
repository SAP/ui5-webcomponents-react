import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { LineChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/LineChartPlaceholder';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import React, { forwardRef, Ref, useCallback, useMemo, FC } from 'react';
import { Brush, CartesianGrid, Legend, Line, LineChart as LineChartLib, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { useResolveDataKeys } from '@ui5/webcomponents-react-charts/lib/useResolveDataKeys';

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
    chartConfig = {
      yAxisVisible: false,
      xAxisVisible: true,
      legendVisible: true,
      gridStroke: ThemingParameters.sapUiListTableFooterBorder,
      gridHorizontal: true,
      gridVertical: false,
      yAxisColor: ThemingParameters.sapNeutralBorderColor,
      legendPosition: 'bottom',
      strokeWidth: 1,
      zoomingTool: false,
      strokeOpacity: 1,
      dataLabel: false,
      secondYAxis: {
        dataKey: undefined,
        name: undefined,
        color: ThemingParameters.sapNeutralBorderColor
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

  const onItemLegendClick = useCallback(
    (e) => {
      if (onLegendClick) {
        onLegendClick(
          Event.of(null, e, {
            dataKey: e.dataKey,
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
      <LineChartLib data={dataset} onClick={onDataPointClickInternal}>
        <CartesianGrid
          vertical={chartConfig.gridVertical}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {(chartConfig.xAxisVisible ?? true) && <XAxis dataKey={labelKey} />}
        <YAxis axisLine={chartConfig.yAxisVisible ?? false} tickLine={false} yAxisId="left" />
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
              chartConfig.dataLabel && {
                position: 'top',
                fontFamily: ThemingParameters.sapUiFontFamily,
                fill: ThemingParameters.sapContent_LabelColor
              }
            }
            type="monotone"
            dataKey={key}
            stroke={color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
            strokeWidth={chartConfig.strokeWidth}
            activeDot={{ onClick: onDataPointClickInternal }}
          />
        ))}
        {!noLegend && <Legend onClick={onItemLegendClick} />}
        <Tooltip />
        {chartConfig.zoomingTool && (
          <Brush dataKey={labelKey} stroke={`var(--sapUiChartAccent6)`} travellerWidth={10} height={30} />
        )}
      </LineChartLib>
    </ChartContainer>
  );
});

LineChart.displayName = 'LineChart';

export { LineChart };
