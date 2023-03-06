'use client';

import React, { cloneElement, CSSProperties, FC, isValidElement, ReactElement, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { WrappingType } from '../../enums';
import { Label, LabelPropTypes } from '../../webComponents/Label';
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
}

const CENTER_ALIGNED_CHILDREN = new Set(['CheckBox', 'RadioButton', 'Switch', 'RangeSlider', 'Slider']);

const useStyles = createUseStyles(
  {
    label: {
      gridColumnEnd: 'span var(--ui5wcr_form_label_span)',
      justifySelf: 'var(--ui5wcr_form_label_text_align)',
      textAlign: 'var(--ui5wcr_form_label_text_align)',
      '&[data-label-span="12"]': {
        justifySelf: 'start',
        paddingBlockEnd: '0.25rem'
      },
      '&:has(+ $content + [data-component-name="FormGroupTitle"])': {
        paddingBlockEnd: '1rem'
      },
      '&:has(+ $content > [ui5-checkbox])': {
        alignSelf: 'center'
      },
      '&:has(+ $content > [ui5-radio-button])': {
        alignSelf: 'center'
      },
      '&:has(+ $content > [ui5-switch])': {
        alignSelf: 'center'
      },
      '&:has(+ $content > [ui5-range-slider])': {
        alignSelf: 'center'
      },
      '&:has(+ $content > [ui5-slider])': {
        alignSelf: 'center'
      }
    },
    content: {
      display: 'flex',
      gridColumnEnd: 'span var(--ui5wcr_form_content_span)',
      '&[data-label-span="12"]': {
        gridColumnEnd: 'span 12',
        paddingBlockEnd: '0.625rem'
      },
      '&:has(+ [data-component-name="FormGroupTitle"])': {
        paddingBlockEnd: '1rem'
      }
    }
  },
  { name: 'FormItem' }
);

function FormItemLabel({ label, style }: { label: ReactNode; style?: CSSProperties }) {
  const classes = useStyles();
  const { labelSpan } = useFormContext();

  if (typeof label === 'string') {
    return (
      <Label className={classes.label} style={style} wrappingType={WrappingType.Normal} data-label-span={labelSpan}>
        {label ? `${label}:` : ''}
      </Label>
    );
  }

  if (isValidElement(label)) {
    const { showColon, wrappingType, className, style: labelStyle, children } = label.props;
    return cloneElement<LabelPropTypes & { 'data-label-span'?: number }>(
      label,
      {
        showColon: showColon ?? true,
        wrappingType: wrappingType ?? WrappingType.Normal,
        className: `${classes.label} ${className ?? ''}`,
        style: {
          ...style,
          ...(labelStyle || {})
        },
        'data-label-span': labelSpan
      },
      children ?? ''
    );
  }

  return null;
}

/**
 * A `FormItem` represents a row in a `Form`. A `FormItem` is a combination of one label and a component associated to this label.
 *
 * __Note__: The `FormItem` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `label` and `children`, especially no `className`, `style` or `ref`.
 */
const FormItem: FC<FormItemPropTypes> = (props: FormItemPropTypes) => {
  // eslint-disable-next-line react/prop-types
  const { label, children, columnIndex, rowIndex } = props as InternalProps;

  const classes = useStyles();
  const { labelSpan } = useFormContext();

  const gridColumnStart = (columnIndex ?? 0) * 12 + 1;

  const contentGridColumnStart =
    columnIndex != null ? (labelSpan === 12 ? gridColumnStart : gridColumnStart + (labelSpan ?? 0)) : undefined;

  const calculatedGridRowStart = labelSpan === 12 ? (rowIndex ?? 0) + 1 : rowIndex ?? 0;
  return (
    <>
      <FormItemLabel
        label={label}
        style={{
          gridColumnStart,
          gridRowStart: rowIndex ?? undefined,
          // TODO remove this line as soon as Firefox enables :has by default. https://caniuse.com/css-has
          alignSelf: CENTER_ALIGNED_CHILDREN.has((children as any)?.type?.displayName) ? 'center' : undefined
        }}
      />
      <div
        className={classes.content}
        style={{
          gridColumnStart: contentGridColumnStart,
          gridRowStart: rowIndex != null ? calculatedGridRowStart : undefined
        }}
        data-label-span={labelSpan}
      >
        {children}
      </div>
    </>
  );
};

FormItem.displayName = 'FormItem';

export { FormItem };
