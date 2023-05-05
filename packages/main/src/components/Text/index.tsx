import { clsx } from 'clsx';
import type { ReactNode } from 'react';
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
}

const useStyles = createUseStyles(TextStyles, { name: 'Text' });
/**
 * The `Text` component can be used for embedding text into your app. You can hyphenate the text with the use of the `wrapping` prop.
 * <br />__Note:__ Line breaks will always be visualized except when the wrapping property is set to false. In addition, tabs and whitespace can be preserved by setting the renderWhitespace property to true.
 */
const Text = forwardRef<HTMLSpanElement, TextPropTypes>((props, ref) => {
  const { children, renderWhitespace, wrapping, className, style, slot, ...rest } = props;

  const classes = useStyles();
  const classNameString = clsx(
    classes.text,
    wrapping === false && classes.noWrap,
    renderWhitespace && classes.renderWhitespace,
    className
  );

  return (
    <span ref={ref} style={style} className={classNameString} slot={slot} {...rest}>
      {children}
    </span>
  );
});

Text.defaultProps = {
  renderWhitespace: false,
  wrapping: true
};

Text.displayName = 'Text';

export { Text };
