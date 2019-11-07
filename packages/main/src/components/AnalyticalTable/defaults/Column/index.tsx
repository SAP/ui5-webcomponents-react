import { VerticalAlign } from '@ui5/webcomponents-react/lib/VerticalAlign';
import { DefaultFilterComponent } from '../FilterComponent';
import { Column } from 'react-table';

export const DEFAULT_COLUMN_WIDTH = 60;

const defaultFilterMethod = (filter, row) => {
  return new RegExp(filter.value, 'gi').test(String(row[filter.id]));
};

export const DefaultColumn: Column = {
  Filter: DefaultFilterComponent,
  canResize: true,
  minWidth: DEFAULT_COLUMN_WIDTH,
  // @ts-ignore
  width: '1fr',
  vAlign: VerticalAlign.Middle,
  Aggregated: () => null,
  defaultFilter: defaultFilterMethod
};
