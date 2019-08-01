import { StyleClassHelper } from '@ui5/webcomponents-react-base';
import React, { CSSProperties, FC, forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './Flexbox.jss';
import { FlexBoxJustifyContent } from '../../lib/FlexBoxJustifyContent';
import { FlexBoxAlignItems } from '../../lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '../../lib/FlexBoxDirection';
import { FlexBoxWrap } from '../../lib/FlexBoxWrap';

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

  const inlineStyle = {} as CSSProperties;
  if (height) {
    inlineStyle.height = height;
  }
  if (width) {
    inlineStyle.width = width;
  }

  if (className) {
    flexBoxClasses.put(className);
  }

  if (style) {
    Object.assign(inlineStyle, style);
  }

  return (
    <div ref={ref} className={flexBoxClasses.valueOf()} style={inlineStyle} title={tooltip} slot={slot}>
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
