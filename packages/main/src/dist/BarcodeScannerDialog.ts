import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { BarcodeScannerDialogDomRef, BarcodeScannerDialogPropTypes } from '../webComponents/BarcodeScannerDialog';
import { BarcodeScannerDialog } from '../webComponents/BarcodeScannerDialog';

deprecationNotice(
  'BarcodeScannerDialog',
  `importing from '@ui5/webcomponents-react/dist/BarcodeScannerDialog' is deprecated. Please use "import { BarcodeScannerDialog } from '@ui5/webcomponents-react';" instead.`
);

export { BarcodeScannerDialog };

export type { BarcodeScannerDialogPropTypes, BarcodeScannerDialogDomRef };
