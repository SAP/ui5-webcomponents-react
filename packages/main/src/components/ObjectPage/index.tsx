import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming';
import { useIsRTL } from '@ui5/webcomponents-react-base/dist/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/dist/useConsolidatedRef';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import { debounce, enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';
import { AvatarSize } from '@ui5/webcomponents-react/dist/AvatarSize';
import { AvatarPropTypes } from '@ui5/webcomponents-react/dist/Avatar';
import { GlobalStyleClasses } from '@ui5/webcomponents-react/dist/GlobalStyleClasses';
import { List } from '@ui5/webcomponents-react/dist/List';
import { ObjectPageMode } from '@ui5/webcomponents-react/dist/ObjectPageMode';
import { PlacementType } from '@ui5/webcomponents-react/dist/PlacementType';
import { Popover } from '@ui5/webcomponents-react/dist/Popover';
import { StandardListItem } from '@ui5/webcomponents-react/dist/StandardListItem';
import { TabContainer } from '@ui5/webcomponents-react/dist/TabContainer';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, {
  ComponentType,
  FC,
  forwardRef,
  ReactElement,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import { Ui5PopoverDomRef } from '../../interfaces/Ui5PopoverDomRef';
import { stopPropagation } from '../../internal/stopPropagation';
import { DynamicPageAnchorBar } from '../DynamicPageAnchorBar';
import { ObjectPageSectionPropTypes } from '../ObjectPageSection';
import { ObjectPageSubSectionPropTypes } from '../ObjectPageSubSection';
import { CollapsedAvatar } from './CollapsedAvatar';
import { ObjectPageCssVariables, styles } from './ObjectPage.jss';
import { ObjectPageAnchorButton } from './ObjectPageAnchorButton';
import {
  extractSectionIdFromHtmlId,
  getLastObjectPageSection,
  getSectionById,
  safeGetChildrenArray
} from './ObjectPageUtils';
import { useObserveHeights } from '../../internal/useObserveHeights';

addCustomCSS(
  'ui5-tabcontainer',
  `
  :host([data-component-name="ObjectPage-TabContainer"]) .ui5-tc__header {
    box-shadow: inset 0 -0.0625rem ${ThemingParameters.sapPageHeader_BorderColor}, 0 0.125rem 0.25rem 0 rgb(0 0 0 / 8%);
  }
  `
);

//todo IE11?
export interface ObjectPagePropTypes extends Omit<CommonProps, 'title'> {
  /**
   * Defines the title section of the `ObjectPage`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageTitle` in order to preserve the intended design.
   * __Note:__ If not defined otherwise the prop `showSubheadingRight` of the `DynamicPageTitle` is set to `true` by default.
   */
  title?: ReactElement;
  /**
   * Defines the header section of the `ObjectPage`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageHeader` in order to preserve the intended design.
   */
  header?: ReactElement;
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
   * Defines the content area of the `ObjectPage`. It consists of sections and subsections.<br />
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
   * Fired when the selected section changes.
   */
  onSelectedSectionChanged?: (
    event: CustomEvent<{ selectedSectionIndex: number; selectedSectionId: string; section: ComponentType }>
  ) => void;

  // appearance
  /**
   * Defines whether the header is hidden by scrolling down.
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
  mode?: ObjectPageMode;
  /**
   * Defines whether the pin button of the header is displayed.
   */
  showHideHeaderButton?: boolean;
  /**
   * Defines whether the header content is pinnable.
   */
  headerContentPinnable?: boolean;
}

const useStyles = createUseStyles(styles, { name: 'ObjectPage' });

/**
 * A component that allows apps to easily display information related to a business object.<br />
 * The `ObjectPage` is composed of a header (title and content) and block content wrapped in sections and subsections that structure the information.
 */
const ObjectPage: FC<ObjectPagePropTypes> = forwardRef((props: ObjectPagePropTypes, ref: RefObject<HTMLDivElement>) => {
  const {
    title,
    image,
    footer,
    mode,
    imageShapeCircle,
    className,
    style,
    tooltip,
    slot,
    showHideHeaderButton,
    children,
    onSelectedSectionChanged,
    selectedSectionId,
    alwaysShowContentHeader,
    showTitleInHeaderContent,
    header,
    headerContentPinnable
  } = props;

  const classes = useStyles();

  const firstSectionId = safeGetChildrenArray<ReactElement>(children)[0]?.props?.id;
  const [internalSelectedSectionId, setInternalSelectedSectionId] = useState(selectedSectionId ?? firstSectionId);
  const [selectedSubSectionId, setSelectedSubSectionId] = useState(props.selectedSubSectionId);
  const [headerPinned, setHeaderPinned] = useState(alwaysShowContentHeader);
  const isProgrammaticallyScrolled = useRef(false);

  const objectPageRef: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
  const topHeaderRef: RefObject<HTMLDivElement> = useRef();
  //@ts-ignore
  const headerContentRef: RefObject<HTMLDivElement> = useConsolidatedRef(header.ref);
  const anchorBarRef: RefObject<HTMLDivElement> = useRef();

  const isRTL = useIsRTL(objectPageRef);

  // observe heights of header parts
  const { topHeaderHeight, headerContentHeight, anchorBarHeight, totalHeaderHeight } = useObserveHeights(
    objectPageRef,
    topHeaderRef,
    headerContentRef,
    anchorBarRef,
    { noHeader: !title && !header }
  );

  const avatar = useMemo(() => {
    if (!image) {
      return null;
    }
    const headerImageClasses = StyleClassHelper.of(classes.headerImage);
    if (isRTL) {
      headerImageClasses.put(classes.headerImageRtl);
    }
    if (typeof image === 'string') {
      return (
        <span
          className={headerImageClasses.className}
          style={{ borderRadius: imageShapeCircle ? '50%' : 0, overflow: 'hidden' }}
        >
          <img src={image} className={classes.image} alt="Company Logo" />
        </span>
      );
    } else {
      if (image.props?.className) {
        headerImageClasses.put(image.props?.className);
      }
      return React.cloneElement(image, {
        size: AvatarSize.L,
        className: headerImageClasses.className
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
          let safeTopHeaderHeight = topHeaderHeight || prevTopHeaderHeight.current;
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

  // change selected section when prop is changed (external change)
  useEffect(() => {
    isProgrammaticallyScrolled.current = true;
    setInternalSelectedSectionId(selectedSectionId ?? firstSectionId);
  }, [selectedSectionId, isProgrammaticallyScrolled, firstSectionId]);

  // section was selected by clicking on the anchor bar buttons
  const handleOnSectionSelected = useCallback(
    (e) => {
      isProgrammaticallyScrolled.current = true;
      const newSelectionSection = e.detail.props?.id;
      setInternalSelectedSectionId((oldSelectedSection) => {
        if (oldSelectedSection === newSelectionSection) {
          scrollToSection(newSelectionSection);
        }
        return newSelectionSection;
      });
      fireOnSelectedChangedEvent(e);
    },
    [onSelectedSectionChanged, setInternalSelectedSectionId, isProgrammaticallyScrolled, scrollToSection]
  );

  // do internal scrolling
  useEffect(() => {
    if (mode === ObjectPageMode.Default && isProgrammaticallyScrolled.current === true) {
      scrollToSection(internalSelectedSectionId);
    }
  }, [internalSelectedSectionId, mode, isProgrammaticallyScrolled, scrollToSection]);

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
    isProgrammaticallyScrolled,
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
  }, [
    props.selectedSubSectionId,
    setInternalSelectedSectionId,
    setSelectedSubSectionId,
    children,
    mode,
    isProgrammaticallyScrolled
  ]);

  useEffect(() => {
    const fillerDivObserver = new ResizeObserver(() => {
      let heightDiff = 0;
      const maxHeight = Math.min(objectPageRef.current?.clientHeight, window.innerHeight);
      const availableScrollHeight = maxHeight - totalHeaderHeight;
      const lastSectionDomRef = getLastObjectPageSection(objectPageRef);

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
      objectPageRef.current?.style.setProperty(ObjectPageCssVariables.lastSectionMargin, `${heightDiff}px`);
    });

    fillerDivObserver.observe(objectPageRef.current);

    return () => {
      fillerDivObserver.disconnect();
    };
  }, [totalHeaderHeight, objectPageRef, children]);

  const fireOnSelectedChangedEvent = debounce((e) => {
    if (typeof onSelectedSectionChanged === 'function') {
      onSelectedSectionChanged(
        enrichEventWithDetails(e, {
          selectedSectionIndex: e.detail.index,
          selectedSectionId: e.detail.props.id,
          section: e.detail
        })
      );
    }
  }, 500);

  const handleOnSubSectionSelected = useCallback(
    (e) => {
      isProgrammaticallyScrolled.current = true;
      if (mode === ObjectPageMode.IconTabBar) {
        const sectionId = e.detail.section.props?.id;
        setInternalSelectedSectionId(sectionId);
      }
      const subSection = e.detail.subSection;
      setSelectedSubSectionId(subSection.props.id);
    },
    [mode, setInternalSelectedSectionId, setSelectedSubSectionId, isProgrammaticallyScrolled]
  );
  const [scrolledHeaderExpanded, setScrolledHeaderExpanded] = useState(false);
  const onToggleHeaderContentVisibility = useCallback(
    (e) => {
      if (!e.detail.visible) {
        objectPageRef.current?.classList.add(classes.headerCollapsed);
      } else {
        setScrolledHeaderExpanded(true);
        objectPageRef.current?.classList.remove(classes.headerCollapsed);
      }
    },
    [objectPageRef.current, classes.headerCollapsed]
  );

  const objectPageClasses = StyleClassHelper.of(classes.objectPage, GlobalStyleClasses.sapScrollBar);
  if (className) {
    objectPageClasses.put(className);
  }

  if (mode === ObjectPageMode.IconTabBar) {
    objectPageClasses.put(classes.iconTabBarMode);
  }

  const passThroughProps = usePassThroughHtmlProps(props, ['onSelectedSectionChanged']);

  useEffect(() => {
    const objectPageHeight = objectPageRef.current?.clientHeight ?? 1000;
    const marginBottom = objectPageHeight - totalHeaderHeight;
    const rootMargin = `-${totalHeaderHeight}px 0px -${marginBottom < 0 ? 0 : marginBottom}px 0px`;
    const observer = new IntersectionObserver(
      (elements) => {
        elements.forEach((section) => {
          if (section.isIntersecting && isProgrammaticallyScrolled.current === false) {
            setInternalSelectedSectionId(extractSectionIdFromHtmlId(section.target.id));
          }
        });
      },
      {
        root: objectPageRef.current,
        rootMargin,
        threshold: [0]
      }
    );

    objectPageRef.current?.querySelectorAll('section[data-component-name="ObjectPageSection"]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [objectPageRef, children, totalHeaderHeight, setInternalSelectedSectionId, isProgrammaticallyScrolled]);

  const renderTitleSection = useCallback(
    (inHeader = false) => {
      const titleStyles = { ...(inHeader ? { padding: 0 } : {}), ...(title?.props?.style ?? {}) };
      if (title?.props && title.props?.showSubheadingRight === undefined) {
        return React.cloneElement(title, { showSubheadingRight: true, style: titleStyles });
      }
      return React.cloneElement(title, { style: titleStyles });
    },
    [title]
  );

  const renderHeaderContentSection = useCallback(() => {
    if (header?.props) {
      return React.cloneElement(header, {
        ...header.props,
        topHeaderHeight,
        headerPinned: headerPinned || scrolledHeaderExpanded,
        ref: headerContentRef,
        children: (
          <div className={classes.headerContainer}>
            {avatar}
            {header.props.children && (
              <div data-component-name="ObjectPage-HeaderContent">
                {showTitleInHeaderContent && renderTitleSection(true)}
                {header.props.children}
              </div>
            )}
          </div>
        )
      });
    }
  }, [
    header,
    topHeaderHeight,
    headerPinned,
    scrolledHeaderExpanded,
    showTitleInHeaderContent,
    avatar,
    headerContentRef,
    renderTitleSection
  ]);

  const paddingLeftRtl = isRTL ? 'paddingLeft' : 'paddingRight';

  const onTabItemSelect = useCallback(
    (event) => {
      const { sectionId, index } = event.detail.tab.dataset;
      const section = safeGetChildrenArray<ReactElement>(children).find((el) => el.props.id == sectionId);
      handleOnSectionSelected(
        enrichEventWithDetails({} as any, {
          ...section,
          index
        })
      );
    },
    [children]
  );
  const [popoverContent, setPopoverContent] = useState<ReactElement>(null);
  const popoverRef = useRef<Ui5PopoverDomRef>(null);
  const onShowSubSectionPopover = useCallback(
    (e, section) => {
      setPopoverContent(section);
      popoverRef.current.openBy(e.target.parentElement);
    },
    [setPopoverContent, popoverRef]
  );

  const onSubSectionClick = useCallback(
    (e) => {
      const selectedId = e.detail.item.dataset.key;
      const subSection = popoverContent.props.children
        .filter((item) => item.props && item.props.isSubSection)
        .find((item) => item.props.id === selectedId);
      if (subSection) {
        handleOnSubSectionSelected(enrichEventWithDetails(e, { section: popoverContent, subSection }));
      }
      popoverRef.current.close();
    },
    [handleOnSubSectionSelected, popoverRef, popoverContent]
  );
  const prevScrollTop = useRef();
  const onObjectPageScroll = useCallback(
    (e) => {
      if (typeof props.onScroll === 'function') {
        props.onScroll(e);
      }
      objectPageRef.current?.classList.remove(classes.headerCollapsed);
      if (scrolledHeaderExpanded && e.target.scrollTop !== prevScrollTop.current) {
        if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
          return;
        }
        prevScrollTop.current = e.target.scrollTop;
        setScrolledHeaderExpanded(false);
      }
    },
    [props.onScroll, objectPageRef.current, scrolledHeaderExpanded, prevScrollTop.current]
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
  const onTitleClick = useCallback(
    (e) => {
      onToggleHeaderContentVisibility(enrichEventWithDetails(e, { visible: !headerContentHeight }));
    },
    [onToggleHeaderContentVisibility, headerContentHeight]
  );
  return (
    <div
      data-component-name="ObjectPage"
      slot={slot}
      className={objectPageClasses.toString()}
      style={style}
      ref={objectPageRef}
      title={tooltip}
      {...passThroughProps}
      onScroll={onObjectPageScroll}
    >
      <header
        ref={topHeaderRef}
        role="banner"
        aria-roledescription="Object Page header"
        className={classes.header}
        onClick={onTitleClick}
        style={{
          display: !showTitleInHeaderContent || headerContentHeight === 0 ? 'grid' : 'none'
        }}
      >
        {title && image && headerContentHeight === 0 && (
          <CollapsedAvatar image={image} imageShapeCircle={imageShapeCircle} style={{ [paddingLeftRtl]: '1rem' }} />
        )}
        {renderTitleSection()}
      </header>
      {renderHeaderContentSection()}
      {header && title && (
        <div
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
          />
        </div>
      )}
      <div
        style={{
          position: 'sticky',
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
          showOverflow
          data-component-name="ObjectPage-TabContainer"
        >
          {safeGetChildrenArray(children).map((section: ReactElement, index) => {
            return (
              <ObjectPageAnchorButton
                key={`Anchor-${section.props?.id}`}
                section={section}
                index={index}
                selected={selectedSectionId === section.props?.id}
                onShowSubSectionPopover={onShowSubSectionPopover}
              />
            );
          })}
        </TabContainer>
        {createPortal(
          <Popover placementType={PlacementType.Bottom} noArrow ref={popoverRef} onAfterClose={stopPropagation}>
            <List onItemClick={onSubSectionClick}>
              {popoverContent?.props?.children
                .filter((item) => item.props && item.props.isSubSection)
                .map((item) => (
                  <StandardListItem key={item.props.id} data-key={item.props.id}>
                    {item.props.title}
                  </StandardListItem>
                ))}
            </List>
          </Popover>,
          document.body
        )}
      </div>
      {mode === ObjectPageMode.IconTabBar ? getSectionById(children, internalSelectedSectionId) : children}
      {footer && <div style={{ height: '1rem' }} />}
      {footer && <footer className={classes.footer}>{footer}</footer>}
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
