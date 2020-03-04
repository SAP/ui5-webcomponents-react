import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { useResolveDataKeys } from '@ui5/webcomponents-react-charts/lib/useResolveDataKeys';
import React, { forwardRef, Ref, useCallback } from 'react';
import { Bar, BarChart as MicroBarChartLib, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { BarChartPlaceholder } from '../BarChart/Placeholder';

export interface MicroBarChartProps extends RechartBaseProps {}

const MicroBarChart = forwardRef((props: MicroBarChartProps, ref: Ref<any>) => {
  const {
    color,
    loading,
    labelKey = 'name',
    dataKeys,
    width = '100%',
    height = '17vh',
    dataset,
    onDataPointClick,
    chartConfig = {
      xAxisUnit: '',
      yAxisUnit: '',
      yAxisVisible: false,
      xAxisVisible: false,
      gridStroke: ThemingParameters.sapUiListTableFooterBorder,
      yAxisColor: ThemingParameters.sapNeutralBorderColor,
      barSize: 5,
      barGap: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      dataLabel: true
    }
  } = props;
  useInitialize();

  const chartRef = useConsolidatedRef<any>(ref);

  const currentDataKeys = useResolveDataKeys(dataKeys, labelKey, dataset);

  const onDataPointClickInternal = useCallback(
    (e, i) => {
      if (e && onDataPointClick) {
        onDataPointClick(
          Event.of(null, e, {
            dataKey: Object.keys(e).filter((key) =>
              e.value.length ? e[key] === e.value[1] - e.value[0] : e[key] === e.value && key !== 'value'
            )[0],
            value: e.value.length ? e.value[1] - e.value[0] : e.value,
            payload: e.payload,
            xIndex: i
          })
        );
      }
    },
    [onDataPointClick]
  );

  const TiltedAxisTick = (props) => {
    const { x, y, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={7} y={-10} textAnchor="begin" fill={ThemingParameters.sapContent_LabelColor}>
          {payload.value}
        </text>
      </g>
    );
  };

  const CustomizedLabel = (props) => {
    const { x, y, value } = props;

    const xText = chartRef.current ? chartRef.current.querySelector('.recharts-bar-rectangles').getBBox().width : 0;
    return (
      <g transform={`translate(${x},${y})`}>
        <text y={-7} dx={`${xText}px`} textAnchor={'end'} fill={ThemingParameters.sapContent_LabelColor}>
          {value}
        </text>
      </g>
    );
  };

  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      placeholder={BarChartPlaceholder}
      width={width}
      height={height}
      ref={chartRef}
    >
      <MicroBarChartLib
        margin={{ left: 20, right: 20, top: 20, bottom: 20 }}
        layout={'vertical'}
        data={dataset}
        barGap={chartConfig.barGap}
        label={
          chartConfig.dataLabel && {
            position: 'insideBottomRight',
            fill: ThemingParameters.sapContent_LabelColor
          }
        }
      >
        <XAxis hide={true} unit={chartConfig.xAxisUnit} type="number" />
        <YAxis
          unit={chartConfig.yAxisUnit}
          axisLine={chartConfig.yAxisVisible ?? false}
          tick={<TiltedAxisTick />}
          tickLine={false}
          type="category"
          dataKey={labelKey}
        />
        <Bar
          background={{ fillOpacity: 0.1, fill: `var(--sapUiChartAccent${(0 % 12) + 1})` }}
          strokeOpacity={chartConfig.strokeOpacity}
          fillOpacity={chartConfig.fillOpacity}
          label={{ content: <CustomizedLabel external={width} /> }}
          key={currentDataKeys[0]}
          name={currentDataKeys[0]}
          dataKey={currentDataKeys[0]}
          fill={color ?? `var(--sapUiChartAccent${(0 % 12) + 1})`}
          stroke={color ?? `var(--sapUiChartAccent${(0 % 12) + 1})`}
          barSize={chartConfig.barSize}
          onClick={onDataPointClickInternal}
        />
        <Tooltip cursor={{ fillOpacity: 0.3 }} />
      </MicroBarChartLib>
    </ChartContainer>
  );
});

export { MicroBarChart };
