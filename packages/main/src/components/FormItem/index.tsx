import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React, { cloneElement, FC, ReactElement, ReactNode, ReactNodeArray } from 'react';

export interface FormItemProps {
  /**
   * Label of the FormItem. Can be either a string or a `Label` component.
   */
  label?: string | ReactElement;
  /**
   * Content of the FormItem. Can be an arbitrary React Node.
   */
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
const FormItem: FC<FormItemProps> = (props: FormItemProps) => {
  const { label, children } = props;

  const classes = useStyles();

  // @ts-ignore
  const gridColumnStart = (props.columnIndex ?? 0) * 12 + 1;

  return (
    <>
      {label != null && typeof label === 'string' && (
        <Label className={classes.label} style={{ gridColumnStart }}>
          {label ? `${label}:` : ''}
        </Label>
      )}
      {label != null &&
        typeof label !== 'string' &&
        cloneElement(label, {
          className: `${classes.label} ${label.props.className ?? ''}`,
          style: { gridColumnStart, ...(label.props.style || {}) },
          children: label.props.children ? `${label.props.children}:` : ''
        })}

      <div className={classes.content}>{children}</div>
    </>
  );
};

FormItem.displayName = 'FormItem';

export { FormItem };
