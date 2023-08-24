import { clsx } from 'clsx';
import type { CSSProperties, ElementType, ReactNode } from 'react';
import React, { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import { FlexBoxAlignItems, FlexBoxDirection, FlexBoxJustifyContent, FlexBoxWrap } from '../../enums/index.js';
import type { CommonProps } from '../../interfaces/index.js';
import { styles } from './FlexBox.jss.js';

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
   * Defines the CSS gap between all inner children on row and column level.
   * By default, gap values shall be provided as a number. It scales automatically in `gap * 1rem` steps.
   *
   * For more advanced usages patters, there's the option to provide a full CSS gap property string.
   *
   * <b>Note:</b> Corresponds to `gap` property of the CSS specification.
   * Refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/gap">CSS gap documentation</a>.
   */
  gap?: CSSProperties['gap'];
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
  children?: ReactNode | ReactNode[];
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
const FlexBox = forwardRef<HTMLDivElement, FlexBoxPropTypes>((props, ref) => {
  const {
    children,
    justifyContent = FlexBoxJustifyContent.Start,
    direction = FlexBoxDirection.Row,
    alignItems = FlexBoxAlignItems.Stretch,
    gap = 'normal',
    displayInline,
    wrap = FlexBoxWrap.NoWrap,
    className,
    fitContainer,
    as = 'div',
    ...rest
  } = props;

  const classes = useStyles({ gap });
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

  const CustomTag = as as ElementType;
  return (
    <CustomTag ref={ref} className={flexBoxClasses} {...rest}>
      {children}
    </CustomTag>
  );
});

FlexBox.displayName = 'FlexBox';

export { FlexBox };
