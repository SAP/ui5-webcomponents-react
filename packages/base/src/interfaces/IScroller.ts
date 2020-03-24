import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';

export interface IScroller {
  scroll: (e: CustomEvent) => void;
  scrollToElementById: (id: string, scrollOffset?: number) => void;
  scrollToTop: () => void;
}
