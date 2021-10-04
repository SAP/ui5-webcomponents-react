import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { PopoverHorizontalAlign } from '@ui5/webcomponents-react/lib/PopoverHorizontalAlign';
import { PopoverVerticalAlign } from '@ui5/webcomponents-react/lib/PopoverVerticalAlign';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/ResponsivePopover.js';
import { FC, ReactNode } from 'react';

export interface ResponsivePopoverPropTypes extends WithWebComponentPropTypes {
  /**
   * Determines if there is no enough space, the `Popover` can be placed over the target.
   */
  allowTargetOverlap?: boolean;
  /**
   * Defines the header text.
   *
   * **Note:** If `header` slot is provided, the `headerText` is ignored.
   */
  headerText?: string;
  /**
   * Defines whether the block layer will be shown if modal property is set to true.
   */
  hideBackdrop?: boolean;
  /**
   * Determines the horizontal alignment of the `Popover`.
   *
   * Available options are:
   *
   * *   `Center`
   * *   `Left`
   * *   `Right`
   * *   `Stretch`
   */
  horizontalAlign?: PopoverHorizontalAlign;
  /**
   * Defines whether the `Popover` should close when clicking/tapping outside of the popover. If enabled, it blocks any interaction with the background.
   */
  modal?: boolean;
  /**
   * Determines whether the `Popover` arrow is hidden.
   */
  noArrow?: boolean;
  /**
   * Determines on which side the `Popover` is placed at.
   *
   * Available options are:
   *
   * *   `Left`
   * *   `Right`
   * *   `Top`
   * *   `Bottom`
   */
  placementType?: PlacementType;
  /**
   * Determines the vertical alignment of the `Popover`.
   *
   * Available options are:
   *
   * *   `Center`
   * *   `Top`
   * *   `Bottom`
   * *   `Stretch`
   */
  verticalAlign?: PopoverVerticalAlign;
  /**
   * Sets the accessible aria name of the component.
   */
  accessibleName?: string;
  /**
   * Defines the ID of the HTML Element, which will get the initial focus.
   */
  initialFocus?: string;
  /**
   * Defines if the focus should be returned to the previously focused element, when the popup closes.
   */
  preventFocusRestore?: boolean;
  /**
   * Defines the footer HTML Element.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  footer?: ReactNode | ReactNode[];
  /**
   * Defines the header HTML Element.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  header?: ReactNode | ReactNode[];
  /**
   * Defines the content of the Popup.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired after the component is closed. This event does not bubble.
   */
  onAfterClose?: (event: CustomEvent) => void;
  /**
   * Fired after the component is opened. This event does not bubble.
   */
  onAfterOpen?: (event: CustomEvent) => void;
  /**
   * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. This event does not bubble.
   */
  onBeforeClose?: (event: CustomEvent<{ escPressed: boolean }>) => void;
  /**
   * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. This event does not bubble.
   */
  onBeforeOpen?: (event: CustomEvent) => void;
}

/**
 * The `ResponsivePopover` acts as a Popover on desktop and tablet, while on phone it acts as a Dialog. The component improves tremendously the user experience on mobile.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ResponsivePopover" target="_blank">UI5 Web Components Playground</a>
 */
const ResponsivePopover: FC<ResponsivePopoverPropTypes> = withWebComponent<ResponsivePopoverPropTypes>(
  'ui5-responsive-popover',
  ['headerText', 'horizontalAlign', 'placementType', 'verticalAlign', 'accessibleName', 'initialFocus'],
  ['allowTargetOverlap', 'hideBackdrop', 'modal', 'noArrow', 'preventFocusRestore'],
  ['footer', 'header'],
  ['after-close', 'after-open', 'before-close', 'before-open']
);

ResponsivePopover.displayName = 'ResponsivePopover';

ResponsivePopover.defaultProps = {
  allowTargetOverlap: false,
  hideBackdrop: false,
  horizontalAlign: PopoverHorizontalAlign.Center,
  modal: false,
  noArrow: false,
  placementType: PlacementType.Right,
  verticalAlign: PopoverVerticalAlign.Center,
  preventFocusRestore: false
};

export { ResponsivePopover };
