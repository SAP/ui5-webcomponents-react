'use client';

import TableCellV2 from '@ui5/webcomponents/dist/TableCell.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';

// change tag
TableCellV2._metadata.metadata.tag = 'ui5-table-cell-v2';
// run define again to register with new tag
TableCellV2.define();

/**
 * This component is not meant for public consumption!
 */
const _TableCellV2 = withWebComponent('ui5-table-cell-v2', ['horizontalAlign'], [], [], []);

_TableCellV2.displayName = '_TableCellV2';

export { _TableCellV2 };
