import { CSSProperties, HTMLAttributes } from 'react';

export interface CommonProps extends HTMLAttributes<HTMLElement> {
  /**
   * Element style which will be appended to the most outer element of a component.
   * Use this prop carefully, some css properties might break the component.
   *
   * __Note:__ When used on a web component, styles are applied only to the container. Styles are inherited by the component's shadow root only if they are explicitly set that way. Find out more in our [Knowledge Base Entry](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-styling--page#applying-styling-via-classname-or-style).
   */
  style?: CSSProperties;
  /**
   * CSS Class Name which will be appended to the most outer element of a component.
   * Use this prop carefully, overwriting CSS rules might break the component.
   *
   * __Note:__ When used on a web component, styles are applied only to the container. Styles are inherited by the component's shadow root only if they are explicitly set that way. Find out more in our [Knowledge Base Entry](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-styling--page#applying-styling-via-classname-or-style).
   */
  className?: string;
}
