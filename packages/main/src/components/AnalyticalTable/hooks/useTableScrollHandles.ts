import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { RefObject, useEffect, useRef } from 'react';
import { AnalyticalTableDomRef } from '../../../interfaces/AnalyticalTableDomRef';

export const useTableScrollHandles = (ref) => {
  const analyticalTableRef: RefObject<AnalyticalTableDomRef> = useConsolidatedRef(ref);
  const reactWindowRef = useRef<any>({});

  useEffect(() => {
    if (analyticalTableRef.current) {
      Object.assign(analyticalTableRef.current, {
        scrollTo: (offset, align) => {
          reactWindowRef.current.scrollToOffset(offset, { align });
        },
        scrollToItem: (index, align) => {
          reactWindowRef.current.scrollToIndex(index, { align });
        }
      });
    }
  }, [analyticalTableRef.current, reactWindowRef.current.scrollToIndex, reactWindowRef.current.scrollToOffset]);

  return [analyticalTableRef, reactWindowRef];
};
