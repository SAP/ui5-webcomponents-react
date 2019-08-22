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
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { ObjectPageMode } from '../../lib/ObjectPageMode';
import styles from './ObjectPage.jss';
import { ObjectPageAnchorButton } from './ObjectPageAnchorButton';
import { Button } from '../../webComponents/Button';
import { CollapsedAvatar } from './CollapsedAvatar';
import { ObjectPageScroller } from './scroll/ObjectPageScroller';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import { AvatarShape } from '@ui5/webcomponents-react/lib/AvatarShape';

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
  const collapsedHeaderFiller: RefObject<HTMLDivElement> = useRef();
  const expandedHeaderHeight = useRef(0);
  const hideHeaderButtonPressed = useRef(false);
  const scroller = useRef(null);

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
        }

        let heightDiff = contentContainer.current.offsetHeight - domRef.offsetHeight;
        heightDiff = heightDiff > 0 ? heightDiff : 0;
        fillerDivDomRef.current.style.height = `${heightDiff}px`;
        setScrollbarHeight();
        resolve();
      });
    });
  };

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
    let avatar;
    if (typeof image === 'string') {
      avatar = (
        <Avatar
          className={classes.headerImage}
          image={image}
          size={AvatarSize.L}
          shape={imageShapeCircle ? AvatarShape.Circle : AvatarShape.Square}
        />
      );
    } else {
      // @ts-ignore
      avatar = React.cloneElement(image, {
        size: AvatarSize.L
      });
    }

    return (
      <div style={{ position: 'relative' }} className={classes.contentHeader}>
        <div className={classes.headerContent}>
          {avatar}
          {renderHeaderContent && <span className={classes.headerCustomContent}>{renderHeaderContent()}</span>}
        </div>
        {!expandHeaderActive && renderHideHeaderButton()}
      </div>
    );
  };

  const renderTopHeader = () => {
    if (noHeader) {
      return renderAnchorBar();
    }

    return (
      <>
        <header className={classes.titleBar}>
          <div style={{ display: 'flex' }}>
            {image && collapsedHeader && !expandHeaderActive && (
              <div style={{ marginRight: '1rem' }}>
                <CollapsedAvatar image={image} imageShapeCircle={imageShapeCircle} />
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
    if (noHeader || collapsedHeader || expandHeaderActive) return null;
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

  useLayoutEffect(() => {
    if (!isMounted) return;
    adjustDummyDivHeight();
  }, [noHeader, mode]);

  useEffect(() => {
    if (selectedSubSectionId && mode === ObjectPageMode.IconTabBar && scroller.current) {
      scroller.current.scrollToElementById(`ObjectPageSubSection-${selectedSubSectionId}`, collapsedHeader ? 0 : -45);
    }
  }, [selectedSubSectionId]);

  useEffect(() => {
    if (!isMounted && selectedSectionIndex < 1) return;

    if (mode === ObjectPageMode.Default && scroller.current) {
      if (selectedSectionIndex > 0) {
        // @ts-ignore
        const id = Children.toArray(children)[selectedSectionIndex].props.id;
        if (id) {
          scroller.current.scrollToElementById(`ObjectPageSection-${id}`, collapsedHeader ? 0 : -45);
        }
      } else {
        scroller.current.scrollToTop();
      }
    }
    if (mode === ObjectPageMode.IconTabBar) {
      adjustDummyDivHeight();
    }
  }, [selectedSectionIndex]);

  const addScrollListener = () => {
    contentContainer.current.addEventListener('scroll', onScroll, { passive: true });
  };

  const onScroll = (e) => {
    requestAnimationFrame(() => {
      if (noHeader) {
        scrollBar.current.scrollTop = getProportionateScrollTop(e.target.scrollTop);
        scroller.current.scroll(e);
        return;
      }
      if (expandHeaderActive) {
        setExpandHeaderActive(false);
      }
      const innerHeaderHeight = innerHeader.current.getBoundingClientRect().height;
      const threshold = collapsedHeader ? expandedHeaderHeight.current + 4 : innerHeaderHeight - 45;
      const shouldBeCollapsed = e.target.scrollTop > threshold;
      if (collapsedHeader !== shouldBeCollapsed) {
        contentContainer.current.removeEventListener('scroll', onScroll);
        if (shouldBeCollapsed) {
          expandedHeaderHeight.current = innerHeaderHeight - 45;
          collapsedHeaderFiller.current.style.height = `${expandedHeaderHeight.current}px`;
        } else {
          collapsedHeaderFiller.current.style.height = `${0}px`;
        }
        setCollapsedHeader(shouldBeCollapsed);
      } else {
        scrollBar.current.scrollTop = collapsedHeader
          ? e.target.scrollTop
          : getProportionateScrollTop(e.target.scrollTop);
        scroller.current.scroll(e);
      }
    });
  };

  useLayoutEffect(() => {
    if (!isMounted) return;
    adjustDummyDivHeight().then(() => {
      if (!hideHeaderButtonPressed.current) {
        const innerHeaderHeight = innerHeader.current.getBoundingClientRect().height;
        const base = collapsedHeader ? expandedHeaderHeight.current + 5 : innerHeaderHeight - 50;
        contentContainer.current.scrollTop = base;
        scrollBar.current.scrollTop = collapsedHeader ? base : getProportionateScrollTop(base);
      }
      hideHeaderButtonPressed.current = false;
      addScrollListener();
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
    const contentContainerHeightFull = contentScrollContainer.current.getBoundingClientRect().height;
    const scrollBarHeight = innerScrollBar.current.getBoundingClientRect().height;

    return (base / contentContainerHeightFull) * scrollBarHeight;
  };

  useEffect(() => {
    adjustDummyDivHeight();
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
      <ObjectPageScroller ref={scroller} scrollContainer={contentContainer}>
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
