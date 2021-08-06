import { PopoverHorizontalAlign } from '@ui5/webcomponents-react/dist/PopoverHorizontalAlign';
import { PopoverPlacementType } from '@ui5/webcomponents-react/dist/PopoverPlacementType';
import { PopoverVerticalAlign } from '@ui5/webcomponents-react/dist/PopoverVerticalAlign';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { Ui5PopoverDomRef } from '@ui5/webcomponents-react/interfaces/Ui5PopoverDomRef';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/Popover';

export interface PopoverPropTypes extends CommonProps {
  /**
   * Determines if there is no enough space, the component can be placed over the target.
   */
  allowTargetOverlap?: boolean;
  /**
   * Defines the header text.
   *
   * **Note:** If `header` slot is provided, the `headerText` is ignored.
   */
  headerText?: string;
  /**
   * Determines whether the component arrow is hidden.
   */
  hideArrow?: boolean;
  /**
   * Defines whether the block layer will be shown if modal property is set to true.
   */
  hideBackdrop?: boolean;
  /**
   * Determines the horizontal alignment of the component.
   *
   * Available options are:
   *
   * *   `Center`
   * *   `Left`
   * *   `Right`
   * *   `Stretch`
   */
  horizontalAlign?: PopoverHorizontalAlign;
  /**
   * Defines whether the component should close when clicking/tapping outside of the popover. If enabled, it blocks any interaction with the background.
   */
  modal?: boolean;
  /**
   * Determines on which side the component is placed at.
   *
   * Available options are:
   *
   * *   `Left`
   * *   `Right`
   * *   `Top`
   * *   `Bottom`
   */
  placementType?: PopoverPlacementType;
  /**
   * Determines the vertical alignment of the component.
   *
   * Available options are:
   *
   * *   `Center`
   * *   `Top`
   * *   `Bottom`
   * *   `Stretch`
   */
  verticalAlign?: PopoverVerticalAlign;
  /**
   * Sets the accessible aria name of the component.
   */
  accessibleName?: string;
  /**
   * Defines the ID of the HTML Element, which will get the initial focus.
   */
  initialFocus?: string;
  /**
   * Defines if the focus should be returned to the previously focused element, when the popup closes.
   */
  preventFocusRestore?: boolean;
  /**
   * Defines the footer HTML Element.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  footer?: ReactNode | ReactNode[];
  /**
   * Defines the header HTML Element.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  header?: ReactNode | ReactNode[];
  /**
   * Defines the content of the Popup.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired after the component is closed. **This event does not bubble.**
   */
  onAfterClose?: (event: Ui5CustomEvent<HTMLElement>) => void;
  /**
   * Fired after the component is opened. **This event does not bubble.**
   */
  onAfterOpen?: (event: Ui5CustomEvent<HTMLElement>) => void;
  /**
   * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**
   */
  onBeforeClose?: (event: Ui5CustomEvent<HTMLElement, { escPressed: boolean }>) => void;
  /**
   * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**
   */
  onBeforeOpen?: (event: Ui5CustomEvent<HTMLElement>) => void;
}

/**
 * The `Popover` component displays additional information for an object in a compact way and without leaving the page. The Popover can contain various UI elements, such as fields, tables, images, and charts. It can also include actions in the footer.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Popover" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Popover = withWebComponent<PopoverPropTypes, Ui5PopoverDomRef>(
  'ui5-popover',
  ['headerText', 'horizontalAlign', 'placementType', 'verticalAlign', 'accessibleName', 'initialFocus'],
  ['allowTargetOverlap', 'hideArrow', 'hideBackdrop', 'modal', 'preventFocusRestore'],
  ['footer', 'header'],
  ['after-close', 'after-open', 'before-close', 'before-open']
);

Popover.displayName = 'Popover';

Popover.defaultProps = {
  allowTargetOverlap: false,
  hideArrow: false,
  hideBackdrop: false,
  horizontalAlign: PopoverHorizontalAlign.Center,
  modal: false,
  placementType: PopoverPlacementType.Right,
  verticalAlign: PopoverVerticalAlign.Center,
  preventFocusRestore: false
};

export { Popover };
