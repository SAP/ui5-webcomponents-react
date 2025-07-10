import type { ReactElement, KeyboardEvent } from 'react';
import { isValidElement } from 'react';
import { safeGetChildrenArray } from '../../internal/safeGetChildrenArray.js';
import type { ObjectPageSectionPropTypes } from '../ObjectPageSection/index.js';

export const getSectionById = (sections, id) => {
  return safeGetChildrenArray(sections).find((objectPageSection) => {
    return (
      isValidElement(objectPageSection) &&
      (objectPageSection as ReactElement<ObjectPageSectionPropTypes>).props?.id === id
    );
  });
};

export const getSectionElementById = (objectPage: HTMLDivElement, isSubSection: boolean, id: string | undefined) => {
  return objectPage?.querySelector<HTMLElement>(
    `#${isSubSection ? 'ObjectPageSubSection' : 'ObjectPageSection'}-${CSS.escape(id)}`,
  );
};

interface NavigateSectionParam {
  e: KeyboardEvent<HTMLDivElement>;
  onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
  componentName: 'ObjectPageSection' | 'ObjectPageSubSection';
}

export function navigateSections({ e, onKeyDown, componentName }: NavigateSectionParam) {
  if (typeof onKeyDown === 'function') {
    onKeyDown(e);
  }
  if (e.currentTarget !== e.target) {
    return;
  }

  const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
  const prevSibling = e.currentTarget.previousElementSibling as HTMLElement;
  if (
    nextSibling &&
    (e.key === 'ArrowDown' || e.key === 'ArrowRight') &&
    nextSibling.dataset.componentName === componentName
  ) {
    e.preventDefault();
    e.currentTarget.tabIndex = -1;
    nextSibling.tabIndex = 0;
    nextSibling.focus({ preventScroll: true });
    nextSibling.scrollIntoView({ behavior: 'instant', block: 'start' });
  }

  if (
    prevSibling &&
    (e.key === 'ArrowUp' || e.key === 'ArrowLeft') &&
    prevSibling.dataset.componentName === componentName
  ) {
    e.preventDefault();
    e.currentTarget.tabIndex = -1;
    prevSibling.tabIndex = 0;
    prevSibling.focus({ preventScroll: true });
    prevSibling.scrollIntoView({
      behavior: 'instant',
      block: 'start',
    });
  }
}
