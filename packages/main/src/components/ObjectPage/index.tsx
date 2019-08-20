import { Event, StyleClassHelper, useConsolidatedRef } from '@ui5/webcomponents-react-base';
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
  useRef,
  useState
} from 'react';
import { createUseStyles } from 'react-jss';
import { scroller } from 'react-scroll';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { ObjectPageMode } from '../../lib/ObjectPageMode';
import styles from './ObjectPage.jss';
import { ObjectPageAnchorButton } from './ObjectPageAnchorButton';
import { Button } from '../../webComponents/Button';
import { CollapsedAvatar } from './CollapsedAvatar';

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
  onSelectedSectionChanged?: (event: Event) => void;
  showHideHeaderButton?: boolean;
  noHeader?: boolean;
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'ObjectPage' });

const findSectionIndexById = (sections, id) => {
  const index = Children.toArray(sections).findIndex(
    (objectPageSection: ReactElement<any>) => objectPageSection.props.id === id
  );
  if (index === -1) {
    return 0;
  }
  return index;
};

const scrollToSectionById = (id, index) => {
  requestAnimationFrame(() => {
    scroller.scrollTo(`ObjectPageSection-${id}`, {
      containerId: 'ObjectPageContent',
      smooth: true,
      offset: index > 0 ? 45 : 0,
      duration: 400
    });
  });
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
    noHeader
  } = props;

  const [selectedSectionIndex, setSelectedSectionIndex] = useState(findSectionIndexById(children, selectedSectionId));
  const [selectedSubSectionId, setSelectedSubSectionId] = useState(null);
  const [expandHeaderActive, setExpandHeaderActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [collapsedHeader, setCollapsedHeader] = useState(false);
  const objectPage: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
  const fillerDivDomRef: RefObject<HTMLDivElement> = useRef();
  const scrollBar: RefObject<HTMLDivElement> = useRef();
  const contentContainer: RefObject<HTMLDivElement> = useRef();
  const topHeader: RefObject<HTMLDivElement> = useRef();
  const innerHeader: RefObject<HTMLDivElement> = useRef();
  const innerScrollBar: RefObject<HTMLDivElement> = useRef();
  const contentScrollContainer: RefObject<HTMLDivElement> = useRef();
  const hideHeaderButtonPressed = useRef(false);
  const classes = useStyles();

  const setScrollbarHeight = () => {
    // @ts-ignore
    debugger;
    const scrollbarContainerHeight =
      contentScrollContainer.current.getBoundingClientRect().height + topHeader.current.getBoundingClientRect().height;
    // @ts-ignore
    innerScrollBar.current.style.height = `${scrollbarContainerHeight}px`;
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
    requestAnimationFrame(() => {
      if (!objectPage.current) {
        // in case componentWillUnmount didn´t fire
        window.removeEventListener('resize', adjustDummyDivHeight);
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
        // scrollOffset = 45;
      }

      let heightDiff = contentContainer.current.offsetHeight - domRef.offsetHeight;
      heightDiff = heightDiff > 0 ? heightDiff : 0;
      fillerDivDomRef.current.style.height = `${heightDiff}px`;
      // fillerDivDomRef.current.style.height = `${0}px`;
      setScrollbarHeight();
    });
  };

  const renderAnchorBar = () => {
    return (
      <section className={classes.anchorBar} role="navigation">
        {Children.map(children, (section, index) => (
          <ObjectPageAnchorButton
            key={`Anchor-${(section as any).id}`}
            section={section}
            index={index}
            selected={selectedSectionIndex === index}
            mode={mode}
            onSectionSelected={handleOnSectionSelected}
            onSubSectionSelected={handleOnSubSectionSelected}
            collapsedHeader={collapsedHeader}
          />
        ))}
      </section>
    );
  };

  const changeHeader = useCallback(() => {
    hideHeaderButtonPressed.current = true;
    contentContainer.current.removeEventListener('scroll', onScroll);

    if (!expandHeaderActive && collapsedHeader) {
      setExpandHeaderActive(true);
      return;
    }

    if (expandHeaderActive && collapsedHeader) {
      setExpandHeaderActive(false);
      return;
    }

    setCollapsedHeader(!collapsedHeader);

    // if(!expandHeaderActive) {
    // debugger;
    // setCollapsedHeader(!collapsedHeader);
    // setExpandHeaderActive(!expandHeaderActive);
    // }
    //
  }, [collapsedHeader, expandHeaderActive]);

  const renderHideHeaderButton = () => {
    if (!showHideHeaderButton) return null;

    return (
      <Button
        style={
          {
            position: 'absolute',
            '--_ui5_button_compact_height': '1rem',
            lineHeight: '1.25rem',
            bottom: 'calc(-1.25rem / 2)',
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
    return (
      <div style={{ position: 'relative' }} className={classes.contentHeader}>
        <div className={classes.headerContent}>
          {image && (
            <span
              className={classes.headerImage}
              style={{ borderRadius: imageShapeCircle ? '50%' : 0, overflow: 'hidden' }}
            >
              <img src={image as string} style={{ width: '100%', height: '100%' }} />
            </span>
          )}
          {renderHeaderContent && <span className={classes.headerCustomContent}>{renderHeaderContent()}</span>}
        </div>
        {!expandHeaderActive && renderHideHeaderButton()}
      </div>
    );
  };

  const renderTopHeader = () => {
    return (
      <>
        <header className={classes.titleBar}>
          <div style={{ display: 'flex' }}>
            {image && collapsedHeader && !expandHeaderActive && (
              <div style={{ marginRight: '1rem' }}>
                <CollapsedAvatar image={image} />
              </div>
            )}
            <span className={classes.container}>
              <h1 className={classes.title}>{title}</h1>
              <span className={classes.subTitle}>{subTitle}</span>
            </span>
          </div>
          <span className={classes.actions}>{headerActions}</span>
          {expandHeaderActive && renderContentHeader()}
          {collapsedHeader && renderHideHeaderButton()}
        </header>
        {collapsedHeader && renderAnchorBar()}
      </>
    );
  };

  const renderInnerHeader = () => {
    if (collapsedHeader || expandHeaderActive) return null;
    return (
      <>
        {renderContentHeader()}
        {renderAnchorBar()}
      </>
    );
  };

  // register resize handler
  useEffect(() => {
    window.addEventListener('resize', adjustDummyDivHeight);
    return window.removeEventListener('resize', adjustDummyDivHeight);
  }, []);

  useEffect(() => {
    adjustDummyDivHeight();
  }, [noHeader]);

  // scroll to selected section after mount
  useEffect(() => {
    if (mode !== ObjectPageMode.IconTabBar) {
      if (selectedSectionId && selectedSectionIndex > 0) {
        scrollToSectionById(selectedSectionId, selectedSectionIndex);
      }
    }
  }, []);

  useEffect(() => {
    if (selectedSubSectionId && mode === ObjectPageMode.IconTabBar) {
      requestAnimationFrame(() => {
        scroller.scrollTo(`ObjectPageSubSection-${selectedSubSectionId}`, {
          containerId: 'ObjectPageContent',
          smooth: true,
          offset: 36,
          duration: 400
        });
      });
    }
  }, [selectedSubSectionId]);

  useEffect(() => {
    if (mode === ObjectPageMode.Default) {
      // @ts-ignore
      scrollToSectionById(Children.toArray(children)[selectedSectionIndex].props.id, selectedSectionIndex);
    }
    if (mode === ObjectPageMode.IconTabBar) {
      adjustDummyDivHeight();
    }
  }, [selectedSectionIndex]);

  // const timeoutId = useRef(null);

  const onScroll = (e) => {
    requestAnimationFrame(() => {
      // if(hideHeaderButtonPressed.current) {
      //   if(timeoutId.current) {
      //     clearTimeout(timeoutId.current);
      //   }
      //   timeoutId.current = setTimeout(() => {
      //     hideHeaderButtonPressed.current = false;
      //   }, 10);
      //
      //   return;
      // }
      if (expandHeaderActive) {
        setExpandHeaderActive(false);
      }
      const headerHeight = topHeader.current.getBoundingClientRect().height;
      console.log(expandHeaderActive);
      scrollBar.current.scrollTop = getProportionateScrollTop(
        collapsedHeader && !expandHeaderActive ? e.target.scrollTop + headerHeight + 45 : e.target.scrollTop
      );
      const innerHeaderHeight = innerHeader.current.getBoundingClientRect().height;
      const threshold = collapsedHeader ? 4 : innerHeaderHeight - 45;
      const shouldBeCollapsed = e.target.scrollTop > threshold;
      if (collapsedHeader !== shouldBeCollapsed) {
        contentContainer.current.removeEventListener('scroll', onScroll);
        setCollapsedHeader(shouldBeCollapsed);
      }
    });
  };

  const addScrollListener = () => {
    contentContainer.current.addEventListener('scroll', onScroll, { passive: true });
  };

  useLayoutEffect(() => {
    if (!isMounted) return;
    requestAnimationFrame(() => {
      setScrollbarHeight();
      const headerHeight = topHeader.current.getBoundingClientRect().height;

      if (!hideHeaderButtonPressed.current) {
        const base = collapsedHeader ? 5 : headerHeight - 2;
        contentContainer.current.scrollTop = base;
        scrollBar.current.scrollTop = getProportionateScrollTop(collapsedHeader ? headerHeight : base);
      }
      adjustDummyDivHeight();
      addScrollListener();
      hideHeaderButtonPressed.current = false;
    });
  }, [collapsedHeader]);

  useLayoutEffect(() => {
    if (!isMounted) return;
    requestAnimationFrame(() => {
      adjustDummyDivHeight();
      addScrollListener();
    });
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

  const getProportionateScrollTop = (base) => {
    // @ts-ignore
    const contentContainerHeightFull = contentScrollContainer.current.getBoundingClientRect().height;
    const scrollBarHeight = innerScrollBar.current.getBoundingClientRect().height;

    return (base / contentContainerHeightFull) * scrollBarHeight;
  };

  useEffect(() => {
    addScrollListener();
    setIsMounted(true);
  }, []);

  const objectPageClasses = StyleClassHelper.of(classes.objectPage);
  if (className) {
    objectPageClasses.put(className);
  }

  return (
    <div
      data-component-name="ObjectPage"
      slot={slot}
      className={objectPageClasses.toString()}
      style={style}
      ref={objectPage}
      title={tooltip}
    >
      <div className={classes.outerScrollbar}>
        <div ref={scrollBar} className={classes.innerScrollbar}>
          <div ref={innerScrollBar} className={classes.scrollbarContent} />
        </div>
      </div>
      <header ref={topHeader} role="banner" aria-roledescription="Object page header" className={classes.header}>
        {renderTopHeader()}
      </header>
      <div className={classes.outerContentContainer}>
        <div id="ObjectPageContent" ref={contentContainer} className={classes.contentContainer}>
          <div ref={contentScrollContainer} className={classes.contentScrollContainer}>
            <div ref={innerHeader}>{renderInnerHeader()}</div>
            <section className={classes.sectionsContainer}>{content}</section>
            <div className={classes.fillerDiv} ref={fillerDivDomRef} />
          </div>
        </div>
      </div>
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
