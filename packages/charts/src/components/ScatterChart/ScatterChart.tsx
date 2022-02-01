import { enrichEventWithDetails, ThemingParameters, useIsRTL, useSyncRef } from '@ui5/webcomponents-react-base';
import { ChartContainer } from '@ui5/webcomponents-react-charts/dist/components/ChartContainer';
import { XAxisTicks } from '@ui5/webcomponents-react-charts/dist/components/XAxisTicks';
import { YAxisTicks } from '@ui5/webcomponents-react-charts/dist/components/YAxisTicks';
import { ScatterChartPlaceholder } from '@ui5/webcomponents-react-charts/dist/ScatterChartPlaceholder';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/dist/useLegendItemClick';
import React, { CSSProperties, FC, forwardRef, Ref, useCallback, useRef } from 'react';
import {
  CartesianGrid,
  Label,
  Legend,
  ReferenceLine,
  Scatter,
  ScatterChart as ScatterChartLib,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis
} from 'recharts';
import { useChartMargin } from '../../hooks/useChartMargin';
import { useLongestYAxisLabel } from '../../hooks/useLongestYAxisLabel';
import { useObserveXAxisHeights } from '../../hooks/useObserveXAxisHeights';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter';
import { ICartesianChartConfig } from '../../interfaces/ICartesianChartConfig';
import { IChartBaseProps } from '../../interfaces/IChartBaseProps';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { defaultFormatter } from '../../internal/defaults';
import { tickLineConfig, tooltipContentStyle, tooltipFillOpacity, xAxisPadding } from '../../internal/staticProps';
import { useDeprecationNoticeForTooltip } from '../../internal/useDeprecationNotiveForTooltip';

interface MeasureConfig extends Omit<IChartMeasure, 'color' | 'hideDataLabel' | 'DataLabel'> {
  /**
   * Defines the axis of the measure
   */
  axis: 'x' | 'y' | 'z';
}

interface ScatterDataObject {
  /**
   * Defines label of the dataset
   */
  label?: string;
  /**
   * Contains the data of the chart
   */
  data?: Record<string, unknown>[];
  /**
   * Any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors
   */
  color?: CSSProperties['color'];
  /**
   * Defines opacity of the displayed dataset
   * @default 1
   */
  opacity?: number;
}

interface IScatterChartConfig extends ICartesianChartConfig {
  referenceLineX?: {
    label: string;
    value: number;
    color: string;
  };
}

export interface ScatterChartProps extends Omit<IChartBaseProps<IScatterChartConfig>, 'dataset'> {
  /**
   * An array of dataset objects. Each object defines a dataset which is displayed.
   *
   * #### Required properties
   *  - `data`: array of objects which contains the data.
   *
   * #### Optional properties
   *  - `label`: string containing the label of the dataset which is also displayed in the legend.
   *  - `color`: any valid CSS color or CSS variable. Defaults to the `sapChart_Ordinal` colors.
   *  - `opacity`: number contains value of opacity of dataset
   *
   * #### Example of dataset:
   *
   * <code>
   *   <pre>
   *    [
   *      {
   *       label: 'America',
   *       opacity: 0.7,
   *       data: [
   *         {
   *           users: 120,
   *           sessions: 200,
   *           volume: 302
   *         },
   *         {
   *           users: 20,
   *           sessions: 230,
   *           volume: 392
   *         }
   *       ]
   *      }
   *    ]
   *   </pre>
   * </code>
   */
  dataset?: ScatterDataObject[];
  /**
   * An array of config objects. Each object is defining one axis in the chart.
   *
   * #### Required properties
   *  - `accessor`: string containing the path to the dataset key this line should display. Supports object structures by using <code>'parent.child'</code>.
   *     Can also be a getter.
   *  - `axis`: string containing definition of axis. Must be x, y or z data to the axis.
   *
   * #### Optional properties
   *  - `label`: Label to display in tooltips. Falls back to the <code>accessor</code> if not present.
   *  - `formatter`: function will be called for each data label and allows you to format it according to your needs. Also addresses labels of axis.
   */
  measures?: MeasureConfig[];
}

const measureDefaults = {
  formatter: defaultFormatter
};

/**
 *
 * A `ScatterChart` is a data visualization that displays multiple circles (bubbles) in a two-dimensional plot.
 *
 * Most commonly, a scatter chart displays the values of three numeric variables,where each observation's data is
 * shown by a circle, while the horizontal and vertical positions of the bubble show the values of two other variables.
 */
