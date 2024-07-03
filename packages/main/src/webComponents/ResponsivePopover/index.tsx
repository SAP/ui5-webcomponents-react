'use client';

import '@ui5/webcomponents/dist/ResponsivePopover.js';
import type { PopupBeforeCloseEventDetail } from '@ui5/webcomponents/dist/Popup.js';
import type PopoverHorizontalAlign from '@ui5/webcomponents/dist/types/PopoverHorizontalAlign.js';
import type PopoverPlacement from '@ui5/webcomponents/dist/types/PopoverPlacement.js';
import type PopoverVerticalAlign from '@ui5/webcomponents/dist/types/PopoverVerticalAlign.js';
import type PopupAccessibleRole from '@ui5/webcomponents/dist/types/PopupAccessibleRole.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface ResponsivePopoverAttributes {
  /**
   * Defines the accessible name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines the IDs of the elements that label the component.
   *
   * **Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Allows setting a custom role.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   * @default "Dialog"
   */
  accessibleRole?: PopupAccessibleRole | keyof typeof PopupAccessibleRole;

  /**
   * Determines if there is no enough space, the component can be placed
   * over the target.
   * @default false
   */
  allowTargetOverlap?: boolean;

  /**
   * Defines the header text.
   *
   * **Note:** If `header` slot is provided, the `headerText` is ignored.
   * @default undefined
   */
  headerText?: string | undefined;

  /**
   * Determines whether the component arrow is hidden.
   * @default false
   */
  hideArrow?: boolean;

  /**
   * Determines the horizontal alignment of the component.
   * @default "Center"
   */
  horizontalAlign?: PopoverHorizontalAlign | keyof typeof PopoverHorizontalAlign;

  /**
   * Defines the ID of the HTML Element, which will get the initial focus.
   *
   * **Note:** If an element with `autofocus` attribute is added inside the component,
   * `initialFocus` won't take effect.
   * @default undefined
   */
  initialFocus?: string | undefined;

  /**
   * Defines whether the component should close when
   * clicking/tapping outside of the popover.
   * If enabled, it blocks any interaction with the background.
   * @default false
   */
  modal?: boolean;

  /**
   * Indicates if the element is open
   *
   * **Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.
   * @default false
   */
  open?: boolean;

  /**
   * Defines the ID or DOM Reference of the element at which the popover is shown.
   * When using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.
   * You can only set the `opener` attribute to a DOM Reference when using JavaScript.
   *
   * **Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  opener?: HTMLElement | string | undefined;

  /**
   * Determines on which side the component is placed at.
   * @default "End"
   */
  placement?: PopoverPlacement | keyof typeof PopoverPlacement;

  /**
   * Defines if the focus should be returned to the previously focused element,
   * when the popup closes.
   * @default false
   */
  preventFocusRestore?: boolean;

  /**
   * Indicates whether initial focus should be prevented.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default false
   */
  preventInitialFocus?: boolean;

  /**
   * Determines the vertical alignment of the component.
   * @default "Center"
   */
  verticalAlign?: PopoverVerticalAlign | keyof typeof PopoverVerticalAlign;
}

interface ResponsivePopoverDomRef extends Required<ResponsivePopoverAttributes>, Ui5DomRef {
  /**
   * Focuses the element denoted by `initialFocus`, if provided,
   * or the first focusable element otherwise.
   * @returns {Promise<void>} - Promise that resolves when the focus is applied
   */
  applyFocus: () => Promise<void>;
}

interface ResponsivePopoverPropTypes
  extends ResponsivePopoverAttributes,
    Omit<
      CommonProps,
      | keyof ResponsivePopoverAttributes
      | 'children'
      | 'footer'
      | 'header'
      | 'onBeforeClose'
      | 'onBeforeOpen'
      | 'onClose'
      | 'onOpen'
    > {
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
   * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. **This event does not bubble.**
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onBeforeClose?: (event: Ui5CustomEvent<ResponsivePopoverDomRef, PopupBeforeCloseEventDetail>) => void;

  /**
   * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. **This event does not bubble.**
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onBeforeOpen?: (event: Ui5CustomEvent<ResponsivePopoverDomRef>) => void;

  /**
   * Fired after the component is closed. **This event does not bubble.**
   */
  onClose?: (event: Ui5CustomEvent<ResponsivePopoverDomRef>) => void;

  /**
   * Fired after the component is opened. **This event does not bubble.**
   */
  onOpen?: (event: Ui5CustomEvent<ResponsivePopoverDomRef>) => void;
}

/**
 * The `ResponsivePopover` acts as a Popover on desktop and tablet, while on phone it acts as a Dialog.
 * The component improves tremendously the user experience on mobile.
 *
 * ### Usage
 * Use it when you want to make sure that all the content is visible on any device.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const ResponsivePopover = withWebComponent<ResponsivePopoverPropTypes, ResponsivePopoverDomRef>(
  'ui5-responsive-popover',
  [
    'accessibleName',
    'accessibleNameRef',
    'accessibleRole',
    'headerText',
    'horizontalAlign',
    'initialFocus',
    'opener',
    'placement',
    'verticalAlign'
  ],
  ['allowTargetOverlap', 'hideArrow', 'modal', 'open', 'preventFocusRestore', 'preventInitialFocus'],
  ['footer', 'header'],
  ['before-close', 'before-open', 'close', 'open'],
  () => import('@ui5/webcomponents/dist/ResponsivePopover.js')
);

ResponsivePopover.displayName = 'ResponsivePopover';

export { ResponsivePopover };
export type { ResponsivePopoverDomRef, ResponsivePopoverPropTypes };
