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

enum HEADER_STATES {
  AUTO,
  VISIBLE_PINNED,
  HIDDEN_PINNED,
  VISIBLE,
  HIDDEN
}

const DynamicPage: FC<DynamicPageProps> = forwardRef((props: DynamicPageProps, ref: Ref<HTMLDivElement>) => {
  const {
    title,
    header,
    tooltip,
    style,
    backgroundDesign = PageBackgroundDesign.Standard,
    showHideHeaderButton = true,
    headerContentPinnable = true,
    alwaysShowContentHeader = false,
    children
  } = props;
  const passThroughProps = usePassThroughHtmlProps(props);

  const useStyles = createComponentStyles(styles, { name: 'DynamicPage' });
  const classes = useStyles();
  const dynamicPageClasses = StyleClassHelper.of(classes.dynamicPage, GlobalStyleClasses.sapScrollBar);
  dynamicPageClasses.put(classes[`background${backgroundDesign}`]);

  const anchorBarRef: RefObject<HTMLDivElement> = useRef();
  const dynamicPageRef: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
  const topHeaderRef: RefObject<HTMLDivElement> = useRef();
  const headerContentRef: RefObject<HTMLDivElement> = useRef();

  const [headerState, setHeaderState] = useState<HEADER_STATES>(
    alwaysShowContentHeader ? HEADER_STATES.VISIBLE_PINNED : HEADER_STATES.AUTO
  );

  // observe heights of header parts
  const { topHeaderHeight, headerContentHeight } = useObserveHeights(
    dynamicPageRef,
    topHeaderRef,
    headerContentRef,
    anchorBarRef,
    { noHeader: false }
  );

  if (headerState === HEADER_STATES.HIDDEN || headerState === HEADER_STATES.HIDDEN_PINNED) {
    dynamicPageClasses.put(classes.headerCollapsed);
  }

  const onToggleHeaderContentVisibility = useCallback(
    (e, element?) => {
      let srcElement = e.target;
      if (element) {
        srcElement = element;
      }
      const shouldHideHeader = srcElement.icon === 'slim-arrow-up';

      let headerStateResetOnScroll = false;

      setHeaderState((oldState) => {
        if (oldState === HEADER_STATES.VISIBLE_PINNED || oldState === HEADER_STATES.HIDDEN_PINNED) {
          return shouldHideHeader ? HEADER_STATES.HIDDEN_PINNED : HEADER_STATES.VISIBLE_PINNED;
        }
        headerStateResetOnScroll = true;
        return shouldHideHeader ? HEADER_STATES.HIDDEN : HEADER_STATES.VISIBLE;
      });

      if (headerStateResetOnScroll) {
        dynamicPageRef.current.addEventListener(
          'scroll',
          () => {
            setHeaderState(HEADER_STATES.AUTO);
          },
          { once: true }
        );
      }
    },
    [dynamicPageRef, classes.headerCollapsed, headerContentHeight, topHeaderHeight]
  );

  const onHoverToggleButton = useCallback(
    (e) => {
      // TODO background color should be sapObjectHeader_Hover_Background (same color as sapTile_Active_Background)
      topHeaderRef.current.style.backgroundColor =
        e?.type === 'mouseover' ? ThemingParameters.sapTile_Active_Background : null;
    },
    [topHeaderRef]
  );

  const onToggleHeaderContent = (e) => {
    if (e.target.tagName === 'DIV') {
      onToggleHeaderContentVisibility(e, anchorBarRef.current.children.item(0));
    }
  };

  const handleHeaderPinnedChange = useCallback(
    (headerWillPin) => {
      if (headerWillPin) {
        setHeaderState(HEADER_STATES.VISIBLE_PINNED);
      } else {
        setHeaderState(HEADER_STATES.AUTO);
      }
    },
    [setHeaderState]
  );
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
        onToggleHeaderContentVisibility: onToggleHeaderContent
      })}
      {cloneElement(header, {
        ref: headerContentRef,
        headerPinned: headerState === HEADER_STATES.VISIBLE_PINNED || headerState === HEADER_STATES.VISIBLE,
        topHeaderHeight
      })}
      <FlexBox
        className={classes.anchorBar}
        ref={anchorBarRef}
        style={{
          top:
            headerState === HEADER_STATES.VISIBLE_PINNED || headerState === HEADER_STATES.VISIBLE
              ? headerContentRef.current?.offsetHeight + topHeaderHeight
              : topHeaderHeight
        }}
      >
        <DynamicPageAnchorBar
          headerContentPinnable={headerContentPinnable}
          showHideHeaderButton={showHideHeaderButton}
          headerContentHeight={headerContentHeight}
          onToggleHeaderContentVisibility={onToggleHeaderContentVisibility}
          setHeaderPinned={handleHeaderPinnedChange}
          headerPinned={headerState === HEADER_STATES.VISIBLE_PINNED || headerState === HEADER_STATES.HIDDEN_PINNED}
          onHoverToggleButton={onHoverToggleButton}
        />
      </FlexBox>
      <div className={classes.contentContainer}>{children}</div>
    </div>
  );
});

DynamicPage.displayName = 'DynamicPage';

export { DynamicPage };
