import {
  debounce,
  enrichEventWithDetails,
  ThemingParameters,
  useResponsiveContentPadding,
  useSyncRef
} from '@ui5/webcomponents-react-base';
import clsx from 'clsx';
import React, { cloneElement, forwardRef, ReactElement, ReactNode, Ref, useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { GlobalStyleClasses, PageBackgroundDesign } from '../../enums';
import { CommonProps } from '../../interfaces';
import { useObserveHeights } from '../../internal/useObserveHeights';
import { DynamicPageAnchorBar } from '../DynamicPageAnchorBar';
import { FlexBox } from '../FlexBox';
import { DynamicPageCssVariables, styles } from './DynamicPage.jss';

export interface DynamicPagePropTypes extends Omit<CommonProps, 'title'> {
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
   */
  children?: ReactNode | ReactNode[];
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
const DynamicPage = forwardRef((props: DynamicPagePropTypes, ref: Ref<HTMLDivElement>) => {
  const {
    headerTitle,
    headerContent,
    style,
    backgroundDesign,
    showHideHeaderButton,
    headerContentPinnable,
    alwaysShowContentHeader,
    children,
    className,
    footer,
    a11yConfig,
    onToggleHeaderContent,
    ...rest
  } = props;
  const { onScroll: _1, ...propsWithoutOmitted } = rest;

  const anchorBarRef = useRef<HTMLDivElement>();
  const [componentRef, dynamicPageRef] = useSyncRef<HTMLDivElement>(ref);
  const contentRef = useRef<HTMLDivElement>();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [componentRefTopHeader, topHeaderRef] = useSyncRef(headerTitle?.ref);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [componentRefHeaderContent, headerContentRef] = useSyncRef(headerContent?.ref);

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
      fixedHeader: headerState === HEADER_STATES.VISIBLE_PINNED || headerState === HEADER_STATES.HIDDEN_PINNED
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
    const debouncedObserverFn = debounce(([element]) => {
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
    const oneTimeScrollHandler = () => {
      setHeaderState(HEADER_STATES.AUTO);
      setHeaderCollapsedInternal(true);
    };
    if (headerState === HEADER_STATES.VISIBLE || headerState === HEADER_STATES.HIDDEN) {
      dynamicPageRef.current?.addEventListener('scroll', oneTimeScrollHandler, { once: true });
    }
    return () => {
      dynamicPageRef.current?.removeEventListener('scroll', oneTimeScrollHandler);
    };
  }, [dynamicPageRef, headerState]);

  const onToggleHeaderContentVisibility = (e) => {
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
    if (alwaysShowContentHeader) {
      setHeaderState(HEADER_STATES.VISIBLE_PINNED);
    }
  }, [alwaysShowContentHeader, setHeaderState]);

  const responsivePaddingClass = useResponsiveContentPadding(dynamicPageRef.current);

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
    dynamicPageStyles[DynamicPageCssVariables.titleFontSize] = ThemingParameters.sapObjectHeader_Title_SnappedFontSize;
  }

  useEffect(() => {
    if (typeof onToggleHeaderContent === 'function' && isToggledRef.current) {
      onToggleHeaderContent(headerCollapsed !== true);
    }
  }, [headerCollapsed]);

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
          className: headerTitle?.props?.className
            ? `${responsivePaddingClass} ${headerTitle.props.className}`
            : responsivePaddingClass,
          onToggleHeaderContentVisibility: onToggleHeaderContentInternal
        })}
      {headerContent &&
        cloneElement(headerContent, {
          ref: componentRefHeaderContent,
          style: headerCollapsed === true ? { position: 'absolute', visibility: 'hidden' } : headerContent.props.style,
          className: headerContent.props.className
            ? `${responsivePaddingClass} ${headerContent.props.className}`
            : responsivePaddingClass,
          headerPinned: headerState === HEADER_STATES.VISIBLE_PINNED || headerState === HEADER_STATES.VISIBLE,
          topHeaderHeight
        })}
      <FlexBox
        data-component-name="DynamicPageAnchorBarContainer"
        className={classes.anchorBar}
        ref={anchorBarRef}
        style={{
          top:
            headerState === HEADER_STATES.VISIBLE_PINNED || headerState === HEADER_STATES.VISIBLE
              ? (headerContentRef?.current?.offsetHeight ?? 0) + topHeaderHeight
              : topHeaderHeight
        }}
      >
        <DynamicPageAnchorBar
          headerContentPinnable={headerContentPinnable}
          showHideHeaderButton={showHideHeaderButton}
          headerContentVisible={headerContent && headerCollapsed !== true}
          onToggleHeaderContentVisibility={onToggleHeaderContentVisibility}
          setHeaderPinned={handleHeaderPinnedChange}
          headerPinned={headerState === HEADER_STATES.VISIBLE_PINNED || headerState === HEADER_STATES.HIDDEN_PINNED}
          onHoverToggleButton={onHoverToggleButton}
          a11yConfig={a11yConfig}
        />
      </FlexBox>
      <div
        ref={contentRef}
        data-component-name="DynamicPageContent"
        className={`${classes.contentContainer} ${responsivePaddingClass}`}
        style={{
          paddingBottom: footer ? '1rem' : 0
        }}
      >
        {children}
      </div>
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
