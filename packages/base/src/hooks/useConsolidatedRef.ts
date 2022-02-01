import { MutableRefObject, useEffect, useMemo, useRef } from 'react';
import { deprecationNotice } from '../utils/index';

export const useConsolidatedRef = <T>(ref): MutableRefObject<T> => {
  const localRef: MutableRefObject<T> = useRef(null);

  useEffect(() => {
    deprecationNotice('useConsolidatedRef', `\`useConsolidatedRef\` is deprecated. Please use \`useSyncRef\` instead.`);
  }, []);

  const consolidatedRef: MutableRefObject<T> = useMemo(() => {
    if (!ref || typeof ref === 'function') {
      return localRef;
    }
    return ref;
  }, [ref]);

  useEffect(() => {
    if (typeof ref === 'function') {
      ref(consolidatedRef.current);
    }
  }, [consolidatedRef.current]);

  return consolidatedRef;
};
