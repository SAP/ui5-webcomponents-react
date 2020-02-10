import React, { forwardRef, Ref, useCallback } from 'react';
import { useInitialize } from '../../lib/initialize';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import { useTheme } from 'react-jss';
import { JSSTheme } from '@ui5/webcomponents-react/src/interfaces/JSSTheme';
import { LineChartPlaceholder } from './Placeholder';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { Line as LineRe } from 'recharts';
import { ComposedLineProps } from '../../interfaces/ComposedLineProps';
import { LineRechart } from './RechartLine';
import { ComposedChartContainer } from '../../internal/ComposedChartContainer';

export interface ComposedLineChartProps extends ComposedLineProps {}

// const CustomDataLabel = (props) => {
//   const { x, y, stroke, value, formatter } = props;
//   const { parameters } = useTheme() as JSSTheme;
//   return (
//     <text
//       x={x}
//       y={y}
//       dy={-8}
//       textAnchor="middle"
//       style={{
//         fontFamily: parameters.sapUiFontFamily,
//         fill: parameters.sapUiContentLabelColor,
//         fontSize: parameters.sapMFontSmallSize
//       }}
//     >
//       {value}
//     </text>
//   );
// };

const ComposedLineChart = forwardRef((props: ComposedLineChartProps, ref: Ref<any>) => {
  const { dataKey, color, colors, type, stroke, strokeWidth } = props as ComposedLineChartProps;

  useInitialize();

  const chartRef = useConsolidatedRef<any>(ref);

  // const onDataPointClick = useCallback(
  //   (e) => {
  //     if (e) {
  //       onDataClickHandler({
  //         e,
  //         index: e.activeTooltipIndex,
  //         label: e.activeLabel,
  //         values: e.activePayload
  //       });
  //     }
  //   },
  //   [dataKey]
  // );
  //
  // let currentDataKey;
  // const setDataKey = (e) => {
  //   currentDataKey = e.dataKey;
  // };

  return <LineRe dataKey={dataKey} stroke={stroke} strokeWidth={strokeWidth} />;
});

// @ts-ignore
ComposedLineChart.LoadingPlaceholder = LineChartPlaceholder;

// @ts-ignore
ComposedLineChart.defaultProps = {
  ...ChartBaseDefaultProps
};

ComposedLineChart.displayName = 'Line';

export { ComposedLineChart };
