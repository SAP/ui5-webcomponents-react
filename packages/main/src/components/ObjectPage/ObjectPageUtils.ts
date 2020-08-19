import { Children, ReactElement, ReactNode, RefObject } from 'react';

export const safeGetChildrenArray = <T = Exclude<ReactNode, boolean | null | undefined>>(children: unknown): T[] =>
  Children.toArray(children).filter(Boolean) as T[];

export const getSectionById = (sections: ReactElement<any> | ReactElement<any>[], id) => {
  return safeGetChildrenArray(sections).find((objectPageSection: ReactElement) => objectPageSection.props?.id === id);
};

export const extractSectionIdFromHtmlId = (id: string) => {
  return id.replace(/^ObjectPageSection-/, '');
};

export const getLastObjectPageSection = (ref: RefObject<HTMLDivElement>): HTMLElement => {
  const sections = ref.current.querySelectorAll<HTMLElement>('[id^="ObjectPageSection"]');
  if (!sections || sections.length < 1) {
    return null;
  }

  return sections[sections.length - 1];
};
