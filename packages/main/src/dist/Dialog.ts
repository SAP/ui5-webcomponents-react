import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { DialogDomRef, DialogPropTypes } from '../webComponents/Dialog';
import { Dialog } from '../webComponents/Dialog';

deprecationNotice(
  'Dialog',
  `importing from '@ui5/webcomponents-react/dist/Dialog' is deprecated. Please use "import { Dialog } from '@ui5/webcomponents-react';" instead.`
);

export { Dialog };

export type { DialogPropTypes, DialogDomRef };
