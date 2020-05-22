import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React, { Children, FC, forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';

export interface FormGroupProps extends CommonProps {
  title?: string;
  children: ReactNode | ReactNodeArray;
}

const useStyles = createComponentStyles(
  {
    title: {
      paddingBottom: '1em'
    },
    formGroup: {
      width: '100%',
      paddingTop: '0.25em',
      display: 'block'
    }
  },
  { name: 'FormGroup' }
);

/**
 * <code>import { FormGroup } from '@ui5/webcomponents-react/lib/FormGroup';</code>
 */
const FormGroup: FC<FormGroupProps> = forwardRef((props: FormGroupProps, ref: Ref<HTMLDivElement>) => {
  const { title, children, tooltip, style, className, slot } = props;

  const classes = useStyles();

  return (
    <div ref={ref} style={style} className={className} title={tooltip} slot={slot}>
      {title && (
        <Title level={TitleLevel.H5} className={classes.title}>
          {title}
        </Title>
      )}
      {Children.map(children, (child, index) => {
        return (
          <div key={index} className={classes.formGroup}>
            {child}
          </div>
        );
      })}
    </div>
  );
});

FormGroup.displayName = 'FormGroup';

export { FormGroup };
