'use client';

import type { CommonProps } from '@ui5/webcomponents-react';
import { enrichEventWithDetails, ThemingParameters } from '@ui5/webcomponents-react-base';
import type { CSSProperties } from 'react';
import { forwardRef } from 'react';
import { PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts';
import { useOnClickInternal } from '../../hooks/useOnClickInternal.js';
import { ChartContainer } from '../../internal/ChartContainer.js';
import { PieChartPlaceholder } from '../PieChart/Placeholder.js';

// todo remove this when recharts export the `CategoricalChartProps` interface themselves
interface RadialChartConfig {
  margin?: { top?: number; right?: number; bottom?: number; left?: number };
  innerRadius?: number | string;
  outerRadius?: number | string;

  [rest: string]: any;
}

export interface RadialChartProps extends Omit<CommonProps, 'onClick' | 'children' | 'onLegendClick'> {
  /**
   * The actual value which defines how much the ring is filled.
   */
  value?: number;
  /**
   * The maximum value of the ring. If `value` >= `maxValue`, the ring will be filled to 100%.
   *
   * __Default:__ `100`.
   */
  maxValue?: number;
  /**
   * The value that should be displayed in the center of the `RadialChart`.
   */
  displayValue?: number | string;
  /**
   * Font size of the `displayValue`.
   *
   * __Default values:__
   *
   * - fontSize: `1.25rem`
   * - fill: `ThemingParameters.sapTextColor`
   */
  displayValueStyle?: CSSProperties;
  /**
   * A custom color you want to apply to the ring fill. This props accepts any valid CSS color or CSS variable.
   */
  color?: CSSProperties['color'];
  /**
   * `onDataPointClick` fires when the user clicks on the filled part of the ring.
   */
  onDataPointClick?: (event: CustomEvent<{ value: number; payload: unknown; dataIndex: number }>) => void;
  /**
   * Fired when clicked anywhere in the chart.
   */
  onClick?: (
    event: CustomEvent<{
      payload: unknown;
      activePayloads: Record<string, unknown>[];
      dataIndex: number;
      value: number;
    }>
  ) => void;
  /**
   * `noAnimation` disables all chart animations when set to `true`.
   */
  noAnimation?: boolean;
  /**
   * Defines possible configurations of the internally used [RadialBarChart](https://recharts.org/en-US/api/RadialBarChart).
   *
   * __Note:__ It is possible to overwrite internally used props. Please use with caution!
   *
   * __Default values:__
   *
   * - margin: `{ top: 5, right: 5, bottom: 5, left: 5 }`
   * - innerRadius: `"90%"`
   * - outerRadius: `"100%"`
   */
  chartConfig?: RadialChartConfig;
}

const radialBarBackground = { fill: ThemingParameters.sapContent_ImagePlaceholderBackground };

const defaultDisplayValueStyles = {
  fontSize: '1.25rem',
  fill: ThemingParameters.sapTextColor,
  fontFamily: ThemingParameters.sapFontFamily
};
/**
 * Displays a ring chart highlighting a current status.
 * The status can be emphasized by using the `color` prop.
 */
const RadialChart = forwardRef<HTMLDivElement, RadialChartProps>((props, ref) => {
  const {
    maxValue = 100,
    value,
    displayValue,
    onDataPointClick,
    onClick,
    color,
    style,
    className,
    slot,
    noAnimation,
    chartConfig,
    displayValueStyle = defaultDisplayValueStyles,
    ...rest
  } = props;

  const range = [0, maxValue];
  const dataset = [{ value }];

  const onDataPointClickInternal = (payload, i, event) => {
    if (payload && onDataPointClick) {
      onDataPointClick(
        enrichEventWithDetails(event, {
          value: payload.value,
          payload: payload.payload,
          dataIndex: i
        })
      );
    }
  };

  const onClickInternal = useOnClickInternal(onClick);

  return (
    <ChartContainer
      dataset={dataset}
      ref={ref}
      Placeholder={PieChartPlaceholder}
      className={className}
      slot={slot}
      resizeDebounce={250}
      style={style}
      {...rest}
    >
      {/*@ts-expect-error: todo not yet compatible with React19*/}
      <RadialBarChart
        onClick={onClickInternal}
        innerRadius="90%"
        outerRadius="100%"
        barSize={10}
        data={dataset}
        cx="50%"
        cy="50%"
        startAngle={90}
        endAngle={-270}
        {...chartConfig}
      >
        <PolarAngleAxis type="number" domain={range} tick={false} />
        <RadialBar
          isAnimationActive={!noAnimation}
          background={radialBarBackground}
          dataKey="value"
          fill={color ?? ThemingParameters.sapChart_OrderedColor_1}
          onClick={onDataPointClickInternal}
        />
        {displayValue && (
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            style={{ ...defaultDisplayValueStyles, ...displayValueStyle }}
          >
            {displayValue}
          </text>
        )}
      </RadialBarChart>
    </ChartContainer>
  );
});

RadialChart.displayName = 'RadialChart';

export { RadialChart };
