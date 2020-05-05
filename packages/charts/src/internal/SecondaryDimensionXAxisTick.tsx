import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { truncateLongLabel } from '@ui5/webcomponents-react-charts/lib/Utils';
import React from 'react';

let lastRenderedTickValue = '';
export const SecondaryDimensionTicksXAxis = (props) => {
  const { x, y, payload, config, rotate } = props;

  const tickValue = config.formatter(payload.value);
  if (lastRenderedTickValue === tickValue && payload.index !== 0) {
    return null;
  }
  lastRenderedTickValue = tickValue;
  const dy = rotate ? 40 : 0;

  return (
    <g transform={`translate(${x},${y + dy})`}>
      <text fill={ThemingParameters.sapTextColor}>|</text>
      <text fill={ThemingParameters.sapTextColor} textAnchor="middle" y={15}>
        {`${truncateLongLabel(tickValue, 25)}`}
      </text>
    </g>
  );
};
