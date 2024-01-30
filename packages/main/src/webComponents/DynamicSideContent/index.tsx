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
   * Defines whether the component is in equal split mode. In this mode, the side and the main content take 50:50 percent of the container on all screen sizes except for phone, where the main and side contents are switching visibility using the toggle method.
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
   *
   * **The available values are:**
   *
   * *   `BelowXL`
   * *   `BelowL`
   * *   `BelowM`
   * *   `OnMinimumWidth`
   * @default "OnMinimumWidth"
   */
  sideContentFallDown?: SideContentFallDown | keyof typeof SideContentFallDown;

  /**
   * Defines whether the side content is positioned before the main content (left side in LTR mode), or after the the main content (right side in LTR mode).
   *
   * **The available values are:**
   *
   * *   `Start`
   * *   `End`
   * @default "End"
   */
  sideContentPosition?: SideContentPosition | keyof typeof SideContentPosition;

  /**
   * Defines on which breakpoints the side content is visible.
   *
   * **The available values are:**
   *
   * *   `AlwaysShow`
   * *   `ShowAboveL`
   * *   `ShowAboveM`
   * *   `ShowAboveS`
   * *   `NeverShow`
   * @default "ShowAboveS"
   */
  sideContentVisibility?: SideContentVisibility | keyof typeof SideContentVisibility;
}

interface DynamicSideContentDomRef extends DynamicSideContentAttributes, Ui5DomRef {
  /**
   * Toggles visibility of main and side contents on S screen size (mobile device).
   * @returns {void}
   */
  toggleContents: () => void;
}

interface DynamicSideContentPropTypes
  extends DynamicSideContentAttributes,
    Omit<CommonProps, keyof DynamicSideContentAttributes | 'onLayoutChange'> {
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
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  sideContent?: UI5WCSlotsNode;
  /**
   * Fires when the current breakpoint has been changed.
   */
  onLayoutChange?: (event: Ui5CustomEvent<DynamicSideContentDomRef, DynamicSideContentLayoutChangeEventDetail>) => void;
}

/**
 * The DynamicSideContent (`DynamicSideContent`) is a layout component that allows additional content to be displayed in a way that flexibly adapts to different screen sizes. The side content appears in a container next to or directly below the main content (it doesn't overlay). When the side content is triggered, the main content becomes narrower (if appearing side-by-side). The side content contains a separate scrollbar when appearing next to the main content.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
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
