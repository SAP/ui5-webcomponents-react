import { cloneElement } from 'react';

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
  let filterItemProps = {};
  if (inputTagNames.has(tagName)) {
    filterItemProps = { value: ref.value };
  }
  if (tagName === 'UI5-SELECT' || tagName === 'UI5-MULTI-COMBOBOX') {
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
  if (tagName === 'UI5-SWITCH' || tagName === 'UI5-CHECKBOX') {
    filterItemProps = { checked: ref.checked };
  }
  return filterItemProps;
};

export const renderSearchWithValue = (renderSearchElement, searchValue) => {
  return cloneElement(renderSearchElement, { value: searchValue ?? renderSearchElement?.props?.value });
};
