import { IScroller } from '@ui5/webcomponents-react-base/interfaces/IScroller';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { Scroller } from '@ui5/webcomponents-react-base/lib/Scroller';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { getScrollBarWidth } from '@ui5/webcomponents-react-base/lib/Utils';
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
import { ObjectPageAnchorBar } from './ObjectPageAnchorBar';
import { ObjectPageHeader } from './ObjectPageHeader';
import {
  bindScrollEvent,
  getProportionateScrollTop,
  getSectionById,
  removeScrollEvent,
  safeGetChildrenArray
} from './ObjectPageUtils';

declare const ResizeObserver;

export interface ObjectPagePropTypes extends CommonProps {
  title?: string;
  subTitle?: string;
  image?: string | ReactElement<unknown>;
  headerActions?: ReactElement<unknown>[];
  renderHeaderContent?: () => JSX.Element;
  children?: ReactElement<ObjectPageSectionPropTypes> | ReactElement<ObjectPageSectionPropTypes>[];

  selectedSectionId?: string;
  selectedSubSectionId?: string;
  onSelectedSectionChanged?: (event: Event) => void;

  scrollerRef?: RefObject<IScroller>;
  renderBreadcrumbs?: () => JSX.Element;
  renderKeyInfos?: () => JSX.Element;

  // appearance
  alwaysShowContentHeader?: boolean;
  showTitleInHeaderContent?: boolean;
  imageShapeCircle?: boolean;
  mode?: ObjectPageMode;
  noHeader?: boolean;
  showHideHeaderButton?: boolean;
  headerContentPinnable?: boolean;
}

const useStyles = createUseStyles(styles, { name: 'ObjectPage' });
const defaultScrollbarWidth = 12;

/**
 * <code>import { ObjectPage } from '@ui5/webcomponents-react/lib/ObjectPage';</code>
 */
