import type { ScrollToOptions } from '@tanstack/react-virtual';

export interface ScrollToRefType {
  horizontalScrollToOffset: (offset: number, options: Omit<ScrollToOptions, 'smoothScroll'>) => void;
  horizontalScrollToIndex: (item: number, options: Omit<ScrollToOptions, 'smoothScroll'>) => void;
  scrollToIndex: (item: number, options: Omit<ScrollToOptions, 'smoothScroll'>) => void;
  scrollToOffset: (item: number, options: Omit<ScrollToOptions, 'smoothScroll'>) => void;
}
