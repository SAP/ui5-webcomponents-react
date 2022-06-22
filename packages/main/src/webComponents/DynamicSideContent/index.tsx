import '@ui5/webcomponents-fiori/dist/DynamicSideContent.js';
import { ReactNode } from 'react';
import { SideContentFallDown, SideContentPosition, SideContentVisibility } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface DynamicSideContentAttributes {
  /**
   * Defines whether the component is in equal split mode. In this mode, the side and the main content take 50:50 percent of the container on all screen sizes except for phone, where the main and side contents are switching visibility using the toggle method.
   */
  equalSplit?: boolean;
  /**
   * Defines the visibility of the main content.
   */
  hideMainContent?: boolean;
  /**
   * Defines the visibility of the side content.
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
   */
  sideContentFallDown?: SideContentFallDown | keyof typeof SideContentFallDown;
  /**
   * Defines whether the side content is positioned before the main content (left side in LTR mode), or after the the main content (right side in LTR mode).
   *
   * **The available values are:**
   *
   * *   `Start`
   * *   `End`
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
   */
  sideContentVisibility?: SideContentVisibility | keyof typeof SideContentVisibility;
}

export interface DynamicSideContentDomRef extends DynamicSideContentAttributes, Ui5DomRef {
  /**
   * Toggles visibility of main and side contents on S screen size (mobile device).
   */
  toggleContents: () => void;
}

export interface DynamicSideContentPropTypes extends DynamicSideContentAttributes, CommonProps {
  /**
   * Defines the main content.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the side content.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  sideContent?: ReactNode | ReactNode[];
  /**
   * Fires when the current breakpoint has been changed.
   */
  onLayoutChange?: (
    event: Ui5CustomEvent<
      DynamicSideContentDomRef,
      {
        currentBreakpoint: string;
        previousBreakpoint: string;
        mainContentVisible: boolean;
        sideContentVisible: boolean;
      }
    >
  ) => void;
}

/**
 * The DynamicSideContent (`DynamicSideContent`) is a layout component that allows additional content to be displayed in a way that flexibly adapts to different screen sizes. The side content appears in a container next to or directly below the main content (it doesn't overlay). When the side content is triggered, the main content becomes narrower (if appearing side-by-side). The side content contains a separate scrollbar when appearing next to the main content.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/DynamicSideContent" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const DynamicSideContent = withWebComponent<DynamicSideContentPropTypes, DynamicSideContentDomRef>(
  'ui5-dynamic-side-content',
  ['sideContentFallDown', 'sideContentPosition', 'sideContentVisibility'],
  ['equalSplit', 'hideMainContent', 'hideSideContent'],
  ['sideContent'],
  ['layout-change']
);

DynamicSideContent.displayName = 'DynamicSideContent';

DynamicSideContent.defaultProps = {
  sideContentFallDown: SideContentFallDown.OnMinimumWidth,
  sideContentPosition: SideContentPosition.End,
  sideContentVisibility: SideContentVisibility.ShowAboveS
};

export { DynamicSideContent };
