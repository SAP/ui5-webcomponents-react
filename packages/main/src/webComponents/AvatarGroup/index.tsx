'use client';

import '@ui5/webcomponents/dist/AvatarGroup.js';
import type { AvatarGroupClickEventDetail } from '@ui5/webcomponents/dist/AvatarGroup.js';
import type { ReactNode } from 'react';
import { AvatarGroupType } from '../../enums/index.js';
import type { AvatarColorScheme } from '../../enums/index.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import type { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';

interface AvatarGroupAttributes {
  /**
   * Defines the mode of the `AvatarGroup`.
   *
   * Available options are:
   *
   * *   `Group`
   * *   `Individual`
   */
  type?: AvatarGroupType | keyof typeof AvatarGroupType;
}

export interface AvatarGroupDomRef extends AvatarGroupAttributes, Ui5DomRef {
  /**
   * Returns an array containing the `AvatarColorScheme` values that correspond to the avatars in the component.
   */
  readonly colorScheme: (AvatarColorScheme | keyof typeof AvatarColorScheme)[];
  /**
   * Returns an array containing the `ui5-avatar` instances that are currently not displayed due to lack of space.
   */
  readonly hiddenItems: ReactNode | ReactNode[];
}

export interface AvatarGroupPropTypes extends AvatarGroupAttributes, Omit<CommonProps, 'onClick'> {
  /**
   * Defines the items of the component. Use the `Avatar` component as an item.
   *
   * **Note:** The UX guidelines recommends using avatars with "Circle" shape. Moreover, if you use avatars with "Square" shape, there will be visual inconsistency as the built-in overflow action has "Circle" shape.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the overflow button of the component. **Note:** We recommend using the `Button` component.
   *
   * **Note:** If this slot is not used, the component will display the built-in overflow button.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="overflowButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  overflowButton?: UI5WCSlotsNode;
  /**
   * Fired when the component is activated either with a click/tap or by using the Enter or Space key.
   */
  onClick?: (event: Ui5CustomEvent<AvatarGroupDomRef, AvatarGroupClickEventDetail>) => void;
  /**
   * Fired when the count of visible `Avatar` elements in the component has changed
   */
  onOverflow?: (event: Ui5CustomEvent<AvatarGroupDomRef>) => void;
}

/**
 * Displays a group of avatars arranged horizontally. It is useful to visually showcase a group of related avatars, such as, project team members or employees. The component allows you to display the avatars in different sizes, depending on your use case. The `AvatarGroup` component has two group types:
 *
 * *   `Group` type: The avatars are displayed as partially overlapped on top of each other and the entire group has one click/tap area.
 * *   `Individual` type: The avatars are displayed side-by-side and each avatar has its own click/tap area.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/AvatarGroup" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const AvatarGroup = withWebComponent<AvatarGroupPropTypes, AvatarGroupDomRef>(
  'ui5-avatar-group',
  ['type'],
  [],
  ['overflowButton'],
  ['click', 'overflow'],
  () => import('@ui5/webcomponents/dist/AvatarGroup.js')
);

AvatarGroup.displayName = 'AvatarGroup';

AvatarGroup.defaultProps = {
  type: AvatarGroupType.Group
};

export { AvatarGroup };
