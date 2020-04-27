import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React from 'react';

let globalRotate = false;
export const XAxisTicksInternal = (props, rotate) => {
  const { x, y, payload, config } = props;
  globalRotate = !!rotate;
  const formattedValue = config.formatter(payload.value);
  const tickValue = rotate
    ? formattedValue.length > 10
      ? `${formattedValue.slice(0, 8)}...`
      : formattedValue
    : formattedValue;
  return (
    <g transform={`translate(${x},${y + 10})`}>
      <text
        fill={ThemingParameters.sapContent_LabelColor}
        transform={rotate ? 'rotate(-35)' : ''}
        textAnchor={rotate ? 'end' : 'middle'}
      >
        {`${tickValue}`}
      </text>
    </g>
  );
};

let previousX = 0;
let secondElementX = 0;
export const XAxisTicks = (props) => {
  const { payload } = props;
  const prevX = previousX;
  const index = payload.index ?? props.index;
  switch (index) {
    case 0:
      previousX = payload.coordinate;
      return XAxisTicksInternal(props, secondElementX - payload.coordinate <= 100);
    case 1:
      secondElementX = payload.coordinate;
      previousX = payload.coordinate;
      return XAxisTicksInternal(props, payload.coordinate - prevX <= 100);
    default:
      previousX = payload.coordinate;
      return XAxisTicksInternal(props, payload.coordinate - prevX <= 100);
  }
};
