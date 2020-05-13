import { deprecationNotice } from '@ui5/webcomponents-react-base/lib/Utils';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { withChartContainer } from '@ui5/webcomponents-react-charts/lib/withChartContainer';
import React, { FC, forwardRef, Ref, useEffect, useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { InternalProps } from '../../interfaces/InternalProps';
import { useLegend, usePieLegendItemClickHandler } from '../../internal/ChartLegend';
import { getCssVariableValue } from '../../themes/Utils';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { useChartData } from '../../util/populateData';
import { formatDataLabel, formatTooltipLabelForPieCharts, useMergedConfig } from '../../util/utils_deprecated';
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

  useEffect(() => {
    deprecationNotice(
      'DonutChart',
      "This component is deprecated and will be removed with v0.10.0. Please use '@ui5/webcomponents-react-charts/lib/next/DonutChart' instead."
    );
  }, []);

  const theme = getTheme();
  const data = useChartData(labels, datasets, colors, theme, true);

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
 * <br />
 * <b>This component is deprecated and will be removed with v0.10.0. Please use [this component](https://sap.github.io/ui5-webcomponents-react/?path=/docs/charts-donutchart) instead.</b>
 */
const DonutChart: FC<DonutChartPropTypes> = withChartContainer(DonutChartComponent);

DonutChart.defaultProps = {
  ...ChartBaseDefaultProps,
  colors: null
};
DonutChart.displayName = 'DonutChart';

export { DonutChart };
