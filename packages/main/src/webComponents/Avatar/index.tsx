'use client';

import '@ui5/webcomponents/dist/Avatar.js';
import type { AvatarAccessibilityAttributes } from '@ui5/webcomponents/dist/Avatar.js';
import type AvatarColorScheme from '@ui5/webcomponents/dist/types/AvatarColorScheme.js';
import type AvatarMode from '@ui5/webcomponents/dist/types/AvatarMode.js';
import type AvatarShape from '@ui5/webcomponents/dist/types/AvatarShape.js';
import type AvatarSize from '@ui5/webcomponents/dist/types/AvatarSize.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface AvatarAttributes {
  /**
   * Defines the additional accessibility attributes that will be applied to the component.
   * The following field is supported:
   *
   * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
   * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
   *
   * **Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default {}
   */
  accessibilityAttributes?: AvatarAccessibilityAttributes;

  /**
   * Defines the text alternative of the component.
   * If not provided a default text alternative will be set, if present.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines the background color of the desired image.
   * If `colorScheme` is set to `Auto`, the avatar will be displayed with the `Accent6` color.
   * @default "Auto"
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
   * 	- If the initials are not valid (more than 3 letters or empty initials).
   * 	- If the initials do not fit in the shape at the current size (e.g. WWW at size XS).
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
   * @default "employee"
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
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * Defines the displayed initials.
   *
   * Up to three letters from an alphabetic script can be displayed as initials.
   * All scripts used in SAP-supported languages are accepted, except logographic and
   * pure syllabic scripts where the concept of initials does not apply: Han (Chinese,
   * Japanese kanji), Hiragana, and Katakana. Korean (Hangul) is supported.
   * If the letters do not fit inside the avatar shape at the current size, the fallback
   * icon is shown instead.
   * @default undefined
   */
  initials?: string | undefined;

  /**
   * Defines if the avatar is interactive (focusable and pressable).
   *
   * **Note:** When set to `true`, this property takes precedence over the `mode` property,
   * and the avatar will be rendered as interactive (role="button", focusable) regardless of the `mode` value.
   *
   * **Note:** This property won't have effect if the `disabled`
   * property is set to `true`.
   * @default false
   * @deprecated Set `mode="Interactive"` instead for the same functionality with proper accessibility.
   */
  interactive?: boolean;

  /**
   * Defines the mode of the component.
   *
   * **Note:**
   * - `Image` (default) - renders with role="img"
   * - `Decorative` - renders with role="presentation" and aria-hidden="true", making it purely decorative
   * - `Interactive` - renders with role="button", focusable (tabindex="0"), and supports keyboard interaction
   *
   * **Note:** This property is ignored when the `interactive` property is set to `true`.
   * In that case, the avatar will always be rendered as interactive.
   *
   * **Note:** Available since [v2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of **@ui5/webcomponents**.
   * @default "Image"
   */
  mode?: AvatarMode | keyof typeof AvatarMode;

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

interface AvatarPropTypes
  extends AvatarAttributes, Omit<CommonProps, keyof AvatarAttributes | 'badge' | 'children' | 'onClick'> {
  /**
   * Defines the optional badge that will be used for visual affordance.
   *
   * **Recommendation:** While badges are supported on all avatars, it is recommended
   * to use them with interactive avatars (via `mode="Interactive"` or `interactive` attribute)
   * to provide better user experience and accessibility.
   *
   * **Note:** While the slot allows for custom badges, to achieve
   * the Fiori design, use the `AvatarBadge` component.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="badge"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v1.7.0](https://github.com/UI5/webcomponents/releases/tag/v1.7.0) of **@ui5/webcomponents**.
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  badge?: UI5WCSlotsNode;

  /**
   * Receives the desired `<img>` tag
   *
   * **Note:** If you experience flickering of the provided image, you can hide the component until it is defined with the following CSS:<br/>
   * `ui5-avatar:not(:defined) {`<br/>
   * &nbsp;&nbsp;&nbsp;&nbsp;`visibility: hidden;`<br/>
   * `}`
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired on mouseup, space and enter if avatar is interactive
   *
   * **Note:** The event will not be fired if the `disabled`
   * property is set to `true`.
   *
   * **Note:** Available since [v2.11.0](https://github.com/UI5/webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClick?: (event: Ui5CustomEvent<AvatarDomRef>) => void;
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
 * - [Space] / [Enter] or [Return] - Fires the `click` event if the `mode` is set to `Interactive` or the deprecated `interactive` property is set to true.
 * - [Shift] - If [Space] is pressed, pressing [Shift] releases the component without triggering the click event.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [Avatar UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Avatar) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents__.
 */
const Avatar = withWebComponent<AvatarPropTypes, AvatarDomRef>(
  'ui5-avatar',
  [
    'accessibilityAttributes',
    'accessibleName',
    'colorScheme',
    'fallbackIcon',
    'icon',
    'initials',
    'mode',
    'shape',
    'size',
  ],
  ['disabled', 'interactive'],
  ['badge'],
  ['click'],
);

Avatar.displayName = 'Avatar';

export { Avatar };
export type { AvatarDomRef, AvatarPropTypes };
