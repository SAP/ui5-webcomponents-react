'use client';

import { useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import React, { forwardRef } from 'react';
import { SEPARATOR } from '../../i18n/i18n-defaults.js';
import type { CommonProps } from '../../types/index.js';
import { classNames, styleData } from './ToolbarSeparator.module.css.js';

export type ToolbarSeparatorPropTypes = CommonProps;

/**
 * Creates a visual separator between the preceding and succeeding `Toolbar` item.
 *
 * __Note:__ This component is only compatible with the `Toolbar` component and __not__ with `ToolbarV2`. If you're using `ToolbarV2`, please use `ToolbarSeparatorV2` instead.
 */
const ToolbarSeparator = forwardRef<HTMLDivElement, ToolbarSeparatorPropTypes>((props, ref) => {
  const { style, className, ...rest } = props;

  useStylesheet(styleData, ToolbarSeparator.displayName);
  const separatorClasses = clsx(classNames.separator, className);
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  return (
    <div ref={ref} style={style} className={separatorClasses} aria-label={i18nBundle.getText(SEPARATOR)} {...rest} />
  );
});
ToolbarSeparator.displayName = 'ToolbarSeparator';
export { ToolbarSeparator };
