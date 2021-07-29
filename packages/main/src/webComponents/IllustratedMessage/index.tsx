import { IllustrationMessageType } from '@ui5/webcomponents-react/dist/IllustrationMessageType';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/dist/withWebComponent';
import { FC, ReactNode } from 'react';

import '@ui5/webcomponents-fiori/dist/IllustratedMessage';

export interface IllustratedMessagePropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the illustration name that will be displayed in the component.
   *
   * Available illustrations are:
   *
   * *   `BeforeSearch`
   * *   `NoActivities`
   * *   `NoData`
   * *   `NoEntries`
   * *   `NoMail`
   * *   `NoNotifications`
   * *   `NoSavedItems`
   * *   `NoSearchResults`
   * *   `NoTasks`
   * *   `UnableToLoad`
   * *   `UnableToUpload`
   *
   * <br />
   *
   * **Note:** By default BeforeSearch illustration is loaded. When using illustration type it have to be loaded separately (`import "@ui5/webcomponents-fiori/dist/illustrations/BeforeSearch.js";`).
   */
  name?: IllustrationMessageType;
  /**
   * Defines the subtitle of the component.
   *
   * **Note:** Using this property, the default subtitle text of illustration will be overwritten.
   */
  subtitleText?: string;
  /**
   * Defines the title of the component.
   *
   * **Note:** Using this property, the default title text of illustration will be overwritten.
   */
  titleText?: string;
  /**
   * Defines the component actions.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * An IllustratedMessage recommended combination of a solution-oriented message, an engaging illustration, and conversational tone to better communicate an empty or a success state than just show a message alone.
 * Each illustration has default internationalised title and subtitle texts. Also they can be managed with `titleText` and `subtitleText` properties.
 *
 * **Note:** By default BeforeSearch illustration is loaded.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/IllustratedMessage" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const IllustratedMessage: FC<IllustratedMessagePropTypes> = withWebComponent<IllustratedMessagePropTypes>(
  'ui5-illustrated-message',
  ['name', 'subtitleText', 'titleText'],
  [],
  [],
  []
);

IllustratedMessage.displayName = 'IllustratedMessage';

IllustratedMessage.defaultProps = {
  name: IllustrationMessageType.BeforeSearch
};

export { IllustratedMessage };
