import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { BarChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/BarChartPlaceholder';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/components/ChartContainer';
import React, { CSSProperties, FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import { getValueByDataKey } from 'recharts/lib/util/ChartUtils';
import { IChartBaseProps } from '../../interfaces/IChartBaseProps';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { defaultFormatter } from '../../internal/defaults';

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

interface DimensionConfig {
  /**
   * A string containing the path to the dataset key this bar should display.
   * Supports object structures by using `'parent.child'`. Can also be a getter.
   */
  accessor: string | Function;
  /**
   * function will be called for each data label and allows you to format it according to your needs
   */
  formatter?: (value: any) => string;
}

export interface MicroBarChartProps
  extends Omit<IChartBaseProps, 'noLegend' | 'onLegendClick' | 'noAnimation' | 'chartConfig'> {
  dimension: DimensionConfig;
  /**
   * An array of config objects. Each object is defining one bar in the chart.
   *
   * <h4>Required properties</h4>
   * - `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.
   * Can also be a getter.
   *
   * <h4>Optional properties</h4>
   *
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `colors`: array of any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors
   * - `width`: bar width in pixel, defaults to `4`
   * - `opacity`: bar opacity, defaults to `1`
   * - `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.
   * - `DataLabel`: a custom component to be used for the data label
   */
  measure: MeasureConfig;
}

const resolveColor = (index, color = null) => {
  if (color) {
    return ThemingParameters[color] ?? color;
  }
  return ThemingParameters[`sapChart_Sequence_${(index + 1) % 11}`];
};

const MicroBarChartStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    fontFamily: ThemingParameters.sapFontFamily,
    fontWeight: 'normal',
    width: '100%',
    height: '100%',
    justifyContent: 'space-around'
  },
  barContainer: {
    cursor: 'auto'
  },
  barContainerActive: {
    '&:active': { opacity: '0.3 !important' },
    cursor: 'pointer'
  },
  labelContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  valueContainer: {
    display: 'flex',
    backgroundColor: ThemingParameters.sapContent_Placeholderloading_Background
  },
  valueBar: { height: '100%' },
  label: {
    color: ThemingParameters.sapContent_LabelColor,
    display: 'block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: ThemingParameters.sapFontSmallSize,
    maxWidth: '70%'
  },
  text: {
    paddingLeft: '6px',
    display: 'inline-block',
    overflow: 'hidden',
    fontSize: ThemingParameters.sapFontSmallSize,
    boxSizing: 'border-box',

    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: ThemingParameters.sapTextColor,
    textAlign: 'right'
  }
};

const useStyles = createComponentStyles(MicroBarChartStyles, { name: 'MicroBarChart' });

const MicroBarChart: FC<MicroBarChartProps> = forwardRef((props: MicroBarChartProps, ref: Ref<HTMLDivElement>) => {
  const { loading, dataset, onDataPointClick, style, className, tooltip, slot } = props;
  const classes = useStyles();

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

  const maxValue = dataset ? Math.max(...dataset?.map((item) => getValueByDataKey(item, measure.accessor))) : 0;
  const chartRef = useConsolidatedRef<any>(ref);

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
  const barContainerClasses = StyleClassHelper.of(classes.barContainer);
  if (onDataPointClick) {
    barContainerClasses.put(classes.barContainerActive);
  }

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
      resizeDebounce={250}
    >
      <div className={classes.container}>
        {dataset?.map((item, index) => {
          const dimensionValue = getValueByDataKey(item, dimension.accessor);
          const measureValue = getValueByDataKey(item, measure.accessor);
          const formattedDimension = dimension.formatter(dimensionValue);
          let formattedMeasure: any = '';
          if (!measure.hideDataLabel) {
            if (measure.DataLabel) {
              formattedMeasure = React.createElement(measure.DataLabel, {
                value: measureValue,
                config: measure,
                formattedValue: measure.formatter(measureValue)
              });
            } else {
              formattedMeasure = measure.formatter(measureValue);
            }
          }
          return (
            <div key={dimensionValue} className={barContainerClasses.className} onClick={onBarClick(item, index)}>
              <div className={classes.labelContainer}>
                <span className={classes.label} title={formattedDimension}>
                  {formattedDimension}
                </span>
                <span className={classes.text} title={formattedMeasure}>
                  {measure.hideDataLabel ? '' : formattedMeasure}
                </span>
              </div>
              <div
                className={classes.valueContainer}
                style={{
                  opacity: measure?.opacity ?? 1,
                  height: barHeight
                }}
              >
                <div
                  className={classes.valueBar}
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
