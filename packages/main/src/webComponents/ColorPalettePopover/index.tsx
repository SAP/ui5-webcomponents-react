'use client';

import '@ui5/webcomponents/dist/ColorPalettePopover.js';
import type { ColorPalettePopoverItemClickEventDetail } from '@ui5/webcomponents/dist/ColorPalettePopover.js';
import type { CSSProperties, ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../types/index.js';

interface ColorPalettePopoverAttributes {
  /**
   * Defines the default color of the component. **Note:** The default color should be a part of the ColorPalette colors
   */
  defaultColor?: CSSProperties['color'];
  /**
   * Defines the open | closed state of the popover.
   */
  open?: boolean;
  /**
   * Defines the ID of the element that the popover is shown at.
   */
  opener?: string;
  /**
   * Defines whether the user can choose the default color from a button.
   */
  showDefaultColor?: boolean;
  /**
   * Defines whether the user can choose a custom color from a component. **Note:** In order to use this property you need to import the following module: `"@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"`
   */
  showMoreColors?: boolean;
  /**
   * Defines whether the user can see the last used colors in the bottom of the component
   */
  showRecentColors?: boolean;
}

export interface ColorPalettePopoverDomRef extends Omit<ColorPalettePopoverAttributes, 'opener'>, Ui5DomRef {
  /**
   * Shows the ColorPalettePopover. **Note:** The method is deprecated and will be removed in future, use `showAt` instead.
   *
   * @deprecated The method is deprecated in favour of <code>open</code> and <code>opener</code> properties.
   * @param {HTMLElement | EventTarget} opener - the element that the popover is shown at
   */
  openPopover: (opener: HTMLElement | EventTarget) => void;
  /**
   * Shows the ColorPalettePopover.
   *
   * @deprecated The method is deprecated in favour of <code>open</code> and <code>opener</code> properties.
   * @param {HTMLElement | EventTarget} opener - the element that the popover is shown at
   */
  showAt: (opener: HTMLElement | EventTarget) => void;
  /**
   * Defines the ID or DOM Reference of the element that the popover is shown at.
   */
  opener?: string | HTMLElement;
}

export interface ColorPalettePopoverPropTypes extends ColorPalettePopoverAttributes, CommonProps {
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the `ColorPalettePopover` is closed due to user interaction.
   */
  onClose?: (event: Ui5CustomEvent<ColorPalettePopoverDomRef>) => void;
  /**
   * Fired when the user selects a color.
   */
  onItemClick?: (event: Ui5CustomEvent<ColorPalettePopoverDomRef, ColorPalettePopoverItemClickEventDetail>) => void;
}

/**
 * Represents a predefined range of colors for easier selection. Overview The ColorPalettePopover provides the users with a slot to predefine colors. You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly. You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ColorPalettePopover)
 */
const ColorPalettePopover = withWebComponent<ColorPalettePopoverPropTypes, ColorPalettePopoverDomRef>(
  'ui5-color-palette-popover',
  ['defaultColor', 'opener'],
  ['open', 'showDefaultColor', 'showMoreColors', 'showRecentColors'],
  [],
  ['close', 'item-click'],
  () => import('@ui5/webcomponents/dist/ColorPalettePopover.js')
);

ColorPalettePopover.displayName = 'ColorPalettePopover';

export { ColorPalettePopover };
