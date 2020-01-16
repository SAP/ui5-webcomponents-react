import { Label } from '@ui5/webcomponents-react/lib/Label';
import React, { FC, forwardRef, ReactNode, ReactNodeArray, Ref, useContext, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { CurrentRange } from '../CurrentViewportRangeContext';
import { styles } from '../Form.jss';

export interface FormItemProps {
  labelText?: string;
  children: ReactNode | ReactNodeArray;
  type?: string;
}

const calculateWidth = (rate) => {
  return Math.floor((100 / 12) * rate) + '%';
};

const useStyles = createUseStyles<keyof ReturnType<typeof styles>>(styles, { name: 'FormItem' });

/**
 * <code>import { FormItem } from '@ui5/webcomponents-react/lib/FormItem';</code>
 */
const FormItem: FC<FormItemProps> = forwardRef((props: FormItemProps, ref: Ref<HTMLDivElement>) => {
  const { labelText, children } = props;

  const currentRange = useContext(CurrentRange);

  const classes = useStyles();
  const topDivClass = classes.formItemTopDiv;
  const labelClass = classes.formLabel;
  const elementClass = classes.formElement;

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
        display: display
      },
      labelStyle: {
        width: labelWidth,
        justifyContent: labelTextAlign
      },
      elementStyle: {
        width: elementWidth
      }
    };
  }, [children, currentRange]);

  return (
    <div ref={ref}>
      <div style={memoizedStyles.topDivStyle} className={topDivClass}>
        <Label style={memoizedStyles.labelStyle} className={labelClass}>
          {labelText ? labelText : ''}
        </Label>
        <div style={memoizedStyles.elementStyle} className={elementClass}>
          {children}
        </div>
      </div>
    </div>
  );
});

FormItem.defaultProps = {
  type: 'formItem'
};

export { FormItem };
