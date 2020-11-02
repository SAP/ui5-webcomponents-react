import React from 'react';

import { spacing } from '@ui5/webcomponents-react-base';
import { Label as UI5Label } from '@ui5/webcomponents-react/lib/Label';

const Label = ({ style, ...props }) => {
  const innerStyle = {
    ...style,
    ...spacing.sapUiTinyMarginBottom,
    lineHeight: '20px',
  };

  return (
    <UI5Label data-testid="label-wrapper" wrap style={innerStyle} {...props}>
      {props.children}
    </UI5Label>
  );
};

export default Label;
