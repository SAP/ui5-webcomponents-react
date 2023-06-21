import { Device, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import React, {
  createContext,
  ElementType,
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { FormBackgroundDesign, TitleLevel } from '../../enums/index.js';
import { CommonProps } from '../../interfaces/index.js';
import { Title } from '../../webComponents/index.js';
import { FormContextType, FormElementTypes, FormGroupLayoutInfo, FormItemLayoutInfo, ItemInfo } from './types.js';
import { FormContext } from './FormContext.js';
import { styles } from './Form.jss.js';

const useStyles = createUseStyles(styles, { name: 'Form' });

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
  // Items - Flatterened; Batched => Only one render; Works for react < v18 the same
  // FormItems and FormGroups should share one useState to prevent multiple renders; Had problems with this
  const [items, setItems] = useState<Map<string, ItemInfo>>(() => new Map());
  const classes = useStyles();

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
  const currentLabelSpan = labelSpanMap.get(currentRange);
  const currentNumberOfColumns = columnsMap.get(currentRange);

  // console.log('items', items);

  const registerItem = useCallback((id: string, type: FormElementTypes, groupId?: string) => {
    // console.log("Call registerItem for id: " + id, type, groupId);
    // console.log('Call registerItem');
    setItems((state) => {
      const clonedMap = new Map(state);
      if (groupId) {
        // Only FormItem can set formGroup - groupId
        const groupItem = clonedMap.get(groupId);
        if (groupItem) {
          groupItem.formItemIds = new Set(groupItem.formItemIds).add(id);
        } else {
          clonedMap.set(groupId, {
            type: 'formGroup',
            formItemIds: new Set([id])
          });
        }
      } else {
        // FormGroup without FormItems; Because childrens will register its parent first. (Bottom up)
        // or FormItem without FormGroup
        if (!clonedMap.has(id)) {
          clonedMap.set(id, { type, formItemIds: new Set() });
        }
      }
      // console.log("Register", clonedMap);
      return clonedMap;
    });
  }, []);

  const unregisterItem = useCallback((id: string, groupId?: string) => {
    // console.log('Call unregisterItem for id: ' + id);
    setItems((state) => {
      const clonedMap = new Map(state);
      if (groupId) {
        const groupItem = clonedMap.get(groupId);
        if (groupItem) {
          groupItem.formItemIds.delete(id);
        }
      } else {
        clonedMap.delete(id);
      }
      // console.log("Unregister " + id, clonedMap);
      return clonedMap;
    });
  }, []);

  // FormLayoutInfoContext
  const formLayoutContextValue = useMemo((): FormContextType => {
    // TODO: All layout calculations which should be sent to the childrens
    // Note that you cant add ReactNodes here like FormGroupTitle, for this the FormGroup renders the FormGroupTitle (Makes sense :D)
    // For dynamic ReactNodes pls add them to FormItem or FormGroup with the calculation in this function
    const formItems: FormItemLayoutInfo[] = [];
    const formGroups: FormGroupLayoutInfo[] = [];

    let index = -1;
    let localColumnIndex = 0;
    let rowIndex = titleText ? 2 : 1;
    // no. of rows in a "line" - e.g. when a group has 5 items, the next line needs to start below that group
    let nextRowIndex = rowIndex;
    const rowsWithGroup = {};

    items.forEach(({ type, formItemIds }, id) => {
      const columnIndex = localColumnIndex % currentNumberOfColumns;
      index++;
      if (type === 'formGroup') {
        rowsWithGroup[rowIndex] = true;
        formGroups.push({ id, index, columnIndex, rowIndex, isGroup: true });
        let inGroupIndex = 0;
        let localIndex = 0;

        formItemIds.forEach((itemId, _, set) => {
          formItems.push({
            id: itemId,
            index,
            groupIndex: inGroupIndex,
            groupId: id,
            columnIndex,
            rowIndex: rowIndex + localIndex + 1
          });
          if (set.size - 1 === localIndex) {
            if (nextRowIndex < rowIndex + localIndex + 1) {
              nextRowIndex = rowIndex + localIndex + 1;
            }
          }
          localIndex++;
          inGroupIndex++;
        });
      } else {
        if (nextRowIndex < rowIndex + 1) {
          nextRowIndex++;
        }
        formItems.push({ id, index, columnIndex, rowIndex });
      }
      if ((localColumnIndex + 1) % currentNumberOfColumns === 0) {
        rowIndex += nextRowIndex;
      }
      localColumnIndex++;
    });

    return { formItems, formGroups, registerItem, unregisterItem, rowsWithGroup };
  }, [items, registerItem, unregisterItem, currentNumberOfColumns, titleText]);
  const formClassNames = clsx(classes.form, classes[backgroundDesign.toLowerCase()]);
  const CustomTag = as as ElementType;
  // console.log('layoutcontextval', formLayoutContextValue);
  return (
    <FormContext.Provider value={{ ...formLayoutContextValue, labelSpan: currentLabelSpan }}>
      <CustomTag
        className={clsx(classes.formContainer, className)}
        suppressHydrationWarning={true}
        ref={componentRef}
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
        <div className={formClassNames}>
          {titleText && (
            <Title level={TitleLevel.H3} className={classes.formTitle}>
              {titleText}
            </Title>
          )}
          {children}
        </div>
      </CustomTag>
    </FormContext.Provider>
  );
});

Form.displayName = 'Form';

export { Form };
