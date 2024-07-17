'use client';

import '@ui5/webcomponents-fiori/dist/DynamicSideContent.js';
import type { DynamicSideContentLayoutChangeEventDetail } from '@ui5/webcomponents-fiori/dist/DynamicSideContent.js';
import type SideContentFallDown from '@ui5/webcomponents-fiori/dist/types/SideContentFallDown.js';
import type SideContentPosition from '@ui5/webcomponents-fiori/dist/types/SideContentPosition.js';
import type SideContentVisibility from '@ui5/webcomponents-fiori/dist/types/SideContentVisibility.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface DynamicSideContentAttributes {
  /**
   * Defines whether the component is in equal split mode. In this mode, the side and
   * the main content take 50:50 percent of the container on all screen sizes
   * except for phone, where the main and side contents are switching visibility
   * using the toggle method.
   * @default false
   */
  equalSplit?: boolean;

  /**
   * Defines the visibility of the main content.
   * @default false
   */
  hideMainContent?: boolean;

  /**
   * Defines the visibility of the side content.
   * @default false
   */
  hideSideContent?: boolean;

  /**
   * Defines on which breakpoints the side content falls down below the main content.
   * @default "OnMinimumWidth"
   */
  sideContentFallDown?: SideContentFallDown | keyof typeof SideContentFallDown;

  /**
   * Defines whether the side content is positioned before the main content (left side
   * in LTR mode), or after the the main content (right side in LTR mode).
   * @default "End"
   */
  sideContentPosition?: SideContentPosition | keyof typeof SideContentPosition;

  /**
   * Defines on which breakpoints the side content is visible.
   * @default "ShowAboveS"
   */
  sideContentVisibility?: SideContentVisibility | keyof typeof SideContentVisibility;
}

interface DynamicSideContentDomRef extends Required<DynamicSideContentAttributes>, Ui5DomRef {
  /**
   * Toggles visibility of main and side contents on S screen size (mobile device).
   * @returns {void}
   */
  toggleContents: () => void;
}

interface DynamicSideContentPropTypes
  extends DynamicSideContentAttributes,
    Omit<CommonProps, keyof DynamicSideContentAttributes | 'children' | 'sideContent' | 'onLayoutChange'> {
  /**
   * Defines the main content.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the side content.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="sideContent"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  sideContent?: UI5WCSlotsNode;
  /**
   * Fires when the current breakpoint has been changed.
   */
  onLayoutChange?: (event: Ui5CustomEvent<DynamicSideContentDomRef, DynamicSideContentLayoutChangeEventDetail>) => void;
}

/**
 * The DynamicSideContent (`DynamicSideContent`) is a layout component that allows additional content
 * to be displayed in a way that flexibly adapts to different screen sizes. The side
 * content appears in a container next to or directly below the main content
 * (it doesn't overlay). When the side content is triggered, the main content becomes
 * narrower (if appearing side-by-side). The side content contains a separate scrollbar
 * when appearing next to the main content.
 *
 * ### Usage
 *
 * *When to use?*
 *
 * Use this component if you want to display relevant information that is not critical
 * for users to complete a task. Users should have access to all the key functions and
 * critical information in the app even if they do not see the side content. This is
 * important because on smaller screen sizes it may be difficult to display the side
 * content in a way that is easily accessible for the user.
 *
 * *When not to use?*
 *
 * Don't use it if you want to display navigation or critical information that prevents
 * users from completing a task when they have no access to the side content.
 *
 * ### Responsive Behavior
 *
 * Screen width \> 1440px
 *
 * - Main vs. side content ratio is 75 vs. 25 percent (with a minimum of 320px
 * each).
 * - If the application defines a trigger, the side content can be hidden.
 *
 * Screen width \<\= 1440px and \> 1024px
 *
 * - Main vs. side content ratio is 66.666 vs. 33.333 percent (with a minimum of
 * 320px each). If the side content width falls below 320 px, it automatically slides
 * under the main content, unless the app development team specifies that it should
 * disappear.
 *
 * Screen width \<\= 1024px and \> 720px
 *
 * - The side content ratio is fixed to 340px, and the main content takes the rest
 * of the width. Only if the `sideContentFallDown` is set to `OnMinimumWidth`
 * and screen width is \<\= 960px and \> 720px the side content falls below the main content.
 *
 * Screen width \<\= 720px (for example on a mobile device)
 *
 * - In this case, the side content automatically disappears from the screen (unless
 * specified to stay under the content by setting of `sideContentVisibility`
 * property to `AlwaysShow`) and can be triggered from a pre-set trigger
 * (specified within the app). When the side content is triggered, it replaces the main
 * content. We recommend that you always place the trigger for the side content in the
 * same location, such as in the app footer.
 *
 * A special case allows switching the comparison mode between the main and side content.
 * In this case, the screen is split into 50:50 percent for main vs. side content. The
 * responsive behavior of the equal split is the same as in the standard view - the
 * side content disappears on screen widths of less than 720 px and can only be
 * viewed by triggering it.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of __@ui5/webcomponents-fiori__.
 */
const DynamicSideContent = withWebComponent<DynamicSideContentPropTypes, DynamicSideContentDomRef>(
  'ui5-dynamic-side-content',
  ['sideContentFallDown', 'sideContentPosition', 'sideContentVisibility'],
  ['equalSplit', 'hideMainContent', 'hideSideContent'],
  ['sideContent'],
  ['layout-change'],
  () => import('@ui5/webcomponents-fiori/dist/DynamicSideContent.js')
);

DynamicSideContent.displayName = 'DynamicSideContent';

export { DynamicSideContent };
export type { DynamicSideContentDomRef, DynamicSideContentPropTypes };
