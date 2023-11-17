'use client';

import { useI18nBundle } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, ReactNode } from 'react';
import React, { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import { EMPTY_VALUE } from '../../i18n/i18n-defaults.js';
import type { CommonProps } from '../../interfaces/index.js';
import { TextStyles } from './Text.jss.js';

export interface TextPropTypes extends CommonProps {
  /**
   * Pass the text as direct child of Text
   */
  children?: ReactNode;
  /**
   * Defines how white-space inside <code>Text</code> is handled. If set to true, sequences of white space are preserved.
   */
  renderWhitespace?: boolean;
  /**
   * Defines whether the text wraps when there is not enough space.
   */
  wrapping?: boolean;
  /**
   * Limits the number of lines for wrapping texts.
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

const useStyles = createUseStyles(TextStyles, { name: 'Text' });
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
  const classes = useStyles();
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const classNameString = clsx(
    classes.text,
    wrapping === false && classes.noWrap,
    renderWhitespace && classes.renderWhitespace,
    typeof maxLines === 'number' && classes.maxLines,
    hyphenated && classes.hyphenated,
    className
  );

  const showEmptyIndicator = emptyIndicator && !children;
  const computedChildren = showEmptyIndicator ? (
    <span aria-hidden={showEmptyIndicator} data-component-name="TextEmptyIndicator" className={classes.emptyIndicator}>
      –
    </span>
  ) : (
    children
  );

  return (
    <span
      ref={ref}
      style={{ '--_ui5wcr_maxLines': typeof maxLines === 'number' ? maxLines : undefined, ...style } as CSSProperties}
      className={classNameString}
      {...rest}
    >
      {computedChildren}
      {showEmptyIndicator && (
        <span className={classes.pseudoInvisibleText} data-component-name="TextEmptyTextContainer">
          {i18nBundle.getText(EMPTY_VALUE)}
        </span>
      )}
    </span>
  );
});

Text.displayName = 'Text';

export { Text };
