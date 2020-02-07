import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { withChartContainer } from '@ui5/webcomponents-react-charts/lib/withChartContainer';
import bestContrast from 'get-best-contrast-color';
import React, { FC, forwardRef, Ref, useMemo } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { DEFAULT_OPTIONS } from '../../config';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { InternalProps } from '../../interfaces/InternalProps';
import { useLegend, useLegendItemClickHandler } from '../../internal/ChartLegend';
import { getCssVariableValue } from '../../themes/Utils';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { useChartData } from '../../util/populateData';
import {
  formatAxisCallback,
  formatDataLabel,
  formatTooltipLabel,
  getTextWidth,
  useMergedConfig
} from '../../util/Utils';
import { BarChartPlaceholder } from './Placeholder';

export interface BarChartPropTypes extends ChartBaseProps {}

const BarChartComponent = forwardRef((props: BarChartPropTypes, ref: Ref<any>) => {
  const {
    labels,
    datasets,
    options,
    categoryAxisFormatter,
    valueAxisFormatter,
    getDatasetAtEvent,
    getElementAtEvent,
    colors,
    width,
    height,
    noLegend,
    legendRef
  } = props as BarChartPropTypes & InternalProps;

  const theme: any = useTheme();
  const data = useChartData(labels, datasets, colors, theme.theme);

  const chartRef = useConsolidatedRef<any>(ref);

  const barChartDefaultConfig = useMemo(() => {
    return {
      scales: {
        xAxes: [
          {
            ...DEFAULT_OPTIONS.scales.yAxes[0],
            ticks: {
              callback: formatAxisCallback(valueAxisFormatter)
            }
          }
        ],
        yAxes: [
          {
            ...DEFAULT_OPTIONS.scales.xAxes[0],
            ticks: {
              callback: formatAxisCallback(categoryAxisFormatter)
            }
          }
        ]
      },
      tooltips: {
        callbacks: {
          label: formatTooltipLabel(categoryAxisFormatter, valueAxisFormatter, 'xLabel')
        }
      },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'start',
          clip: true,
          display: (context) => {
            const datasetMeta = context.chart.getDatasetMeta(context.datasetIndex);
            const dataMeta = datasetMeta.data[context.dataIndex];
            const width = dataMeta._view.x - dataMeta._view.base;
            const formattedValue = valueAxisFormatter(
              context.dataset.data[context.dataIndex],
              context.dataset,
              context
            );
            const textWidth = getTextWidth(formattedValue) + 4; // offset
            return width >= textWidth;
          },
          formatter: formatDataLabel(valueAxisFormatter),
          color: (context) => {
            const datasetMeta = context.chart.getDatasetMeta(context.datasetIndex);
            const dataMeta = datasetMeta.data[context.dataIndex];
            return bestContrast(dataMeta._view.backgroundColor, [
              getCssVariableValue('--sapUiBaseText', '#32363a'),
              getCssVariableValue('--sapUiContentContrastTextColor', '#fff')
            ]);
          }
        }
      }
    };
  }, [valueAxisFormatter, categoryAxisFormatter]);
  const mergedOptions = useMergedConfig(barChartDefaultConfig, options);

  const handleLegendItemPress = useLegendItemClickHandler(chartRef, legendRef);
  useLegend(chartRef, legendRef, noLegend, handleLegendItemPress);

  return (
    <HorizontalBar
      ref={chartRef}
      data={data}
      height={height as number}
      width={width as number}
      options={mergedOptions}
      getDatasetAtEvent={getDatasetAtEvent}
      getElementAtEvent={getElementAtEvent}
    />
  );
});

// @ts-ignore
BarChartComponent.LoadingPlaceholder = BarChartPlaceholder;
/**
 * <code>import { BarChart } from '@ui5/webcomponents-react-charts/lib/BarChart';</code>
 */
const BarChart: FC<BarChartPropTypes> = withChartContainer(BarChartComponent);

BarChart.defaultProps = {
  ...ChartBaseDefaultProps
};
BarChart.displayName = 'BarChart';

export { BarChart };