const ScatterChart: FC<ScatterChartProps> = forwardRef((props: ScatterChartProps, ref: Ref<HTMLDivElement>) => {
  const {
    dataset,
    loading,
    noLegend,
    noAnimation,
    tooltipConfig,
    onDataPointClick,
    onLegendClick,
    onClick,
    style,
    className,
    tooltip,
    slot,
    ChartPlaceholder,
    children,
    ...rest
  } = props;

  useDeprecationNoticeForTooltip('ScatterChart', props.tooltip);

  const chartConfig = {
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

  const { measures } = usePrepareDimensionsAndMeasures([], props.measures, {}, measureDefaults);

  const tooltipValueFormatter = useTooltipFormatter(measures);
  const [componentRef, chartRef] = useSyncRef<any>(ref);
  const preventOnClickCall = useRef(false);
  const onItemLegendClick = useLegendItemClick(onLegendClick);
  const onClickInternal = useCallback(
    (payload, event) => {
      if (typeof onClick === 'function' && !preventOnClickCall.current) {
        onClick(
          enrichEventWithDetails(event, {
            payload: payload?.activePayload?.[0]?.payload,
            activePayloads: payload?.activePayload
          })
        );
      }
      if (preventOnClickCall.current) {
        preventOnClickCall.current = false;
      }
    },
    [onClick, preventOnClickCall.current]
  );

  const onDataPointClickInternal = useCallback(
    (payload, eventOrIndex, event) => {
      if (payload && onDataPointClick) {
        onDataPointClick(
          enrichEventWithDetails(event, {
            value: payload.node,
            dataKey: payload.zAxis.dataKey,
            dataIndex: eventOrIndex,
            payload: payload.payload
          })
        );
        preventOnClickCall.current = true;
      }
    },
    [onDataPointClick, preventOnClickCall.current]
  );
  const isBigDataSet = dataset?.length > 30 ?? false;

  const xMeasure = measures.find(({ axis }) => axis === 'x');
  const yMeasure = measures.find(({ axis }) => axis === 'y');
  const zMeasure = measures.find(({ axis }) => axis === 'z');

  const [yAxisWidth, legendPosition] = useLongestYAxisLabel(dataset?.[0].data, [yMeasure]);
  const xAxisHeights = useObserveXAxisHeights(chartRef, 1);
  const marginChart = useChartMargin(chartConfig.margin, chartConfig.zoomingTool);
  const { chartConfig: _0, measures: _1, ...propsWithoutOmitted } = rest;
  const isRTL = useIsRTL(chartRef);

  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      Placeholder={ChartPlaceholder ?? ScatterChartPlaceholder}
      ref={componentRef}
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
      resizeDebounce={chartConfig.resizeDebounce}
      {...propsWithoutOmitted}
    >
      <ScatterChartLib
        onClick={onClickInternal}
        margin={marginChart}
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
            key={xMeasure?.accessor}
            name={xMeasure?.label}
            dataKey={xMeasure?.accessor}
            xAxisId={0}
            interval={xMeasure?.interval ?? (isBigDataSet ? 'preserveStart' : 0)}
            tick={<XAxisTicks config={xMeasure} />}
            padding={xAxisPadding}
            height={xAxisHeights[0]}
            reversed={isRTL}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            label={xMeasure?.label ? { value: xMeasure?.label, dy: 15, position: 'insideRight' } : 0}
          />
        )}
        <YAxis
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          label={
            yMeasure?.label
              ? { value: yMeasure?.label, angle: -90, position: isRTL ? 'insideRight' : 'insideLeft' }
              : false
          }
          type={'number'}
          name={yMeasure?.label}
          axisLine={chartConfig.yAxisVisible}
          tickLine={tickLineConfig}
          key={yMeasure?.accessor}
          dataKey={yMeasure?.accessor}
          tickFormatter={yMeasure?.formatter}
          interval={0}
          tick={<YAxisTicks config={yMeasure} />}
          width={yMeasure?.label ? yAxisWidth + 10 : yAxisWidth}
          margin={yMeasure?.label ? { left: 200 } : 0}
          orientation={isRTL === true ? 'right' : 'left'}
        />
        <ZAxis name={zMeasure?.label} dataKey={zMeasure?.accessor} range={[0, 5000]} key={zMeasure?.accessor} />
        {dataset?.map((dataSet, index) => {
          return (
            <Scatter
              className={typeof onDataPointClick === 'function' ? 'has-click-handler' : undefined}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              onMouseDown={onDataPointClickInternal}
              opacity={dataSet.opacity}
              data={dataSet?.data}
              name={dataSet?.label}
              key={dataSet?.label}
              fill={dataSet?.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              isAnimationActive={noAnimation === false}
            />
          );
        })}
        {!noLegend && (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <Legend
            verticalAlign={chartConfig.legendPosition}
            align={chartConfig.legendHorizontalAlign}
            onClick={onItemLegendClick}
            wrapperStyle={legendPosition}
          />
        )}
        {chartConfig.referenceLine && (
          <ReferenceLine stroke={chartConfig.referenceLine.color} y={chartConfig.referenceLine.value}>
            <Label>{chartConfig.referenceLine.label}</Label>
          </ReferenceLine>
        )}
        {chartConfig.referenceLineX && (
          <ReferenceLine stroke={chartConfig.referenceLineX.color} x={chartConfig.referenceLineX.value}>
            <Label>{chartConfig.referenceLineX.label}</Label>
          </ReferenceLine>
        )}
        <Tooltip
          cursor={tooltipFillOpacity}
          formatter={tooltipValueFormatter}
          contentStyle={tooltipContentStyle}
          {...tooltipConfig}
        />
        {children}
      </ScatterChartLib>
    </ChartContainer>
  );
});

ScatterChart.defaultProps = {
  noLegend: false,
  noAnimation: false
};

ScatterChart.displayName = 'ScatterChart';

export { ScatterChart };
