'use client';

import { useIsomorphicId, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { cloneElement, Fragment, isValidElement, useEffect, useMemo } from 'react';
import { WrappingType } from '../../enums/index.js';
import { flattenFragments } from '../../internal/utils.js';
import type { ReducedReactNodeWithBoolean } from '../../types/index.js';
import type { LabelPropTypes } from '../../webComponents/Label/index.js';
import { Label } from '../../webComponents/Label/index.js';
import { useFormContext, useFormGroupContext } from '../Form/FormContext.js';
import { classNames, styleData } from './FormItem.module.css.js';

type FormItemContent =
  | ReducedReactNodeWithBoolean
  | Iterable<ReducedReactNodeWithBoolean>
  | ReactElement /* necessary for React v16 & v17 ReactNode type*/;

export interface FormItemPropTypes {
  /**
   * Label of the FormItem. Can be either a string or a `Label` component.
   */
  label?: string | ReactElement;
  /**
   * Content of the FormItem.
   *
   * __Note:__ Only ui5 web component inputs such as `Input (ui5-input)`, `CheckBox (ui5-checkbox)`,`DatePicker (ui5-date-picker)`, etc. are supporting screen readers. For all other inputs the labels have to be set manually.
   *
   * __Note:__ Text, numbers and React portals are ignored.
   */
  children: FormItemContent;
}

interface InternalProps extends FormItemPropTypes {
  columnIndex?: number;
  rowIndex?: number;
}

interface FormItemLabelProps {
  label: ReactNode;
  style?: CSSProperties;
  className?: string;
  rowIndex: number | undefined;
}

function FormItemLabel({ label, style, className, rowIndex }: FormItemLabelProps) {
  const { labelSpan } = useFormContext();

  if (typeof label === 'string') {
    return (
      <Label
        className={clsx(classNames.label, className)}
        style={style}
        wrappingType={WrappingType.Normal}
        data-label-span={labelSpan}
        showColon={!!label}
        data-row-index-label={rowIndex}
        data-component-name="FormItemLabel"
      >
        {label}
      </Label>
    );
  }

  if (isValidElement(label)) {
    const { showColon, wrappingType, style: labelStyle, children } = label.props;
    return cloneElement<
      LabelPropTypes & {
        'data-label-span'?: number;
        'data-row-index-label'?: number;
        'data-component-name'?: string;
      }
    >(
      label,
      {
        showColon: showColon ?? true,
        wrappingType: wrappingType ?? WrappingType.Normal,
        className: clsx(classNames.label, className, label.props.className),
        style: {
          ...style,
          ...(labelStyle || {})
        },
        'data-label-span': labelSpan,
        'data-row-index-label': rowIndex,
        'data-component-name': 'FormItemLabel'
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
  const uniqueId = useIsomorphicId();
  const { label, children } = props as InternalProps;
  const {
    formItems: layoutInfos,
    registerItem,
    unregisterItem,
    labelSpan,
    rowsWithGroup,
    recalcTrigger
  } = useFormContext();
  const groupContext = useFormGroupContext();
  useStylesheet(styleData, FormItem.displayName);

  useEffect(() => {
    registerItem?.(uniqueId, 'formItem', groupContext.id);
    return () => {
      unregisterItem?.(uniqueId, groupContext.id);
    };
  }, [uniqueId, registerItem, unregisterItem, groupContext.id, recalcTrigger]);

  const layoutInfo = useMemo(() => layoutInfos?.find(({ id: itemId }) => uniqueId === itemId), [layoutInfos, uniqueId]);

  if (layoutInfos && !layoutInfo) return null;

  const { columnIndex, rowIndex, lastGroupItem } = layoutInfo;

  const gridColumnStart = (columnIndex ?? 0) * 12 + 1;

  const contentGridColumnStart =
    columnIndex != null ? (labelSpan === 12 ? gridColumnStart : gridColumnStart + (labelSpan ?? 0)) : undefined;

  const calculatedGridRowIndex = (() => {
    if (!layoutInfo.groupId && rowsWithGroup[rowIndex]) {
      return rowIndex + 1;
    } else return rowIndex ?? 0;
  })();

  const calculatedGridRowStart = calculatedGridRowIndex ?? 0;
  const calculatedGridRowStartLabel =
    labelSpan === 12 ? calculatedGridRowIndex - 1 : (calculatedGridRowIndex ?? undefined);

  return (
    <>
      <FormItemLabel
        label={label}
        style={{
          gridColumnStart,
          gridRowStart: calculatedGridRowStartLabel
        }}
        rowIndex={calculatedGridRowStartLabel}
        className={clsx(labelSpan !== 12 && lastGroupItem && classNames.lastGroupItem)}
      />
      <div
        data-id={uniqueId}
        className={clsx(classNames.content, lastGroupItem && classNames.lastGroupItem)}
        style={{
          gridColumnStart: contentGridColumnStart,
          gridRowStart: rowIndex != null ? calculatedGridRowStart : undefined
        }}
        data-label-span={labelSpan}
        data-row-index={calculatedGridRowStart}
        data-component-name="FormItemContent"
      >
        {flattenFragments(children).map((child, index) => {
          // @ts-expect-error: type can't be string because of `isValidElement`
          if (isValidElement(child) && child.type && child.type.$$typeof !== Symbol.for('react.portal')) {
            const content = getContentForHtmlLabel(label);
            let accessibleNameRef: string | undefined;
            if (!child?.props.accessibleName) {
              accessibleNameRef =
                child?.props?.accessibleNameRef ?? `${layoutInfo.groupId}-group ${uniqueId}-${index}-label`;
            }

            return (
              <Fragment key={`${content}-${uniqueId}-${index}`}>
                {accessibleNameRef
                  ? cloneElement(child, {
                      //@ts-expect-error: child is ReactElement
                      accessibleNameRef
                    })
                  : child}
                <span className={classNames.pseudoInvisibleText} id={`${uniqueId}-${index}-label`}>
                  {content}
                </span>
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
