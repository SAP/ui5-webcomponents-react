import { ReactNode } from 'react';
import { PopoverHorizontalAlign, PopoverPlacementType, PopoverVerticalAlign } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

import '@ui5/webcomponents/dist/Popover.js';

interface PopoverAttributes {
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
  horizontalAlign?: PopoverHorizontalAlign | keyof typeof PopoverHorizontalAlign;
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
  placementType?: PopoverPlacementType | keyof typeof PopoverPlacementType;
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
  verticalAlign?: PopoverVerticalAlign | keyof typeof PopoverVerticalAlign;
  /**
   * Defines the accessible name of the component.
   */
  accessibleName?: string;
  /**
   * Defines the IDs of the elements that label the component.
   */
  accessibleNameRef?: string;
  /**
   * Defines the ID of the HTML Element, which will get the initial focus.
   */
  initialFocus?: string;
  /**
   * Defines if the focus should be returned to the previously focused element, when the popup closes.
   */
  preventFocusRestore?: boolean;
}

export interface PopoverDomRef extends PopoverAttributes, Ui5DomRef {
  /**
   * Shows the popover.
   * @param {HTMLElement | EventTarget} opener - the element that the popover is shown at
   * @param {boolean} [preventInitialFocus] - prevents applying the focus inside the popover
   */
  showAt: (opener: HTMLElement | EventTarget, preventInitialFocus?: boolean) => void;
  /**
   * Focuses the element denoted by `initialFocus`, if provided, or the first focusable element otherwise.
   *
   */
  applyFocus: () => void;
  /**
   * Hides the block layer (for modal popups only)
   *
   */
  close: () => void;
  /**
   * Tells if the component is opened
   *
   */
  isOpen: () => boolean;
}

export interface PopoverPropTypes extends PopoverAttributes, CommonProps {
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
const Popover = withWebComponent<PopoverPropTypes, PopoverDomRef>(
  'ui5-popover',
  [
    'headerText',
    'horizontalAlign',
    'placementType',
    'verticalAlign',
    'accessibleName',
    'accessibleNameRef',
    'initialFocus'
  ],
  ['allowTargetOverlap', 'hideArrow', 'hideBackdrop', 'modal', 'preventFocusRestore'],
  ['footer', 'header'],
  ['after-close', 'after-open', 'before-close', 'before-open']
);

Popover.displayName = 'Popover';

Popover.defaultProps = {
  horizontalAlign: PopoverHorizontalAlign.Center,
  placementType: PopoverPlacementType.Right,
  verticalAlign: PopoverVerticalAlign.Center
};

export { Popover };
