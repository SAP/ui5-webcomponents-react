'use client';

import type TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import { useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React, { forwardRef } from 'react';
import { FlexBoxAlignItems, FlexBoxDirection, FlexBoxJustifyContent } from '../../enums/index.js';
import type { CommonProps } from '../../types/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { classNames, styleData } from './ObjectPageSubSection.module.css.js';

export interface ObjectPageSubSectionPropTypes extends CommonProps {
  /**
   * Defines the ID of the `ObjectPageSubSection`.
   */
  id: string;
  /**
   * Defines the content of the `ObjectPageSubSection`.
   */
  children: ReactNode | ReactNode[];
  /**
   * Defines the title of the `ObjectPageSubSection`.
   */
  titleText?: string;
  /**
   * Actions available for this subsection.
   *
   * __Note:__ Keep in mind that the components set in the actions prop do NOT have overflow behavior. If the available space is not enough, the components will be displayed on more lines.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use simple input components like `Button` or `Switch` to preserve the intended design.
   */
  actions?: ReactNode | ReactNode[];
  /**
   * Determines whether to display the SubSection `titleText` or not.
   */
  hideTitleText?: boolean;
  /**
   * Determines the ARIA level of the ObjectPageSubSection `titleText`. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.
   *
   * __Note:__ Defining a `titleTextLevel` will add aria-level attribute from 1 to 6, instead of changing the ObjectPageSectionBase title HTML tag from H1 to H6.
   * For example: if titleTextLevel is TitleLevel.H1, it will result as aria-level of 1 added to the ObjectPageSection title.
   *
   * @default TittleLevel.H4
   */
  titleTextLevel?: TitleLevel | keyof typeof TitleLevel;
  /**
   * Defines whether the title is always displayed in uppercase.
   */
  titleTextUppercase?: boolean;
}

/**
 * Second-level information container of an `ObjectPage`.<br />
 * __Note:__ This component should only be used inside an `ObjectPageSection` component.
 */
const ObjectPageSubSection = forwardRef<HTMLDivElement, ObjectPageSubSectionPropTypes>((props, ref) => {
  const {
    children,
    id,
    titleText,
    className,
    style,
    actions,
    hideTitleText,
    titleTextLevel = 'H4',
    titleTextUppercase,
    ...rest
  } = props;
  const htmlId = `ObjectPageSubSection-${id}`;

  useStylesheet(styleData, ObjectPageSubSection.displayName);

  const subSectionClassName = clsx(classNames.objectPageSubSection, className);

  return (
    <div
      ref={ref}
      role="region"
      style={style}
      tabIndex={-1}
      {...rest}
      className={subSectionClassName}
      id={htmlId}
      data-component-name="ObjectPageSubSection"
    >
      <FlexBox
        direction={FlexBoxDirection.Row}
        justifyContent={FlexBoxJustifyContent.SpaceBetween}
        alignItems={FlexBoxAlignItems.Center}
        className={classNames.headerContainer}
        data-component-name="ObjectPageSubSectionHeaderContainer"
      >
        {!hideTitleText ? (
          <div
            role="heading"
            aria-level={parseInt(titleTextLevel.slice(1))}
            className={clsx(classNames.subSectionTitle, titleTextUppercase && classNames.uppercase)}
            data-component-name="ObjectPageSubSectionTitleText"
          >
            {titleText}
          </div>
        ) : (
          <span aria-hidden="true" className={classNames.spacer} />
        )}
        {actions && actions}
      </FlexBox>
      <div className={classNames.subSectionContent} data-component-name="ObjectPageSubSectionContent">
        {children}
      </div>
    </div>
  );
});

ObjectPageSubSection.displayName = 'ObjectPageSubSection';

export { ObjectPageSubSection };
