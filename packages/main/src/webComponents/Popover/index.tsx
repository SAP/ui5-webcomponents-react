'use client';

import '@ui5/webcomponents/dist/Popover.js';
import type { PopupBeforeCloseEventDetail } from '@ui5/webcomponents/dist/Popup.js';
import type PopoverHorizontalAlign from '@ui5/webcomponents/dist/types/PopoverHorizontalAlign.js';
import type PopoverPlacementType from '@ui5/webcomponents/dist/types/PopoverPlacementType.js';
import type PopoverVerticalAlign from '@ui5/webcomponents/dist/types/PopoverVerticalAlign.js';
import type PopupAccessibleRole from '@ui5/webcomponents/dist/types/PopupAccessibleRole.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface PopoverAttributes {
  /**
   * Defines the accessible name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines the IDs of the elements that label the component.
   */
  accessibleNameRef?: string;

  /**
   * Allows setting a custom role.
   * @default "Dialog"
   */
  accessibleRole?: PopupAccessibleRole | keyof typeof PopupAccessibleRole;

  /**
   * Determines if there is no enough space, the component can be placed over the target.
   * @default false
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
   * @default false
   */
  hideArrow?: boolean;

  /**
   * Defines whether the block layer will be shown if modal property is set to true.
   * @default false
   */
  hideBackdrop?: boolean;

  /**
   * Determines the horizontal alignment of the component.
   * @default "Center"
   */
  horizontalAlign?: PopoverHorizontalAlign | keyof typeof PopoverHorizontalAlign;

  /**
   * Defines the ID of the HTML Element, which will get the initial focus.
   */
  initialFocus?: string;

  /**
   * Defines whether the component should close when clicking/tapping outside of the popover. If enabled, it blocks any interaction with the background.
   * @default false
   */
  modal?: boolean;

  /**
   * Indicates if the element is open
   * @default false
   */
  open?: boolean;

  /**
   * Defines the ID or DOM Reference of the element that the popover is shown at
   * @default undefined
   */
  opener?: string;

  /**
   * Determines on which side the component is placed at.
   * @default "Right"
   */
  placementType?: PopoverPlacementType | keyof typeof PopoverPlacementType;

  /**
   * Defines if the focus should be returned to the previously focused element, when the popup closes.
   * @default false
   */
  preventFocusRestore?: boolean;

  /**
   * Determines the vertical alignment of the component.
   * @default "Center"
   */
  verticalAlign?: PopoverVerticalAlign | keyof typeof PopoverVerticalAlign;
}

interface PopoverDomRef extends Omit<PopoverAttributes, 'opener'>, Ui5DomRef {
  /**
   * Focuses the element denoted by `initialFocus`, if provided, or the first focusable element otherwise.
   * @returns {Promise<void>} - Promise that resolves when the focus is applied
   */
  applyFocus: () => Promise<void>;

  /**
   * Closes the popup.
   * @returns {void}
   */
  close: () => void;

  /**
   * Tells if the component is opened
   * @returns {boolean}
   */
  isOpen: () => boolean;

  /**
   * Defines the ID or DOM Reference of the element that the popover is shown at
   */
  opener: HTMLElement | string | undefined;

  /**
   * Shows the popover.
   * @param {HTMLElement} opener - the element that the popover is shown at
   * @param {boolean} [preventInitialFocus] - prevents applying the focus inside the popover
   * @returns {Promise<void>} - Resolved when the popover is open
   */
  showAt: (opener: HTMLElement, preventInitialFocus?: boolean) => Promise<void>;
}

interface PopoverPropTypes
  extends PopoverAttributes,
    Omit<CommonProps, keyof PopoverAttributes | 'onAfterClose' | 'onAfterOpen' | 'onBeforeClose' | 'onBeforeOpen'> {
  /**
   * Defines the content of the Popup.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the footer HTML Element.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="footer"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  footer?: UI5WCSlotsNode;

  /**
   * Defines the header HTML Element.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode;
  /**
   * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**
   */
  onBeforeOpen?: (event: Ui5CustomEvent<PopoverDomRef>) => void;

  /**
   * Fired after the component is opened. **This event does not bubble.**
   */
  onAfterOpen?: (event: Ui5CustomEvent<PopoverDomRef>) => void;

  /**
   * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**
   */
  onBeforeClose?: (event: Ui5CustomEvent<PopoverDomRef, PopupBeforeCloseEventDetail>) => void;

  /**
   * Fired after the component is closed. **This event does not bubble.**
   */
  onAfterClose?: (event: Ui5CustomEvent<PopoverDomRef>) => void;
}

/**
 * The `Popover` component displays additional information for an object in a compact way and without leaving the page. The Popover can contain various UI elements, such as fields, tables, images, and charts. It can also include actions in the footer.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const Popover = withWebComponent<PopoverPropTypes, PopoverDomRef>(
  'ui5-popover',
  [
    'accessibleName',
    'accessibleNameRef',
    'accessibleRole',
    'headerText',
    'horizontalAlign',
    'initialFocus',
    'opener',
    'placementType',
    'verticalAlign'
  ],
  ['allowTargetOverlap', 'hideArrow', 'hideBackdrop', 'modal', 'open', 'preventFocusRestore'],
  ['footer', 'header'],
  ['after-close', 'after-open', 'before-close', 'before-open'],
  () => import('@ui5/webcomponents/dist/Popover.js')
);

Popover.displayName = 'Popover';

export { Popover };
export type { PopoverDomRef, PopoverPropTypes };
