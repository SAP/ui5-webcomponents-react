import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import debounce from 'lodash.debounce';
import React, {
  Children,
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
import { ObjectPageMode } from '@ui5/webcomponents-react/lib/ObjectPageMode';
import styles from './ObjectPage.jss';
import { ObjectPageAnchorButton } from './ObjectPageAnchorButton';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { CollapsedAvatar } from './CollapsedAvatar';
import { IScroller, ObjectPageScroller } from './scroll/ObjectPageScroller';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import '@ui5/webcomponents/dist/icons/navigation-up-arrow.js';
import { getScrollBarWidth } from '@ui5/webcomponents-react-base/lib/Utils';
import '@ui5/webcomponents/dist/icons/navigation-down-arrow.js';
import { ObjectPageSubSectionPropTypes } from '../ObjectPageSubSection';

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
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'ObjectPage' });
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

const ObjectPage: FC<ObjectPagePropTypes> = forwardRef((props: ObjectPagePropTypes, ref: RefObject<HTMLDivElement>) => {
  const {
    title,
    image,
    subTitle,
    headerActions,
    renderHeaderContent,
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
    scrollerRef
  } = props;

  const [selectedSectionIndex, setSelectedSectionIndex] = useState(findSectionIndexById(children, selectedSectionId));
  const [selectedSubSectionId, setSelectedSubSectionId] = useState(props.selectedSubSectionId);
  const [expandHeaderActive, setExpandHeaderActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [collapsedHeader, setCollapsedHeader] = useState(false);
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
  const scroller = useConsolidatedRef(scrollerRef);
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

        let domRef = null;
        if (subSections.length > 0) {
          domRef = subSections[subSections.length - 1];
        } else {
          domRef = lastSectionDomRef;
        }

        let heightDiff = contentContainer.current.offsetHeight - domRef.offsetHeight;
        heightDiff = heightDiff > 0 ? heightDiff : 0;
        fillerDivDomRef.current.style.height = `${heightDiff}px`;
        setScrollbarHeight();
        resolve();
      });
    });
  };

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
    if (!showHideHeaderButton) return null;

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
        icon={
          !collapsedHeader || expandHeaderActive ? 'sap-icon://navigation-up-arrow' : 'sap-icon://navigation-down-arrow'
        }
        onClick={changeHeader}
      />
    );
  };

  const renderContentHeader = () => {
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
      const headerContents = renderHeaderContent();
      let firstElement;
      let contents = [];

      if (headerContents.type === React.Fragment) {
        [firstElement, ...contents] = React.Children.toArray(headerContents.props.children);
      } else {
        firstElement = headerContents;
      }

      return (
        <div className={classes.contentHeader}>
          <div className={classes.headerContent}>
            <div>{avatar}</div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1 className={classes.title}>{title}</h1>
                <span className={classes.subTitle}>{subTitle}</span>
                {firstElement}
              </div>
            </div>
            {contents.map((c, index) => (
              <div key={`customContent-${index}`}>{c}</div>
            ))}
          </div>
          {!expandHeaderActive && !alwaysShowContentHeader && renderHideHeaderButton()}
        </div>
      );
    }

    return (
      <div style={{ position: 'relative' }} className={classes.contentHeader}>
        <div className={classes.headerContent}>
          {avatar}
          {renderHeaderContent && <span className={classes.headerCustomContent}>{renderHeaderContent()}</span>}
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
          {(collapsedHeader || !showTitleInHeaderContent) && !expandHeaderActive && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {image && collapsedHeader && !expandHeaderActive && !alwaysShowContentHeader && (
                <div style={{ marginRight: '1rem' }}>
                  <CollapsedAvatar image={image} imageShapeCircle={imageShapeCircle} />
                </div>
              )}
              <span className={classes.container}>
                <h1 className={classes.title}>{title}</h1>
                <span className={classes.subTitle}>{subTitle}</span>
              </span>
            </div>
          )}
          {/*{(!showTitleInHeaderContent || collapsedHeader) && <span className={classes.actions}>{headerActions}</span>}*/}
          {(expandHeaderActive || alwaysShowContentHeader) && renderContentHeader()}
          {collapsedHeader && !alwaysShowContentHeader && renderHideHeaderButton()}
        </header>
        {(collapsedHeader || alwaysShowContentHeader) && renderAnchorBar()}
      </>
    );
  };

  const renderInnerHeader = () => {
    if (
      noHeader ||
      collapsedHeader ||
      expandHeaderActive ||
      alwaysShowContentHeader ||
      (alwaysShowContentHeader && showTitleInHeaderContent)
    ) {
      return null;
    }

    return (
      <>
        {renderContentHeader()}
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
  }, [props.selectedSubSectionId, scroller.current, setSelectedSectionIndex, setSelectedSubSectionId]);

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

        const threshold = 64;
        const baseScrollValue =
          activeContainer.current === contentContainer.current
            ? e.target.scrollTop
            : getProportionateScrollTop(activeInnerContainer, passiveInnerContainer, e.target.scrollTop);

        const shouldBeCollapsed = baseScrollValue > threshold;
        if (collapsedHeader !== shouldBeCollapsed) {
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
            collapsedHeader && e.target.scrollTop > threshold + 50
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

  return (
    <div
      data-component-name="ObjectPage"
      slot={slot}
      className={objectPageClasses.toString()}
      style={style}
      ref={objectPage}
      title={tooltip}
    >
      <ObjectPageScroller ref={scroller} scrollContainer={contentContainer}>
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
      </ObjectPageScroller>
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
