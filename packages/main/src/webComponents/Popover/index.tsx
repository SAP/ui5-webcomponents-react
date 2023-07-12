'use client';

import '@ui5/webcomponents/dist/Popover.js';
import type { PopoverBeforeCloseEventDetail } from '@ui5/webcomponents/dist/Popover.js';
import type { ReactNode } from 'react';
import {
  PopoverHorizontalAlign,
  PopoverPlacementType,
  PopoverVerticalAlign,
  PopupAccessibleRole
} from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';

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
   * Allows setting a custom role. Available options are:
   *
   * *   `Dialog`
   * *   `None`
   * *   `AlertDialog`
   */
  accessibleRole?: PopupAccessibleRole | keyof typeof PopupAccessibleRole;
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

export interface PopoverDomRef extends Omit<PopoverAttributes, 'opener'>, Ui5DomRef {
  /**
   * Defines the ID or DOM Reference of the element that the popover is shown at
   */
  opener?: string | HTMLElement;
  /**
   * Shows the popover.
   * @param {HTMLElement | EventTarget} opener - the element that the popover is shown at
   * @param {boolean} [preventInitialFocus] - prevents applying the focus inside the popover
   * @returns {Promise<void>} Resolved when the popover is open
   */
  showAt: (opener: HTMLElement | EventTarget, preventInitialFocus?: boolean) => Promise<void>;
  /**
   * Focuses the element denoted by `initialFocus`, if provided, or the first focusable element otherwise.
   * @returns {Promise<void>} Promise that resolves when the focus is applied
   */
  applyFocus: () => Promise<void>;
  /**
   * Closes the popup.
   */
  close: () => void;
  /**
   * Tells if the component is opened
   * @returns {boolean}
   */
  isOpen: () => boolean;
}

export interface PopoverPropTypes extends PopoverAttributes, CommonProps {
  /**
   * Defines the footer HTML Element.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="footer"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  footer?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Defines the header HTML Element.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Defines the content of the Popup.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired after the component is closed. **This event does not bubble.**
   */
  onAfterClose?: (event: Ui5CustomEvent<PopoverDomRef>) => void;
  /**
   * Fired after the component is opened. **This event does not bubble.**
   */
  onAfterOpen?: (event: Ui5CustomEvent<PopoverDomRef>) => void;
  /**
   * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**
   */
  onBeforeClose?: (event: Ui5CustomEvent<PopoverDomRef, PopoverBeforeCloseEventDetail>) => void;
  /**
   * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**
   */
  onBeforeOpen?: (event: Ui5CustomEvent<PopoverDomRef>) => void;
}

/**
 * The `Popover` component displays additional information for an object in a compact way and without leaving the page. The Popover can contain various UI elements, such as fields, tables, images, and charts. It can also include actions in the footer.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Popover" target="_blank">UI5 Web Components Storybook</ui5-link>
 */
const Popover = withWebComponent<PopoverPropTypes, PopoverDomRef>(
  'ui5-popover',
  [
    'headerText',
    'horizontalAlign',
    'opener',
    'placementType',
    'verticalAlign',
    'accessibleName',
    'accessibleNameRef',
    'accessibleRole',
    'initialFocus'
  ],
  ['allowTargetOverlap', 'hideArrow', 'hideBackdrop', 'modal', 'open', 'preventFocusRestore'],
  ['footer', 'header'],
  ['after-close', 'after-open', 'before-close', 'before-open'],
  () => import('@ui5/webcomponents/dist/Popover.js')
);

Popover.displayName = 'Popover';

Popover.defaultProps = {
  horizontalAlign: PopoverHorizontalAlign.Center,
  placementType: PopoverPlacementType.Right,
  verticalAlign: PopoverVerticalAlign.Center,
  accessibleRole: PopupAccessibleRole.Dialog
};

export { Popover };
