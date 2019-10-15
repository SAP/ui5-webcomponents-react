import { RefObject, useImperativeHandle, useRef } from 'react';
import { AnalyticalTableDomRef } from '../../../interfaces/AnalyticalTableDomRef';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';

export const useTableScrollHandles = (ref) => {
  const analyticalTableRef: RefObject<AnalyticalTableDomRef> = useConsolidatedRef(ref);
  const reactWindowRef = useRef(null);
  // @ts-ignore
  useImperativeHandle(analyticalTableRef, () => ({
    scrollTo: (...args) => {
      if (reactWindowRef.current) {
        reactWindowRef.current.scrollTo(...args);
      }
    },
    scrollToItem: (...args) => {
      if (reactWindowRef.current) {
        reactWindowRef.current.scrollToItem(...args);
      }
    }
  }));

  return [analyticalTableRef, reactWindowRef];
};
