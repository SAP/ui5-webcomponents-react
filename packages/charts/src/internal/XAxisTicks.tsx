import { ThemingParameters } from '@ui5/webcomponents-react-base';
import type { IChartMeasure } from '../interfaces/IChartMeasure.js';
import { getTextWidth, truncateLongLabel } from './Utils.js';

interface XAxisTicksProps {
  visibleTicksCount?: number;
  width?: number;
  x?: number;
  y?: number;
  payload?: any;
  config: IChartMeasure;
  secondYAxisConfig?: {
    color: string;
  };
  tickFormatter?: (value: any, index: number) => string;
  index?: number;
}

export const XAxisTicks = (props: XAxisTicksProps) => {
  const { x, y, payload, config, visibleTicksCount, width, secondYAxisConfig, tickFormatter, index } = props;

  const bandWidth = width / visibleTicksCount;
  const shouldRotate = bandWidth <= 100;

  const formattedValue = tickFormatter?.(payload.value, index) ?? config.formatter(payload.value);
  let textToDisplay = formattedValue;
  if (shouldRotate) {
    textToDisplay = truncateLongLabel(formattedValue, 11);
  } else if (getTextWidth(formattedValue) > bandWidth) {
    for (let i = `${formattedValue}`.length; i > 0; i--) {
      textToDisplay = truncateLongLabel(formattedValue, i);
      if (getTextWidth(textToDisplay) <= bandWidth) {
        break;
      }
    }
  }

  return (
    <g style={{ direction: 'ltr' }} transform={`translate(${x},${y + (secondYAxisConfig ? 0 : 10)})`}>
      <text
        fill={secondYAxisConfig?.color ?? ThemingParameters.sapContent_LabelColor}
        transform={shouldRotate ? 'rotate(-35)' : undefined}
        textAnchor={shouldRotate ? 'end' : 'middle'}
      >
        {textToDisplay}
      </text>
    </g>
  );
};
