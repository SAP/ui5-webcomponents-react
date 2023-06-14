import { CssSizeVariables, ThemingParameters } from '@ui5/webcomponents-react-base';
import type { CSSProperties } from 'react';
import React from 'react';
import { createUseStyles } from 'react-jss';

interface FormGroupTitlePropTypes {
  titleText: string;

  style?: CSSProperties;
}

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
export function FormGroupTitle({ titleText, style }: FormGroupTitlePropTypes) {
  const classes = useStyles();
  return (
    <h6
      className={classes.title}
      title={titleText}
      aria-label={titleText}
      data-component-name="FormGroupTitle"
      style={style}
    >
      {titleText}
    </h6>
  );
}
