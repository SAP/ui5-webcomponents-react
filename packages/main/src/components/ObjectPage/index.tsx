import {
  debounce,
  enrichEventWithDetails,
  ThemingParameters,
  useIsRTL,
  useResponsiveContentPadding,
  useSyncRef
} from '@ui5/webcomponents-react-base';
import clsx from 'clsx';
import React, {
  forwardRef,
  ReactElement,
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { AvatarSize } from '../../enums/AvatarSize';
import { GlobalStyleClasses } from '../../enums/GlobalStyleClasses';
import { ObjectPageMode } from '../../enums/ObjectPageMode';
import { CommonProps } from '../../interfaces/CommonProps';
import { addCustomCSSWithScoping } from '../../internal/addCustomCSSWithScoping';
import { safeGetChildrenArray } from '../../internal/safeGetChildrenArray';
import { useObserveHeights } from '../../internal/useObserveHeights';
import { AvatarPropTypes } from '../../webComponents/Avatar';
import { Tab } from '../../webComponents/Tab';
import { TabContainer } from '../../webComponents/TabContainer';
import { DynamicPageCssVariables } from '../DynamicPage/DynamicPage.jss';
import { DynamicPageAnchorBar } from '../DynamicPageAnchorBar';
import { ObjectPageSectionPropTypes } from '../ObjectPageSection';
import { ObjectPageSubSectionPropTypes } from '../ObjectPageSubSection';
import { CollapsedAvatar } from './CollapsedAvatar';
import { ObjectPageCssVariables, styles } from './ObjectPage.jss';
import { extractSectionIdFromHtmlId, getLastObjectPageSection, getSectionById } from './ObjectPageUtils';

addCustomCSSWithScoping(
  'ui5-tabcontainer',
  `
  :host([data-component-name="ObjectPageTabContainer"]) .ui5-tc__header {
    box-shadow: inset 0 -0.0625rem ${ThemingParameters.sapPageHeader_BorderColor}, 0 0.125rem 0.25rem 0 rgb(0 0 0 / 8%);
  }
  `
);

export interface ObjectPagePropTypes extends Omit<CommonProps, 'placeholder'> {
  /**
   * Defines the the upper, always static, title section of the `ObjectPage`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageTitle` in order to preserve the intended design.
   * __Note:__ If not defined otherwise the prop `showSubHeaderRight` of the `DynamicPageTitle` is set to `true` by default.
   */
  headerTitle?: ReactElement;
  /**
   * Defines the dynamic header section of the `ObjectPage`.
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
   * Defines the image of the `ObjectPage`. You can pass a path to an image or an `Avatar` component.
   */
  image?: string | ReactElement;
  /**
   * Defines the content area of the `ObjectPage`. It consists of sections and subsections.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `ObjectPageSection` and `ObjectPageSubSection` in order to preserve the intended design.
   */
  children?: ReactElement<ObjectPageSectionPropTypes> | ReactElement<ObjectPageSectionPropTypes>[];
  /**
   * Defines the ID of the currently `ObjectPageSection` section.
   */
  selectedSectionId?: string;
  /**
   * Defines the ID of the currently `ObjectPageSubSection` section.
   */
  selectedSubSectionId?: string;
  /**
   * Defines where modals are rendered into via `React.createPortal`.
   *
   * Defaults to: `document.body`
   */
  portalContainer?: Element;
  /**
   * Fired when the selected section changes.
   */
  onSelectedSectionChange?: (
    event: CustomEvent<{ selectedSectionIndex: number; selectedSectionId: string; section: HTMLDivElement }>
  ) => void;
  /**
   * Fired when the `headerContent` is expanded or collapsed.
   */
  onToggleHeaderContent?: (visible: boolean) => void;

  // appearance
  /**
   * Defines whether the `headerContent` is hidden by scrolling down.
   */
  alwaysShowContentHeader?: boolean;
  /**
   * Defines whether the title is displayed in the content section of the header or above the image.
   */
  showTitleInHeaderContent?: boolean;
  /**
   * Defines whether the image should be displayed in a circle or in a square.<br />
   * __Note:__ If the `image` is not a `string`, this prop has no effect.
   */
  imageShapeCircle?: boolean;
  /**
   * Defines the `ObjectPage` mode.
   *
   * - "Default": All `ObjectPageSections` and `ObjectPageSubSections` are displayed on one page. Selecting tabs will scroll to the corresponding section.
   * - "IconTabBar": All `ObjectPageSections` are displayed on separate pages. Selecting tabs will lead to the corresponding page.
   */
  mode?: ObjectPageMode | keyof typeof ObjectPageMode;
  /**
   * Defines whether the pin button of the header is displayed.
   */
  showHideHeaderButton?: boolean;
  /**
   * Defines whether the `headerContent` is pinnable.
   */
  headerContentPinnable?: boolean;
  /**
   * Defines internally used a11y properties.
   */
  a11yConfig?: {
    objectPageTopHeader?: {
      role?: string;
      ariaRoledescription?: string;
    };
    dynamicPageAnchorBar?: {
      role?: string;
    };
  };
  /**
   * If set, only the specified placeholder will be displayed as content of the `ObjectPage`, no sections or sub-sections will be rendered.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use placeholder components like the `IllustratedMessage` or custom skeletons pages in order to preserve the intended design.
   */
  placeholder?: ReactNode;
}

const useStyles = createUseStyles(styles, { name: 'ObjectPage' });

/**
 * A component that allows apps to easily display information related to a business object.<br />
 * The `ObjectPage` is composed of a header (title and content) and block content wrapped in sections and subsections that structure the information.
 */
const ObjectPage = forwardRef((props: ObjectPagePropTypes, ref: RefObject<HTMLDivElement>) => {
  const {
    headerTitle,
    image,
    footer,
    mode,
    imageShapeCircle,
    className,
    style,
    slot,
    showHideHeaderButton,
    children,
    selectedSectionId,
    alwaysShowContentHeader,
    showTitleInHeaderContent,
    headerContent,
    headerContentPinnable,
    a11yConfig,
    placeholder,
    portalContainer,
    onSelectedSectionChange,
    onToggleHeaderContent,
    ...rest
  } = props;

  const classes = useStyles();

  const firstSectionId = safeGetChildrenArray<ReactElement>(children)[0]?.props?.id;

  const [internalSelectedSectionId, setInternalSelectedSectionId] = useState(selectedSectionId ?? firstSectionId);
  const [selectedSubSectionId, setSelectedSubSectionId] = useState(props.selectedSubSectionId);
  const [headerPinned, setHeaderPinned] = useState(alwaysShowContentHeader);
  const isProgrammaticallyScrolled = useRef(false);

  const [componentRef, objectPageRef] = useSyncRef(ref);
  const topHeaderRef: RefObject<HTMLDivElement> = useRef();
  const scrollEvent = useRef();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const [componentRefHeaderContent, headerContentRef] = useSyncRef(headerContent?.ref);
  const anchorBarRef: RefObject<HTMLDivElement> = useRef();
  const scrollTimeout = useRef(null);
  const [isAfterScroll, setIsAfterScroll] = useState(false);
  const isToggledRef = useRef(false);

  const prevInternalSelectedSectionId = useRef(internalSelectedSectionId);
  const fireOnSelectedChangedEvent = (targetEvent, index, id, section) => {
    if (typeof onSelectedSectionChange === 'function' && prevInternalSelectedSectionId.current !== id) {
      onSelectedSectionChange(
        enrichEventWithDetails(targetEvent, {
          selectedSectionIndex: parseInt(index, 10),
          selectedSectionId: id,
          section
        })
      );
      prevInternalSelectedSectionId.current = id;
    }
  };
  const debouncedOnSectionChange = useRef(debounce(fireOnSelectedChangedEvent, 500)).current;

  useEffect(() => {
    return () => {
      debouncedOnSectionChange.cancel();
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  const isRTL = useIsRTL(objectPageRef);
  const responsivePaddingClass = useResponsiveContentPadding(objectPageRef.current);

  // observe heights of header parts
  const { topHeaderHeight, headerContentHeight, anchorBarHeight, totalHeaderHeight } = useObserveHeights(
    objectPageRef,
    topHeaderRef,
    headerContentRef,
    anchorBarRef,
    { noHeader: !headerTitle && !headerContent }
  );

  useEffect(() => {
    if (typeof onToggleHeaderContent === 'function' && isToggledRef.current) {
      onToggleHeaderContent(!!headerContentHeight);
    }
  }, [!!headerContentHeight]);

  const avatar = useMemo(() => {
    if (!image) {
      return null;
    }
    const headerImageClasses = clsx(classes.headerImage, isRTL && classes.headerImageRtl);

    if (typeof image === 'string') {
      return (
        <span className={headerImageClasses} style={{ borderRadius: imageShapeCircle ? '50%' : 0, overflow: 'hidden' }}>
          <img src={image} className={classes.image} alt="Company Logo" />
        </span>
      );
    } else {
      return React.cloneElement(image, {
        size: AvatarSize.L,
        className: clsx(headerImageClasses, image.props?.className)
      } as AvatarPropTypes);
    }
  }, [image, classes.headerImage, classes.headerImageRtl, classes.image, imageShapeCircle, isRTL]);

  const prevTopHeaderHeight = useRef(0);
  const scrollToSection = useCallback(
    (sectionId) => {
      if (!sectionId) {
        return;
      }
      if (firstSectionId === sectionId) {
        objectPageRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const childOffset = objectPageRef.current?.querySelector<HTMLElement>(
          `#ObjectPageSection-${sectionId}`
        )?.offsetTop;
        if (!isNaN(childOffset)) {
          const safeTopHeaderHeight = topHeaderHeight || prevTopHeaderHeight.current;
          if (topHeaderHeight) {
            prevTopHeaderHeight.current = topHeaderHeight;
          }
          objectPageRef.current?.scrollTo({
            top: childOffset - safeTopHeaderHeight - anchorBarHeight - (headerPinned ? headerContentHeight : 0),
            behavior: 'smooth'
          });
        }
      }
      isProgrammaticallyScrolled.current = false;
    },
    [
      firstSectionId,
      objectPageRef,
      topHeaderHeight,
      anchorBarHeight,
      headerPinned,
      headerContentHeight,
      prevTopHeaderHeight.current
    ]
  );

  const programmaticallySetSection = () => {
    const currentId = selectedSectionId ?? firstSectionId;
    if (currentId !== prevSelectedSectionId.current) {
      debouncedOnSectionChange.cancel();
      isProgrammaticallyScrolled.current = true;
      setInternalSelectedSectionId(currentId);
      prevSelectedSectionId.current = currentId;
      const sections = objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]');
      const currentIndex = safeGetChildrenArray(children).findIndex((objectPageSection: ReactElement) => {
        return objectPageSection.props?.id === currentId;
      });
      fireOnSelectedChangedEvent({} as any, currentIndex, currentId, sections[0]);
    }
  };

  // change selected section when prop is changed (external change)
  const prevSelectedSectionId = useRef();
  const [timeStamp, setTimeStamp] = useState(0);
  const requestAnimationFrameRef = useRef<undefined | number>();
  useEffect(() => {
    if (selectedSectionId) {
      if (mode === ObjectPageMode.Default) {
        // wait for DOM draw, otherwise initial scroll won't work as intended
        if (timeStamp < 750 && timeStamp !== undefined) {
          requestAnimationFrameRef.current = requestAnimationFrame((internalTimestamp) => {
            setTimeStamp(internalTimestamp);
          });
        } else {
          setTimeStamp(undefined);
          programmaticallySetSection();
        }
      } else {
        programmaticallySetSection();
      }
    }
    return () => {
      cancelAnimationFrame(requestAnimationFrameRef.current);
    };
  }, [timeStamp, selectedSectionId, firstSectionId, debouncedOnSectionChange]);

  // section was selected by clicking on the anchor bar buttons
  const handleOnSectionSelected = useCallback(
    (targetEvent, newSelectionSectionId, index, section) => {
      isProgrammaticallyScrolled.current = true;
      debouncedOnSectionChange.cancel();
      setInternalSelectedSectionId((oldSelectedSection) => {
        if (oldSelectedSection === newSelectionSectionId) {
          scrollToSection(newSelectionSectionId);
        }
        return newSelectionSectionId;
      });
      scrollEvent.current = targetEvent;
      fireOnSelectedChangedEvent(targetEvent, index, newSelectionSectionId, section);
    },
    [onSelectedSectionChange, setInternalSelectedSectionId, isProgrammaticallyScrolled, scrollToSection]
  );

  // do internal scrolling
  useEffect(() => {
    if (mode === ObjectPageMode.Default && isProgrammaticallyScrolled.current === true && !selectedSubSectionId) {
      scrollToSection(internalSelectedSectionId);
    }
  }, [internalSelectedSectionId, mode, isProgrammaticallyScrolled, scrollToSection, selectedSubSectionId]);

  // Scrolling for Sub Section Selection
  useEffect(() => {
    if (selectedSubSectionId && isProgrammaticallyScrolled.current === true) {
      const currentSubSection = objectPageRef.current?.querySelector<HTMLElement>(
        `div[id="ObjectPageSubSection-${selectedSubSectionId}"]`
      );
      const childOffset = currentSubSection?.offsetTop;
      if (!isNaN(childOffset)) {
        currentSubSection.focus();
        objectPageRef.current?.scrollTo({
          top:
            childOffset -
            topHeaderHeight -
            anchorBarHeight -
            48 /*tabBar*/ -
            (headerPinned ? headerContentHeight : 0) -
            16,
          behavior: 'smooth'
        });
      }
      isProgrammaticallyScrolled.current = false;
    }
  }, [
    selectedSubSectionId,
    isProgrammaticallyScrolled.current,
    topHeaderHeight,
    anchorBarHeight,
    headerPinned,
    headerContentHeight
  ]);

  useEffect(() => {
    setHeaderPinned(alwaysShowContentHeader);
  }, [setHeaderPinned, alwaysShowContentHeader]);

  useEffect(() => {
    setSelectedSubSectionId(props.selectedSubSectionId);
    if (props.selectedSubSectionId) {
      isProgrammaticallyScrolled.current = true;
      if (mode === ObjectPageMode.IconTabBar) {
        let sectionId;
        safeGetChildrenArray<ReactElement<ObjectPageSectionPropTypes>>(children).forEach((section) => {
          if (React.isValidElement(section) && section.props && section.props.children) {
            safeGetChildrenArray(section.props.children).forEach(
              (subSection: ReactElement<ObjectPageSubSectionPropTypes>) => {
                if (
                  React.isValidElement(subSection) &&
                  subSection.props &&
                  subSection.props.id === props.selectedSubSectionId
                ) {
                  sectionId = section.props?.id;
                }
              }
            );
          }
        });
        if (sectionId) {
          setInternalSelectedSectionId(sectionId);
        }
      }
    }
  }, [props.selectedSubSectionId, setInternalSelectedSectionId, setSelectedSubSectionId, children, mode]);

  useEffect(() => {
    const fillerDivObserver = new ResizeObserver(() => {
      let heightDiff = 0;
      const maxHeight = Math.min(objectPageRef.current?.clientHeight, window.innerHeight);
      const availableScrollHeight = maxHeight - totalHeaderHeight;
      const lastSectionDomRef = getLastObjectPageSection(objectPageRef, !!footer && mode === ObjectPageMode.IconTabBar);

      if (lastSectionDomRef) {
        const subSections = lastSectionDomRef.querySelectorAll('[id^="ObjectPageSubSection"]');
        let lastSubSectionHeight;
        if (subSections.length > 0) {
          lastSubSectionHeight = (subSections[subSections.length - 1] as HTMLElement).offsetHeight;
        } else {
          lastSubSectionHeight =
            lastSectionDomRef.offsetHeight -
            lastSectionDomRef.querySelector<HTMLElement>("[role='heading']").offsetHeight;
        }

        heightDiff = Math.max(0, availableScrollHeight - lastSubSectionHeight);

        if (isNaN(heightDiff)) {
          heightDiff = 0;
        }
      }
      const lastSectionMargin = footer ? `calc(${heightDiff}px + 1rem)` : `${heightDiff}px`;
      objectPageRef.current?.style.setProperty(ObjectPageCssVariables.lastSectionMargin, lastSectionMargin);
    });

    fillerDivObserver.observe(objectPageRef.current);

    return () => {
      fillerDivObserver.disconnect();
    };
  }, [totalHeaderHeight, objectPageRef, children, mode, footer]);

  const handleOnSubSectionSelected = useCallback(
    (e) => {
      isProgrammaticallyScrolled.current = true;
      if (mode === ObjectPageMode.IconTabBar) {
        const sectionId = e.detail.sectionId;
        setInternalSelectedSectionId(sectionId);

        const sections = objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]');
        const currentIndex = safeGetChildrenArray(children).findIndex((objectPageSection: ReactElement) => {
          return objectPageSection.props?.id === sectionId;
        });
        debouncedOnSectionChange(e, currentIndex, sectionId, sections[currentIndex]);
      }
      const subSectionId = e.detail.subSectionId;
      setSelectedSubSectionId(subSectionId);
    },
    [mode, setInternalSelectedSectionId, setSelectedSubSectionId, isProgrammaticallyScrolled, children]
  );
  const [scrolledHeaderExpanded, setScrolledHeaderExpanded] = useState(false);
  const scrollTimout = useRef(0);
  const onToggleHeaderContentVisibility = useCallback((e) => {
    isToggledRef.current = true;
    scrollTimout.current = performance.now() + 500;
    if (!e.detail.visible) {
      objectPageRef.current?.classList.add(classes.headerCollapsed);
    } else {
      setScrolledHeaderExpanded(true);
      objectPageRef.current?.classList.remove(classes.headerCollapsed);
    }
  }, []);

  const objectPageClasses = clsx(
    classes.objectPage,
    GlobalStyleClasses.sapScrollBar,
    className,
    mode === ObjectPageMode.IconTabBar && classes.iconTabBarMode
  );

  const { onScroll: _0, selectedSubSectionId: _1, ...propsWithoutOmitted } = rest;

  useEffect(() => {
    const sections = objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]');
    const objectPageHeight = objectPageRef.current?.clientHeight ?? 1000;
    const marginBottom = objectPageHeight - totalHeaderHeight - /*TabContainer*/ 48;
    const rootMargin = `-${totalHeaderHeight}px 0px -${marginBottom < 0 ? 0 : marginBottom}px 0px`;
    const observer = new IntersectionObserver(
      ([section]) => {
        if (section.isIntersecting && isProgrammaticallyScrolled.current === false) {
          if (
            objectPageRef.current.getBoundingClientRect().top + totalHeaderHeight + 48 <=
            section.target.getBoundingClientRect().bottom
          ) {
            const currentId = extractSectionIdFromHtmlId(section.target.id);
            setInternalSelectedSectionId(currentId);
            const currentIndex = safeGetChildrenArray(children).findIndex((objectPageSection: ReactElement) => {
              return objectPageSection.props?.id === currentId;
            });
            debouncedOnSectionChange(scrollEvent.current, currentIndex, currentId, section.target);
          }
        }
      },
      {
        root: objectPageRef.current,
        rootMargin,
        threshold: [0]
      }
    );
    // Fallback when scrolling faster than the IntersectionObserver can observe (in most cases faster than 60fps)
    if (isAfterScroll) {
      let currentSection = sections[sections.length - 1];
      let currentIndex;
      for (let i = 0; i <= sections.length - 1; i++) {
        const section = sections[i];
        if (
          objectPageRef.current.getBoundingClientRect().top + totalHeaderHeight + 48 <=
          section.getBoundingClientRect().bottom
        ) {
          currentSection = section;
          currentIndex = i;
          break;
        }
      }
      const currentSectionId = extractSectionIdFromHtmlId(currentSection?.id);
      if (currentSectionId !== internalSelectedSectionId) {
        setInternalSelectedSectionId(currentSectionId);
        debouncedOnSectionChange(
          scrollEvent.current,
          currentIndex ?? sections.length - 1,
          currentSectionId,
          currentSection
        );
      }
      setIsAfterScroll(false);
    }

    sections.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [
    objectPageRef.current,
    children,
    totalHeaderHeight,
    setInternalSelectedSectionId,
    isProgrammaticallyScrolled,
    isAfterScroll
  ]);

  const titleHeaderNotClickable =
    (alwaysShowContentHeader && !headerContentPinnable) ||
    !headerContent ||
    (!showHideHeaderButton && !headerContentPinnable);

  const onTitleClick = useCallback(
    (e) => {
      if (!titleHeaderNotClickable) {
        onToggleHeaderContentVisibility(enrichEventWithDetails(e, { visible: !headerContentHeight }));
      }
    },
    [onToggleHeaderContentVisibility, headerContentHeight, titleHeaderNotClickable]
  );

  const renderTitleSection = useCallback(
    (inHeader = false) => {
      const titleStyles = { ...(inHeader ? { padding: 0 } : {}), ...(headerTitle?.props?.style ?? {}) };

      if (headerTitle?.props && headerTitle.props?.showSubHeaderRight === undefined) {
        return React.cloneElement(headerTitle, {
          showSubHeaderRight: true,
          style: titleStyles,
          'data-not-clickable': titleHeaderNotClickable,
          onToggleHeaderContentVisibility: onTitleClick
        });
      }
      return React.cloneElement(headerTitle, {
        style: titleStyles,
        'data-not-clickable': titleHeaderNotClickable,
        onToggleHeaderContentVisibility: onTitleClick
      });
    },
    [headerTitle, titleHeaderNotClickable, onTitleClick]
  );

  const renderHeaderContentSection = useCallback(() => {
    if (headerContent?.props) {
      return React.cloneElement(headerContent, {
        ...headerContent.props,
        topHeaderHeight,
        headerPinned: headerPinned || scrolledHeaderExpanded,
        ref: componentRefHeaderContent,
        children: (
          <div
            className={`${classes.headerContainer} ${responsivePaddingClass}`}
            data-component-name="ObjectPageHeaderContainer"
          >
            {avatar}
            {headerContent.props.children && (
              <div data-component-name="ObjectPageHeaderContent">
                {headerTitle && showTitleInHeaderContent && renderTitleSection(true)}
                {headerContent.props.children}
              </div>
            )}
          </div>
        )
      });
    }
  }, [
    headerContent,
    topHeaderHeight,
    headerPinned,
    scrolledHeaderExpanded,
    showTitleInHeaderContent,
    avatar,
    headerContentRef,
    renderTitleSection,
    responsivePaddingClass
  ]);

  const paddingLeftRtl = isRTL ? 'paddingLeft' : 'paddingRight';

  const onTabItemSelect = (event) => {
    const { sectionId, index, isSubTab, parentId } = event.detail.tab.dataset;
    if (isSubTab) {
      handleOnSubSectionSelected(enrichEventWithDetails(event, { sectionId: parentId, subSectionId: sectionId }));
    } else {
      const section = safeGetChildrenArray<ReactElement>(children).find((el) => {
        return el.props.id == sectionId;
      });
      handleOnSectionSelected(event, section?.props?.id, index, section);
    }
  };
  const prevScrollTop = useRef();
  const onObjectPageScroll = useCallback(
    (e) => {
      if (!isToggledRef.current) {
        isToggledRef.current = true;
      }
      if (scrollTimout.current >= performance.now()) {
        return;
      }
      scrollEvent.current = e;
      if (typeof props.onScroll === 'function') {
        props.onScroll(e);
      }
      if (selectedSubSectionId) {
        setSelectedSubSectionId(undefined);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        setIsAfterScroll(true);
      }, 100);
      if (!headerPinned || e.target.scrollTop === 0) {
        objectPageRef.current?.classList.remove(classes.headerCollapsed);
      }
      if (scrolledHeaderExpanded && e.target.scrollTop !== prevScrollTop.current) {
        if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
          return;
        }
        prevScrollTop.current = e.target.scrollTop;
        setScrolledHeaderExpanded(false);
      }
    },
    [topHeaderHeight, headerPinned, props.onScroll, scrolledHeaderExpanded, selectedSubSectionId]
  );

  const onHoverToggleButton = useCallback(
    (e) => {
      if (e?.type === 'mouseover') {
        topHeaderRef.current?.classList.add(classes.headerHoverStyles);
      } else {
        topHeaderRef.current?.classList.remove(classes.headerHoverStyles);
      }
    },
    [classes.headerHoverStyles]
  );

  const objectPageStyles = { ...style };
  if (headerContentHeight === 0 && headerContent) {
    objectPageStyles[DynamicPageCssVariables.titleFontSize] = ThemingParameters.sapObjectHeader_Title_SnappedFontSize;
  }

  return (
    <div
      data-component-name="ObjectPage"
      slot={slot}
      className={objectPageClasses}
      style={objectPageStyles}
      ref={componentRef}
      onScroll={onObjectPageScroll}
      {...propsWithoutOmitted}
    >
      <header
        onMouseOver={onHoverToggleButton}
        onMouseLeave={onHoverToggleButton}
        data-component-name="ObjectPageTopHeader"
        ref={topHeaderRef}
        role={a11yConfig?.objectPageTopHeader?.role ?? 'banner'}
        data-not-clickable={titleHeaderNotClickable}
        aria-roledescription={a11yConfig?.objectPageTopHeader?.ariaRoledescription ?? 'Object Page header'}
        className={`${classes.header} ${responsivePaddingClass}`}
        onClick={onTitleClick}
        style={{
          gridAutoColumns: `min-content ${
            headerTitle && image && headerContentHeight === 0 ? `calc(100% - 3rem - 1rem)` : '100%'
          }`,
          display: !showTitleInHeaderContent || headerContentHeight === 0 ? 'grid' : 'none'
        }}
      >
        {headerTitle && image && headerContentHeight === 0 && (
          <CollapsedAvatar image={image} imageShapeCircle={imageShapeCircle} style={{ [paddingLeftRtl]: '1rem' }} />
        )}
        {headerTitle && renderTitleSection()}
      </header>
      {renderHeaderContentSection()}
      {headerContent && headerTitle && (
        <div
          data-component-name="ObjectPageAnchorBar"
          ref={anchorBarRef}
          className={classes.anchorBar}
          style={{
            top:
              scrolledHeaderExpanded || headerPinned
                ? `${topHeaderHeight + headerContentHeight}px`
                : `${topHeaderHeight + 5}px`
          }}
        >
          <DynamicPageAnchorBar
            headerContentVisible={!!headerContentHeight}
            headerContentPinnable={headerContentPinnable}
            showHideHeaderButton={showHideHeaderButton}
            onToggleHeaderContentVisibility={onToggleHeaderContentVisibility}
            setHeaderPinned={setHeaderPinned}
            headerPinned={headerPinned}
            onHoverToggleButton={onHoverToggleButton}
            a11yConfig={a11yConfig}
          />
        </div>
      )}
      {!placeholder && (
        <div
          className={classes.tabContainer}
          data-component-name="ObjectPageTabContainer"
          style={{
            top:
              headerPinned || scrolledHeaderExpanded
                ? `${topHeaderHeight + headerContentHeight}px`
                : `${topHeaderHeight}px`
          }}
        >
          <TabContainer
            collapsed
            fixed
            onTabSelect={onTabItemSelect}
            data-component-name="ObjectPageTabContainer"
            className={classes.tabContainerComponent}
          >
            {safeGetChildrenArray(children).map((section: ReactElement, index) => {
              if (!section.props) return null;
              const subTabs = safeGetChildrenArray<any>(section.props.children).filter(
                (subSection) => subSection?.type?.displayName === 'ObjectPageSubSection'
              );
              return (
                <Tab
                  key={`Anchor-${section.props?.id}`}
                  data-index={index}
                  data-section-id={section.props.id}
                  text={section.props.titleText}
                  selected={internalSelectedSectionId === section.props?.id || undefined}
                  subTabs={subTabs.map((item) => {
                    return (
                      <Tab
                        data-parent-id={section.props.id}
                        key={item.props.id}
                        data-is-sub-tab
                        data-section-id={item.props.id}
                        text={item.props.titleText}
                        // todo enable selected with `selectedSubSectionId`
                        // selected={false}
                      >
                        noop
                      </Tab>
                    );
                  })}
                >
                  {/*ToDo: remove this line when ui5-wc supports empty tabs*/}
                  noop
                </Tab>
              );
            })}
          </TabContainer>
        </div>
      )}
      <div data-component-name="ObjectPageContent" className={responsivePaddingClass}>
        {placeholder
          ? placeholder
          : mode === ObjectPageMode.IconTabBar
          ? getSectionById(children, internalSelectedSectionId)
          : children}
      </div>
      {footer && <div style={{ height: '1rem' }} data-component-name="ObjectPageFooterSpacer" />}
      {footer && (
        <footer className={classes.footer} data-component-name="ObjectPageFooter">
          {footer}
        </footer>
      )}
    </div>
  );
});

ObjectPage.displayName = 'ObjectPage';

ObjectPage.defaultProps = {
  image: null,
  mode: ObjectPageMode.Default,
  imageShapeCircle: false,
  showHideHeaderButton: false,
  portalContainer: document.body
};

export { ObjectPage };
