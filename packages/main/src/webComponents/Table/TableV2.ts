'use client';

import TableV2 from '@ui5/webcomponents/dist/Table.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';

// change tag
TableV2._metadata.metadata.tag = 'ui5-table-v2';
// run define again to register with new tag
TableV2.define();

/**
 * This component is not meant for public consumption!
 */
const _TableV2 = withWebComponent(
  'ui5-table-v2',
  ['accessibleName', 'accessibleNameRef', 'loadingDelay', 'noDataText', 'overflowMode', 'rowActionCount'],
  ['loading'],
  ['features', 'headerRow', 'noData'],
  ['move-over', 'move', 'row-action-click', 'row-click']
);

_TableV2.displayName = '_TableV2';

export { _TableV2 };
