import { RefObject, useEffect, useMemo, useRef } from 'react';

export const useConsolidatedRef = <T>(ref): RefObject<T> => {
  const localPopoverRef: RefObject<T> = useRef(null);

  const consolidatedRef = useMemo(() => {
    if (!ref || typeof ref === 'function') {
      return localPopoverRef;
    }
    return ref;
  }, [ref]);

  useEffect(() => {
    if (typeof ref === 'function') {
      // @ts-ignore
      ref(consolidatedRef.current);
    }
  }, [consolidatedRef.current]);

  return consolidatedRef;
};
