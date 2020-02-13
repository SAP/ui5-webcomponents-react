import React from 'react';
import { Button } from '../../webComponents/Button';

function ToolbarSpacer(props) {
  const { style } = props;
  return <span style={style} />;
}
ToolbarSpacer.displayName = 'ToolbarSpacer';
export { ToolbarSpacer };
