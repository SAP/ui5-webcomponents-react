import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { Device } from '@ui5/webcomponents-react-base/lib/Device';
import { useConsolidatedRef, usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
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
  /**
   * Form columns for small size.
   * Must be a number between 1 and 12.<br />
   * Default Value: 1
   */
  columnsS?: number;
  /**
   * Form columns for medium size. The number of columns for medium size must not be smaller than the number of columns for small size.
   * Must be a number between 1 and 12.<br />
   * Default Value: 1
   */
  columnsM?: number;
  /**
   * Form columns for large size. The number of columns for large size must not be smaller than the number of columns for medium size.
   * Must be a number between 1 and 12.<br />
   * Default Value: 1
   */
  columnsL?: number;
  /**
   * Form columns for extra large size. The number of columns for extra large size must not be smaller than the number of columns for large size.
   * Must be a number between 1 and 12.<br />
   * Default Value: 2
   */
  columnsXL?: number;

  /**
   * Default span for labels in small size.
   * Must be a number between 1 and 12.<br />
   * Default Value: 12
   */
  labelSpanS?: number;
  /**
   * Default span for labels in medium size.
   * Must be a number between 1 and 12.<br />
   * Default Value: 2
   */
  labelSpanM?: number;
  /**
   * Default span for labels in large size.
   * Must be a number between 1 and 12.<br />
   * Default Value: 4
   */
  labelSpanL?: number;
  /**
   * Default span for labels in extra large size.
   * Must be a number between 1 and 12.<br />
   * Default Value: 4
   */
  labelSpanXL?: number;
}

const useStyles = createComponentStyles(styles, { name: 'Form' });

const createArrayOfLength = (length) => {
  const arr = new Array(length);
  for (let i = 0; i < length; i++) {
    arr[i] = [];
  }
  return arr;
};

/**
 * <code>import { Form } from '@ui5/webcomponents-react/lib/Form';</code>
 */
const Form: FC<FormPropTypes> = forwardRef((props: FormPropTypes, ref: Ref<HTMLDivElement>) => {
  const {
    title,
    children,
    className,
    slot,
    style,
    tooltip,
    columnsS = 1,
    columnsM = 1,
    columnsL = 1,
    columnsXL = 2,
    labelSpanS = 12,
    labelSpanM = 2,
    labelSpanL = 4,
    labelSpanXL = 4
  } = props;

  const columnsMap = new Map();
  columnsMap.set('Phone', columnsS);
  columnsMap.set('Tablet', columnsM);
  columnsMap.set('Desktop', columnsL);
  columnsMap.set('LargeDesktop', columnsXL);

  const labelSpanMap = new Map();
  labelSpanMap.set('Phone', labelSpanS);
  labelSpanMap.set('Tablet', labelSpanM);
  labelSpanMap.set('Desktop', labelSpanL);
  labelSpanMap.set('LargeDesktop', labelSpanXL);

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

    const currentColumnCount = columnsMap.get(currentRange);
    if (currentColumnCount === 1) {
      return [children, title];
    }

    // if we are running on a large desktop device, we need some special logic for splitting up the form groups
    const columns = createArrayOfLength(currentColumnCount);
    Children.toArray(children).forEach((child, index) => {
      columns[index % currentColumnCount].push(child);
    });

    // no column can have more rows than the first column
    let totalRowCount = 1;
    for (let i = 0; i < columns[0].length; i++) {
      const formGroupsForRow = columns.map((groups) => groups[i]);
      const childrenOfFormGroups = createArrayOfLength(currentColumnCount);

      formGroupsForRow.forEach((formGroup, index) => {
        if (formGroup) {
          formGroups.push(
            <Title
              level={TitleLevel.H5}
              style={{ paddingBottom: '0.75rem', gridColumn: 'span 12' }}
              key={`title-col-${index}-row-${totalRowCount}`}
            >
              {formGroup?.props?.title ?? ''}
            </Title>
          );
          childrenOfFormGroups[index] =
            formGroup.type.displayName === 'FormItem' ? [formGroup] : Children.toArray(formGroup?.props?.children);
        }
      });
      totalRowCount++;

      const maxChildCount = Math.max(...childrenOfFormGroups.map((children) => children.length));

      for (let childIndex = 0; childIndex < maxChildCount; childIndex++) {
        childrenOfFormGroups.forEach((child, columnIndex) => {
          if (child[childIndex]) {
            // @ts-ignore
            formGroups.push(
              cloneElement(child[childIndex], { key: `col-${columnIndex}-row-${totalRowCount}`, columnIndex })
            );
          }
        });
        totalRowCount++;
      }
    }

    return [formGroups, title];
  }, [children, currentRange, title, columnsMap.get(currentRange)]);

  const passThroughProps = usePassThroughHtmlProps(props);

  const formClassNames = StyleClassHelper.of(classes.form).putIfPresent(className);

  const gridStyles: CSSProperties = {};
  gridStyles['--ui5wcr_form_content_span'] = 12 - labelSpanMap.get(currentRange);
  gridStyles['--ui5wcr_form_label_span'] = labelSpanMap.get(currentRange);
  gridStyles['--ui5wcr_form_full_span'] = `span ${columnsMap.get(currentRange) * 12}`;
  gridStyles.gridTemplateColumns = `repeat(${columnsMap.get(currentRange) * 12}, 1fr)`;

  // special case for phones or label span 12
  if (gridStyles['--ui5wcr_form_content_span'] <= 0) {
    gridStyles['--ui5wcr_form_content_span'] = 12;
    gridStyles['--ui5wcr_form_label_text_align'] = 'start';
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
