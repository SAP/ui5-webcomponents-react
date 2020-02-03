import '@ui5/webcomponents-icons/dist/icons/navigation-down-arrow';
import '@ui5/webcomponents-icons/dist/icons/navigation-up-arrow';
import { IScroller } from '@ui5/webcomponents-react-base/interfaces/IScroller';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { Scroller } from '@ui5/webcomponents-react-base/lib/Scroller';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { getScrollBarWidth } from '@ui5/webcomponents-react-base/lib/Utils';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { ObjectPageMode } from '@ui5/webcomponents-react/lib/ObjectPageMode';
import debounce from 'lodash.debounce';
import React, {
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
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { ObjectPageSectionPropTypes } from '../ObjectPageSection';
import { ObjectPageSubSectionPropTypes } from '../ObjectPageSubSection';
import { CollapsedAvatar } from './CollapsedAvatar';
import styles from './ObjectPage.jss';
import { ObjectPageAnchorButton } from './ObjectPageAnchorButton';
import { ObjectPageHeader } from './ObjectPageHeader';
import { ObjectPageScrollBar } from './ObjectPageScrollBar';
import {
  bindScrollEvent,
  findSectionIndexById,
  getProportionateScrollTop,
  removeScrollEvent,
  safeGetChildrenArray
} from './ObjectPageUtils';

export interface ObjectPagePropTypes extends CommonProps {
  title?: string;
  subTitle?: string;
  image?: string | ReactElement<unknown>;
  imageShapeCircle?: boolean;
  headerActions?: Array<ReactElement<unknown>>;
  renderHeaderContent?: () => JSX.Element;
  children?: ReactElement<ObjectPageSectionPropTypes> | Array<ReactElement<ObjectPageSectionPropTypes>>;
  mode?: ObjectPageMode;
  selectedSectionId?: string;
  selectedSubSectionId?: string;
  onSelectedSectionChanged?: (event: Event) => void;
  showHideHeaderButton?: boolean;
  alwaysShowContentHeader?: boolean;
  noHeader?: boolean;
  showTitleInHeaderContent?: boolean;
  scrollerRef?: RefObject<IScroller>;
  renderBreadcrumbs?: () => JSX.Element;
  renderKeyInfos?: () => JSX.Element;
}

const useStyles = createUseStyles(styles, { name: 'ObjectPage' });
const defaultScrollbarWidth = 12;

/**
 * <code>import { ObjectPage } from '@ui5/webcomponents-react/lib/ObjectPage';</code>
 */
const ObjectPage: FC<ObjectPagePropTypes> = forwardRef((props: ObjectPagePropTypes, ref: RefObject<HTMLDivElement>) => {
  const {
    title,
    image,
    subTitle,
    headerActions,
    renderHeaderContent: renderHeaderContentProp,
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
    noHeader,
    alwaysShowContentHeader,
    showTitleInHeaderContent,
    scrollerRef,
    renderBreadcrumbs,
    renderKeyInfos
  } = props;

  const [selectedSectionIndex, setSelectedSectionIndex] = useState(findSectionIndexById(children, selectedSectionId));
  const [selectedSubSectionId, setSelectedSubSectionId] = useState(props.selectedSubSectionId);
  const [expandHeaderActive, setExpandHeaderActive] = useState(false);
  const [collapsedHeader, setCollapsedHeader] = useState(renderHeaderContentProp === null);

  const objectPage: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
  const fillerDivDomRef: RefObject<HTMLDivElement> = useRef();
  const scrollBar: RefObject<HTMLDivElement> = useRef();
  const contentContainer: RefObject<HTMLDivElement> = useRef();
  const topHeader: RefObject<HTMLDivElement> = useRef();
  const innerHeader: RefObject<HTMLDivElement> = useRef();
  const innerScrollBar: RefObject<HTMLDivElement> = useRef();
  const contentScrollContainer: RefObject<HTMLDivElement> = useRef();
  const outerContentContainer: RefObject<HTMLDivElement> = useRef();
  const collapsedHeaderFiller: RefObject<HTMLDivElement> = useRef();
  const lastScrolledContainer = useRef();
  const hideHeaderButtonPressed = useRef(false);
  const stableContentOnScrollRef = useRef(null);
  const stableBarOnScrollRef = useRef(null);
  const scroller = useConsolidatedRef<IScroller>(scrollerRef);
  const [scrollbarWidth, setScrollbarWidth] = useState(defaultScrollbarWidth);
  const isMounted = useRef(false);

  const classes = useStyles();

  useEffect(() => {
    let selectedIndex = findSectionIndexById(children, selectedSectionId);
    if (selectedSectionIndex !== selectedIndex) {
      setSelectedSectionIndex(selectedIndex);
    }
  }, [selectedSectionId]);

  const adjustDummyDivHeight = useCallback(() => {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        if (!objectPage.current) {
          return;
        }

        const sections = objectPage.current.querySelectorAll('[id^="ObjectPageSection"]');
        if (!sections || sections.length < 1) {
          return;
        }

        const lastSectionDomRef = sections[sections.length - 1];
        const subSections = lastSectionDomRef.querySelectorAll('[id^="ObjectPageSubSection"]');

        let lastSubSectionHeight;
        if (subSections.length > 0) {
          lastSubSectionHeight = (subSections[subSections.length - 1] as HTMLElement).offsetHeight;
        } else {
          lastSubSectionHeight =
            (lastSectionDomRef as HTMLElement).offsetHeight -
            (lastSectionDomRef.querySelector("[role='heading']") as HTMLElement).offsetHeight;
        }

        let heightDiff = contentContainer.current.offsetHeight - lastSubSectionHeight;

        heightDiff = heightDiff > 0 ? heightDiff : 0;
        fillerDivDomRef.current.style.height = `${heightDiff}px`;
        requestAnimationFrame(() => {
          if (!contentScrollContainer.current || !topHeader.current) return;
          const scrollbarContainerHeight =
            contentScrollContainer.current.getBoundingClientRect().height +
            topHeader.current.getBoundingClientRect().height;
          innerScrollBar.current.style.height = `${scrollbarContainerHeight}px`;
        });
        resolve();
      });
    });
  }, [objectPage, contentContainer, fillerDivDomRef, contentScrollContainer, topHeader, innerScrollBar]);

  const adjustContentContainerHeight = useCallback(() => {
    if (contentContainer.current && outerContentContainer.current) {
      contentContainer.current.style.height = `${outerContentContainer.current.getBoundingClientRect().height}px`;
    }
  }, [outerContentContainer.current, contentContainer.current]);

  // @ts-ignore
  const observer = useRef(new ResizeObserver(adjustDummyDivHeight));
  // @ts-ignore
  const outerContainerObserver = useRef(new ResizeObserver(adjustContentContainerHeight));

  const renderHideHeaderButton = () => {
    if (!showHideHeaderButton || renderHeaderContentProp === null || noHeader) return null;

    return (
      <Button
        icon={!collapsedHeader || expandHeaderActive ? 'navigation-up-arrow' : 'navigation-down-arrow'}
        onClick={changeHeader}
        className={classes.toggleHeaderButton}
      />
    );
  };

  const renderAnchorBar = () => {
    return (
      <section className={classes.anchorBar} role="navigation">
        {safeGetChildrenArray(children).map((section, index) => {
          return (
            <ObjectPageAnchorButton
              key={`Anchor-${section.props?.id}`}
              section={section}
              index={index}
              selected={selectedSectionIndex === index}
              mode={mode}
              onSectionSelected={handleOnSectionSelected}
              onSubSectionSelected={handleOnSubSectionSelected}
              collapsedHeader={collapsedHeader}
            />
          );
        })}
        {renderHideHeaderButton()}
      </section>
    );
  };

  const changeHeader = useCallback(() => {
    hideHeaderButtonPressed.current = true;

    if (!expandHeaderActive && collapsedHeader) {
      setExpandHeaderActive(true);
      return;
    }

    if (expandHeaderActive && collapsedHeader) {
      setExpandHeaderActive(false);
      return;
    }

    setCollapsedHeader(!collapsedHeader);
  }, [collapsedHeader, expandHeaderActive]);

  const renderHeader = () => {
    return (
      <ObjectPageHeader
        image={image}
        classes={classes}
        imageShapeCircle={imageShapeCircle}
        showTitleInHeaderContent={showTitleInHeaderContent}
        renderHeaderContentProp={renderHeaderContentProp}
        renderBreadcrumbs={renderBreadcrumbs}
        renderKeyInfos={renderKeyInfos}
        title={title}
        subTitle={subTitle}
      />
    );
  };

  const renderTopHeader = () => {
    if (noHeader) {
      return renderAnchorBar();
    }
    return (
      <>
        <header className={classes.titleBar}>
          {((collapsedHeader && !expandHeaderActive && !alwaysShowContentHeader) || !showTitleInHeaderContent) && (
            <FlexBox alignItems={FlexBoxAlignItems.Center}>
              {image && collapsedHeader && !expandHeaderActive && !alwaysShowContentHeader && (
                <div className={classes.avatar}>
                  <CollapsedAvatar image={image} imageShapeCircle={imageShapeCircle} />
                </div>
              )}
              <span className={classes.container}>
                <FlexBox direction={FlexBoxDirection.Column}>
                  {renderBreadcrumbs && renderBreadcrumbs()}
                  <FlexBox>
                    <h1 className={classes.title}>{title}</h1>
                    <span className={classes.subTitle}>{subTitle}</span>
                    <div className={classes.keyInfos}>{renderKeyInfos && renderKeyInfos()}</div>
                  </FlexBox>
                </FlexBox>
              </span>
            </FlexBox>
          )}
          {(expandHeaderActive || alwaysShowContentHeader) && renderHeader()}
        </header>
        {(collapsedHeader || alwaysShowContentHeader) && renderAnchorBar()}
      </>
    );
  };

  const renderInnerHeader = () => {
    if (noHeader || collapsedHeader || expandHeaderActive || alwaysShowContentHeader) {
      return null;
    }
    return (
      <>
        {renderHeader()}
        {renderAnchorBar()}
      </>
    );
  };

  // register resize handler
  useEffect(() => {
    observer.current.observe(contentScrollContainer.current);
    return () => observer.current.disconnect();
  }, [contentScrollContainer.current]);

  useEffect(() => {
    outerContainerObserver.current.observe(outerContentContainer.current);
    return () => outerContainerObserver.current.disconnect();
  }, [outerContainerObserver.current]);

  useEffect(() => {
    adjustDummyDivHeight();
  }, [noHeader, mode, alwaysShowContentHeader, expandHeaderActive, adjustDummyDivHeight]);

  useEffect(() => {
    if (selectedSubSectionId && scroller.current) {
      scroller.current.scrollToElementById(`ObjectPageSubSection-${selectedSubSectionId}`, 45);
    }
  }, [selectedSubSectionId]);

  useEffect(() => {
    if (props.selectedSubSectionId) {
      setSelectedSubSectionId(props.selectedSubSectionId);
      if (mode === ObjectPageMode.IconTabBar) {
        // get section index

        let index;
        safeGetChildrenArray<ReactElement<ObjectPageSectionPropTypes>>(children).forEach((section, sectionIndex) => {
          if (React.isValidElement(section) && section.props && section.props.children) {
            safeGetChildrenArray(section.props.children).forEach(
              (subSection: ReactElement<ObjectPageSubSectionPropTypes>) => {
                if (
                  React.isValidElement(subSection) &&
                  subSection.props &&
                  subSection.props.id === props.selectedSubSectionId
                ) {
                  index = sectionIndex;
                }
              }
            );
          }
        });

        if (index) {
          setSelectedSectionIndex(index);
        }
      }
    }
  }, [props.selectedSubSectionId, setSelectedSectionIndex, setSelectedSubSectionId, children, mode]);

  useEffect(() => {
    if (!isMounted.current) return;

    if (mode === ObjectPageMode.Default && scroller.current) {
      if (selectedSectionIndex > 0) {
        // @ts-ignore
        const id = safeGetChildrenArray(children)[selectedSectionIndex].props.id;
        if (id) {
          scroller.current.scrollToElementById(`ObjectPageSection-${id}`, 45);
        }
      } else {
        scroller.current.scrollToTop();
      }
    }
    if (mode === ObjectPageMode.IconTabBar) {
      adjustDummyDivHeight();
    }
  }, [selectedSectionIndex, isMounted, adjustDummyDivHeight]);

  const checkForHeaderCollapse = useCallback(
    // activeContainer contains the scrollContainer thats being actively scrolled
    // passiveContainer contains the container that needs to reflect activeContainers scroll position
    (activeContainer, activeInnerContainer, passiveContainer, passiveInnerContainer, e) => {
      if (noHeader || alwaysShowContentHeader) {
        passiveContainer.current.scrollTop = alwaysShowContentHeader
          ? e.target.scrollTop
          : getProportionateScrollTop(activeContainer, passiveContainer, e.target.scrollTop);
        scroller.current.scroll(e);
      } else {
        if (expandHeaderActive) {
          setExpandHeaderActive(false);
        }
        const thresholdCollapse = 64;
        const thresholdExpand = 52;
        const baseScrollValue =
          activeContainer.current === contentContainer.current
            ? e.target.scrollTop
            : getProportionateScrollTop(activeInnerContainer, passiveInnerContainer, e.target.scrollTop);

        let shouldBeCollapsed = !collapsedHeader && baseScrollValue > thresholdCollapse;
        let shouldBeExpanded = collapsedHeader && baseScrollValue < thresholdExpand && renderHeaderContentProp !== null;

        if (shouldBeCollapsed || shouldBeExpanded) {
          lastScrolledContainer.current = activeContainer.current;
          if (shouldBeCollapsed) {
            collapsedHeaderFiller.current.style.height = `${64}px`;
          } else {
            collapsedHeaderFiller.current.style.height = `${0}px`;
          }
          lastScrolledContainer.current = activeContainer.current;
          removeScrollEvent(contentContainer, stableContentOnScrollRef);
          removeScrollEvent(scrollBar, stableBarOnScrollRef);
          setCollapsedHeader(shouldBeCollapsed);
        } else {
          const newScrollValue =
            collapsedHeader && e.target.scrollTop > thresholdCollapse + 50
              ? e.target.scrollTop
              : getProportionateScrollTop(activeInnerContainer, passiveInnerContainer, e.target.scrollTop);

          passiveContainer.current.scrollTop = newScrollValue;
          scroller.current.scroll(e);
        }
      }
    },
    [
      innerHeader.current,
      collapsedHeader,
      contentContainer.current,
      collapsedHeaderFiller.current,
      setCollapsedHeader,
      scrollBar.current,
      scroller.current
    ]
  );

  useEffect(() => {
    adjustDummyDivHeight().then(() => {
      if (!hideHeaderButtonPressed.current) {
        removeScrollEvent(contentContainer, stableContentOnScrollRef);
        removeScrollEvent(scrollBar, stableBarOnScrollRef);
        if (lastScrolledContainer.current === contentContainer.current) {
          contentContainer.current.scrollTop = collapsedHeader ? 64 + 2 : 64 - 2;
        } else {
          contentContainer.current.scrollTop = collapsedHeader ? 64 + 2 : 64 - 2;
          scrollBar.current.scrollTop = getProportionateScrollTop(
            contentScrollContainer,
            innerScrollBar,
            contentContainer.current.scrollTop
          );
        }
        requestAnimationFrame(() => {
          bindScrollEvent(contentContainer, stableContentOnScrollRef);
          bindScrollEvent(scrollBar, stableBarOnScrollRef);
        });
      }
      hideHeaderButtonPressed.current = false;
    });
  }, [collapsedHeader]);

  useEffect(() => {
    if (!contentContainer.current) return;

    removeScrollEvent(contentContainer, stableContentOnScrollRef);
    removeScrollEvent(scrollBar, stableBarOnScrollRef);

    stableContentOnScrollRef.current = function innerOnScroll(e) {
      requestAnimationFrame(() => {
        removeScrollEvent(scrollBar, stableBarOnScrollRef);
        checkForHeaderCollapse(contentContainer, contentScrollContainer, scrollBar, innerScrollBar, e);
        requestAnimationFrame(() => {
          bindScrollEvent(scrollBar, stableBarOnScrollRef);
        });
      });
    };

    stableBarOnScrollRef.current = function innerBarOnScroll(e) {
      requestAnimationFrame(() => {
        removeScrollEvent(contentContainer, stableContentOnScrollRef);
        checkForHeaderCollapse(scrollBar, innerScrollBar, contentContainer, contentScrollContainer, e);

        requestAnimationFrame(() => {
          bindScrollEvent(contentContainer, stableContentOnScrollRef);
        });
      });
    };

    bindScrollEvent(contentContainer, stableContentOnScrollRef);
    bindScrollEvent(scrollBar, stableBarOnScrollRef);
  }, [
    noHeader,
    checkForHeaderCollapse,
    alwaysShowContentHeader,
    scrollBar.current,
    innerScrollBar.current,
    innerHeader.current,
    contentContainer.current,
    contentScrollContainer.current,
    collapsedHeaderFiller.current,
    collapsedHeader,
    setCollapsedHeader,
    expandHeaderActive,
    getProportionateScrollTop
  ]);

  const fireOnSelectedChangedEvent = debounce((e) => {
    onSelectedSectionChanged(
      Event.of(null, e.getOriginalEvent(), {
        selectedSectionIndex: e.getParameter('index'),
        selectedSectionId: e.getParameter('props').id,
        section: e.getParameters()
      })
    );
  }, 500);

  const handleOnSectionSelected = useCallback(
    (e) => {
      if (mode === ObjectPageMode.IconTabBar) {
        setSelectedSectionIndex(e.getParameter('index'));
      }
      fireOnSelectedChangedEvent(e);
    },
    [onSelectedSectionChanged]
  );

  const handleOnSubSectionSelected = useCallback(
    (e) => {
      if (mode === ObjectPageMode.IconTabBar) {
        const sectionIndex = e.getParameter('sectionIndex');
        const subSection = e.getParameter('subSection');
        setSelectedSectionIndex(sectionIndex);
        setSelectedSubSectionId(subSection.props.id);
      }
    },
    [mode]
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      const scrollbarWidth = getScrollBarWidth();
      if (scrollbarWidth && scrollbarWidth !== 0 && scrollbarWidth !== defaultScrollbarWidth) {
        setScrollbarWidth(scrollbarWidth);
      }
    });
    isMounted.current = true;
  }, [isMounted]);

  // useEffect(() => {
  //   if (outerContentContainer.current && outerContentContainer.current) {
  //     contentContainer.current.style.height = `${outerContentContainer.current.getBoundingClientRect().height}px`;
  //   }
  // }, [outerContentContainer.current, contentContainer.current]);

  const objectPageClasses = StyleClassHelper.of(classes.objectPage);
  if (className) {
    objectPageClasses.put(className);
  }

  if (showTitleInHeaderContent) {
    objectPageClasses.put(classes.titleInHeaderContent);
  }

  const headerClasses = StyleClassHelper.of(classes.header);
  if (alwaysShowContentHeader || expandHeaderActive) {
    headerClasses.put(classes.alwaysVisibleHeader);
  }

  const scrollBarWidthPadding = useMemo(() => {
    return {
      paddingRight: `${scrollbarWidth}px`
    };
  }, [scrollbarWidth]);

  const contentContainerStyles = useMemo(() => {
    return {
      marginRight: `-${scrollbarWidth}px`
    };
  }, [scrollbarWidth]);

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <div
      data-component-name="ObjectPage"
      slot={slot}
      className={objectPageClasses.toString()}
      style={style}
      ref={objectPage}
      title={tooltip}
      {...passThroughProps}
    >
      <Scroller ref={scroller} scrollContainer={contentContainer}>
        <ObjectPageScrollBar scrollBarRef={scrollBar} innerScrollBarRef={innerScrollBar} width={scrollbarWidth} />
        <header
          ref={topHeader}
          role="banner"
          aria-roledescription="Object page header"
          style={scrollBarWidthPadding}
          className={headerClasses.valueOf()}
        >
          <span className={classes.actions}>{headerActions}</span>
          {renderTopHeader()}
        </header>
        <div ref={outerContentContainer} className={classes.outerContentContainer}>
          <div
            id="ObjectPageContent"
            ref={contentContainer}
            className={classes.contentContainer}
            style={contentContainerStyles}
          >
            <div ref={contentScrollContainer} className={classes.contentScrollContainer}>
              <div ref={collapsedHeaderFiller} />
              <div ref={innerHeader}>{renderInnerHeader()}</div>
              <section className={classes.sectionsContainer}>
                {mode === ObjectPageMode.IconTabBar ? safeGetChildrenArray(children)[selectedSectionIndex] : children}
              </section>
              <div className={classes.fillerDiv} ref={fillerDivDomRef} />
            </div>
          </div>
        </div>
      </Scroller>
    </div>
  );
});

ObjectPage.defaultProps = {
  title: '',
  subTitle: '',
  image: null,
  imageShapeCircle: false,
  headerActions: [],
  renderHeaderContent: null,
  mode: ObjectPageMode.Default,
  onSelectedSectionChanged: () => {},
  showHideHeaderButton: false,
  selectedSectionId: null,
  noHeader: false
};

ObjectPage.displayName = 'ObjectPage';

export { ObjectPage };
