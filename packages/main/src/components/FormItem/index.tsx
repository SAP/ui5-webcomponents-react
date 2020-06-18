import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React, { cloneElement, FC, forwardRef, ReactElement, ReactNode, ReactNodeArray, Ref } from 'react';

export interface FormItemProps {
  label?: string | ReactElement;
  children: ReactNode | ReactNodeArray;
}

const useStyles = createComponentStyles(
  {
    label: {
      gridColumnEnd: 'span var(--ui5wcr_form_label_span)',
      textAlign: 'var(--ui5wcr_form_label_text_align)'
    },
    content: {
      gridColumnEnd: 'span var(--ui5wcr_form_content_span)'
    }
  },
  { name: 'FormItem' }
);

/**
 * <code>import { FormItem } from '@ui5/webcomponents-react/lib/FormItem';</code>
 */
const FormItem: FC<FormItemProps> = forwardRef((props: FormItemProps, ref: Ref<HTMLDivElement>) => {
  const { label, children } = props;

  const classes = useStyles();

  return (
    <>
      {label != null && typeof label === 'string' && (
        <Label className={classes.label} style={{ gridColumnStart: props.columnIndex * 12 + 1 }}>
          {label ? `${label}:` : ''}
        </Label>
      )}
      {label != null &&
        typeof label !== 'string' &&
        cloneElement(label, {
          className: `${classes.label} ${label.props.className ?? ''}`,
          style: { gridColumnStart: props.columnIndex * 12 + 1, ...(label.props.style || {}) },
          children: label.props.children ? `${label.props.children}:` : ''
        })}

      <div className={classes.content}>{children}</div>
    </>
  );
});

FormItem.displayName = 'FormItem';

export { FormItem };
