'use client';

import '@ui5/webcomponents-fiori/dist/TimelineGroupItem.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface TimelineGroupItemAttributes {
  /**
   * Determines if the group is collapsed or expanded.
   * @default false
   */
  collapsed?: boolean;

  /**
   * Defines the text of the button that expands and collapses the group.
   * @default undefined
   */
  groupName?: string | undefined;
}

interface TimelineGroupItemDomRef extends Required<TimelineGroupItemAttributes>, Ui5DomRef {}

interface TimelineGroupItemPropTypes
  extends TimelineGroupItemAttributes,
    Omit<CommonProps, keyof TimelineGroupItemAttributes | 'children' | 'onToggle'> {
  /**
   * Determines the content of the `TimelineGroupItem`.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the group item is expanded or collapsed.
   */
  onToggle?: (event: Ui5CustomEvent<TimelineGroupItemDomRef>) => void;
}

/**
 * An entry posted on the timeline.
 * It is intented to represent a group of `<TimelineItem>`s.
 *
 * **Note**: Please do not use empty groups in order to preserve the intended design.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.1.0) of __@ui5/webcomponents-fiori__.
 */
const TimelineGroupItem = withWebComponent<TimelineGroupItemPropTypes, TimelineGroupItemDomRef>(
  'ui5-timeline-group-item',
  ['groupName'],
  ['collapsed'],
  [],
  ['toggle']
);

TimelineGroupItem.displayName = 'TimelineGroupItem';

export { TimelineGroupItem };
export type { TimelineGroupItemDomRef, TimelineGroupItemPropTypes };
