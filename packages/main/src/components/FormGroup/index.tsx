'use client';

import { useIsomorphicId } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';
import { useEffect, useMemo } from 'react';
import { GroupContext, useFormContext } from '../Form/FormContext.js';
import { FormGroupTitle } from './FormGroupTitle.js';

export interface FormGroupPropTypes {
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
}

/**
 * The `FormGroup` encapsulates `FormItems` into groups.
 *
 * __Note:__ `FormGroup` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `titleText` and `children`, especially no `className`, `style` or `ref`.
 */
const FormGroup = (props: FormGroupPropTypes) => {
  const { titleText, children } = props;
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

  return (
    <GroupContext.Provider value={{ id: uniqueId }}>
      <>
        <FormGroupTitle
          titleText={titleText}
          style={{
            display: titleText ? 'unset' : 'none',
            gridColumnStart: columnIndex * 12 + 1,
            gridRowStart: labelSpan === 12 ? rowIndex - 1 : rowIndex
          }}
        />
        {children}
      </>
    </GroupContext.Provider>
  );
};

FormGroup.displayName = 'FormGroup';

export { FormGroup };
