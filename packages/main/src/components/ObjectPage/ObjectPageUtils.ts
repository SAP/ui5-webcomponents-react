import type { ReactElement } from 'react';
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

export const extractSectionIdFromHtmlId = (id: string) => {
  if (!id) return null;
  return id.replace(/^ObjectPageSection-/, '');
};
