import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { FlexBoxWrap } from '@ui5/webcomponents-react/lib/FlexBoxWrap';
import React, { CSSProperties, FC, forwardRef, ReactNode, ReactNodeArray, Ref, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './Flexbox.jss';

const useStyles = createUseStyles(styles, { name: 'FlexBox' });

export interface FlexBoxPropTypes extends CommonProps {
  alignItems?: FlexBoxAlignItems;
  direction?: FlexBoxDirection;
  displayInline?: boolean;
  fitContainer?: boolean;
  height?: CSSProperties['height'];
  justifyContent?: FlexBoxJustifyContent;
  width?: CSSProperties['width'];
  wrap?: FlexBoxWrap;
  children: ReactNode | ReactNodeArray;
}

/**
 * <code>import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';</code>
 */
const FlexBox: FC<FlexBoxPropTypes> = forwardRef((props: FlexBoxPropTypes, ref: Ref<HTMLDivElement>) => {
  const {
    children,
    justifyContent,
    direction,
    alignItems,
    height,
    width,
    displayInline,
    wrap,
    style,
    className,
    tooltip,
    slot
  } = props;

  const classes = useStyles();
  const flexBoxClasses = StyleClassHelper.of(classes.flexBox);
  // direction
  flexBoxClasses.put(classes[`flexBoxDirection${direction}`]);
  // justify content
  flexBoxClasses.put(classes[`justifyContent${justifyContent}`]);
  // align items
  flexBoxClasses.put(classes[`alignItems${alignItems}`]);
  // wrapping
  flexBoxClasses.put(classes[`flexWrap${wrap}`]);

  if (displayInline) {
    flexBoxClasses.put(classes.flexBoxDisplayInline);
  }

  if (className) {
    flexBoxClasses.put(className);
  }

  const memoizedStyles = useMemo(() => {
    const innerStyles: CSSProperties = {};
    if (height) {
      innerStyles.height = height;
    }
    if (width) {
      innerStyles.width = width;
    }
    if (style) {
      Object.assign(innerStyles, style);
    }
    return innerStyles;
  }, [height, width, style]);

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <div
      ref={ref}
      className={flexBoxClasses.valueOf()}
      style={memoizedStyles}
      title={tooltip}
      slot={slot}
      {...passThroughProps}
    >
      {children}
    </div>
  );
});

FlexBox.defaultProps = {
  alignItems: FlexBoxAlignItems.Stretch,
  direction: FlexBoxDirection.Row,
  displayInline: false,
  height: '',
  justifyContent: FlexBoxJustifyContent.Start,
  width: '',
  wrap: FlexBoxWrap.NoWrap
};
FlexBox.displayName = 'FlexBox';

export { FlexBox };
