import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { PieChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/PieChartPlaceholder';
import React, { forwardRef, Ref, useCallback, FC } from 'react';
import { Cell, Label, Legend, Pie, PieChart as PieChartLib, Tooltip } from 'recharts';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { useResolveDataKeys } from '@ui5/webcomponents-react-charts/lib/useResolveDataKeys';

type PieChartProps = RechartBaseProps;

/**
 * <code>import { PieChart } from '@ui5/webcomponents-react-charts/lib/next/PieChart';</code>
 */
const PieChart: FC<PieChartProps> = forwardRef((props: PieChartProps, ref: Ref<any>) => {
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
    },
    style,
    className,
    tooltip,
    slot
  } = props;

  useInitialize();

  const chartRef = useConsolidatedRef<any>(ref);

  const currentDataKeys = useResolveDataKeys(dataKeys, labelKey, dataset);

  const onItemLegendClick = useCallback(
    (e) => {
      if (onLegendClick) {
        onLegendClick(
          Event.of(null, e, {
            dataKey: currentDataKeys[0],
            value: e.value,
            chartType: e.type,
            color: e.color,
            payload: e.payload
          })
        );
      }
    },
    [onLegendClick]
  );

  const onDataPointClickInternal = useCallback(
    (e) => {
      if (e && onDataPointClick && e.value) {
        onDataPointClick(
          Event.of(null, e, {
            value: e.value,
            dataKey: currentDataKeys[0],
            name: e.name,
            payload: e.payload
          })
        );
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
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
    >
      <PieChartLib>
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
