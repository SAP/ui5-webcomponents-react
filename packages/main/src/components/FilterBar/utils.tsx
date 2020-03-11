import { cloneElement, ReactElement } from 'react';

export const setPropsOfChildren = (children, currentRef) => {
  return children.map((child) => {
    if (child.props.children.props[currentRef]?.children) {
      const childrenOfChild = child.props.children;
      if (
        child.props.children.props[currentRef]?.tagName === 'UI5-SELECT' ||
        child.props.children.props[currentRef]?.tagName === 'UI5-MULTI-COMBOBOX'
      ) {
        const selectedIndices = Array.from(child.props.children.props[currentRef].children)
          .map((item, index) => (item._state.selected ? index : false))
          .filter((el) => el !== false);
        const options = child.props.children.props.children.map((item, index) => {
          if (selectedIndices.includes(index)) {
            return cloneElement(item, { selected: true });
          }
          return cloneElement(item, { selected: false });
        });
        return cloneElement(child, {
          children: { ...childrenOfChild, props: { ...childrenOfChild.props, children: options } }
        });
      }
      if (
        child.props.children.props[currentRef]?.tagName === 'UI5-INPUT' ||
        child.props.children.props[currentRef]?.tagName === 'UI5-DATEPICKER'
      ) {
        return cloneElement(child, {
          children: {
            ...childrenOfChild,
            props: { ...childrenOfChild.props, value: child.props.children.props[currentRef]._state.value }
          }
        });
      }
      if (
        child.props.children.props[currentRef]?.tagName === 'UI5-SWITCH' ||
        child.props.children.props[currentRef]?.tagName === 'UI5-CHECKBOX'
      ) {
        return cloneElement(child, {
          children: {
            ...childrenOfChild,
            props: { ...childrenOfChild.props, checked: child.props.children.props[currentRef]._state.checked }
          }
        });
      }
      return child;
    }
    return child;
  });
};

export const addRef = (children, refsArray, currentRef) =>
  children.map((child) => {
    const childRef = refsArray.filter((item) => item.key === child.key);
    const childrenAttributes = child.props.children;
    const childrenProps = child.props.children.props;
    return cloneElement(child as ReactElement<any>, {
      children: { ...childrenAttributes, props: { ...childrenProps, [currentRef]: childRef[0]?.node } }
    });
  });

export const renderSearchWithValue = (searchElement, searchValue) => {
  return cloneElement(searchElement(), { value: searchValue });
};
