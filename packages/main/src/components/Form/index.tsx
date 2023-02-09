'use client';

import { Device, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import React, {
  Children,
  cloneElement,
  CSSProperties,
  ElementType,
  forwardRef,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { FormBackgroundDesign, TitleLevel } from '../../enums';
import { CommonProps } from '../../interfaces';
import { Title } from '../../webComponents';
import { FormGroupTitle } from '../FormGroup/FormGroupTitle';
import { styles } from './Form.jss';
import { FormContext } from './FormContext';

export interface FormPropTypes extends CommonProps {
  /**
   * Components that are placed into Form.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FormGroup` or `FormItem` in order to preserve the intended design.
   */
  children: ReactNode | ReactNode[];
  /**
   * Specifies the background color of the Form content.
   */
  backgroundDesign?: FormBackgroundDesign;
  /**
   * Form title
   */
  titleText?: string;
  /**
   * Form columns for small size (`< 600px`).
   * Must be a number between 1 and 12.
   *
   * Default Value: 1
   */
  columnsS?: number;
  /**
   * Form columns for medium size (`600px` - `1023px`).
   * Must be a number between 1 and 12.
   *
   * Default Value: 1
   *
   * __Note__: The number of columns for medium size must not be smaller than the number of columns for small size.
   */
  columnsM?: number;
  /**
   * Form columns for large size (`1024px` - `1439px`).
   * Must be a number between 1 and 12.
   *
   * Default Value: 1
   *
   * __Note:__ The number of columns for large size must not be smaller than the number of columns for medium size.
   */
  columnsL?: number;
  /**
   * Form columns for extra large size (`>= 1440px`).
   * Must be a number between 1 and 12.
   *
   * Default Value: 2
   *
   * __Note:__ The number of columns for extra large size must not be smaller than the number of columns for large size.
   */
  columnsXL?: number;

  /**
   * Default span for labels in small size (`< 600px`).
   * Must be a number between 1 and 12.
   *
   * Default Value: 12
   */
  labelSpanS?: number;
  /**
   * Default span for labels in medium size (`600px` - `1023px`).
   * Must be a number between 1 and 12.
   *
   * Default Value: 2
   */
  labelSpanM?: number;
  /**
   * Default span for labels in large size (`1024px` - `1439px`).
   * Must be a number between 1 and 12.
   *
   * Default Value: 4
   */
  labelSpanL?: number;
  /**
   * Default span for labels in extra large size (`>= 1440px`).
   * Must be a number between 1 and 12.
   *
   * Default Value: 4
   */
  labelSpanXL?: number;
  /**
   * Sets the components outer HTML tag.
   *
   * __Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.
   */
  as?: keyof HTMLElementTagNameMap;
}

const useStyles = createUseStyles(styles, { name: 'Form' });
/**
 * The `Form` component arranges labels and fields into groups and rows. There are different ways to visualize forms for different screen sizes.
 * It is possible to change the alignment of all labels by setting the CSS `align-items` property, per default all labels are centered.
 */
const Form = forwardRef<HTMLFormElement, FormPropTypes>((props, ref) => {
  const {
    as = 'form',
    backgroundDesign = FormBackgroundDesign.Transparent,
    children,
    columnsS = 1,
    columnsM = 1,
    columnsL = 1,
    columnsXL = 2,
    className,
    labelSpanS = 12,
    labelSpanM = 2,
    labelSpanL = 4,
    labelSpanXL = 4,
    titleText,
    style,
    ...rest
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

  const [componentRef, formRef] = useSyncRef<HTMLFormElement>(ref);
  // use the window range set as first best guess, if not available use Desktop
  const [currentRange, setCurrentRange] = useState(Device.getCurrentRange()?.name ?? 'Desktop');
  const lastRange = useRef(currentRange);

  useEffect(() => {
    const observer = new ResizeObserver(([form]) => {
      const rangeInfo = Device.getCurrentRange(form.contentRect.width);
      if (rangeInfo && lastRange.current !== rangeInfo.name) {
        lastRange.current = rangeInfo.name;
        setCurrentRange(rangeInfo.name);
      }
    });

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [formRef]);

  const classes = useStyles();

  const currentNumberOfColumns = columnsMap.get(currentRange);
  const currentLabelSpan = labelSpanMap.get(currentRange);

  const formGroups = useMemo(() => {
    if (currentNumberOfColumns === 1) {
      return children;
    }

    const computedFormGroups = [];
    const childrenArray = Children.toArray(children);
    const rows = childrenArray.reduce((acc, val, idx) => {
      const columnIndex = Math.floor(idx / currentNumberOfColumns);
      acc[columnIndex] ??= [];
      acc[columnIndex].push(val);
      return acc;
    }, []) as ReactElement[][];

    const maxRowsPerRow: number[] = [];
    rows.forEach((rowGroup: ReactElement[], rowIndex) => {
      maxRowsPerRow[rowIndex] = Math.max(
        ...rowGroup.map((row) => {
          if ((row.type as any).displayName === 'FormItem') {
            return 1;
          }
          return Children.count(row.props.children) + 1;
        })
      );
    });

    let totalRowCount = 2;

    rows.forEach((formGroup: ReactElement[], rowIndex) => {
      const rowsForThisRow = maxRowsPerRow.at(rowIndex);
      formGroup.forEach((cell, columnIndex) => {
        const titleStyles: CSSProperties = {
          gridColumnStart: columnIndex * 12 + 1,
          gridRowStart: totalRowCount
        };

        if (cell?.props?.titleText) {
          computedFormGroups.push(
            <FormGroupTitle
              titleText={cell.props.titleText}
              style={titleStyles}
              key={`title-col-${columnIndex}-row-${totalRowCount}`}
            />
          );
        }

        for (let i = 0; i < rowsForThisRow; i++) {
          let itemToRender;
          if ((cell.type as any).displayName === 'FormGroup') {
            itemToRender = Children.toArray(cell.props.children).at(i);
          } else if ((cell.type as any).displayName === 'FormItem' && i === 0) {
            // render a single FormItem only when index is 0
            itemToRender = cell;
          }

          if (itemToRender) {
            computedFormGroups.push(
              cloneElement(itemToRender as ReactElement, {
                key: `col-${columnIndex}-row-${totalRowCount + i}`,
                columnIndex,
                rowIndex: totalRowCount + i + 1
              })
            );
          }
        }
      });
      totalRowCount += rowsForThisRow;
      if (rowsForThisRow === 1) {
        totalRowCount += 1;
      }
    });

    return computedFormGroups;
  }, [children, currentNumberOfColumns]);

  const formClassNames = clsx(classes.form, classes[backgroundDesign.toLowerCase()], className);

  const CustomTag = as as ElementType;
  return (
    <FormContext.Provider value={{ labelSpan: currentLabelSpan }}>
      <div className={classes.formContainer} suppressHydrationWarning={true}>
        <CustomTag
          ref={componentRef}
          className={formClassNames}
          style={{
            ...style,
            '--ui5wcr_form_label_span_s': labelSpanS,
            '--ui5wcr_form_label_span_m': labelSpanM,
            '--ui5wcr_form_label_span_l': labelSpanL,
            '--ui5wcr_form_label_span_xl': labelSpanXL,
            '--ui5wcr_form_columns_s': columnsS,
            '--ui5wcr_form_columns_m': columnsM,
            '--ui5wcr_form_columns_l': columnsL,
            '--ui5wcr_form_columns_xl': columnsXL
          }}
          {...rest}
        >
          {titleText && (
            <Title level={TitleLevel.H3} className={classes.formTitle}>
              {titleText}
            </Title>
          )}
          {formGroups}
        </CustomTag>
      </div>
    </FormContext.Provider>
  );
});

Form.displayName = 'Form';

export { Form };
