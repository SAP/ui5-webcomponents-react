'use client';

import '@ui5/webcomponents-fiori/dist/IllustratedMessage.js';
import type TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import type IllustrationMessageSize from '@ui5/webcomponents-fiori/dist/types/IllustrationMessageSize.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface IllustratedMessageAttributes {
  /**
   * Receives id(or many ids) of the elements that label the component.
   */
  accessibleNameRef?: string;

  /**
   * Defines the illustration name that will be displayed in the component.
   * Example:
   * `name='BeforeSearch'`, `name='UnableToUpload'`, etc..
   *
   * **Note:** To use the TNT illustrations, you need to set the `tnt` or `Tnt` prefix in front of the icon's name.
   * Example:
   * `name='tnt/Avatar'` or `name='TntAvatar'`.
   *
   * **Note:** By default the `BeforeSearch` illustration is loaded. When using an illustration type, other than the default, it should be loaded in addition:
   * `import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js";`
   *
   * For TNT illustrations:
   * `import "@ui5/webcomponents-fiori/dist/illustrations/tnt/SessionExpired.js";`
   * @default "BeforeSearch"
   */
  name?: string;

  /**
   * Determines which illustration breakpoint variant is used.
   *
   * As `IllustratedMessage` adapts itself around the `Illustration`, the other elements of the component are displayed differently on the different breakpoints/illustration sizes.
   * @default "Auto"
   */
  size?: IllustrationMessageSize | keyof typeof IllustrationMessageSize;

  /**
   * Defines the subtitle of the component.
   *
   * **Note:** Using this property, the default subtitle text of illustration will be overwritten.
   *
   * **Note:** Using `subtitle` slot, the default of this property will be overwritten.
   */
  subtitleText?: string;

  /**
   * Defines the semantic level of the title. **Note:** Used for accessibility purposes only.
   * @default "H2"
   */
  titleLevel?: TitleLevel | keyof typeof TitleLevel;

  /**
   * Defines the title of the component.
   *
   * **Note:** Using this property, the default title text of illustration will be overwritten.
   */
  titleText?: string;
}

interface IllustratedMessageDomRef extends Required<IllustratedMessageAttributes>, Ui5DomRef {}

interface IllustratedMessagePropTypes
  extends IllustratedMessageAttributes,
    Omit<CommonProps, keyof IllustratedMessageAttributes | 'children' | 'subtitle'> {
  /**
   * Defines the component actions.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the subtitle of the component.
   *
   * **Note:** Using this slot, the default subtitle text of illustration and the value of `subtitleText` property will be overwritten.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="subtitle"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  subtitle?: UI5WCSlotsNode;
}

/**
 * An IllustratedMessage is a recommended combination of a solution-oriented message, an engaging illustration, and conversational tone to better communicate an empty or a success state than just show a message alone. Each illustration has default internationalised title and subtitle texts. Also they can be managed with `titleText` and `subtitleText` properties. To display the desired illustration, use the `name` property, where you can find the list of all available illustrations.
 *
 * **Note:** By default the “BeforeSearch” illustration is loaded. To use other illustrations, make sure you import them in addition, for example:
 * `import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js"`
 * **Note:** Illustrations starting with the “Tnt” prefix are part of another illustration set. For example to use the “TntSuccess” illustration, add the following import::
 * `import "@ui5/webcomponents-fiori/dist/illustrations/tnt/Success.js"`
 *
 * ### Structure
 *
 * The IllustratedMessage consists of the following elements, which are displayed below each other in the following order:
 *
 * *   Illustration
 * *   Title
 * *   Subtitle
 * *   Actions
 *
 * ### Usage
 *
 * `IllustratedMessage` is meant to be used inside container component, for example a `ui5-card`, a `ui5-dialog` or a `Page`
 *
 *
 *__Note:__ The `title` slot collides with the native HTML `title` attribute, so to customize the title (heading) of the component you need to pass it as slot. You can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/user-feedback-illustratedmessage--default-story#fully-customizable-title).
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const IllustratedMessage = withWebComponent<IllustratedMessagePropTypes, IllustratedMessageDomRef>(
  'ui5-illustrated-message',
  ['accessibleNameRef', 'name', 'size', 'subtitleText', 'titleLevel', 'titleText'],
  [],
  ['subtitle'],
  [],
  () => import('@ui5/webcomponents-fiori/dist/IllustratedMessage.js')
);

IllustratedMessage.displayName = 'IllustratedMessage';

export { IllustratedMessage };
export type { IllustratedMessageDomRef, IllustratedMessagePropTypes };
