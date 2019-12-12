import { Event } from '@ui5/webcomponents-react-base/lib/Event';

export interface IScroller {
  scroll: (e: Event) => void;
  scrollToElementById: (id: string, scrollOffset?: number) => void;
  scrollToTop: () => void;
}
