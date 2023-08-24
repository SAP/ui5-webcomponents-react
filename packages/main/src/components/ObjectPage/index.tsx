'use client';

import { debounce, enrichEventWithDetails, ThemingParameters, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { ReactElement, ReactNode } from 'react';
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { AvatarSize, GlobalStyleClasses, ObjectPageMode } from '../../enums/index.js';
import type { CommonProps } from '../../interfaces/index.js';
import { addCustomCSSWithScoping } from '../../internal/addCustomCSSWithScoping.js';
import { safeGetChildrenArray } from '../../internal/safeGetChildrenArray.js';
import { useObserveHeights } from '../../internal/useObserveHeights.js';
import type { AvatarPropTypes } from '../../webComponents/index.js';
import { Tab, TabContainer } from '../../webComponents/index.js';
import { DynamicPageCssVariables } from '../DynamicPage/DynamicPage.jss.js';
import { DynamicPageAnchorBar } from '../DynamicPageAnchorBar/index.js';
import type { ObjectPageSectionPropTypes } from '../ObjectPageSection/index.js';
import { CollapsedAvatar } from './CollapsedAvatar.js';
import { styles } from './ObjectPage.jss.js';
import { extractSectionIdFromHtmlId, getSectionById } from './ObjectPageUtils.js';

addCustomCSSWithScoping(
  'ui5-tabcontainer',
  // padding-inline is used here to ensure the same responsive padding behavior as for the rest of the component
  // todo: the additional text span adds 3px to the container - needs to be investigated why
  `
  :host([data-component-name="ObjectPageTabContainer"]) .ui5-tc__header {
    padding: 0;
    padding-inline: var(--_ui5wcr_ObjectPage_tab_bar_inline_padding);
    box-shadow: inset 0 -0.0625rem ${ThemingParameters.sapPageHeader_BorderColor}, 0 0.125rem 0.25rem 0 rgb(0 0 0 / 8%);
  }
  :host([data-component-name="ObjectPageTabContainer"]) [id$="additionalText"] {
    display: none;
  }
  `
);

const TAB_CONTAINER_HEADER_HEIGHT = 48;

export interface ObjectPagePropTypes extends Omit<CommonProps, 'placeholder'> {
  /**
   * Defines the upper, always static, title section of the `ObjectPage`.
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
  /**
   * Fired when the `headerContent` changes its pinned state.
   */
  onPinnedStateChange?: (pinned: boolean) => void;
}

const useStyles = createUseStyles(styles, { name: 'ObjectPage' });

/**
 * A component that allows apps to easily display information related to a business object.
 *
 * The `ObjectPage` is composed of a header (title and content) and block content wrapped in sections and subsections that structure the information.
 */
const ObjectPage = forwardRef<HTMLDivElement, ObjectPagePropTypes>((props, ref) => {
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
    onSelectedSectionChange,
    onToggleHeaderContent,
    onPinnedStateChange,
    ...rest
  } = props;

  const classes = useStyles();

  const firstSectionId = safeGetChildrenArray<ReactElement>(children)[0]?.props?.id;

  const [internalSelectedSectionId, setInternalSelectedSectionId] = useState(selectedSectionId ?? firstSectionId);
  const [selectedSubSectionId, setSelectedSubSectionId] = useState(props.selectedSubSectionId);
  const [headerPinned, setHeaderPinned] = useState(alwaysShowContentHeader);
  const isProgrammaticallyScrolled = useRef(false);

  const [componentRef, objectPageRef] = useSyncRef(ref);
  const topHeaderRef = useRef<HTMLDivElement>(null);
  const scrollEvent = useRef();
  // @ts-expect-error: useSyncRef will create a ref if not present
  const [componentRefHeaderContent, headerContentRef] = useSyncRef(headerContent?.ref);
  const anchorBarRef = useRef<HTMLDivElement>(null);
  const selectionScrollTimeout = useRef(null);
  const [isAfterScroll, setIsAfterScroll] = useState(false);
  const isToggledRef = useRef(false);
  const [headerCollapsedInternal, setHeaderCollapsedInternal] = useState<undefined | boolean>(undefined);
  const [scrolledHeaderExpanded, setScrolledHeaderExpanded] = useState(false);
  const scrollTimeout = useRef(0);
  const [spacerBottomHeight, setSpacerBottomHeight] = useState('0px');

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
      clearTimeout(selectionScrollTimeout.current);
    };
  }, []);

  // observe heights of header parts
  const { topHeaderHeight, headerContentHeight, anchorBarHeight, totalHeaderHeight, headerCollapsed } =
    useObserveHeights(
      objectPageRef,
      topHeaderRef,
      headerContentRef,
      anchorBarRef,
      [headerCollapsedInternal, setHeaderCollapsedInternal],
      {
        noHeader: !headerTitle && !headerContent,
        fixedHeader: headerPinned,
        scrollTimeout
      }
    );

  useEffect(() => {
    if (typeof onToggleHeaderContent === 'function' && isToggledRef.current) {
      onToggleHeaderContent(headerCollapsed !== true);
    }
  }, [headerCollapsed]);

  const avatar = useMemo(() => {
    if (!image) {
      return null;
    }

    if (typeof image === 'string') {
      return (
        <span
          className={classes.headerImage}
          style={{ borderRadius: imageShapeCircle ? '50%' : 0, overflow: 'hidden' }}
        >
          <img src={image} className={classes.image} alt="Company Logo" />
        </span>
      );
    } else {
      return cloneElement(image, {
        size: AvatarSize.L,
        className: clsx(classes.headerImage, image.props?.className)
      } as AvatarPropTypes);
    }
  }, [image, classes.headerImage, classes.image, imageShapeCircle]);

  const prevTopHeaderHeight = useRef(0);
  const scrollToSection = useCallback(
    (sectionId) => {
      if (!sectionId) {
        return;
      }
      if (firstSectionId === sectionId) {
        objectPageRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const childOffset = objectPageRef.current?.querySelector<HTMLElement>(`#ObjectPageSection-${sectionId}`)
          ?.offsetTop;
        if (!isNaN(childOffset)) {
          const safeTopHeaderHeight = topHeaderHeight || prevTopHeaderHeight.current;
          if (topHeaderHeight) {
            prevTopHeaderHeight.current = topHeaderHeight;
          }
          objectPageRef.current?.scrollTo({
            top:
              childOffset -
              safeTopHeaderHeight -
              anchorBarHeight -
              TAB_CONTAINER_HEADER_HEIGHT /*tabBar*/ -
              (headerPinned ? (headerCollapsed === true ? 0 : headerContentHeight) : 0),
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
      headerCollapsed,
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
      const currentIndex = safeGetChildrenArray(children).findIndex((objectPageSection) => {
        return isValidElement(objectPageSection) && objectPageSection.props?.id === currentId;
      });
      fireOnSelectedChangedEvent({}, currentIndex, currentId, sections[0]);
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

  // section was selected by clicking on the tab bar buttons
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
      const currentSubSection = objectPageRef.current?.querySelector<HTMLDivElement>(
        `div[id="ObjectPageSubSection-${selectedSubSectionId}"]`
      );
      const childOffset = currentSubSection?.offsetTop;
      if (!isNaN(childOffset)) {
        currentSubSection.focus({ preventScroll: true });
        objectPageRef.current?.scrollTo({
          top:
            childOffset -
            topHeaderHeight -
            anchorBarHeight -
            TAB_CONTAINER_HEADER_HEIGHT /*tabBar*/ -
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
    if (alwaysShowContentHeader !== undefined) {
      setHeaderPinned(alwaysShowContentHeader);
    }
    if (alwaysShowContentHeader) {
      onToggleHeaderContentVisibility({ detail: { visible: true } });
    }
  }, [alwaysShowContentHeader]);

  const prevHeaderPinned = useRef(headerPinned);
  useEffect(() => {
    if (prevHeaderPinned.current && !headerPinned && objectPageRef.current.scrollTop > topHeaderHeight) {
      onToggleHeaderContentVisibility({ detail: { visible: false } });
      prevHeaderPinned.current = false;
    }
    if (!prevHeaderPinned.current && headerPinned) {
      prevHeaderPinned.current = true;
    }
  }, [headerPinned, topHeaderHeight]);

  useEffect(() => {
    setSelectedSubSectionId(props.selectedSubSectionId);
    if (props.selectedSubSectionId) {
      isProgrammaticallyScrolled.current = true;
      if (mode === ObjectPageMode.IconTabBar) {
        let sectionId;
        safeGetChildrenArray<ReactElement<ObjectPageSectionPropTypes>>(children).forEach((section) => {
          if (isValidElement(section) && section.props && section.props.children) {
            safeGetChildrenArray(section.props.children).forEach((subSection) => {
              if (
                isValidElement(subSection) &&
                subSection.props &&
                subSection.props.id === props.selectedSubSectionId
              ) {
                sectionId = section.props?.id;
              }
            });
          }
        });
        if (sectionId) {
          setInternalSelectedSectionId(sectionId);
        }
      }
    }
  }, [props.selectedSubSectionId, setInternalSelectedSectionId, setSelectedSubSectionId, children, mode]);

  useEffect(() => {
    const objectPage = objectPageRef.current;

    const sections = objectPage.querySelectorAll<HTMLDivElement>('[id^="ObjectPageSection"]');
    const section = sections[sections.length - 1];

    const observer = new ResizeObserver(([sectionElement]) => {
      let heightDiff = 0;
      if (objectPage.scrollHeight === objectPage.offsetHeight) {
        heightDiff = Math.max(
          objectPage.getBoundingClientRect().bottom - sectionElement.target.getBoundingClientRect().bottom,
          0
        );
      }
      const subSections = section.querySelectorAll<HTMLDivElement>('[id^="ObjectPageSubSection"]');
      const lastSubSection = subSections[subSections.length - 1];
      if (lastSubSection) {
        heightDiff +=
          objectPage.getBoundingClientRect().height -
          topHeaderHeight -
          TAB_CONTAINER_HEADER_HEIGHT /*tabBar*/ -
          (!headerCollapsed ? headerContentHeight : 0) -
          lastSubSection.getBoundingClientRect().height -
          32;
      }
      // heightDiff - footer - tabbar
      setSpacerBottomHeight(
        footer ? `calc(${heightDiff}px - 1rem - ${TAB_CONTAINER_HEADER_HEIGHT}px)` : `${heightDiff}px`
      );
    });

    if (objectPage && section) {
      observer.observe(section, { box: 'border-box' });
    }

    return () => {
      observer.disconnect();
    };
  }, [footer, headerCollapsed, topHeaderHeight, headerContentHeight]);

  const onToggleHeaderContentVisibility = useCallback((e) => {
    isToggledRef.current = true;
    scrollTimeout.current = performance.now() + 500;
    if (!e.detail.visible) {
      setHeaderCollapsedInternal(true);
      objectPageRef.current?.classList.add(classes.headerCollapsed);
    } else {
      setHeaderCollapsedInternal(false);
      setScrolledHeaderExpanded(true);
      objectPageRef.current?.classList.remove(classes.headerCollapsed);
    }
  }, []);

  const handleOnSubSectionSelected = useCallback(
    (e) => {
      isProgrammaticallyScrolled.current = true;
      if (mode === ObjectPageMode.IconTabBar) {
        const sectionId = e.detail.sectionId;
        setInternalSelectedSectionId(sectionId);

        const sections = objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]');
        const currentIndex = safeGetChildrenArray(children).findIndex((objectPageSection) => {
          return isValidElement(objectPageSection) && objectPageSection.props?.id === sectionId;
        });
        debouncedOnSectionChange(e, currentIndex, sectionId, sections[currentIndex]);
      }
      const subSectionId = e.detail.subSectionId;
      setSelectedSubSectionId(subSectionId);
    },
    [mode, setInternalSelectedSectionId, setSelectedSubSectionId, isProgrammaticallyScrolled, children]
  );

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
    const marginBottom = objectPageHeight - totalHeaderHeight - /*TabContainer*/ TAB_CONTAINER_HEADER_HEIGHT;
    const rootMargin = `-${totalHeaderHeight}px 0px -${marginBottom < 0 ? 0 : marginBottom}px 0px`;
    const observer = new IntersectionObserver(
      ([section]) => {
        if (section.isIntersecting && isProgrammaticallyScrolled.current === false) {
          if (
            objectPageRef.current.getBoundingClientRect().top + totalHeaderHeight + TAB_CONTAINER_HEADER_HEIGHT <=
            section.target.getBoundingClientRect().bottom
          ) {
            const currentId = extractSectionIdFromHtmlId(section.target.id);
            setInternalSelectedSectionId(currentId);
            const currentIndex = safeGetChildrenArray(children).findIndex((objectPageSection) => {
              return isValidElement(objectPageSection) && objectPageSection.props?.id === currentId;
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

    sections.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [children, totalHeaderHeight, setInternalSelectedSectionId, isProgrammaticallyScrolled]);

  // Fallback when scrolling faster than the IntersectionObserver can observe (in most cases faster than 60fps)
  useEffect(() => {
    const sections = objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]');
    if (isAfterScroll) {
      let currentSection = sections[sections.length - 1];
      let currentIndex;
      for (let i = 0; i <= sections.length - 1; i++) {
        const section = sections[i];
        if (
          objectPageRef.current.getBoundingClientRect().top + totalHeaderHeight + TAB_CONTAINER_HEADER_HEIGHT <=
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
  }, [isAfterScroll]);

  const titleHeaderNotClickable =
    (alwaysShowContentHeader && !headerContentPinnable) ||
    !headerContent ||
    (!showHideHeaderButton && !headerContentPinnable);

  const onTitleClick = useCallback(
    (e) => {
      e.stopPropagation();
      if (!titleHeaderNotClickable) {
        onToggleHeaderContentVisibility(enrichEventWithDetails(e, { visible: headerCollapsed }));
      }
    },
    [onToggleHeaderContentVisibility, headerCollapsed, titleHeaderNotClickable]
  );

  const snappedHeaderInObjPage = headerTitle && headerTitle.props.snappedContent && headerCollapsed === true && !!image;

  const renderTitleSection = useCallback(
    (inHeader = false) => {
      const titleInHeaderClass = inHeader ? classes.titleInHeader : undefined;

      if (headerTitle?.props && headerTitle.props?.showSubHeaderRight === undefined) {
        return cloneElement(headerTitle, {
          showSubHeaderRight: true,
          className: clsx(titleInHeaderClass, headerTitle?.props?.className),
          'data-not-clickable': titleHeaderNotClickable,
          onToggleHeaderContentVisibility: onTitleClick,
          'data-header-content-visible': headerContent && headerCollapsed !== true,
          'data-is-snapped-rendered-outside': snappedHeaderInObjPage
        });
      }
      return cloneElement(headerTitle, {
        className: clsx(titleInHeaderClass, headerTitle?.props?.className),
        'data-not-clickable': titleHeaderNotClickable,
        onToggleHeaderContentVisibility: onTitleClick,
        'data-header-content-visible': headerContent && headerCollapsed !== true,
        'data-is-snapped-rendered-outside': snappedHeaderInObjPage
      });
    },
    [headerTitle, titleHeaderNotClickable, onTitleClick, headerCollapsed, snappedHeaderInObjPage, !!headerContent]
  );

  const isInitial = useRef(true);
  useEffect(() => {
    if (isInitial.current) {
      scrollTimeout.current = performance.now() + 200;
    } else {
      isInitial.current = false;
    }
  }, [snappedHeaderInObjPage]);

  const renderHeaderContentSection = useCallback(() => {
    if (headerContent?.props) {
      return cloneElement(headerContent, {
        ...headerContent.props,
        topHeaderHeight,
        style: headerCollapsed === true ? { position: 'absolute', visibility: 'hidden' } : headerContent.props.style,
        headerPinned: headerPinned || scrolledHeaderExpanded,
        ref: componentRefHeaderContent,
        children: (
          <div className={classes.headerContainer} data-component-name="ObjectPageHeaderContainer">
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
    renderTitleSection
  ]);

  const onTabItemSelect = (event) => {
    event.preventDefault();
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
      if (scrollTimeout.current >= performance.now()) {
        return;
      }
      scrollEvent.current = e;
      if (typeof props.onScroll === 'function') {
        props.onScroll(e);
      }
      if (selectedSubSectionId) {
        setSelectedSubSectionId(undefined);
      }
      if (selectionScrollTimeout.current) {
        clearTimeout(selectionScrollTimeout.current);
      }
      selectionScrollTimeout.current = setTimeout(() => {
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
        if (!headerPinned) {
          setHeaderCollapsedInternal(true);
        }
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
  if (headerCollapsed === true && headerContent) {
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
        role={a11yConfig?.objectPageTopHeader?.role}
        data-not-clickable={titleHeaderNotClickable}
        aria-roledescription={a11yConfig?.objectPageTopHeader?.ariaRoledescription ?? 'Object Page header'}
        className={classes.header}
        onClick={onTitleClick}
        style={{
          gridAutoColumns: `min-content ${
            headerTitle && image && headerCollapsed === true ? `calc(100% - 3rem - 1rem)` : '100%'
          }`,
          display: !showTitleInHeaderContent || headerCollapsed === true ? 'grid' : 'none'
        }}
      >
        {headerTitle && image && headerCollapsed === true && (
          <CollapsedAvatar image={image} imageShapeCircle={imageShapeCircle} />
        )}
        {headerTitle && renderTitleSection()}
        {snappedHeaderInObjPage && (
          <div style={{ gridColumn: '1 / span 2' }} data-component-name="ATwithImageSnappedContentContainer">
            {headerTitle.props.snappedContent}
          </div>
        )}
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
                ? `${topHeaderHeight + (headerCollapsed === true ? 0 : headerContentHeight)}px`
                : `${topHeaderHeight + 5}px`
          }}
        >
          <DynamicPageAnchorBar
            headerContentVisible={headerContent && headerCollapsed !== true}
            headerContentPinnable={headerContentPinnable}
            showHideHeaderButton={showHideHeaderButton}
            headerPinned={headerPinned}
            a11yConfig={a11yConfig}
            onToggleHeaderContentVisibility={onToggleHeaderContentVisibility}
            setHeaderPinned={setHeaderPinned}
            onHoverToggleButton={onHoverToggleButton}
            onPinnedStateChange={onPinnedStateChange}
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
                ? `${topHeaderHeight + (headerCollapsed === true ? 0 : headerContentHeight)}px`
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
            {safeGetChildrenArray(children).map((section, index) => {
              if (!isValidElement(section) || !section.props) return null;
              const subTabs = safeGetChildrenArray(section.props.children).filter(
                (subSection) =>
                  // @ts-expect-error: if the `ObjectPageSubSection` component is passed as children, the `displayName` is available. Otherwise, the default children should be rendered w/o additional logic.
                  isValidElement(subSection) && subSection?.type?.displayName === 'ObjectPageSubSection'
              );
              return (
                <Tab
                  key={`Anchor-${section.props?.id}`}
                  data-index={index}
                  data-section-id={section.props.id}
                  text={section.props.titleText}
                  selected={internalSelectedSectionId === section.props?.id || undefined}
                  subTabs={subTabs.map((item) => {
                    if (!isValidElement(item)) {
                      return null;
                    }
                    return (
                      <Tab
                        data-parent-id={section.props.id}
                        key={item.props.id}
                        data-is-sub-tab
                        data-section-id={item.props.id}
                        text={item.props.titleText}
                        selected={item.props.id === selectedSubSectionId || undefined}
                      >
                        {/*ToDo: workaround for nested tab selection*/}
                        <span style={{ display: 'none' }} />
                      </Tab>
                    );
                  })}
                >
                  {/*ToDo: workaround for nested tab selection*/}
                  <span style={{ display: 'none' }} />
                </Tab>
              );
            })}
          </TabContainer>
        </div>
      )}
      <div data-component-name="ObjectPageContent" className={classes.content}>
        <div style={{ height: headerCollapsed ? `${headerContentHeight}px` : 0 }} aria-hidden="true" />
        {placeholder
          ? placeholder
          : mode === ObjectPageMode.IconTabBar
          ? getSectionById(children, internalSelectedSectionId)
          : children}
        <div style={{ height: spacerBottomHeight }} aria-hidden="true" />
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
  showHideHeaderButton: false
};

export { ObjectPage };
