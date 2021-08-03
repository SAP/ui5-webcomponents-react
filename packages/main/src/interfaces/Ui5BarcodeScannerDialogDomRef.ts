import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5BarcodeScannerDialogDomRef extends Ui5DomRef {
  /**
   * Shows a dialog with the camera videostream. Starts a scan session.
   */
  show: () => void;
  /**
   * Closes the dialog and the scan session.
   */
  close: () => void;
}
