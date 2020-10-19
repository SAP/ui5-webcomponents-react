import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { useConsolidatedRef, usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { GlobalStyleClasses } from '@ui5/webcomponents-react/lib/GlobalStyleClasses';
import { PageBackgroundDesign } from '@ui5/webcomponents-react/lib/PageBackgroundDesign';
import React, {
  forwardRef,
  ReactElement,
  ReactNode,
  ReactNodeArray,
  Ref,
  FC,
  cloneElement,
  RefObject,
  useRef,
  useCallback,
  useState,
  useEffect
} from 'react';
import { DynamicPageAnchorBar } from '../DynamicPageAnchorBar';
import { useObserveHeights } from '../ObjectPage/useObserveHeights';
import styles from './DynamicPage.jss';

export interface DynamicPageProps extends Omit<CommonProps, 'title'> {
  /**
   * Determines the background color of DynamicPage.
   */
  backgroundDesign?: PageBackgroundDesign;
  /**
   * Determines whether the footer is visible.
   */
  showFooter?: boolean;
  /**
   * Determines whether the header is shown.
   */
  noHeader?: boolean;
  /**
   * Determines whether the content header is shown.
   */
  alwaysShowContentHeader?: boolean;
  /**
   * Determines whether the header button is shown.
   */
  showHideHeaderButton?: boolean;
  /**
   * Determines whether the pin button is shown.
   */
  headerContentPinnable?: boolean;

  // slots
  title?: ReactElement;

  header?: ReactElement;

  // anchorBar?: ReactElement;

  children?: ReactNode | ReactNodeArray;

  footer?: ReactElement;
}

const DynamicPage: FC<DynamicPageProps> = forwardRef((props: DynamicPageProps, ref: Ref<HTMLDivElement>) => {
  const {
    title,
    header,
    tooltip,
    style,
    noHeader = false,
    showHideHeaderButton = true,
    headerContentPinnable = true,
    alwaysShowContentHeader = false,
    children
  } = props;
  const passThroughProps = usePassThroughHtmlProps(props);

  const useStyles = createComponentStyles(styles, { name: 'DynamicPage' });
  const classes = useStyles();
  const dynamicPageClasses = StyleClassHelper.of(classes.dynamicPage, GlobalStyleClasses.sapScrollBar);

  const anchorBarRef: RefObject<HTMLDivElement> = useRef();
  const dynamicPageRef: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
  const topHeaderRef: RefObject<HTMLDivElement> = useRef();
  const headerContentRef: RefObject<HTMLDivElement> = useRef();
  const headerPinnedRef = useRef(alwaysShowContentHeader);

  const [headerPinned, setHeaderPinned] = useState(alwaysShowContentHeader);
  const [headerVisible, setHeaderVisible] = useState(true);

  // observe heights of header parts
  const { topHeaderHeight, headerContentHeight } = useObserveHeights(
    dynamicPageRef,
    topHeaderRef,
    headerContentRef,
    anchorBarRef,
    { noHeader }
  );

  const onToggleHeaderContentVisibility = useCallback(
    (e, element?) => {
      let srcElement = e.target;
      if (element) {
        srcElement = element;
      }
      console.log(headerPinned);
      const shouldHideHeader = srcElement.icon === 'slim-arrow-up';
      const pinnedHeader = headerPinned === true;
      if (shouldHideHeader) {
        dynamicPageRef.current.classList.add(classes.headerCollapsed);
        setHeaderVisible(false);
        anchorBarRef.current.style.top = '-0.025rem';
      } else {
        dynamicPageRef.current.classList.remove(classes.headerCollapsed);
        setHeaderVisible(true);
        anchorBarRef.current.style.top = '0.025rem';
      }

      requestAnimationFrame(() => {
        if (dynamicPageRef.current.scrollTop > 0 && !shouldHideHeader) {
          anchorBarRef.current.style.top = `${headerContentRef.current.scrollHeight}px`;
          headerContentRef.current.style.top = `${topHeaderHeight}px`;
          dynamicPageRef.current.classList.remove(classes.headerCollapsed);
        }
        dynamicPageRef.current.addEventListener(
          'scroll',
          () => {
            if (dynamicPageRef.current.scrollTop > 0 && !headerPinnedRef.current) {
              headerContentRef.current.style.removeProperty('top');
              anchorBarRef.current.style.top = '-0.025rem';
            }
          },
          { once: true }
        );
      });
    },
    [dynamicPageRef, classes.headerCollapsed, headerContentHeight, topHeaderHeight, headerPinned]
  );

  const onHoverToggleButton = useCallback(
    (e) => {
      if (e && e.type === 'mouseover') {
        // TODO background color should be sapObjectHeader_Hover_Background (same color as sapTile_Active_Background)
        topHeaderRef.current.style.backgroundColor = ThemingParameters.sapTile_Active_Background;
      } else {
        topHeaderRef.current.style.backgroundColor = null;
      }
    },
    [topHeaderRef]
  );

  const onToggleHeaderContent = (e) => {
    if (e.target.tagName === 'DIV') {
      onToggleHeaderContentVisibility(e, anchorBarRef.current.children.item(0));
    }
  };

  let currentIcon = 'slim-arrow-up';
  useEffect(() => {
    dynamicPageRef.current?.addEventListener('scroll', () => {
      if (
        anchorBarRef.current?.children?.[0].icon === 'slim-arrow-up' &&
        anchorBarRef.current?.children?.[0].icon !== currentIcon
      ) {
        setHeaderVisible(true);
        currentIcon = 'slim-arrow-up';
        anchorBarRef.current.style.top = '0.025rem';
      } else if (
        anchorBarRef.current?.children?.[0].icon === 'slim-arrow-down' &&
        anchorBarRef.current?.children?.[0].icon !== currentIcon
      ) {
        setHeaderVisible(false);
        currentIcon = 'slim-arrow-down';
        anchorBarRef.current.style.top = '-0.025rem';
      }
    });
  }, []);

  useEffect(() => {
    headerPinnedRef.current = headerPinned;
    if (headerPinned === true) {
      anchorBarRef.current.style.top = '0.025rem';
    }
  }, [headerPinned]);

  return (
    <div
      ref={dynamicPageRef}
      title={tooltip}
      className={dynamicPageClasses.toString()}
      style={style}
      {...passThroughProps}
    >
      {cloneElement(title, {
        ref: topHeaderRef,
        headerVisible,
        onToggleHeaderContentVisibility: onToggleHeaderContent
      })}
      {cloneElement(header, {
        ref: headerContentRef,
        style: { top: noHeader ? 0 : topHeaderHeight },
        headerPinned,
        topHeaderHeight,
        classes
      })}
      <FlexBox
        className={classes.anchorBar}
        style={{
          top: headerPinned
            ? topHeaderRef.current?.scrollHeight + headerContentRef.current?.scrollHeight
            : topHeaderRef.current?.scrollHeight
        }}
      >
        <DynamicPageAnchorBar
          ref={anchorBarRef}
          style={{ top: '0.025rem' }}
          headerContentPinnable={headerContentPinnable}
          showHideHeaderButton={showHideHeaderButton && !noHeader}
          headerContentHeight={headerContentHeight}
          onToggleHeaderContentVisibility={onToggleHeaderContentVisibility}
          setHeaderPinned={setHeaderPinned}
          headerPinned={headerPinned}
          onHoverToggleButton={onHoverToggleButton}
        />
      </FlexBox>
      <div className={classes.contentContainer}>
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
});

DynamicPage.displayName = 'DynamicPage';

export { DynamicPage };
