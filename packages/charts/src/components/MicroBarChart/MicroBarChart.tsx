import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import React, { CSSProperties, FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import { Bar, BarChart as MicroBarChartLib, Cell, Tooltip, XAxis, YAxis } from 'recharts';
import { BarChartPlaceholder } from '../BarChart/Placeholder';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { IChartMeasure } from '../../interfaces/IChartMeasure';

interface MeasureConfig extends Omit<IChartMeasure, 'accessor' | 'color'> {
  /**
   * A string containing the path to the dataset key this bar should display.
   * Supports object structures by using `'parent.child'`. Can also be a getter.
   */
  accessor: string;
  /**
   * array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors
   */
  colors?: CSSProperties['color'][];
  /**
   * Bar Opacity
   * @default 1
   */
  opacity?: number;
  /**
   * Bar Width
   * @default auto
   */
  width?: number;
}

interface DimensionConfig {
  /**
   * A string containing the path to the dataset key this bar should display.
   * Supports object structures by using `'parent.child'`. Can also be a getter.
   */
  accessor: string;
  /**
   * function will be called for each data label and allows you to format it according to your needs
   */
  formatter?: (value: any) => string;
}

export interface MicroBarChartProps extends RechartBaseProps {
  centerLabel?: string;
  dimension: DimensionConfig;
  /**
   * An array of config objects. Each object is defining one bar in the chart.
   *
   * <h4>Required properties</h4>
   * - `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.
   *
   * <h4>Optional properties</h4>
   *
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `colors`: array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors
   */
  measure: MeasureConfig;
}

const TiltedAxisTick = (props) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={7} y={-10} textAnchor="begin" fill={ThemingParameters.sapContent_LabelColor}>
        {payload.value}
      </text>
    </g>
  );
};

/**
 * <code>import { MicroBarChart } from '@ui5/webcomponents-react-charts/lib/next/MicroBarChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
const MicroBarChart: FC<MicroBarChartProps> = forwardRef((props: MicroBarChartProps, ref: Ref<any>) => {
  const { loading, dataset, onDataPointClick, style, className, tooltip, slot } = props;

  const chartRef = useConsolidatedRef<any>(ref);

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

  const onDataPointClickInternal = useCallback(
    (e, i) => {
      if (e && onDataPointClick) {
        onDataPointClick(
          enrichEventWithDetails(e, {
            dataKey: Object.keys(e).filter((key) =>
              e.value.length ? e[key] === e.value[1] - e.value[0] : e[key] === e.value && key !== 'value'
            )[0],
            value: e.value.length ? e.value[1] - e.value[0] : e.value,
            payload: e.payload,
            xIndex: i
          })
        );
      }
    },
    [onDataPointClick]
  );

  const CustomizedLabel = (properties) => {
    const { x, y, value } = properties;
    const xText = chartRef.current.clientWidth - 60;

    return (
      <g transform={`translate(${x},${y})`}>
        <text y={-7} dx={`${xText}px`} textAnchor={'end'} fill={ThemingParameters.sapContent_LabelColor}>
          {measure.formatter(value)}
        </text>
      </g>
    );
  };

  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      Placeholder={BarChartPlaceholder}
      ref={chartRef}
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
    >
      <MicroBarChartLib
        margin={{ left: -30, right: 30, top: 40, bottom: 30 }}
        layout={'vertical'}
        data={dataset}
        label={{ position: 'insideBottomRight', fill: ThemingParameters.sapContent_LabelColor }}
      >
        <XAxis hide type="number" />
        <YAxis
          axisLine={false}
          tick={<TiltedAxisTick />}
          tickLine={false}
          type="category"
          dataKey={dimension.accessor}
        />
        <Bar
          background={{ fill: ThemingParameters.sapNeutralBackground }}
          strokeOpacity={measure.opacity}
          fillOpacity={measure.opacity}
          label={{ content: <CustomizedLabel external={style.width} /> }}
          dataKey={measure.accessor}
          barSize={measure.width ?? 5}
          onClick={onDataPointClickInternal}
        >
          {dataset &&
            dataset.map((data, index) => (
              <Cell
                key={index}
                name={dimension.formatter(data[dimension.accessor])}
                fill={measure.colors?.[index] ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              />
            ))}
        </Bar>
        <Tooltip cursor={{ fillOpacity: 0.3 }} formatter={tooltipValueFormatter} />
      </MicroBarChartLib>
    </ChartContainer>
  );
});

MicroBarChart.displayName = 'MicroBarChart';

export { MicroBarChart };
