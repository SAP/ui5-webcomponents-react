import { deprecationNotice } from '@ui5/webcomponents-react-base/lib/Utils';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import React, { CSSProperties, FC, forwardRef, ReactNode, Ref, useMemo } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { TextStyles } from './Text.jss';

export interface TextProps extends CommonProps {
  /**
   * Pass the text as direct child of Text
   */
  children: string | JSX.Element | ReactNode;

  renderWhitespace?: boolean;

  wrapping?: boolean;

  width?: CSSProperties['width'];
}

const useStyles = createComponentStyles(TextStyles, { name: 'Text' });

/**
 * <code>import { Text } from '@ui5/webcomponents-react/lib/Text';</code>
 */
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

  const inlineStyles = useMemo(() => {
    if (width !== null && width !== undefined) {
      deprecationNotice(
        'Text',
        'The prop `width` is deprecated and will be removed in the v0.10.0. Please use the `style` object instead.'
      );
    }
    return {
      width,
      ...style
    };
  }, [style, width]);

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <span
      ref={ref}
      style={inlineStyles}
      className={classNameString.toString()}
      title={tooltip}
      slot={slot}
      {...passThroughProps}
    >
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
