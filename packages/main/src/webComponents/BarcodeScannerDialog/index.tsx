'use client';

import '@ui5/webcomponents-fiori/dist/BarcodeScannerDialog.js';
import type {
  BarcodeScannerDialogScanErrorEventDetail,
  BarcodeScannerDialogScanSuccessEventDetail
} from '@ui5/webcomponents-fiori/dist/BarcodeScannerDialog.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface BarcodeScannerDialogAttributes {
  /**
   * Indicates whether the dialog is open.
   *
   * **Note:** Available since [v1.24.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  open?: boolean;
}

interface BarcodeScannerDialogDomRef extends Required<BarcodeScannerDialogAttributes>, Ui5DomRef {
  /**
   * Closes the dialog and the scan session.
   *
   * @deprecated The method is deprecated in favour of <code>open</code> property.
   * @returns {void}
   */
  close: () => void;

  /**
   * Shows a dialog with the camera videostream. Starts a scan session.
   *
   * @deprecated The method is deprecated in favour of <code>open</code> property.
   * @returns {void}
   */
  show: () => void;
}

interface BarcodeScannerDialogPropTypes
  extends BarcodeScannerDialogAttributes,
    Omit<CommonProps, keyof BarcodeScannerDialogAttributes | 'onScanError' | 'onScanSuccess'> {
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
 * The `BarcodeScannerDialog` component provides barcode scanning functionality for all devices that support the `MediaDevices.getUserMedia()` native API.
 * Opening the dialog launches the device camera and scans for known barcode formats.
 *
 * A `scanSuccess` event fires whenever a barcode is identified
 * and a `scanError` event fires when the scan failed (for example, due to missing permisions).
 *
 * Internally, the component  uses the zxing-js/library third party OSS.
 *
 * For a list of supported barcode formats, see the [zxing-js/library](https://github.com/zxing-js/library) documentation.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const BarcodeScannerDialog = withWebComponent<BarcodeScannerDialogPropTypes, BarcodeScannerDialogDomRef>(
  'ui5-barcode-scanner-dialog',
  [],
  ['open'],
  [],
  ['scan-error', 'scan-success'],
  () => import('@ui5/webcomponents-fiori/dist/BarcodeScannerDialog.js')
);

BarcodeScannerDialog.displayName = 'BarcodeScannerDialog';

export { BarcodeScannerDialog };
export type { BarcodeScannerDialogDomRef, BarcodeScannerDialogPropTypes };
