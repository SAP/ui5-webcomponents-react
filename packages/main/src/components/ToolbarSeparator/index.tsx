'use client';

import { CssSizeVariables, ThemingParameters, useI18nBundle } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import React, { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import { SEPARATOR } from '../../i18n/i18n-defaults.js';
import type { CommonProps } from '../../interfaces/index.js';

const styles = {
  separator: {
    width: '0.0625rem',
    height: CssSizeVariables.ui5WcrToolbarSeparatorHeight,
    background: ThemingParameters.sapToolbar_SeparatorColor
  }
};

const useStyles = createUseStyles(styles, { name: 'ToolbarSeparator' });

export type ToolbarSeparatorPropTypes = CommonProps;

const ToolbarSeparator = forwardRef<HTMLDivElement, ToolbarSeparatorPropTypes>((props, ref) => {
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
