import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { AnalyticalTable } from './components/AnalyticalTable';

export type {
  AnalyticalTablePropTypes,
  AnalyticalTableDomRef,
  AnalyticalTableColumnDefinition
} from './components/AnalyticalTable';

deprecationNotice(
  'AnalyticalTable',
  `importing from '@ui5/webcomponents-react/dist/AnalyticalTable' is deprecated. Please use "import { AnalyticalTable } from '@ui5/webcomponents-react';" instead.`
);

export { AnalyticalTable };
