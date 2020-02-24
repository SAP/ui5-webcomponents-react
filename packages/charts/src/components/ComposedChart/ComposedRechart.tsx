import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { LineChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/LineChartPlaceholder';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import React, { ComponentType, forwardRef, ReactNode, Ref, useCallback, useMemo, FC } from 'react';
import { Brush, CartesianGrid, ComposedChart as ComposedChartLib, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';

export interface ComposedChartProps extends RechartBaseProps {
  children?: ReactNode;
  placeHolder?: ComponentType<unknown>;
}

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
    children,
    onDataPointClick,
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
      stacked: false,
      dataLabel: false,
      secondYAxis: {
        name: undefined,
        dataKey: undefined,
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

  const onDataPointClickInternal = useCallback(
    (e, i, line) => {
      if (e && onDataPointClick) {
        onDataPointClick(
          Event.of(null, e, {
            value: e.value,
            xIndex: i,
            dataKey: line ? e.dataKey : Object.keys(e).filter((key) => e[key] === e.value && key !== 'value')[0],
            payload: e.payload
          })
        );
      }
    },
    [onDataPointClick]
  );

  type ChildClone = ReactNode & { props: any };
  const childrenClone = useMemo(
    () =>
      React.Children.map(children, (child: ChildClone, index) => {
        if (child?.props) {
          return React.cloneElement(
            // @ts-ignore
            child,
            child.props.legendType === 'line'
              ? {
                  type: 'monotone',
                  stroke: child.props.color ? child.props.color : `var(--sapUiChartAccent${(index % 12) + 1})`,
                  label: chartConfig.dataLabel && { position: 'top', fontFamily: ThemingParameters.sapUiFontFamily },
                  yAxisId:
                    chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey === child.props.dataKey
                      ? 'right'
                      : 'left',
                  activeDot: { onClick: (e, i) => onDataPointClickInternal(e, i, true) }
                }
              : {
                  fill: child.props.color ? child.props.color : `var(--sapUiChartAccent${(index % 12) + 1})`,
                  label: chartConfig.dataLabel && { position: 'top', fontFamily: ThemingParameters.sapUiFontFamily },
                  stackId: chartConfig.stacked ? 'A' : undefined,
                  yAxisId:
                    chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey === child.props.dataKey
                      ? 'right'
                      : 'left',
                  onClick: (e, i) => onDataPointClickInternal(e, i, false)
                }
          );
        }
      }),
    [children]
  );

  const onItemLegendClick = useCallback(
    (e, i) => {
      if (onLegendClick) {
        onLegendClick(
          Event.of(null, e, {
            dataKey: e.dataKey,
            index: i,
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
      <ComposedChartLib ref={chartRef} data={dataset}>
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
            stroke={chartConfig.secondYAxis.color}
            label={{
              value: chartConfig.secondYAxis.name,
              angle: +90,
              position: 'center',
              fill: ThemingParameters.sapContent_LabelColor
            }}
            orientation="right"
            yAxisId="right"
          />
        )}
        <Tooltip />
        {chartConfig.legendVisible && <Legend onClick={onItemLegendClick} verticalAlign={chartConfig.legendPosition} />}
        {childrenClone}
        {chartConfig.zoomingTool && (
          <Brush dataKey={labelKey} stroke={`var(--sapUiChartAccent6)`} travellerWidth={10} height={30} />
        )}
      </ComposedChartLib>
    </ChartContainer>
  );
});

ComposedChart.displayName = 'ComposedChart';

export { ComposedChart };
