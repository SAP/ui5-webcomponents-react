'use client';

import '@ui5/webcomponents-fiori/dist/BarcodeScannerDialog.js';
import type {
  BarcodeScannerDialogScanErrorEventDetail,
  BarcodeScannerDialogScanSuccessEventDetail
} from '@ui5/webcomponents-fiori/dist/BarcodeScannerDialog.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface BarcodeScannerDialogAttributes {}

interface BarcodeScannerDialogDomRef extends BarcodeScannerDialogAttributes, Ui5DomRef {
  /**
   * Closes the dialog and the scan session.
   */
  close: () => void;
  /**
   * Shows a dialog with the camera videostream. Starts a scan session.
   */
  show: () => void;
}

interface BarcodeScannerDialogPropTypes
  extends BarcodeScannerDialogAttributes,
    Omit<CommonProps, keyof BarcodeScannerDialogAttributes> {
  /**
   * Fires when the scan fails with error.
   */
  onScanError?: (event: Ui5CustomEvent<BarcodeScannerDialogDomRef, BarcodeScannerDialogScanErrorEventDetail>) => void;
  /**
   * Fires when the scan is completed successfuuly.
   */
  onScanSuccess?: (
    event: Ui5CustomEvent<BarcodeScannerDialogDomRef, BarcodeScannerDialogScanSuccessEventDetail>
  ) => void;
}

/**
 * The `BarcodeScannerDialog` component provides barcode scanning functionality for all devices that support the `MediaDevices.getUserMedia()` native API. Opening the dialog launches the device camera and scans for known barcode formats.
 *
 * A `scanSuccess` event fires whenever a barcode is identified and a `scanError` event fires when the scan failed (for example, due to missing permisions).
 *
 * Internally, the component uses the zxing-js/library third party OSS. For a list of supported barcode formats, see the <ui5-link target="_blank" href="https://github.com/zxing-js/library">zxing-js/library</ui5-link> documentation
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-BarcodeScannerDialog)
 */
const BarcodeScannerDialog = withWebComponent<BarcodeScannerDialogPropTypes, BarcodeScannerDialogDomRef>(
  'ui5-barcode-scanner-dialog',
  [],
  [],
  [],
  ['scan-error', 'scan-success'],
  () => import('@ui5/webcomponents-fiori/dist/BarcodeScannerDialog.js')
);

BarcodeScannerDialog.displayName = 'BarcodeScannerDialog';

export { BarcodeScannerDialog };
export type { BarcodeScannerDialogDomRef, BarcodeScannerDialogPropTypes };
