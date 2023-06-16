'use client';

import { useIsomorphicId } from '@ui5/webcomponents-react-base';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import React, { cloneElement, Fragment, isValidElement, useContext, useEffect, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { WrappingType } from '../../enums/index.js';
import { flattenFragments } from '../../internal/utils.js';
import type { LabelPropTypes } from '../../webComponents/Label/index.js';
import { Label } from '../../webComponents/Label/index.js';
import { FormContext, useFormContext, useFormGroupContext } from '../Form/FormContext.js';

export interface FormItemPropTypes {
  /**
   * Label of the FormItem. Can be either a string or a `Label` component.
   */
  label?: string | ReactElement;
  /**
   * Content of the FormItem. Can be an arbitrary React Node.
   */
  children: ReactNode | ReactNode[];
  /**
   * todo: remove
   */
  id: string;
}

interface InternalProps extends FormItemPropTypes {
  columnIndex?: number;
  rowIndex?: number;
}

const CENTER_ALIGNED_CHILDREN = new Set(['CheckBox', 'RadioButton', 'Switch', 'RangeSlider', 'Slider']);

const useStyles = createUseStyles(
  {
    label: {
      gridColumnEnd: 'span var(--_ui5wcr_form_label_span)',
      justifySelf: 'var(--_ui5wcr_form_label_text_align)',
      textAlign: 'var(--_ui5wcr_form_label_text_align)',
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
      gridColumnEnd: 'span var(--_ui5wcr_form_content_span)',
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

const getContentForHtmlLabel = (label: ReactNode) => {
  if (typeof label === 'string') {
    return label;
  } else if (isValidElement(label) && typeof label.props?.children === 'string') {
    return label.props.children;
  } else {
    return '';
  }
};

/**
 * A `FormItem` represents a row in a `Form`. A `FormItem` is a combination of one label and a component associated to this label.
 *
 * __Note__: The `FormItem` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `label` and `children`, especially no `className`, `style` or `ref`.
 */
const FormItem = (props: FormItemPropTypes) => {
  // eslint-disable-next-line react/prop-types
  const { label, children, id } = props as InternalProps;
  const uniqueId = useIsomorphicId();
  const { formItems: layoutInfos, registerItem, unregisterItem, labelSpan, rowsWithGroup } = useFormContext();
  const groupContext = useFormGroupContext();
  const classes = useStyles();

  useEffect(() => {
    registerItem?.(uniqueId, 'formItem', groupContext.id);
    return () => {
      unregisterItem?.(uniqueId, groupContext.id);
    };
  }, [uniqueId, registerItem, unregisterItem, groupContext.id]);

  const layoutInfo = useMemo(() => layoutInfos?.find(({ id: itemId }) => uniqueId === itemId), [layoutInfos, uniqueId]);

  //todo can probably be omitted
  // #1
  // Attention: FormItems do only make sense within Forms and only should work with them.
  // If layoutInfos is defined, the FormContext is available and will set the id for the layoutInfo
  // With this solution we prevent flickering for the wrong (not calculated) layout because the first render does not contain the layout
  // I tested useLayoutEffect instead useEffect but this caused me some bugs, when the pages reloads with HMR
  // So this is fine, the layoutInfo will be defined
  if (layoutInfos && !layoutInfo) return null;

  const { columnIndex, rowIndex } = layoutInfo;
  // const { columnIndex, rowIndex } = props;
  // console.log(rowIndex, 'rowIndex');

  // console.log('Render FormItem ' + id, layoutInfo, layoutInfos);

  const gridColumnStart = (columnIndex ?? 0) * 12 + 1;

  const contentGridColumnStart =
    columnIndex != null ? (labelSpan === 12 ? gridColumnStart : gridColumnStart + (labelSpan ?? 0)) : undefined;

  if (rowsWithGroup[rowIndex]) {
    console.log(rowsWithGroup[rowIndex], label, layoutInfo);
  }

  const calculatedGridRowIndex = (() => {
    // console.log('asdd', rowsWithGroup[rowIndex], layoutInfo);
    if (!layoutInfo.groupId && rowsWithGroup[rowIndex]) {
      return rowIndex + 1;
    } else return rowIndex;
  })();

  const calculatedGridRowStart = labelSpan === 12 ? (calculatedGridRowIndex ?? 0) + 1 : calculatedGridRowIndex ?? 0;

  return (
    <>
      <FormItemLabel
        label={label}
        style={{
          gridColumnStart,
          gridRowStart: calculatedGridRowIndex ?? undefined,
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
        {flattenFragments(children).map((child, index) => {
          // @ts-expect-error: type can't be string because of `isValidElement`
          if (isValidElement(child) && child.type && child.type.$$typeof !== Symbol.for('react.portal')) {
            const content = getContentForHtmlLabel(label);
            const childId = child?.props?.id;
            return (
              <Fragment key={`${content}-${uniqueId}-${index}`}>
                {/*@ts-expect-error: child is ReactElement*/}
                {cloneElement(child, { id: childId ?? `${uniqueId}-${index}` })}
                <label htmlFor={childId ?? `${uniqueId}-${index}`} style={{ display: 'none' }} aria-hidden={true}>
                  {content}
                </label>
              </Fragment>
            );
          }
          return undefined;
        })}
      </div>
    </>
  );
};

FormItem.displayName = 'FormItem';

export { FormItem };
