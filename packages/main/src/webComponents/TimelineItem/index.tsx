import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/TimelineItem';
import { FC, ReactNode } from 'react';

export interface TimelineItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the icon to be displayed as graphical element within the `TimelineItem`. SAP-icons font provides numerous options.
   *
   * See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the name of the item.
   */
  itemName?: string;
  /**
   * Defines whether the `itemName` is clickable.
   */
  itemNameClickable?: boolean;
  /**
   * Defines the subtitle text of the component.
   */
  subtitleText?: string;
  /**
   * Defines the title text of the component.
   */
  titleText?: string;
  /**
   * Determines the description of the `TimelineItem`.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the item name is pressed either with a click/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `item-name-clickable` attribute is not set.
   */
  onItemNameClick?: (event: CustomEvent) => void;
}

/**
 * An entry posted on the timeline
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/TimelineItem" target="_blank">UI5 Web Components Playground</a>
 */
const TimelineItem: FC<TimelineItemPropTypes> = withWebComponent<TimelineItemPropTypes>(
  'ui5-timeline-item',
  ['icon', 'itemName', 'subtitleText', 'titleText'],
  ['itemNameClickable'],
  [],
  ['item-name-click']
);

TimelineItem.displayName = 'TimelineItem';

TimelineItem.defaultProps = {
  itemNameClickable: false
};

export { TimelineItem };
