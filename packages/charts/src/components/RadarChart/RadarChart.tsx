import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/components/ChartContainer';
import { ChartDataLabel } from '@ui5/webcomponents-react-charts/lib/components/ChartDataLabel';
import { PieChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/PieChartPlaceholder';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RadarChartLib,
  Tooltip
} from 'recharts';
import { useLabelFormatter } from '../../hooks/useLabelFormatter';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter';
import { IChartBaseProps } from '../../interfaces/IChartBaseProps';
import { IChartDimension } from '../../interfaces/IChartDimension';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { defaultFormatter } from '../../internal/defaults';
import { tooltipContentStyle, tooltipFillOpacity } from '../../internal/staticProps';

interface MeasureConfig extends IChartMeasure {
  /**
   * Opacity
   */
  opacity?: number;
}

interface DimensionConfig extends IChartDimension {
  interval?: number;
}

export interface RadarChartProps extends IChartBaseProps {
  dimensions: DimensionConfig[];
  /**
   * An array of config objects. Each object is defining one radar in the chart.
   *
   * <h4>Required properties</h4>
   * - `accessor`: string containing the path to the dataset key this radar should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * <h4>Optional properties</h4>
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

const RadarChart: FC<RadarChartProps> = forwardRef((props: RadarChartProps, ref: Ref<HTMLDivElement>) => {
  const {
    loading,
    dataset,
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
      legendPosition: 'bottom',
      legendHorizontalAlign: 'center',
      dataLabel: true,
      polarGridType: 'circle' as 'circle',
      resizeDebounce: 250,
      ...props.chartConfig
    };
  }, [props.chartConfig]);

  const chartRef = useConsolidatedRef<any>(ref);

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
      }
    },
    [onDataPointClick]
  );

  return (
    <ChartContainer
      dataset={dataset}
      ref={chartRef}
      loading={loading}
      Placeholder={PieChartPlaceholder}
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
      resizeDebounce={chartConfig.resizeDebounce}
    >
      <RadarChartLib
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
              key={element.accessor}
              activeDot={{ onClick: onDataPointClickInternal }}
              name={element.label ?? element.accessor}
              dataKey={element.accessor}
              stroke={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              fill={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              fillOpacity={element.opacity}
              label={<ChartDataLabel config={element} chartType="radar" position={'outside'} />}
              isAnimationActive={noAnimation === false}
            />
          );
        })}
        <Tooltip
          cursor={tooltipFillOpacity}
          formatter={tooltipValueFormatter}
          contentStyle={tooltipContentStyle}
          labelFormatter={labelFormatter}
        />
        {!noLegend && (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <Legend
            verticalAlign={chartConfig.legendPosition}
            align={chartConfig.legendHorizontalAlign}
            onClick={onItemLegendClick}
          />
        )}
      </RadarChartLib>
    </ChartContainer>
  );
});

RadarChart.displayName = 'RadarChart';

export { RadarChart };
