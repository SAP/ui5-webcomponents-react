import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { getTextWidth, truncateLongLabel } from '@ui5/webcomponents-react-charts/lib/Utils';
import React, { FC } from 'react';
import { IChartMeasure } from '../interfaces/IChartMeasure';

interface XAxisTicksProps {
  visibleTicksCount?: number;
  width?: number;
  x?: number;
  y?: number;
  payload?: any;
  config: IChartMeasure;
}

export const XAxisTicks: FC<XAxisTicksProps> = (props: XAxisTicksProps) => {
  const { x, y, payload, config, visibleTicksCount, width } = props;

  const bandWidth = width / visibleTicksCount;
  const shouldRotate = bandWidth <= 100;

  const formattedValue = config.formatter(payload.value);
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
    <g transform={`translate(${x},${y + 10})`}>
      <text
        fill={ThemingParameters.sapContent_LabelColor}
        transform={shouldRotate ? 'rotate(-35)' : undefined}
        textAnchor={shouldRotate ? 'end' : 'middle'}
      >
        {textToDisplay}
      </text>
    </g>
  );
};
