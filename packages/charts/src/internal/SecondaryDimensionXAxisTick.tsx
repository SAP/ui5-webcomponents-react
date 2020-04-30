import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React from 'react';
import { truncateLongLabel } from '../util/Utils';

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
