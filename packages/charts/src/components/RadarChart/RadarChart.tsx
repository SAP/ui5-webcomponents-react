import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { PieChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/PieChartPlaceholder';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import { useResolveDataKeys } from '@ui5/webcomponents-react-charts/lib/useResolveDataKeys';
import React, { FC, forwardRef, Ref, useCallback } from 'react';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RadarChartLib,
  Tooltip
} from 'recharts';
import { RechartBasePropsNew } from '../../interfaces/RechartBaseProps';
import { useDataLabel } from '../../hooks/useLabelElements';
import { useChartMargin } from '../../hooks/useChartMargin';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { IChartDimension } from '../../interfaces/IChartDimension';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter';

interface MeasureConfig extends IChartMeasure {
  /**
   * Column Width
   */
  width?: number;
  /**
   * Line Opacity
   */
  opacity?: number;
}

interface DimensionConfig extends IChartDimension {
  interval?: number;
}

interface RadarChartProps extends RechartBasePropsNew {
  dimensions: DimensionConfig[];
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
   * - `width`: column width, defaults to `auto`
   * - `opacity`: column opacity, defaults to `1`
   *
   */
  measures: MeasureConfig[];
}

const dimensionDefaults = {
  formatter: (d) => d
};

const measureDefaults = {
  formatter: (d) => d,
  opacity: 1
};

/**
 * <code>import { RadarChart } from '@ui5/webcomponents-react-charts/lib/next/RadarChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
const RadarChart: FC<RadarChartProps> = forwardRef((props: RadarChartProps, ref: Ref<any>) => {
  const {
    loading,
    dataset,
    noLegend = false,
    onDataPointClick,
    onLegendClick,
    chartConfig = {
      margin: {},
      legendPosition: 'bottom',
      dataLabel: true,
      polarGridType: 'circle'
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

  const primaryDimensionAccessor = primaryDimension?.accessor;

  const onItemLegendClick = useLegendItemClick(onLegendClick);

  const onDataPointClickInternal = useCallback(
    (payload, eventOrIndex) => {
      if (eventOrIndex.value && onDataPointClick) {
        onDataPointClick(
          enrichEventWithDetails(event, {
            value: eventOrIndex.value,
            dataKey: eventOrIndex.dataKey,
            name: eventOrIndex.payload.label,
            xIndex: eventOrIndex.index,
            payload: eventOrIndex.payload
          })
        );
      }
    },
    [onDataPointClick]
  );

  const marginChart = useChartMargin(dataset, (d) => d, primaryDimensionAccessor, chartConfig.margin, true, true, true);

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
    >
      <RadarChartLib data={dataset} margin={{ left: marginChart.left + 100 }}>
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
          const RadarDataLabel = useDataLabel(
            !element.hideDataLabel,
            element.DataLabel,
            element.formatter,
            false,
            false,
            true
          );
          return (
            <Radar
              key={element.accessor}
              activeDot={{ onClick: onDataPointClickInternal }}
              name={element.label ?? element.accessor}
              dataKey={element.accessor}
              stroke={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              fill={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              fillOpacity={0.5}
              label={RadarDataLabel}
            />
          );
        })}
        <Tooltip cursor={{ fillOpacity: 0.3 }} formatter={tooltipValueFormatter} />
        {!noLegend && (
          <Legend wrapperStyle={{ left: 100 }} verticalAlign={chartConfig.legendPosition} onClick={onItemLegendClick} />
        )}
      </RadarChartLib>
    </ChartContainer>
  );
});

RadarChart.displayName = 'RadarChart';

export { RadarChart };
