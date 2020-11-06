import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { FlexBoxWrap } from '@ui5/webcomponents-react/lib/FlexBoxWrap';
import React, { FC, forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './FlexBox.jss';

const useStyles = createComponentStyles(styles, { name: 'FlexBox' });

export interface FlexBoxPropTypes extends CommonProps {
  /**
   * Controls the alignment of items on the Cross Axis.<br />
   * <b>Note:</b> Corresponds to `align-items`.
   */
  alignItems?: FlexBoxAlignItems;
  /**
   * Controls how the items are placed in the `FlexBox`.<br />
   * <b>Note:</b> Corresponds to `flex-direction`.
   */
  direction?: FlexBoxDirection;
  /**
   * Determines whether the `FlexBox` is in `flex` or `inline-flex` mode.
   */
  displayInline?: boolean;
  /**
   * Determines whether the `FlexBox` will be sized to completely fill its container.
   */
  fitContainer?: boolean;
  /**
   * Defines how the browser distributes space between and around items along the main-axis.<br />
   * <b>Note:</b> Corresponds to `justify-content`.
   */
  justifyContent?: FlexBoxJustifyContent;
  /**
   * Determines whether the `FlexBox` should wrap, when there is not enough space to display all items in one line.<br />
   * <b>Note:</b> Corresponds to `flex-wrap`.
   */
  wrap?: FlexBoxWrap;
  /**
   * Content of the `FlexBox`.
   */
  children: ReactNode | ReactNodeArray;
}

/**
 * The `FlexBox` builds the container for a flexible box layout by leveraging the CSS flexbox layout.
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
    fitContainer,
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

  if (fitContainer) {
    flexBoxClasses.put(classes.fitContainer);
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
  fitContainer: false,
  justifyContent: FlexBoxJustifyContent.Start,
  wrap: FlexBoxWrap.NoWrap
};
FlexBox.displayName = 'FlexBox';

export { FlexBox };
