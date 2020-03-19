import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React from 'react';

type properties = { x: number; y: number; payload: object };

export const AxisTicks = (props: properties, formatter, unit = '', rotate) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y + 10})`}>
      <text
        fill={ThemingParameters.sapNeutralBorderColor}
        transform={rotate ? 'rotate(-45)' : ''}
        textAnchor={rotate ? 'end' : 'middle'}
      >
        {`${formatter(payload.value)}${unit}`}
      </text>
    </g>
  );
};

export const DataLabel = (props: properties, formatter, customElement) => {
  const { x, y, value } = props;
  const customElementClone =
    customElement && React.cloneElement(customElement, { children: formatter(value), textAnchor: 'middle' });
  return (
    <g transform={`translate(${x},${y - 5})`} fill={ThemingParameters.sapNeutralBorderColor}>
      {customElementClone}
    </g>
  );
};
