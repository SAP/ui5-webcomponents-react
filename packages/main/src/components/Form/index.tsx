import { Grid } from '../Grid';
import React, { FC, forwardRef, ReactElement, ReactNode, ReactNodeArray, Ref, useMemo, useState } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Title, TitleLevel } from '../..';
import { useRateChanged } from './hooks/useRateChanged';
import { styles } from './Form.jss';
import { FormGroup } from './FormGroup';
import { FormItem } from './FormItem';

export interface FormPropTypes extends CommonProps {
  /**
   * Components that are placed into Form.
   */
  children: ReactNode | ReactNodeArray;
  /**
   * Form title
   */
  title?: string;
}

const Form: FC<FormPropTypes> = forwardRef((props: FormPropTypes, ref: Ref<HTMLDivElement>) => {
  const { title, children } = props;

  const [currentRate, setCurrentRate] = useState('');
  const rateChanged = useRateChanged()[0];
  const onRateChanged = (e) => {
    setCurrentRate(e.parameters.rate);
  };

  useMemo(() => {
    rateChanged(currentRate);
  }, [currentRate]);

  // check if ungrouped FormItems exist amongst the Form's children and put them in an artificial FormGroup if any
  let updatedChildren, updatedTitle;
  if (children.hasOwnProperty('length')) {
    let updatedChildren = [...(children as ReactNodeArray)],
      ungroupedChildren = [];
    for (let i = updatedChildren.length - 1; i >= 0; i--) {
      if ((updatedChildren[i] as ReactElement).props.type === 'formItem') {
        ungroupedChildren.push(updatedChildren.splice(i, 1)[0]);
      }
    }
    if (ungroupedChildren.length > 0) {
      updatedChildren.push(<FormGroup children={ungroupedChildren.reverse()} />);
    }
    updatedTitle = title;
  } else {
    // check if a sole Form's group has a Title and take it as Form Title if one does not exist
    let childProps = (children as ReactElement).props;
    if ((!title || title.length === 0) && childProps.title && childProps.title.length > 0) {
      updatedTitle = childProps.title;
      updatedChildren = React.cloneElement(children, { title: null });
    } else updatedTitle = title;
  }

  return (
    <React.Fragment>
      {updatedTitle ? (
        <React.Fragment>
          <Title level={TitleLevel.H3} style={styles.formTitle}>
            {updatedTitle}
          </Title>
          <div style={styles.formTitlePaddingBottom} />
        </React.Fragment>
      ) : null}
      <Grid
        ref={ref}
        children={updatedChildren ? updatedChildren : children}
        defaultSpan={'XL6 L12 M12 S12'}
        onRateChanged={onRateChanged}
      />
    </React.Fragment>
  );
});

Form.defaultProps = {
  children: [],
  title: null
};
Form.displayName = 'Form';

export { Form, FormGroup, FormItem };
