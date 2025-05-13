'use client';

import '@ui5/webcomponents-fiori/dist/TimelineItem.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface TimelineItemAttributes {
  /**
   * Defines the icon to be displayed as graphical element within the `TimelineItem`.
   * SAP-icons font provides numerous options.
   *
   * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * Defines the name of the item, displayed before the `title-text`.
   * @default undefined
   */
  name?: string | undefined;

  /**
   * Defines if the `name` is clickable.
   * @default false
   */
  nameClickable?: boolean;

  /**
   * Defines the state of the icon displayed in the `TimelineItem`.
   *
   * **Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents-fiori**.
   * @default "None"
   */
  state?: ValueState | keyof typeof ValueState;

  /**
   * Defines the subtitle text of the component.
   * @default undefined
   */
  subtitleText?: string | undefined;

  /**
   * Defines the title text of the component.
   * @default undefined
   */
  titleText?: string | undefined;
}

interface TimelineItemDomRef extends Required<TimelineItemAttributes>, Ui5DomRef {}

interface TimelineItemPropTypes
  extends TimelineItemAttributes,
    Omit<CommonProps, keyof TimelineItemAttributes | 'children' | 'onNameClick'> {
  /**
   * Defines the content of the `TimelineItem`.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the item name is pressed either with a
   * click/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `name-clickable`
   * attribute is not set.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onNameClick?: (event: Ui5CustomEvent<TimelineItemDomRef>) => void;
}

/**
 * An entry posted on the timeline.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const TimelineItem = withWebComponent<TimelineItemPropTypes, TimelineItemDomRef>(
  'ui5-timeline-item',
  ['icon', 'name', 'state', 'subtitleText', 'titleText'],
  ['nameClickable'],
  [],
  ['name-click'],
);

TimelineItem.displayName = 'TimelineItem';

export { TimelineItem };
export type { TimelineItemDomRef, TimelineItemPropTypes };
