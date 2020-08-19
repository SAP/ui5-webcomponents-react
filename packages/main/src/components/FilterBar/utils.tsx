import { cloneElement } from 'react';

export const filterValue = (ref, child) => {
  const tagName = ref.tagName;
  let filterItemProps = {};
  if (
    tagName === 'UI5-INPUT' ||
    tagName === 'UI5-DATE-PICKER' ||
    tagName === 'UI5-DATETIME-PICKER' ||
    tagName === 'UI5-DATERANGE-PICKER' ||
    tagName === 'UI5-TIME-PICKER' ||
    tagName === 'UI5-DURATION-PICKER'
  ) {
    filterItemProps = { value: ref.value };
  }
  if (tagName === 'UI5-COMBOBOX') {
    filterItemProps = { value: ref.value, filterValue: ref.filterValue };
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
