import { Children, ReactElement, RefObject } from 'react';

export const safeGetChildrenArray = <T = any>(children): T[] => Children.toArray(children).filter(Boolean);

export const getSectionById = (sections: ReactElement<any> | ReactElement<any>[], id) => {
  return safeGetChildrenArray(sections).find((objectPageSection) => objectPageSection.props?.id === id);
};

export const extractSectionIdFromHtmlId = (id) => {
  return id.replace(/^ObjectPageSection-/, '');
};

export const getLastObjectPageSection = (ref: RefObject<HTMLDivElement>): HTMLElement => {
  const sections = ref.current.querySelectorAll<HTMLElement>('[id^="ObjectPageSection"]');
  if (!sections || sections.length < 1) {
    return null;
  }

  return sections[sections.length - 1];
};
