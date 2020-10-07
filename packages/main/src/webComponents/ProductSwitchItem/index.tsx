import '@ui5/webcomponents-fiori/dist/ProductSwitchItem';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC } from 'react';

export interface ProductSwitchItemPropTypes extends Omit<WithWebComponentPropTypes, 'onClick'> {
  /**
   * Defines the title of the <code>ProductSwitchItem</code>.
   */
  heading?: string;
  /**
   * Defines the icon to be displayed as a graphical element within the <code>ProductSwitchItem</code>. <br><br> Example: <br> <pre>ProductSwitchItem icon="palette"</pre><br/><br/>
   *
   * See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the subtitle of the <code>ProductSwitchItem</code>.
   */
  subtitle?: string;
  /**
   * Defines a target where the <code>targetSrc</code> content must be open. <br><br> Available options are: <ul> <li><code>_self</code></li> <li><code>_top</code></li> <li><code>_blank</code></li> <li><code>_parent</code></li> <li><code>_search</code></li> </ul>
   */
  target?: string;
  /**
   * Defines the <code>ProductSwitchItem</code> target URI. Supports standard hyperlink behavior.
   */
  targetSrc?: string;
  /**
   * Fired when the <code>ProductSwitchItem</code> is activated either with a click/tap or by using the Enter or Space key.
   */
  onClick?: (event: CustomEvent) => void;
}

/**
 * The <code>ProductSwitchItem</code> web component represents the items displayed in the <code>ProductSwitch</code> web
 component. <br /><br />
 <b>Note:</b> <code>ProductSwitchItem</code> is not supported when used outside of <code>ProductSwitch</code>.
 <br /><br />

 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ProductSwitchItem" target="_blank">UI5 Web Components Playground</a>
 */
const ProductSwitchItem: FC<ProductSwitchItemPropTypes> = withWebComponent<ProductSwitchItemPropTypes>(
  'ui5-product-switch-item',
  ['heading', 'icon', 'subtitle', 'target', 'targetSrc'],
  [],
  [],
  ['click']
);

ProductSwitchItem.displayName = 'ProductSwitchItem';

ProductSwitchItem.defaultProps = {
  target: '_self'
};

export { ProductSwitchItem };
