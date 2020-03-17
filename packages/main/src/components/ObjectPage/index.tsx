import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
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
import { CommonProps } from '../../interfaces/CommonProps';
import { ObjectPageSectionPropTypes } from '../ObjectPageSection';
import { ObjectPageSubSectionPropTypes } from '../ObjectPageSubSection';
import { CollapsedAvatar } from './CollapsedAvatar';
import styles from './ObjectPage.jss';
import { ObjectPageAnchorBar } from './ObjectPageAnchorBar';
import { ObjectPageHeader } from './ObjectPageHeader';
import { extractSectionIdFromHtmlId, getSectionById, safeGetChildrenArray } from './ObjectPageUtils';
import { useObserveHeights } from './useObserveHeights';

declare const ResizeObserver;

const SCROLL_BAR_WIDTH = 12;

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

const useStyles = createComponentStyles(styles, { name: 'ObjectPage' });

/**
 * <code>import { ObjectPage } from '@ui5/webcomponents-react/lib/ObjectPage';</code>
 */
const ObjectPage: FC<ObjectPagePropTypes> = forwardRef((props: ObjectPagePropTypes, ref: RefObject<HTMLDivElement>) => {
  const {
    title = '',
    image = null,
    subTitle = '',
    headerActions = [],
    renderHeaderContent = null,
    mode = ObjectPageMode.Default,
    imageShapeCircle = false,
    className,
    style,
    tooltip,
    slot,
    showHideHeaderButton = false,
    children,
    onSelectedSectionChanged = () => {
      /* noop */
    },
    selectedSectionId,
    noHeader = false,
    alwaysShowContentHeader,
    showTitleInHeaderContent,
    renderBreadcrumbs,
    renderKeyInfos,
    headerContentPinnable
  } = props;

  const firstSectionId = safeGetChildrenArray(children)[0]?.props?.id;

  const [internalSelectedSectionId, setInternalSelectedSectionId] = useState(selectedSectionId ?? firstSectionId);
  const [selectedSubSectionId, setSelectedSubSectionId] = useState(props.selectedSubSectionId);
  const [headerPinned, setHeaderPinned] = useState(alwaysShowContentHeader);
  const [internalHeaderOpen, setInternalHeaderOpen] = useState(!noHeader);
  const isProgrammaticallyScrolled = useRef(false);

  const objectPageRef: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
  const topHeaderRef: RefObject<HTMLDivElement> = useRef();
  const headerContentRef: RefObject<HTMLDivElement> = useRef();
  const anchorBarRef: RefObject<HTMLDivElement> = useRef();

  const hideHeaderButtonPressed = useRef(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(SCROLL_BAR_WIDTH);
  const isMounted = useRef(false);
  const selectedSectionIsFirstChild = firstSectionId === internalSelectedSectionId;

  // observe heights of header parts
  const { topHeaderHeight, headerContentHeight, anchorBarHeight, totalHeaderHeight } = useObserveHeights(
    objectPageRef,
    topHeaderRef,
    headerContentRef,
    anchorBarRef,
    { noHeader, internalHeaderOpen }
  );

  // *****
  // SECTION SELECTION
  // ****
  // change selected section when prop is changed (external change)
  useEffect(() => {
    isProgrammaticallyScrolled.current = true;
    setInternalSelectedSectionId(selectedSectionId ?? firstSectionId);
  }, [selectedSectionId, isProgrammaticallyScrolled, firstSectionId]);

  // section was selected by clicking on the anchor bar buttons
  const handleOnSectionSelected = useCallback(
    (e) => {
      isProgrammaticallyScrolled.current = true;
      setInternalSelectedSectionId(e.getParameter('props')?.id);
      fireOnSelectedChangedEvent(e);
    },
    [onSelectedSectionChanged, setInternalSelectedSectionId, isProgrammaticallyScrolled]
  );

  // do internal scrolling
  useEffect(() => {
    setTimeout(() => {
      isProgrammaticallyScrolled.current = false;
    }, 500);
    if (!isMounted.current) return;

    if (mode === ObjectPageMode.Default) {
      if (selectedSectionIsFirstChild) {
        objectPageRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const childToScrollTo = objectPageRef.current.querySelector<HTMLElement>(
          `#ObjectPageSection-${internalSelectedSectionId}`
        );
        requestAnimationFrame(() => {
          const currentScrollOffset = objectPageRef.current.scrollTop + headerContentHeight;
          if (
            currentScrollOffset < childToScrollTo.offsetTop ||
            currentScrollOffset > childToScrollTo.offsetTop + childToScrollTo.offsetHeight
          ) {
            objectPageRef.current.scrollTo({
              top: childToScrollTo.offsetTop - topHeaderHeight - headerContentHeight - anchorBarHeight + 45,
              behavior: 'smooth'
            });
          }
        });
      }
    }
  }, [
    internalSelectedSectionId,
    isMounted,
    selectedSectionIsFirstChild,
    isProgrammaticallyScrolled,
    objectPageRef,
    topHeaderHeight,
    headerContentHeight,
    anchorBarHeight
  ]);

  // Scrolling for Sub Section Selection
  useEffect(() => {
    if (selectedSubSectionId) {
      const childOffset = objectPageRef.current.querySelector<HTMLElement>(
        `div[id="ObjectPageSubSection-${selectedSubSectionId}"]`
      ).offsetTop;
      objectPageRef.current.scrollTo({ top: childOffset - topHeaderHeight - 32 + 45, behavior: 'smooth' });
      setTimeout(() => {
        isProgrammaticallyScrolled.current = false;
      }, 500);
    }
  }, [selectedSubSectionId, isProgrammaticallyScrolled]);

  useEffect(() => {
    setHeaderPinned(alwaysShowContentHeader);
  }, [setHeaderPinned, alwaysShowContentHeader]);

  const classes = useStyles();

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
    const fillerDivObserver = new ResizeObserver(() => {
      const availableScrollHeight = objectPageRef.current.clientHeight - totalHeaderHeight;
      const sections = objectPageRef.current.querySelectorAll('[id^="ObjectPageSection"]');
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

    fillerDivObserver.observe(objectPageRef.current);

    return () => {
      fillerDivObserver.disconnect();
    };
  }, [totalHeaderHeight, objectPageRef]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([record]) => {
        if (hideHeaderButtonPressed.current === true) {
          return;
        }
        setInternalHeaderOpen(record.isIntersecting);
      },
      { root: objectPageRef.current, rootMargin: `-${topHeaderHeight}px 0px 0px 0px` }
    );

    if (headerContentRef.current) {
      intersectionObserver.observe(headerContentRef.current);
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, [objectPageRef, headerContentRef, topHeaderHeight, topHeaderRef, setInternalHeaderOpen, hideHeaderButtonPressed]);

  const fireOnSelectedChangedEvent = debounce((e) => {
    onSelectedSectionChanged(
      Event.of(null, e.getOriginalEvent(), {
        selectedSectionIndex: e.getParameter('index'),
        selectedSectionId: e.getParameter('props').id,
        section: e.getParameters()
      })
    );
  }, 500);

  const handleOnSubSectionSelected = useCallback(
    (e) => {
      isProgrammaticallyScrolled.current = true;
      if (mode === ObjectPageMode.IconTabBar) {
        const sectionId = e.getParameter('section').props?.id;
        setInternalSelectedSectionId(sectionId);
      }
      const subSection = e.getParameter('subSection');
      setSelectedSubSectionId(subSection.props.id);
    },
    [mode, setInternalSelectedSectionId, setSelectedSubSectionId, isProgrammaticallyScrolled]
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
      if (calculatedScrollBarWidth && calculatedScrollBarWidth !== 0 && calculatedScrollBarWidth !== SCROLL_BAR_WIDTH) {
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

    objectPageRef.current.querySelectorAll('section[data-component-name="ObjectPageSection"]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [objectPageRef, children, totalHeaderHeight, setInternalSelectedSectionId, isProgrammaticallyScrolled]);

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
      {!noHeader && (
        <header
          ref={topHeaderRef}
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
          ref={headerContentRef}
        />
      )}
      <ObjectPageAnchorBar
        sections={children}
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
        ref={anchorBarRef}
      />
      {mode === ObjectPageMode.IconTabBar ? getSectionById(children, internalSelectedSectionId) : children}
    </div>
  );
});

ObjectPage.displayName = 'ObjectPage';

export { ObjectPage };
