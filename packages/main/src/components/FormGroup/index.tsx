'use client';

import { useIsomorphicId } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';
import { useEffect, useMemo } from 'react';
import type { CommonProps } from '../../types/index.js';
import { GroupContext, useFormContext } from '../Form/FormContext.js';
import { FormGroupTitle } from './FormGroupTitle.js';

export interface FormGroupPropTypes extends CommonProps<HTMLHeadingElement> {
  /**
   * Title of the FormGroup.
   */
  titleText?: string;
  /**
   * Content of the FormGroup.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormItem` in order to preserve the intended design.
   */
  children: ReactNode | ReactNode[];
  /**
   * Sets the components outer HTML tag.
   *
   * @default "h5"
   */
  as?: keyof HTMLElementTagNameMap;
}

/**
 * The `FormGroup` encapsulates `FormItems` into groups and allows setting a title for each group.
 *
 * __Note:__ Setting a React Ref is not supported by this component.
 */
const FormGroup = (props: FormGroupPropTypes) => {
  const { titleText, children, as = 'h5', style, ...rest } = props;
  const { formGroups: layoutInfos, registerItem, unregisterItem, labelSpan, recalcTrigger } = useFormContext();
  const uniqueId = useIsomorphicId();

  useEffect(() => {
    registerItem?.(uniqueId, 'formGroup');
    return () => unregisterItem?.(uniqueId);
  }, [uniqueId, registerItem, unregisterItem, recalcTrigger]);

  const layoutInfo = useMemo(
    () => layoutInfos?.find(({ id: groupId }) => uniqueId === groupId),
    [layoutInfos, uniqueId]
  );

  if (!layoutInfo) return null;
  const { columnIndex, rowIndex } = layoutInfo;

  const localRowIndex = labelSpan === 12 ? rowIndex - 1 : rowIndex;

  return (
    <GroupContext.Provider value={{ id: uniqueId }}>
      <>
        <FormGroupTitle
          {...rest}
          titleText={titleText}
          style={{
            ...style,
            display: titleText ? 'unset' : 'none',
            gridColumnStart: columnIndex * 12 + 1,
            gridRowStart: localRowIndex,
            // smaller margin for groups in first row with form title
            marginBlockStart: localRowIndex === 2 ? '0.5rem' : '1rem'
          }}
          as={as}
        />
        {children}
      </>
    </GroupContext.Provider>
  );
};

FormGroup.displayName = 'FormGroup';

export { FormGroup };
