'use client';

import '@ui5/webcomponents-fiori/dist/BarcodeScannerDialog.js';
import type {
  BarcodeScannerDialogScanErrorEventDetail,
  BarcodeScannerDialogScanSuccessEventDetail
} from '@ui5/webcomponents-fiori/dist/BarcodeScannerDialog.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';

interface BarcodeScannerDialogAttributes {
  /**
   * Indicates whether the dialog is open.
   *
   * **Note:** Available since [v1.24.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  open?: boolean;
}

interface BarcodeScannerDialogDomRef extends Required<BarcodeScannerDialogAttributes>, Ui5DomRef {}

interface BarcodeScannerDialogPropTypes
  extends BarcodeScannerDialogAttributes,
    Omit<
      CommonProps,
      keyof BarcodeScannerDialogAttributes | 'footer' | 'header' | 'onClose' | 'onScanError' | 'onScanSuccess'
    > {
  /**
   * Defines the footer HTML Element.
   *
   * **Note:** When you provide custom content for the `footer` slot, the default close button is not rendered.
   * This means you need to include your own mechanism within the custom `footer` to close the dialog,
   * such as a button with an event listener that closes the dialog.
   *
   * **Note:** If the `footer` slot is not provided, a default footer with a close button is rendered automatically,
   * allowing users to close the dialog without any additional implementation.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="footer"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.4.0) of **@ui5/webcomponents-fiori**.
   */
  footer?: UI5WCSlotsNode;

  /**
   * Defines the header HTML Element.
   *
   * **Note:** If `header` slot is provided, the labelling of the dialog is a responsibility of the application developer.
   * `accessibleName` should be used.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.4.0) of **@ui5/webcomponents-fiori**.
   */
  header?: UI5WCSlotsNode;
  /**
   * Fired when the user closes the component.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClose?: (event: Ui5CustomEvent<BarcodeScannerDialogDomRef>) => void;

  /**
   * Fires when the scan fails with error.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onScanError?: (event: Ui5CustomEvent<BarcodeScannerDialogDomRef, BarcodeScannerDialogScanErrorEventDetail>) => void;

  /**
   * Fires when the scan is completed successfuuly.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
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
  ['footer', 'header'],
  ['close', 'scan-error', 'scan-success']
);

BarcodeScannerDialog.displayName = 'BarcodeScannerDialog';

export { BarcodeScannerDialog };
export type { BarcodeScannerDialogDomRef, BarcodeScannerDialogPropTypes };
