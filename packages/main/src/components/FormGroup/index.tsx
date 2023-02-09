import React, { FC, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { FormGroupTitle } from './FormGroupTitle';

export interface FormGroupPropTypes {
  /**
   * Title of the FormGroup.
   */
  titleText: string;
  /**
   * Content of the FormGroup.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormItem` in order to preserve the intended design.
   */
  children: ReactNode | ReactNode[];
}

const useStyles = createUseStyles(
  {
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
      <FormGroupTitle titleText={titleText} />
      {children}
      <span className={classes.spacer} />
    </>
  );
};

FormGroup.displayName = 'FormGroup';

export { FormGroup };
