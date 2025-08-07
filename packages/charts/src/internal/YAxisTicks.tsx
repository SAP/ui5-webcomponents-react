import { ThemingParameters } from '@ui5/webcomponents-react-base';
import type { XAxisProps } from 'recharts';
import type { IChartDimension } from '../interfaces/IChartDimension.js';
import type { IChartMeasure } from '../interfaces/IChartMeasure.js';
import { defaultMaxYAxisWidth } from './defaults.js';
import { getTextWidth, truncateLongLabel } from './Utils.js';

interface YAxisTicksProps {
  x?: number;
  y?: number;
  payload?: any;
  formatter: IChartMeasure['formatter'] | IChartDimension['formatter'];
  secondYAxisConfig?: {
    color: string;
  };
  tickFormatter?: XAxisProps['tickFormatter'];
  index?: number;
}

export const YAxisTicks = (props: YAxisTicksProps) => {
  const { x, y, payload, formatter, secondYAxisConfig, tickFormatter, index } = props;

  const formattedValue = tickFormatter?.(payload.value, index) ?? formatter(payload.value);
  let textToDisplay = formattedValue;
  if (getTextWidth(formattedValue) > defaultMaxYAxisWidth) {
    for (let i = `${formattedValue}`.length; i > 0; i--) {
      textToDisplay = truncateLongLabel(formattedValue, i);
      if (getTextWidth(textToDisplay) <= defaultMaxYAxisWidth) {
        break;
      }
    }
  }

  return (
    <g transform={`translate(${x},${y + 3})`}>
      <text
        fill={secondYAxisConfig?.color ?? ThemingParameters.sapContent_LabelColor}
        textAnchor={secondYAxisConfig ? 'start' : 'end'}
      >
        {textToDisplay}
      </text>
    </g>
  );
};
