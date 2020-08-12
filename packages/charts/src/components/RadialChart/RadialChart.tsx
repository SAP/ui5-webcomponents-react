import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/components/ChartContainer';
import { PieChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/PieChartPlaceholder';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, { CSSProperties, FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import { PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts';

export interface RadialChartProps extends CommonProps {
  value?: number;
  maxValue?: number;
  displayValue?: number | string;
  color?: CSSProperties['color'];
  onDataPointClick?: (event: CustomEvent<{ value: unknown; payload: unknown; dataIndex: number }>) => void;
}

const radialChartMargin = { right: 30, left: 30, top: 30, bottom: 30 };
const radialBarBackground = { fill: ThemingParameters.sapContent_ImagePlaceholderBackground };
const radialBarLabelStyle = { fontSize: ThemingParameters.sapFontHeader3Size, fill: ThemingParameters.sapTextColor };

const RadialChart: FC<RadialChartProps> = forwardRef((props: RadialChartProps, ref: Ref<HTMLDivElement>) => {
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
            dataIndex: i
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
      resizeDebounce={250}
    >
      <RadialBarChart
        margin={radialChartMargin}
        innerRadius="90%"
        outerRadius="100%"
        barSize={10}
        data={dataset}
        cx="50%"
        cy="50%"
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis type="number" domain={range as any} tick={false} />
        <RadialBar
          background={radialBarBackground}
          dataKey="value"
          cornerRadius="50%"
          fill={color ?? ThemingParameters.sapChart_OrderedColor_1}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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

RadialChart.displayName = 'RadialChart';

export { RadialChart };
