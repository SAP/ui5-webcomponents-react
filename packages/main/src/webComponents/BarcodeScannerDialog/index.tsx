import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5BarcodeScannerDialogDomRef } from '@ui5/webcomponents-react/interfaces/Ui5BarcodeScannerDialogDomRef';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';

import '@ui5/webcomponents-fiori/dist/BarcodeScannerDialog';

export interface BarcodeScannerDialogPropTypes extends CommonProps {
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
const BarcodeScannerDialog = withWebComponent<BarcodeScannerDialogPropTypes, Ui5BarcodeScannerDialogDomRef>(
  'ui5-barcode-scanner-dialog',
  [],
  [],
  [],
  ['scan-error', 'scan-success']
);

BarcodeScannerDialog.displayName = 'BarcodeScannerDialog';

BarcodeScannerDialog.defaultProps = {};

export { BarcodeScannerDialog };
