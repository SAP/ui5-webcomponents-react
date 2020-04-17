import  { useEffect, useMemo } from 'react';
import { deprecationNotice } from '../utils';

export const useDeprecateRenderMethods = (renderMethod, slot, slotName) => {
  useEffect(() => {
    if (renderMethod) {

      const renderMethodName = renderMethod.name;
      deprecationNotice(
        `${renderMethodName}`,
        `The prop '${renderMethodName}' is deprecated and will be removed in the next major release.\nPlease use '${slotName}' instead.`
      );
    }
  }, []);

  return useMemo(() => {
    return slot ?? (typeof renderMethod === 'function' ? renderMethod() : null);
  }, [renderMethod, slot]);
};
