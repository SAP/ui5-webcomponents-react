'use client';

import '@ui5/webcomponents-fiori/dist/TimelineItem.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

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
  ['icon', 'name', 'subtitleText', 'titleText'],
  ['nameClickable'],
  [],
  ['name-click'],
  () => import('@ui5/webcomponents-fiori/dist/TimelineItem.js')
);

TimelineItem.displayName = 'TimelineItem';

export { TimelineItem };
export type { TimelineItemDomRef, TimelineItemPropTypes };
