import { CssSizeVariables, ThemingParameters } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import React, { type ElementType } from 'react';
import { createUseStyles } from 'react-jss';
import type { FormGroupPropTypes } from './index.js';

const useStyles = createUseStyles(
  {
    title: {
      gridColumn: '1 / span 12',
      display: 'flex',
      alignItems: 'center',
      height: CssSizeVariables.ui5WcrFormGroupTitleHeight,
      lineHeight: CssSizeVariables.ui5WcrFormGroupTitleHeight,
      fontFamily: ThemingParameters.sapFontHeaderFamily,
      color: ThemingParameters.sapGroup_TitleTextColor,
      fontSize: ThemingParameters.sapFontHeader6Size,
      fontWeight: 'bold',
      margin: 0,
      marginBlockStart: '1rem'
    }
  },
  { name: 'FormGroupTitle' }
);
export function FormGroupTitle({ as, className, titleText, style, ...rest }: Omit<FormGroupPropTypes, 'children'>) {
  const classes = useStyles();
  const CustomTag = as as ElementType;
  return (
    <CustomTag
      {...rest}
      className={clsx(classes.title, className)}
      title={titleText}
      aria-label={titleText}
      data-component-name="FormGroupTitle"
      style={style}
    >
      {titleText}
    </CustomTag>
  );
}
