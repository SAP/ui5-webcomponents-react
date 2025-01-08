'use client';

import '@ui5/webcomponents-fiori/dist/NavigationLayout.js';
import type NavigationLayoutMode from '@ui5/webcomponents-fiori/dist/types/NavigationLayoutMode.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface NavigationLayoutAttributes {
  /**
   * Specifies the navigation layout mode.
   * @default "Auto"
   */
  mode?: NavigationLayoutMode | keyof typeof NavigationLayoutMode;
}

interface NavigationLayoutDomRef extends Required<NavigationLayoutAttributes>, Ui5DomRef {
  /**
   * Gets whether the side navigation is collapsed.
   * @returns {boolean}
   */
  isSideCollapsed: () => boolean;
}

interface NavigationLayoutPropTypes
  extends NavigationLayoutAttributes,
    Omit<CommonProps, keyof NavigationLayoutAttributes | 'children' | 'header' | 'sideContent'> {
  /**
   * Defines the content.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the header.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode;

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
}

/**
 * The `NavigationLayout` is a container component that can be used to
 * create a layout with a header, a side navigation and a content area.
 *
 * ### Usage
 *
 * Use the `NavigationLayout` to create whole screen of an application with vertical navigation.
 *
 * ### Responsive Behavior
 *
 * On desktop and tablet devices, the side navigation is visible
 * by default and can be expanded or collapsed using the `mode` property.
 * On phone devices, the side navigation is hidden by default and can
 * be displayed using the `mode` property.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.4.0) of __@ui5/webcomponents-fiori__.
 */
const NavigationLayout = withWebComponent<NavigationLayoutPropTypes, NavigationLayoutDomRef>(
  'ui5-navigation-layout',
  ['mode'],
  [],
  ['header', 'sideContent'],
  []
);

NavigationLayout.displayName = 'NavigationLayout';

export { NavigationLayout };
export type { NavigationLayoutDomRef, NavigationLayoutPropTypes };
