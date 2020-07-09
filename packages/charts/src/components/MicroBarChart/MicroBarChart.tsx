import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/components/ChartContainer';
import React, { CSSProperties, FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import { IChartBaseProps } from '../../interfaces/IChartBaseProps';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { defaultFormatter } from '../../internal/defaults';
import { BarChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/BarChartPlaceholder';

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

export interface MicroBarChartProps extends IChartBaseProps {
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
    overflow: 'hidden'
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
    display: 'flex'
  },
  valueBar: { height: '4px' },
  fillUp: {
    height: '4px',
    backgroundColor: '#f1f2f3',
    flexGrow: 1
  },
  label: {
    color: 'hsl(0, 0%, 40%)',
    display: 'block',
    overflow: 'hidden',
    fontFamily: "'72', Arial, Helvetica, sans-serif",
    fontWeight: 'normal',
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
    fontFamily: "'72', Arial, Helvetica, sans-serif",
    fontWeight: 'normal',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    color: '#333333',
    textAlign: 'right'
  }
};

const useStyles = createComponentStyles(MicroBarChartStyles, { name: 'MicroBarChart' });

/**
 * <code>import { MicroBarChart } from '@ui5/webcomponents-react-charts/lib/MicroBarChart';</code>
 */
const MicroBarChart: FC<MicroBarChartProps> = forwardRef((props: MicroBarChartProps, ref: Ref<HTMLDivElement>) => {
  const { loading, dataset, onDataPointClick, style, className, tooltip, slot, chartConfig } = props;
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

  const maxValue = dataset ? Math.max(...dataset?.map((item) => item[measure.accessor])) : 0;
  const chartRef = useConsolidatedRef<any>(ref);

  const marginWithChartConfig = chartConfig?.margin
    ? {
        margin: `${chartConfig.margin.top}px ${chartConfig.margin.right}px ${chartConfig.margin.bottom}px ${chartConfig.margin.left}px`
      }
    : {};

  const barWidth = measure?.width ? `${measure.width}px` : 'auto';

  const onBarClick = useCallback(
    (item, index) => (e) => {
      if (typeof onDataPointClick === 'function') {
        onDataPointClick(
          enrichEventWithDetails(e, {
            dataKey: measure.accessor,
            value: item[measure.accessor],
            payload: item,
            dataIndex: index
          })
        );
      }
    },
    [measure.accessor]
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
      <div className={classes.container} style={marginWithChartConfig}>
        {dataset?.map((item, index) => {
          const formattedDimension = dimension.formatter(item[dimension.accessor]);
          const formattedMeasure = measure.formatter(item[measure.accessor]);
          return (
            <div
              key={item[dimension.accessor]}
              className={barContainerClasses.toString()}
              onClick={onBarClick(item, index)}
            >
              <div className={classes.labelContainer}>
                <span className={classes.label} title={formattedDimension}>
                  {formattedDimension}
                </span>
                <span className={classes.text} title={formattedMeasure}>
                  {formattedMeasure}
                </span>
              </div>
              <div
                className={classes.valueContainer}
                style={{
                  opacity: measure?.opacity ?? 1,
                  width: barWidth
                }}
              >
                <div
                  className={classes.valueBar}

                  style={{
                    width: `${(item[measure.accessor] / maxValue) * 100}%`,
                    backgroundColor: resolveColor(index, measure?.colors?.[index])
                  }}
                />
                <div className={classes.fillUp} />
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
