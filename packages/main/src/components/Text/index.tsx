import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import React, { CSSProperties, FC, forwardRef, ReactNode, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { ThemeOptions } from '../../interfaces/ThemeOptions';
import { TextStyles } from './Text.jss';

export interface TextProps extends CommonProps {
  /**
   * Pass the text as direct child of Text
   */
  children: string | JSX.Element | ReactNode;
  /**
   * An optional theme override to be passed. Will win against the theme provided by the ThemeProvider
   */
  theme?: ThemeOptions;

  renderWhitespace?: boolean;

  wrapping?: boolean;

  width?: CSSProperties['width'];
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof TextStyles>>(TextStyles, { name: 'Text' });

const Text: FC<TextProps> = forwardRef((props: TextProps, ref: Ref<HTMLSpanElement>) => {
  const { children, renderWhitespace, wrapping, width, className, style, tooltip, slot } = props;
  const classes = useStyles();
  const classNameString = StyleClassHelper.of(classes.text);
  if (wrapping === false) {
    classNameString.put(classes.noWrap);
  }
  if (renderWhitespace) {
    classNameString.put(classes.renderWhitespace);
  }
  if (className) {
    classNameString.put(className);
  }
  const inlineStyles = { width };
  if (style) {
    Object.assign(inlineStyles, style);
  }
  return (
    <span ref={ref} style={inlineStyles} className={classNameString.toString()} title={tooltip} slot={slot}>
      {children}
    </span>
  );
});

Text.defaultProps = {
  renderWhitespace: false,
  wrapping: true,
  width: null
};

Text.displayName = 'Text';

export { Text };
