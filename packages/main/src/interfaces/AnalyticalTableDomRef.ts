import { AnalyticalTableScrollMode } from '@ui5/webcomponents-react/lib/AnalyticalTableScrollMode';

//@ts-ignore
export interface AnalyticalTableDomRef extends HTMLDivElement {
  scrollToItem: (index: number, align?: AnalyticalTableScrollMode) => void;
  scrollTo: (scrollOffset: number) => void; //overrides native scrollTo function
}
