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
import { createComponentStyles } from '@ui5/webcomponents-react-base';
import { FlexBox, PageBackgroundDesign } from '../..';
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

  alwaysShowContentHeader?: boolean;

  // slots
  title?: ReactElement;

  header?: ReactElement;

  anchorBar?: ReactElement;

  children: ReactNode | ReactNodeArray;

  footer?: ReactElement;
}

const DynamicPage: FC<DynamicPageProps> = forwardRef((props: DynamicPageProps, ref: Ref<HTMLDivElement>) => {
  const { title, header, anchorBar, className, tooltip, style, noHeader = false, alwaysShowContentHeader } = props;
  const passThroughProps = usePassThroughHtmlProps(props);

  const useStyles = createComponentStyles(styles, { name: 'DynamicPage' });
  const classes = useStyles();

  const anchorBarRef: RefObject<HTMLDivElement> = useRef();
  const dynamicPageRef: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
  const topHeaderRef: RefObject<HTMLDivElement> = useRef();
  const headerContentRef: RefObject<HTMLDivElement> = useRef();

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

      requestAnimationFrame(() => {
        if (dynamicPageRef.current.scrollTop > 0 && !shouldHideHeader) {
          const prevHeaderTop = headerContentRef.current.style.top;
          headerContentRef.current.style.top = `${topHeaderHeight}px`;
          const prevAnchorTop = anchorBarRef.current.style.top;
          anchorBarRef.current.style.top = `${headerContentRef.current.offsetHeight + topHeaderHeight}px`;
          dynamicPageRef.current.addEventListener(
            'scroll',
            (e) => {
              if (prevHeaderTop ?? true) {
                headerContentRef.current.style.top = prevHeaderTop;
              } else {
                headerContentRef.current.style.removeProperty('top');
              }
              if (prevAnchorTop ?? true) {
                anchorBarRef.current.style.top = prevAnchorTop;
              } else {
                anchorBarRef.current.style.removeProperty('top');
              }
            },
            { once: true }
          );
        }
      });
    },
    [dynamicPageRef, classes.headerCollapsed, headerContentHeight, topHeaderHeight]
  );

  return (
    <div ref={dynamicPageRef} title={tooltip} className={className} style={style} {...passThroughProps}>
      {cloneElement(title, { style: { position: 'sticky' }, ref: topHeaderRef })}
      {cloneElement(header, { ref: headerContentRef })}
      <FlexBox
        style={{
          top: noHeader ? 0 : headerPinned ? topHeaderHeight + headerContentHeight : topHeaderHeight,
          position: 'sticky'
        }}
      >
        <DynamicPageAnchorBar
          ref={anchorBarRef}
          headerContentPinnable
          showHideHeaderButton
          headerContentHeight={headerContentHeight}
          onToggleHeaderContentVisibility={onToggleHeaderContentVisibility}
          setHeaderPinned={setHeaderPinned}
        />
      </FlexBox>
    </div>
  );
});

DynamicPage.displayName = 'DynamicPage';

export { DynamicPage };
