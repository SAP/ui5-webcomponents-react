import { RefObject, isValidElement } from 'react';
import { safeGetChildrenArray } from '../../internal/safeGetChildrenArray';

export const getSectionById = (sections, id) => {
  return safeGetChildrenArray(sections).find((objectPageSection) => {
    return isValidElement(objectPageSection) && objectPageSection.props?.id === id;
  });
};

export const extractSectionIdFromHtmlId = (id: string) => {
  if (!id) return null;
  return id.replace(/^ObjectPageSection-/, '');
};

export const getLastObjectPageSection = (ref: RefObject<HTMLDivElement>, alwaysSetMargin): HTMLElement => {
  const sections = ref.current?.querySelectorAll<HTMLElement>('[id^="ObjectPageSection"]');

  if (!sections || sections.length < 1) {
    return null;
  }
  if (!alwaysSetMargin && sections.length === 1) {
    if (sections[0].querySelectorAll('[id^="ObjectPageSubSection"]').length === 0) {
      return null;
    }
  }

  return sections[sections.length - 1];
};
