import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { createUseStyles } from 'react-jss';
import { getCurrentRange } from '@ui5/webcomponents-react-base/lib/Device';
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
 */
const Form: FC<FormPropTypes> = forwardRef((props: FormPropTypes, ref: Ref<HTMLFormElement>) => {
  const {
    title,
    children,
    className,
    slot,
    style,
    tooltip,
    columnsS,
    columnsM,
    columnsL,
    columnsXL,
    labelSpanS,
    labelSpanM,
    labelSpanL,
    labelSpanXL,
    as
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

  const formRef = useConsolidatedRef<HTMLFormElement>(ref);
  // use the window range set as first best guess
  const [currentRange, setCurrentRange] = useState(getCurrentRange('StdExt', window.innerWidth).name);
  const lastRange = useRef(currentRange);

  useEffect(() => {
    const observer = new ResizeObserver(([form]) => {
      const newRange = getCurrentRange('StdExt', form.contentRect.width).name;
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

  const currentNumberOfColumns = columnsMap.get(currentRange);
  const currentLabelSpan = labelSpanMap.get(currentRange);

  const [formGroups, updatedTitle] = useMemo(() => {
    const computedFormGroups: any[] = [];

    if (Children.count(children) === 1 && !title && (children as ReactElement).props.title?.length > 0) {
      return [cloneElement(children as ReactElement, { title: null }), (children as ReactElement).props.title];
    }

    const currentColumnCount = currentNumberOfColumns;
    if (currentColumnCount === 1) {
      return [children, title];
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

        if (cell?.props?.title) {
          computedFormGroups.push(
            <h6
              style={titleStyles}
              title={cell.props.title}
              aria-label={cell.props.title}
              key={`title-col-${columnIndex}-row-${totalRowCount}`}
            >
              {cell.props.title}
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

    return [computedFormGroups, title];
  }, [children, currentRange, title, currentNumberOfColumns, currentLabelSpan]);
  const passThroughProps = usePassThroughHtmlProps(props);

  const formClassNames = StyleClassHelper.of(classes.form)
    .put(classes[`labelSpan${((currentLabelSpan - 1) % 12) + 1}`])
    .putIfPresent(className);

  const CustomTag = as as React.ElementType;
  return (
    <CustomTag
      ref={formRef}
      slot={slot}
      className={formClassNames.valueOf()}
      title={tooltip}
      style={style}
      data-columns={currentNumberOfColumns}
      {...passThroughProps}
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
