export interface IScroller {
  scroll: (e: CustomEvent) => void;
  scrollToElementById: (id: string, scrollOffset?: number) => void;
  scrollToTop: () => void;
}
