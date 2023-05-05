import React, { forwardRef } from 'react';
import type { CommonProps } from '../../interfaces/index.js';

export type ToolbarSpacerPropTypes = CommonProps;

const ToolbarSpacer = forwardRef<HTMLSpanElement, ToolbarSpacerPropTypes>((props, ref) => {
  return <span ref={ref} style={{ flexGrow: 1 }} className="spacer" {...props} />;
});

ToolbarSpacer.displayName = 'ToolbarSpacer';
export { ToolbarSpacer };
