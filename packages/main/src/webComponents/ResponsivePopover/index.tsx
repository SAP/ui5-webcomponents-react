import '@ui5/webcomponents/dist/ResponsivePopover.js';
import { ReactNode } from 'react';
import { PopoverHorizontalAlign, PopoverPlacementType, PopoverVerticalAlign } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface ResponsivePopoverAttributes {
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
   * Defines the ID of the element that the popover is shown at
   */
  opener?: string;
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
   * Indicates if the element is open
   */
  open?: boolean;
  /**
   * Defines if the focus should be returned to the previously focused element, when the popup closes.
   */
  preventFocusRestore?: boolean;
}

export interface ResponsivePopoverDomRef extends ResponsivePopoverAttributes, Ui5DomRef {
  /**
   * Defines the ID or DOM Reference of the element that the popover is shown at
   */
  opener?: string | HTMLElement;
  /**
   * Closes the popover/dialog.
   */
  close: () => void;
  /**
   * Tells if the responsive popover is open
   * @returns {boolean}
   */
  isOpen: () => boolean;
  /**
   * Shows popover on desktop and dialog on mobile.
   * @param {HTMLElement | EventTarget} opener - the element that the popover is shown at
   * @param {boolean} [preventInitialFocus] - Prevents applying the focus inside the popup
   * @returns {Promise<void>} Resolves when the responsive popover is open
   */
  showAt: (opener: HTMLElement | EventTarget, preventInitialFocus?: boolean) => Promise<void>;
  /**
   * Focuses the element denoted by `initialFocus`, if provided, or the first focusable element otherwise.
   * @returns {Promise<void>} Promise that resolves when the focus is applied
   */
  applyFocus: () => Promise<void>;
}

export interface ResponsivePopoverPropTypes extends ResponsivePopoverAttributes, CommonProps {
  /**
   * Defines the footer HTML Element.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  footer?: ReactNode | ReactNode[];
  /**
   * Defines the header HTML Element.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  header?: ReactNode | ReactNode[];
  /**
   * Defines the content of the Popup.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired after the component is closed. **This event does not bubble.**
   */
  onAfterClose?: (event: Ui5CustomEvent<ResponsivePopoverDomRef>) => void;
  /**
   * Fired after the component is opened. **This event does not bubble.**
   */
  onAfterOpen?: (event: Ui5CustomEvent<ResponsivePopoverDomRef>) => void;
  /**
   * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**
   */
  onBeforeClose?: (event: Ui5CustomEvent<ResponsivePopoverDomRef, { escPressed: boolean }>) => void;
  /**
   * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**
   */
  onBeforeOpen?: (event: Ui5CustomEvent<ResponsivePopoverDomRef>) => void;
}

/**
 * The `ResponsivePopover` acts as a Popover on desktop and tablet, while on phone it acts as a Dialog. The component improves tremendously the user experience on mobile.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ResponsivePopover" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ResponsivePopover = withWebComponent<ResponsivePopoverPropTypes, ResponsivePopoverDomRef>(
  'ui5-responsive-popover',
  [
    'headerText',
    'horizontalAlign',
    'opener',
    'placementType',
    'verticalAlign',
    'accessibleName',
    'accessibleNameRef',
    'initialFocus'
  ],
  ['allowTargetOverlap', 'hideArrow', 'hideBackdrop', 'modal', 'open', 'preventFocusRestore'],
  ['footer', 'header'],
  ['after-close', 'after-open', 'before-close', 'before-open']
);

ResponsivePopover.displayName = 'ResponsivePopover';

ResponsivePopover.defaultProps = {
  horizontalAlign: PopoverHorizontalAlign.Center,
  placementType: PopoverPlacementType.Right,
  verticalAlign: PopoverVerticalAlign.Center
};

export { ResponsivePopover };
