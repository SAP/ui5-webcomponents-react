import { useConsolidatedRef, useIsRTL, usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/hooks';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';
import { BulletChartPlaceholder } from '@ui5/webcomponents-react-charts/dist/BulletChartPlaceholder';
import { ChartContainer } from '@ui5/webcomponents-react-charts/dist/components/ChartContainer';
import { ChartDataLabel } from '@ui5/webcomponents-react-charts/dist/components/ChartDataLabel';
import { XAxisTicks } from '@ui5/webcomponents-react-charts/dist/components/XAxisTicks';
import { YAxisTicks } from '@ui5/webcomponents-react-charts/dist/components/YAxisTicks';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/dist/useLegendItemClick';
import React, { FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import {
  Area,
  Bar,
  Brush,
  CartesianGrid,
  ComposedChart as ComposedChartLib,
  Label,
  Legend,
  Line,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { useChartMargin } from '../../hooks/useChartMargin';
import { useLabelFormatter } from '../../hooks/useLabelFormatter';
import { useLongestYAxisLabel } from '../../hooks/useLongestYAxisLabel';
import { useObserveXAxisHeights } from '../../hooks/useObserveXAxisHeights';
import { useOnClickInternal } from '../../hooks/useOnClickInternal';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter';
import { IChartBaseProps } from '../../interfaces/IChartBaseProps';
import { IChartDimension } from '../../interfaces/IChartDimension';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { defaultFormatter } from '../../internal/defaults';
import { tickLineConfig, tooltipContentStyle, tooltipFillOpacity } from '../../internal/staticProps';

const dimensionDefaults = {
  formatter: defaultFormatter
};

const measureDefaults = {
  formatter: defaultFormatter,
  opacity: 1
};

interface MeasureConfig extends IChartMeasure {
  /**
   * width of the current chart element, defaults to `1` for `lines` and `20` for bars
   */
  width?: number;
  /**
   * Opacity
   * @default 1
   */
  opacity?: number;
  /**
   * Chart type
   */
  type: AvailableChartTypes;
  /**
   * bar Stack ID
   * @default undefined
   */
  stackId?: string;
}

interface DimensionConfig extends IChartDimension {
  interval?: number;
}

export interface BulletChartProps extends IChartBaseProps {
  /**
   * An array of config objects. Each object will define one dimension of the chart.
   *
   * #### Required Properties
   * - `accessor`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * #### Optional Properties
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `interval`: number that controls how many ticks are rendered on the x axis
   *
   */
  dimensions: DimensionConfig[];
  /**
   * An array of config objects. Each object is defining one element in the chart.
   *
   * #### Required properties
   * - `accessor`: string containing the path to the dataset key this element should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   * - `type`: string which chart element to show. Possible values: `line`, `bar`, `area`.
   *
   * #### Optional properties
   *
   * - `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.
   * - `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `hideDataLabel`: flag whether the data labels should be hidden in the chart for this element.
   * - `DataLabel`: a custom component to be used for the data label
   * - `width`: width of the current chart element, defaults to `1` for `lines` and `20` for bars
   * - `opacity`: element opacity, defaults to `1`
   * - `stackId`: bars with the same stackId will be stacked
   *
   */
  measures: MeasureConfig[];
  /**
   * layout for showing measures. `horizontal` bars would equal the column chart, `vertical` would be a bar chart.
   * Default Value: `horizontal`
   */
  layout?: 'horizontal' | 'vertical';
}

type AvailableChartTypes = 'primary' | 'comparison' | 'additional' | string;

/**
 * TODO DESCRIPTION
 * The `BulletChart`
 */
const BulletChart: FC<BulletChartProps> = forwardRef((props: BulletChartProps, ref: Ref<HTMLDivElement>) => {
  const {
    loading,
    dataset,
    onDataPointClick,
    noLegend,
    noAnimation,
    tooltipConfig,
    onLegendClick,
    onClick,
    layout,
    style,
    className,
    tooltip,
    slot,
    syncId,
    ChartPlaceholder
  } = props;

  const chartRef = useConsolidatedRef<any>(ref);

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

  const { dimensions, measures } = usePrepareDimensionsAndMeasures(
    props.dimensions,
    props.measures,
    dimensionDefaults,
    measureDefaults
  );

  const tooltipValueFormatter = useTooltipFormatter(measures);

  const primaryDimension = dimensions[0];
  const primaryMeasure = measures[0];

  const labelFormatter = useLabelFormatter(primaryDimension);

  const dataKeys = measures.map(({ accessor }) => accessor);
  const colorSecondY = chartConfig.secondYAxis
    ? dataKeys.findIndex((key) => key === chartConfig.secondYAxis?.dataKey)
    : 0;

  const onDataPointClickInternal = useCallback(
    (payload, eventOrIndex, event) => {
      if (typeof onDataPointClick === 'function') {
        if (payload.name) {
          const payloadValueLength = payload?.value?.length;
          onDataPointClick(
            enrichEventWithDetails(event ?? eventOrIndex, {
              value: payloadValueLength ? payload.value[1] - payload.value[0] : payload.value,
              dataIndex: payload.index ?? eventOrIndex,
              dataKey: payloadValueLength
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
            enrichEventWithDetails({} as any, {
              value: eventOrIndex.value,
              dataKey: eventOrIndex.dataKey,
              dataIndex: eventOrIndex.index,
              payload: eventOrIndex.payload
            })
          );
        }
      }
    },
    [onDataPointClick]
  );

  const onItemLegendClick = useLegendItemClick(onLegendClick);
  const onClickInternal = useOnClickInternal(onClick);

  const isBigDataSet = dataset?.length > 30 ?? false;
  const primaryDimensionAccessor = primaryDimension?.accessor;

  const [yAxisWidth, legendPosition] = useLongestYAxisLabel(dataset, layout === 'vertical' ? dimensions : measures);

  const marginChart = useChartMargin(chartConfig.margin, chartConfig.zoomingTool);
  const xAxisHeights = useObserveXAxisHeights(chartRef, layout === 'vertical' ? 1 : props.dimensions.length);

  const measureAxisProps = {
    axisLine: chartConfig.yAxisVisible,
    tickLine: tickLineConfig,
    tickFormatter: primaryMeasure?.formatter,
    interval: 0
  };

  const Placeholder = useCallback(() => {
    return <BulletChartPlaceholder layout={layout} measures={measures} />;
  }, [layout, measures]);

  const ComparisonLine = (comparisonProps) => {
    const { x, y, width, height, index, fill } = comparisonProps;

    if (layout === 'horizontal') {
      return <line key={`target-${index}`} x1={x - 3} x2={x + width + 3} y1={y} y2={y} stroke={fill} strokeWidth={3} />;
    }

    return (
      <line
        key={`target-${index}`}
        x1={x + width}
        x2={x + width}
        y1={y - 3}
        y2={y + height + 3}
        stroke={fill}
        strokeWidth={3}
      />
    );
  };

  const passThroughProps = usePassThroughHtmlProps(props, ['onDataPointClick', 'onLegendClick', 'onClick']);
  const isRTL = useIsRTL(chartRef);

  return (
    <ChartContainer
      ref={chartRef}
      loading={loading}
      dataset={dataset}
      Placeholder={ChartPlaceholder ?? Placeholder}
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
      resizeDebounce={chartConfig.resizeDebounce}
      {...passThroughProps}
    >
      <ComposedChartLib
        syncId={syncId}
        onClick={onClickInternal}
        stackOffset="sign"
        margin={marginChart}
        data={dataset}
        layout={layout}
        className={
          typeof onDataPointClick === 'function' || typeof onClick === 'function' ? 'has-click-handler' : undefined
        }
      >
        <CartesianGrid
          vertical={chartConfig.gridVertical}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {chartConfig.xAxisVisible &&
          dimensions.map((dimension, index) => {
            let AxisComponent;
            const axisProps: any = {
              dataKey: dimension.accessor,
              interval: dimension?.interval ?? (isBigDataSet ? 'preserveStart' : 0),
              tickLine: index < 1,
              axisLine: index < 1,
              allowDuplicatedCategory: index === 0
            };

            if (layout === 'vertical') {
              axisProps.type = 'category';
              axisProps.tick = <YAxisTicks config={dimension} />;
              axisProps.yAxisId = index;
              axisProps.width = yAxisWidth;
              AxisComponent = YAxis;
              axisProps.orientation = isRTL ? 'right' : 'left';
            } else {
              axisProps.dataKey = dimension.accessor;
              axisProps.tick = <XAxisTicks config={dimension} />;
              axisProps.xAxisId = index;
              axisProps.height = xAxisHeights[index];
              AxisComponent = XAxis;
              axisProps.reversed = isRTL;
            }

            return <AxisComponent key={dimension.accessor} {...axisProps} />;
          })}
        {layout === 'horizontal' && (
          <YAxis
            {...measureAxisProps}
            yAxisId="primary"
            width={yAxisWidth}
            orientation={isRTL ? 'right' : 'left'}
            tick={<YAxisTicks config={primaryMeasure} />}
          />
        )}
        {layout === 'vertical' && (
          <XAxis
            {...measureAxisProps}
            reversed={isRTL}
            xAxisId="primary"
            type="number"
            tick={<XAxisTicks config={primaryMeasure} />}
          />
        )}
        {chartConfig.secondYAxis?.dataKey && layout === 'horizontal' && (
          <YAxis
            dataKey={chartConfig.secondYAxis.dataKey}
            axisLine={{
              stroke: chartConfig.secondYAxis.color ?? `var(--sapChart_OrderedColor_${(colorSecondY % 11) + 1})`
            }}
            tick={{
              direction: 'ltr',
              fill: chartConfig.secondYAxis.color ?? `var(--sapChart_OrderedColor_${(colorSecondY % 11) + 1})`
            }}
            tickLine={{
              stroke: chartConfig.secondYAxis.color ?? `var(--sapChart_OrderedColor_${(colorSecondY % 11) + 1})`
            }}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            label={{
              value: chartConfig.secondYAxis.name,
              offset: 2,
              angle: +90,
              position: 'center'
            }}
            orientation={isRTL ? 'left' : 'right'}
            interval={0}
            yAxisId="secondary"
          />
        )}
        {chartConfig.secondYAxis?.dataKey && layout === 'vertical' && (
          <XAxis
            dataKey={chartConfig.secondYAxis.dataKey}
            axisLine={{
              stroke: chartConfig.secondYAxis.color ?? `var(--sapChart_OrderedColor_${(colorSecondY % 11) + 1})`
            }}
            tick={{ fill: chartConfig.secondYAxis.color ?? `var(--sapChart_OrderedColor_${(colorSecondY % 11) + 1})` }}
            tickLine={{
              stroke: chartConfig.secondYAxis.color ?? `var(--sapChart_OrderedColor_${(colorSecondY % 11) + 1})`
            }}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            label={{ value: chartConfig.secondYAxis.name, offset: 2, angle: +90, position: 'center' }}
            orientation="top"
            interval={0}
            xAxisId="secondary"
            type="number"
          />
        )}
        {layout === 'horizontal' && <XAxis xAxisId={'comparisonXAxis'} hide />}
        {layout === 'vertical' && <YAxis yAxisId={'comparisonYAxis'} type={'category'} hide />}
        {chartConfig.referenceLine && (
          <ReferenceLine
            stroke={chartConfig.referenceLine.color}
            y={layout === 'horizontal' ? chartConfig.referenceLine.value : undefined}
            x={layout === 'vertical' ? chartConfig.referenceLine.value : undefined}
            yAxisId={layout === 'horizontal' ? 'primary' : undefined}
            xAxisId={layout === 'vertical' ? 'primary' : undefined}
          >
            <Label>{chartConfig.referenceLine.label}</Label>
          </ReferenceLine>
        )}
        {/*<Tooltip*/}
        {/*  cursor={tooltipFillOpacity}*/}
        {/*  formatter={tooltipValueFormatter}*/}
        {/*  labelFormatter={labelFormatter}*/}
        {/*  contentStyle={tooltipContentStyle}*/}
        {/*  {...tooltipConfig}*/}
        {/*/>*/}
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
        {measures?.map((element, index) => {
          const ChartElement = Bar as any as FC<any>;

          const chartElementProps: any = {
            isAnimationActive: noAnimation === false
          };
          let labelPosition = 'top';
          switch (element.type) {
            case 'primary':
              chartElementProps.stackId = 'A';
              chartElementProps.activeDot = {
                onClick: onDataPointClickInternal
              };
              chartElementProps.strokeWidth = element.width;
              chartElementProps.strokeOpacity = element.opacity;
              chartElementProps.dot = !isBigDataSet;
              chartElementProps.labelPosition = element.stackId ? 'insideTop' : 'top';
              if (layout === 'vertical') {
                labelPosition = 'insideRight';
              } else {
                labelPosition = 'insideTop';
              }
              break;
            case 'comparison':
              chartElementProps.type = 'monotone';
              chartElementProps.fill = element.color ?? 'black';
              chartElementProps.shape = ComparisonLine;
              chartElementProps.activeDot = { r: 8 };
              chartElementProps.strokeWidth = element.width;
              chartElementProps.strokeOpacity = element.opacity;
              chartElementProps.label = false;
              chartElementProps.xAxisId = 'comparisonXAxis';
              chartElementProps.yAxisId = 'comparisonYAxis';
              chartElementProps.dot = !isBigDataSet;

              break;
            case 'additional':
              chartElementProps.stackId = 'A';
              chartElementProps.fillOpacity = element.opacity;
              chartElementProps.strokeOpacity = element.opacity;
              chartElementProps.barSize = element.width;
              chartElementProps.onClick = onDataPointClickInternal;
              chartElementProps.labelPosition = element.stackId ? 'insideTop' : 'top';
              if (layout === 'vertical') {
                labelPosition = 'insideRight';
              } else {
                labelPosition = 'insideTop';
              }
              break;
          }

          if (layout === 'vertical') {
            chartElementProps.xAxisId = chartConfig.secondYAxis?.dataKey === element.accessor ? 'secondary' : 'primary';
          } else {
            chartElementProps.yAxisId = chartConfig.secondYAxis?.dataKey === element.accessor ? 'secondary' : 'primary';
          }

          return (
            <ChartElement
              key={element.accessor}
              name={element.label ?? element.accessor}
              label={
                isBigDataSet ? null : <ChartDataLabel config={element} chartType={'bar'} position={labelPosition} />
              }
              stroke={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              fill={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              type="monotone"
              dataKey={element.accessor}
              {...chartElementProps}
            />
          );
        })}
        {chartConfig.zoomingTool && (
          <Brush
            y={10}
            dataKey={primaryDimensionAccessor}
            tickFormatter={primaryDimension.formatter}
            stroke={ThemingParameters.sapObjectHeader_BorderColor}
            travellerWidth={10}
            height={20}
          />
        )}
        {props.children}
      </ComposedChartLib>
    </ChartContainer>
  );
});

BulletChart.defaultProps = {
  noLegend: false,
  noAnimation: false,
  layout: 'horizontal'
};

BulletChart.displayName = 'BulletChart';

export { BulletChart };
