import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ChartDataLabel } from '@ui5/webcomponents-react-charts/lib/components/ChartDataLabel';
import { ComposedChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/components/ComposedChartPlaceholder';
import { XAxisTicks } from '@ui5/webcomponents-react-charts/lib/components/XAxisTicks';
import { YAxisTicks } from '@ui5/webcomponents-react-charts/lib/components/YAxisTicks';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import {
  Area,
  Bar,
  Brush,
  CartesianGrid,
  ComposedChart as ComposedChartLib,
  Legend,
  Line,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { useChartMargin } from '../../hooks/useChartMargin';
import { useSecondaryDimensionLabel } from '../../hooks/useLabelElements';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter';
import { IChartDimension } from '../../interfaces/IChartDimension';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';

const dimensionDefaults = {
  formatter: (d) => d
};

const measureDefaults = {
  formatter: (d) => d,
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

export interface ComposedChartProps extends RechartBaseProps {
  dimensions: DimensionConfig[];
  /**
   * An array of config objects. Each object is defining one element in the chart.
   *
   * <h4>Required properties</h4>
   * - `accessor`: string containing the path to the dataset key this element should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   * - `type`: string which chart element to show. Possible values: `line`, `bar`, `area`.
   *
   * <h4>Optional properties</h4>
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

enum ChartTypes {
  line = Line,
  bar = Bar,
  area = Area
}

const BAR_DEFAULT_PADDING = 20;

type AvailableChartTypes = 'line' | 'bar' | 'area' | string;

/**
 * <code>import { ComposedChart } from '@ui5/webcomponents-react-charts/lib/next/ComposedChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
const ComposedChart: FC<ComposedChartProps> = forwardRef((props: ComposedChartProps, ref: Ref<any>) => {
  const {
    loading,
    dataset,
    onDataPointClick,
    noLegend = false,
    onLegendClick,
    layout = 'horizontal',
    chartConfig = {
      margin: {},
      yAxisVisible: false,
      xAxisVisible: true,
      gridStroke: ThemingParameters.sapList_BorderColor,
      gridHorizontal: true,
      gridVertical: false,
      yAxisId: '',
      yAxisColor: ThemingParameters.sapList_BorderColor,
      legendPosition: 'top',
      zoomingTool: false,
      barGap: undefined,
      referenceLine: {
        label: undefined,
        value: undefined,
        color: undefined
      },
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

  const chartRef = useConsolidatedRef<any>(ref);

  const { dimensions, measures } = usePrepareDimensionsAndMeasures(
    props.dimensions,
    props.measures,
    dimensionDefaults,
    measureDefaults
  );

  const tooltipValueFormatter = useTooltipFormatter(measures);

  const primaryDimension = dimensions[0];
  const primaryMeasure = measures[0];

  const dataKeys = measures.map(({ accessor }) => accessor);
  const colorSecondY = chartConfig.secondYAxis
    ? dataKeys.findIndex((key) => key === chartConfig.secondYAxis.dataKey)
    : 0;

  const onDataPointClickInternal = useCallback(
    (payload, eventOrIndex, event) => {
      if (payload.name && onDataPointClick) {
        onDataPointClick(
          enrichEventWithDetails(event ?? eventOrIndex, {
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
          enrichEventWithDetails(
            {},
            {
              value: eventOrIndex.value,
              dataKey: eventOrIndex.dataKey,
              xIndex: eventOrIndex.index,
              payload: eventOrIndex.payload
            }
          )
        );
      }
    },
    [onDataPointClick]
  );

  const onItemLegendClick = useLegendItemClick(onLegendClick);

  const paddingCharts = useMemo(() => {
    let stackId = '';
    return measures?.reduce((acc, chartElement) => {
      if (chartElement.type === 'bar' && stackId !== chartElement.stackId) {
        stackId = chartElement.stackId ?? '';
        acc += chartElement?.width ?? BAR_DEFAULT_PADDING;
      }
      return acc;
    }, 5);
  }, [measures]);

  const SecondaryDimensionLabel = useSecondaryDimensionLabel();

  const isBigDataSet = dataset?.length > 30 ?? false;
  const primaryDimensionAccessor = primaryDimension?.accessor;

  const marginChart = useChartMargin(
    dataset,
    layout === 'vertical' ? dimensions : measures,
    chartConfig.margin,
    false,
    dimensions.length > 1,
    chartConfig.zoomingTool
  );

  const measureAxisProps = {
    axisLine: chartConfig.yAxisVisible ?? false,
    tickLine: false,
    tickFormatter: primaryMeasure?.formatter,
    interval: 0
  };

  const Placeholder = useCallback(() => {
    return <ComposedChartPlaceholder layout={layout} measures={measures} />;
  }, [layout, measures]);

  return (
    <ChartContainer
      ref={chartRef}
      loading={loading}
      dataset={dataset}
      Placeholder={Placeholder}
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
    >
      <ComposedChartLib margin={marginChart} data={dataset} layout={layout}>
        <CartesianGrid
          vertical={chartConfig.gridVertical ?? false}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke ?? ThemingParameters.sapList_BorderColor}
        />
        {(chartConfig.xAxisVisible ?? true) &&
          dimensions.map((dimension, index) => {
            let AxisComponent;
            const axisProps = {
              key: dimension.accessor,
              dataKey: dimension.accessor,
              interval: dimension?.interval ?? (isBigDataSet ? 'preserveStart' : 0),
              tick: index === 0 ? <XAxisTicks config={dimension} /> : SecondaryDimensionLabel,
              tickLine: index < 1,
              axisLine: index < 1,
              padding: { left: paddingCharts, right: paddingCharts }
            };

            if (layout === 'vertical') {
              axisProps.type = 'category';
              AxisComponent = YAxis;
            } else {
              axisProps.dataKey = dimension.accessor;
              AxisComponent = XAxis;
            }

            return <AxisComponent {...axisProps} />;
          })}
        {layout === 'horizontal' && (
          <YAxis {...measureAxisProps} yAxisId="primary" tick={<YAxisTicks config={primaryMeasure} />} />
        )}
        {layout === 'vertical' && (
          <XAxis {...measureAxisProps} xAxisId="primary" type="number" tick={<XAxisTicks config={primaryMeasure} />} />
        )}

        {chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey && layout === 'horizontal' && (
          <YAxis
            dataKey={chartConfig.secondYAxis.dataKey}
            stroke={chartConfig.secondYAxis.color ?? `var(--sapChart_OrderedColor_${(colorSecondY % 11) + 1})`}
            label={{ value: chartConfig.secondYAxis.name, offset: 2, angle: +90, position: 'center' }}
            orientation="right"
            interval={0}
            yAxisId="secondary"
          />
        )}
        {chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey && layout === 'vertical' && (
          <XAxis
            dataKey={chartConfig.secondYAxis.dataKey}
            stroke={chartConfig.secondYAxis.color ?? `var(--sapChart_OrderedColor_${(colorSecondY % 11) + 1})`}
            label={{ value: chartConfig.secondYAxis.name, offset: 2, angle: +90, position: 'center' }}
            orientation="top"
            interval={0}
            xAxisId="secondary"
            type="number"
          />
        )}
        {chartConfig.referenceLine && (
          <ReferenceLine
            stroke={chartConfig.referenceLine.color}
            y={layout === 'horizontal' ? chartConfig.referenceLine.value : undefined}
            x={layout === 'vertical' ? chartConfig.referenceLine.value : undefined}
            label={chartConfig.referenceLine.label}
            yAxisId={layout === 'horizontal' ? 'primary' : undefined}
            xAxisId={layout === 'vertical' ? 'primary' : undefined}
          />
        )}
        <Tooltip cursor={{ fillOpacity: 0.3 }} formatter={tooltipValueFormatter} />
        {!noLegend && <Legend verticalAlign={chartConfig.legendPosition ?? 'top'} onClick={onItemLegendClick} />}
        {measures?.map((element, index) => {
          const ChartElement = (ChartTypes[element.type] as any) as FC<any>;

          const chartElementProps: any = {};
          let labelPosition = 'top';

          switch (element.type) {
            case 'line':
              chartElementProps.activeDot = {
                onClick: onDataPointClickInternal
              };
              chartElementProps.strokeWidth = element.width;
              chartElementProps.strokeOpacity = element.opacity;
              chartElementProps.dot = !isBigDataSet;
              break;
            case 'bar':
              chartElementProps.fillOpacity = element.opacity;
              chartElementProps.strokeOpacity = element.opacity;
              chartElementProps.barSize = element.width;
              chartElementProps.onClick = onDataPointClickInternal;
              chartElementProps.stackId = element.stackId ?? undefined;
              chartElementProps.labelPosition = element.stackId ? 'insideTop' : 'top';
              if (layout === 'vertical') {
                labelPosition = 'insideRight';
              } else {
                labelPosition = 'insideTop';
              }
              chartElementProps.maxBarSize = 40;
              break;
            case 'area':
              chartElementProps.dot = !isBigDataSet;
              chartElementProps.fillOpacity = 0.3;
              chartElementProps.strokeOpacity = element.opacity;
              chartElementProps.onClick = onDataPointClickInternal;
              chartElementProps.strokeWidth = element.width;
              break;
          }

          if (layout === 'vertical') {
            chartElementProps.xAxisId =
              chartConfig?.secondYAxis?.dataKey === element.accessor ? 'secondary' : 'primary';
          } else {
            chartElementProps.yAxisId =
              chartConfig?.secondYAxis?.dataKey === element.accessor ? 'secondary' : 'primary';
          }
          return (
            <ChartElement
              key={element.accessor}
              name={element.label ?? element.accessor}
              label={
                isBigDataSet ? null : (
                  <ChartDataLabel config={element} chartType={element.type} position={labelPosition} />
                )
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
            stroke={ThemingParameters.sapObjectHeader_BorderColor}
            travellerWidth={10}
            height={20}
          />
        )}
      </ComposedChartLib>
    </ChartContainer>
  );
});

ComposedChart.displayName = 'ComposedChart';

export { ComposedChart };
