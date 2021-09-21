import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Link.js';
import { FC, ReactNode } from 'react';

export interface LinkPropTypes extends Omit<WithWebComponentPropTypes, 'onClick'> {
  /**
   * Defines the `Link` design.
   *
   * **Note:** Avaialble options are `Default`, `Subtle`, and `Emphasized`.
   */
  design?: LinkDesign;
  /**
   * Defines whether the `Link` is disabled.
   *
   * **Note:** When disabled, the `Link` cannot be triggered by the user.
   */
  disabled?: boolean;
  /**
   * Defines the `Link` href.
   *
   * **Note:** Standard hyperlink behavior is supported.
   */
  href?: string;
  /**
   * Defines the `Link` target.
   *
   * **Notes:**
   *
   * *   Available options are the standard values: `_self`, `_top`, `_blank`, `_parent`, and `_search`.
   * *   This property must only be used when the `href` property is set.
   */
  target?: string;
  /**
   * Defines whether the `Link` text should wrap when there is no sufficient space.
   *
   * **Note:** The text is truncated by default.
   */
  wrap?: boolean;
  /**
   * Defines the text of the `Link`.
   * **Note:** Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the `Link` is triggered either with a mouse/tap or by using the Enter key.
   */
  onClick?: (event: CustomEvent) => void;
}

/**
 * The `Link` is a hyperlink component that is used to navigate to other apps and web pages, or to trigger actions. It is a clickable text element, visualized in such a way that it stands out from the standard text. On hover, it changes its style to an underlined text to provide additional feedback to the user.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Link" target="_blank">UI5 Web Components Playground</a>
 */
const Link: FC<LinkPropTypes> = withWebComponent<LinkPropTypes>(
  'ui5-link',
  ['design', 'href', 'target'],
  ['disabled', 'wrap'],
  [],
  ['click']
);

Link.displayName = 'Link';

Link.defaultProps = {
  design: LinkDesign.Default,
  disabled: false,
  wrap: false
};

export { Link };
