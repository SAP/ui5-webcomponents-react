'use client';

import type TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import { useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ReactNode, FocusEventHandler, KeyboardEventHandler } from 'react';
import { Children, isValidElement, forwardRef } from 'react';
import type { CommonProps } from '../../types/index.js';
import { navigateSections } from '../ObjectPage/ObjectPageUtils.js';
import { classNames, styleData } from './ObjectPageSection.module.css.js';

export interface ObjectPageSectionPropTypes extends CommonProps {
  /**
   * Defines the ID of the `ObjectPageSection`.
   *
   * __Note:__ The `id` is taken into account when the section selection changes.
   */
  id: string;
  /**
   * Defines the content of the `ObjectPageSection`.
   *
   * __Note:__ Only use subsections if more than one is available. Otherwise, add the content of the section directly as `child`.
   */
  children: ReactNode | ReactNode[];
  /**
   * Defines the title of the `ObjectPageSection`.
   *
   */
  titleText: string;
  /**
   * Defines whether the title is always displayed in uppercase.
   *
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

/**
 * Top-level information container of an `ObjectPage`.
 */
const ObjectPageSection = forwardRef<HTMLElement, ObjectPageSectionPropTypes>((props, ref) => {
  const {
    titleText,
    id,
    children,
    titleTextUppercase,
    className,
    style,
    hideTitleText,
    titleTextLevel = 'H3',
    wrapTitleText,
    header,
    ...rest
  } = props;
  useStylesheet(styleData, ObjectPageSection.displayName);
  const htmlId = `ObjectPageSection-${id}`;
  const titleClasses = clsx(classNames.title, titleTextUppercase && classNames.uppercase);

  const handleFocus: FocusEventHandler<HTMLElement> = (e) => {
    if (typeof props.onFocus === 'function') {
      props.onFocus(e);
    }
    const hasSubSection = Children.toArray(children).some(
      // @ts-expect-error: if type is string, then it's not a subcomponent
      (child) => isValidElement(child) && child.type?.displayName === 'ObjectPageSubSection',
    );
    if (hasSubSection && e.target === e.currentTarget) {
      const opSubSection: HTMLElement = e.currentTarget.querySelector('[data-component-name="ObjectPageSubSection"]');
      if (opSubSection) {
        opSubSection.tabIndex = 0;
      }
    }
  };

  const handleBlur: FocusEventHandler<HTMLElement> = (e) => {
    if (typeof props.onBlur === 'function') {
      props.onBlur(e);
    }
    const hasSubSection = Children.toArray(children).some(
      // @ts-expect-error: if type is string, then it's not a subcomponent
      (child) => isValidElement(child) && child.type?.displayName === 'ObjectPageSubSection',
    );
    if (hasSubSection && e.target === e.currentTarget) {
      const allSubSections: NodeListOf<HTMLElement> = e.currentTarget.querySelectorAll(
        '[data-component-name="ObjectPageSubSection"]',
      );
      allSubSections.forEach((subSection) => {
        subSection.tabIndex = -1;
      });
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    navigateSections({ e, onKeyDown: props.onKeyDown, componentName: 'ObjectPageSection' });
    const target = e.currentTarget as HTMLElement;
    if (
      (e.key === 'ArrowDown' || e.key === 'ArrowRight') &&
      (target.nextElementSibling as HTMLElement).dataset.componentName === 'ObjectPageSection'
    ) {
      e.preventDefault();
      // scroll 12px so section is noticed as selected
      requestAnimationFrame(() => {
        target.parentElement.parentElement.scrollBy(0, 12);
        const isFirstSection =
          (target.previousElementSibling as HTMLElement).dataset.componentName !== 'ObjectPageSection';
        // header collapse leads to loose scrolling - this fallback makes sure the second section is marked as selected
        if (isFirstSection) {
          target.parentElement.parentElement.scrollBy(0, 14);
        }
      });
    }
    if (
      (e.key === 'ArrowUp' || e.key === 'ArrowLeft') &&
      (target.previousElementSibling as HTMLElement).dataset.componentName === 'ObjectPageSection'
    ) {
      e.preventDefault();
      // scroll 12px so section is noticed as selected
      requestAnimationFrame(() => {
        target.parentElement.parentElement.scrollBy(0, 12);
      });
    }
  };

  return (
    <section
      ref={ref}
      role="region"
      className={clsx(classNames.section, wrapTitleText && classNames.wrap, className)}
      style={style}
      tabIndex={-1}
      {...rest}
      id={htmlId}
      data-component-name="ObjectPageSection"
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      {!!header && <div className={classNames.headerContainer}>{header}</div>}
      {!hideTitleText && (
        <div
          role="heading"
          aria-level={parseInt(titleTextLevel.slice(1))}
          className={classNames.titleContainer}
          data-component-name="ObjectPageSectionTitleText"
        >
          <div className={titleClasses}>{titleText}</div>
        </div>
      )}
      <div className={classNames.sectionContent}>
        <div className={classNames.sectionContentInner} data-component-name="ObjectPageSectionContent">
          {children}
        </div>
      </div>
    </section>
  );
});

ObjectPageSection.displayName = 'ObjectPageSection';

export { ObjectPageSection };
