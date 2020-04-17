import { cloneElement } from 'react';

export const filterValue = (ref, child) => {
  const tagName = ref.tagName;
  let filterItemProps = {};
  if (tagName === 'UI5-INPUT' || tagName === 'UI5-DATEPICKER') {
    filterItemProps = { value: ref.value };
  }
  if (tagName === 'UI5-SELECT' || tagName === 'UI5-MULTI-COMBOBOX') {
    const selectedIndices = Array.from(ref.children)
      .map((item, index) => (item.selected ? index : false))
      .filter((el) => el !== false);
    const options = child.props.children.props.children.map((item, index) => {
      if (selectedIndices.includes(index)) {
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
  return cloneElement(renderSearchElement, { value: searchValue });
};
