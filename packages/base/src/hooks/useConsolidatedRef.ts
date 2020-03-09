import { RefObject, useEffect, useMemo, useRef } from 'react';

export const useConsolidatedRef = <T>(ref): RefObject<T> => {
  const localRef: RefObject<T> = useRef(null);

  const consolidatedRef = useMemo(() => {
    if (!ref || typeof ref === 'function') {
      return localRef;
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
