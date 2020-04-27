import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React from 'react';

let globalRotate = false;

export const YAxisTicks = (props) => {
  const { x, y, payload, config } = props;
  const formattedValue = config.formatter(payload.value);
  const tickValue = formattedValue.length > 10 ? `${formattedValue.slice(0, 13)}...` : formattedValue;
  return (
    <g transform={`translate(${x},${y + 3})`}>
      <text fill={ThemingParameters.sapNeutralBorderColor} textAnchor={'end'}>
        {`${tickValue}`}
      </text>
    </g>
  );
};

export const SecondaryDimensionTicksXAxis = (props) => {
  const { x, y, payload } = props;
  const tickValue = payload.value.length > 12 && globalRotate ? payload.value.slice(0, 12) + '...' : payload.value;
  const dy = globalRotate ? 40 : 0;

  return (
    <g transform={`translate(${x},${y + dy})`}>
      <text fill={ThemingParameters.sapNeutralBorderColor}>|</text>
      <text
        fill={ThemingParameters.sapNeutralBorderColor}
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

export const DataLabel = (props, formatter, customElement) => {
  const { x, y, value } = props;
  const customElementClone =
    customElement && React.cloneElement(customElement, { children: formatter(value), textAnchor: 'middle' });
  return (
    <g transform={`translate(${x},${y - 5})`} fill={ThemingParameters.sapNeutralBorderColor}>
      {customElementClone}
    </g>
  );
};
