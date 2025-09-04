'use client';

import '@ui5/webcomponents-fiori/dist/ProductSwitchItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';

interface ProductSwitchItemAttributes {
  /**
   * Defines the icon to be displayed as a graphical element within the component.
   *
   * Example:
   *
   * `<ProductSwitchItem icon="palette">`
   *
   * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * Defines the subtitle of the component.
   * @default undefined
   */
  subtitleText?: string | undefined;

  /**
   * Defines a target where the `targetSrc` content must be open.
   *
   * Available options are:
   *
   * - `_self`
   * - `_top`
   * - `_blank`
   * - `_parent`
   * - `_search`
   *
   * **Note:** By default target will be open in the same frame as it was clicked.
   * @default undefined
   */
  target?: string | undefined;

  /**
   * Defines the component target URI. Supports standard hyperlink behavior.
   * @default undefined
   */
  targetSrc?: string | undefined;

  /**
   * Defines the title of the component.
   * @default undefined
   */
  titleText?: string | undefined;
}

interface ProductSwitchItemDomRef extends Required<ProductSwitchItemAttributes>, Ui5DomRef {}

interface ProductSwitchItemPropTypes
  extends ProductSwitchItemAttributes,
    Omit<CommonProps, keyof ProductSwitchItemAttributes | 'image' | 'onClick'> {
  /**
   * Defines an image to be displayed instead of the standard icon.
   *
   * **Note:** The image slot takes precedence over the icon property.
   * **Note:** We recommend using non-interactive ui5-avatar with size S, Square shape and Transparent colorScheme for best alignment.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="image"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.14.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents-fiori**.
   */
  image?: UI5WCSlotsNode;
  /**
   * Fired when the `ProductSwitchItem` is activated either with a
   * click/tap or by using the Enter or Space key.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClick?: (event: Ui5CustomEvent<ProductSwitchItemDomRef>) => void;
}

/**
 * The `ProductSwitchItem` web component represents the items displayed in the
 * `ProductSwitch` web component.
 *
 * **Note:** `ProductSwitchItem` is not supported when used outside of `ProductSwitch`.
 *
 * ### Keyboard Handling
 * The `ProductSwitch` provides advanced keyboard handling.
 * When focused, the user can use the following keyboard
 * shortcuts in order to perform a navigation:
 *
 * - [Space] / [Enter] or [Return] - Trigger `ui5-click` event
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const ProductSwitchItem = withWebComponent<ProductSwitchItemPropTypes, ProductSwitchItemDomRef>(
  'ui5-product-switch-item',
  ['icon', 'subtitleText', 'target', 'targetSrc', 'titleText'],
  [],
  ['image'],
  ['click'],
);

ProductSwitchItem.displayName = 'ProductSwitchItem';

export { ProductSwitchItem };
export type { ProductSwitchItemDomRef, ProductSwitchItemPropTypes };
