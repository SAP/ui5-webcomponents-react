import { AnalyticalTableScrollMode } from '@ui5/webcomponents-react/dist/AnalyticalTableScrollMode';

export interface AnalyticalTableDomRef extends Omit<HTMLDivElement, 'scrollTo'> {
  scrollToItem: (index: number, align?: AnalyticalTableScrollMode) => void;
  scrollTo: (scrollOffset: number) => void; //overrides native scrollTo function
}
