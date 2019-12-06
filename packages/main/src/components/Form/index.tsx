import { Grid } from '../Grid';
import React, { FC, forwardRef, ReactElement, ReactNode, ReactNodeArray, Ref } from 'react';
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

  const rateChanged = useRateChanged()[0];
  const onRateChanged = (e) => {
    rateChanged(e.parameters.rate);
  };

  let ungroupedChildren = [],
    updatedChildren,
    newTitle;
  if (children.hasOwnProperty('length')) {
    updatedChildren = [...children];
    for (let i = updatedChildren.length - 1; i >= 0; i--) {
      if (updatedChildren[i].props.type === 'formItem') {
        ungroupedChildren.push(updatedChildren.splice(i, 1)[0]);
      }
    }
    if (ungroupedChildren.length > 0) {
      updatedChildren.push(<FormGroup children={ungroupedChildren.reverse()} />);
    }
    newTitle = title;
  } else {
    if ((!title || title.length === 0) && children.props.title && children.props.title.length > 0) {
      newTitle = children.props.title;
      updatedChildren = React.cloneElement(children, { title: null });
    } else newTitle = title;
  }

  return (
    <React.Fragment>
      {newTitle ? (
        <React.Fragment>
          <Title level={TitleLevel.H3} style={styles.formTitle}>
            {newTitle}
          </Title>{' '}
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
