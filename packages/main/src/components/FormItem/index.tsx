import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
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
import { CommonProps } from '../../interfaces/CommonProps';

export interface FormItemProps extends CommonProps {
  label?: string | ReactElement;
  children: ReactNode | ReactNodeArray;
}

const calculateWidth = (rate) => {
  return Math.floor((100 / 12) * rate) + '%';
};

const useStyles = createComponentStyles(
  {
    formItem: {
      alignItems: 'center'
    },
    label: {
      paddingRight: '0.5em'
    },
    content: {
      display: 'block'
    }
  },
  { name: 'FormItem' }
);

/**
 * <code>import { FormItem } from '@ui5/webcomponents-react/lib/FormItem';</code>
 */
const FormItem: FC<FormItemProps> = forwardRef((props: FormItemProps, ref: Ref<HTMLDivElement>) => {
  const { label, children, tooltip, style, className, slot } = props;

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

  let classNames = `${classes.formItem}`;
  if (className) {
    classNames += ` ${className}`;
  }

  return (
    <div ref={ref} style={memoizedStyles.topDivStyle} className={classNames} title={tooltip} slot={slot}>
      {typeof label === 'string' ? (
        <Label style={memoizedStyles.labelStyle} className={classes.label}>
          {label ? `${label}:` : ''}
        </Label>
      ) : (
        cloneElement(label, {
          style: { ...memoizedStyles.labelStyle, ...(label.props.style || {}) },
          className: `${classes.label} ${label.props.className ?? ''}`,
          children: label.props.children ? `${label.props.children}:` : ''
        })
      )}

      <div style={memoizedStyles.elementStyle} className={classes.content}>
        {children}
      </div>
    </div>
  );
});

FormItem.displayName = 'FormItem';

export { FormItem };
