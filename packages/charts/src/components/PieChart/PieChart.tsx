import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/components/ChartContainer';
import { PieChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/PieChartPlaceholder';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { CSSProperties, FC, forwardRef, Ref, useCallback, useMemo, isValidElement, cloneElement } from 'react';
import { Cell, Label, Legend, Pie, PieChart as PieChartLib, Tooltip, Text } from 'recharts';
import { getValueByDataKey } from 'recharts/lib/util/ChartUtils';
import { IChartBaseProps } from '../../interfaces/IChartBaseProps';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { IPolarChartConfig } from '../../interfaces/IPolarChartConfig';
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

export interface PieChartProps extends IChartBaseProps<IPolarChartConfig> {
  centerLabel?: string;
  dimension: DimensionConfig;
  /**
   * A object which contains the configuration of the measure. The object is defining one pie in the chart.
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

const tooltipItemDefaultStyle = { color: 'var (--sapTextColor)' };

/**
 * <code>import { PieChart } from '@ui5/webcomponents-react-charts/lib/PieChart';</code>
 */
const PieChart: FC<PieChartProps> = forwardRef((props: PieChartProps, ref: Ref<HTMLDivElement>) => {
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
      resizeDebounce: 250,
      tooltipItemStyle: tooltipItemDefaultStyle,
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

  const dataLabel = useCallback(
    (props) => {
      if (measure.hideDataLabel) return null;

      if (isValidElement(measure.DataLabel)) {
        return cloneElement(measure.DataLabel, { ...props, config: measure });
      }

      return (
        <Text {...props} alignmentBaseline="middle" className="recharts-pie-label-text">
          {measure.formatter(props.value)}
        </Text>
      );
    },
    [measure]
  );

  const tooltipValueFormatter = useCallback((value, name) => [measure.formatter(value), dimension.formatter(name)], [
    measure.formatter,
    dimension.formatter
  ]);
  const chartRef = useConsolidatedRef<any>(ref);

  const onItemLegendClick = useLegendItemClick(onLegendClick, () => measure.accessor);

  const onDataPointClickInternal = useCallback(
    (payload, dataIndex, event) => {
      if (payload && payload && typeof onDataPointClick === 'function') {
        onDataPointClick(
          enrichEventWithDetails(event, {
            value: payload.value,
            dataKey: payload.tooltipPayload?.[0]?.dataKey,
            name: payload.name,
            payload: payload.payload,
            dataIndex
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
      <PieChartLib
        margin={chartConfig.margin}
        className={typeof onDataPointClick === 'function' ? 'has-click-handler' : undefined}
      >
        <Pie
          onClick={onDataPointClickInternal}
          innerRadius={chartConfig.innerRadius}
          outerRadius={chartConfig.outerRadius}
          paddingAngle={chartConfig.paddingAngle}
          nameKey={dimension.accessor}
          dataKey={measure.accessor}
          data={dataset}
          animationBegin={0}
          isAnimationActive={noAnimation === false}
          labelLine={measure.hideDataLabel !== true}
          label={dataLabel}
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
        <Tooltip
          cursor={tooltipFillOpacity}
          formatter={tooltipValueFormatter}
          contentStyle={tooltipContentStyle}
          itemStyle={chartConfig.tooltipItemStyle}
          labelStyle={chartConfig.tooltipLabelStyle}
        />
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
