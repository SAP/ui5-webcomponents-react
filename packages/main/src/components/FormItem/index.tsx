import { deprecationNotice } from '@ui5/webcomponents-react-base/lib/Utils';
import { CurrentViewportRangeContext } from '@ui5/webcomponents-react/lib/CurrentViewportRangeContext';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React, {
  cloneElement,
  FC,
  forwardRef,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  Ref,
  useContext,
  useMemo
} from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { styles } from '../Form/Form.jss';

export interface FormItemProps extends CommonProps {
  label?: string | ReactElement;
  /**
   * @deprecated use label instead
   */
  labelText?: string; // TODO remove on next major release
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
  const { label, labelText, children, tooltip, style, className, slot } = props;

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
        display,
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

  if (labelText) {
    deprecationNotice(
      'FormItem',
      `prop 'labelText' is deprecated and will be removed in the next major release. Please use 'label' instead.`
    );
  }
  const labelToRender = label ?? labelText;

  return (
    <div ref={ref} style={memoizedStyles.topDivStyle} className={classNames} title={tooltip} slot={slot}>
      {typeof labelToRender === 'string' ? (
        <Label style={memoizedStyles.labelStyle} className={classes.formLabel}>
          {labelToRender ? `${labelToRender}:` : ''}
        </Label>
      ) : (
        cloneElement(labelToRender, {
          style: { ...memoizedStyles.labelStyle, ...(labelToRender.props.style || {}) },
          className: `${classes.formLabel} ${labelToRender.props.className ?? ''}`,
          children: labelToRender.props.children ? `${labelToRender.props.children}:` : ''
        })
      )}

      <div style={memoizedStyles.elementStyle} className={classes.formElement}>
        {children}
      </div>
    </div>
  );
});

FormItem.displayName = 'FormItem';

export { FormItem };
