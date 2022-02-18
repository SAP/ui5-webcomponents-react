import '@ui5/webcomponents-fiori/dist/BarcodeScannerDialog.js';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface BarcodeScannerDialogAttributes {}

export interface BarcodeScannerDialogDomRef extends BarcodeScannerDialogAttributes, Ui5DomRef {
  /**
   * Closes the dialog and the scan session.
   */
  close: () => void;
  /**
   * Shows a dialog with the camera videostream. Starts a scan session.
   */
  show: () => void;
}

export interface BarcodeScannerDialogPropTypes extends BarcodeScannerDialogAttributes, CommonProps {
  /**
   * Fires when the scan fails with error.
   */
  onScanError?: (event: Ui5CustomEvent<HTMLElement, { message: string }>) => void;
  /**
   * Fires when the scan is completed successfuuly.
   */
  onScanSuccess?: (event: Ui5CustomEvent<HTMLElement, { text: string; rawBytes: Record<string, unknown> }>) => void;
}

/**
 * The `BarcodeScannerDialog` component provides barcode scanning functionality for all devices that support the `MediaDevices.getUserMedia()` native API. Opening the dialog launches the device camera and scans for known barcode formats.
 *
 * A `scanSuccess` event fires whenever a barcode is identified and a `scanError` event fires when the scan failed (for example, due to missing permisions).
 *
 * Internally, the component uses the zxing-js/library third party OSS. For a list of supported barcode formats, see the <ui5-link target="_blank" href="https://github.com/zxing-js/library">zxing-js/library</ui5-link> documentation
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/BarcodeScannerDialog" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const BarcodeScannerDialog = withWebComponent<BarcodeScannerDialogPropTypes, BarcodeScannerDialogDomRef>(
  'ui5-barcode-scanner-dialog',
  [],
  [],
  [],
  ['scan-error', 'scan-success']
);

BarcodeScannerDialog.displayName = 'BarcodeScannerDialog';

export { BarcodeScannerDialog };
