import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { TableGroupRowDomRef, TableGroupRowPropTypes } from '../webComponents/TableGroupRow';
import { TableGroupRow } from '../webComponents/TableGroupRow';

deprecationNotice(
  'TableGroupRow',
  `importing from '@ui5/webcomponents-react/dist/TableGroupRow' is deprecated. Please use "import { TableGroupRow } from '@ui5/webcomponents-react';" instead.`
);

export { TableGroupRow };

export type { TableGroupRowPropTypes, TableGroupRowDomRef };
