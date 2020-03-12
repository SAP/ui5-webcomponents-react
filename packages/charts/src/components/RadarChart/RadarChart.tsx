import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { PieChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/PieChartPlaceholder';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import { useResolveDataKeys } from '@ui5/webcomponents-react-charts/lib/useResolveDataKeys';
import React, { FC, forwardRef, Ref, useCallback } from 'react';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RadarChartLib,
  Tooltip
} from 'recharts';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { useDataLabel } from '../../hooks/useLabelElements';

type RadarChartProps = RechartBaseProps;

/**
 * <code>import { RadarChart } from '@ui5/webcomponents-react-charts/lib/next/RadarChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
const RadarChart: FC<RadarChartProps> = forwardRef((props: RadarChartProps, ref: Ref<any>) => {
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
    xAxisFormatter,
    yAxisFormatter = (el) => el,
    dataLabelFormatter = (d) => d,
    dataLabelCustomElement = undefined,
    onLegendClick,
    chartConfig = {
      legendPosition: 'bottom',
      dataLabel: false,
      polarGridType: 'circle'
    },
    style,
    className,
    tooltip,
    slot
  } = props;

  useInitialize();

  const chartRef = useConsolidatedRef<any>(ref);

  const currentDataKeys = useResolveDataKeys(dataKeys, labelKey, dataset);

  const onItemLegendClick = useLegendItemClick(onLegendClick);

  const onDataPointClickInternal = useCallback(
    (payload, eventOrIndex) => {
      if (eventOrIndex.value && onDataPointClick) {
        onDataPointClick(
          Event.of(null, event, {
            value: eventOrIndex.value,
            dataKey: eventOrIndex.dataKey,
            name: eventOrIndex.payload.label,
            xIndex: eventOrIndex.index,
            payload: eventOrIndex.payload
          })
        );
      }
    },
    [onDataPointClick]
  );

  const RadarDataLabel = useDataLabel(chartConfig.dataLabel, dataLabelCustomElement, dataLabelFormatter, false, false);

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
      <RadarChartLib data={dataset} margin={{ left: 30, right: 30, top: 40, bottom: 30 }}>
        <PolarGrid gridType={chartConfig.polarGridType} />
        <PolarAngleAxis
          dataKey={labelKey}
          tickFormatter={xAxisFormatter}
          tick={{
            fill: ThemingParameters.sapContent_LabelColor
          }}
        />
        <PolarRadiusAxis tickFormatter={yAxisFormatter} />
        {currentDataKeys.map((key, index) => (
          <Radar
            key={index}
            activeDot={{ onClick: onDataPointClickInternal }}
            name={key}
            dataKey={key}
            stroke={color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
            fill={color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
            fillOpacity={0.5}
            label={RadarDataLabel}
          />
        ))}
        <Tooltip />
        {!noLegend && <Legend verticalAlign={chartConfig.legendPosition} onClick={onItemLegendClick} />}
      </RadarChartLib>
    </ChartContainer>
  );
});

RadarChart.displayName = 'RadarChart';

export { RadarChart };
