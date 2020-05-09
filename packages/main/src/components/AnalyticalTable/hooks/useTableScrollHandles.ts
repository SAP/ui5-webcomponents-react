import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { RefObject, useRef } from 'react';
import { AnalyticalTableDomRef } from '../../../interfaces/AnalyticalTableDomRef';

export const useTableScrollHandles = (ref) => {
  const analyticalTableRef: RefObject<AnalyticalTableDomRef> = useConsolidatedRef(ref);
  const reactWindowRef = useRef(null);

  if (analyticalTableRef.current) {
    Object.assign(analyticalTableRef.current, {
      scrollTo: (...args) => {
        if (reactWindowRef.current) {
          reactWindowRef.current.scrollToOffset(...args);
        }
      },
      scrollToItem: (...args) => {
        if (reactWindowRef.current) {
          reactWindowRef.current.scrollToIndex(...args);
        }
      }
    });
  }

  return [analyticalTableRef, reactWindowRef];
};
