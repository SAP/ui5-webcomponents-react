import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { CSSProperties, ReactNode } from 'react';

import '@ui5/webcomponents/dist/ColorPalettePopover.js';

export interface ColorPalettePopoverPropTypes extends CommonProps {
  /**
   * Defines the default color of the component. **Note:** The default color should be a part of the ColorPalette colors
   */
  defaultColor?: CSSProperties['color'];
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
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the user selects a color.
   */
  onItemClick?: (event: Ui5CustomEvent<HTMLElement, { color: string }>) => void;
}

/**
 * Represents a predefined range of colors for easier selection. Overview The ColorPalettePopover provides the users with a slot to predefine colors. You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly. You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ColorPalettePopover" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ColorPalettePopover = withWebComponent<ColorPalettePopoverPropTypes>(
  'ui5-color-palette-popover',
  ['defaultColor'],
  ['showDefaultColor', 'showMoreColors', 'showRecentColors'],
  [],
  ['item-click']
);

ColorPalettePopover.displayName = 'ColorPalettePopover';

ColorPalettePopover.defaultProps = {
  defaultColor: '',
  showDefaultColor: false,
  showMoreColors: false,
  showRecentColors: false
};

export { ColorPalettePopover };
