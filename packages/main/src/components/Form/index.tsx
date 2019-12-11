import { Grid } from '@ui5/webcomponents-react/lib/Grid';
import React, { FC, forwardRef, ReactElement, ReactNode, ReactNodeArray, Ref, useMemo } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import styles from './Form.jss';
import { createUseStyles } from 'react-jss';
import { useViewportRange } from '../../../../base/src/hooks/useViewportRange';
import { FormGroup } from './FormGroup';
import CurrentRange from './CurrentViewportRange';
import { JSSTheme } from '../../interfaces/JSSTheme';

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

let formGroups, updatedTitle;
const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'Form' });

const Form: FC<FormPropTypes> = forwardRef((props: FormPropTypes, ref: Ref<HTMLDivElement>) => {
  const { title, children } = props;

  const classes = useStyles();
  const formTitleStyle = useStyles(classes).formTitle;
  const formTitlePadding = useStyles(classes).formTitlePaddingBottom;

  const [currentRange] = useViewportRange();

  useMemo(() => {
    // check if ungrouped FormItems exist amongst the Form's children and put them in an artificial FormGroup if any
    if (Array.isArray(children)) {
      let ungroupedItems = [];
      formGroups = [];

      children.forEach((child) => {
        if ((child as ReactElement).props.type === 'formItem') {
          ungroupedItems.push(child);
        } else if ((child as ReactElement).props.type === 'formGroup') {
          formGroups.push(child);
        }
      });

      if (ungroupedItems.length > 0) {
        formGroups.push(<FormGroup children={ungroupedItems} />);
      }
      updatedTitle = title;
    } else {
      // check if a sole Form's group has a Title and take it as Form Title if one does not exist
      let childProps = (children as ReactElement).props;
      if ((!title || title.length === 0) && childProps.title && childProps.title.length > 0) {
        updatedTitle = childProps.title;
        formGroups = React.cloneElement(children as ReactElement, { title: null });
      } else {
        formGroups = children;
        updatedTitle = title;
      }
    }
  }, [children]);

  return (
    <CurrentRange.Provider value={currentRange}>
      {updatedTitle ? (
        <>
          <Title level={TitleLevel.H3} className={formTitleStyle}>
            {updatedTitle}
          </Title>
          <div className={formTitlePadding} />
        </>
      ) : null}
      <Grid ref={ref} children={formGroups} defaultSpan={'XL6 L12 M12 S12'} />
    </CurrentRange.Provider>
  );
});

Form.defaultProps = {
  children: [],
  title: null
};
Form.displayName = 'Form';

export { Form };
