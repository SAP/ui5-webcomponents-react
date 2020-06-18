import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React, { FC, forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';

export interface FormGroupProps {
  title?: string;
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
const FormGroup: FC<FormGroupProps> = forwardRef((props: FormGroupProps, ref: Ref<HTMLDivElement>) => {
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
});

FormGroup.displayName = 'FormGroup';

export { FormGroup };
