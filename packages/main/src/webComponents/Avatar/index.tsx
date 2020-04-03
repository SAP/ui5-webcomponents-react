import { AvatarBackgroundColor } from '@ui5/webcomponents-react/lib/AvatarBackgroundColor';
import { AvatarFitType } from '@ui5/webcomponents-react/lib/AvatarFitType';
import { AvatarShape } from '@ui5/webcomponents-react/lib/AvatarShape';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Avatar from '@ui5/webcomponents/dist/Avatar';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface AvatarPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the background color of the desired image. <br><br> Available options are: <ul> <li><code>Accent1</code></li> <li><code>Accent2</code></li> <li><code>Accent3</code></li> <li><code>Accent4</code></li> <li><code>Accent5</code></li> <li><code>Accent6</code></li> <li><code>Accent7</code></li> <li><code>Accent8</code></li> <li><code>Accent9</code></li> <li><code>Accent10</code></li> <li><code>Placeholder</code></li> <ul>
   */
  backgroundColor?: AvatarBackgroundColor;
  /**
   * Defines the name of the UI5 Icon, that would be displayed. <br> <b>Note:</b> If <code>image</code> is set, the property would be ignored. <br> <b>Note:</b> You should import the desired icon first, then use its name as "icon". <br><br> import "@ui5/webcomponents-icons/dist/icons/{icon_name}.js" <br> <pre>&lt;ui5-avatar icon-src="employee"></pre>
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
   * Defines the displayed initials. <br> Up to two Latin letters can be displayed as initials in a <code>ui5-avatar</code>.
   */
  initials?: string;
  /**
   * Defines the shape of the <code>ui5-avatar</code>. <br><br> Available options are: <ul> <li><code>Circle</code></li> <li><code>Square</code></li> <ul>
   */
  shape?: AvatarShape;
  /**
   * Defines predefined size of the <code>ui5-avatar</code>. <br><br> Available options are: <ul> <li><code>XS</code></li> <li><code>S</code></li> <li><code>M</code></li> <li><code>L</code></li> <li><code>XL</code></li> <ul>
   */
  size?: AvatarSize;
}

/**
 * <code>import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Avatar" target="_blank">UI5 Web Components Playground</a>
 */
const Avatar: FC<AvatarPropTypes> = withWebComponent<AvatarPropTypes>(UI5Avatar);

Avatar.displayName = 'Avatar';

Avatar.defaultProps = {
  backgroundColor: AvatarBackgroundColor.Accent6,
  icon: '',
  image: '',
  imageFitType: AvatarFitType.Cover,
  initials: '',
  shape: AvatarShape.Circle,
  size: AvatarSize.S
};

export { Avatar };
