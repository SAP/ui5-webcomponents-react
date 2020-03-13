import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { withChartContainer } from '@ui5/webcomponents-react-charts/lib/withChartContainer';
import React, { FC, forwardRef, Ref, useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { InternalProps } from '../../interfaces/InternalProps';
import { useLegend, usePieLegendItemClickHandler } from '../../internal/ChartLegend';
import { getCssVariableValue } from '../../themes/Utils';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { useChartData } from '../../util/populateData';
import { formatDataLabel, formatTooltipLabelForPieCharts, useMergedConfig } from '../../util/Utils';
import { PieChartPlaceholder } from '../PieChart/Placeholder';

export interface DonutChartPropTypes extends ChartBaseProps {}

const DonutChartComponent = forwardRef((props: DonutChartPropTypes, ref: Ref<any>) => {
  const {
    labels,
    datasets,
    colors,
    categoryAxisFormatter,
    getDatasetAtEvent,
    getElementAtEvent,
    valueAxisFormatter,
    options,
    width,
    height,
    noLegend,
    legendRef
  } = props as DonutChartPropTypes & InternalProps;

  const theme: any = useTheme();
  const data = useChartData(labels, datasets, colors, theme.theme, true);

  const donutChartDefaultConfig = useMemo(() => {
    return {
      cutoutPercentage: 70,
      tooltips: {
        callbacks: {
          label: formatTooltipLabelForPieCharts(categoryAxisFormatter, valueAxisFormatter)
        }
      },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
          color: getCssVariableValue('--sapTextColor', '#32363a'),
          formatter: formatDataLabel(valueAxisFormatter)
        }
      }
    };
  }, [categoryAxisFormatter, valueAxisFormatter]);

  const mergedOptions = useMergedConfig(donutChartDefaultConfig, options);

  const chartRef = useConsolidatedRef<any>(ref);

  const handleLegendItemPress = usePieLegendItemClickHandler(chartRef, legendRef);
  useLegend(chartRef, legendRef, noLegend, handleLegendItemPress);

  return (
    <Pie
      ref={chartRef}
      data={data}
      height={height}
      width={width}
      options={mergedOptions}
      getDatasetAtEvent={getDatasetAtEvent}
      getElementAtEvent={getElementAtEvent}
    />
  );
});
// @ts-ignore
DonutChartComponent.LoadingPlaceholder = PieChartPlaceholder;
/**
 * <code>import { DonutChart } from '@ui5/webcomponents-react-charts/lib/DonutChart';</code>
 */
const DonutChart: FC<DonutChartPropTypes> = withChartContainer(DonutChartComponent);

DonutChart.defaultProps = {
  ...ChartBaseDefaultProps,
  colors: null
};
DonutChart.displayName = 'DonutChart';

export { DonutChart };
