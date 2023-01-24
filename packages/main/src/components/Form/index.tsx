import { CssSizeVariables, Device, ThemingParameters, useSyncRef } from '@ui5/webcomponents-react-base';
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
import { CommonProps } from '../../interfaces/CommonProps';
import { Title } from '../../webComponents/Title';
import { styles } from './Form.jss';

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

const clonedChildrenForSingleColumn = (reactChildren, currentLabelSpan) =>
  Children.map(reactChildren, (child) => {
    if (child?.type?.displayName === 'FormItem') {
      return cloneElement(child, { labelSpan: currentLabelSpan });
    }
    if (child?.type?.displayName === 'FormGroup') {
      return cloneElement(child, { children: clonedChildrenForSingleColumn(child.props.children, currentLabelSpan) });
    }
    return child;
  });

const useStyles = createUseStyles(styles, { name: 'Form' });
/**
 * The `Form` component arranges labels and fields into groups and rows. There are different ways to visualize forms for different screen sizes.
 * It is possible to change the alignment of all labels by setting the CSS `align-items` property, per default all labels are centered.
 */
const Form = forwardRef<HTMLFormElement, FormPropTypes>((props, ref) => {
  const {
    as,
    backgroundDesign,
    children,
    columnsS,
    columnsM,
    columnsL,
    columnsXL,
    className,
    labelSpanS,
    labelSpanM,
    labelSpanL,
    labelSpanXL,
    slot,
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
  }, [formRef, setCurrentRange, lastRange]);

  const classes = useStyles();

  const currentNumberOfColumns = columnsMap.get(currentRange);
  const currentLabelSpan = labelSpanMap.get(currentRange);

  const [formGroups, updatedTitle] = useMemo(() => {
    const computedFormGroups = [];
    if (Children.count(children) === 1 && !titleText) {
      const singleChild = (Array.isArray(children) ? children[0] : children) as ReactElement;
      if (singleChild?.props?.title?.length > 0) {
        return [cloneElement(singleChild, { title: null }), singleChild.props.title];
      }
    }

    const currentColumnCount = currentNumberOfColumns;
    if (currentColumnCount === 1) {
      return [clonedChildrenForSingleColumn(children, currentLabelSpan), titleText];
    }

    const rows = [];
    const childrenArray = Children.toArray(children);
    const estimatedNumberOfGroupRows = childrenArray.length / currentColumnCount;
    for (let i = 0; i < estimatedNumberOfGroupRows; i++) {
      rows[i] = childrenArray.slice(i * currentColumnCount, i * currentColumnCount + currentColumnCount);
    }

    const maxRowsPerRow: number[] = [];
    rows.forEach((rowGroup: ReactElement[], rowIndex) => {
      const numberOfRowsOfEachForm = rowGroup.map((row) => {
        if ((row.type as any).displayName === 'FormItem') {
          return 1;
        }
        return Children.count(row.props.children) + 1;
      });

      maxRowsPerRow[rowIndex] = Math.max(...numberOfRowsOfEachForm);
    });

    let totalRowCount = 2;

    rows.forEach((column: ReactElement[], rowIndex) => {
      const rowsForThisRow = maxRowsPerRow[rowIndex];
      column.forEach((cell, columnIndex) => {
        const titleStyles: CSSProperties = {
          gridColumnEnd: 'span 12',
          gridColumnStart: columnIndex * 12 + 1,
          gridRowStart: totalRowCount,
          display: 'flex',
          alignItems: 'center',
          fontFamily: ThemingParameters.sapFontFamily,
          height: CssSizeVariables.sapWcrFormGroupTitleHeight,
          lineHeight: CssSizeVariables.sapWcrFormGroupTitleHeight,
          color: ThemingParameters.sapTextColor,
          fontSize: ThemingParameters.sapFontSize,
          fontWeight: 'bold',
          backgroundColor: ThemingParameters.sapGroup_TitleBackground,
          margin: 0,
          paddingTop: '1rem'
        };

        if (cell?.props?.titleText) {
          computedFormGroups.push(
            <h6
              style={titleStyles}
              title={cell.props.titleText}
              aria-label={cell.props.titleText}
              key={`title-col-${columnIndex}-row-${totalRowCount}`}
            >
              {cell.props.titleText}
            </h6>
          );
        }

        for (let i = 0; i < rowsForThisRow; i++) {
          const itemToRender =
            (cell.type as any).displayName === 'FormGroup'
              ? Children.toArray(cell.props.children)[i]
              : (cell.type as any).displayName === 'FormItem' && i === 0
              ? cell
              : null;

          if (itemToRender) {
            computedFormGroups.push(
              cloneElement(itemToRender as ReactElement, {
                key: `col-${columnIndex}-row-${totalRowCount + i}`,
                columnIndex,
                lastGroupItem: (cell.type as any).displayName === 'FormGroup' && rowsForThisRow - 2 === i,
                rowIndex: totalRowCount + i + 1,
                labelSpan: currentLabelSpan
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

    return [computedFormGroups, titleText];
  }, [children, currentRange, titleText, currentNumberOfColumns, currentLabelSpan]);

  const formClassNames = clsx(
    classes.form,
    classes[`labelSpan${((currentLabelSpan - 1) % 12) + 1}`],
    classes[backgroundDesign.toLowerCase()],
    className
  );

  const CustomTag = as as ElementType;
  return (
    <CustomTag
      ref={componentRef}
      slot={slot}
      className={formClassNames}
      style={style}
      data-columns={currentNumberOfColumns}
      {...rest}
    >
      {updatedTitle && (
        <Title level={TitleLevel.H3} className={classes.formTitle}>
          {updatedTitle}
        </Title>
      )}
      {formGroups}
    </CustomTag>
  );
});

Form.displayName = 'Form';

Form.defaultProps = {
  as: 'form',
  backgroundDesign: FormBackgroundDesign.Transparent,
  columnsS: 1,
  columnsM: 1,
  columnsL: 1,
  columnsXL: 2,
  labelSpanS: 12,
  labelSpanM: 2,
  labelSpanL: 4,
  labelSpanXL: 4
};

export { Form };
