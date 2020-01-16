import '@ui5/webcomponents-icons/dist/icons/navigation-down-arrow.js';
import '@ui5/webcomponents-icons/dist/icons/navigation-up-arrow.js';
import { IScroller } from '@ui5/webcomponents-react-base/interfaces/IScroller';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { Scroller } from '@ui5/webcomponents-react-base/lib/Scroller';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { getScrollBarWidth } from '@ui5/webcomponents-react-base/lib/Utils';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { ObjectPageMode } from '@ui5/webcomponents-react/lib/ObjectPageMode';
import debounce from 'lodash.debounce';
import React, {
  Children,
  CSSProperties,
  FC,
  forwardRef,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { ObjectPageSubSectionPropTypes } from '../ObjectPageSubSection';
import { CollapsedAvatar } from './CollapsedAvatar';
import styles from './ObjectPage.jss';
import { ObjectPageAnchorButton } from './ObjectPageAnchorButton';

export interface ObjectPagePropTypes extends CommonProps {
  title?: string;
  subTitle?: string;
  image?: string | ReactNode;
  imageShapeCircle?: boolean;
  headerActions?: Array<ReactElement<any>>;
  renderHeaderContent?: () => JSX.Element;
  children?: ReactNode | ReactNodeArray;
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

const useStyles = createUseStyles<keyof ReturnType<typeof styles>>(styles, { name: 'ObjectPage' });
const defaultScrollbarWidth = 12;

const findSectionIndexById = (sections, id) => {
  const index = Children.toArray(sections).findIndex(
    (objectPageSection: ReactElement<any>) => objectPageSection.props.id === id
  );
  if (index === -1) {
    return 0;
  }
  return index;
};

const positionRelativStyle: CSSProperties = { position: 'relative' };

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
  const [isMounted, setIsMounted] = useState(false);
  const [collapsedHeader, setCollapsedHeader] = useState(renderHeaderContentProp === null);
  const theme = useTheme();

  const objectPage: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
  const fillerDivDomRef: RefObject<HTMLDivElement> = useRef();
  const scrollBar: RefObject<HTMLDivElement> = useRef();
  const contentContainer: RefObject<HTMLDivElement> = useRef();
  const topHeader: RefObject<HTMLDivElement> = useRef();
  const innerHeader: RefObject<HTMLDivElement> = useRef();
  const innerScrollBar: RefObject<HTMLDivElement> = useRef();
  const contentScrollContainer: RefObject<HTMLDivElement> = useRef();
  const collapsedHeaderFiller: RefObject<HTMLDivElement> = useRef();
  const lastScrolledContainer = useRef();
  const hideHeaderButtonPressed = useRef(false);
  const stableContentOnScrollRef = useRef(null);
  const stableBarOnScrollRef = useRef(null);
  const scroller = useConsolidatedRef<IScroller>(scrollerRef);
  const [scrollbarWidth, setScrollbarWidth] = useState(defaultScrollbarWidth);

  const classes = useStyles();

  const setScrollbarHeight = () => {
    requestAnimationFrame(() => {
      const scrollbarContainerHeight =
        contentScrollContainer.current.getBoundingClientRect().height +
        topHeader.current.getBoundingClientRect().height;
      innerScrollBar.current.style.height = `${scrollbarContainerHeight}px`;
    });
  };

  useEffect(() => {
    let selectedIndex = findSectionIndexById(children, selectedSectionId);
    if (selectedIndex === -1) {
      selectedIndex = 0;
    }

    if (selectedSectionIndex !== selectedIndex) {
      setSelectedSectionIndex(selectedIndex);
    }
  }, [selectedSectionId]);

  let content = children;
  if (mode === ObjectPageMode.IconTabBar) {
    content = Children.toArray(children)[selectedSectionIndex];
  }

  const adjustDummyDivHeight = () => {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        if (!objectPage.current) {
          // in case componentWillUnmount didn´t fire
          observer.current.disconnect();
          return;
        }

        const sections = objectPage.current.querySelectorAll('[id^="ObjectPageSection"]');
        if (!sections || sections.length < 1) {
          return;
        }

        const lastSectionDomRef = sections[sections.length - 1];
        const subSections = lastSectionDomRef.querySelectorAll('[id^="ObjectPageSubSection"]');

        let lastSubSectionHeight = null;
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
        setScrollbarHeight();
        resolve();
      });
    });
  };

  // @ts-ignore
  const observer = useRef(new ResizeObserver(adjustDummyDivHeight));

  const renderAnchorBar = () => {
    return (
      <section className={classes.anchorBar} role="navigation">
        {Children.map(children, (section, index) => {
          return (
            <ObjectPageAnchorButton
              key={`Anchor-${((section as any).props || {}).id}`}
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

  const renderHideHeaderButton = () => {
    if (!showHideHeaderButton || renderHeaderContentProp === null) return null;

    const { contentDensity } = theme as JSSTheme;

    return (
      <Button
        style={
          {
            position: 'absolute',
            '--_ui5_button_compact_height': '1rem',
            lineHeight: '2.5rem',
            bottom: contentDensity === ContentDensity.Cozy ? 'calc(-2.5rem / 2)' : 'calc(-1.25rem / 2)',
            left: 'calc(50% - 1rem)'
          } as any
        }
        icon={!collapsedHeader || expandHeaderActive ? 'navigation-up-arrow' : 'navigation-down-arrow'}
        onClick={changeHeader}
      />
    );
  };

  const renderHeader = () => {
    let avatar = null;

    if (image) {
      if (typeof image === 'string') {
        avatar = (
          <span
            className={classes.headerImage}
            style={{ borderRadius: imageShapeCircle ? '50%' : 0, overflow: 'hidden' }}
          >
            <img src={image} className={classes.image} alt="Company Logo" />
          </span>
        );
      } else {
        // @ts-ignore
        avatar = React.cloneElement(image, {
          size: AvatarSize.L
        });
      }
    }

    if (showTitleInHeaderContent) {
      const headerContents = renderHeaderContentProp && renderHeaderContentProp();
      let firstElement;
      let contents = [];

      if (headerContents?.type === React.Fragment) {
        [firstElement, ...contents] = React.Children.toArray(headerContents.props.children);
      } else {
        firstElement = headerContents;
      }
      return (
        <div className={classes.contentHeader}>
          <div className={classes.headerContent}>
            <div className={classes.flexBoxRow}>
              <div>{avatar}</div>
              <div className={classes.flexBoxColumn}>
                <div>{renderBreadcrumbs && renderBreadcrumbs()}</div>
                <div className={classes.flexBoxRow}>
                  <div className={classes.flexBoxColumn}>
                    <h1 className={classes.title}>{title}</h1>
                    <span className={classes.subTitle}>{subTitle}</span>
                    <span> {firstElement}</span>
                  </div>
                  <div className={classes.flexBoxRow}>
                    {contents.map((c, index) => (
                      <div key={`customContent-${index}`} className={classes.headerCustomContentItem}>
                        {c}
                      </div>
                    ))}
                  </div>
                  <div className={classes.keyInfos}>{renderKeyInfos && renderKeyInfos()}</div>
                </div>
              </div>
            </div>
          </div>
          {!expandHeaderActive && !alwaysShowContentHeader && renderHideHeaderButton()}
        </div>
      );
    }

    return (
      <div style={positionRelativStyle} className={classes.contentHeader}>
        <div className={classes.headerContent}>
          {avatar}
          {}
          {renderHeaderContentProp && <span className={classes.headerCustomContent}>{renderHeaderContentProp()}</span>}
        </div>
        {!expandHeaderActive && !alwaysShowContentHeader && renderHideHeaderButton()}
      </div>
    );
  };

  const renderTopHeader = () => {
    if (noHeader && !alwaysShowContentHeader) {
      return renderAnchorBar();
    }
    return (
      <>
        <header className={classes.titleBar}>
          {((collapsedHeader && !expandHeaderActive && !alwaysShowContentHeader) || !showTitleInHeaderContent) && (
            <div className={classes.flexBoxCenter}>
              {image && collapsedHeader && !expandHeaderActive && !alwaysShowContentHeader && (
                <div className={classes.avatar}>
                  <CollapsedAvatar image={image} imageShapeCircle={imageShapeCircle} />
                </div>
              )}
              <span className={classes.container}>
                <div className={classes.flexBoxColumn}>
                  {renderBreadcrumbs && renderBreadcrumbs()}
                  <div className={classes.flexBoxRow}>
                    <h1 className={classes.title}>{title}</h1>
                    <span className={classes.subTitle}>{subTitle}</span>
                    <div className={classes.keyInfos}>{renderKeyInfos && renderKeyInfos()}</div>
                  </div>
                </div>
              </span>
            </div>
          )}
          {(expandHeaderActive || alwaysShowContentHeader) && renderHeader()}
          {collapsedHeader && !alwaysShowContentHeader && renderHideHeaderButton()}
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
  }, [adjustDummyDivHeight]);

  useLayoutEffect(() => {
    if (!isMounted) return;
    adjustDummyDivHeight();
  }, [noHeader, mode, alwaysShowContentHeader]);

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
        React.Children.toArray(children).forEach((section, sectionIndex) => {
          if (React.isValidElement(section) && section.props && section.props.children) {
            React.Children.toArray(section.props.children).forEach(
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
  }, [props.selectedSubSectionId, scroller.current, setSelectedSectionIndex, setSelectedSubSectionId, children, mode]);

  useEffect(() => {
    if (!isMounted && selectedSectionIndex < 1) return;

    if (mode === ObjectPageMode.Default && scroller.current) {
      if (selectedSectionIndex > 0) {
        // @ts-ignore
        const id = Children.toArray(children)[selectedSectionIndex].props.id;
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
  }, [selectedSectionIndex]);

  const getProportionateScrollTop = useCallback((activeContainer, passiveContainer, base) => {
    const activeHeight = activeContainer.current.getBoundingClientRect().height;
    const passiveHeight = passiveContainer.current.getBoundingClientRect().height;

    return (base / activeHeight) * passiveHeight;
  }, []);

  const bindScrollEvent = useCallback((scrollContainer, handler) => {
    if (scrollContainer.current && handler.current) {
      scrollContainer.current.addEventListener('scroll', handler.current, { passive: true });
    }
  }, []);

  const removeScrollEvent = useCallback((scrollContainer, handler) => {
    if (scrollContainer.current && handler.current) {
      scrollContainer.current.removeEventListener('scroll', handler.current);
    }
  }, []);

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
    if (!isMounted) return;
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

  useEffect(() => {
    if (!isMounted) return;
    adjustDummyDivHeight();
  }, [expandHeaderActive]);

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
    adjustDummyDivHeight();
    requestAnimationFrame(() => {
      const scrollbarWidth = getScrollBarWidth();
      if (scrollbarWidth && scrollbarWidth !== 0 && scrollbarWidth !== defaultScrollbarWidth) {
        setScrollbarWidth(scrollbarWidth);
      }
    });
    setIsMounted(true);
  }, []);

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

  const [scrollBarWidthStyle, scrollBarWidthMargin, scrollBarWidthPadding] = useMemo(() => {
    return [
      { width: `${scrollbarWidth}px` },
      { marginLeft: `-${scrollbarWidth}px`, width: `${2 * scrollbarWidth}px` },
      { paddingRight: `${scrollbarWidth}px` }
    ];
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
        <div style={scrollBarWidthStyle} className={classes.outerScrollbar}>
          <div ref={scrollBar} style={scrollBarWidthMargin} className={classes.innerScrollbar}>
            <div ref={innerScrollBar} style={scrollBarWidthStyle} />
          </div>
        </div>
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
        <div className={classes.outerContentContainer}>
          <div id="ObjectPageContent" ref={contentContainer} className={classes.contentContainer}>
            <div ref={contentScrollContainer} className={classes.contentScrollContainer}>
              <div ref={collapsedHeaderFiller} />
              <div ref={innerHeader}>{renderInnerHeader()}</div>
              <section className={classes.sectionsContainer}>{content}</section>
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
