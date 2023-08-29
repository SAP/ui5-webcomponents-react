'use client';

import { debounce, enrichEventWithDetails, ThemingParameters, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ReactElement, ReactNode } from 'react';
import React, { cloneElement, forwardRef, useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { GlobalStyleClasses, PageBackgroundDesign } from '../../enums/index.js';
import type { CommonProps } from '../../interfaces/index.js';
import { useObserveHeights } from '../../internal/useObserveHeights.js';
import { DynamicPageAnchorBar } from '../DynamicPageAnchorBar/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { DynamicPageCssVariables, styles } from './DynamicPage.jss.js';

export interface DynamicPagePropTypes extends Omit<CommonProps, 'title' | 'children'> {
  /**
   * Determines the background color of DynamicPage.
   */
  backgroundDesign?: PageBackgroundDesign | keyof typeof PageBackgroundDesign;
  /**
   * Defines whether the `headerContent` can be hidden by scrolling down.
   */
  alwaysShowContentHeader?: boolean;
  /**
   * Determines whether the expand/collapse `headerContent` button is shown.
   */
  showHideHeaderButton?: boolean;
  /**
   * Determines whether the pin button is shown.
   */
  headerContentPinnable?: boolean;
  /**
   * Defines the upper, always static, title section of the `DynamicPage`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageTitle` in order to preserve the intended design.
   */
  hideDynamicPageContent?: boolean;
  /**
   * Determines whether the DynamicPageContent is shown.
   */
  headerTitle?: ReactElement;
  /**
   * Defines the dynamic header section of the `DynamicPage`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageHeader` in order to preserve the intended design.
   */
  headerContent?: ReactElement;
  /**
   * React element which defines the footer content.
   *
   * __Note:__ To preserve the intended design, please use only non-content based `height` values (`px`, `rem`, `vh`, etc.) as height of the `DynamicPage`.
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Bar` with `design={BarDesign.FloatingFooter}` in order to preserve the intended design.
   */
  footer?: ReactElement;
  /**
   * React element or node array which defines the content.
   *
   * __Note:__ Assigning `children` as function is recommended when implementing sticky sub-headers. You can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/story/layouts-floorplans-dynamicpage--sticky-sub-headers).
   */
  children?: ReactNode | ReactNode[] | ((payload: { stickyHeaderHeight: number }) => ReactElement);
  /**
   * Defines internally used a11y properties.
   */
  a11yConfig?: {
    dynamicPageAnchorBar?: {
      role?: string;
    };
    dynamicPageFooter?: {
      role?: string;
      'aria-label'?: string;
      'aria-labelledby'?: string;
    };
  };
  /**
   * Fired when the `headerContent` is expanded or collapsed.
   */
  onToggleHeaderContent?: (visible: boolean) => void;
  /**
   * Fired when the `headerContent` changes its `pinned` state.
   */
  onPinnedStateChange?: (pinned: boolean) => void;
}

/**
 * Defines the current state of the component.
 */
enum HEADER_STATES {
  AUTO = 'AUTO',
  VISIBLE_PINNED = 'VISIBLE_PINNED',
  HIDDEN_PINNED = 'HIDDEN_PINNED',
  VISIBLE = 'VISIBLE',
  HIDDEN = 'HIDDEN'
}

const useStyles = createUseStyles(styles, { name: 'DynamicPage' });
/**
 * The dynamic page is a generic layout control designed to support various floorplans and use cases.
 * The content of both the header and the page can differ from floorplan to floorplan.
 *
 * The header of the dynamic page is collapsible, which helps users to focus on the actual page content, but still ensures that important header information
 * and actions are readily available.
 */
const DynamicPage = forwardRef<HTMLDivElement, DynamicPagePropTypes>((props, ref) => {
  const {
    headerTitle,
    headerContent,
    style,
    backgroundDesign,
    showHideHeaderButton,
    headerContentPinnable,
    hideDynamicPageContent = false,
    alwaysShowContentHeader,
    children,
    className,
    footer,
    a11yConfig,
    onToggleHeaderContent,
    onPinnedStateChange,
    ...rest
  } = props;
  const { onScroll: _1, ...propsWithoutOmitted } = rest;

  const anchorBarRef = useRef<HTMLDivElement>(null);
  const [componentRef, dynamicPageRef] = useSyncRef<HTMLDivElement>(ref);
  const contentRef = useRef<HTMLDivElement>(null);

  const [componentRefTopHeader, topHeaderRef] = useSyncRef<HTMLDivElement>((headerTitle as any)?.ref);
  const [componentRefHeaderContent, headerContentRef] = useSyncRef<HTMLDivElement>((headerContent as any)?.ref);
  const scrollTimeout = useRef(0);

  const [headerState, setHeaderState] = useState<HEADER_STATES>(
    alwaysShowContentHeader ? HEADER_STATES.VISIBLE_PINNED : HEADER_STATES.AUTO
  );
  const isToggledRef = useRef(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const [headerCollapsedInternal, setHeaderCollapsedInternal] = useState<undefined | boolean>(undefined);
  // observe heights of header parts
  const { topHeaderHeight, headerCollapsed } = useObserveHeights(
    dynamicPageRef,
    topHeaderRef,
    headerContentRef,
    anchorBarRef,
    [headerCollapsedInternal, setHeaderCollapsedInternal],
    {
      noHeader: false,
      fixedHeader: headerState === HEADER_STATES.VISIBLE_PINNED || headerState === HEADER_STATES.HIDDEN_PINNED,
      scrollTimeout
    }
  );

  const classes = useStyles();
  const dynamicPageClasses = clsx(
    classes.dynamicPage,
    GlobalStyleClasses.sapScrollBar,
    classes[`background${backgroundDesign}`],
    className,
    [HEADER_STATES.HIDDEN, HEADER_STATES.HIDDEN_PINNED].includes(headerState) && classes.headerCollapsed
  );

  useEffect(() => {
    const debouncedObserverFn = debounce(([element]: IntersectionObserverEntry[]) => {
      setIsOverflowing(!element.isIntersecting);
    }, 250);
    const observer = new IntersectionObserver(debouncedObserverFn, {
      root: dynamicPageRef.current,
      threshold: 0.98,
      rootMargin: '0px 0px -60px 0px' // negative bottom margin for footer height
    });

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      observer.disconnect();
      debouncedObserverFn.cancel();
    };
  }, []);

  useEffect(() => {
    const dynamicPage = dynamicPageRef.current;
    const oneTimeScrollHandler = () => {
      setHeaderState(HEADER_STATES.AUTO);
      setHeaderCollapsedInternal(true);
    };
    if (headerState === HEADER_STATES.VISIBLE || headerState === HEADER_STATES.HIDDEN) {
      dynamicPage?.addEventListener('scroll', oneTimeScrollHandler, { once: true });
    }
    return () => {
      dynamicPage?.removeEventListener('scroll', oneTimeScrollHandler);
    };
  }, [dynamicPageRef, headerState]);

  const onToggleHeaderContentVisibility = (e) => {
    scrollTimeout.current = performance.now() + 500;
    const shouldHideHeader = !e.detail.visible;
    setHeaderState((oldState) => {
      if (oldState === HEADER_STATES.VISIBLE_PINNED || oldState === HEADER_STATES.HIDDEN_PINNED) {
        return shouldHideHeader ? HEADER_STATES.HIDDEN_PINNED : HEADER_STATES.VISIBLE_PINNED;
      }
      return shouldHideHeader ? HEADER_STATES.HIDDEN : HEADER_STATES.VISIBLE;
    });
  };

  useEffect(() => {
    if (headerState === HEADER_STATES.VISIBLE_PINNED || headerState === HEADER_STATES.VISIBLE) {
      setHeaderCollapsedInternal(false);
    } else if (headerState === HEADER_STATES.HIDDEN_PINNED || headerState === HEADER_STATES.HIDDEN) {
      setHeaderCollapsedInternal(true);
    }
  }, [headerState]);

  const onHoverToggleButton = (e) => {
    if (topHeaderRef.current) {
      topHeaderRef.current.style.backgroundColor =
        e?.type === 'mouseover' ? ThemingParameters.sapObjectHeader_Hover_Background : null;
    }
  };

  const onToggleHeaderContentInternal = (e) => {
    e.stopPropagation();
    if (!isToggledRef.current) {
      isToggledRef.current = true;
    }
    onToggleHeaderContentVisibility(enrichEventWithDetails(e, { visible: headerCollapsed }));
  };

  const handleHeaderPinnedChange = (headerWillPin) => {
    if (headerWillPin) {
      setHeaderState(HEADER_STATES.VISIBLE_PINNED);
    } else {
      setHeaderState(HEADER_STATES.VISIBLE);
    }
  };

  useEffect(() => {
    if (alwaysShowContentHeader !== undefined) {
      if (alwaysShowContentHeader) {
        setHeaderState(HEADER_STATES.VISIBLE_PINNED);
      } else {
        setHeaderState(HEADER_STATES.VISIBLE);
      }
    }
  }, [alwaysShowContentHeader]);

  const onDynamicPageScroll = (e) => {
    if (!isToggledRef.current) {
      isToggledRef.current = true;
    }
    if (typeof props?.onScroll === 'function') {
      props.onScroll(e);
    }
    if (headerState === HEADER_STATES.HIDDEN_PINNED && e.target.scrollTop === 0) {
      setHeaderState(HEADER_STATES.VISIBLE_PINNED);
    }
  };

  const dynamicPageStyles = { ...style };
  if (headerCollapsed === true && headerContent) {
    scrollTimeout.current = performance.now() + 200;
    dynamicPageStyles[DynamicPageCssVariables.titleFontSize] = ThemingParameters.sapObjectHeader_Title_SnappedFontSize;
  }

  useEffect(() => {
    if (typeof onToggleHeaderContent === 'function' && isToggledRef.current) {
      onToggleHeaderContent(headerCollapsed !== true);
    }
  }, [headerCollapsed]);

  const top =
    headerState === HEADER_STATES.VISIBLE_PINNED || headerState === HEADER_STATES.VISIBLE
      ? (headerContentRef?.current?.offsetHeight ?? 0) + topHeaderHeight
      : topHeaderHeight;

  return (
    <div
      ref={componentRef}
      className={dynamicPageClasses}
      style={dynamicPageStyles}
      onScroll={onDynamicPageScroll}
      {...propsWithoutOmitted}
    >
      {headerTitle &&
        cloneElement(headerTitle, {
          'data-not-clickable':
            (alwaysShowContentHeader && !headerContentPinnable) ||
            !headerContent ||
            (!showHideHeaderButton && !headerContentPinnable),
          ref: componentRefTopHeader,
          className: clsx(classes.title, headerTitle?.props?.className),
          onToggleHeaderContentVisibility: onToggleHeaderContentInternal,
          'data-header-content-visible': headerContent && headerCollapsed !== true
        })}
      {headerContent &&
        cloneElement(headerContent, {
          ref: componentRefHeaderContent,
          style: headerCollapsed === true ? { position: 'absolute', visibility: 'hidden' } : headerContent.props.style,
          className: clsx(classes.header, headerContent?.props?.className),
          headerPinned: headerState === HEADER_STATES.VISIBLE_PINNED || headerState === HEADER_STATES.VISIBLE,
          topHeaderHeight
        })}
      <FlexBox
        data-component-name="DynamicPageAnchorBarContainer"
        className={classes.anchorBar}
        ref={anchorBarRef}
        style={{ top }}
      >
        <DynamicPageAnchorBar
          headerContentPinnable={headerContentPinnable}
          showHideHeaderButton={showHideHeaderButton}
          headerContentVisible={headerContent && headerCollapsed !== true}
          headerPinned={headerState === HEADER_STATES.VISIBLE_PINNED || headerState === HEADER_STATES.HIDDEN_PINNED}
          a11yConfig={a11yConfig}
          onHoverToggleButton={onHoverToggleButton}
          onToggleHeaderContentVisibility={onToggleHeaderContentInternal}
          onPinnedStateChange={onPinnedStateChange}
          setHeaderPinned={handleHeaderPinnedChange}
        />
      </FlexBox>
      {!hideDynamicPageContent && <div
        ref={contentRef}
        data-component-name="DynamicPageContent"
        className={classes.contentContainer}
        style={{
          paddingBlockEnd: footer ? '1rem' : 0
        }}
      >
        {typeof children === 'function' ? children({ stickyHeaderHeight: top + 1 /*anchorBar height */ }) : children}
      </div>}
      {footer && (
        <div
          className={classes.footer}
          style={{ position: isOverflowing ? 'sticky' : 'absolute' }}
          data-component-name="DynamicPageFooter"
          role={a11yConfig?.dynamicPageFooter?.role ?? 'contentinfo'}
          aria-label={a11yConfig?.dynamicPageFooter?.['aria-label']}
          aria-labelledby={a11yConfig?.dynamicPageFooter?.['aria-labelledby']}
        >
          {footer}
        </div>
      )}
    </div>
  );
});

DynamicPage.displayName = 'DynamicPage';

DynamicPage.defaultProps = {
  backgroundDesign: PageBackgroundDesign.Solid,
  showHideHeaderButton: true,
  headerContentPinnable: true
};

export { DynamicPage };
