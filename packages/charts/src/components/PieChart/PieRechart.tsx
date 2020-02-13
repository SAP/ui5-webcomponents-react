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
    width = '50%',
    height = '500px',
    dataset,
    noLegend = false,
    dataPointClickHandler,
    legendClickHandler,
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
  } = props as PieChartProps;

  useInitialize();

  const { parameters }: any = useTheme();
  const chartRef = useConsolidatedRef<any>(ref);

  const dataKeys = useMemo(() => (dataset ? Object.keys(dataset[0]).filter((key) => key !== labelKey) : []), [dataset]);

  const onItemLegendClick = useCallback(
    (e) => {
      if (legendClickHandler) {
        legendClickHandler({
          dataKey: dataKeys[0],
          value: e.value,
          chartType: e.type,
          color: e.color,
          payload: e.payload
        });
      }
    },
    [dataset]
  );

  const onDataPointClick = useCallback(
    (e) => {
      if (e && dataPointClickHandler && e.value) {
        dataPointClickHandler({
          value: e.value,
          dataKey: dataKeys[0],
          xValue: e.name,
          payload: e.payload
        });
      }
    },
    [dataset]
  );

  return (
    <ChartContainer
      dataset={dataset}
      ref={ref}
      loading={loading}
      placeholder={PieChartPlaceholder}
      width={width}
      height={height}
    >
      <PieChartLib style={{ fontSize: parameters.sapUiFontSmallSize }}>
        <Pie
          innerRadius={chartConfig.innerRadius}
          paddingAngle={chartConfig.paddingAngle}
          dataKey={dataKeys[0]}
          data={dataset}
          label={chartConfig.dataLabel ? chartConfig.dataLabel : false}
          onClick={onDataPointClick}
        >
          {chartConfig.innerRadius && <Label position={'center'}>{dataKeys[0].toUpperCase()}</Label>}
          {dataset &&
            dataset.map((data, index) => (
              <Cell key={index} fill={color ? color : `var(--sapUiChartAccent${(index % 12) + 1})`} />
            ))}
        </Pie>
        <Tooltip />
        {!noLegend && <Legend onClick={onItemLegendClick} />}{' '}
      </PieChartLib>
    </ChartContainer>
  );
});

export { PieRechart };
