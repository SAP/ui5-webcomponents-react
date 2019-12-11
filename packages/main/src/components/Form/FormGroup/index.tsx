import React, { Children, FC, forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import styles from '../Form.jss';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { createUseStyles } from 'react-jss';
import { JSSTheme } from '../../../interfaces/JSSTheme';

export interface FormGroupProps {
  title?: string;
  children: ReactNode | ReactNodeArray;
  type?: string;
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'FormGroup' });

const FormGroup: FC<FormGroupProps> = forwardRef((props: FormGroupProps, ref: Ref<HTMLDivElement>) => {
  const { title, children } = props;

  const classes = useStyles();
  const formGroupStyle = useStyles(classes).formGroupStyle;

  return (
    <div ref={ref}>
      {title ? (
        <Title level={TitleLevel.H5} className={useStyles(classes).formPaddingBottom}>
          {title}
        </Title>
      ) : null}
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Start}
        alignItems={FlexBoxAlignItems.End}
        fitContainer={true}
        direction={FlexBoxDirection.Column}
      >
        {Children.map(children, (child, index) => {
          return (
            <div key={index.toString()} className={formGroupStyle}>
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
