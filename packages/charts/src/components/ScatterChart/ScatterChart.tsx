import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/components/ChartContainer';
import { XAxisTicks } from '@ui5/webcomponents-react-charts/lib/components/XAxisTicks';
import { YAxisTicks } from '@ui5/webcomponents-react-charts/lib/components/YAxisTicks';
import { LineChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/LineChartPlaceholder';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { CSSProperties, FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import {
  CartesianGrid,
  Legend,
  Scatter,
  ScatterChart as ScatterChartLib,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
  Label
} from 'recharts';
import { useChartMargin } from '../../hooks/useChartMargin';
import { useLongestYAxisLabel } from '../../hooks/useLongestYAxisLabel';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter';
import { IChartBaseProps } from '../../interfaces/IChartBaseProps';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { defaultFormatter } from '../../internal/defaults';
import { tickLineConfig, tooltipContentStyle, tooltipFillOpacity, xAxisPadding } from '../../internal/staticProps';
import { useObserveXAxisHeights } from '../../hooks/useObserveXAxisHeights';

interface MeasureConfig extends IChartMeasure {
  /**
   * Line Width
   * @default 1
   */
  width?: number;
  /**
   * Line Opacity
   * @default 1
   */
  opacity?: number;
  /**
   * Defines axis of measures
   * @default 1
   */
  axis: 'x' | 'y' | 'z';
}

interface ScatterDataObject {
  label?: string;
  data?: any[];
  color?: CSSProperties['color'];
}

export interface ScatterChartProps extends IChartBaseProps {
  dataset?: ScatterDataObject[];
  /**
   * An array of config objects. Each object is defining one line in the chart.
   *
   * <h4>Required properties</h4>
   * - `accessor`: string containing the path to the dataset key this line should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * <h4>Optional properties</h4>
   *
   * - `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.
   * - `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `hideDataLabel`: flag whether the data labels should be hidden in the chart for this line.
   * - `DataLabel`: a custom component to be used for the data label
   * - `width`: line width, defaults to `1`
   * - `opacity`: line opacity, defaults to `1`
   *
   */
  measures?: MeasureConfig[];
}

const measureDefaults = {
  formatter: defaultFormatter
};

/**
 * <code>import { LineChart } from '@ui5/webcomponents-react-charts/lib/LineChart';</code>
 */
const ScatterChart: FC<ScatterChartProps> = forwardRef((props: ScatterChartProps, ref: Ref<any>) => {
  const {
    dataset,
    loading,
    noLegend = false,
    noAnimation = false,
    onDataPointClick,
    onLegendClick,
    style,
    className,
    tooltip,
    slot
  } = props;

  const chartConfig = useMemo(() => {
    return {
      yAxisVisible: false,
      xAxisVisible: true,
      gridStroke: ThemingParameters.sapList_BorderColor,
      gridHorizontal: true,
      gridVertical: false,
      legendPosition: 'bottom',
      legendHorizontalAlign: 'left',
      zoomingTool: false,
      resizeDebounce: 250,
      ...props.chartConfig
    };
  }, [props.chartConfig]);

  const { measures } = usePrepareDimensionsAndMeasures([], props.measures, {}, measureDefaults);

  const tooltipValueFormatter = useTooltipFormatter(measures);
  const chartRef = useConsolidatedRef<any>(ref);
  const onItemLegendClick = useLegendItemClick(onLegendClick);

  const onDataPointClickInternal = useCallback(
    (payload, eventOrIndex) => {
      if (eventOrIndex.dataKey && onDataPointClick) {
        onDataPointClick(
          enrichEventWithDetails(
            {},
            {
              value: eventOrIndex.value,
              dataKey: eventOrIndex.dataKey,
              dataIndex: eventOrIndex.index,
              payload: eventOrIndex.payload
            }
          )
        );
      }
    },
    [onDataPointClick]
  );

  const isBigDataSet = dataset?.length > 30 ?? false;

  const xMeasure = measures.filter(({ axis }) => axis === 'x');
  const yMeasure = measures.filter(({ axis }) => axis === 'y');
  const zMeasure = measures.filter(({ axis }) => axis === 'z');

  const [yAxisWidth, legendPosition] = useLongestYAxisLabel(
    dataset?.[0].data,
    measures.filter(({ axis }) => axis === 'y')
  );
  const xAxisHeights = useObserveXAxisHeights(chartRef, 1);
  const marginChart = useChartMargin(chartConfig.margin, chartConfig.zoomingTool);

  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      Placeholder={LineChartPlaceholder}
      ref={chartRef}
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
      resizeDebounce={chartConfig.resizeDebounce}
    >
      <ScatterChartLib
        margin={marginChart}
        onClick={onDataPointClickInternal}
        className={typeof onDataPointClick === 'function' ? 'has-click-handler' : undefined}
      >
        <CartesianGrid
          vertical={chartConfig.gridVertical}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {chartConfig.xAxisVisible && (
          <XAxis
            type={'number'}
            key={xMeasure?.[0]?.accessor}
            dataKey={xMeasure?.[0]?.accessor}
            xAxisId={0}
            interval={xMeasure?.[0]?.interval ?? (isBigDataSet ? 'preserveStart' : 0)}
            tick={<XAxisTicks config={xMeasure?.[0]} />}
            padding={xAxisPadding}
            height={xAxisHeights[0]}
            label={xMeasure?.[0]?.label ? { value: xMeasure?.[0]?.label, dy: 15, position: 'insideRight' } : 0}
          />
        )}
        <YAxis
          label={yMeasure?.[0]?.label ? { value: yMeasure?.[0]?.label, angle: -90, position: 'insideLeft' } : false}
          type={'number'}
          name={yMeasure?.[0]?.accessor}
          axisLine={chartConfig.yAxisVisible}
          tickLine={tickLineConfig}
          key={yMeasure?.[0]?.accessor}
          dataKey={yMeasure?.[0]?.accessor}
          tickFormatter={yMeasure?.[0]?.formatter}
          interval={0}
          tick={<YAxisTicks config={yMeasure[0]} />}
          width={yMeasure?.[0]?.label ? yAxisWidth + 10 : yAxisWidth}
          margin={yMeasure?.[0]?.label ? { left: 200 } : 0}
        />
        <ZAxis
          name={zMeasure?.[0]?.accessor}
          dataKey={zMeasure?.[0]?.accessor}
          range={[0, 5000]}
          key={zMeasure?.[0]?.accessor}
        />
        {dataset?.map((dataSet, index) => {
          return (
            <Scatter
              data={dataSet?.data}
              name={dataSet?.label}
              fill={dataSet?.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              isAnimationActive={noAnimation === false}
            />
          );
        })}
        {!noLegend && (
          <Legend
            verticalAlign={chartConfig.legendPosition}
            align={chartConfig.legendHorizontalAlign}
            onClick={onItemLegendClick}
            wrapperStyle={legendPosition}
          />
        )}
        {chartConfig.referenceLine && (
          <ReferenceLine
            stroke={chartConfig.referenceLine.color}
            y={chartConfig.referenceLine.value}
            label={chartConfig.referenceLine.label}
            yAxisId={'left'}
          />
        )}
        <Tooltip cursor={tooltipFillOpacity} formatter={tooltipValueFormatter} contentStyle={tooltipContentStyle} />
      </ScatterChartLib>
    </ChartContainer>
  );
});

ScatterChart.displayName = 'ScatterChart';

export { ScatterChart };
