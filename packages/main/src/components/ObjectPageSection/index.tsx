'use client';

import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React, { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import type { TitleLevel } from '../../enums/index.js';
import type { CommonProps } from '../../interfaces/index.js';
import styles from './ObjectPageSection.jss.js';

export interface ObjectPageSectionPropTypes extends CommonProps {
  /**
   * Defines the ID of the `ObjectPageSection`.<br />
   * __Note:__ The `id` is taken into account when the section selection changes.
   */
  id: string;
  /**
   * Defines the content of the `ObjectPageSection`.
   */
  children: ReactNode | ReactNode[];
  /**
   * Defines the title of the `ObjectPageSection`.
   *
   * @default ''
   */
  titleText?: string;
  /**
   * Defines whether the title is always displayed in uppercase.
   *
   * @default true
   */
  titleTextUppercase?: boolean;
  /**
   * Determines whether to display the Section title or not.
   */
  hideTitleText?: boolean;
  /**
   * Determines the ARIA level of the ObjectPageSection `titleText`. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.
   *
   * __Note:__ Defining a `titleTextLevel` will add aria-level attribute from 1 to 6, instead of changing the ObjectPageSectionBase title HTML tag from H1 to H6.
   * For example: if titleTextLevel is TitleLevel.H1, it will result as aria-level of 1 added to the ObjectPageSection title.
   *
   * @default TitleLevel.H3
   */
  titleTextLevel?: TitleLevel | keyof typeof TitleLevel;
  /**
   * Determines whether the Section title wraps on multiple lines, when the available space is not enough.
   */
  wrapTitleText?: boolean;
  /**
   * Section header content.
   *
   * __Note__: Although this prop accepts all HTML Elements, it is strongly recommended that you only use non-focusable elements to preserve the intended design.
   */
  header?: ReactNode;
}

const useStyles = createUseStyles(styles, { name: 'ObjectPageSection' });
/**
 * Top-level information container of an `ObjectPage`.
 */
const ObjectPageSection = forwardRef<HTMLElement, ObjectPageSectionPropTypes>((props, ref) => {
  const {
    titleText = '',
    id,
    children,
    titleTextUppercase = true,
    className,
    style,
    hideTitleText,
    titleTextLevel = 'H3',
    wrapTitleText,
    header,
    ...rest
  } = props;

  const classes = useStyles();

  const htmlId = `ObjectPageSection-${id}`;

  const titleClasses = clsx(classes.title, titleTextUppercase && classes.uppercase);

  return (
    <section
      ref={ref}
      role="region"
      className={clsx(classes.section, wrapTitleText && classes.wrap, className)}
      style={style}
      {...rest}
      id={htmlId}
      data-component-name="ObjectPageSection"
    >
      {!!header && <div className={classes.headerContainer}>{header}</div>}
      {!hideTitleText && (
        <div
          role="heading"
          aria-level={parseInt(titleTextLevel.slice(1))}
          className={classes.titleContainer}
          data-component-name="ObjectPageSectionTitleText"
        >
          <div className={titleClasses}>{titleText}</div>
        </div>
      )}
      <div className={classes.sectionContent}>
        <div className={classes.sectionContentInner} data-component-name="ObjectPageSectionContent">
          {children}
        </div>
      </div>
    </section>
  );
});

ObjectPageSection.displayName = 'ObjectPageSection';

export { ObjectPageSection };
