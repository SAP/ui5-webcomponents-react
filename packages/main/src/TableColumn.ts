import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { TableColumnDomRef, TableColumnPropTypes } from './webComponents/TableColumn';
import { TableColumn } from './webComponents/TableColumn';

deprecationNotice(
  'TableColumn',
  `importing from '@ui5/webcomponents-react/dist/TableColumn' is deprecated. Please use "import { TableColumn } from '@ui5/webcomponents-react';" instead.`
);

export { TableColumn };

export type { TableColumnPropTypes, TableColumnDomRef };