const ObjectPage: FC<ObjectPagePropTypes> = forwardRef((props: ObjectPagePropTypes, ref: RefObject<HTMLDivElement>) => {
  const {
    title = '',
    image,
    subTitle = '',
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
    noHeader = false,
    alwaysShowContentHeader,
    showTitleInHeaderContent,
    scrollerRef,
    renderBreadcrumbs,
    renderKeyInfos,
    headerContentPinnable
  } = props;

  const firstSectionId = safeGetChildrenArray(children)[0]?.props?.id;

  const [internalSelectedSectionId, setInternalSelectedSectionId] = useState(selectedSectionId ?? firstSectionId);
  const [selectedSubSectionId, setSelectedSubSectionId] = useState(props.selectedSubSectionId);
  const [headerPinned, setHeaderPinned] = useState(alwaysShowContentHeader);
  const [internalHeaderOpen, setInternalHeaderOpen] = useState(!noHeader);

  const objectPage: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
  const topHeader: RefObject<HTMLDivElement> = useRef();
  const headerContentRef: RefObject<HTMLDivElement> = useRef();
  const [topHeaderHeight, setTopHeaderHeight] = useState(0);
  const [headerContentHeight, setHeaderContentHeight] = useState(0);

  const hideHeaderButtonPressed = useRef(false);
  const scroller = useConsolidatedRef<IScroller>(scrollerRef);
  const [scrollbarWidth, setScrollbarWidth] = useState(defaultScrollbarWidth);
  const isMounted = useRef(false);
  const selectedSectionIsFirstChild = firstSectionId === internalSelectedSectionId;

  useEffect(() => {
    setHeaderPinned(alwaysShowContentHeader);
  }, [setHeaderPinned, alwaysShowContentHeader]);

  useEffect(() => {
    setHeaderPinned(headerPinned);
  }, [setHeaderPinned, headerPinned]);

  useEffect(() => {
    if (topHeader.current) {
      setTopHeaderHeight(topHeader.current.offsetHeight);
      setHeaderContentHeight(headerContentRef.current?.offsetHeight ?? 0);
    }
  }, [topHeader.current, headerContentRef.current]);

  useEffect(() => {
    const headerContentResizeObserver = new ResizeObserver(([headerContent, header]) => {
      if (headerContent?.contentRect?.height) {
        setHeaderContentHeight(headerContent?.contentRect?.height);
      }
      if (header?.contentRect?.height) {
        setTopHeaderHeight(header?.contentRect?.height);
      }
    });

    if (headerContentRef.current) {
      headerContentResizeObserver.observe(headerContentRef.current);
    }
    if (headerContentRef.current) {
      headerContentResizeObserver.observe(topHeader.current);
    }
    return () => {
      headerContentResizeObserver.disconnect();
    };
  }, [headerContentRef.current, topHeader.current, setHeaderContentHeight]);

  const classes = useStyles();

  useEffect(() => {
    setInternalSelectedSectionId(selectedSectionId);
  }, [selectedSectionId]);

  useEffect(() => {
    if (selectedSubSectionId && scroller.current) {
      scroller.current.scrollToElementById(`ObjectPageSubSection-${selectedSubSectionId}`, 45);
    }
  }, [selectedSubSectionId]);

  useEffect(() => {
    if (props.selectedSubSectionId) {
      setSelectedSubSectionId(props.selectedSubSectionId);
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
  }, [props.selectedSubSectionId, setInternalSelectedSectionId, setSelectedSubSectionId, children, mode]);

  useEffect(() => {
    if (!isMounted.current) return;

    if (mode === ObjectPageMode.Default && scroller.current) {
      if (selectedSectionIsFirstChild) {
        scroller.current.scrollToTop();
      } else {
        scroller.current.scrollToElementById(`ObjectPageSection-${internalSelectedSectionId}`, 45);
      }
    }
  }, [internalSelectedSectionId, isMounted, selectedSectionIsFirstChild]);

  useEffect(() => {
    const ANCHOR_BAR_HEIGHT = 44;

    const fillerDivObserver = new ResizeObserver(() => {
      const availableScrollHeight =
        objectPage.current.clientHeight -
        topHeaderHeight -
        ANCHOR_BAR_HEIGHT -
        (headerPinned ? headerContentRef.current?.clientHeight ?? 0 : 0);
      const sections = objectPage.current.querySelectorAll('[id^="ObjectPageSection"]');
      if (!sections || sections.length < 1) {
        return;
      }

      const lastSectionDomRef = sections[sections.length - 1] as HTMLElement;
      const subSections = lastSectionDomRef.querySelectorAll('[id^="ObjectPageSubSection"]');

      let lastSubSectionHeight;
      if (subSections.length > 0) {
        lastSubSectionHeight = (subSections[subSections.length - 1] as HTMLElement).offsetHeight;
      } else {
        lastSubSectionHeight =
          lastSectionDomRef.offsetHeight -
          lastSectionDomRef.querySelector<HTMLElement>("[role='heading']").offsetHeight;
      }

      let heightDiff = availableScrollHeight - lastSubSectionHeight;

      heightDiff = heightDiff > 0 ? heightDiff : 0;
      lastSectionDomRef.style.marginBottom = `${heightDiff}px`;
    });

    fillerDivObserver.observe(objectPage.current);

    return () => {
      fillerDivObserver.disconnect();
    };
  }, [topHeaderHeight, headerContentRef, headerPinned, objectPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([record]) => {
        if (hideHeaderButtonPressed.current === true) {
          return;
        }
        setInternalHeaderOpen(record.isIntersecting);
        if (!record.isIntersecting) {
          headerContentRef.current.style.height = '0px';
          headerContentRef.current.style.overflowY = 'hidden';
        } else {
          delete headerContentRef.current.style.height;
          delete headerContentRef.current.style.overflowY;
        }
      },
      { root: objectPage.current, rootMargin: `-${topHeaderHeight}px 0px 0px 0px` }
    );

    if (objectPage.current) {
      intersectionObserver.observe(headerContentRef.current);
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, [objectPage, topHeaderHeight, topHeader, setInternalHeaderOpen, hideHeaderButtonPressed]);

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
        setInternalSelectedSectionId(e.getParameter('props')?.id);
      }

      fireOnSelectedChangedEvent(e);
    },
    [onSelectedSectionChanged, setInternalSelectedSectionId, mode]
  );

  const handleOnSubSectionSelected = useCallback(
    (e) => {
      if (mode === ObjectPageMode.IconTabBar) {
        const sectionId = e.getParameter('section').props?.id;
        const subSection = e.getParameter('subSection');
        setInternalSelectedSectionId(sectionId);
        setSelectedSubSectionId(subSection.props.id);
      }
    },
    [mode, setInternalSelectedSectionId, setSelectedSubSectionId]
  );

  const onToggleHeaderContentVisibility = useCallback(
    (e) => {
      const srcElement = e.getHtmlSourceElement();
      hideHeaderButtonPressed.current = srcElement.icon === 'slim-arrow-up';
      setInternalHeaderOpen((oldVal) => {
        return !oldVal;
      });
    },
    [setInternalHeaderOpen, hideHeaderButtonPressed]
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      const calculatedScrollBarWidth = getScrollBarWidth();
      if (
        calculatedScrollBarWidth &&
        calculatedScrollBarWidth !== 0 &&
        calculatedScrollBarWidth !== defaultScrollbarWidth
      ) {
        setScrollbarWidth(calculatedScrollBarWidth);
      }
    });
    isMounted.current = true;
  }, [isMounted, setScrollbarWidth]);

  const objectPageClasses = StyleClassHelper.of(classes.objectPage);
  if (className) {
    objectPageClasses.put(className);
  }

  if (showTitleInHeaderContent) {
    objectPageClasses.put(classes.titleInHeaderContent);
  }

  const headerClasses = StyleClassHelper.of(classes.header);
  if (internalHeaderOpen) {
    headerClasses.put(classes.alwaysVisibleHeader);
  }

  const scrollBarWidthPadding = useMemo(() => {
    return {
      paddingRight: `${scrollbarWidth}px`
    };
  }, [scrollbarWidth]);

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <Scroller ref={scroller} scrollContainer={objectPage}>
      <div
        data-component-name="ObjectPage"
        slot={slot}
        className={objectPageClasses.toString()}
        style={style}
        ref={objectPage}
        title={tooltip}
        {...passThroughProps}
      >
        {!noHeader && (
          <header
            ref={topHeader}
            role="banner"
            aria-roledescription="Object Page header"
            style={scrollBarWidthPadding}
            className={headerClasses.valueOf()}
          >
            <span className={classes.actions}>{headerActions}</span>
            <header className={classes.titleBar}>
              {(!showTitleInHeaderContent || internalHeaderOpen === false) && (
                <FlexBox alignItems={FlexBoxAlignItems.Center}>
                  {image && !internalHeaderOpen && (
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
            </header>
          </header>
        )}
        {!noHeader && (
          <ObjectPageHeader
            image={image}
            classes={classes}
            imageShapeCircle={imageShapeCircle}
            showTitleInHeaderContent={showTitleInHeaderContent}
            renderHeaderContentProp={renderHeaderContent}
            renderBreadcrumbs={renderBreadcrumbs}
            renderKeyInfos={renderKeyInfos}
            title={title}
            subTitle={subTitle}
            headerPinned={headerPinned}
            topHeaderHeight={topHeaderHeight}
            headerOpen={internalHeaderOpen}
            // @ts-ignore
            ref={headerContentRef}
          />
        )}
        <ObjectPageAnchorBar
          sections={children}
          mode={mode}
          selectedSectionId={internalSelectedSectionId}
          handleOnSectionSelected={handleOnSectionSelected}
          handleOnSubSectionSelected={handleOnSubSectionSelected}
          headerContentPinnable={headerContentPinnable}
          showHideHeaderButton={showHideHeaderButton && !noHeader}
          headerPinned={headerPinned}
          setHeaderPinned={setHeaderPinned}
          showHeaderContent={internalHeaderOpen}
          style={{ top: noHeader ? 0 : headerPinned ? topHeaderHeight + headerContentHeight : topHeaderHeight }}
          onToggleHeaderContentVisibility={onToggleHeaderContentVisibility}
        />
        <section className={classes.sectionsContainer}>
          {mode === ObjectPageMode.IconTabBar ? getSectionById(children, internalSelectedSectionId) : children}
        </section>
      </div>
    </Scroller>
  );
});

ObjectPage.defaultProps = {
  image: null,
  imageShapeCircle: false,
  headerActions: [],
  renderHeaderContent: null,
  mode: ObjectPageMode.Default,
  onSelectedSectionChanged: () => {},
  showHideHeaderButton: false
};

ObjectPage.displayName = 'ObjectPage';

export { ObjectPage };
