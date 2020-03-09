import { AnalyticalTableScrollMode } from '@ui5/webcomponents-react/lib/AnalyticalTableScrollMode';

export interface AnalyticalTableDomRef extends HTMLDivElement {
  scrollToItem: (index: number, align?: AnalyticalTableScrollMode) => void;
  scrollTo: (any) => void; //overrides native scrollTo function
}
