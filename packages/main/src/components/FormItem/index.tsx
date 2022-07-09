import React, { cloneElement, CSSProperties, FC, isValidElement, ReactElement, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { FlexBoxAlignItems } from '../../enums/FlexBoxAlignItems';
import { FlexBoxDirection } from '../../enums/FlexBoxDirection';
import { WrappingType } from '../../enums/WrappingType';
import { Label, LabelPropTypes } from '../../webComponents/Label';
import { FlexBox } from '../FlexBox';

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
  labelSpan?: number;
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

const renderLabel = (label: ReactNode, classes: Record<'label' | 'content', string>, styles: CSSProperties) => {
  if (typeof label === 'string') {
    return (
      <Label className={classes.label} style={styles} wrappingType={WrappingType.Normal}>
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
          gridColumnStart: styles.gridColumnStart,
          gridRowStart: styles.gridRowStart,
          ...(style || {})
        }
      },
      children ?? ''
    );
  }

  return null;
};
/**
 * The `FormItem` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `label` and `children`, especially no `className`, `style` or `ref`.
 */
const FormItem: FC<FormItemPropTypes> = (props: FormItemPropTypes) => {
  // eslint-disable-next-line react/prop-types
  const { label, children, columnIndex, rowIndex, labelSpan, lastGroupItem } = props as InternalProps;

  const classes = useStyles();

  const gridColumnStart = (columnIndex ?? 0) * 12 + 1;
  const gridRowStart = rowIndex ?? 0;

  const contentGridColumnStart =
    columnIndex != null ? (labelSpan === 12 ? gridColumnStart : gridColumnStart + (labelSpan ?? 0)) : undefined;

  if (labelSpan === 12) {
    return (
      <FlexBox
        direction={FlexBoxDirection.Column}
        alignItems={FlexBoxAlignItems.Start}
        style={{ gridColumnStart, gridRowStart, gridColumnEnd: 'span 12', placeItems: 'flex-start' }}
      >
        {renderLabel(label, classes, {})}
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
      {renderLabel(label, classes, inlineLabelStyles())}
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
