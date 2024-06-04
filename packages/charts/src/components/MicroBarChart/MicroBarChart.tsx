'use client';

import { enrichEventWithDetails, ThemingParameters, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties } from 'react';
import { createElement, forwardRef, useCallback, useMemo } from 'react';
import { getValueByDataKey } from 'recharts/lib/util/ChartUtils.js';
import type { IChartBaseProps } from '../../interfaces/IChartBaseProps.js';
import type { IChartDimension } from '../../interfaces/IChartDimension.js';
import type { IChartMeasure } from '../../interfaces/IChartMeasure.js';
import { ChartContainer } from '../../internal/ChartContainer.js';
import { defaultFormatter } from '../../internal/defaults.js';
import { BarChartPlaceholder } from '../BarChart/Placeholder.js';
import { classNames, styleData } from './MicroBarChart.module.css.js';

interface MeasureConfig extends Omit<IChartMeasure, 'color'> {
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

export interface MicroBarChartProps
  extends Omit<
    IChartBaseProps,
    | 'noLegend'
    | 'onLegendClick'
    | 'noAnimation'
    | 'chartConfig'
    | 'children'
    | 'tooltipConfig'
    | 'onClick'
    | 'measures'
    | 'dimensions'
  > {
  /**
   * A object which contains the configuration of the dimension.
   *
   * **Required Properties**
   * - `accessor`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * **Optional Properties**
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   *
   */
  dimension: IChartDimension;
  /**
   * An array of config objects. Each object is defining one bar in the chart.
   *
   * **Required properties**
   * - `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.
   * Can also be a getter.
   *
   * **Optional properties**
   *
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `colors`: array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors
   * - `width`: bar width in pixel, defaults to `4`
   * - `opacity`: bar opacity, defaults to `1`
   * - `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.
   * - `DataLabel`: a custom component to be used for the data label
   */
  measure: MeasureConfig;
  /**
   * An optional number for the maxValue of the valueBar.
   * Default is the highest number of the corresponding accessor in the dataset.
   */
  maxValue?: number;
}

const resolveColor = (index: number, color = null) => {
  if (color) {
    return ThemingParameters[color] ?? color;
  }
  return ThemingParameters[`sapChart_Sequence_${(index % 11) + 1}`];
};

/**
 * The `MicroBarChart` compares different values of the same category to each other by displaying them in a compact way.
 */
const MicroBarChart = forwardRef<HTMLDivElement, MicroBarChartProps>((props, ref) => {
  const { loading, dataset, onDataPointClick, style, className, slot, ChartPlaceholder, ...rest } = props;

  useStylesheet(styleData, MicroBarChart.displayName);

  const dimension = useMemo<IChartDimension>(
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

  const maxValue = useMemo(() => {
    if (dataset) {
      const maxDatasetValue = Math.max(...dataset?.map((item) => getValueByDataKey(item, measure.accessor)));
      return props.maxValue ?? maxDatasetValue;
    }
    return 0;
  }, [dataset, measure, props.maxValue]);

  const barHeight = measure?.width ? `${measure.width}px` : '4px';

  const onBarClick = useCallback(
    (item, index) => (e) => {
      if (typeof onDataPointClick === 'function') {
        onDataPointClick(
          enrichEventWithDetails(e, {
            dataKey: measure.accessor,
            value: getValueByDataKey(item, measure.accessor),
            payload: item,
            dataIndex: index
          })
        );
      }
    },
    [measure.accessor, onDataPointClick]
  );
  const barContainerClasses = clsx(classNames.barContainer, onDataPointClick && classNames.barContainerActive);
  const { maxValue: _0, dimension: _1, measure: _2, ...propsWithoutOmitted } = rest;
  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      Placeholder={ChartPlaceholder ?? BarChartPlaceholder}
      ref={ref}
      style={style}
      className={className}
      slot={slot}
      resizeDebounce={250}
      {...propsWithoutOmitted}
    >
      <div className={classNames.container}>
        {dataset?.map((item, index) => {
          const dimensionValue = getValueByDataKey(item, dimension.accessor);
          const measureValue = getValueByDataKey(item, measure.accessor);
          const formattedDimension = dimension.formatter(dimensionValue);
          let formattedMeasure: any = '';
          if (!measure.hideDataLabel) {
            if (measure.DataLabel) {
              formattedMeasure = createElement(measure.DataLabel, {
                value: measureValue,
                config: measure,
                formattedValue: measure.formatter(measureValue)
              });
            } else {
              formattedMeasure = measure.formatter(measureValue);
            }
          }
          return (
            <div key={dimensionValue} className={barContainerClasses} onClick={onBarClick(item, index)}>
              <div className={classNames.labelContainer}>
                <span className={classNames.label} title={formattedDimension}>
                  {formattedDimension}
                </span>
                <span className={classNames.text} title={formattedMeasure}>
                  {measure.hideDataLabel ? '' : formattedMeasure}
                </span>
              </div>
              <div
                className={classNames.valueContainer}
                style={{
                  opacity: measure?.opacity ?? 1,
                  height: barHeight
                }}
              >
                <div
                  className={classNames.valueBar}
                  data-component-name="MicroBarChartValueBar"
                  style={{
                    width: `${(measureValue / maxValue) * 100}%`,
                    backgroundColor: resolveColor(index, measure?.colors?.[index])
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </ChartContainer>
  );
});

MicroBarChart.displayName = 'MicroBarChart';

export { MicroBarChart };
