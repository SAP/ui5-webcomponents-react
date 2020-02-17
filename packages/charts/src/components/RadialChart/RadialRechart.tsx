import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import React, { forwardRef, Ref, useMemo, useCallback } from 'react';
import { useInitialize } from '../../lib/initialize';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import { RadialBarChart as RadialBarChartLib, RadialBar, Tooltip, Legend } from 'recharts';
import { useTheme } from 'react-jss';
import { PieChartPlaceholder } from '../../';
import { ChartContainer } from '../../internal/ChartContainer';

export interface RadialChartProps extends RechartBaseProps {}

const RadialRechart = forwardRef((props: RadialChartProps, ref: Ref<any>) => {
  const {
    color,
    loading,
    labelKey = 'label',
    width = '100%',
    height = '500px',
    dataset,
    dataKeys,
    noLegend = false,
    onDataPointClickHandler,
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

  const { parameters }: any = useTheme();
  const chartRef = useConsolidatedRef<any>(ref);

  const currentDataKeys =
    dataKeys ?? useMemo(() => (dataset ? Object.keys(dataset[0]).filter((key) => key !== labelKey) : []), [dataset]);

  const onDataPointClick = useCallback(
    (e) => {
      if (e && onDataPointClickHandler && e.value) {
        onDataPointClickHandler({
          value: e.value,
          dataKey: Object.keys(e).filter((key) => e[key] === e.value && key !== 'value')[0],
          name: e.name,
          payload: e.payload
        });
      }
    },
    [onDataPointClickHandler]
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
        style={{ fontSize: parameters.sapUiFontSmallSize }}
      >
        {currentDataKeys.map((key, index) => (
          <RadialBar
            key={index}
            background={{ fillOpacity: 0.05, fill: `var(--sapUiChartAccent${(index % 12) + 1})` }}
            dataKey={key}
            fill={color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
            label={chartConfig.dataLabel ? { position: 'insideEnd' } : false}
            onClick={onDataPointClick}
          />
        ))}
        {noLegend && <Legend />}
        <Tooltip />
      </RadialBarChartLib>
    </ChartContainer>
  );
});

export { RadialRechart };
