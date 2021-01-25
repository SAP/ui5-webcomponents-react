import { createUseStyles } from 'react-jss';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React, { FC, ReactNode, ReactNodeArray } from 'react';

export interface FormGroupProps {
  /**
   * Title of the FormGroup
   */
  title?: string;
  /**
   * Contents of the FormGroup. Please use only `FormItem` to keep the intended design.
   */
  children: ReactNode | ReactNodeArray;
}

const useStyles = createUseStyles(
  {
    title: {
      paddingBottom: '0.75rem',
      gridColumn: 'span 12'
    }
  },
  { name: 'FormGroup' }
);
/**
 * The `FormGroup` encapsulates `FormItems` into groups.
 * __Note:__ `FormGroup` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `title` and `children`, especially no `className`, `style` or `ref`.
 */
const FormGroup: FC<FormGroupProps> = (props: FormGroupProps) => {
  const { title, children } = props;

  const classes = useStyles();

  return (
    <>
      {title && (
        <Title level={TitleLevel.H5} className={classes.title}>
          {title}
        </Title>
      )}
      {children}
    </>
  );
};

FormGroup.displayName = 'FormGroup';

export { FormGroup };
