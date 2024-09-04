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
import { addCustomCSSWithScoping } from '../../internal/addCustomCSSWithScoping.js';
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

const ObjectPageCssVariables = {
  titleFontSize: '--_ui5wcr_ObjectPage_title_fontsize'
};

const TAB_CONTAINER_HEADER_HEIGHT = 48;

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

  const firstSectionId: string | undefined =
    safeGetChildrenArray<ReactElement<ObjectPageSectionPropTypes>>(children)[0]?.props?.id;

  const [internalSelectedSectionId, setInternalSelectedSectionId] = useState<string | undefined>(
    selectedSectionId ?? firstSectionId
  );
  const [selectedSubSectionId, setSelectedSubSectionId] = useState(props.selectedSubSectionId);
  const [headerPinned, setHeaderPinned] = useState(headerPinnedProp);
  const isProgrammaticallyScrolled = useRef(false);
  const prevSelectedSectionId = useRef<string | undefined>(undefined);

  const [componentRef, objectPageRef] = useSyncRef(ref);
  const topHeaderRef = useRef<HTMLDivElement>(null);
  const scrollEvent = useRef(undefined);
  const prevTopHeaderHeight = useRef(0);
  // @ts-expect-error: useSyncRef will create a ref if not present
  const [componentRefHeaderContent, headerContentRef] = useSyncRef(headerArea?.ref);
  const anchorBarRef = useRef<HTMLDivElement>(null);
  const objectPageContentRef = useRef<HTMLDivElement>(null);
  const selectionScrollTimeout = useRef(null);
  const [isAfterScroll, setIsAfterScroll] = useState(false);
  const isToggledRef = useRef(false);
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
    //todo
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

  // the header shouldn't be rendered if it's pinned and collapsed.
  useEffect(() => {
    const objectPageHeaderElement = objectPageRef.current?.querySelector("[data-component-name='ObjectPageHeader']");
    if (headerPinned && headerCollapsedInternal && objectPageHeaderElement) {
      console.log('A');
      objectPageHeaderElement.style.display = 'none';
    } else if (objectPageHeaderElement.style.display === 'none') {
      console.log('B');
      objectPageHeaderElement.style.display = '';
    }
    return () => {
      if (objectPageHeaderElement) {
        console.log('C');
        objectPageHeaderElement.style.display = '';
      }
    };
  }, [headerPinned, headerCollapsedInternal, headerArea]);

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

  const onToggleHeaderContentVisibility = (e) => {
    isToggledRef.current = true;
    //todo check if scrollTimeout is still needed
    scrollTimeout.current = performance.now() + 500;
    if (objectPageRef.current) {
      const objectPageElement = objectPageRef.current;
      if (!e.detail.visible) {
        setHeaderCollapsedInternal(true);
        objectPageElement.classList.add(classNames.headerCollapsed);
        if (objectPageElement.scrollTop < headerContentHeight) {
          //todo apply same logic if collapsed when scrolled
          objectPageElement.scrollTo({ top: headerContentHeight, behavior: 'instant' });
        } else {
          objectPageElement.scrollTo({
            top: objectPageElement.scrollTop + headerContentHeight,
            behavior: 'instant'
          });
        }
      } else {
        setHeaderCollapsedInternal(false);
        setScrolledHeaderExpanded(true);
        objectPageElement.classList.remove(classNames.headerCollapsed);
        objectPageElement.scrollTo({
          top: objectPageElement.scrollTop - headerContentHeight,
          behavior: 'instant'
        });
      }
    }
  };

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
      setSelectedSubSectionId(subSectionId);
    },
    [mode, setInternalSelectedSectionId, setSelectedSubSectionId, isProgrammaticallyScrolled, children]
  );

  const objectPageClasses = clsx(
    classNames.objectPage,
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

  const onTitleClick = (e) => {
    e.stopPropagation();
    if (!preserveHeaderStateOnClick) {
      onToggleHeaderContentVisibility(enrichEventWithDetails(e, { visible: headerCollapsed }));
    }
  };

  const snappedHeaderInObjPage = titleArea && titleArea.props.snappedContent && headerCollapsed === true && !!image;
  const isInitial = useRef(true);
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
        style: headerCollapsed === true ? { visibility: 'hidden', ...headerArea.props.style } : headerArea.props.style,
        headerPinned: headerPinned || scrolledHeaderExpanded,
        //@ts-expect-error: todo remove me when forwardref has been replaced
        ref: componentRefHeaderContent,
        children: (
          <div className={classNames.headerContainer} data-component-name="ObjectPageHeaderContainer">
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

  const onHoverToggleButton = (e) => {
    if (e?.type === 'mouseover') {
      topHeaderRef.current?.classList.add(classNames.headerHoverStyles);
    } else {
      topHeaderRef.current?.classList.remove(classNames.headerHoverStyles);
    }
  };

  const objectPageStyles: CSSProperties = {
    ...style
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
                : `${topHeaderHeight + 5}px`
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
