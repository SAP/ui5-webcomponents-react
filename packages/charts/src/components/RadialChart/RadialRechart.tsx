import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { PieChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/PieChartPlaceholder';
import React, { forwardRef, Ref, useCallback, useMemo } from 'react';
import { Legend, RadialBar, RadialBarChart as RadialBarChartLib, Tooltip } from 'recharts';
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
        barSize={chartConfig.barSize}
        data={dataset}
        style={{ fontSize: ThemingParameters.sapUiFontSmallSize }}
      >
        {currentDataKeys.map((key, index) => (
          <RadialBar
            key={index}
            background={{ fillOpacity: 0.05, fill: `var(--sapUiChartAccent${(index % 12) + 1})` }}
            dataKey={key}
            fill={color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
            label={chartConfig.dataLabel ? { position: 'insideEnd' } : false}
            onClick={onDataPointClickInternal}
          />
        ))}
        {noLegend && <Legend />}
        <Tooltip />
      </RadialBarChartLib>
    </ChartContainer>
  );
});

RadialChart.displayName = 'RadialChart';

export { RadialChart };
