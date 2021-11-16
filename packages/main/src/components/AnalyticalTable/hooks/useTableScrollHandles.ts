import { useEffect, useRef } from 'react';

export const useTableScrollHandles = (ref) => {
  let analyticalTableRef = useRef(null);
  if (ref) {
    analyticalTableRef = ref;
  }
  const reactWindowRef = useRef<any>({});

  useEffect(() => {
    if (analyticalTableRef.current) {
      Object.assign(analyticalTableRef.current, {
        scrollTo: (offset, align) => {
          if (typeof reactWindowRef.current?.scrollToOffset === 'function') {
            reactWindowRef.current.scrollToOffset(offset, { align });
          }
        },
        scrollToItem: (index, align) => {
          if (typeof reactWindowRef.current?.scrollToIndex === 'function') {
            reactWindowRef.current.scrollToIndex(index, { align });
          }
        },
        horizontalScrollTo: (offset, align) => {
          if (typeof reactWindowRef.current?.horizontalScrollToOffset === 'function') {
            reactWindowRef.current.horizontalScrollToOffset(offset, { align });
          }
        },
        horizontalScrollToItem: (index, align) => {
          if (typeof reactWindowRef.current?.horizontalScrollToIndex === 'function') {
            reactWindowRef.current.horizontalScrollToIndex(index, { align });
          }
        }
      });
    }
  }, []);

  return [analyticalTableRef, reactWindowRef];
};
