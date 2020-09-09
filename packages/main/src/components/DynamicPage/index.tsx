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
  useState
} from 'react';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { FlexBox, PageBackgroundDesign } from '../..';
import { CommonProps } from '../../interfaces/CommonProps';
import { DynamicPageAnchorBar } from '../DynamicPageAnchorBar/DynamicPageAnchorBar';
import { useObserveHeights } from '../ObjectPage/useObserveHeights';
import styles, { DynamicPageCssVariables } from './DynamicPage.jss';
import { ObjectPageAnchorBar } from '../ObjectPage/ObjectPageAnchorBar';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

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

  children: ReactNode | ReactNodeArray;

  footer?: ReactElement;
}

const DynamicPage: FC<DynamicPageProps> = forwardRef((props: DynamicPageProps, ref: Ref<HTMLDivElement>) => {
  const {
    title,
    header,
    contentArea,
    className,
    tooltip,
    style,
    noHeader = false,
    showHideHeaderButton = true,
    headerContentPinnable = true,
    alwaysShowContentHeader
  } = props;
  const passThroughProps = usePassThroughHtmlProps(props);

  const useStyles = createComponentStyles(styles, { name: 'DynamicPage' });
  const classes = useStyles();

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
    (e) => {
      const srcElement = e.target;
      const shouldHideHeader = srcElement.icon === 'slim-arrow-up';
      if (shouldHideHeader) {
        dynamicPageRef.current.classList.add(classes.headerCollapsed);
      } else {
        dynamicPageRef.current.classList.remove(classes.headerCollapsed);
      }
    },
    [dynamicPageRef, classes.headerCollapsed]
  );

  let mouseOut = true;
  const onHoverToggleButton = (e) => {
    if (e && mouseOut) {
      topHeaderRef.current.style.backgroundColor = ThemingParameters.sapTile_Active_Background;
      topHeaderRef.current.style.borderBottom = `solid 0.0625rem ${ThemingParameters.sapObjectHeader_BorderColor}`;
      mouseOut = false;
    } else {
      topHeaderRef.current.style.backgroundColor = ThemingParameters.sapObjectHeader_Background;
      topHeaderRef.current.style.borderBottom = null;
      mouseOut = true;
    }
    return null;
  };

  return (
    <div ref={dynamicPageRef} title={tooltip} className={className} style={style} {...passThroughProps}>
      {cloneElement(title, { ref: topHeaderRef, onToggleHeaderContentVisibility })}
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
          top: noHeader ? 0 : headerPinned ? topHeaderHeight + headerContentHeight : topHeaderHeight
        }}
      >
        <DynamicPageAnchorBar
          ref={anchorBarRef}
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
