import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { TableRowDomRef, TableRowPropTypes } from '../webComponents/TableRow';
import { TableRow } from '../webComponents/TableRow';

deprecationNotice(
  'TableRow',
  `importing from '@ui5/webcomponents-react/dist/TableRow' is deprecated. Please use "import { TableRow } from '@ui5/webcomponents-react';" instead.`
);

export { TableRow };

export type { TableRowPropTypes, TableRowDomRef };
