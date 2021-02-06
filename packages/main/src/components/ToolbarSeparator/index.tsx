import { useI18nBundle } from '@ui5/webcomponents-react-base/lib/hooks';
import { createUseStyles } from 'react-jss';
import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React from 'react';
import { SEPARATOR } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';

const styles = {
  separator: {
    width: '0.0625rem',
    height: CssSizeVariables.sapWcrToolbarSeparatorHeight,
    background: ThemingParameters.sapToolbar_SeparatorColor
  }
};

const useStyles = createUseStyles(styles, { name: 'ToolbarSeparator' });

const ToolbarSeparator = (props) => {
  const { style, className } = props;
  const classes = useStyles(styles);
  const separatorClasses = StyleClassHelper.of(classes.separator);
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  if (className) {
    separatorClasses.put(className);
  }
  return <div style={style} className={separatorClasses.valueOf()} aria-label={i18nBundle.getText(SEPARATOR)} />;
};
ToolbarSeparator.displayName = 'ToolbarSeparator';
export { ToolbarSeparator };
