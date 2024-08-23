'use client';

import '@ui5/webcomponents/dist/AvatarGroup.js';
import type {
  AvatarGroupAccessibilityAttributes,
  AvatarGroupClickEventDetail,
  IAvatarGroupItem
} from '@ui5/webcomponents/dist/AvatarGroup.js';
import type AvatarColorScheme from '@ui5/webcomponents/dist/types/AvatarColorScheme.js';
import type AvatarGroupType from '@ui5/webcomponents/dist/types/AvatarGroupType.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface AvatarGroupAttributes {
  /**
   * Defines the additional accessibility attributes that will be applied to the component.
   * The following field is supported:
   *
   * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
   * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default {}
   */
  accessibilityAttributes?: AvatarGroupAccessibilityAttributes;

  /**
   * Defines the mode of the `AvatarGroup`.
   * @default "Group"
   */
  type?: AvatarGroupType | keyof typeof AvatarGroupType;
}

interface AvatarGroupDomRef extends Required<AvatarGroupAttributes>, Ui5DomRef {
  /**
   * Returns an array containing the `AvatarColorScheme` values that correspond to the avatars in the component.
   */
  readonly colorScheme: Array<AvatarColorScheme>;

  /**
   * Returns an array containing the `Avatar` instances that are currently not displayed due to lack of space.
   */
  readonly hiddenItems: Array<IAvatarGroupItem>;
}

interface AvatarGroupPropTypes
  extends AvatarGroupAttributes,
    Omit<CommonProps, keyof AvatarGroupAttributes | 'children' | 'overflowButton' | 'onClick' | 'onOverflow'> {
  /**
   * Defines the items of the component. Use the `Avatar` component as an item.
   *
   * **Note:** The UX guidelines recommends using avatars with "Circle" shape.
   *
   * Moreover, if you use avatars with "Square" shape, there will be visual inconsistency
   * as the built-in overflow action has "Circle" shape.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the overflow button of the component.
   *
   * **Note:** We recommend using the `Button` component.
   *
   * **Note:** If this slot is not used, the component will display the built-in overflow button.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="overflowButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  overflowButton?: UI5WCSlotsNode;
  /**
   * Fired when the component is activated either with a
   * click/tap or by using the Enter or Space key.
   */
  onClick?: (event: Ui5CustomEvent<AvatarGroupDomRef, AvatarGroupClickEventDetail>) => void;

  /**
   * Fired when the count of visible `Avatar` elements in the
   * component has changed
   */
  onOverflow?: (event: Ui5CustomEvent<AvatarGroupDomRef>) => void;
}

/**
 * Displays a group of avatars arranged horizontally. It is useful to visually
 * showcase a group of related avatars, such as, project team members or employees.
 *
 * The component allows you to display the avatars in different sizes,
 * depending on your use case.
 *
 * The `AvatarGroup` component has two group types:
 *
 * - `Group` type: The avatars are displayed as partially overlapped on
 * top of each other and the entire group has one click/tap area.
 * - `Individual` type: The avatars are displayed side-by-side and each
 * avatar has its own click/tap area.
 *
 * ### Usage
 *
 * Use the `AvatarGroup` if:
 *
 * - You want to display a group of avatars.
 * - You want to display several avatars which have something in common.
 *
 * Do not use the `AvatarGroup` if:
 *
 * - You want to display a single avatar.
 * - You want to display a gallery for simple images.
 * - You want to use it for other visual content than avatars.
 *
 * ### Responsive Behavior
 *
 * When the available space is less than the width required to display all avatars,
 * an overflow visualization appears as a button placed at the end with the same shape
 * and size as the avatars. The visualization displays the number of avatars that have overflowed
 * and are not currently visible.
 *
 * ### Keyboard Handling
 * The component provides advanced keyboard handling.
 * When focused, the user can use the following keyboard
 * shortcuts in order to perform a navigation:
 *
 * `type` Individual:
 *
 * - [Tab] - Move focus to the overflow button
 * - [Left] - Navigate one avatar to the left
 * - [Right] - Navigate one avatar to the right
 * - [Home] - Navigate to the first avatar
 * - [End] - Navigate to the last avatar
 * - [Space] / [Enter] or [Return] - Trigger `ui5-click` event
 *
 * `type` Group:
 *
 * - [Tab] - Move focus to the next interactive element after the component
 * - [Space] / [Enter] or [Return] - Trigger `ui5-click` event
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const AvatarGroup = withWebComponent<AvatarGroupPropTypes, AvatarGroupDomRef>(
  'ui5-avatar-group',
  ['accessibilityAttributes', 'type'],
  [],
  ['overflowButton'],
  ['click', 'overflow']
);

AvatarGroup.displayName = 'AvatarGroup';

export { AvatarGroup };
export type { AvatarGroupDomRef, AvatarGroupPropTypes };
