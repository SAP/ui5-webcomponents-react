import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { isIE } from '@ui5/webcomponents-react-base/dist/Device';
import { useIsRTL } from '@ui5/webcomponents-react-base/dist/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/dist/useConsolidatedRef';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import { debounce, enrichEventWithDetails, getScrollBarWidth } from '@ui5/webcomponents-react-base/dist/Utils';
import { sapUiResponsiveContentPadding } from '@ui5/webcomponents-react-base/styling/spacing';
import { DynamicPageHeader } from '@ui5/webcomponents-react/dist/DynamicPageHeader';
import { GlobalStyleClasses } from '@ui5/webcomponents-react/dist/GlobalStyleClasses';
import { ObjectPageMode } from '@ui5/webcomponents-react/dist/ObjectPageMode';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, {
  ComponentType,
  FC,
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
import { createPortal } from 'react-dom';
import { createUseStyles } from 'react-jss';
import {
  AvatarSize,
  FlexBox,
  FlexBoxDirection,
  FlexBoxWrap,
  Label,
  Link,
  List,
  PlacementType,
  Popover,
  ProgressIndicator,
  StandardListItem,
  TabContainer,
  ValueState
} from '../..';
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
import { useObserveHeights } from './useObserveHeights';
import { addCustomCSS } from '@ui5/webcomponents-base/dist/Theming';

declare const ResizeObserver;

const SCROLL_BAR_WIDTH = 12;

addCustomCSS(
  'ui5-tabcontainer',
  `
  :host([data-component-name="ObjectPage-TabContainer"]) .ui5-tc__header {
    box-shadow: inset 0 -0.0625rem ${ThemingParameters.sapPageHeader_BorderColor}, 0 0.125rem 0.25rem 0 rgb(0 0 0 / 8%);
  }
  `
);

export interface ObjectPagePropTypes extends Omit<CommonProps, 'title'> {
  /**
   * Defines the title section of the `ObjectPage`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `DynamicPageTitle` in order to preserve the intended design.
   * __Note:__ If not defined otherwise the prop `showSubheadingRight` of the `DynamicPageTitle` is set to `true` by default.
   */
  title?: ReactElement;
  /**
   * todo
   */
  header?: ReactElement;
  /**
   * Defines the image of the `ObjectPage`. You can pass a path to an image or an `Avatar` component.
   */
  image?: string | ReactElement<unknown>;
  /**
   * The header content displays app-specific contextual information. You build the content using containers.
   The containers are arranged inline with a left float. If the containers do not all fit on one line, those on the right wrap to the line below.
   The header content is hidden by scrolling down the page or clicking the collapse indicator.
   */
  headerContent?: ReactNode;
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
  // todo delete
  // /**
  //  * Defines whether the header is displayed.
  //  */
  // noHeader?: boolean;
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
    headerContentPinnable,
    headerContent
  } = props;

  const classes = useStyles();

  const firstSectionId = safeGetChildrenArray<ReactElement>(children)[0]?.props?.id;
  const [internalSelectedSectionId, setInternalSelectedSectionId] = useState(selectedSectionId ?? firstSectionId);
  const [selectedSubSectionId, setSelectedSubSectionId] = useState(props.selectedSubSectionId);
  const [headerPinned, setHeaderPinned] = useState(alwaysShowContentHeader);
  const isProgrammaticallyScrolled = useRef(false);

  const objectPageRef: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
  const topHeaderRef: RefObject<HTMLDivElement> = useRef();
  const headerContentRef: RefObject<HTMLDivElement> = useConsolidatedRef(header?.ref);
  const anchorBarRef: RefObject<HTMLDivElement> = useRef();

  const isRTL = useIsRTL(objectPageRef);
  //todo pinned is not working

  // observe heights of header parts
  //todo objectPageRef needed
  //todo anchorBarRef needed
  const { topHeaderHeight, headerContentHeight, anchorBarHeight, totalHeaderHeight } = useObserveHeights(
    objectPageRef,
    topHeaderRef,
    headerContentRef,
    anchorBarRef,
    //todo
    { noHeader: false }
  );

  // *****
  // SECTION SELECTION
  // ****
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
      return React.cloneElement(image, {
        size: AvatarSize.L,
        className: image.props?.className ? `${classes.headerImage} ${image.props?.className}` : classes.headerImage
      } as unknown);
    }
  }, [image, classes.headerImage, classes.image, imageShapeCircle]);

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
          objectPageRef.current?.scrollTo({
            top: childOffset - topHeaderHeight - anchorBarHeight - (headerPinned ? headerContentHeight : 0) - 16,
            behavior: 'smooth'
          });
        }
      }
      isProgrammaticallyScrolled.current = false;
    },
    [firstSectionId, objectPageRef, topHeaderHeight, anchorBarHeight, headerPinned, headerContentHeight]
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
      const childOffset = objectPageRef.current?.querySelector<HTMLElement>(
        `div[id="ObjectPageSubSection-${selectedSubSectionId}"]`
      )?.offsetTop;
      if (!isNaN(childOffset)) {
        objectPageRef.current?.scrollTo({
          top: childOffset - topHeaderHeight - anchorBarHeight - (headerPinned ? headerContentHeight : 0) - 16,
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
    onSelectedSectionChanged(
      enrichEventWithDetails(e, {
        selectedSectionIndex: e.detail.index,
        selectedSectionId: e.detail.props.id,
        section: e.detail
      })
    );
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

  const onToggleHeaderContentVisibility = useCallback(
    (e) => {
      // const srcElement = e.target;
      // const shouldHideHeader = srcElement.icon === 'slim-arrow-up';
      // toggleHeader(!shouldHideHeader);
      if (!e.detail.visible) {
        objectPageRef.current?.classList.add(classes.headerCollapsed);
      } else {
        objectPageRef.current?.classList.remove(classes.headerCollapsed);
      }

      //todo still necessary?
      // requestAnimationFrame(() => {
      //   if (objectPageRef.current?.scrollTop > 0 && !shouldHideHeader) {
      //     const prevHeaderTop = headerContentRef.current.style.top;
      //     headerContentRef.current.style.top = `${topHeaderHeight}px`;
      //     const prevAnchorTop = anchorBarRef.current.style.top;
      //     anchorBarRef.current.style.top = `${headerContentRef.current.offsetHeight + topHeaderHeight}px`;
      //     objectPageRef.current?.addEventListener(
      //       'scroll',
      //       (e) => {
      //         if (prevHeaderTop ?? true) {
      //           headerContentRef.current.style.top = prevHeaderTop;
      //         } else {
      //           headerContentRef.current.style.removeProperty('top');
      //         }
      //         if (prevAnchorTop ?? true) {
      //           anchorBarRef.current.style.top = prevAnchorTop;
      //         } else {
      //           anchorBarRef.current.style.removeProperty('top');
      //         }
      //       },
      //       { once: true }
      //     );
      //   }
      // });
    },
    [objectPageRef, classes.headerCollapsed, headerContentHeight, topHeaderHeight]
  );

  const objectPageClasses = StyleClassHelper.of(classes.objectPage, GlobalStyleClasses.sapScrollBar);
  if (className) {
    objectPageClasses.put(className);
  }

  if (showTitleInHeaderContent) {
    objectPageClasses.put(classes.titleInHeaderContent);
  }

  if (mode === ObjectPageMode.IconTabBar) {
    objectPageClasses.put(classes.iconTabBarMode);
  }

  const passThroughProps = usePassThroughHtmlProps(props, ['onSelectedSectionChanged']);

  useEffect(() => {
    //todo check this whole behavior and what of it is still needed
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

  //todo check if all header styles are still needed
  const headerClasses = StyleClassHelper.of(classes.header);
  if (isIE()) {
    headerClasses.put(classes.iEClass);
  }

  //todo check if needed
  const anchorBarPositionTop =
    /*noHeader
    ? 0
    :*/ headerPinned || isIE() ? topHeaderHeight + headerContentHeight : topHeaderHeight;

  const renderTitleSection = useCallback(() => {
    if (title?.props && title.props?.showSubheadingRight === undefined) {
      return React.cloneElement(title, { showSubheadingRight: true });
    }
    return title;
  }, [title]);

  const renderHeaderContentSection = useCallback(() => {
    if (header?.props) {
      return React.cloneElement(header, {
        topHeaderHeight,
        headerPinned,
        children: (
          //todo maybe use resp grid here and set img always as first item
          <div className={classes.headerContainer} ref={headerContentRef}>
            {!showTitleInHeaderContent && avatar}
            {header.props.children && <div data-component-name="ObjectPage-HeaderContent">{header.props.children}</div>}
          </div>
        )
      });
    }
  }, [header, topHeaderHeight, headerPinned, showTitleInHeaderContent, avatar, headerContentRef]);

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

  return (
    <div
      data-component-name="ObjectPage"
      slot={slot}
      className={objectPageClasses.toString()}
      style={style}
      ref={objectPageRef}
      title={tooltip}
      {...passThroughProps}
    >
      <header
        ref={topHeaderRef}
        role="banner"
        aria-roledescription="Object Page header"
        className={headerClasses.className}
      >
        {image && headerContentHeight === 0 && (
          <CollapsedAvatar image={image} imageShapeCircle={imageShapeCircle} style={{ [paddingLeftRtl]: '1rem' }} />
        )}
        {renderTitleSection()}
      </header>
      {/*todo header in title*/}
      {renderHeaderContentSection()}
      {/*todo check header for props from title comp --> showTitleInHeaderContent */}
      <div
        className={classes.anchorBar}
        style={{ top: headerPinned ? `${topHeaderHeight + headerContentHeight}px` : `${topHeaderHeight}px` }}
      >
        {/*todo all props, ?div necessary*/}
        <DynamicPageAnchorBar
          headerContentHeight={/*!expanded ? 0 : 1*/ headerContentHeight}
          headerContentPinnable={true}
          showHideHeaderButton={true}
          onToggleHeaderContentVisibility={onToggleHeaderContentVisibility}
          setHeaderPinned={setHeaderPinned}
          headerPinned={headerPinned}
          onHoverToggleButton={() => {}}
        />
      </div>
      <div
        ref={anchorBarRef}
        style={{
          //todo scrolling issue
          position: 'sticky',
          top: headerPinned ? `${topHeaderHeight + headerContentHeight}px` : `${topHeaderHeight}px`
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
      {/*todo still needed?*/}
      {isIE() && (
        <div
          className={classes.iEBackgroundElement}
          style={{
            height: `${anchorBarPositionTop + anchorBarRef.current?.offsetHeight ?? 0}px`,
            width: `calc(100% - ${
              objectPageRef?.current?.clientHeight < objectPageRef?.current?.scrollHeight ? '18px' : '0px'
            })`
          }}
        />
      )}
      {isIE() ? (
        <div style={{ marginTop: `${anchorBarPositionTop + anchorBarRef.current?.offsetHeight ?? 0}px` }}>
          {mode === ObjectPageMode.IconTabBar ? getSectionById(children, internalSelectedSectionId) : children}
        </div>
      ) : mode === ObjectPageMode.IconTabBar ? (
        getSectionById(children, internalSelectedSectionId)
      ) : (
        children
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
