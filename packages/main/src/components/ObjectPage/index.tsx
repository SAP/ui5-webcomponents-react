'use client';

import type { TabContainerTabSelectEventDetail } from '@ui5/webcomponents/dist/TabContainer.js';
import AvatarSize from '@ui5/webcomponents/dist/types/AvatarSize.js';
import {
  debounce,
  enrichEventWithDetails,
  ThemingParameters,
  useStylesheet,
  useSyncRef
} from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { cloneElement, forwardRef, isValidElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ObjectPageMode } from '../../enums/index.js';
import { safeGetChildrenArray } from '../../internal/safeGetChildrenArray.js';
import { useObserveHeights } from '../../internal/useObserveHeights.js';
import type { CommonProps, Ui5CustomEvent } from '../../types/index.js';
import type { AvatarPropTypes, TabContainerDomRef } from '../../webComponents/index.js';
import { Tab, TabContainer } from '../../webComponents/index.js';
import { ObjectPageAnchorBar } from '../ObjectPageAnchorBar/index.js';
import type {
  InternalProps as ObjectPageHeaderPropTypesWithInternals,
  ObjectPageHeaderPropTypes
} from '../ObjectPageHeader/index.js';
import type { ObjectPageSectionPropTypes } from '../ObjectPageSection/index.js';
import type { ObjectPageSubSectionPropTypes } from '../ObjectPageSubSection/index.js';
import type {
  InternalProps as ObjectPageTitlePropTypesWithInternals,
  ObjectPageTitlePropTypes
} from '../ObjectPageTitle/index.js';
import { CollapsedAvatar } from './CollapsedAvatar.js';
import { classNames, styleData } from './ObjectPage.module.css.js';
import { getSectionById, getSectionElementById } from './ObjectPageUtils.js';

const ObjectPageCssVariables = {
  headerDisplay: '--_ui5wcr_ObjectPage_header_display',
  titleFontSize: '--_ui5wcr_ObjectPage_title_fontsize'
};

const TAB_CONTAINER_HEADER_HEIGHT = 44;

type ObjectPageSectionType = ReactElement<ObjectPageSectionPropTypes> | boolean;

interface BeforeNavigateDetail {
  sectionIndex: number;
  sectionId: string;
  subSectionId: string | undefined;
}

type ObjectPageTabSelectEventDetail = TabContainerTabSelectEventDetail & BeforeNavigateDetail;

type ObjectPageTitlePropsWithDataAttributes = ObjectPageTitlePropTypesWithInternals & {
  'data-not-clickable': boolean;
  'data-header-content-visible': boolean;
  'data-is-snapped-rendered-outside': boolean;
};

