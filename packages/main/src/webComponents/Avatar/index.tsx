'use client';

import '@ui5/webcomponents/dist/Avatar.js';
import type AvatarColorScheme from '@ui5/webcomponents/dist/types/AvatarColorScheme.js';
import type AvatarShape from '@ui5/webcomponents/dist/types/AvatarShape.js';
import type AvatarSize from '@ui5/webcomponents/dist/types/AvatarSize.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface AvatarAttributes {
  /**
   * Defines the text alternative of the component.
   * If not provided a default text alternative will be set, if present.
   */
  accessibleName?: string;

  /**
   * Defines the background color of the desired image.
   * @default "Accent6"
   */
  colorScheme?: AvatarColorScheme | keyof typeof AvatarColorScheme;

  /**
   * Defines whether the component is disabled.
   * A disabled component can't be pressed or
   * focused, and it is not in the tab chain.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the name of the fallback icon, which should be displayed in the following cases:
   *
   * 	- If the initials are not valid (more than 3 letters, unsupported languages or empty initials).
   * 	- If there are three initials and they do not fit in the shape (e.g. WWW for some of the sizes).
   * 	- If the image src is wrong.
   *
   * **Note:** If not set, a default fallback icon "employee" is displayed.
   *
   * **Note:** You should import the desired icon first, then use its name as "fallback-icon".
   *
   * `import "@ui5/webcomponents-icons/dist/{icon_name}.js"`
   *
   * `<Avatar fallback-icon="alert">`
   *
   * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   */
  fallbackIcon?: string;

  /**
   * Defines the name of the UI5 Icon, that will be displayed.
   *
   * **Note:** If `image` slot is provided, the property will be ignored.
   *
   * **Note:** You should import the desired icon first, then use its name as "icon".
   *
   * `import "@ui5/webcomponents-icons/dist/{icon_name}.js"`
   *
   * `<Avatar icon="employee">`
   *
   * **Note:** If no icon or an empty one is provided, by default the "employee" icon should be displayed.
   *
   * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   */
  icon?: string;

  /**
   * Defines the displayed initials.
   *
   * Up to three Latin letters can be displayed as initials.
   */
  initials?: string;

  /**
   * Defines if the avatar is interactive (focusable and pressable).
   *
   * **Note:** This property won't have effect if the `disabled`
   * property is set to `true`.
   * @default false
   */
  interactive?: boolean;

  /**
   * Defines the shape of the component.
   * @default "Circle"
   */
  shape?: AvatarShape | keyof typeof AvatarShape;

  /**
   * Defines predefined size of the component.
   * @default "S"
   */
  size?: AvatarSize | keyof typeof AvatarSize;
}

interface AvatarDomRef extends Required<AvatarAttributes>, Ui5DomRef {}

interface AvatarPropTypes extends AvatarAttributes, Omit<CommonProps, keyof AvatarAttributes | 'badge' | 'children'> {
  /**
   * Defines the optional badge that will be used for visual affordance.
   *
   * **Note:** While the slot allows for custom badges, to achieve
   * the Fiori design, please use `Badge` with `Icon`
   * in the corresponding `icon` slot, without text nodes.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="badge"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v1.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.7.0) of **@ui5/webcomponents**.
   */
  badge?: UI5WCSlotsNode;

  /**
   * Receives the desired `<img>` tag
   *
   * **Note:** If you experience flickering of the provided image, you can hide the component until it is being defined with the following CSS:
   */
  children?: ReactNode | ReactNode[];
}

/**
 * An image-like component that has different display options for representing images and icons
 * in different shapes and sizes, depending on the use case.
 *
 * The shape can be circular or square. There are several predefined sizes, as well as an option to
 * set a custom size.
 *
 * ### Keyboard Handling
 *
 * - [SPACE, ENTER, RETURN] - Fires the `click` event if the `interactive` property is set to true.
 * - [SHIFT] - If [SPACE] is pressed, pressing [SHIFT] releases the component without triggering the click event.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const Avatar = withWebComponent<AvatarPropTypes, AvatarDomRef>(
  'ui5-avatar',
  ['accessibleName', 'colorScheme', 'fallbackIcon', 'icon', 'initials', 'shape', 'size'],
  ['disabled', 'interactive'],
  ['badge'],
  [],
  () => import('@ui5/webcomponents/dist/Avatar.js')
);

Avatar.displayName = 'Avatar';

export { Avatar };
export type { AvatarDomRef, AvatarPropTypes };
