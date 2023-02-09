'use client';

import React, { cloneElement, CSSProperties, FC, isValidElement, ReactElement, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { FlexBoxAlignItems, FlexBoxDirection, WrappingType } from '../../enums';
import { Label, LabelPropTypes } from '../../webComponents/Label';
import { FlexBox } from '../FlexBox';
import { useFormContext } from '../Form/FormContext';

export interface FormItemPropTypes {
  /**
   * Label of the FormItem. Can be either a string or a `Label` component.
   */
  label?: string | ReactElement;
  /**
   * Content of the FormItem. Can be an arbitrary React Node.
   */
  children: ReactNode | ReactNode[];
}

interface InternalProps extends FormItemPropTypes {
  columnIndex?: number;
  rowIndex?: number;
  lastGroupItem?: boolean;
}

const CENTER_ALIGNED_CHILDREN = new Set(['CheckBox', 'RadioButton', 'Switch', 'RangeSlider', 'Slider']);

const useStyles = createUseStyles(
  {
    label: {
      gridColumnEnd: 'span var(--ui5wcr_form_label_span)',
      justifySelf: 'var(--ui5wcr_form_label_text_align)',
      textAlign: 'var(--ui5wcr_form_label_text_align)'
    },
    content: {
      display: 'flex',
      gridColumnEnd: 'span var(--ui5wcr_form_content_span)'
    }
  },
  { name: 'FormItem' }
);

function FormItemLabel({ label, style }: { label: ReactNode; style?: CSSProperties }) {
  const classes = useStyles();
  if (typeof label === 'string') {
    return (
      <Label className={classes.label} style={style} wrappingType={WrappingType.Normal}>
        {label ? `${label}:` : ''}
      </Label>
    );
  }

  if (isValidElement(label)) {
    const { showColon, wrappingType, className, style, children } = label.props;
    return cloneElement<LabelPropTypes>(
      label,
      {
        showColon: showColon ?? true,
        wrappingType: wrappingType ?? WrappingType.Normal,
        className: `${classes.label} ${className ?? ''}`,
        style: {
          gridColumnStart: style.gridColumnStart,
          gridRowStart: style.gridRowStart,
          ...(style || {})
        }
      },
      children ?? ''
    );
  }

  return null;
}

/**
 * The `FormItem` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `label` and `children`, especially no `className`, `style` or `ref`.
 */
const FormItem: FC<FormItemPropTypes> = (props: FormItemPropTypes) => {
  // eslint-disable-next-line react/prop-types
  const { label, children, columnIndex, rowIndex, lastGroupItem } = props as InternalProps;

  const classes = useStyles();
  const { labelSpan } = useFormContext();

  const gridColumnStart = (columnIndex ?? 0) * 12 + 1;
  const gridRowStart = rowIndex ?? 0;

  const contentGridColumnStart =
    columnIndex != null ? (labelSpan === 12 ? gridColumnStart : gridColumnStart + (labelSpan ?? 0)) : undefined;

  if (labelSpan === 12) {
    return (
      <FlexBox
        direction={FlexBoxDirection.Column}
        alignItems={FlexBoxAlignItems.Start}
        style={{
          gridColumnStart,
          gridRowStart,
          gridColumnEnd: 'span 12',
          placeItems: 'flex-start',
          paddingBottom: '0.625rem'
        }}
      >
        <FormItemLabel label={label} style={{ paddingBottom: '0.25rem' }} />
        {children}
      </FlexBox>
    );
  }

  const inlineLabelStyles = () => {
    const styles = { gridColumnStart, gridRowStart, paddingBottom: lastGroupItem ? '1rem' : 0 };
    if (CENTER_ALIGNED_CHILDREN.has((children as any)?.type?.displayName)) {
      return {
        ...styles,
        alignSelf: 'center'
      };
    }
    return styles;
  };
  const calculatedGridRowStart = labelSpan === 12 ? gridRowStart + 1 : gridRowStart;
  return (
    <>
      <FormItemLabel label={label} style={inlineLabelStyles()} />
      <div
        data-grid-column-start={contentGridColumnStart}
        data-grid-row-start={calculatedGridRowStart}
        className={classes.content}
        style={{
          gridColumnStart: contentGridColumnStart,
          gridRowStart: calculatedGridRowStart,
          paddingBottom: lastGroupItem ? '1rem' : 0
        }}
      >
        {children}
      </div>
    </>
  );
};

FormItem.displayName = 'FormItem';

export { FormItem };
