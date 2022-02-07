import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { TableCellDomRef, TableCellPropTypes } from '../webComponents/TableCell';
import { TableCell } from '../webComponents/TableCell';

deprecationNotice(
  'TableCell',
  `importing from '@ui5/webcomponents-react/dist/TableCell' is deprecated. Please use "import { TableCell } from '@ui5/webcomponents-react';" instead.`
);

export { TableCell };

export type { TableCellPropTypes, TableCellDomRef };
