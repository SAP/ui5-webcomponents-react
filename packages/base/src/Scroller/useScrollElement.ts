import { useContext, useEffect } from 'react';
import { ScrollContext } from '@ui5/webcomponents-react-base/lib/ScrollContext';

export const useScrollElement = (id, htmlRef, options = {}) => {
  const { registerElement, unregisterElement } = useContext(ScrollContext);

  useEffect(() => {
    if (htmlRef.current) {
      registerElement({
        id,
        htmlRef,
        ...options
      });
    }
    return () => {
      unregisterElement(id);
    };
  }, [htmlRef.current]);
};
