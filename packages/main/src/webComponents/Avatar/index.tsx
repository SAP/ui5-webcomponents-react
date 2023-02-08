'use client';

import '@ui5/webcomponents/dist/Avatar.js';
import { ReactNode } from 'react';
import { AvatarColorScheme, AvatarShape, AvatarSize } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';
import { UI5WCSlotsNode } from '../../types';

interface AvatarAttributes {
  /**
   * Defines the text alternative of the component. If not provided a default text alternative will be set, if present.
   */
  accessibleName?: string;
  /**
   * Defines the background color of the desired image.
   *
   * Available options are:
   *
   * *   `Accent1`
   * *   `Accent2`
   * *   `Accent3`
   * *   `Accent4`
   * *   `Accent5`
   * *   `Accent6`
   * *   `Accent7`
   * *   `Accent8`
   * *   `Accent9`
   * *   `Accent10`
   * *   `Placeholder`
   */
  colorScheme?: AvatarColorScheme | keyof typeof AvatarColorScheme;
  /**
   * Defines the name of the UI5 Icon, that will be displayed.
   * **Note:** If `image` slot is provided, the property will be ignored.
   * **Note:** You should import the desired icon first, then use its name as "icon".
   *
   * import "@ui5/webcomponents-icons/dist/{icon\_name}.js"
   *
   * `<Avatar icon="employee">`
   *
   * See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the displayed initials.
   * Up to three Latin letters can be displayed as initials.
   */
  initials?: string;
  /**
   * Defines if the avatar is interactive (focusable and pressable).
   */
  interactive?: boolean;
  /**
   * Defines the shape of the component.
   *
   * Available options are:
   *
   * *   `Circle`
   * *   `Square`
   */
  shape?: AvatarShape | keyof typeof AvatarShape;
  /**
   * Defines predefined size of the component.
   *
   * Available options are:
   *
   * *   `XS`
   * *   `S`
   * *   `M`
   * *   `L`
   * *   `XL`
   */
  size?: AvatarSize | keyof typeof AvatarSize;
}

export interface AvatarDomRef extends AvatarAttributes, Ui5DomRef {}

export interface AvatarPropTypes extends AvatarAttributes, CommonProps {
  /**
   * Defines the optional badge that will be used for visual affordance. **Note:** While the slot allows for custom badges, to achieve the Fiori design, please use `Badge` with `Icon` in the corresponding `icon` slot, without text nodes.
   *
   * Example:
   *
   * <Avatar>
   *     <Badge slot="badge">
   *         <Icon slot="icon" name="employee"></Icon>
   *     </Badge>
   * </Avatar>
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="badge"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  badge?: UI5WCSlotsNode;
  /**
   * Receives the desired `<img>` tag **Note:** If you experience flickering of the provided image, you can hide the component until it is being defined with the following CSS:
   *
   * `Avatar:not(:defined) {    visibility: hidden;   }   `
   */
  children?: ReactNode;
}

/**
 * An image-like component that has different display options for representing images and icons in different shapes and sizes, depending on the use case. The shape can be circular or square. There are several predefined sizes, as well as an option to set a custom size.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Avatar" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Avatar = withWebComponent<AvatarPropTypes, AvatarDomRef>(
  'ui5-avatar',
  ['accessibleName', 'colorScheme', 'icon', 'initials', 'shape', 'size'],
  ['interactive'],
  ['badge'],
  [],
  () => import('@ui5/webcomponents/dist/Avatar.js')
);

Avatar.displayName = 'Avatar';

export { Avatar };
