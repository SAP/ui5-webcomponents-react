import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { TableDomRef, TablePropTypes } from './webComponents/Table';
import { Table } from './webComponents/Table';

deprecationNotice(
  'Table',
  `importing from '@ui5/webcomponents-react/dist/Table' is deprecated. Please use "import { Table } from '@ui5/webcomponents-react';" instead.`
);

export { Table };

export type { TablePropTypes, TableDomRef };
