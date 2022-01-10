import { isIE } from '@ui5/webcomponents-react-base/dist/Device';
import { useResponsiveContentPadding, useSyncRef } from '@ui5/webcomponents-react-base/dist/hooks';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { debounce, enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';
import { FlexBox } from '@ui5/webcomponents-react/dist/FlexBox';
import { GlobalStyleClasses } from '@ui5/webcomponents-react/dist/GlobalStyleClasses';
import { PageBackgroundDesign } from '@ui5/webcomponents-react/dist/PageBackgroundDesign';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import clsx from 'clsx';
import React, { cloneElement, forwardRef, ReactElement, ReactNode, Ref, useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useDeprecationNoticeForTooltip } from '../../internal/useDeprecationNotiveForTooltip';
import { useObserveHeights } from '../../internal/useObserveHeights';
import { DynamicPageAnchorBar } from '../DynamicPageAnchorBar';
import { styles } from './DynamicPage.jss';

export interface DynamicPagePropTypes extends Omit<CommonProps, 'title'> {
  /**
   * Determines the background color of DynamicPage.
   */
  backgroundDesign?: PageBackgroundDesign | keyof typeof PageBackgroundDesign;
  /**
   * Determines whether the `headerContent` is shown.
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
   * Defines the the upper, always static, title section of the `DynamicPage`.
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
  };
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
    tooltip,
    style,
    backgroundDesign,
    showHideHeaderButton,
    headerContentPinnable,
    alwaysShowContentHeader,
    children,
    className,
    footer,
    a11yConfig,
    ...rest
  } = props;
  const { onScroll: _1, ...propsWithoutOmitted } = rest;
  useDeprecationNoticeForTooltip('DynamicPage', props.tooltip);

  const anchorBarRef = useRef<HTMLDivElement>();
  const [componentRef, dynamicPageRef] = useSyncRef<HTMLDivElement>(ref);
  const contentRef = useRef<HTMLDivElement>();
  // @ts-ignore
  const [componentRefTopHeader, topHeaderRef] = useSyncRef(headerTitle?.ref);
  // @ts-ignore
  const [componentRefHeaderContent, headerContentRef] = useSyncRef(headerContent?.ref);

  const [headerState, setHeaderState] = useState<HEADER_STATES>(
    alwaysShowContentHeader ? HEADER_STATES.VISIBLE_PINNED : isIE() ? HEADER_STATES.VISIBLE : HEADER_STATES.AUTO
  );

  const classes = useStyles();
  const dynamicPageClasses = clsx(
    classes.dynamicPage,
    GlobalStyleClasses.sapScrollBar,
    classes[`background${backgroundDesign}`],
    className,
    [HEADER_STATES.HIDDEN, HEADER_STATES.HIDDEN_PINNED].includes(headerState) && classes.headerCollapsed
  );

  // observe heights of header parts
  const { topHeaderHeight, headerContentHeight } = useObserveHeights(
    dynamicPageRef,
    topHeaderRef,
    headerContentRef,
    anchorBarRef,
    { noHeader: false }
  );
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      debounce(([element]) => {
        setIsOverflowing(!element.isIntersecting);
      }, 250),
      {
        root: dynamicPageRef.current,
        threshold: 0.98,
        rootMargin: '0px 0px -60px 0px' // negative bottom margin for footer height
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const oneTimeScrollHandler = () => {
      if (!isIE()) {
        setHeaderState(HEADER_STATES.AUTO);
      }
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

  const onHoverToggleButton = (e) => {
    // TODO background color should be sapObjectHeader_Hover_Background (same color as sapTile_Active_Background)
    topHeaderRef.current.style.backgroundColor =
      e?.type === 'mouseover' ? ThemingParameters.sapTile_Active_Background : null;
  };

  const onToggleHeaderContent = (e) => {
    onToggleHeaderContentVisibility(enrichEventWithDetails(e, { visible: !headerContentHeight }));
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
    } else if (!isIE()) {
      setHeaderState(HEADER_STATES.AUTO);
    }
  }, [alwaysShowContentHeader, setHeaderState]);

  const anchorBarClasses = clsx(classes.anchorBar, isIE() && classes.iEClass);
  const responsivePaddingClass = useResponsiveContentPadding(dynamicPageRef.current);

  const onDynamicPageScroll = (e) => {
    if (typeof props?.onScroll === 'function') {
      props.onScroll(e);
    }
    if (headerState === HEADER_STATES.HIDDEN_PINNED && e.target.scrollTop === 0) {
      setHeaderState(HEADER_STATES.VISIBLE_PINNED);
    }
  };

  return (
    <div
      ref={componentRef}
      title={tooltip}
      className={dynamicPageClasses}
      style={style}
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
          onToggleHeaderContentVisibility: onToggleHeaderContent
        })}
      {headerContent &&
        cloneElement(headerContent, {
          ref: componentRefHeaderContent,
          className: headerContent.props.className
            ? `${responsivePaddingClass} ${headerContent.props.className}`
            : responsivePaddingClass,
          headerPinned: headerState === HEADER_STATES.VISIBLE_PINNED || headerState === HEADER_STATES.VISIBLE,
          topHeaderHeight
        })}
      <FlexBox
        data-component-name="DynamicPageAnchorBar"
        className={anchorBarClasses}
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
          headerContentVisible={!!headerContentHeight}
          onToggleHeaderContentVisibility={onToggleHeaderContentVisibility}
          setHeaderPinned={handleHeaderPinnedChange}
          headerPinned={headerState === HEADER_STATES.VISIBLE_PINNED || headerState === HEADER_STATES.HIDDEN_PINNED}
          onHoverToggleButton={onHoverToggleButton}
          a11yConfig={a11yConfig}
        />
      </FlexBox>
      {isIE() && (
        <div
          className={classes.iEBackgroundElement}
          style={{
            height: `${headerContentHeight + topHeaderHeight}px`,
            width: `calc(100% - ${
              dynamicPageRef?.current?.clientHeight < dynamicPageRef?.current?.scrollHeight ? '18px' : '0px'
            })`
          }}
        />
      )}
      <div
        ref={contentRef}
        data-component-name="DynamicPageContent"
        className={`${classes.contentContainer} ${responsivePaddingClass}`}
        style={{
          marginTop: isIE() ? `${headerContentHeight + topHeaderHeight + 34}px` : 0,
          paddingBottom: footer ? '1rem' : 0
        }}
      >
        {children}
      </div>
      {footer && (
        <footer
          className={classes.footer}
          style={{ position: isOverflowing ? 'sticky' : 'absolute' }}
          data-component-name="DynamicPageFooter"
        >
          {footer}
        </footer>
      )}
    </div>
  );
});

DynamicPage.displayName = 'DynamicPage';

DynamicPage.defaultProps = {
  backgroundDesign: PageBackgroundDesign.Solid,
  showHideHeaderButton: true,
  headerContentPinnable: true,
  alwaysShowContentHeader: false
};

export { DynamicPage };
