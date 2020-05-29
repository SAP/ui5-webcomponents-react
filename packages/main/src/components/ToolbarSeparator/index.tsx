import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React from 'react';

const styles = {
  separator: {
    width: '0.0625rem',
    height: CssSizeVariables.sapWcrToolbarSeparatorHeight,
    background: ThemingParameters.sapToolbar_SeparatorColor
  }
};

const useStyles = createComponentStyles(styles, { name: 'ToolbarSeparator' });

const ToolbarSeparator = (props) => {
  const { style, className } = props;
  const classes = useStyles(styles);
  const separatorClasses = StyleClassHelper.of(classes.separator);
  if (className) {
    separatorClasses.put(className);
  }
  return <div style={style} className={separatorClasses.valueOf()} />;
};
ToolbarSeparator.displayName = 'ToolbarSeparator';
export { ToolbarSeparator };
