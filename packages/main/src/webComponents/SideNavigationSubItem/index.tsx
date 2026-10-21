'use client';

import '@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js';
import type { SideNavigationItemClickEventDetail } from '@ui5/webcomponents-fiori/dist/SideNavigationItemBase.js';
import type { SideNavigationItemAccessibilityAttributes } from '@ui5/webcomponents-fiori/dist/SideNavigationSelectableItemBase.js';
import type SideNavigationItemDesign from '@ui5/webcomponents-fiori/dist/types/SideNavigationItemDesign.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';

interface SideNavigationSubItemAttributes {
  /**
   * Defines the additional accessibility attributes that will be applied to the component.
   * The following fields are supported:
   *
   * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
   * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
   *
   * **Note:** Do not use it on parent items, as it will be overridden if the item is in the overflow menu.
   *
   * **Note:** Available since [v2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents-fiori**.
   * @default {}
   */
  accessibilityAttributes?: SideNavigationItemAccessibilityAttributes;

  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v2.22.0](https://github.com/UI5/webcomponents/releases/tag/v2.22.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Item design.
   *
   * **Note:** Items with "Action" design must not have sub-items.
   *
   * **Note:** Available since [v2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents-fiori**.
   * @default "Default"
   */
  design?: SideNavigationItemDesign | keyof typeof SideNavigationItemDesign;

  /**
   * Defines whether the component is disabled.
   * A disabled component can't be pressed or
   * focused, and it is not in the tab chain.
   *
   * **Note:** Available since [v1.19.0](https://github.com/UI5/webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the link target URI. Supports standard hyperlink behavior.
   * If a JavaScript action should be triggered,
   * this should not be set, but instead an event handler
   * for the `click` event should be registered.
   *
   * **Note:** Available since [v1.19.0](https://github.com/UI5/webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  href?: string | undefined;

  /**
   * Defines the icon of the item.
   *
   * **Note:** Icons on second-level (child) navigation items are not recommended according to the design specification.
   *
   * The SAP-icons font provides numerous options.
   *
   * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * Defines whether the item is selected.
   *
   * **Note:** Items that have a set `href` and `target` set to `_blank` should not be selectable.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the component target.
   *
   * Possible values:
   *
   * - `_self`
   * - `_top`
   * - `_blank`
   * - `_parent`
   * - `framename`
   *
   * **Note:** Items that have a defined `href` and `target`
   * attribute set to `_blank` should not be selectable.
   *
   * **Note:** Available since [v1.19.0](https://github.com/UI5/webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  target?: string | undefined;

  /**
   * Defines the text of the item.
   * @default undefined
   */
  text?: string | undefined;

  /**
   * Defines the tooltip of the component.
   *
   * A tooltip attribute should be provided, in order to represent meaning/function,
   * when the component is collapsed ("icon only" design is visualized) or the item text is truncated.
   *
   * **Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  tooltip?: string | undefined;

  /**
   * Indicates whether the navigation item is selectable. By default, all items are selectable unless specifically marked as unselectable.
   *
   * When a parent item is marked as unselectable, selecting it will only expand or collapse its sub-items.
   * To improve user experience do not mix unselectable parent items with selectable parent items in a single side navigation.
   *
   *
   * **Guidelines**:
   * - Items with an assigned `href` and a target of `_blank` should be marked as unselectable.
   * - Items that trigger actions (with design "Action") should be marked as unselectable.
   *
   * **Note:** Available since [v2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  unselectable?: boolean;
}

interface SideNavigationSubItemDomRef extends Required<SideNavigationSubItemAttributes>, Ui5DomRef {}

interface SideNavigationSubItemPropTypes
  extends
    SideNavigationSubItemAttributes,
    Omit<CommonProps, keyof SideNavigationSubItemAttributes | 'tag' | 'onClick'> {
  /**
   * Defines the tag to be displayed.
   *
   * **Note:** Tags are visible when the <code>NavigationList</code> is in expanded mode,
   * and hidden when collapsed, but they are visible in the overflow of the collapsed mode.
   *
   * **Note:** Only one `ui5-tag` is allowed. The tag should use `design="Set2"`, `hide-state-icon`,
   * and `colorScheme` values 5-10 to avoid confusion with semantic colors (1-4).
   *
   * **Note:** It is recommended to limit tag width to 64px (4rem). If tag text exceeds this,
   * use shortened forms or abbreviations (e.g., "Experimental" → "Exp").
   *
   * **Important:** The <code>ui5-tag</code> must never be interactive (i.e., <code>active</code> must not be set to <code>true</code>),
   * as this would lead to nesting of interactive elements, which is not allowed.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="tag"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents-fiori**.
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  tag?: UI5WCSlotsNode;
  /**
   * Fired when the component is activated either with a click/tap or by using the [Enter] or [Space] keys.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onClick?: (event: Ui5CustomEvent<SideNavigationSubItemDomRef, SideNavigationItemClickEventDetail>) => void;
}

/**
 * Represents a single navigation action within `SideNavigationItem`.
 * The `SideNavigationSubItem` is intended to be used inside a `SideNavigationItem` only.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [SideNavigationSubItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/SideNavigationSubItem) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents-fiori__.
 * @abstract
 */
const SideNavigationSubItem = withWebComponent<SideNavigationSubItemPropTypes, SideNavigationSubItemDomRef>(
  'ui5-side-navigation-sub-item',
  ['accessibilityAttributes', 'accessibleName', 'design', 'href', 'icon', 'target', 'text', 'tooltip'],
  ['disabled', 'selected', 'unselectable'],
  ['tag'],
  ['click'],
);

SideNavigationSubItem.displayName = 'SideNavigationSubItem';

export { SideNavigationSubItem };
export type { SideNavigationSubItemDomRef, SideNavigationSubItemPropTypes };
