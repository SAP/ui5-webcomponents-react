import type { Ref } from 'react';
import { cloneElement } from 'react';
import { getTagNameWithoutScopingSuffix } from '../../internal/utils.js';

const inputTagNames = new Set([
  'UI5-COMBOBOX',
  'UI5-DATE-PICKER',
  'UI5-DATERANGE-PICKER',
  'UI5-DATETIME-PICKER',
  'UI5-DURATION-PICKER',
  'UI5-INPUT',
  'UI5-MULTI-INPUT',
  'UI5-RATING-INDICATOR',
  'UI5-STEP-INPUT',
  'UI5-TIME-PICKER'
]);

export const filterValue = (ref, child) => {
  const tagName = ref.tagName;
  const tagNameWithoutSuffix = getTagNameWithoutScopingSuffix(tagName);

  let filterItemProps = {};
  if (inputTagNames.has(tagNameWithoutSuffix)) {
    filterItemProps = { value: ref.value ?? '' };
  }
  if (tagNameWithoutSuffix === 'UI5-SELECT' || tagNameWithoutSuffix === 'UI5-MULTI-COMBOBOX') {
    const selectedIndices = Array.from(ref.children as HTMLCollectionOf<any>)
      .map((item, index) => (item.selected ? index : false))
      .filter((el) => el !== false);
    const selectedIndicesSet = new Set(selectedIndices);
    const options = child.props.children.props.children?.map((item, index) => {
      if (selectedIndicesSet.has(index)) {
        return cloneElement(item, { selected: true });
      }
      return cloneElement(item, { selected: false });
    });
    filterItemProps = { children: options };
  }
  if (tagNameWithoutSuffix === 'UI5-SWITCH' || tagNameWithoutSuffix === 'UI5-CHECKBOX') {
    filterItemProps = { checked: ref.checked };
  }
  return filterItemProps;
};

export const renderSearchWithValue = (renderSearchElement, searchValue, defaultProps = {}) => {
  const props = { ...defaultProps, ...renderSearchElement?.props };
  return cloneElement(renderSearchElement, {
    ...props,
    'data-component-name': 'FilterBarSearch',
    value: searchValue ?? renderSearchElement?.props?.value
  });
};

export const syncRef = (ref: Ref<unknown>, node: unknown): void => {
  if (ref) {
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref.hasOwnProperty('current')) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref.current = node;
    }
  }
};
