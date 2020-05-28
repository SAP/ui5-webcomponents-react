interface Window {
  CSSVarsPonyfill: {
    cssVars: (options: any) => void;
  };

  ResizeObserver: {};
}

interface ContentRect {
  height: number;
  left: number;
  top: number;
  width: number;
}

declare class ResizeObserverEntry {
  readonly target: Element;
  readonly contentRect: ContentRect;
  constructor(target: Element);
}

declare class ResizeObserver {
  constructor(callback: (entries: ResizeObserverEntry[], observer: ResizeObserver) => void);
  observe(target: Element): void;
  unobserve(target: Element): void;
  disconnect(): void;
}
