import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React, { Children, FC, forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { styles } from '../Form.jss';

export interface FormGroupProps {
  title?: string;
  children: ReactNode | ReactNodeArray;
  type?: string;
}

const useStyles = createUseStyles<keyof ReturnType<typeof styles>>(styles, { name: 'FormGroup' });

/**
 * <code>import { FormGroup } from '@ui5/webcomponents-react/lib/FormGroup';</code>
 */
const FormGroup: FC<FormGroupProps> = forwardRef((props: FormGroupProps, ref: Ref<HTMLDivElement>) => {
  const { title, children } = props;

  const classes = useStyles();

  return (
    <div ref={ref}>
      {title && (
        <Title level={TitleLevel.H5} className={classes.formPaddingBottom}>
          {title}
        </Title>
      )}
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Start}
        alignItems={FlexBoxAlignItems.End}
        fitContainer
        direction={FlexBoxDirection.Column}
      >
        {Children.map(children, (child, index) => {
          return (
            <div key={index.toString()} className={classes.formGroupStyle}>
              {child}
            </div>
          );
        })}
      </FlexBox>
    </div>
  );
});

FormGroup.defaultProps = {
  type: 'formGroup'
};

export { FormGroup };
