'use client';

import '@ui5/webcomponents/dist/ColorPalettePopover.js';
import type { ColorPalettePopoverItemClickEventDetail } from '@ui5/webcomponents/dist/ColorPalettePopover.js';
import type { CSSProperties, ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface ColorPalettePopoverAttributes {
  /**
   * Defines the default color of the component.
   *
   * **Note:** The default color should be a part of the ColorPalette colors`
   * @default undefined
   */
  defaultColor?: CSSProperties['color'];

  /**
   * Defines the open | closed state of the popover.
   *
   * **Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.
   * @default false
   */
  open?: boolean;

  /**
   * Defines the ID or DOM Reference of the element that the popover is shown at.
   *
   * **Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  opener?: string;

  /**
   * Defines whether the user can choose the default color from a button.
   * @default false
   */
  showDefaultColor?: boolean;

  /**
   * Defines whether the user can choose a custom color from a component.
   *
   * **Note:** In order to use this property you need to import the following module: `"@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"`
   * @default false
   */
  showMoreColors?: boolean;

  /**
   * Defines whether the user can see the last used colors in the bottom of the component
   * @default false
   */
  showRecentColors?: boolean;
}

interface ColorPalettePopoverDomRef extends Omit<Required<ColorPalettePopoverAttributes>, 'opener'>, Ui5DomRef {
  /**
   * Defines the ID or DOM Reference of the element that the popover is shown at.
   *
   * **Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.
   */
  opener: HTMLElement | string | undefined;
}

interface ColorPalettePopoverPropTypes
  extends ColorPalettePopoverAttributes,
    Omit<CommonProps, keyof ColorPalettePopoverAttributes | 'children' | 'onClose' | 'onItemClick'> {
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the `ColorPalettePopover` is closed due to user interaction.
   *
   * **Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.
   */
  onClose?: (event: Ui5CustomEvent<ColorPalettePopoverDomRef>) => void;

  /**
   * Fired when the user selects a color.
   */
  onItemClick?: (event: Ui5CustomEvent<ColorPalettePopoverDomRef, ColorPalettePopoverItemClickEventDetail>) => void;
}

/**
 * Represents a predefined range of colors for easier selection.
 *
 * Overview
 * The ColorPalettePopover provides the users with a slot to predefine colors.
 *
 * You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly.
 * You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.
 *
 * ### Usage
 *
 * The palette is intended for users, who don't want to check and remember the different values of the colors and spend large amount of time to configure the right color through the color picker.
 *
 * For the `ColorPalettePopover`
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
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
export type { ColorPalettePopoverDomRef, ColorPalettePopoverPropTypes };
