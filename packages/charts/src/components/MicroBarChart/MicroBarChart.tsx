import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { useResolveDataKeys } from '@ui5/webcomponents-react-charts/lib/useResolveDataKeys';
import React, { FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import { Bar, BarChart as MicroBarChartLib, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartBaseProps, RechartBasePropsNew } from '../../interfaces/RechartBaseProps';
import { BarChartPlaceholder } from '../BarChart/Placeholder';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { IChartDimension } from '../../interfaces/IChartDimension';

const dimensionDefaults = {
  formatter: (d) => d
};

const measureDefaults = {
  formatter: (d) => d,
  opacity: 1,
  width: 5
};

interface MeasureConfig extends IChartMeasure {
  /**
   * Bar Width
   * @default 30
   */
  width?: number;
  /**
   * Bar Opacity
   * @default 1
   */
  opacity?: number;
}

interface DimensionConfig extends IChartDimension {
  interval?: number;
}

interface MicroBarChartProps extends RechartBasePropsNew {
  dimension: DimensionConfig[];
  /**
   * An array of config objects. Each object is defining one bar in the chart.
   *
   * <h4>Required properties</h4>
   * - `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * <h4>Optional properties</h4>
   *
   * - `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.
   * - `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `hideDataLabel`: flag whether the data labels should be hidden in the chart for this bar.
   * - `DataLabel`: a custom component to be used for the data label
   * - `width`: bar width, defaults to `auto`
   * - `opacity`: bar opacity, defaults to `1`
   *
   */
  measure: MeasureConfig[];
}

/**
 * <code>import { MicroBarChart } from '@ui5/webcomponents-react-charts/lib/next/MicroBarChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
const MicroBarChart: FC<MicroBarChartProps> = forwardRef((props: MicroBarChartProps, ref: Ref<any>) => {
  const {
    loading,
    dataset,
    onDataPointClick,
    chartConfig = {
      yAxisVisible: false,
      xAxisVisible: false,
      gridStroke: ThemingParameters.sapList_TableFooterBorder,
      yAxisColor: ThemingParameters.sapNeutralBorderColor,
      barSize: 5,
      barGap: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      dataLabel: true
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

  const chartRef = useConsolidatedRef<any>(ref);

  const currentDataKeys = useResolveDataKeys(dataKeys, labelKey, dataset, undefined);

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

  const CustomizedLabel = (props) => {
    const { x, y, value } = props;

    const xText = chartRef.current ? chartRef.current.querySelector('.recharts-bar-rectangles').getBBox().width : 0;
    return (
      <g transform={`translate(${x},${y})`}>
        <text y={-7} dx={`${xText}px`} textAnchor={'end'} fill={ThemingParameters.sapContent_LabelColor}>
          {value}
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
        barGap={chartConfig.barGap}
        label={
          chartConfig.dataLabel && {
            position: 'insideBottomRight',
            fill: ThemingParameters.sapContent_LabelColor
          }
        }
      >
        <XAxis hide type="number" />
        <YAxis
          axisLine={chartConfig.yAxisVisible ?? false}
          tick={<TiltedAxisTick />}
          tickLine={false}
          type="category"
          dataKey={labelKey}
        />
        <Bar
          background={{ fillOpacity: 0.1, fill: `var(--sapUiChartAccent${(0 % 12) + 1})` }}
          strokeOpacity={chartConfig.strokeOpacity}
          fillOpacity={chartConfig.fillOpacity}
          label={{ content: <CustomizedLabel external={style.width} /> }}
          key={currentDataKeys[0]}
          name={labels?.[currentDataKeys[0]] || currentDataKeys[0]}
          dataKey={currentDataKeys[0]}
          fill={color ?? `var(--sapUiChartAccent${(0 % 12) + 1})`}
          stroke={color ?? `var(--sapUiChartAccent${(0 % 12) + 1})`}
          barSize={chartConfig.barSize}
          onClick={onDataPointClickInternal}
        />
        <Tooltip cursor={{ fillOpacity: 0.3 }} labelFormatter={valueFormatter} />
      </MicroBarChartLib>
    </ChartContainer>
  );
});

MicroBarChart.displayName = 'MicroBarChart';

export { MicroBarChart };
