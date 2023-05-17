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
  /**
   * todo:remove
   */
  id: string;
}

const useStyles = createUseStyles(
  {
    spacer: { height: '1rem', gridColumn: 'span 12' }
  },
  { name: 'FormGroup' }
);
/**
 * The `FormGroup` encapsulates `FormItems` into groups.
 *
 * __Note:__ `FormGroup` is only used for calculating the final layout of the `Form`, thus it doesn't accept any other props than `titleText` and `children`, especially no `className`, `style` or `ref`.
 */
const FormGroup: FC<FormGroupPropTypes> = (props: FormGroupPropTypes) => {
  //todo make id internal
  const { titleText, children, id } = props;
  const { formGroups: layoutInfos, registerItem, unregisterItem } = useFormContext();
  const classes = useStyles();

  useEffect(() => {
    registerItem?.(id, 'formGroup');
    return () => unregisterItem?.(id);
  }, [id, registerItem, unregisterItem]);

  const layoutInfo = useMemo(() => layoutInfos?.find(({ id: groupId }) => id === groupId), [layoutInfos]);

  console.log('id', id);

  return (
    <GroupContext.Provider value={{ id }}>
      <>
        <FormGroupTitle titleText={titleText} />
        {children}
        <span className={classes.spacer} />
      </>
    </GroupContext.Provider>
  );
};

FormGroup.displayName = 'FormGroup';

export { FormGroup };
