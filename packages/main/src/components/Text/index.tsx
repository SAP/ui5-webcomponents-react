import { clsx } from 'clsx';
import type { CSSProperties, ReactNode } from 'react';
import React, { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
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
}

const useStyles = createUseStyles(TextStyles, { name: 'Text' });
/**
 * The `Text` component can be used for embedding text into your app. You can hyphenate the text with the use of the `wrapping` prop.
 * <br />__Note:__ Line breaks will always be visualized except when the wrapping property is set to false. In addition, tabs and whitespace can be preserved by setting the renderWhitespace property to true.
 */
const Text = forwardRef<HTMLSpanElement, TextPropTypes>((props, ref) => {
  const { children, renderWhitespace, wrapping = true, className, style, maxLines, ...rest } = props;
  const classes = useStyles();
  const classNameString = clsx(
    classes.text,
    wrapping === false && classes.noWrap,
    renderWhitespace && classes.renderWhitespace,
    typeof maxLines === 'number' && classes.maxLines,
    className
  );

  return (
    <span
      ref={ref}
      style={{ '--_ui5wcr_maxLines': typeof maxLines === 'number' ? maxLines : undefined, ...style } as CSSProperties}
      className={classNameString}
      {...rest}
    >
      {children}
    </span>
  );
});

Text.displayName = 'Text';

export { Text };
