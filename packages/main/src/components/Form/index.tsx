'use client';

import TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import { Device, useStylesheet, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ElementType, ReactNode } from 'react';
import { forwardRef, useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { FormBackgroundDesign } from '../../enums/index.js';
import type { CommonProps } from '../../types/index.js';
import { Title } from '../../webComponents/index.js';
import { classNames, styleData } from './Form.module.css.js';
import { FormContext } from './FormContext.js';
import type { FormContextType, FormElementTypes, FormGroupLayoutInfo, FormItemLayoutInfo, ItemInfo } from './types.js';

const recalcReducerFn = (prev: number) => {
  return prev + 1;
};

type DisplayRange = 'Phone' | 'Tablet' | 'Desktop' | 'LargeDesktop';

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
 * It is possible to change the alignment of all labels by setting the CSS `align-items` property. By default, labels are centered when `labelSpan` is less than 12 and aligned to the start when `labelSpan` is equal to 12."
 *
 * __Accessibility features:__
 *
 * The Form only supports announcing labels and groups by screen readers for UI5 Web Components inputs like `Input (ui5-input)`, `CheckBox (ui5-checkbox)`,`DatePicker (ui5-date-picker)`, etc.
 * For other inputs, this behavior must be implemented manually. Also, please note that when passing custom React components to the `FilterItem`, it's mandatory to pass through the `accessibleNameRef` prop, as otherwise the label won't be announced.
 *
 * __Note:__ The `Form` calculates its width based on the available space of its container. If the container also dynamically adjusts its width to its contents, you must ensure that you specify a fixed width, either for the container or for the `Form` itself. (e.g. when used inside a 'popover').
 *
 * __Note:__ It's not recommended mixing `FormGroup`s with standalone `FormItem`s, either only use FormItems inside a Form, or wrap all items in one or more groups.
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

  const [items, setItems] = useState<Map<string, ItemInfo>>(() => new Map());
  useStylesheet(styleData, Form.displayName);

  const columnsMap = new Map<DisplayRange, number>();
  columnsMap.set('Phone', columnsS);
  columnsMap.set('Tablet', columnsM);
  columnsMap.set('Desktop', columnsL);
  columnsMap.set('LargeDesktop', columnsXL);

  const labelSpanMap = new Map<DisplayRange, number>();
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
      const width = form.contentRect.width;
      if (width) {
        const rangeInfo = Device.getCurrentRange(form.contentRect.width);
        if (rangeInfo && lastRange.current !== rangeInfo.name) {
          lastRange.current = rangeInfo.name;
          setCurrentRange(rangeInfo.name);
        }
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

  const registerItem = useCallback((id: string, type: FormElementTypes, groupId?: string) => {
    setItems((prev) => {
      const clonedMap = new Map(prev);
      if (groupId) {
        const groupItem = clonedMap.get(groupId);
        if (groupItem) {
          groupItem.formItemIds = new Set(groupItem.formItemIds).add(id);
        } else {
          clonedMap.set(groupId, {
            id: groupId,
            type: 'formGroup',
            formItemIds: new Set([id])
          });
        }
      } else {
        if (!clonedMap.has(id)) {
          clonedMap.set(id, { id, type, formItemIds: new Set() });
        }
      }
      return clonedMap;
    });
  }, []);

  const unregisterItem = useCallback((id: string, groupId?: string) => {
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
      return clonedMap;
    });
  }, []);

  const formLayoutContextValue = useMemo((): Omit<FormContextType, 'labelSpan' | 'recalcTrigger'> => {
    const formItems: FormItemLayoutInfo[] = [];
    const formGroups: FormGroupLayoutInfo[] = [];

    let index = -1;
    // depending on the labelSpan, each form item takes up either 1 (labelSpan < 12) or 2 (labelSpan == 12) rows
    const rowsPerFormItem = currentLabelSpan === 12 ? 2 : 1;
    // no. of rows in a "line" - e.g. when a group has 5 items, the next line needs to start below that group
    let nextRowIndex = (titleText ? 2 : 1) + rowsPerFormItem - 1;
    const rowsWithGroup = {};

    const columnsWithItems: Array<ItemInfo[]> = [];
    const rowsPerColumn = Math.ceil(items.size / currentNumberOfColumns);

    const allItemsArray = Array.from(items.entries());
    const onlyFormItems = allItemsArray.every(([, item]) => item.type === 'formItem');
    const onlyFormGroups = allItemsArray.every(([, item]) => item.type === 'formGroup');
    const columnsToFill = Math.max(0, currentNumberOfColumns - allItemsArray.length);

    allItemsArray.forEach(([id, item], idx) => {
      // when only FormItems are used, the Form should build up from top to bottom, then left to right
      // when FormGroups are used, the Form should build up from left to right, then top to bottom
      const localColumnIndex = onlyFormItems ? Math.floor(idx / rowsPerColumn) : idx % currentNumberOfColumns;
      columnsWithItems[localColumnIndex] ??= [];
      columnsWithItems[localColumnIndex].push({ id, ...item });
    });

    if (onlyFormItems) {
      // if the last column only contains one row, balance it with the previous column (only if the previous column has 3 or more rows)
      if (columnsWithItems.at(-1)?.length === 1 && columnsWithItems.at(-2)?.length > 2) {
        columnsWithItems.at(-1).unshift(columnsWithItems.at(-2).pop());
      }
      columnsWithItems.forEach((columnItems, columnIndex) => {
        let rowIndex = nextRowIndex;
        columnItems.forEach(({ id }) => {
          index++;
          formItems.push({ id, index, columnIndex, rowIndex });
          rowIndex += rowsPerFormItem;
        });
      });
    } else if (onlyFormGroups && columnsToFill > 0) {
      const columnsToBalance = [...columnsWithItems]
        .sort(([a], [b]) => b.formItemIds.size - a.formItemIds.size)
        .slice(0, columnsToFill);
      for (const column of columnsToBalance) {
        const currentColumnIndex = columnsWithItems.findIndex(([c]) => {
          return c.id === column.at(0).id;
        });
        const unbalancedFormItems: Set<string> = column.at(0).formItemIds;
        const movedFormItems = new Set([
          ...Array.from(unbalancedFormItems).slice(Math.ceil(unbalancedFormItems.size / 2))
        ]);
        columnsWithItems.splice(currentColumnIndex + 1, 0, [
          {
            id: `${column.at(0).id}-clone`,
            type: column.at(0).type,
            formItemIds: movedFormItems
          }
        ]);
        movedFormItems.forEach((item) => {
          unbalancedFormItems.delete(item);
        });
      }

      const isInitialRender = columnsWithItems.every((itemInfos) => itemInfos.every((i) => i.formItemIds.size === 0));
      columnsWithItems.forEach((el, index) => {
        const allGroupsEmpty = el.every((i) => i.formItemIds.size === 0);
        if (!isInitialRender && allGroupsEmpty) {
          columnsWithItems.splice(index, 1);
        }
      });

      let localColumnIndex = 0;
      let rowIndex = (titleText ? 2 : 1) + rowsPerFormItem - 1;

      columnsWithItems.forEach(([{ id, formItemIds }]) => {
        const columnIndex = localColumnIndex % currentNumberOfColumns;
        index++;
        rowsWithGroup[rowIndex] = true;
        formGroups.push({ id, index, columnIndex, rowIndex });
        let localRowIndex = 1;
        let localIndex = 1;

        if (!formItemIds.size) {
          nextRowIndex++;
        }
        formItemIds.forEach((itemId, _, set) => {
          formItems.push({
            id: itemId,
            index,
            groupId: id,
            columnIndex,
            rowIndex: rowIndex + localRowIndex,
            lastGroupItem: set.size === localIndex
          });
          if (set.size === localIndex) {
            if (nextRowIndex < rowIndex + localRowIndex + rowsPerFormItem) {
              nextRowIndex = rowIndex + localRowIndex + rowsPerFormItem;
            }
          }
          localRowIndex += rowsPerFormItem;
          localIndex++;
        });

        if ((localColumnIndex + 1) % currentNumberOfColumns === 0) {
          rowIndex = nextRowIndex;
        }
        localColumnIndex++;
      });
    } else {
      let localColumnIndex = 0;
      let rowIndex = (titleText ? 2 : 1) + rowsPerFormItem - 1;

      items.forEach(({ type, formItemIds }, id) => {
        const columnIndex = localColumnIndex % currentNumberOfColumns;
        index++;
        if (type === 'formGroup') {
          rowsWithGroup[rowIndex] = true;
          formGroups.push({ id, index, columnIndex, rowIndex });
          let localRowIndex = 1;
          let localIndex = 1;

          if (!formItemIds.size) {
            nextRowIndex++;
          }
          formItemIds.forEach((itemId, _, set) => {
            formItems.push({
              id: itemId,
              index,
              groupId: id,
              columnIndex,
              rowIndex: rowIndex + localRowIndex,
              lastGroupItem: set.size === localIndex
            });
            if (set.size === localIndex) {
              if (nextRowIndex < rowIndex + localRowIndex + rowsPerFormItem) {
                nextRowIndex = rowIndex + localRowIndex + rowsPerFormItem;
              }
            }
            localRowIndex += rowsPerFormItem;
            localIndex++;
          });
        } else {
          if (nextRowIndex < rowIndex + 1) {
            nextRowIndex += rowsPerFormItem;
          }
          formItems.push({ id, index, columnIndex, rowIndex });
        }

        if ((localColumnIndex + 1) % currentNumberOfColumns === 0) {
          rowIndex = nextRowIndex;
        }
        localColumnIndex++;
      });
    }

    return { formItems, formGroups, registerItem, unregisterItem, rowsWithGroup };
  }, [items, registerItem, unregisterItem, currentNumberOfColumns, titleText, currentLabelSpan]);
  const formClassNames = clsx(
    classNames.form,
    classNames[backgroundDesign.toLowerCase()],
    currentLabelSpan == 12 && classNames.labelSpan12
  );
  const CustomTag = as as ElementType;

  const prevFormItems = useRef<undefined | FormItemLayoutInfo[]>(undefined);
  const prevFormGroups = useRef<undefined | FormGroupLayoutInfo[]>(undefined);

  const [recalcTrigger, fireRecalc] = useReducer(recalcReducerFn, 0, undefined);
  useEffect(() => {
    if (prevFormItems.current || prevFormGroups.current) {
      let hasChanged =
        formLayoutContextValue.formItems.length !== prevFormItems.current.length ||
        formLayoutContextValue.formGroups.length !== prevFormGroups.current.length;
      if (!hasChanged) {
        hasChanged = !formLayoutContextValue.formGroups.every(
          (item, index) => prevFormGroups.current.findIndex((element) => element.id === item.id) === index
        );
      }
      if (!hasChanged) {
        hasChanged = !formLayoutContextValue.formItems.every(
          (item, index) => prevFormItems.current.findIndex((element) => element.id === item.id) === index
        );
      }
      if (hasChanged) {
        fireRecalc();
      }
    }
    prevFormItems.current = formLayoutContextValue.formItems;
    prevFormGroups.current = formLayoutContextValue.formGroups;
  }, [formLayoutContextValue.formItems, formLayoutContextValue.formGroups]);

  return (
    <FormContext.Provider value={{ ...formLayoutContextValue, labelSpan: currentLabelSpan, recalcTrigger }}>
      <CustomTag
        className={clsx(classNames.formContainer, className)}
        suppressHydrationWarning={true}
        ref={componentRef}
        style={{
          ...style,
          '--_ui5wcr_form_label_span_s': labelSpanS,
          '--_ui5wcr_form_label_span_m': labelSpanM,
          '--_ui5wcr_form_label_span_l': labelSpanL,
          '--_ui5wcr_form_label_span_xl': labelSpanXL,
          '--_ui5wcr_form_columns_s': columnsS,
          '--_ui5wcr_form_columns_m': columnsM,
          '--_ui5wcr_form_columns_l': columnsL,
          '--_ui5wcr_form_columns_xl': columnsXL
        }}
        aria-label={titleText}
        {...rest}
      >
        <div className={formClassNames}>
          {titleText && (
            <Title level={TitleLevel.H3} className={classNames.formTitle} style={{ gridColumn: '1 / -1' }}>
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
