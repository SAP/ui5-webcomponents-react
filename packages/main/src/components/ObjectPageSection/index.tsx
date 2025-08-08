'use client';

import type TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import { useStylesheet, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ReactNode, FocusEventHandler, KeyboardEventHandler, FocusEvent, Ref } from 'react';
import { Children, isValidElement, forwardRef, useMemo } from 'react';
import { ObjectPageMode } from '../../enums/ObjectPageMode.js';
import type { CommonProps } from '../../types/index.js';
import type { TabDomRef } from '../../webComponents/Tab/index.js';
import { useObjectPageContext } from '../ObjectPage/context.js';
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
  // the ref is applied in the ObjectPage
  /**
   * This ref will be attached to the underlying `ui5-tab` DOM element,
   * allowing direct access to its instance methods and properties (e.g. `getDomRefInStrip`).
   */
  tabRef?: Ref<TabDomRef>;
}

function recursiveSetTabIndexOnSubSection(el: HTMLElement | null, currentTarget: HTMLElement): void {
  if (!el || el === currentTarget) {
    return;
  }

  if (el.dataset.componentName === 'ObjectPageSubSection') {
    el.tabIndex = 0;
    return;
  }
  return recursiveSetTabIndexOnSubSection(el.parentElement, currentTarget);
}

/**
 * If section has subsections, the first subsection should be next in the tab-chain.
 *
 * @returns `true` if handled, `false` if not
 */
function setTabIndexForFirstSubSectionIfFocused(
  e: FocusEvent<HTMLElement>,
  rootElement: HTMLElement,
  hasSubSection: boolean,
): boolean {
  if (e.target === rootElement && hasSubSection) {
    const opSubSection: HTMLElement = rootElement.querySelector('[data-component-name="ObjectPageSubSection"]');
    if (opSubSection) {
      opSubSection.tabIndex = 0;
    }
    return true;
  }
  return false;
}

/**
 * If the target is an interactive element inside a subsection, the subsection should be the next element in the tab-chain.
 *
 * @returns `true` if handled, `false` if not
 */
function setTabIndexRecursivelyOnSubSections(e: FocusEvent<HTMLElement>, hasSubSection: boolean): boolean {
  if (hasSubSection) {
    recursiveSetTabIndexOnSubSection(e.target, e.currentTarget);
    return true;
  }
  return false;
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

  const { tabRef: _0, ...propsWithoutOmitted } = rest;

  useStylesheet(styleData, ObjectPageSection.displayName);
  const [componentRef, sectionRef] = useSyncRef(ref);
  const htmlId = `ObjectPageSection-${id}`;
  const titleClasses = clsx(classNames.title, titleTextUppercase && classNames.uppercase);
  const hasSubSection = useMemo(
    () =>
      Children.toArray(children).some(
        // @ts-expect-error: if type is string, then it's not a subcomponent
        (child) => isValidElement(child) && child.type?.displayName === 'ObjectPageSubSection',
      ),
    [children],
  );
  const objectPageMode = useObjectPageContext();

  const handleFocusDefault = (e: FocusEvent<HTMLElement>) => {
    if (typeof props.onFocus === 'function') {
      props.onFocus(e);
    }
    // reset tab-index of all sections, so only the focused one is tabbable
    Array.from(e.currentTarget.parentElement.children as HTMLCollectionOf<HTMLElement>).forEach((el) => {
      if (el.dataset.componentName === 'ObjectPageSection') {
        el.tabIndex = -1;
      }
    });

    e.currentTarget.tabIndex = 0;
    if (setTabIndexForFirstSubSectionIfFocused(e, e.currentTarget, hasSubSection)) {
      // if section has subsections, the first subsection should be next in the tab-chain
    } else if (e.target.dataset.componentName === 'ObjectPageSubSection') {
      // if the target is a subsection, the section should be the previous element in the tab-chain
      e.target.tabIndex = 0;
    } else if (setTabIndexRecursivelyOnSubSections(e, hasSubSection)) {
      // If the target is an interactive element inside a subsection, the subsection should be the next element in the tab-chain.
    }
  };

  const handleFocusIconTabBar = (e: FocusEvent<HTMLElement>) => {
    if (typeof props.onFocus === 'function') {
      props.onFocus(e);
    }
    // reference is not updated in time
    requestAnimationFrame(() => {
      const hasSubSectionDOM = !!sectionRef.current?.querySelector('[data-component-name="ObjectPageSubSection"]');
      if (setTabIndexForFirstSubSectionIfFocused(e, sectionRef.current, hasSubSectionDOM)) {
        // if section has subsections, the first subsection should be next in the tab-chain
      } else if (setTabIndexRecursivelyOnSubSections(e, hasSubSectionDOM)) {
        // If the target is an interactive element inside a subsection, the subsection should be the next element in the tab-chain.
      }
    });
  };

  const handleBlur: FocusEventHandler<HTMLElement> = (e) => {
    if (typeof props.onBlur === 'function') {
      props.onBlur(e);
    }

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
      target === e.target &&
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
          setTimeout(() => {
            target.parentElement.parentElement.scrollBy(0, 14);
          });
        }
      });
    }
    if (
      target === e.target &&
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
      ref={componentRef}
      role="region"
      className={clsx(classNames.section, wrapTitleText && classNames.wrap, className)}
      style={style}
      tabIndex={objectPageMode === ObjectPageMode.Default ? -1 : 0}
      {...propsWithoutOmitted}
      id={htmlId}
      data-component-name="ObjectPageSection"
      onFocus={objectPageMode === ObjectPageMode.Default ? handleFocusDefault : handleFocusIconTabBar}
      onBlur={objectPageMode === ObjectPageMode.Default ? handleBlur : props.onBlur}
      onKeyDown={objectPageMode === ObjectPageMode.Default ? handleKeyDown : props.onKeyDown}
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
