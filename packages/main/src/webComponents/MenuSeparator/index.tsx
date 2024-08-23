'use client';

import '@ui5/webcomponents/dist/MenuSeparator.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface MenuSeparatorAttributes {}

interface MenuSeparatorDomRef extends Required<MenuSeparatorAttributes>, Ui5DomRef {}

interface MenuSeparatorPropTypes extends MenuSeparatorAttributes, CommonProps {}

/**
 * The `MenuSeparator` represents a horizontal line to separate menu items inside a `Menu`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const MenuSeparator = withWebComponent<MenuSeparatorPropTypes, MenuSeparatorDomRef>(
  'ui5-menu-separator',
  [],
  [],
  [],
  []
);

MenuSeparator.displayName = 'MenuSeparator';

export { MenuSeparator };
export type { MenuSeparatorDomRef, MenuSeparatorPropTypes };
