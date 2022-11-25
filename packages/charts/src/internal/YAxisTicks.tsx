import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React from 'react';
import { IChartMeasure } from '../interfaces/IChartMeasure';
import { defaultMaxYAxisWidth } from './defaults';
import { getTextWidth, truncateLongLabel } from './Utils';

interface YAxisTicksProps {
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

export const YAxisTicks = (props: YAxisTicksProps) => {
  const { x, y, payload, config, secondYAxisConfig, tickFormatter, index } = props;

  const formattedValue = tickFormatter?.(payload.value, index) ?? config.formatter(payload.value);
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
