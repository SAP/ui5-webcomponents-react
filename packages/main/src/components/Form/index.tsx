import { StyleClassHelper } from '@ui5/webcomponents-react-base';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { useViewportRange } from '@ui5/webcomponents-react-base/lib/useViewportRange';
import { FormGroup } from '@ui5/webcomponents-react/lib/FormGroup';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React, {
  Children,
  cloneElement,
  CSSProperties,
  FC,
  forwardRef,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  Ref,
  useMemo
} from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './Form.jss';

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

const useStyles = createComponentStyles(styles, { name: 'Form' });

/**
 * <code>import { Form } from '@ui5/webcomponents-react/lib/Form';</code>
 */
const Form: FC<FormPropTypes> = forwardRef((props: FormPropTypes, ref: Ref<HTMLDivElement>) => {
  const { title, children, className, slot, style, tooltip } = props;

  const classes = useStyles();
  const currentRange = useViewportRange('StdExt');

  const [formGroups, updatedTitle] = useMemo(() => {
    let formGroups: any[] = [];
    let updatedTitle: string = title;

    // check if ungrouped FormItems exist amongst the Form's children and put them into an artificial FormGroup
    const childrenArray = Children.toArray(children);
    const ungroupedItems = childrenArray.filter((child) => child?.type?.displayName === 'FormItem');
    const firstColumnFormGroups = [];
    const secondColumnFormGroups = [];
    childrenArray
      .filter((child) => child?.type?.displayName === 'FormGroup')
      .forEach((child, index) => {
        if (currentRange !== 'LargeDesktop' || (currentRange === 'LargeDesktop' && index % 2 === 0)) {
          firstColumnFormGroups.push(child);
        } else {
          secondColumnFormGroups.push(child);
        }
      });

    // the second column can never have more entries than the first column
    let totalRowCount = 1;
    for (let i = 0; i < firstColumnFormGroups.length; i++) {
      const a = firstColumnFormGroups[i];
      const b = secondColumnFormGroups[i];

      if (a) {
        formGroups.push(
          <Title
            level={TitleLevel.H5}
            style={{ paddingBottom: '0.75rem', gridColumn: 'span 12' }}
            key={`title-col-1-row-${totalRowCount}`}
          >
            {a?.props?.title ?? ''}
          </Title>
        );
        totalRowCount++;
      }

      if (b) {
        formGroups.push(
          <Title
            level={TitleLevel.H5}
            style={{ paddingBottom: '0.75rem', gridColumn: 'span 12' }}
            key={`title-col-2-row-${totalRowCount}`}
          >
            {b?.props?.title ?? ''}
          </Title>
        );
      }

      const aChildren = Children.toArray(a?.props?.children);
      const bChildren = Children.toArray(b?.props?.children);

      const maxChildCount = Math.max(aChildren.length, bChildren.length);

      for (let childIndex = 0; childIndex < maxChildCount; childIndex++) {
        if (aChildren[childIndex]) {
          // @ts-ignore
          formGroups.push(cloneElement(aChildren[childIndex], { key: `col-1-row-${totalRowCount}`, columnIndex: 0 }));
        }
        if (bChildren[childIndex]) {
          // @ts-ignore
          formGroups.push(cloneElement(bChildren[childIndex], { key: `col-2-row-${totalRowCount}`, columnIndex: 1 }));
        }
        totalRowCount++;
      }
    }

    if (ungroupedItems.length > 0) {
      formGroups.push(<FormGroup>{ungroupedItems}</FormGroup>);
    }

    if (Children.count(children) === 1 && !updatedTitle && children.props.title?.length > 0) {
      updatedTitle = children.props.title;
      formGroups = [React.cloneElement(children as ReactElement, { title: null })];
    }

    return [formGroups, updatedTitle];
  }, [children, currentRange]);

  const passThroughProps = usePassThroughHtmlProps(props);

  const formClassNames = StyleClassHelper.of(classes.form).putIfPresent(className);

  const gridStyles = {
    '--ui5wcr_form_label_text_align': 'end'
  } as CSSProperties;

  switch (currentRange) {
    case 'LargeDesktop':
      gridStyles.gridTemplateColumns = 'repeat(24, 1fr)';
      gridStyles['--ui5wcr_form_full_span'] = 'span 24';
      gridStyles['--ui5wcr_form_content_span'] = 8;
      gridStyles['--ui5wcr_form_label_span'] = 4;
      break;
    case 'Desktop':
      gridStyles['--ui5wcr_form_content_span'] = 8;
      gridStyles['--ui5wcr_form_label_span'] = 4;
      break;
    case 'Tablet':
      gridStyles['--ui5wcr_form_content_span'] = 10;
      gridStyles['--ui5wcr_form_label_span'] = 2;
      break;
    case 'Phone':
      gridStyles['--ui5wcr_form_content_span'] = 12;
      gridStyles['--ui5wcr_form_label_span'] = 12;
      gridStyles['--ui5wcr_form_label_text_align'] = 'start';
      break;
  }

  if (currentRange === 'LargeDesktop') {
  }

  return (
    <div
      slot={slot}
      className={formClassNames.valueOf()}
      title={tooltip}
      style={{
        ...gridStyles,
        ...(style || {})
      }}
      {...passThroughProps}
    >
      {updatedTitle && (
        <Title level={TitleLevel.H3} className={classes.formTitle}>
          {updatedTitle}
        </Title>
      )}
      {formGroups}
    </div>
  );
});

Form.displayName = 'Form';

export { Form };
