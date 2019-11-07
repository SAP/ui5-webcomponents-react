import { AnalyticalTableScrollMode } from '@ui5/webcomponents-react/lib/AnalyticalTableScrollMode';

// also makes use of scrollTo which is already defined somewhere in HTMLDivElement
export interface AnalyticalTableDomRef extends HTMLDivElement {
  scrollToItem: (index: number, align?: AnalyticalTableScrollMode) => void;
}
