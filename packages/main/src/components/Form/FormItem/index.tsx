import { CurrentViewportRangeContext } from '@ui5/webcomponents-react/lib/CurrentViewportRangeContext';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React, { FC, forwardRef, ReactNode, ReactNodeArray, Ref, useContext, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../../interfaces/CommonProps';
import { JSSTheme } from '../../../interfaces/JSSTheme';
import { styles } from '../Form.jss';

export interface FormItemProps extends CommonProps {
  labelText?: string;
  children: ReactNode | ReactNodeArray;
}

const calculateWidth = (rate) => {
  return Math.floor((100 / 12) * rate) + '%';
};

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'FormItem' });

/**
 * <code>import { FormItem } from '@ui5/webcomponents-react/lib/FormItem';</code>
 */
const FormItem: FC<FormItemProps> = forwardRef((props: FormItemProps, ref: Ref<HTMLDivElement>) => {
  const { labelText, children, tooltip, style, className, slot } = props;

  const currentRange = useContext(CurrentViewportRangeContext);

  const classes = useStyles();

  const memoizedStyles = useMemo(() => {
    let labelWidth;
    let labelTextAlign = 'flex-end';
    let display = 'flex';
    let elementWidth;

    switch (currentRange) {
      case 'Phone':
        labelWidth = '100%';
        elementWidth = '100%';
        display = 'block';
        labelTextAlign = 'flex-start';
        break;
      case 'Tablet':
        labelWidth = calculateWidth(2);
        elementWidth = calculateWidth(10);
        break;
      case 'Desktop':
      case 'LargeDesktop':
        labelWidth = calculateWidth(4);
        elementWidth = calculateWidth(8);
        break;
    }

    return {
      topDivStyle: {
        display: display,
        ...style
      },
      labelStyle: {
        width: labelWidth,
        justifyContent: labelTextAlign
      },
      elementStyle: {
        width: elementWidth
      }
    };
  }, [children, currentRange, style]);

  let classNames = `${classes.formItemTopDiv}`;
  if (className) {
    classNames += ` ${className}`;
  }

  return (
    <div ref={ref} style={memoizedStyles.topDivStyle} className={classNames} title={tooltip} slot={slot}>
      <Label style={memoizedStyles.labelStyle} className={classes.formLabel}>
        {labelText ? labelText : ''}
      </Label>
      <div style={memoizedStyles.elementStyle} className={classes.formElement}>
        {children}
      </div>
    </div>
  );
});

FormItem.displayName = 'FormItem';

export { FormItem };
