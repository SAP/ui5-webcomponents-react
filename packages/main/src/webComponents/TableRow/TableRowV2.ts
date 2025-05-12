'use client';

import TableRowV2 from '@ui5/webcomponents/dist/TableRow.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';

customElements.whenDefined('ui5-table-row').then(() => {
  // change tag
  TableRowV2._metadata.metadata.tag = 'ui5-table-row-v2';
  // run define again to register with new tag
  TableRowV2.define();
});

/**
 * This component is not meant for public consumption!
 */
const _TableRowV2 = withWebComponent(
  'ui5-table-row-v2',
  ['position', 'rowKey'],
  ['interactive', 'movable', 'navigated'],
  ['actions'],
  []
);

_TableRowV2.displayName = '_TableRowV2';

export { _TableRowV2 };
