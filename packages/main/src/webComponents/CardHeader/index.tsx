'use client';

import '@ui5/webcomponents/dist/CardHeader.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface CardHeaderAttributes {
  /**
   * Defines the additional text.
   * @default undefined
   */
  additionalText?: string | undefined;

  /**
   * Defines if the component would be interactive,
   * e.g gets hover effect, gets focus outline and `click` event is fired, when pressed.
   * @default false
   */
  interactive?: boolean;

  /**
   * Defines the subtitle text.
   * @default undefined
   */
  subtitleText?: string | undefined;

  /**
   * Defines the title text.
   * @default undefined
   */
  titleText?: string | undefined;
}

interface CardHeaderDomRef extends Required<CardHeaderAttributes>, Ui5DomRef {}

interface CardHeaderPropTypes
  extends CardHeaderAttributes,
    Omit<CommonProps, keyof CardHeaderAttributes | 'action' | 'avatar' | 'onClick'> {
  /**
   * Defines an action, displayed in the right most part of the header.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="action"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  action?: UI5WCSlotsNode;

  /**
   * Defines an avatar image, displayed in the left most part of the header.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="avatar"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  avatar?: UI5WCSlotsNode;
  /**
   * Fired when the component is activated by mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event would be fired only if the `interactive` property is set to true.
   */
  onClick?: (event: Ui5CustomEvent<CardHeaderDomRef>) => void;
}

/**
 * The `CardHeader` is a component, meant to be used as a header of the `Card` component.
 * It displays valuable information, that can be defined with several properties, such as: `titleText`, `subtitleText`, `additionalText`
 * and two slots: `avatar` and `action`.
 *
 * ### Keyboard handling
 * In case you enable `interactive` property, you can press the `CardHeader` by Space and Enter keys.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const CardHeader = withWebComponent<CardHeaderPropTypes, CardHeaderDomRef>(
  'ui5-card-header',
  ['additionalText', 'subtitleText', 'titleText'],
  ['interactive'],
  ['action', 'avatar'],
  ['click'],
  () => import('@ui5/webcomponents/dist/CardHeader.js')
);

CardHeader.displayName = 'CardHeader';

export { CardHeader };
export type { CardHeaderDomRef, CardHeaderPropTypes };
