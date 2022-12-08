import { CssSizeVariables, ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

export interface FormGroupPropTypes {
  /**
   * Title of the FormGroup.
   */
  titleText: string;
  /**
   * Contents of the FormGroup. Please use only `FormItem` to keep the intended design.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormItem` in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

const useStyles = createUseStyles(
  {
    title: {
      gridColumn: 'span 12',
      display: 'flex',
      alignItems: 'center',
      height: CssSizeVariables.sapWcrFormGroupTitleHeight,
      lineHeight: CssSizeVariables.sapWcrFormGroupTitleHeight,
      fontFamily: ThemingParameters.sapFontHeaderFamily,
      color: ThemingParameters.sapGroup_TitleTextColor,
      fontSize: ThemingParameters.sapFontHeader6Size,
      fontWeight: 'bold',
      backgroundColor: ThemingParameters.sapGroup_TitleBackground,
      margin: 0,
      marginBlockStart: '1rem'
    },
    spacer: { height: '1rem', gridColumn: 'span 12' }
  },
  { name: 'FormGroup' }
);
/**
 * The `FormGroup` encapsulates `FormItems` into groups.
 * __Note:__ `FormGroup` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `heading` and `children`, especially no `className`, `style` or `ref`.
 */
const FormGroup: FC<FormGroupPropTypes> = (props: FormGroupPropTypes) => {
  const { titleText, children } = props;

  const classes = useStyles();

  return (
    <>
      <h6 className={classes.title} title={titleText} aria-label={titleText} data-component-name="FormGroupTitle">
        {titleText}
      </h6>
      {children}
      <span className={classes.spacer} />
    </>
  );
};

FormGroup.displayName = 'FormGroup';

export { FormGroup };
