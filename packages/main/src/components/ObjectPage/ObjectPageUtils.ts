import { isValidElement } from 'react';
import { safeGetChildrenArray } from '../../internal/safeGetChildrenArray.js';

export const getSectionById = (sections, id) => {
  return safeGetChildrenArray(sections).find((objectPageSection) => {
    return isValidElement(objectPageSection) && objectPageSection.props?.id === id;
  });
};
