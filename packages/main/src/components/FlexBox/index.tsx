import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { FlexBoxWrap } from '@ui5/webcomponents-react/lib/FlexBoxWrap';
import React, { FC, forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './Flexbox.jss';

const useStyles = createComponentStyles(styles, { name: 'FlexBox' });

export interface FlexBoxPropTypes extends CommonProps {
  alignItems?: FlexBoxAlignItems;
  direction?: FlexBoxDirection;
  displayInline?: boolean;
  fitContainer?: boolean;
  justifyContent?: FlexBoxJustifyContent;
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

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <div ref={ref} className={flexBoxClasses.valueOf()} style={style} title={tooltip} slot={slot} {...passThroughProps}>
      {children}
    </div>
  );
});

FlexBox.defaultProps = {
  alignItems: FlexBoxAlignItems.Stretch,
  direction: FlexBoxDirection.Row,
  displayInline: false,
  justifyContent: FlexBoxJustifyContent.Start,
  wrap: FlexBoxWrap.NoWrap
};
FlexBox.displayName = 'FlexBox';

export { FlexBox };
