import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { Loader } from '@ui5/webcomponents-react/lib/Loader';
import React, { CSSProperties } from 'react';

const styles: CSSProperties = {
  position: 'absolute',
  top: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
  left: 0,
  right: 0,
  zIndex: 1
};

const DefaultLoadingComponent = ({ style }) => {
  return <Loader delay={500} style={{ ...styles, ...style }} />;
};

DefaultLoadingComponent.displayName = 'DefaultLoadingComponent';

export { DefaultLoadingComponent };
