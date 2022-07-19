import '@ui5/webcomponents/dist/Avatar.js';
import { ReactNode } from 'react';
import { AvatarColorScheme, AvatarShape, AvatarSize } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

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
   * See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the displayed initials.
   * Up to two Latin letters can be displayed as initials.
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
   * Receives the desired `<img>` tag **Note:** If you experience flickering of the provided image, you can hide the component until it is being defined with the following CSS:
   *
   * `Avatar:not(:defined) {    visibility: hidden;   }   `
   */
  children?: ReactNode;
}

/**
 * An image-like component that has different display options for representing images and icons in different shapes and sizes, depending on the use case. The shape can be circular or square. There are several predefined sizes, as well as an option to set a custom size.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Avatar" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Avatar = withWebComponent<AvatarPropTypes, AvatarDomRef>(
  'ui5-avatar',
  ['accessibleName', 'colorScheme', 'icon', 'initials', 'shape', 'size'],
  ['interactive'],
  [],
  []
);

Avatar.displayName = 'Avatar';

export { Avatar };
