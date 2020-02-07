import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React, { Children, FC, forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../../interfaces/CommonProps';
import { JSSTheme } from '../../../interfaces/JSSTheme';
import { styles } from '../Form.jss';

export interface FormGroupProps extends CommonProps {
  title?: string;
  children: ReactNode | ReactNodeArray;
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'FormGroup' });

/**
 * <code>import { FormGroup } from '@ui5/webcomponents-react/lib/FormGroup';</code>
 */
const FormGroup: FC<FormGroupProps> = forwardRef((props: FormGroupProps, ref: Ref<HTMLDivElement>) => {
  const { title, children, tooltip, style, className, slot } = props;

  const classes = useStyles();

  return (
    <div ref={ref} style={style} className={className} title={tooltip} slot={slot}>
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

FormGroup.displayName = 'FormGroup';

export { FormGroup };
