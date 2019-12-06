import React, { Children, FC, forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import { FlexBox, FlexBoxAlignItems, FlexBoxDirection, FlexBoxJustifyContent, Title, TitleLevel } from '../../..';
import { styles } from '../Form.jss';

export interface FormGroupProps {
  id?: string;
  title?: string;
  children: ReactNode | ReactNodeArray;
  type?: string;
}

const FormGroup: FC<FormGroupProps> = forwardRef((props: FormGroupProps, ref: Ref<HTMLDivElement>) => {
  const { id, title, children } = props;

  return (
    <div id={id} ref={ref}>
      {title ? (
        <Title level={TitleLevel.H5} style={styles.formPaddingBottom}>
          {title}
        </Title>
      ) : null}
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Start}
        alignItems={FlexBoxAlignItems.End}
        fitContainer={true}
        direction={FlexBoxDirection.Column}
      >
        {Children.map(children, (child) => {
          return <div style={styles.formGroupStyle}>{child}</div>;
        })}
      </FlexBox>
    </div>
  );
});

FormGroup.defaultProps = {
  type: 'formGroup'
};

export { FormGroup };
