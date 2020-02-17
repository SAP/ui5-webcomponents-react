import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import React, { forwardRef, Ref, useMemo, useCallback } from 'react';
import { useInitialize } from '../../lib/initialize';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import { Label, Pie, PieChart as PieChartLib, Tooltip, Legend, Cell } from 'recharts';
import { useTheme } from 'react-jss';
import { PieChartPlaceholder } from './Placeholder';
import { ChartContainer } from '../../internal/ChartContainer';

export interface PieChartProps extends RechartBaseProps {}

const PieRechart = forwardRef((props: PieChartProps, ref: Ref<any>) => {
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
    onLegendClickHandler,
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

  const { parameters }: any = useTheme();
  const chartRef = useConsolidatedRef<any>(ref);

  const currentDataKeys =
    dataKeys ?? useMemo(() => (dataset ? Object.keys(dataset[0]).filter((key) => key !== labelKey) : []), [dataset]);

  const onItemLegendClick = useCallback(
    (e) => {
      if (onLegendClickHandler) {
        onLegendClickHandler({
          dataKey: currentDataKeys[0],
          value: e.value,
          chartType: e.type,
          color: e.color,
          payload: e.payload
        });
      }
    },
    [onLegendClickHandler]
  );

  const onDataPointClick = useCallback(
    (e) => {
      if (e && onDataPointClickHandler && e.value) {
        onDataPointClickHandler({
          value: e.value,
          dataKey: currentDataKeys[0],
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
      <PieChartLib style={{ fontSize: parameters.sapUiFontSmallSize }}>
        <Pie
          innerRadius={chartConfig.innerRadius}
          paddingAngle={chartConfig.paddingAngle}
          dataKey={currentDataKeys[0] ?? ''}
          data={dataset}
          label={chartConfig.dataLabel ?? false}
          onClick={onDataPointClick}
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

export { PieRechart };
