import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Avatar';
import { FC } from 'react';
import { AvatarBackgroundColor } from '@ui5/webcomponents-react/lib/AvatarBackgroundColor';
import { AvatarFitType } from '@ui5/webcomponents-react/lib/AvatarFitType';
import { AvatarShape } from '@ui5/webcomponents-react/lib/AvatarShape';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';

export interface AvatarPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the text alternative of the <code>Avatar</code>. If not provided a default text alternative will be set, if present.
   */
  accessibleName?: string;
  /**
   * Defines the background color of the desired image. <br><br> Available options are: <ul> <li><code>Accent1</code></li> <li><code>Accent2</code></li> <li><code>Accent3</code></li> <li><code>Accent4</code></li> <li><code>Accent5</code></li> <li><code>Accent6</code></li> <li><code>Accent7</code></li> <li><code>Accent8</code></li> <li><code>Accent9</code></li> <li><code>Accent10</code></li> <li><code>Placeholder</code></li> <ul>
   */
  backgroundColor?: AvatarBackgroundColor;
  /**
   * Defines the name of the UI5 Icon, that would be displayed. <br> <b>Note:</b> If <code>image</code> is set, the property would be ignored. <br> <b>Note:</b> You should import the desired icon first, then use its name as "icon". <br><br> import "@ui5/webcomponents-icons/dist/icons/{icon_name}.js" <br> <pre>&lt;Avatar icon-src="employee"></pre><br/><br/>
   *
   * See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the source path to the desired image.
   */
  image?: string;
  /**
   * Defines the fit type of the desired image. <br><br> Available options are: <ul> <li><code>Cover</code></li> <li><code>Contain</code></li> <ul>
   */
  imageFitType?: AvatarFitType;
  /**
   * Defines the displayed initials. <br> Up to two Latin letters can be displayed as initials in a <code>Avatar</code>.
   */
  initials?: string;
  /**
   * Defines the shape of the <code>Avatar</code>. <br><br> Available options are: <ul> <li><code>Circle</code></li> <li><code>Square</code></li> <ul>
   */
  shape?: AvatarShape;
  /**
   * Defines predefined size of the <code>Avatar</code>. <br><br> Available options are: <ul> <li><code>XS</code></li> <li><code>S</code></li> <li><code>M</code></li> <li><code>L</code></li> <li><code>XL</code></li> <ul>
   */
  size?: AvatarSize;
}

/**
     * An image-like control that has different display options for representing images and icons in different shapes and
sizes, depending on the use case. The shape can be circular or square. There are several predefined sizes, as well as an
option to set a custom size.
     
     * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Avatar" target="_blank">UI5 Web Components Playground</a>
     */
const Avatar: FC<AvatarPropTypes> = withWebComponent<AvatarPropTypes>(
  'ui5-avatar',
  ['accessibleName', 'backgroundColor', 'icon', 'image', 'imageFitType', 'initials', 'shape', 'size'],
  [],
  [],
  []
);

Avatar.displayName = 'Avatar';

Avatar.defaultProps = {
  backgroundColor: AvatarBackgroundColor.Accent6,
  imageFitType: AvatarFitType.Cover,
  shape: AvatarShape.Circle,
  size: AvatarSize.S
};

export { Avatar };
