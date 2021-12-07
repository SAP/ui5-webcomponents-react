import { useI18nBundle } from '@ui5/webcomponents-react-base/dist/hooks';
import { createUseStyles } from 'react-jss';
import { CssSizeVariables } from '@ui5/webcomponents-react-base/dist/CssSizeVariables';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import React, { forwardRef, Ref } from 'react';
import { SEPARATOR } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import clsx from 'clsx';

const styles = {
  separator: {
    width: '0.0625rem',
    height: CssSizeVariables.sapWcrToolbarSeparatorHeight,
    background: ThemingParameters.sapToolbar_SeparatorColor
  }
};

const useStyles = createUseStyles(styles, { name: 'ToolbarSeparator' });

export type ToolbarSeparatorPropTypes = CommonProps;

const ToolbarSeparator = forwardRef((props: ToolbarSeparatorPropTypes, ref: Ref<HTMLDivElement>) => {
  const { style, className, ...rest } = props;
  const classes = useStyles();
  const separatorClasses = clsx(classes.separator, className);
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  return (
    <div ref={ref} style={style} className={separatorClasses} aria-label={i18nBundle.getText(SEPARATOR)} {...rest} />
  );
});
ToolbarSeparator.displayName = 'ToolbarSeparator';
export { ToolbarSeparator };