export interface ObjectPagePropTypes extends Omit<CommonProps, 'placeholder'> {
  /**
   * Defines the upper, always static, title section of the `ObjectPage`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `ObjectPageTitle` in order to preserve the intended design.
   *
   * __Note:__ When the `ObjectPageTitle` is rendered inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!
   */
  titleArea?: ReactElement<ObjectPageTitlePropTypes>;
  /**
   * Defines the `ObjectPageHeader` section of the `ObjectPage`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `ObjectPageHeader` in order to preserve the intended design.
   *
   * __Note:__ When the `ObjectPageHeader` is rendered inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!
   */
  headerArea?: ReactElement<ObjectPageHeaderPropTypes>;
  /**
   * React element which defines the footer content.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Bar` with `design={BarDesign.FloatingFooter}` in order to preserve the intended design.
   */
  footerArea?: ReactElement;
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
   * Defines whether the `headerArea` is pinned.
   */
  headerPinned?: boolean;
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
   * Defines if the pin button for the `headerArea` is hidden.
   */
  hidePinButton?: boolean;
  /**
   * Determines whether the user can switch between the expanded/collapsed states of the `ObjectPageHeader` by clicking on the `ObjectPageTitle`.
   *
   * __Note:__ Per default the header is toggleable.
   */
  preserveHeaderStateOnClick?: boolean;
  /**
   * Defines internally used accessibility properties/attributes.
   */
  accessibilityAttributes?: {
    objectPageTopHeader?: {
      role?: string;
      ariaRoledescription?: string;
    };
    objectPageAnchorBar?: {
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
   * Fired when the `headerArea` is expanded or collapsed.
   */
  onToggleHeaderArea?: (visible: boolean) => void;
  /**
   * Fired when the `headerArea` changes its pinned state.
   */
  onPinButtonToggle?: (pinned: boolean) => void;
}

export interface ObjectPageDomRef extends HTMLDivElement {
  /**
   * Toggles the `headerArea` of the `ObjectPage`.
   *
   * __Note:__ If no argument is passed, the header state is toggled, otherwise the respective `snapped` state is applied.
   */
  toggleHeaderArea: (snapped?: boolean) => void;
}

/**
 * A component that allows apps to easily display information related to a business object.
 *
 * The `ObjectPage` is composed of a header (title and content) and block content wrapped in sections and subsections that structure the information.
 */
const ObjectPage = forwardRef<ObjectPageDomRef, ObjectPagePropTypes>((props, ref) => {
  const {
    titleArea,
    image,
    footerArea,
    mode = ObjectPageMode.Default,
    imageShapeCircle,
    className,
    style,
    slot,
    children,
    selectedSectionId,
    headerPinned: headerPinnedProp,
    headerArea,
    hidePinButton,
    preserveHeaderStateOnClick,
    accessibilityAttributes,
    placeholder,
    onSelectedSectionChange,
    onToggleHeaderArea,
    onPinButtonToggle,
    onBeforeNavigate,
    ...rest
  } = props;

  useStylesheet(styleData, ObjectPage.displayName);

  // memo necessary due to side effects triggered on each update
  const childrenArray = useMemo(
    () => safeGetChildrenArray<ReactElement<ObjectPageSectionPropTypes>>(children),
    [children]
  );
  const firstSectionId: string | undefined = childrenArray[0]?.props?.id;

  const [internalSelectedSectionId, setInternalSelectedSectionId] = useState<string | undefined>(
    selectedSectionId ?? firstSectionId
  );
  const [selectedSubSectionId, setSelectedSubSectionId] = useState(undefined);
  const [headerPinned, setHeaderPinned] = useState(headerPinnedProp);
  const isProgrammaticallyScrolled = useRef(false);
  const [isMounted, setIsMounted] = useState(false);

  const [componentRef, objectPageRef] = useSyncRef(ref);
  const topHeaderRef = useRef<HTMLDivElement>(null);
  const scrollEvent = useRef(undefined);
  const prevTopHeaderHeight = useRef(0);
  // @ts-expect-error: useSyncRef will create a ref if not present
  const [componentRefHeaderContent, headerContentRef] = useSyncRef(headerArea?.ref);
  const anchorBarRef = useRef<HTMLDivElement>(null);
  const objectPageContentRef = useRef<HTMLDivElement>(null);
  const selectionScrollTimeout = useRef(null);
  const isToggledRef = useRef(false);
  const isInitial = useRef(true);
  const [headerCollapsedInternal, setHeaderCollapsedInternal] = useState<undefined | boolean>(undefined);
  const [scrolledHeaderExpanded, setScrolledHeaderExpanded] = useState(false);
  const scrollTimeout = useRef(0);
  const [sectionSpacer, setSectionSpacer] = useState(0);
  const [currentTabModeSection, setCurrentTabModeSection] = useState(null);
  const sections = mode === ObjectPageMode.IconTabBar ? currentTabModeSection : children;

  useEffect(() => {
    const currentSection =
      mode === ObjectPageMode.IconTabBar ? getSectionById(children, internalSelectedSectionId) : null;
    setCurrentTabModeSection(currentSection);
  }, [mode, children, internalSelectedSectionId]);

  const prevInternalSelectedSectionId = useRef(internalSelectedSectionId);
  const fireOnSelectedChangedEvent = (targetEvent, index, id, section) => {
    if (typeof onSelectedSectionChange === 'function' && targetEvent && prevInternalSelectedSectionId.current !== id) {
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
        noHeader: !titleArea && !headerArea,
        fixedHeader: headerPinned,
        scrollTimeout
      }
    );

  useEffect(() => {
    if (typeof onToggleHeaderArea === 'function' && isToggledRef.current) {
      onToggleHeaderArea(headerCollapsed !== true);
    }
  }, [headerCollapsed]);

  useEffect(() => {
    const objectPageNode = objectPageRef.current;
    if (objectPageNode) {
      Object.assign(objectPageNode, {
        toggleHeaderArea(snapped?: boolean) {
          if (typeof snapped === 'boolean') {
            onToggleHeaderContentVisibility({ detail: { visible: !snapped } });
          } else {
            onToggleHeaderContentVisibility({ detail: { visible: !!headerCollapsed } });
          }
        }
      });
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
          data-component-name="ObjectPageHeaderImage"
        >
          <img src={image} className={classNames.image} alt="Company Logo" />
        </span>
      );
    } else {
      return cloneElement(image, {
        size: AvatarSize.L,
        className: clsx(classNames.headerImage, image.props?.className),
        'data-component-name': 'ObjectPageHeaderImage'
      } as AvatarPropTypes);
    }
  }, [image, imageShapeCircle]);

  const scrollToSectionById = (id: string | undefined, isSubSection = false) => {
    const section = getSectionElementById(objectPageRef.current, isSubSection, id);
    scrollTimeout.current = performance.now() + 500;
    if (section) {
      const safeTopHeaderHeight = topHeaderHeight || prevTopHeaderHeight.current;

      const scrollMargin =
        -1 /* reduce margin-block so that intersection observer detects correct section*/ +
        safeTopHeaderHeight +
        anchorBarHeight +
        TAB_CONTAINER_HEADER_HEIGHT +
        (headerPinned && !headerCollapsed ? headerContentHeight : 0);
      section.style.scrollMarginBlockStart = scrollMargin + 'px';
      if (isSubSection) {
        section.focus();
      }

      const sectionRect = section.getBoundingClientRect();
      const objectPageElement = objectPageRef.current;
      const objectPageRect = objectPageElement.getBoundingClientRect();

      // Calculate the top position of the section relative to the container
      objectPageElement.scrollTop = sectionRect.top - objectPageRect.top + objectPageElement.scrollTop - scrollMargin;

      section.style.scrollMarginBlockStart = '';
    }
  };

  const scrollToSection = (sectionId?: string) => {
    if (!sectionId) {
      return;
    }
    if (firstSectionId === sectionId) {
      objectPageRef.current?.scrollTo({ top: 0 });
    } else {
      scrollToSectionById(sectionId);
    }
    isProgrammaticallyScrolled.current = false;
  };

  // section was selected by clicking on the tab bar buttons
  const handleOnSectionSelected = (targetEvent, newSelectionSectionId, index: number | string, section) => {
    isProgrammaticallyScrolled.current = true;
    debouncedOnSectionChange.cancel();
    setSelectedSubSectionId(undefined);
    setInternalSelectedSectionId((prevSelectedSection) => {
      if (prevSelectedSection === newSelectionSectionId) {
        scrollToSection(newSelectionSectionId);
      }
      return newSelectionSectionId;
    });
    scrollEvent.current = targetEvent;
    fireOnSelectedChangedEvent(targetEvent, index, newSelectionSectionId, section);
  };

  useEffect(() => {
    if (selectedSectionId) {
      const selectedSection = getSectionElementById(objectPageRef.current, false, selectedSectionId);
      if (selectedSection) {
        const selectedSectionIndex = Array.from(
          selectedSection.parentElement.querySelectorAll(':scope > [data-component-name="ObjectPageSection"]')
        ).indexOf(selectedSection);
        handleOnSectionSelected({}, selectedSectionId, selectedSectionIndex, selectedSection);
      }
    }
  }, [selectedSectionId]);

  // do internal scrolling
  useEffect(() => {
    if (mode === ObjectPageMode.Default && isProgrammaticallyScrolled.current === true && !selectedSubSectionId) {
      scrollToSection(internalSelectedSectionId);
    }
  }, [internalSelectedSectionId, mode, selectedSubSectionId]);

  // Scrolling for Sub Section Selection
  useEffect(() => {
    if (selectedSubSectionId && isProgrammaticallyScrolled.current === true && sectionSpacer) {
      scrollToSectionById(selectedSubSectionId, true);
      isProgrammaticallyScrolled.current = false;
    }
  }, [selectedSubSectionId, isProgrammaticallyScrolled.current, sectionSpacer]);

  useEffect(() => {
    if (headerPinnedProp !== undefined) {
      setHeaderPinned(headerPinnedProp);
    }
    if (headerPinnedProp) {
      onToggleHeaderContentVisibility({ detail: { visible: true } });
    }
  }, [headerPinnedProp]);

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
    if (!isMounted) {
      setIsMounted(true);
      return;
    }
    setSelectedSubSectionId(props.selectedSubSectionId);
    if (props.selectedSubSectionId) {
      isProgrammaticallyScrolled.current = true;
      if (mode === ObjectPageMode.IconTabBar) {
        let sectionId: string;
        childrenArray.forEach((section) => {
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
  }, [props.selectedSubSectionId, isMounted]);

  const tabContainerContainerRef = useRef(null);
  const isHeaderPinnedAndExpanded = headerPinned && !headerCollapsed;
  useEffect(() => {
    const objectPage = objectPageRef.current;
    const tabContainerContainer = tabContainerContainerRef.current;

    if (!objectPage || !tabContainerContainer) {
      return;
    }

    const footerElement = objectPage.querySelector<HTMLDivElement>('[data-component-name="ObjectPageFooter"]');
    const topHeaderElement = objectPage.querySelector('[data-component-name="ObjectPageTopHeader"]');

    const calculateSpacer = ([lastSectionNodeEntry]: ResizeObserverEntry[]) => {
      const lastSectionNode = lastSectionNodeEntry?.target;

      if (!lastSectionNode) {
        setSectionSpacer(0);
        return;
      }

      const subSections = lastSectionNode.querySelectorAll<HTMLDivElement>('[id^="ObjectPageSubSection"]');
      const lastSubSection = subSections[subSections.length - 1];
      const lastSubSectionOrSection = lastSubSection ?? lastSectionNode;

      if ((currentTabModeSection && !lastSubSection) || (sectionNodes.length === 1 && !lastSubSection)) {
        setSectionSpacer(0);
        return;
      }

      // batching DOM-reads together minimizes reflow
      const footerHeight = footerElement?.offsetHeight ?? 0;
      const objectPageRect = objectPage.getBoundingClientRect();
      const tabContainerContainerRect = tabContainerContainer.getBoundingClientRect();
      const lastSubSectionOrSectionRect = lastSubSectionOrSection.getBoundingClientRect();

      let stickyHeaderBottom = 0;
      if (!isHeaderPinnedAndExpanded) {
        const topHeaderBottom = topHeaderElement?.getBoundingClientRect().bottom ?? 0;
        stickyHeaderBottom = topHeaderBottom + tabContainerContainerRect.height;
      } else {
        stickyHeaderBottom = tabContainerContainerRect.bottom;
      }

      const spacer = Math.ceil(
        objectPageRect.bottom - stickyHeaderBottom - lastSubSectionOrSectionRect.height - footerHeight // section padding (8px) not included, so that the intersection observer is triggered correctly
      );
      setSectionSpacer(Math.max(spacer, 0));
    };

    const observer = new ResizeObserver(calculateSpacer);
    const sectionNodes = objectPage.querySelectorAll<HTMLDivElement>('[id^="ObjectPageSection"]');
    const lastSectionNode = sectionNodes[sectionNodes.length - 1];

    if (lastSectionNode) {
      observer.observe(lastSectionNode, { box: 'border-box' });
    }

    return () => {
      observer.disconnect();
    };
  }, [topHeaderHeight, headerContentHeight, currentTabModeSection, children, mode, isHeaderPinnedAndExpanded]);

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

  const handleOnSubSectionSelected = (e) => {
    isProgrammaticallyScrolled.current = true;
    if (mode === ObjectPageMode.IconTabBar) {
      const sectionId = e.detail.sectionId;
      setInternalSelectedSectionId(sectionId);
      const sectionNodes = objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]');
      const currentIndex = childrenArray.findIndex((objectPageSection) => {
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
  };

  const objectPageClasses = clsx(
    classNames.objectPage,
    className,
    mode === ObjectPageMode.IconTabBar && classNames.iconTabBarMode,
    footerArea && classNames.withFooter
  );

  const { onScroll: _0, selectedSubSectionId: _1, ...propsWithoutOmitted } = rest;

  const visibleSectionIds = useRef<Set<string>>(new Set());
  useEffect(() => {
    const sectionNodes = objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]');
    // only the sticky part of the header must be added as margin
    const rootMargin = `-${(headerPinned && !headerCollapsed ? totalHeaderHeight : topHeaderHeight) + TAB_CONTAINER_HEADER_HEIGHT}px 0px 0px 0px`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            visibleSectionIds.current.add(sectionId);
          } else {
            visibleSectionIds.current.delete(sectionId);
          }

          let currentIndex: undefined | number;
          const sortedVisibleSections = Array.from(sectionNodes).filter((section, index) => {
            const isVisibleSection = visibleSectionIds.current.has(section.id);
            if (currentIndex === undefined && isVisibleSection) {
              currentIndex = index;
            }
            return visibleSectionIds.current.has(section.id);
          });

          if (sortedVisibleSections.length > 0) {
            const section = sortedVisibleSections[0];
            const id = sortedVisibleSections[0].id.slice(18);
            setInternalSelectedSectionId(id);
            debouncedOnSectionChange(scrollEvent.current, currentIndex, id, section);
          }
        });
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
  }, [totalHeaderHeight, headerPinned, headerCollapsed, topHeaderHeight, childrenArray.length]);

  const onTitleClick = (e) => {
    e.stopPropagation();
    if (!preserveHeaderStateOnClick) {
      onToggleHeaderContentVisibility(enrichEventWithDetails(e, { visible: headerCollapsed }));
    }
  };

  const snappedHeaderInObjPage = titleArea && titleArea.props.snappedContent && headerCollapsed === true && !!image;

  useEffect(() => {
    if (!isInitial.current) {
      scrollTimeout.current = performance.now() + 200;
    } else {
      isInitial.current = false;
    }
  }, [snappedHeaderInObjPage]);

  const renderHeaderContentSection = () => {
    if (headerArea?.props) {
      return cloneElement(headerArea as ReactElement<ObjectPageHeaderPropTypesWithInternals>, {
        ...headerArea.props,
        topHeaderHeight,
        style:
          headerCollapsed === true
            ? { ...headerArea.props.style, position: 'absolute', visibility: 'hidden', flexShrink: 0, insetInline: 0 }
            : { ...headerArea.props.style, flexShrink: 0 },
        headerPinned: headerPinned || scrolledHeaderExpanded,
        //@ts-expect-error: todo remove me when forwardref has been replaced
        ref: componentRefHeaderContent,
        children: (
          <div
            className={clsx(classNames.headerContainer, avatar && classNames.hasAvatar)}
            data-component-name="ObjectPageHeaderContainer"
          >
            {avatar}
            {headerArea.props.children && (
              <div data-component-name="ObjectPageHeaderContent">{headerArea.props.children}</div>
            )}
          </div>
        )
      });
    }
  };

  const onTabItemSelect = (event) => {
    if (typeof onBeforeNavigate === 'function') {
      const selectedTabDataset = event.detail.tab.dataset;
      const sectionIndex = parseInt(selectedTabDataset.index, 10);
      const sectionId = selectedTabDataset.parentId ?? selectedTabDataset.sectionId;
      const subSectionId = Object.prototype.hasOwnProperty.call(selectedTabDataset, 'isSubTab')
        ? selectedTabDataset.sectionId
        : undefined;
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
      const section = childrenArray.find((el) => {
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
    ...style,
    scrollPaddingBlockStart: `${Math.ceil(topHeaderHeight + TAB_CONTAINER_HEADER_HEIGHT + (!headerCollapsed && headerPinned ? headerContentHeight : 0))}px`
  };
  if (headerCollapsed === true && headerArea) {
    objectPageStyles[ObjectPageCssVariables.titleFontSize] = ThemingParameters.sapObjectHeader_Title_SnappedFontSize;
  }

  return (
    <div
      data-component-name="ObjectPage"
      slot={slot}
      className={objectPageClasses}
      style={objectPageStyles}
      ref={componentRef}
      onScroll={onObjectPageScroll}
      data-in-iframe={window && window.self !== window.top}
      {...propsWithoutOmitted}
    >
      <header
        onMouseOver={onHoverToggleButton}
        onMouseLeave={onHoverToggleButton}
        data-component-name="ObjectPageTopHeader"
        ref={topHeaderRef}
        role={accessibilityAttributes?.objectPageTopHeader?.role}
        data-not-clickable={!!preserveHeaderStateOnClick}
        aria-roledescription={accessibilityAttributes?.objectPageTopHeader?.ariaRoledescription ?? 'Object Page header'}
        className={classNames.header}
        style={{
          gridAutoColumns: `min-content ${
            titleArea && image && headerCollapsed === true ? `calc(100% - 3rem - 1rem)` : '100%'
          }`
        }}
      >
        <span
          className={classNames.clickArea}
          onClick={onTitleClick}
          data-component-name="ObjectPageTitleAreaClickElement"
        />
        {titleArea && image && headerCollapsed === true && (
          <CollapsedAvatar image={image} imageShapeCircle={imageShapeCircle} />
        )}
        {titleArea &&
          cloneElement(titleArea as ReactElement<ObjectPageTitlePropsWithDataAttributes>, {
            className: clsx(titleArea?.props?.className),
            onToggleHeaderContentVisibility: onTitleClick,
            'data-not-clickable': !!preserveHeaderStateOnClick,
            'data-header-content-visible': headerArea && headerCollapsed !== true,
            'data-is-snapped-rendered-outside': snappedHeaderInObjPage
          })}
        {snappedHeaderInObjPage && (
          <div className={classNames.snappedContent} data-component-name="ATwithImageSnappedContentContainer">
            {titleArea.props.snappedContent}
          </div>
        )}
      </header>
      {renderHeaderContentSection()}
      {headerArea && titleArea && (
        <div
          data-component-name="ObjectPageAnchorBar"
          ref={anchorBarRef}
          className={classNames.anchorBar}
          style={{
            top:
              scrolledHeaderExpanded || headerPinned
                ? `${topHeaderHeight + (headerCollapsed === true ? 0 : headerContentHeight)}px`
                : `${topHeaderHeight}px`
          }}
        >
          <ObjectPageAnchorBar
            headerContentVisible={headerArea && headerCollapsed !== true}
            hidePinButton={!!hidePinButton}
            headerPinned={headerPinned}
            accessibilityAttributes={accessibilityAttributes}
            onToggleHeaderContentVisibility={onToggleHeaderContentVisibility}
            setHeaderPinned={setHeaderPinned}
            onHoverToggleButton={onHoverToggleButton}
            onPinButtonToggle={onPinButtonToggle}
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
            {childrenArray.map((section, index) => {
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
        <div style={{ height: headerCollapsed && !headerPinned ? `${headerContentHeight}px` : 0 }} aria-hidden />
        {placeholder ? placeholder : sections}
        <div style={{ height: `${sectionSpacer}px` }} aria-hidden />
      </div>
      {footerArea && mode === ObjectPageMode.IconTabBar && !sectionSpacer && (
        <div className={classNames.footerSpacer} data-component-name="ObjectPageFooterSpacer" aria-hidden />
      )}
      {footerArea && (
        <footer className={classNames.footer} data-component-name="ObjectPageFooter">
          {footerArea}
        </footer>
      )}
    </div>
  );
});

ObjectPage.displayName = 'ObjectPage';

export { ObjectPage };
