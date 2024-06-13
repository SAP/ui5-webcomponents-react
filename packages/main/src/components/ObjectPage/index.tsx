'use client';

import type { TabContainerTabSelectEventDetail } from '@ui5/webcomponents/dist/TabContainer.js';
import AvatarSize from '@ui5/webcomponents/dist/types/AvatarSize.js';
import {
  debounce,
  deprecationNotice,
  enrichEventWithDetails,
  ThemingParameters,
  useStylesheet,
  useSyncRef
} from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { cloneElement, forwardRef, isValidElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { GlobalStyleClasses, ObjectPageMode } from '../../enums/index.js';
import { addCustomCSSWithScoping } from '../../internal/addCustomCSSWithScoping.js';
import { safeGetChildrenArray } from '../../internal/safeGetChildrenArray.js';
import { useObserveHeights } from '../../internal/useObserveHeights.js';
import type { CommonProps, Ui5CustomEvent } from '../../types/index.js';
import type { AvatarPropTypes, TabContainerDomRef } from '../../webComponents/index.js';
import { Tab, TabContainer } from '../../webComponents/index.js';
import { DynamicPageCssVariables } from '../DynamicPage/utils.js';
import { DynamicPageAnchorBar } from '../DynamicPageAnchorBar/index.js';
import { DynamicPageHeader } from '../DynamicPageHeader/index.js';
import type {
  DynamicPageHeaderPropTypes,
  InternalProps as DynamicPageHeaderPropTypesWithInternals
} from '../DynamicPageHeader/index.js';
import type {
  DynamicPageTitlePropTypes,
  InternalProps as DynamicPageTitlePropTypesWithInternals
} from '../DynamicPageTitle/index.js';
import type { ObjectPageSectionPropTypes } from '../ObjectPageSection/index.js';
import type { ObjectPageSubSectionPropTypes } from '../ObjectPageSubSection/index.js';
import { CollapsedAvatar } from './CollapsedAvatar.js';
import { classNames, styleData } from './ObjectPage.module.css.js';
import { extractSectionIdFromHtmlId, getSectionById } from './ObjectPageUtils.js';

addCustomCSSWithScoping(
  'ui5-tabcontainer',
  // todo: the additional text span adds 3px to the container - needs to be investigated why
  `
  :host([data-component-name="ObjectPageTabContainer"]) [id$="additionalText"] {
    display: none;
  }
  `
);

const TAB_CONTAINER_HEADER_HEIGHT = 48;

type ObjectPageSectionType = ReactElement<ObjectPageSectionPropTypes> | boolean;

interface BeforeNavigateDetail {
  sectionIndex: number;
  sectionId: string;
  subSectionId: string | undefined;
}

type ObjectPageTabSelectEventDetail = TabContainerTabSelectEventDetail & BeforeNavigateDetail;

type DynamicPageTitlePropsWithDataAttributes = DynamicPageTitlePropTypesWithInternals & {
  'data-not-clickable': boolean;
  'data-header-content-visible': boolean;
  'data-is-snapped-rendered-outside': boolean;
};

export interface ObjectPagePropTypes extends Omit<CommonProps, 'placeholder'> {
  /**
   * Defines the upper, always static, title section of the `ObjectPage`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageTitle` in order to preserve the intended design.
   *
   * __Note:__ If not defined otherwise the prop `showSubHeaderRight` of the `DynamicPageTitle` is set to `true` by default.
   *
   * __Note:__ When the `DynamicPageTitle` is rendered inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!
   */
  headerTitle?: ReactElement<DynamicPageTitlePropTypes>;
  /**
   * Defines the dynamic header section of the `ObjectPage`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageHeader` in order to preserve the intended design.
   *
   * __Note:__ When the `DynamicPageHeader` is rendered inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!
   */
  headerContent?: ReactElement<DynamicPageHeaderPropTypes>;
  /**
   * React element which defines the footer content.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Bar` with `design={BarDesign.FloatingFooter}` in order to preserve the intended design.
   */
  footer?: ReactElement;
  /**
   * Defines the image of the `ObjectPage`. You can pass a path to an image or an `Avatar` component.
   */
  image?: string | ReactElement<AvatarPropTypes>;
  /**
   * Defines the content area of the `ObjectPage`. It consists of sections and subsections.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `ObjectPageSection` in order to preserve the intended design.
   */
  children?: ObjectPageSectionType | ObjectPageSectionType[];
  /**
   * Sets the current selected `ObjectPageSection` by `id`.
   *
   * __Note:__ If a valid `selectedSubSectionId` is set, this prop has no effect.
   */
  selectedSectionId?: string;
  /**
   * Sets the current selected `ObjectPageSubSection` by `id`.
   */
  selectedSubSectionId?: string;
  /**
   * Defines whether the `headerContent` is hidden by scrolling down.
   */
  alwaysShowContentHeader?: boolean;
  /**
   * Defines whether the title is displayed in the content section of the header or above the image.
   *
   * @deprecated: This feature will be removed with our next major release.
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
   *
   * @default `"Default"`
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
   * The event is fired before the selected section is changed using the navigation. It can be aborted by the application with `preventDefault()`, which means that there will be no navigation.
   *
   * __Note:__ This event is only fired when navigating via tab-bar.
   */
  onBeforeNavigate?: (event: Ui5CustomEvent<TabContainerDomRef, ObjectPageTabSelectEventDetail>) => void;
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
    mode = ObjectPageMode.Default,
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
    onBeforeNavigate,
    ...rest
  } = props;

  useStylesheet(styleData, ObjectPage.displayName);

  const firstSectionId: string | undefined =
    safeGetChildrenArray<ReactElement<ObjectPageSectionPropTypes>>(children)[0]?.props?.id;

  const [internalSelectedSectionId, setInternalSelectedSectionId] = useState<string | undefined>(
    selectedSectionId ?? firstSectionId
  );
  const [selectedSubSectionId, setSelectedSubSectionId] = useState(props.selectedSubSectionId);
  const [headerPinned, setHeaderPinned] = useState(alwaysShowContentHeader);
  const isProgrammaticallyScrolled = useRef(false);
  const prevSelectedSectionId = useRef<string | undefined>(undefined);

  const [componentRef, objectPageRef] = useSyncRef(ref);
  const topHeaderRef = useRef<HTMLDivElement>(null);
  const scrollEvent = useRef(undefined);
  const prevTopHeaderHeight = useRef(0);
  // @ts-expect-error: useSyncRef will create a ref if not present
  const [componentRefHeaderContent, headerContentRef] = useSyncRef(headerContent?.ref);
  const anchorBarRef = useRef<HTMLDivElement>(null);
  const objectPageContentRef = useRef<HTMLDivElement>(null);
  const selectionScrollTimeout = useRef(null);
  const [isAfterScroll, setIsAfterScroll] = useState(false);
  const isToggledRef = useRef(false);
  const [headerCollapsedInternal, setHeaderCollapsedInternal] = useState<undefined | boolean>(undefined);
  const [scrolledHeaderExpanded, setScrolledHeaderExpanded] = useState(false);
  const scrollTimeout = useRef(0);
  const titleInHeader = headerTitle && showTitleInHeaderContent;
  const [sectionSpacer, setSectionSpacer] = useState(0);
  const [currentTabModeSection, setCurrentTabModeSection] = useState(null);
  const sections = mode === ObjectPageMode.IconTabBar ? currentTabModeSection : children;

  const deprecationNoticeDisplayed = useRef(false);
  useEffect(() => {
    if (showTitleInHeaderContent && !deprecationNoticeDisplayed.current) {
      deprecationNotice(
        'showTitleInHeaderContent',
        'showTitleInHeaderContent is deprecated and will be removed with the next major release.'
      );
      deprecationNoticeDisplayed.current = true;
    }
  }, [showTitleInHeaderContent]);

  useEffect(() => {
    const currentSection =
      mode === ObjectPageMode.IconTabBar ? getSectionById(children, internalSelectedSectionId) : null;
    setCurrentTabModeSection(currentSection);
  }, [mode, children, internalSelectedSectionId]);

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
          className={classNames.headerImage}
          style={{ borderRadius: imageShapeCircle ? '50%' : 0, overflow: 'hidden' }}
        >
          <img src={image} className={classNames.image} alt="Company Logo" />
        </span>
      );
    } else {
      return cloneElement(image, {
        size: AvatarSize.L,
        className: clsx(classNames.headerImage, image.props?.className)
      } as AvatarPropTypes);
    }
  }, [image, classNames.headerImage, classNames.image, imageShapeCircle]);

  const scrollToSectionById = (id?: string, isSubSection = false) => {
    const section = objectPageRef.current?.querySelector<HTMLElement>(
      `#${isSubSection ? 'ObjectPageSubSection' : 'ObjectPageSection'}-${CSS.escape(id)}`
    );
    scrollTimeout.current = performance.now() + 500;
    if (section) {
      const safeTopHeaderHeight = topHeaderHeight || prevTopHeaderHeight.current;
      section.style.scrollMarginBlockStart =
        safeTopHeaderHeight +
        anchorBarHeight +
        TAB_CONTAINER_HEADER_HEIGHT +
        (headerPinned ? headerContentHeight : 0) +
        'px';
      section.focus();
      section.scrollIntoView({ behavior: 'smooth' });
      section.style.scrollMarginBlockStart = '0px';
    }
  };

  const scrollToSection = (sectionId?: string) => {
    if (!sectionId) {
      return;
    }
    if (firstSectionId === sectionId) {
      objectPageRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToSectionById(sectionId);
    }
    isProgrammaticallyScrolled.current = false;
  };

  const programmaticallySetSection = () => {
    const currentId = selectedSectionId ?? firstSectionId;
    if (currentId !== prevSelectedSectionId.current) {
      debouncedOnSectionChange.cancel();
      isProgrammaticallyScrolled.current = true;
      setInternalSelectedSectionId(currentId);
      prevSelectedSectionId.current = currentId;
      const sectionNodes = objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]');
      const currentIndex = safeGetChildrenArray(children).findIndex((objectPageSection) => {
        return (
          isValidElement(objectPageSection) &&
          (objectPageSection as ReactElement<ObjectPageSectionPropTypes>).props?.id === currentId
        );
      });
      fireOnSelectedChangedEvent({}, currentIndex, currentId, sectionNodes[0]);
    }
  };

  // change selected section when prop is changed (external change)
  const [timeStamp, setTimeStamp] = useState(0);
  const requestAnimationFrameRef = useRef<undefined | number>(undefined);
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
  const handleOnSectionSelected = (targetEvent, newSelectionSectionId, index, section) => {
    isProgrammaticallyScrolled.current = true;
    debouncedOnSectionChange.cancel();
    setInternalSelectedSectionId((prevSelectedSection) => {
      if (prevSelectedSection === newSelectionSectionId) {
        scrollToSection(newSelectionSectionId);
      }
      return newSelectionSectionId;
    });
    scrollEvent.current = targetEvent;
    fireOnSelectedChangedEvent(targetEvent, index, newSelectionSectionId, section);
  };

  // do internal scrolling
  useEffect(() => {
    if (mode === ObjectPageMode.Default && isProgrammaticallyScrolled.current === true && !selectedSubSectionId) {
      scrollToSection(internalSelectedSectionId);
    }
  }, [internalSelectedSectionId, mode, isProgrammaticallyScrolled, scrollToSection, selectedSubSectionId]);

  // Scrolling for Sub Section Selection
  useEffect(() => {
    if (selectedSubSectionId && isProgrammaticallyScrolled.current === true && sectionSpacer) {
      scrollToSectionById(selectedSubSectionId, true);
      isProgrammaticallyScrolled.current = false;
    }
  }, [selectedSubSectionId, isProgrammaticallyScrolled.current, sectionSpacer]);

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
                (subSection as ReactElement<ObjectPageSubSectionPropTypes>).props.id === props.selectedSubSectionId
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
  }, [props.selectedSubSectionId, children, mode]);

  const tabContainerContainerRef = useRef(null);
  useEffect(() => {
    const objectPage = objectPageRef.current;
    const sectionNodes = objectPage.querySelectorAll<HTMLDivElement>('[id^="ObjectPageSection"]');
    const lastSectionNode = sectionNodes[sectionNodes.length - 1];
    const tabContainerContainer = tabContainerContainerRef.current;

    const observer = new ResizeObserver(([sectionElement]) => {
      const subSections = lastSectionNode.querySelectorAll<HTMLDivElement>('[id^="ObjectPageSubSection"]');
      const lastSubSection = subSections[subSections.length - 1];
      const lastSubSectionOrSection = lastSubSection ?? sectionElement.target;
      if ((currentTabModeSection && !lastSubSection) || (sectionNodes.length === 1 && !lastSubSection)) {
        setSectionSpacer(0);
      } else if (!!tabContainerContainer) {
        setSectionSpacer(
          objectPage.getBoundingClientRect().bottom -
            tabContainerContainer.getBoundingClientRect().bottom -
            lastSubSectionOrSection.getBoundingClientRect().height -
            TAB_CONTAINER_HEADER_HEIGHT
        );
      }
    });

    if (objectPage && lastSectionNode) {
      observer.observe(lastSectionNode, { box: 'border-box' });
    }

    return () => {
      observer.disconnect();
    };
  }, [headerCollapsed, topHeaderHeight, headerContentHeight, currentTabModeSection, children]);

  const onToggleHeaderContentVisibility = useCallback((e) => {
    isToggledRef.current = true;
    scrollTimeout.current = performance.now() + 500;
    if (!e.detail.visible) {
      setHeaderCollapsedInternal(true);
      objectPageRef.current?.classList.add(classNames.headerCollapsed);
    } else {
      setHeaderCollapsedInternal(false);
      setScrolledHeaderExpanded(true);
      objectPageRef.current?.classList.remove(classNames.headerCollapsed);
    }
  }, []);

  const handleOnSubSectionSelected = useCallback(
    (e) => {
      isProgrammaticallyScrolled.current = true;
      if (mode === ObjectPageMode.IconTabBar) {
        const sectionId = e.detail.sectionId;
        setInternalSelectedSectionId(sectionId);
        const sectionNodes = objectPageRef.current?.querySelectorAll(
          'section[data-component-name="ObjectPageSection"]'
        );
        const currentIndex = safeGetChildrenArray(children).findIndex((objectPageSection) => {
          return (
            isValidElement(objectPageSection) &&
            (objectPageSection as ReactElement<ObjectPagePropTypes>).props?.id === sectionId
          );
        });
        debouncedOnSectionChange(e, currentIndex, sectionId, sectionNodes[currentIndex]);
      }
      const subSectionId = e.detail.subSectionId;
      scrollTimeout.current = performance.now() + 200;
      setSelectedSubSectionId(subSectionId);
    },
    [mode, setInternalSelectedSectionId, setSelectedSubSectionId, isProgrammaticallyScrolled, children]
  );

  const objectPageClasses = clsx(
    classNames.objectPage,
    GlobalStyleClasses.sapScrollBar,
    className,
    mode === ObjectPageMode.IconTabBar && classNames.iconTabBarMode
  );

  const { onScroll: _0, selectedSubSectionId: _1, ...propsWithoutOmitted } = rest;

  useEffect(() => {
    const sectionNodes = objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]');
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
              return (
                isValidElement(objectPageSection) &&
                (objectPageSection as ReactElement<ObjectPageSectionPropTypes>).props?.id === currentId
              );
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

    sectionNodes.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [children, totalHeaderHeight, setInternalSelectedSectionId, isProgrammaticallyScrolled]);

  // Fallback when scrolling faster than the IntersectionObserver can observe (in most cases faster than 60fps)
  useEffect(() => {
    const sectionNodes = objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]');
    if (isAfterScroll) {
      let currentSection = sectionNodes[sectionNodes.length - 1];
      let currentIndex: number;
      for (let i = 0; i <= sectionNodes.length - 1; i++) {
        const sectionNode = sectionNodes[i];
        if (
          objectPageRef.current.getBoundingClientRect().top + totalHeaderHeight + TAB_CONTAINER_HEADER_HEIGHT <=
          sectionNode.getBoundingClientRect().bottom
        ) {
          currentSection = sectionNode;
          currentIndex = i;
          break;
        }
      }
      const currentSectionId = extractSectionIdFromHtmlId(currentSection?.id);
      if (currentSectionId !== internalSelectedSectionId) {
        setInternalSelectedSectionId(currentSectionId);
        debouncedOnSectionChange(
          scrollEvent.current,
          currentIndex ?? sectionNodes.length - 1,
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

  const hasHeaderContent = !!headerContent;
  const renderTitleSection = useCallback(
    (inHeader = false) => {
      const titleInHeaderClass = inHeader ? classNames.titleInHeader : undefined;

      if (headerTitle?.props && headerTitle.props?.showSubHeaderRight === undefined) {
        return cloneElement(headerTitle as ReactElement<DynamicPageTitlePropsWithDataAttributes>, {
          showSubHeaderRight: true,
          className: clsx(titleInHeaderClass, headerTitle?.props?.className),
          onToggleHeaderContentVisibility: onTitleClick,
          'data-not-clickable': titleHeaderNotClickable,
          'data-header-content-visible': headerContent && headerCollapsed !== true,
          'data-is-snapped-rendered-outside': snappedHeaderInObjPage
        });
      }
      return cloneElement(headerTitle as ReactElement<DynamicPageTitlePropsWithDataAttributes>, {
        className: clsx(titleInHeaderClass, headerTitle?.props?.className),
        onToggleHeaderContentVisibility: onTitleClick,
        'data-not-clickable': titleHeaderNotClickable,
        'data-header-content-visible': headerContent && headerCollapsed !== true,
        'data-is-snapped-rendered-outside': snappedHeaderInObjPage
      });
    },
    [headerTitle, titleHeaderNotClickable, onTitleClick, headerCollapsed, snappedHeaderInObjPage, hasHeaderContent]
  );

  const isInitial = useRef(true);
  useEffect(() => {
    if (!isInitial.current) {
      scrollTimeout.current = performance.now() + 200;
    } else {
      isInitial.current = false;
    }
  }, [snappedHeaderInObjPage]);

  const renderHeaderContentSection = useCallback(() => {
    if (headerContent?.props) {
      return cloneElement(headerContent as ReactElement<DynamicPageHeaderPropTypesWithInternals>, {
        ...headerContent.props,
        topHeaderHeight,
        style:
          headerCollapsed === true
            ? { position: 'absolute', visibility: 'hidden', flexShrink: 0 }
            : { ...headerContent.props.style, flexShrink: 0 },
        headerPinned: headerPinned || scrolledHeaderExpanded,
        //@ts-expect-error: todo remove me when forwardref has been replaced
        ref: componentRefHeaderContent,
        children: (
          <div className={classNames.headerContainer} data-component-name="ObjectPageHeaderContainer">
            {avatar}
            {(headerContent.props.children || titleInHeader) && (
              <div data-component-name="ObjectPageHeaderContent">
                {titleInHeader && renderTitleSection(true)}
                {headerContent.props.children}
              </div>
            )}
          </div>
        )
      });
    } else if (titleInHeader) {
      return (
        <DynamicPageHeader
          topHeaderHeight={topHeaderHeight}
          style={headerCollapsed === true ? { position: 'absolute', visibility: 'hidden' } : undefined}
          headerPinned={headerPinned || scrolledHeaderExpanded}
          ref={componentRefHeaderContent}
        >
          <div className={classNames.headerContainer} data-component-name="ObjectPageHeaderContainer">
            {avatar}
            <div data-component-name="ObjectPageHeaderContent">{titleInHeader && renderTitleSection(true)}</div>
          </div>
        </DynamicPageHeader>
      );
    }
  }, [
    headerContent,
    topHeaderHeight,
    headerPinned,
    scrolledHeaderExpanded,
    titleInHeader,
    avatar,
    headerContentRef,
    renderTitleSection
  ]);

  const onTabItemSelect = (event) => {
    if (typeof onBeforeNavigate === 'function') {
      const selectedTabDataset = event.detail.tab.dataset;
      const sectionIndex = parseInt(selectedTabDataset.index, 10);
      const sectionId = selectedTabDataset.parentId ?? selectedTabDataset.sectionId;
      const subSectionId = selectedTabDataset.hasOwnProperty('isSubTab') ? selectedTabDataset.sectionId : undefined;
      onBeforeNavigate(
        enrichEventWithDetails(event, {
          sectionIndex,
          sectionId,
          subSectionId
        })
      );
      if (event.defaultPrevented) {
        return;
      }
    }
    event.preventDefault();
    const { sectionId, index, isSubTab, parentId } = event.detail.tab.dataset;
    if (isSubTab !== undefined) {
      handleOnSubSectionSelected(enrichEventWithDetails(event, { sectionId: parentId, subSectionId: sectionId }));
    } else {
      const section = safeGetChildrenArray<ReactElement<ObjectPageSectionPropTypes>>(children).find((el) => {
        return el.props.id == sectionId;
      });
      handleOnSectionSelected(event, section?.props?.id, index, section);
    }
  };

  const prevScrollTop = useRef(undefined);
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
        objectPageRef.current?.classList.remove(classNames.headerCollapsed);
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
        topHeaderRef.current?.classList.add(classNames.headerHoverStyles);
      } else {
        topHeaderRef.current?.classList.remove(classNames.headerHoverStyles);
      }
    },
    [classNames.headerHoverStyles]
  );

  const objectPageStyles: CSSProperties = {
    ...style
  };
  if (headerCollapsed === true && (headerContent || titleInHeader)) {
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
        className={classNames.header}
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
          <div className={classNames.snappedContent} data-component-name="ATwithImageSnappedContentContainer">
            {headerTitle.props.snappedContent}
          </div>
        )}
      </header>
      {renderHeaderContentSection()}
      {headerContent && headerTitle && (
        <div
          data-component-name="ObjectPageAnchorBar"
          ref={anchorBarRef}
          className={classNames.anchorBar}
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
          ref={tabContainerContainerRef}
          className={classNames.tabContainer}
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
            onTabSelect={onTabItemSelect}
            data-component-name="ObjectPageTabContainer"
            className={classNames.tabContainerComponent}
          >
            {safeGetChildrenArray<ReactElement<ObjectPageSectionPropTypes>>(children).map((section, index) => {
              if (!isValidElement(section) || !section.props) return null;
              const subTabs = safeGetChildrenArray<ReactElement<ObjectPageSubSectionPropTypes>>(
                section.props.children
              ).filter(
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
                  items={subTabs.map((item) => {
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
                        data-index={index}
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
      <div data-component-name="ObjectPageContent" className={classNames.content} ref={objectPageContentRef}>
        <div style={{ height: headerCollapsed ? `${headerContentHeight}px` : 0 }} aria-hidden />
        {placeholder ? placeholder : sections}
        <div style={{ height: `${sectionSpacer}px` }} aria-hidden />
      </div>
      {footer && mode === ObjectPageMode.IconTabBar && !sectionSpacer && (
        <div className={classNames.footerSpacer} data-component-name="ObjectPageFooterSpacer" aria-hidden />
      )}
      {footer && (
        <footer className={classNames.footer} data-component-name="ObjectPageFooter">
          {footer}
        </footer>
      )}
    </div>
  );
});

ObjectPage.displayName = 'ObjectPage';

export { ObjectPage };
