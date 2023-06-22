import { useIsomorphicId } from '@ui5/webcomponents-react-base';
import type { FC, ReactNode } from 'react';
import React, { useContext, useEffect, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { GroupContext, useFormContext } from '../Form/FormContext.js';
import { FormGroupTitle } from './FormGroupTitle.js';

export interface FormGroupPropTypes {
  /**
   * Title of the FormGroup.
   */
  titleText: string;
  /**
   * Content of the FormGroup.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormItem` in order to preserve the intended design.
   */
  children: ReactNode | ReactNode[];
}

const useStyles = createUseStyles(
  {
    spacer: { height: '1rem', gridColumn: '1 / -1' }
  },
  { name: 'FormGroup' }
);
/**
 * The `FormGroup` encapsulates `FormItems` into groups.
 *
 * __Note:__ `FormGroup` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `titleText` and `children`, especially no `className`, `style` or `ref`.
 */
const FormGroup: FC<FormGroupPropTypes> = (props: FormGroupPropTypes) => {
  const { titleText, children } = props;
  const { formGroups: layoutInfos, registerItem, unregisterItem, labelSpan } = useFormContext();
  const uniqueId = useIsomorphicId();
  const classes = useStyles();

  useEffect(() => {
    registerItem?.(uniqueId, 'formGroup');
    return () => unregisterItem?.(uniqueId);
  }, [uniqueId, registerItem, unregisterItem]);

  const layoutInfo = useMemo(() => layoutInfos?.find(({ id: groupId }) => uniqueId === groupId), [layoutInfos]);
  // console.log("group",layoutInfo);
  if (!layoutInfo) return null;
  const { columnIndex, rowIndex } = layoutInfo;

  //todo spacer
  return (
    <GroupContext.Provider value={{ id: uniqueId }}>
      <>
        <FormGroupTitle
          titleText={titleText}
          style={{ gridColumnStart: columnIndex * 12 + 1, gridRowStart: labelSpan === 12 ? rowIndex - 1 : rowIndex }}
        />
        {children}
        <span className={classes.spacer} />
      </>
    </GroupContext.Provider>
  );
};

FormGroup.displayName = 'FormGroup';

export { FormGroup };
