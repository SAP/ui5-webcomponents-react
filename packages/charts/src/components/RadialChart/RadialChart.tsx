import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';
import { ChartContainer } from '@ui5/webcomponents-react-charts/dist/components/ChartContainer';
import { PieChartPlaceholder } from '@ui5/webcomponents-react-charts/dist/PieChartPlaceholder';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, { CSSProperties, FC, forwardRef, Ref } from 'react';
import { PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts';
import { useOnClickInternal } from '../../hooks/useOnClickInternal';
import { useDeprecationNoticeForTooltip } from '../../internal/useDeprecationNotiveForTooltip';

export interface RadialChartProps extends Omit<CommonProps, 'onClick' | 'children' | 'onLegendClick'> {
  /**
   * The actual value which defines how much the ring is filled.
   */
  value?: number;
  /**
   * The maximum value of the ring. If `value` >= `maxValue`, the ring will be filled to 100%.
   *
   * Defaults to `100`.
   */
  maxValue?: number;
  /**
   * The value that should be displayed in the center of the `RadialChart`.
   */
  displayValue?: number | string;
  /**
   * A custom color you want to apply to the ring fill. This props accepts any valid CSS color or CSS variable.
   */
  color?: CSSProperties['color'];
  /**
   * `onDataPointClick` fires when the user clicks on the filled part of the ring.
   * @param event
   */
  onDataPointClick?: (event: CustomEvent<{ value: unknown; payload: unknown; dataIndex: number }>) => void;
  /**
   * Fired when clicked anywhere in the chart.
   */
  onClick?: (event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[] }>) => void;
  /**
   * `noAnimation` disables all chart animations when set to `true`.
   */
  noAnimation?: boolean;
  /**
   * Defines possible configurations of the chart.
   *
   * __Note:__ It is possible to overwrite internally used props. Please use use with caution!
   */
  chartConfig?: RadialChartProps;
}

const radialChartMargin = { right: 30, left: 30, top: 30, bottom: 30 };
const radialBarBackground = { fill: ThemingParameters.sapContent_ImagePlaceholderBackground };
const radialBarLabelStyle = { fontSize: ThemingParameters.sapFontHeader3Size, fill: ThemingParameters.sapTextColor };

/**
 * Displays a ring chart highlighting a current status.
 * The status can be emphasized by using the `color` prop.
 */
const RadialChart: FC<RadialChartProps> = forwardRef((props: RadialChartProps, ref: Ref<HTMLDivElement>) => {
  const {
    maxValue,
    value,
    displayValue,
    onDataPointClick,
    onClick,
    color,
    style,
    className,
    tooltip,
    slot,
    noAnimation,
    chartConfig,
    ...rest
  } = props;

  useDeprecationNoticeForTooltip('RadialChart', props.tooltip);

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
      tooltip={tooltip}
      slot={slot}
      resizeDebounce={250}
      style={style}
      {...rest}
    >
      <RadialBarChart
        onClick={onClickInternal}
        margin={radialChartMargin}
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
          isAnimationActive={noAnimation === false}
          background={radialBarBackground}
          dataKey="value"
          fill={color ?? ThemingParameters.sapChart_OrderedColor_1}
          // @ts-ignore
          onClick={onDataPointClickInternal}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
          style={radialBarLabelStyle}
        >
          {displayValue}
        </text>
      </RadialBarChart>
    </ChartContainer>
  );
});

RadialChart.defaultProps = {
  maxValue: 100,
  noAnimation: false
};

RadialChart.displayName = 'RadialChart';

export { RadialChart };
