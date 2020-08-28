import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/components/ChartContainer';
import { PieChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/PieChartPlaceholder';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { CSSProperties, FC, forwardRef, Ref, useCallback, useMemo, isValidElement, cloneElement } from 'react';
import { Cell, Label, Legend, Pie, PieChart as PieChartLib, Tooltip, Text, Sector } from 'recharts';
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

  const showActiveSegmentDataLabel = chartConfig.showActiveSegmentDataLabel ?? true;

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
      if (measure.hideDataLabel || chartConfig.activeSegment === props.index) return null;

      if (isValidElement(measure.DataLabel)) {
        return cloneElement(measure.DataLabel, { ...props, config: measure });
      }

      return (
        <Text {...props} alignmentBaseline="middle" className="recharts-pie-label-text">
          {measure.formatter(props.value)}
        </Text>
      );
    },
    [measure, chartConfig.activeSegment]
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

  const renderActiveShape = useCallback(
    (props) => {
      const RADIAN = Math.PI / 180;
      const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
      const sin = Math.sin(-RADIAN * midAngle);
      const cos = Math.cos(-RADIAN * midAngle);
      const sx = cx + (outerRadius + 10) * cos;
      const sy = cy + (outerRadius + 10) * sin;
      const mx = cx + (outerRadius + 30) * cos;
      const my = cy + (outerRadius + 30) * sin;
      const ex = mx + (cos >= 0 ? 1 : -1) * 22;
      const ey = my;
      const textAnchor = cos >= 0 ? 'start' : 'end';

      return (
        <g>
          <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
            {payload.name}
          </text>
          <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
          />
          <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={outerRadius + 6}
            outerRadius={outerRadius + 10}
            fill={fill}
          />
          {showActiveSegmentDataLabel && (
            <>
              <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
              <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
              <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill}>
                {measure.formatter(value)}
              </text>
              <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill={fill}>
                {`(${(percent * 100).toFixed(2)}%)`}
              </text>
            </>
          )}
        </g>
      );
    },
    [showActiveSegmentDataLabel]
  );

  const renderLabelLine = useCallback(
    (props) => {
      if (measure.hideDataLabel || chartConfig.activeSegment === props.index) return null;
      return Pie.renderLabelLineItem(undefined, props);
    },
    [chartConfig.activeSegment, measure.hideDataLabel]
  );

  const legendWrapperStyle = useMemo(() => {
    if (chartConfig.activeSegment != null && showActiveSegmentDataLabel) {
      if (chartConfig.legendPosition === 'bottom') {
        return {
          paddingTop: '30px'
        };
      } else if (chartConfig.legendPosition === 'top') {
        return {
          paddingBottom: '30px'
        };
      }
    }

    return null;
  }, [showActiveSegmentDataLabel, chartConfig.activeSegment, chartConfig.legendPosition]);

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
        {/*
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore*/}
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
          labelLine={renderLabelLine}
          label={dataLabel}
          activeIndex={chartConfig.activeSegment}
          activeShape={chartConfig.activeSegment != null && renderActiveShape}
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <Legend
            verticalAlign={chartConfig.legendPosition}
            align={chartConfig.legendHorizontalAlign}
            onClick={onItemLegendClick}
            wrapperStyle={legendWrapperStyle}
          />
        )}
      </PieChartLib>
    </ChartContainer>
  );
});

PieChart.displayName = 'PieChart';

export { PieChart };
