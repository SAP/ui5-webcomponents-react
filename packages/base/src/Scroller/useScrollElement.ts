import { ScrollContext } from '@ui5/webcomponents-react-base/lib/ScrollContext';
import { useContext, useEffect } from 'react';

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
