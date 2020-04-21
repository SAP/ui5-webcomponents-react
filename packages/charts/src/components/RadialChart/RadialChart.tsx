import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { PieChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/PieChartPlaceholder';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, { CSSProperties, FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import { PolarAngleAxis, RadialBar, RadialBarChart as RadialBarChartLib } from 'recharts';

interface RadialChartProps extends CommonProps {
  value?: number;
  maxValue?: number;
  displayValue?: number | string;
  color?: CSSProperties['color'];
  onDataPointClick?: (event: CustomEvent<{ value: unknown; payload: unknown; xIndex: number }>) => void;
}

/**
 * <code>import { RadialChart } from '@ui5/webcomponents-react-charts/lib/next/RadialChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
const RadialChart: FC<RadialChartProps> = forwardRef((props: RadialChartProps, ref: Ref<any>) => {
  const { maxValue = 100, value, displayValue, onDataPointClick, color, style, className, tooltip, slot } = props;

  const range = useMemo(() => {
    return [0, maxValue];
  }, [maxValue]);

  const dataset = useMemo(() => [{ value }], [value]);

  const onDataPointClickInternal = useCallback(
    (payload, i, event) => {
      if (payload && onDataPointClick) {
        onDataPointClick(
          enrichEventWithDetails(event, {
            value: payload.value,
            payload: payload.payload,
            xIndex: i
          })
        );
      }
    },
    [onDataPointClick]
  );

  return (
    <ChartContainer
      dataset={dataset}
      ref={ref}
      Placeholder={PieChartPlaceholder}
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
    >
      <RadialBarChartLib
        margin={{ right: 30, left: 30, top: 30, bottom: 30 }}
        innerRadius="90%"
        outerRadius="100%"
        barSize={10}
        data={dataset}
        cx="50%"
        cy="50%"
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis type="number" domain={range} tick={false} />
        <RadialBar
          background={{ fill: ThemingParameters.sapContent_ImagePlaceholderBackground }}
          dataKey="value"
          cornerRadius="50%"
          fill={color ?? `var(--sapChart_OrderedColor_${(0 % 12) + 1})`}
          onClick={onDataPointClickInternal}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
          style={{ fontSize: ThemingParameters.sapFontHeader3Size, fill: ThemingParameters.sapTextColor }}
        >
          {displayValue}
        </text>
      </RadialBarChartLib>
    </ChartContainer>
  );
});

RadialChart.displayName = 'RadialChart';

export { RadialChart };
