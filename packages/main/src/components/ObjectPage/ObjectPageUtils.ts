import { Children, ReactElement } from 'react';

export const safeGetChildrenArray = <T = any>(children): Array<T> => Children.toArray(children).filter(Boolean);

export const findSectionIndexById = (sections: ReactElement<any> | Array<ReactElement<any>>, id) => {
  const index = safeGetChildrenArray(sections).findIndex((objectPageSection) => objectPageSection.props?.id === id);
  if (index === -1) {
    return 0;
  }
  return index;
};

export const getProportionateScrollTop = (activeContainer, passiveContainer, base) => {
  const activeHeight = activeContainer.current.getBoundingClientRect().height;
  const passiveHeight = passiveContainer.current.getBoundingClientRect().height;

  return (base / activeHeight) * passiveHeight;
};

export const bindScrollEvent = (scrollContainer, handler) => {
  if (scrollContainer.current && handler.current) {
    scrollContainer.current.addEventListener('scroll', handler.current, { passive: true });
  }
};

export const removeScrollEvent = (scrollContainer, handler) => {
  if (scrollContainer.current && handler.current) {
    scrollContainer.current.removeEventListener('scroll', handler.current);
  }
};
