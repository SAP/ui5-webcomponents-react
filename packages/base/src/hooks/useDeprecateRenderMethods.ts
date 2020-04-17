import { useEffect, useMemo } from 'react';
import { deprecationNotice } from '../utils';

export const useDeprecateRenderMethods = (props, renderMethodName, slotName) => {
  useEffect(() => {
    if (renderMethod) {
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
