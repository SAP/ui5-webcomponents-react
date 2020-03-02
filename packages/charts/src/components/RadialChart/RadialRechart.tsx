import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { PieChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/PieChartPlaceholder';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, { CSSProperties, FC, forwardRef, Ref, useMemo } from 'react';
import { PolarAngleAxis, RadialBar, RadialBarChart as RadialBarChartLib } from 'recharts';

interface RadialChartProps extends CommonProps {
  value: number;
  maxValue?: number;
  displayValue: number | string;
  color?: CSSProperties['color'];
  height?: number | string;
  width?: number | string;
}

/**
 * <code>import { RadialChart } from '@ui5/webcomponents-react-charts/lib/next/RadialChart';</code>
 */
const RadialChart: FC<RadialChartProps> = forwardRef((props: RadialChartProps, ref: Ref<any>) => {
  const {
    maxValue = 100,
    value,
    displayValue,
    color,
    width = 300,
    height = 300,
    style,
    className,
    tooltip,
    slot
  } = props;

  useInitialize();

  const chartRef = useConsolidatedRef<any>(ref);

  const range = useMemo(() => {
    return [0, maxValue];
  }, [maxValue]);

  const dataset = useMemo(() => [{ value }], [value]);

  return (
    <ChartContainer
      dataset={dataset}
      ref={chartRef}
      placeholder={PieChartPlaceholder}
      width={width as any}
      height={height}
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
    >
      <RadialBarChartLib
        margin={{ left: 20, right: 20, top: 20, bottom: 20 }}
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
          fill={color ?? `var(--sapUiChartAccent${(0 % 12) + 1})`}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
          style={{ fontSize: ThemingParameters.sapMFontHeader3Size, fill: ThemingParameters.sapTextColor }}
        >
          {displayValue}
        </text>
      </RadialBarChartLib>
    </ChartContainer>
  );
});

RadialChart.displayName = 'RadialChart';

export { RadialChart };
