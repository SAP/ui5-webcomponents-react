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
  useRef
} from 'react';
import { FlexBox, PageBackgroundDesign } from '../..';

import { CommonProps } from '../../interfaces/CommonProps';
import { DynamicPageAnchorBar } from '../DynamicPageAnchorBar/DynamicPageAnchorBar';
import { useObserveHeights } from '../ObjectPage/useObserveHeights';

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

  headerPinned?: boolean;

  // slots
  title?: ReactElement;

  header?: ReactElement;

  anchorBar?: ReactElement;

  children: ReactNode | ReactNodeArray;

  footer?: ReactElement;
}

const DynamicPage: FC<DynamicPageProps> = forwardRef((props: DynamicPageProps, ref: Ref<HTMLDivElement>) => {
  const { title, header, anchorBar, className, tooltip, style, noHeader = false, headerPinned = false } = props;
  const passThroughProps = usePassThroughHtmlProps(props);

  const anchorBarRef: RefObject<HTMLDivElement> = useRef();
  const dynamicPageRef: RefObject<HTMLDivElement> = useConsolidatedRef(ref);
  const topHeaderRef: RefObject<HTMLDivElement> = useRef();
  const headerContentRef: RefObject<HTMLDivElement> = useRef();

  // observe heights of header parts
  const { topHeaderHeight, headerContentHeight, anchorBarHeight, totalHeaderHeight } = useObserveHeights(
    dynamicPageRef,
    topHeaderRef,
    headerContentRef,
    anchorBarRef,
    { noHeader }
  );

  return (
    <div ref={dynamicPageRef} title={tooltip} className={className} style={style} {...passThroughProps}>
      {cloneElement(title, { style: { position: 'sticky' } })}
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
        />
      </FlexBox>
    </div>
  );
});

DynamicPage.displayName = 'DynamicPage';

export { DynamicPage };
