'use client';

import AvatarSize from '@ui5/webcomponents/dist/types/AvatarSize.js';
import {
  debounce,
  enrichEventWithDetails,
  ThemingParameters,
  useIsomorphicLayoutEffect,
  useStylesheet,
  useSyncRef
} from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties, MouseEventHandler, ReactElement, UIEventHandler } from 'react';
import { cloneElement, forwardRef, isValidElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ObjectPageMode } from '../../enums/ObjectPageMode.js';
import { safeGetChildrenArray } from '../../internal/safeGetChildrenArray.js';
import { useObserveHeights } from '../../internal/useObserveHeights.js';
import type { AvatarPropTypes } from '../../webComponents/Avatar/index.js';
import { Tab } from '../../webComponents/Tab/index.js';
import { TabContainer } from '../../webComponents/TabContainer/index.js';
import { ObjectPageAnchorBar } from '../ObjectPageAnchorBar/index.js';
import type { InternalProps as ObjectPageHeaderPropTypesWithInternals } from '../ObjectPageHeader/index.js';
import type { ObjectPageSectionPropTypes } from '../ObjectPageSection/index.js';
import type { ObjectPageSubSectionPropTypes } from '../ObjectPageSubSection/index.js';
import { CollapsedAvatar } from './CollapsedAvatar.js';
import { classNames, styleData } from './ObjectPage.module.css.js';
import { getSectionById, getSectionElementById } from './ObjectPageUtils.js';
import type { ObjectPageDomRef, ObjectPagePropTypes, ObjectPageTitlePropsWithDataAttributes } from './types/index.js';
import { useHandleTabSelect } from './useHandleTabSelect.js';

const ObjectPageCssVariables = {
  headerDisplay: '--_ui5wcr_ObjectPage_header_display',
  titleFontSize: '--_ui5wcr_ObjectPage_title_fontsize'
};

