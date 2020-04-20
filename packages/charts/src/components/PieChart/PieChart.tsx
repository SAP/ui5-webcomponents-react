import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { PieChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/PieChartPlaceholder';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { FC, forwardRef, Ref, useCallback, useMemo, ComponentType, CSSProperties } from 'react';
import { Cell, Label, Legend, Pie, PieChart as PieChartLib, Tooltip } from 'recharts';
import { usePieDataLabel } from '../../hooks/useLabelElements';
import { RechartBasePropsNew } from '../../interfaces/RechartBaseProps';

interface MeasureConfig {
  /**
   * A string containing the path to the dataset key this pie should display.
   * Supports object structures by using '`parent.child'`. Can also be a getter.
   */
  accessor: string;
  /**
   * This function will be called for each data label and allows you to format it according to your needs.
   */
  formatter?: (value: any) => string;
  /**
   * Flag whether the data labels should be hidden in the chart for this pie.
   */
  hideDataLabel?: boolean;
  /**
   * Use a custom component for the Data Label
   */
  DataLabel?: ComponentType<any>;
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

export interface PieChartProps extends RechartBasePropsNew {
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
    onDataPointClick,
    onLegendClick,
    centerLabel,
    chartConfig = {
      legendPosition: 'bottom',
      paddingAngle: 0,
      innerRadius: undefined
    },
    style,
    className,
    tooltip,
    slot
  } = props;
  const dimension: DimensionConfig = useMemo(
    () => ({
      formatter: (d) => d,
      ...props.dimension
    }),
    [props.dimension]
  );
  const measure: MeasureConfig = useMemo(
    () => ({
      formatter: (d) => d,
      ...props.measure
    }),
    [props.measure]
  );

  const tooltipValueFormatter = useCallback((value) => measure.formatter(value), [measure.formatter]);
  const chartRef = useConsolidatedRef<any>(ref);

  const onItemLegendClick = useLegendItemClick(onLegendClick, () => measure.accessor);

  const onDataPointClickInternal = useCallback(
    (payload, index, event) => {
      if (payload && onDataPointClick && payload.value) {
        onDataPointClick(
          enrichEventWithDetails(event, {
            value: payload.value,
            dataKey: measure.accessor,
            name: payload.name,
            payload: payload.payload
          })
        );
      }
    },
    [onDataPointClick]
  );

  const PieDataLabel = usePieDataLabel(!measure.hideDataLabel, measure.DataLabel, measure.formatter);

  const marginChart = chartConfig?.margin ?? { right: 30, left: 30, bottom: 30, top: 30 };

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
      <PieChartLib margin={marginChart}>
        <Pie
          innerRadius={chartConfig.innerRadius}
          paddingAngle={chartConfig.paddingAngle}
          nameKey={dimension.accessor}
          dataKey={measure.accessor}
          data={dataset}
          label={PieDataLabel}
          onClick={onDataPointClickInternal}
        >
          {centerLabel && <Label position={'center'}>{centerLabel}</Label>}
          {dataset &&
            dataset.map((data, index) => (
              <Cell
                key={index}
                name={dimension.formatter(data[dimension.accessor])}
                fill={measure.colors?.[index] ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              />
            ))}
        </Pie>
        <Tooltip cursor={{ fillOpacity: 0.3 }} formatter={tooltipValueFormatter} />
        {!noLegend && <Legend verticalAlign={chartConfig.legendPosition} onClick={onItemLegendClick} />}
      </PieChartLib>
    </ChartContainer>
  );
});

PieChart.displayName = 'PieChart';

export { PieChart };
