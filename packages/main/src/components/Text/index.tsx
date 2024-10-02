'use client';

import { useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, ReactNode } from 'react';
import { forwardRef } from 'react';
import { EMPTY_VALUE } from '../../i18n/i18n-defaults.js';
import type { CommonProps } from '../../types/index.js';
import { classNames, styleData } from './Text.module.css.js';

export interface TextPropTypes extends CommonProps {
  /**
   * Pass the text as direct child of Text.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode;
  /**
   * Defines how white-space inside <code>Text</code> is handled. If set to true, sequences of white space are preserved.
   */
  renderWhitespace?: boolean;
  /**
   * Defines whether the text wraps when there is not enough space.
   *
   * @detault true
   */
  wrapping?: boolean;
  /**
   * Limits the number of lines for wrapping texts.
   *
   * __Note:__ This prop only takes effect if the `wrapping` prop is set to `true`.
   */
  maxLines?: number;
  /**
   * Specifies if an empty indicator should be displayed when there is no text.
   *
   * @since 1.23.0
   */
  emptyIndicator?: boolean;
  /**
   * Defines the type of text wrapping to be used (hyphenated or normal).
   *
   * __Note:__ This prop only takes effect if the `wrapping` prop is set to `true`.
   *
   * @since 1.23.0
   */
  hyphenated?: boolean;
}

/**
 * The `Text` component can be used for embedding text into your app. You can hyphenate the text with the use of the `wrapping` prop.
 *
 * __Note:__ Line breaks will always be visualized except when the wrapping property is set to false. In addition, tabs and whitespace can be preserved by setting the renderWhitespace property to true.
 */
const Text = forwardRef<HTMLSpanElement, TextPropTypes>((props, ref) => {
  const {
    children,
    renderWhitespace,
    wrapping = true,
    className,
    style,
    maxLines,
    hyphenated,
    emptyIndicator,
    ...rest
  } = props;

  useStylesheet(styleData, Text.displayName);
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const applyMaxLines = typeof maxLines === 'number' && maxLines > 1;

  const classNameString = clsx(
    classNames.text,
    (wrapping === false || (typeof maxLines === 'number' && maxLines <= 1)) && classNames.noWrap,
    renderWhitespace && classNames.renderWhitespace,
    applyMaxLines && classNames.maxLines,
    hyphenated && classNames.hyphenated,
    className
  );

  const showEmptyIndicator = emptyIndicator && !children;
  const computedChildren = showEmptyIndicator ? (
    <span
      aria-hidden={showEmptyIndicator}
      data-component-name="TextEmptyIndicator"
      className={classNames.emptyIndicator}
    >
      –
    </span>
  ) : (
    children
  );

  return (
    <span
      ref={ref}
      style={
        {
          '--_ui5wcr_maxLines': applyMaxLines ? maxLines : undefined,
          ...style
        } as CSSProperties
      }
      className={classNameString}
      {...rest}
    >
      {computedChildren}
      {showEmptyIndicator && (
        <span className={classNames.pseudoInvisibleText} data-component-name="TextEmptyTextContainer">
          {i18nBundle.getText(EMPTY_VALUE)}
        </span>
      )}
    </span>
  );
});

Text.displayName = 'Text';

export { Text };
