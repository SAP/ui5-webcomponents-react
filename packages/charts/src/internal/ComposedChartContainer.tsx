import { ComposedBaseProps } from '../interfaces/ComposedBaseProps';
import React, { ComponentType, forwardRef, ReactNode, Ref, useCallback } from 'react';
import { ResponsiveContainer, ComposedChart, Legend, Tooltip, YAxis, XAxis, CartesianGrid, Brush } from 'recharts';
import { LineChartPlaceholder } from '..';
import { Loader } from '@ui5/webcomponents-react';
import { useTheme } from 'react-jss';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base';

export interface ComposedChartContainerProps extends ComposedBaseProps {
  children: ReactNode;
  placeHolder?: ComponentType<unknown>;
}

const ComposedChartContainer = forwardRef((props: ComposedChartContainerProps, ref: Ref<any>) => {
  const {
    height,
    width,
    placeHolder: PlaceHolderComponent,
    loading,
    dataSet,
    dataLabel,
    dataPointClickHandler,
    legendClickHandler,
    chartConfig = {
      yAxisVisible: true,
      xAxisVisible: true,
      legendVisible: true,
      gridStroke: 'white',
      gridHorizontal: true,
      gridVertical: true,
      yAxisId: '',
      yAxisColor: 'red',
      legendPosition: 'bottom'
    }
  } = props;

  const { parameters }: any = useTheme();
  const chartRef = useConsolidatedRef<any>(ref);

  const onItemLegendClick = useCallback(
    (e) => {
      if (legendClickHandler) {
        legendClickHandler({
          dataKey: e.dataKey,
          value: e.value,
          chartType: e.type,
          color: e.color,
          payload: e.payload
        });
      }
    },
    [dataSet]
  );

  const onDataPointClick = useCallback(
    (e) => {
      // Necessary because onItemLegendclick calls always onDataPointClick with e = null
      return e
        ? {
            e,
            index: e.activeTooltipIndex,
            label: e.activeLabel,
            values: e.activePayload
          }
        : e;
    },
    [dataSet]
  );

  return (
    <div>
      {dataSet ? (
        <div style={{ width, height }}>
          {loading && dataSet.length === 0 && <LineChartPlaceholder />}
          {loading && dataSet.length > 0 && <Loader style={{ marginBottom: '1vh' }} />}
          {dataSet.length > 0 && (
            <ResponsiveContainer>
              <ComposedChart style={{ fontSize: parameters.sapUiFontSmallSize }} data={dataSet}>
                <CartesianGrid
                  vertical={chartConfig.gridVertical}
                  horizontal={chartConfig.gridHorizontal}
                  stroke={chartConfig.gridStroke}
                />
                {chartConfig.xAxisVisible && <XAxis dataKey={dataLabel} />}
                {chartConfig.yAxisVisible && <YAxis />}
                {chartConfig.yAxisVisible && <YAxis type="number" orientation="right" yAxisId="left" />}
                <Tooltip />
                {chartConfig.legendVisible && (
                  <Legend onClick={onItemLegendClick} verticalAlign={chartConfig.legendPosition} />
                )}
                {props['children']}
                <Brush height={30} />
              </ComposedChart>
            </ResponsiveContainer>
          )}
        </div>
      ) : (
        <div style={{ width, height }}>
          <LineChartPlaceholder />
        </div>
      )}
    </div>
  );
});

export { ComposedChartContainer };
