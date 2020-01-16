import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { useViewportRange } from '@ui5/webcomponents-react-base/lib/useViewportRange';
import { Grid } from '@ui5/webcomponents-react/lib/Grid';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React, { FC, forwardRef, ReactElement, ReactNode, ReactNodeArray, Ref, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { CurrentRange } from './CurrentViewportRangeContext';
import { styles } from './Form.jss';
import { FormGroup } from './FormGroup';

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

const useStyles = createUseStyles<keyof ReturnType<typeof styles>>(styles, { name: 'Form' });

/**
 * <code>import { Form } from '@ui5/webcomponents-react/lib/Form';</code>
 */
const Form: FC<FormPropTypes> = forwardRef((props: FormPropTypes, ref: Ref<HTMLDivElement>) => {
  const { title, children } = props;

  const classes = useStyles();
  const currentRange = useViewportRange('StdExt');

  const [formGroups, updatedTitle] = useMemo(() => {
    let formGroups: any;
    let updatedTitle: string = title;

    // check if ungrouped FormItems exist amongst the Form's children and put them into an artificial FormGroup
    if (Array.isArray(children)) {
      const ungroupedItems = [];
      formGroups = [];
      children.forEach((child) => {
        if ((child as ReactElement).props.type === 'formItem') {
          ungroupedItems.push(child);
        } else if ((child as ReactElement).props.type === 'formGroup') {
          formGroups.push(child as ReactElement);
        }
      });

      if (ungroupedItems.length > 0) {
        formGroups.push(<FormGroup children={ungroupedItems} />);
      }
    } else {
      // check if a sole Form's group has a Title and take it as Form Title if one does not exist
      const childProps = (children as ReactElement).props;
      if ((!title || title.length === 0) && childProps.title && childProps.title.length > 0) {
        updatedTitle = childProps.title;
        formGroups = React.cloneElement(children as ReactElement, { title: null });
      } else {
        formGroups = children;
      }
    }

    return [formGroups, updatedTitle];
  }, [children]);

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <CurrentRange.Provider value={currentRange}>
      {updatedTitle && (
        <>
          <Title level={TitleLevel.H3} className={classes.formTitle}>
            {updatedTitle}
          </Title>
          <div className={classes.formTitlePaddingBottom} />
        </>
      )}
      <Grid ref={ref} children={formGroups} defaultSpan={'XL6 L12 M12 S12'} {...passThroughProps} />
    </CurrentRange.Provider>
  );
});

Form.defaultProps = {
  children: [],
  title: null
};
Form.displayName = 'Form';

export { Form };
