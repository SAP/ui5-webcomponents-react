'use client';

import { enrichEventWithDetails, ThemingParameters } from '@ui5/webcomponents-react-base';
import { forwardRef, useCallback, useRef } from 'react';
import type { PolarGridProps } from 'recharts';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RadarChartLib,
  Tooltip
} from 'recharts';
import { useLabelFormatter } from '../../hooks/useLabelFormatter.js';
import { useLegendItemClick } from '../../hooks/useLegendItemClick.js';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures.js';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter.js';
import type { IChartBaseProps } from '../../interfaces/IChartBaseProps.js';
import type { IChartDimension } from '../../interfaces/IChartDimension.js';
import type { IChartMeasure } from '../../interfaces/IChartMeasure.js';
import { ChartContainer } from '../../internal/ChartContainer.js';
import { ChartDataLabel } from '../../internal/ChartDataLabel.js';
import { defaultFormatter } from '../../internal/defaults.js';
import { tooltipContentStyle, tooltipFillOpacity } from '../../internal/staticProps.js';
import { PieChartPlaceholder } from '../PieChart/Placeholder.js';

interface MeasureConfig extends IChartMeasure {
  /**
   * Opacity
   */
  opacity?: number;
}

export interface RadarChartProps extends IChartBaseProps {
  /**
   * An array of config objects. Each object will define one dimension of the chart.
   *
   * **Required Properties*
   * - `accessor`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * **Optional Properties**
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   *
   */
  dimensions: IChartDimension[];
  /**
   * An array of config objects. Each object is defining one radar in the chart.
   *
   * **Required properties**
   * - `accessor`: string containing the path to the dataset key this radar should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * **Optional properties**
   *
   * - `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.
   * - `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `hideDataLabel`: flag whether the data labels should be hidden in the chart for this radar.
   * - `DataLabel`: a custom component to be used for the data label
   * - `opacity`: radar opacity, defaults to `0.5`
   *
   */
  measures: MeasureConfig[];
}

const dimensionDefaults = {
  formatter: (d) => d
};

const measureDefaults = {
  formatter: defaultFormatter,
  opacity: 0.5
};

/**
 * A radar or spider or web chart is a two-dimensional chart type designed to plot one or more series of values over multiple quantitative variables.
 */
const RadarChart = forwardRef<HTMLDivElement, RadarChartProps>((props, ref) => {
  const {
    loading,
    loadingDelay,
    dataset,
    noLegend,
    noAnimation,
    tooltipConfig,
    onDataPointClick,
    onLegendClick,
    onClick,
    style,
    className,
    slot,
    ChartPlaceholder,
    children,
    ...rest
  } = props;

  const chartConfig: RadarChartProps['chartConfig'] & {
    dataLabel: boolean;
    polarGridType: PolarGridProps['gridType'];
  } = {
    legendPosition: 'bottom',
    legendHorizontalAlign: 'center',
    dataLabel: true,
    polarGridType: 'circle',
    resizeDebounce: 250,
    ...props.chartConfig
  };

  const { dimensions, measures } = usePrepareDimensionsAndMeasures(
    props.dimensions,
    props.measures,
    dimensionDefaults,
    measureDefaults
  );

  const tooltipValueFormatter = useTooltipFormatter(measures);

  const primaryDimension = dimensions[0];

  const labelFormatter = useLabelFormatter(primaryDimension);

  const primaryDimensionAccessor = primaryDimension?.accessor;

  const onItemLegendClick = useLegendItemClick(onLegendClick);
  const preventOnClickCall = useRef(false);
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
    (payload, eventOrIndex) => {
      if (eventOrIndex.value && onDataPointClick) {
        onDataPointClick(
          enrichEventWithDetails({} as any, {
            value: eventOrIndex.value,
            dataKey: eventOrIndex.dataKey,
            name: eventOrIndex.payload.label,
            dataIndex: eventOrIndex.index,
            payload: eventOrIndex.payload
          })
        );
        preventOnClickCall.current = true;
      }
    },
    [onDataPointClick, preventOnClickCall.current]
  );

  const { chartConfig: _0, dimensions: _1, measures: _2, ...propsWithoutOmitted } = rest;

  return (
    <ChartContainer
      dataset={dataset}
      ref={ref}
      loading={loading}
      loadingDelay={loadingDelay}
      Placeholder={ChartPlaceholder ?? PieChartPlaceholder}
      style={style}
      className={className}
      slot={slot}
      resizeDebounce={chartConfig.resizeDebounce}
      {...propsWithoutOmitted}
    >
      {/*@ts-expect-error: todo not yet compatible with React19*/}
      <RadarChartLib
        onClick={onClickInternal}
        data={dataset}
        margin={chartConfig.margin}
        className={typeof onDataPointClick === 'function' ? 'has-click-handler' : undefined}
      >
        <PolarGrid gridType={chartConfig.polarGridType} />
        <PolarAngleAxis
          dataKey={primaryDimensionAccessor}
          tickFormatter={primaryDimension?.formatter}
          tick={{
            fill: ThemingParameters.sapContent_LabelColor
          }}
        />
        <PolarRadiusAxis />
        {measures.map((element, index) => {
          return (
            <Radar
              key={element.reactKey}
              activeDot={{ onClick: onDataPointClickInternal } as any}
              name={element.label ?? element.accessor}
              dataKey={element.accessor}
              stroke={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              fill={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              fillOpacity={element.opacity}
              label={<ChartDataLabel config={element} chartType="radar" position={'outside'} />}
              isAnimationActive={!noAnimation}
            />
          );
        })}
        {/*ToDo: remove conditional rendering once `active` is working again (https://github.com/recharts/recharts/issues/2703)*/}
        {tooltipConfig?.active !== false && (
          <Tooltip
            cursor={tooltipFillOpacity}
            formatter={tooltipValueFormatter}
            contentStyle={tooltipContentStyle}
            labelFormatter={labelFormatter}
            {...tooltipConfig}
          />
        )}
        {!noLegend && (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <Legend
            verticalAlign={chartConfig.legendPosition}
            align={chartConfig.legendHorizontalAlign}
            onClick={onItemLegendClick}
          />
        )}
        {children}
      </RadarChartLib>
    </ChartContainer>
  );
});

RadarChart.displayName = 'RadarChart';

export { RadarChart };
