import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { PieChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/PieChartPlaceholder';
import React, { forwardRef, Ref, useCallback, useMemo } from 'react';
import { Legend, RadialBar, RadialBarChart as RadialBarChartLib, Tooltip, PolarAngleAxis } from 'recharts';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';

export interface RadialChartProps extends RechartBaseProps {}

const RadialChart = forwardRef((props: RadialChartProps, ref: Ref<any>) => {
  const {
    color,
    loading,
    labelKey = 'label',
    width = '100%',
    height = '500px',
    dataset,
    dataKeys,
    noLegend = false,
    onDataPointClick,
    chartConfig = {
      yAxisVisible: true,
      xAxisVisible: true,
      legendVisible: true,
      gridHorizontal: true,
      gridVertical: true,
      legendPosition: 'bottom',
      strokeWidth: 1,
      zoomingTool: false,
      strokeOpacity: 1,
      dataLabel: true,
      paddingAngle: 0,
      innerRadius: '20%',
      barSize: 100
    }
  } = props;

  useInitialize();

  const chartRef = useConsolidatedRef<any>(ref);

  const currentDataKeys =
    dataKeys ?? useMemo(() => (dataset ? Object.keys(dataset[0]).filter((key) => key !== labelKey) : []), [dataset]);

  const onDataPointClickInternal = useCallback(
    (e) => {
      if (e && onDataPointClick && e.value) {
        onDataPointClick({
          value: e.value,
          dataKey: Object.keys(e).filter((key) => e[key] === e.value && key !== 'value')[0],
          name: e.name,
          payload: e.payload
        });
      }
    },
    [onDataPointClick]
  );

  const circleSize = 300;

  return (
    <ChartContainer
      dataset={dataset}
      ref={chartRef}
      loading={loading}
      placeholder={PieChartPlaceholder}
      width={width}
      height={height}
    >
      <RadialBarChartLib
        innerRadius={chartConfig.innerRadius}
        outerRadius={100}
        barSize={10}
        data={dataset}
        style={{ fontSize: ThemingParameters.sapUiFontSmallSize }}
        cx={circleSize / 2}
        cy={circleSize / 2}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar
          background={{ fillOpacity: 0.05, fill: `var(--sapUiChartAccent(1}}` }}
          dataKey={'value'}
          cornerRadius={circleSize / 2}
          fill={color ?? `var(--sapUiChartAccent${(0 % 12) + 1})`}
        />
        <text
          x={circleSize / 2}
          y={circleSize / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          className="progress-label"
        >
          67%
        </text>
        <Tooltip />
      </RadialBarChartLib>
    </ChartContainer>
  );
});

RadialChart.displayName = 'RadialChart';

export { RadialChart };
