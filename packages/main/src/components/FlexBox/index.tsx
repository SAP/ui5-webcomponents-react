import { createUseStyles } from 'react-jss';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/dist/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/dist/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/dist/FlexBoxJustifyContent';
import { FlexBoxWrap } from '@ui5/webcomponents-react/dist/FlexBoxWrap';
import React, { forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { styles } from './FlexBox.jss';
import clsx from 'clsx';

const useStyles = createUseStyles(styles, { name: 'FlexBox' });

export interface FlexBoxPropTypes extends CommonProps {
  /**
   * Controls the alignment of items on the Cross Axis.<br />
   * <b>Note:</b> Corresponds to `align-items`.
   */
  alignItems?: FlexBoxAlignItems | keyof typeof FlexBoxAlignItems;
  /**
   * Controls how the items are placed in the `FlexBox`.<br />
   * <b>Note:</b> Corresponds to `flex-direction`.
   */
  direction?: FlexBoxDirection | keyof typeof FlexBoxDirection;
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
  justifyContent?: FlexBoxJustifyContent | keyof typeof FlexBoxJustifyContent;
  /**
   * Determines whether the `FlexBox` should wrap, when there is not enough space to display all items in one line.<br />
   * <b>Note:</b> Corresponds to `flex-wrap`.
   */
  wrap?: FlexBoxWrap | keyof typeof FlexBoxWrap;
  /**
   * Content of the `FlexBox`.
   */
  children: ReactNode | ReactNodeArray;
  /**
   * Sets the components outer HTML tag.
   *
   * __Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.
   */
  as?: keyof HTMLElementTagNameMap;
}

/**
 * The `FlexBox` builds the container for a flexible box layout by leveraging the CSS flexbox layout.
 */
const FlexBox = forwardRef((props: FlexBoxPropTypes, ref: Ref<HTMLDivElement>) => {
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
    slot,
    as
  } = props;

  const classes = useStyles();
  const flexBoxClasses = clsx(
    classes.flexBox,
    classes[`flexBoxDirection${direction}`],
    classes[`justifyContent${justifyContent}`],
    classes[`alignItems${alignItems}`],
    classes[`flexWrap${wrap}`],
    displayInline && classes.flexBoxDisplayInline,
    fitContainer && classes.fitContainer,
    className
  );

  const passThroughProps = usePassThroughHtmlProps(props);
  const CustomTag = as as React.ElementType;
  return (
    <CustomTag ref={ref} className={flexBoxClasses} style={style} title={tooltip} slot={slot} {...passThroughProps}>
      {children}
    </CustomTag>
  );
});

FlexBox.defaultProps = {
  as: 'div',
  alignItems: FlexBoxAlignItems.Stretch,
  direction: FlexBoxDirection.Row,
  displayInline: false,
  fitContainer: false,
  justifyContent: FlexBoxJustifyContent.Start,
  wrap: FlexBoxWrap.NoWrap
};
FlexBox.displayName = 'FlexBox';

export { FlexBox };
