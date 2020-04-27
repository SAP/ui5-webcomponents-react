import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React from 'react';

let globalRotate = false;

export const SecondaryDimensionTicksXAxis = (props) => {
  const { x, y, payload } = props;
  const tickValue = payload.value.length > 12 && globalRotate ? payload.value.slice(0, 12) + '...' : payload.value;
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

export const SecondaryDimensionTicksYAxis = (props, yAxisFormatter) => {
  const { x, y, payload } = props;
  const tickValue = yAxisFormatter(payload.value);

  return (
    <g transform={`translate(${x - 35},${y})`}>
      <text fill={ThemingParameters.sapNeutralBorderColor} transform={'rotate(-35)'} textAnchor={'end'}>
        {`${tickValue}`}
      </text>
    </g>
  );
};
