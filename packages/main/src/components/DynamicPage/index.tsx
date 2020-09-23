import { StyleClassHelper, ThemingParameters } from '@ui5/webcomponents-react-base';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { useConsolidatedRef, usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/hooks';
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
import { PageBackgroundDesign } from '../..';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { GlobalStyleClasses } from '@ui5/webcomponents-react/lib/GlobalStyleClasses';

import { CommonProps } from '../../interfaces/CommonProps';
import { DynamicPageAnchorBar } from '../DynamicPageAnchorBar/DynamicPageAnchorBar';
import { useObserveHeights } from '../ObjectPage/useObserveHeights';
import styles from './DynamicPage.jss';

export interface DynamicPageProps extends CommonProps {
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

  anchorBar?: ReactElement;

  contentArea?: ReactElement;

  children?: ReactNode | ReactNodeArray;

  footer?: ReactElement;
}

const DynamicPage: FC<DynamicPageProps> = forwardRef((props: DynamicPageProps, ref: Ref<HTMLDivElement>) => {
  const {
    title,
    header,
    contentArea,
    tooltip,
    style,
    noHeader = false,
    showHideHeaderButton = true,
    headerContentPinnable = true,
    alwaysShowContentHeader = false
  } = props;
  const passThroughProps = usePassThroughHtmlProps(props);

  const useStyles = createComponentStyles(styles, { name: 'DynamicPage' });
  const classes = useStyles();
  const dynamicPageClasses = StyleClassHelper.of(classes.dynamicPage, GlobalStyleClasses.sapScrollBar);

  const anchorBarRef: RefObject<HTMLDivElement> = useRef();
  const dynamicPageRef: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
  const topHeaderRef: RefObject<HTMLDivElement> = useRef();
  const headerContentRef: RefObject<HTMLDivElement> = useRef();
  const contentAreaRef: RefObject<HTMLDivElement> = useRef();

  const [headerPinned, setHeaderPinned] = useState(alwaysShowContentHeader);

  // observe heights of header parts
  const { topHeaderHeight, headerContentHeight, anchorBarHeight, totalHeaderHeight } = useObserveHeights(
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
      const shouldHideHeader = srcElement.icon === 'slim-arrow-up';
      if (shouldHideHeader) {
        dynamicPageRef.current.classList.add(classes.headerCollapsed);
        setHeaderPinned(false);
      } else {
        dynamicPageRef.current.classList.remove(classes.headerCollapsed);
      }
      requestAnimationFrame(() => {
        if (dynamicPageRef.current.scrollTop > 0 && !shouldHideHeader) {
          anchorBarRef.current.style.top = `${headerContentRef.current.scrollHeight}px`;
          headerContentRef.current.style.top = `${topHeaderHeight}px`;
          dynamicPageRef.current.addEventListener(
            'scroll',
            () => {
              if (!anchorBarRef?.current?.children?.[1]?.attributes?.[6]) {
                headerContentRef.current.style.removeProperty('top');
                anchorBarRef.current.style.top = '0.025rem';
              }
            },
            { once: true }
          );
        }
      });
    },
    [dynamicPageRef, classes.headerCollapsed, headerContentHeight, topHeaderHeight, headerPinned]
  );

  const onHoverToggleButton = (e) => {
    if (e && e.type === 'mouseover') {
      // TODO background color should be sapObjectHeader_Hover_Background (same color as sapTile_Active_Background)
      topHeaderRef.current.style.backgroundColor = ThemingParameters.sapTile_Active_Background;
    } else {
      topHeaderRef.current.style.backgroundColor = null;
    }
  };

  const onToggleHeaderContent = (e) => {
    if (e.target.tagName === 'DIV') {
      onToggleHeaderContentVisibility(e, anchorBarRef.current.children.item(0));
    }
  };

  useEffect(() => {
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
      {cloneElement(title, { ref: topHeaderRef, onToggleHeaderContentVisibility: onToggleHeaderContent })}
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
      {cloneElement(contentArea, { ref: contentAreaRef })}
    </div>
  );
});

DynamicPage.displayName = 'DynamicPage';

export { DynamicPage };
