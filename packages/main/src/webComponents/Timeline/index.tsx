'use client';

import '@ui5/webcomponents-fiori/dist/Timeline.js';
import type TimelineGrowingMode from '@ui5/webcomponents-fiori/dist/types/TimelineGrowingMode.js';
import type TimelineLayout from '@ui5/webcomponents-fiori/dist/types/TimelineLayout.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface TimelineAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines whether the Timeline will have growing capability either by pressing a "More" button,
   * or via user scroll. In both cases a `load-more` event is fired.
   *
   * Available options:
   *
   * `Button` - Displays a button at the end of the Timeline, which when pressed triggers the `load-more` event.
   *
   * `Scroll` -Triggers the `load-more` event when the user scrolls to the end of the Timeline.
   *
   * `None` (default) - The growing functionality is off.
   *
   * **Note:** Available since [v2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents-fiori**.
   * @default "None"
   */
  growing?: TimelineGrowingMode | keyof typeof TimelineGrowingMode;

  /**
   * Defines the items orientation.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-fiori**.
   * @default "Vertical"
   */
  layout?: TimelineLayout | keyof typeof TimelineLayout;

  /**
   * Defines if the component should display a loading indicator over the Timeline.
   *
   * **Note:** Available since [v2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  loading?: boolean;

  /**
   * Defines the delay in milliseconds, after which the loading indicator will show up for this component.
   * @default 1000
   */
  loadingDelay?: number;

  /**
   * Defines whether the content of the `header` and `infoBar` slots remains visible when the user scrolls the Timeline.
   *
   * **Note:** The bars pin to the Timeline's own scrollport. Give the Timeline a
   * constrained height (for example `style="height: 32rem"`) so its items scroll
   * inside it. Placing the Timeline inside an externally scrolling ancestor while
   * leaving the Timeline itself unsized is not supported in this mode — the bars
   * will scroll away with the ancestor.
   *
   * **Note:** Available since [v2.24.0](https://github.com/UI5/webcomponents/releases/tag/v2.24.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  stickyHeader?: boolean;
}

interface TimelineDomRef extends Required<TimelineAttributes>, Ui5DomRef {}

interface TimelinePropTypes
  extends
    TimelineAttributes,
    Omit<CommonProps, keyof TimelineAttributes | 'children' | 'header' | 'infoBar' | 'onLoadMore'> {
  /**
   * Determines the content of the `Timeline`.
   *
   * __Supported Node Type/s:__ `Array<ITimelineItem>`
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the content of the Timeline's header area, displayed above the items.
   * Typically a `ui5-toolbar` with search, sort, and filter controls.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.24.0](https://github.com/UI5/webcomponents/releases/tag/v2.24.0) of **@ui5/webcomponents-fiori**.
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  header?: UI5WCSlotsNode;

  /**
   * Defines the content of the Timeline's info bar area, displayed below the header
   * and above the items. Use for status display (applied filters, sort direction, counts).
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="infoBar"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.24.0](https://github.com/UI5/webcomponents/releases/tag/v2.24.0) of **@ui5/webcomponents-fiori**.
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  infoBar?: UI5WCSlotsNode;
  /**
   * Fired when the user presses the `More` button or scrolls to the Timeline's end.
   *
   * **Note:** The event will be fired if `growing` is set to `Button` or `Scroll`.
   *
   * **Note:** Available since [v2.7.0](https://github.com/UI5/webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onLoadMore?: (event: Ui5CustomEvent<TimelineDomRef>) => void;
}

/**
 * The `Timeline` component shows entries (such as objects, events, or posts) in chronological order.
 * A common use case is to provide information about changes to an object, or events related to an object.
 * These entries can be generated by the system (for example, value XY changed from A to B), or added manually.
 * There are two distinct variants of the timeline: basic and social. The basic timeline is read-only,
 * while the social timeline offers a high level of interaction and collaboration, and is integrated within SAP Jam.
 *
 * ### Header and Info Bar Slots
 *
 * The Timeline exposes two named slots above the items area:
 *
 * - `header` — for a controls bar (search field, filter trigger, sort toggle, etc.).
 * The most common pattern is to place a `ui5-toolbar` containing a search input and buttons that open
 * a filter dialog or toggle sort direction. The Timeline itself performs no filtering, sorting, or
 * searching — the application listens for events from its own controls and reorders, hides, or
 * adds items in the default slot accordingly.
 *
 * - `infoBar` — for a status bar that reflects the result of the controls (active filters,
 * applied sort, current search query). Typically contains tokens, labels, or a `ui5-bar`.
 *
 * The Timeline itself does not filter, sort, or search — the application owns that logic.
 * Use `stickyHeader` to pin both bars while the Timeline's items scroll. Give the Timeline
 * a constrained height in this mode so it owns its scrollbar.
 *
 * __Note:__ This is a UI5 Web Component! [Timeline UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/Timeline) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents-fiori__.
 */
const Timeline = withWebComponent<TimelinePropTypes, TimelineDomRef>(
  'ui5-timeline',
  ['accessibleName', 'growing', 'layout', 'loadingDelay'],
  ['loading', 'stickyHeader'],
  ['header', 'infoBar'],
  ['load-more'],
);

Timeline.displayName = 'Timeline';

export { Timeline };
export type { TimelineDomRef, TimelinePropTypes };
