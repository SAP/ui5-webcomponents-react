'use client';

import { useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ElementType, ReactNode } from 'react';
import React, { forwardRef } from 'react';
import { FlexBoxAlignItems, FlexBoxDirection, FlexBoxJustifyContent, FlexBoxWrap } from '../../enums/index.js';
import type { CommonProps } from '../../types/index.js';
import { classNames, styleData } from './FlexBox.module.css.js';

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
   *
   * __Note:__ `fitContainer` only works if the height of the containing block is specified (i.e. it doesn't depend on content height)
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
    displayInline,
    wrap = FlexBoxWrap.NoWrap,
    className,
    fitContainer,
    as = 'div',
    ...rest
  } = props;

  useStylesheet(styleData, FlexBox.displayName);
  const flexBoxClasses = clsx(
    classNames.flexBox,
    classNames[`flexBoxDirection${direction}`],
    classNames[`justifyContent${justifyContent}`],
    classNames[`alignItems${alignItems}`],
    classNames[`flexWrap${wrap}`],
    displayInline && classNames.flexBoxDisplayInline,
    fitContainer && classNames.fitContainer,
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
