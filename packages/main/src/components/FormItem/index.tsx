import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React, { cloneElement, FC, isValidElement, ReactElement, ReactNode, ReactNodeArray } from 'react';

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

interface InternalProps extends FormItemProps {
  columnIndex?: number;
  labelSpan?: number;
  rowIndex?: number;
}

const useStyles = createComponentStyles(
  {
    label: {
      gridColumnEnd: 'span var(--ui5wcr_form_label_span)',
      justifySelf: 'var(--ui5wcr_form_label_text_align)',
      textAlign: 'var(--ui5wcr_form_label_text_align)'
    },
    content: {
      gridColumnEnd: 'span var(--ui5wcr_form_content_span)'
    }
  },
  { name: 'FormItem' }
);

const FormItem: FC<FormItemProps> = (props: FormItemProps) => {
  const { label, children, columnIndex, rowIndex, labelSpan } = props as InternalProps;

  const classes = useStyles();

  const gridColumnStart = (columnIndex ?? 0) * 12 + 1;
  const gridRowStart = rowIndex ?? 0;

  const contentGridColumnStart =
    columnIndex != null ? (labelSpan === 12 ? gridColumnStart : gridColumnStart + (labelSpan ?? 0)) : undefined;

  return (
    <>
      {typeof label === 'string' && (
        <Label className={classes.label} style={{ gridColumnStart, gridRowStart }} wrap>
          {label ? `${label}:` : ''}
        </Label>
      )}
      {isValidElement(label) &&
        cloneElement(
          label,
          {
            wrap: label.props.wrap ?? true,
            className: `${classes.label} ${label.props.className ?? ''}`,
            style: { gridColumnStart, gridRowStart, ...(label.props.style || {}) }
          },
          label.props.children ? `${label.props.children}:` : ''
        )}

      <div className={classes.content} style={{ gridColumnStart: contentGridColumnStart, gridRowStart }}>
        {children}
      </div>
    </>
  );
};

FormItem.displayName = 'FormItem';

export { FormItem };
