import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
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

const useStyles = createComponentStyles(
  {
    title: {
      paddingBottom: '0.75rem',
      gridColumn: 'span 12'
    }
  },
  { name: 'FormGroup' }
);

/**
 * <code>import { FormGroup } from '@ui5/webcomponents-react/lib/FormGroup';</code>
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
