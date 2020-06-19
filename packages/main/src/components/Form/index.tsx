import { useConsolidatedRef } from '@ui5/webcomponents-react-base/hooks/useConsolidatedRef';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { Device } from '@ui5/webcomponents-react-base/lib/Device';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React, {
  Children,
  cloneElement,
  CSSProperties,
  FC,
  forwardRef,
  ReactElement,
  Ref,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './Form.jss';

export interface FormPropTypes extends CommonProps {
  /**
   * Components that are placed into Form. Please use only `FormGroup` and `FormItem` in order to preserve the
   * intended design.
   */
  children: ReactElement | ReactElement[];
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

  const formRef = useConsolidatedRef<HTMLDivElement>(ref);
  // use the window range set as first best guess
  const [currentRange, setCurrentRange] = useState(Device.media.getCurrentRange('StdExt', window.innerWidth).name);
  const lastRange = useRef(currentRange);

  useEffect(() => {
    const observer = new ResizeObserver(([form]) => {
      const newRange = Device.media.getCurrentRange('StdExt', form.contentRect.width).name;
      if (lastRange.current !== newRange) {
        lastRange.current = newRange;
        setCurrentRange(newRange);
      }
    });

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [formRef, setCurrentRange, lastRange]);

  const classes = useStyles();

  const [formGroups, updatedTitle] = useMemo(() => {
    let formGroups: any[] = [];

    if (Children.count(children) === 1 && !title && children.props.title?.length > 0) {
      return [cloneElement(children as ReactElement, { title: null }), children.props.title];
    }

    if (currentRange !== 'LargeDesktop') {
      return [children, title];
    }

    // if we are running on a large desktop device, we need some special logic for splitting up the form groups
    const firstColumnFormGroups = [];
    const secondColumnFormGroups = [];
    Children.toArray(children).forEach((child, index) => {
      if (index % 2 === 0) {
        firstColumnFormGroups.push(child);
      } else {
        secondColumnFormGroups.push(child);
      }
    });

    // the second column can never have more entries than the first column
    let totalRowCount = 1;
    for (let i = 0; i < firstColumnFormGroups.length; i++) {
      const formGroupColumnOne = firstColumnFormGroups[i];
      const formGroupColumnTwo = secondColumnFormGroups[i];
      let childrenOfColumnOneGroup = [];
      let childrenOfColumnTwoGroup = [];

      if (formGroupColumnOne) {
        formGroups.push(
          <Title
            level={TitleLevel.H5}
            style={{ paddingBottom: '0.75rem', gridColumn: 'span 12' }}
            key={`title-col-1-row-${totalRowCount}`}
          >
            {formGroupColumnOne?.props?.title ?? ''}
          </Title>
        );
        childrenOfColumnOneGroup =
          formGroupColumnOne.type.displayName === 'FormItem'
            ? [formGroupColumnOne]
            : Children.toArray(formGroupColumnOne?.props?.children);
        totalRowCount++;
      }

      if (formGroupColumnTwo) {
        formGroups.push(
          <Title
            level={TitleLevel.H5}
            style={{ paddingBottom: '0.75rem', gridColumn: 'span 12' }}
            key={`title-col-2-row-${totalRowCount}`}
          >
            {formGroupColumnTwo?.props?.title ?? ''}
          </Title>
        );
        childrenOfColumnTwoGroup =
          formGroupColumnTwo.type.displayName === 'FormItem'
            ? [formGroupColumnTwo]
            : Children.toArray(formGroupColumnTwo?.props?.children);
      }

      const maxChildCount = Math.max(childrenOfColumnOneGroup.length, childrenOfColumnTwoGroup.length);

      for (let childIndex = 0; childIndex < maxChildCount; childIndex++) {
        if (childrenOfColumnOneGroup[childIndex]) {
          // @ts-ignore
          formGroups.push(
            cloneElement(childrenOfColumnOneGroup[childIndex], { key: `col-1-row-${totalRowCount}`, columnIndex: 0 })
          );
        }
        if (childrenOfColumnTwoGroup[childIndex]) {
          // @ts-ignore
          formGroups.push(
            cloneElement(childrenOfColumnTwoGroup[childIndex], { key: `col-2-row-${totalRowCount}`, columnIndex: 1 })
          );
        }
        totalRowCount++;
      }
    }

    return [formGroups, title];
  }, [children, currentRange, title]);

  const passThroughProps = usePassThroughHtmlProps(props);

  const formClassNames = StyleClassHelper.of(classes.form).putIfPresent(className);

  const gridStyles: CSSProperties = {};

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

  return (
    <div
      ref={formRef}
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
