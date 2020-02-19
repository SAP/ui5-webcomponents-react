import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { PieChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/PieChartPlaceholder';
import React, { forwardRef, Ref, useCallback, useMemo } from 'react';
import { Cell, Label, Legend, Pie, PieChart as PieChartLib, Tooltip } from 'recharts';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';

export interface PieChartProps extends RechartBaseProps {}

const PieChart = forwardRef((props: PieChartProps, ref: Ref<any>) => {
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
    onLegendClick,
    chartConfig = {
      yAxisVisible: true,
      xAxisVisible: true,
      legendVisible: true,
      gridStroke: 'white',
      gridHorizontal: true,
      gridVertical: true,
      yAxisColor: 'black',
      legendPosition: 'bottom',
      strokeWidth: 1,
      zoomingTool: false,
      strokeOpacity: 1,
      dataLabel: false,
      paddingAngle: 0,
      innerRadius: undefined
    }
  } = props;

  useInitialize();

  const chartRef = useConsolidatedRef<any>(ref);

  const currentDataKeys =
    dataKeys ?? useMemo(() => (dataset ? Object.keys(dataset[0]).filter((key) => key !== labelKey) : []), [dataset]);

  const onItemLegendClick = useCallback(
    (e) => {
      if (onLegendClick) {
        onLegendClick({
          dataKey: currentDataKeys[0],
          value: e.value,
          chartType: e.type,
          color: e.color,
          payload: e.payload
        });
      }
    },
    [onLegendClick]
  );

  const onDataPointClickInternal = useCallback(
    (e) => {
      if (e && onDataPointClick && e.value) {
        onDataPointClick({
          value: e.value,
          dataKey: currentDataKeys[0],
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
      <PieChartLib style={{ fontSize: ThemingParameters.sapUiFontSmallSize }}>
        <Pie
          innerRadius={chartConfig.innerRadius}
          paddingAngle={chartConfig.paddingAngle}
          dataKey={currentDataKeys[0] ?? ''}
          data={dataset}
          label={chartConfig.dataLabel ?? false}
          onClick={onDataPointClickInternal}
        >
          {chartConfig.innerRadius && <Label position={'center'}>{currentDataKeys[0]}</Label>}
          {dataset &&
            dataset.map((data, index) => (
              <Cell key={index} fill={color ?? `var(--sapUiChartAccent${(index % 12) + 1})`} />
            ))}
        </Pie>
        <Tooltip />
        {!noLegend && <Legend onClick={onItemLegendClick} />}{' '}
      </PieChartLib>
    </ChartContainer>
  );
});

PieChart.displayName = 'PieChart';

export { PieChart };
