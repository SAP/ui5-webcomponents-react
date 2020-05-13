import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { PieChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/PieChartPlaceholder';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { CSSProperties, FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import { Cell, Label, Legend, Pie, PieChart as PieChartLib, Tooltip } from 'recharts';
import { getValueByDataKey } from 'recharts/lib/util/ChartUtils';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { IPolarChartConfig } from '../../interfaces/IPolarChartConfig';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { defaultFormatter } from '../../internal/defaults';
import { tooltipContentStyle, tooltipFillOpacity } from '../../internal/staticProps';

interface MeasureConfig extends Omit<IChartMeasure, 'accessor' | 'label' | 'color'> {
  /**
   * A string containing the path to the dataset key this pie should display.
   * Supports object structures by using `'parent.child'`. Can also be a getter.
   */
  accessor: string;
  /**
   * array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors
   */
  colors?: CSSProperties['color'][];
}

interface DimensionConfig {
  /**
   * A string containing the path to the dataset key this pie should display.
   * Supports object structures by using `'parent.child'`. Can also be a getter.
   */
  accessor: string;
  /**
   * function will be called for each data label and allows you to format it according to your needs
   */
  formatter?: (value: any) => string;
}

export interface PieChartProps extends RechartBaseProps<IPolarChartConfig> {
  centerLabel?: string;
  dimension: DimensionConfig;
  /**
   * An array of config objects. Each object is defining one pie in the chart.
   *
   * <h4>Required properties</h4>
   * - `accessor`: string containing the path to the dataset key this pie should display. Supports object structures by using <code>'parent.child'</code>.
   *
   * <h4>Optional properties</h4>
   *
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `hideDataLabel`: flag whether the data labels should be hidden in the chart for this pie.
   * - `DataLabel`: a custom component to be used for the data label
   * - `colors`: array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors
   */
  measure: MeasureConfig;
}

/**
 * <code>import { PieChart } from '@ui5/webcomponents-react-charts/lib/next/PieChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
const PieChart: FC<PieChartProps> = forwardRef((props: PieChartProps, ref: Ref<any>) => {
  const {
    loading,
    dataset,
    noLegend = false,
    noAnimation = false,
    onDataPointClick,
    onLegendClick,
    centerLabel,
    style,
    className,
    tooltip,
    slot
  } = props;

  const chartConfig = useMemo(() => {
    return {
      margin: { right: 30, left: 30, bottom: 30, top: 30, ...(props.chartConfig?.margin ?? {}) },
      legendPosition: 'bottom',
      legendHorizontalAlign: 'center',
      paddingAngle: 0,
      outerRadius: '80%',
      ...props.chartConfig
    };
  }, [props.chartConfig]);

  const dimension: DimensionConfig = useMemo(
    () => ({
      formatter: defaultFormatter,
      ...props.dimension
    }),
    [props.dimension]
  );

  const measure: MeasureConfig = useMemo(
    () => ({
      formatter: defaultFormatter,
      ...props.measure
    }),
    [props.measure]
  );

  const label = useMemo(() => {
    if (measure.hideDataLabel) return null;
    return {
      position: 'outside',
      content: measure.DataLabel,
      formatter: measure.formatter
    };
  }, [measure]);

  const tooltipValueFormatter = useCallback((value) => measure.formatter(value), [measure.formatter]);
  const chartRef = useConsolidatedRef<any>(ref);

  const onItemLegendClick = useLegendItemClick(onLegendClick, () => measure.accessor);

  const onDataPointClickInternal = useCallback(
    (payload, event) => {
      if (payload && payload?.activePayload && onDataPointClick) {
        onDataPointClick(
          enrichEventWithDetails(event, {
            value: payload.activePayload[0].value,
            dataKey: payload.activePayload[0].dataKey,
            name: payload.activePayload[0].payload.name,
            payload: payload.activePayload[0].payload,
            dataIndex: payload.activeTooltipIndex
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
    >
      <PieChartLib
        onClick={onDataPointClickInternal}
        margin={chartConfig.margin}
        className={typeof onDataPointClick === 'function' ? 'has-click-handler' : undefined}
      >
        <Pie
          innerRadius={chartConfig.innerRadius}
          outerRadius={chartConfig.outerRadius}
          paddingAngle={chartConfig.paddingAngle}
          nameKey={dimension.accessor}
          dataKey={measure.accessor}
          data={dataset}
          animationBegin={0}
          isAnimationActive={noAnimation === false}
          label={label}
        >
          {centerLabel && <Label position={'center'}>{centerLabel}</Label>}
          {dataset &&
            dataset.map((data, index) => (
              <Cell
                key={index}
                name={dimension.formatter(getValueByDataKey(data, dimension.accessor, ''))}
                fill={measure.colors?.[index] ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              />
            ))}
        </Pie>
        <Tooltip cursor={tooltipFillOpacity} formatter={tooltipValueFormatter} contentStyle={tooltipContentStyle} />
        {!noLegend && (
          <Legend
            verticalAlign={chartConfig.legendPosition}
            align={chartConfig.legendHorizontalAlign}
            onClick={onItemLegendClick}
          />
        )}
      </PieChartLib>
    </ChartContainer>
  );
});

PieChart.displayName = 'PieChart';

export { PieChart };
