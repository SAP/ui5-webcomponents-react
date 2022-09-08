import { useEffect, useRef } from 'react';

export const useTableScrollHandles = (ref) => {
  let analyticalTableRef = useRef(null);
  if (ref) {
    analyticalTableRef = ref;
  }
  const scrollToRef = useRef<any>({});

  useEffect(() => {
    if (analyticalTableRef.current) {
      Object.assign(analyticalTableRef.current, {
        scrollTo: (offset, align) => {
          if (typeof scrollToRef.current?.scrollToOffset === 'function') {
            scrollToRef.current.scrollToOffset(offset, { align });
          }
        },
        scrollToItem: (index, align) => {
          if (typeof scrollToRef.current?.scrollToIndex === 'function') {
            scrollToRef.current.scrollToIndex(index, { align });
          }
        },
        horizontalScrollTo: (offset, align) => {
          if (typeof scrollToRef.current?.horizontalScrollToOffset === 'function') {
            scrollToRef.current.horizontalScrollToOffset(offset, { align });
          }
        },
        horizontalScrollToItem: (index, align) => {
          if (typeof scrollToRef.current?.horizontalScrollToIndex === 'function') {
            scrollToRef.current.horizontalScrollToIndex(index, { align });
          }
        }
      });
    }
  }, []);

  return [analyticalTableRef, scrollToRef];
};
