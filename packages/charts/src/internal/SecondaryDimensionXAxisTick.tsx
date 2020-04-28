import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React from 'react';

let globalRotate = false;
let lastRenderedTickValue = '';
export const SecondaryDimensionTicksXAxis = (props) => {
  const { x, y, payload, config } = props;
  let tickValue = config.formatter(payload.value);
  if (tickValue.length > 12) {
    // tickValue = `${payload.value.slice(0, 12)}...`;
  }
  if (lastRenderedTickValue === tickValue && payload.index !== 0) {
    return null;
  }
  lastRenderedTickValue = tickValue;
  const dy = globalRotate ? 40 : 0;

  return (
    <g transform={`translate(${x},${y + dy})`}>
      <text fill={ThemingParameters.sapTextColor}>|</text>
      <text
        fill={ThemingParameters.sapTextColor}
        transform={globalRotate ? 'rotate(-35)' : ''}
        textAnchor={globalRotate ? 'end' : 'middle'}
        y={15}
      >
        {`${tickValue}`}
      </text>
    </g>
  );
};