const TAB_CONTAINER_HEADER_HEIGHT = 44;

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

  const isProgrammaticallyScrolled = useRef(false);
  const [componentRef, objectPageRef] = useSyncRef(ref);
  const topHeaderRef = useRef<HTMLDivElement>(null);
  const prevTopHeaderHeight = useRef(0);
  // @ts-expect-error: useSyncRef will create a ref if not present
  const [componentRefHeaderContent, headerContentRef] = useSyncRef(headerArea?.ref);
  const anchorBarRef = useRef<HTMLDivElement>(null);
  const scrollEvent = useRef(undefined);
  const objectPageContentRef = useRef<HTMLDivElement>(null);
  const selectionScrollTimeout = useRef(null);
  const isToggledRef = useRef(false);
  const scrollTimeout = useRef(0);

  const [selectedSubSectionId, setSelectedSubSectionId] = useState<undefined | string>(undefined);
  const [headerPinned, setHeaderPinned] = useState(headerPinnedProp);
  const [isMounted, setIsMounted] = useState(false);
  const [headerCollapsedInternal, setHeaderCollapsedInternal] = useState<undefined | boolean>(undefined);
  const [scrolledHeaderExpanded, setScrolledHeaderExpanded] = useState(false);
  const [sectionSpacer, setSectionSpacer] = useState(0);
  const [currentTabModeSection, setCurrentTabModeSection] = useState(null);
  const [toggledCollapsedHeaderWasVisible, setToggledCollapsedHeaderWasVisible] = useState(false);
  const sections = mode === ObjectPageMode.IconTabBar ? currentTabModeSection : children;

  useEffect(() => {
    const currentSection =
      mode === ObjectPageMode.IconTabBar ? getSectionById(children, internalSelectedSectionId) : null;
    setCurrentTabModeSection(currentSection);
  }, [mode, children, internalSelectedSectionId]);

  const prevInternalSelectedSectionId = useRef(internalSelectedSectionId);
  const fireOnSelectedChangedEvent = (targetEvent, index, id, section) => {
    if (typeof onSelectedSectionChange === 'function' && targetEvent && prevInternalSelectedSectionId.current !== id) {
      console.log('FIRE!!!');
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
    const scroll = () => {
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
    // In TabBar mode the section is only rendered when selected: delay scroll for subsection
    if (mode === ObjectPageMode.IconTabBar && isSubSection) {
      setTimeout(scroll, 300);
    } else {
      scroll();
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

  useIsomorphicLayoutEffect(() => {
    if (selectedSectionId) {
      const fireSelectEvent = () => {
        const selectedSection = getSectionElementById(objectPageRef.current, false, selectedSectionId);
        if (selectedSection) {
          const selectedSectionIndex = Array.from(
            selectedSection.parentElement.querySelectorAll(':scope > [data-component-name="ObjectPageSection"]')
          ).indexOf(selectedSection);
          handleOnSectionSelected({}, selectedSectionId, selectedSectionIndex, selectedSection);
        }
      };
      if (mode === ObjectPageMode.IconTabBar) {
        setInternalSelectedSectionId(selectedSectionId);
        // In TabBar mode the section is only rendered when selected, therefore delay firing the event until the section is available in the DOM
        setTimeout(fireSelectEvent);
      } else {
        fireSelectEvent();
      }
    }
  }, [selectedSectionId, mode]);

  // do internal scrolling
  useEffect(() => {
    if (mode === ObjectPageMode.Default && isProgrammaticallyScrolled.current === true && !selectedSubSectionId) {
      scrollToSection(internalSelectedSectionId);
    }
  }, [internalSelectedSectionId, mode, selectedSubSectionId]);

  // Scrolling for Sub Section Selection
  useEffect(() => {
    if (selectedSubSectionId && isProgrammaticallyScrolled.current === true) {
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

  const isInitialTabBarMode = useRef(true);
  useEffect(() => {
    if (!isMounted) {
      requestAnimationFrame(() => setIsMounted(true));
      return;
    }

    setSelectedSubSectionId(props.selectedSubSectionId);
    if (props.selectedSubSectionId) {
      isProgrammaticallyScrolled.current = true;
      if (mode === ObjectPageMode.IconTabBar) {
        let sectionId: string;
        let curSection: ReactElement;
        let sectionIndex: number = -1;
        childrenArray.forEach((section, index) => {
          if (isValidElement(section) && section.props && section.props.children) {
            safeGetChildrenArray(section.props.children).forEach((subSection) => {
              if (
                isValidElement(subSection) &&
                subSection.props &&
                (subSection as ReactElement<ObjectPageSubSectionPropTypes>).props.id === props.selectedSubSectionId
              ) {
                curSection = section;
                sectionId = section.props?.id;
                sectionIndex = index;
              }
            });
          }
        });
        if (sectionId) {
          if (!isInitialTabBarMode.current) {
            //In TabBar mode the section is often not scrolled when subsection changes, thus the onSelectedSectionChange isn't fired
            debouncedOnSectionChange({}, sectionIndex, sectionId, curSection);
          }
          setInternalSelectedSectionId(sectionId);
        }
      }
    }
    isInitialTabBarMode.current = false;
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

  const onToggleHeaderContentVisibility = (e) => {
    isToggledRef.current = true;
    scrollTimeout.current = performance.now() + 500;
    setToggledCollapsedHeaderWasVisible(false);
    if (!e.detail.visible) {
      if (objectPageRef.current.scrollTop <= headerContentHeight) {
        setToggledCollapsedHeaderWasVisible(true);
        if (firstSectionId === internalSelectedSectionId || mode === ObjectPageMode.IconTabBar) {
          objectPageRef.current.scrollTop = 0;
        }
      }
      setHeaderCollapsedInternal(true);
      setScrolledHeaderExpanded(false);
    } else {
      setHeaderCollapsedInternal(false);
      if (objectPageRef.current.scrollTop >= headerContentHeight) {
        setScrolledHeaderExpanded(true);
      }
    }
  };

  const { onScroll: _0, selectedSubSectionId: _1, ...propsWithoutOmitted } = rest;

  const visibleSectionIds = useRef<Set<string>>(new Set());
  useEffect(() => {
    // section observers are not required in TabBar mode
    if (mode === ObjectPageMode.IconTabBar) {
      return;
    }
    const sectionNodes = objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]');
    // only the sticky part of the header must be added as margin
    const rootMargin = `-${((headerPinned && !headerCollapsed) || scrolledHeaderExpanded ? totalHeaderHeight : topHeaderHeight) + TAB_CONTAINER_HEADER_HEIGHT}px 0px 0px 0px`;

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
  }, [
    totalHeaderHeight,
    headerPinned,
    headerCollapsed,
    topHeaderHeight,
    childrenArray.length,
    scrolledHeaderExpanded,
    mode
  ]);

  const onTitleClick = (e) => {
    e.stopPropagation();
    if (!preserveHeaderStateOnClick) {
      onToggleHeaderContentVisibility(enrichEventWithDetails(e, { visible: headerCollapsed }));
    }
  };

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

  const prevScrollTop = useRef(undefined);
  const onObjectPageScroll: UIEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      const target = e.target as HTMLDivElement;
      if (!isToggledRef.current) {
        isToggledRef.current = true;
      }
      if (scrollTimeout.current >= performance.now()) {
        return;
      }
      setToggledCollapsedHeaderWasVisible(false);
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
      if (!headerPinned || target.scrollTop === 0) {
        objectPageRef.current?.classList.remove(classNames.headerCollapsed);
      }
      if (scrolledHeaderExpanded && target.scrollTop !== prevScrollTop.current) {
        if (target.scrollHeight - target.scrollTop === target.clientHeight) {
          return;
        }
        prevScrollTop.current = target.scrollTop;
        if (!headerPinned) {
          setHeaderCollapsedInternal(true);
        }
        setScrolledHeaderExpanded(false);
      }
    },
    [topHeaderHeight, headerPinned, props.onScroll, scrolledHeaderExpanded, selectedSubSectionId]
  );

  const onHoverToggleButton: MouseEventHandler<HTMLHeadElement> = useCallback((e) => {
    if (e.type === 'mouseover') {
      topHeaderRef.current?.classList.add(classNames.headerHoverStyles);
    } else {
      topHeaderRef.current?.classList.remove(classNames.headerHoverStyles);
    }
  }, []);

  const handleTabSelect = useHandleTabSelect({
    onBeforeNavigate,
    headerPinned,
    mode,
    setHeaderCollapsedInternal,
    setScrolledHeaderExpanded,
    childrenArray,
    handleOnSectionSelected,
    isProgrammaticallyScrolled,
    setInternalSelectedSectionId,
    objectPageRef,
    debouncedOnSectionChange,
    scrollTimeout,
    setSelectedSubSectionId
  });

  const objectPageStyles: CSSProperties = {
    ...style
  };
  if (headerCollapsed === true && headerArea) {
    objectPageStyles[ObjectPageCssVariables.titleFontSize] = ThemingParameters.sapObjectHeader_Title_SnappedFontSize;
  }

  return (
    <div
      ref={componentRef}
      data-component-name="ObjectPage"
      slot={slot}
      className={clsx(
        classNames.objectPage,
        className,
        mode === ObjectPageMode.IconTabBar && classNames.iconTabBarMode
      )}
      style={objectPageStyles}
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
      >
        <span
          className={classNames.clickArea}
          onClick={onTitleClick}
          data-component-name="ObjectPageTitleAreaClickElement"
        />
        {titleArea &&
          cloneElement(titleArea as ReactElement<ObjectPageTitlePropsWithDataAttributes>, {
            className: clsx(titleArea?.props?.className),
            onToggleHeaderContentVisibility: onTitleClick,
            'data-not-clickable': !!preserveHeaderStateOnClick,
            'data-header-content-visible': headerArea && headerCollapsed !== true,
            _snappedAvatar:
              !headerArea || (titleArea && image && headerCollapsed === true) ? (
                <CollapsedAvatar image={image} imageShapeCircle={imageShapeCircle} />
              ) : null
          })}
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
            onTabSelect={handleTabSelect}
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
      <div
        data-component-name="ObjectPageContent"
        className={classNames.content}
        ref={objectPageContentRef}
        // prevent content scroll when elements outside the content are focused
        onFocus={() => {
          objectPageRef.current.style.scrollPaddingBlockStart = `${Math.ceil(topHeaderHeight + TAB_CONTAINER_HEADER_HEIGHT + (!headerCollapsed && headerPinned ? headerContentHeight : 0))}px`;
          if (footerArea) {
            objectPageRef.current.style.scrollPaddingBlockEnd = 'calc(var(--_ui5wcr-BarHeight) + 0.5rem)';
          }
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            objectPageRef.current.style.scrollPaddingBlockStart = '0px';
            objectPageRef.current.style.scrollPaddingBlockEnd = '0px';
          }
        }}
      >
        <div
          style={{
            height:
              ((headerCollapsed && !headerPinned) || scrolledHeaderExpanded) && !toggledCollapsedHeaderWasVisible
                ? `${headerContentHeight}px`
                : 0
          }}
          aria-hidden="true"
        />
        {placeholder ? placeholder : sections}
        <div style={{ height: `${sectionSpacer}px` }} aria-hidden="true" />
      </div>
      {footerArea && mode === ObjectPageMode.IconTabBar && !sectionSpacer && (
        <div className={classNames.footerSpacer} data-component-name="ObjectPageFooterSpacer" aria-hidden="true" />
      )}
      {footerArea && (
        <footer
          role={accessibilityAttributes?.objectPageFooterArea?.role}
          className={classNames.footer}
          data-component-name="ObjectPageFooter"
        >
          {footerArea}
        </footer>
      )}
    </div>
  );
});

ObjectPage.displayName = 'ObjectPage';

export { ObjectPage };
export type { ObjectPageDomRef, ObjectPagePropTypes };
