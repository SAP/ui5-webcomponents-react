import { useEffect, useState } from 'react';

declare const ResizeObserver;

export const useObserveHeights = (
  objectPage,
  topHeader,
  headerContentRef,
  anchorBarRef,
  { noHeader, internalHeaderOpen }
) => {
  const [topHeaderHeight, setTopHeaderHeight] = useState(0);
  const [headerContentHeight, setHeaderContentHeight] = useState(0);

  // top header
  useEffect(() => {
    const headerContentResizeObserver = new ResizeObserver(([header]) => {
      setTopHeaderHeight(header?.contentRect?.height ?? 0);
    });
    if (topHeader.current) {
      headerContentResizeObserver.observe(topHeader.current);
    }
    return () => {
      headerContentResizeObserver.disconnect();
    };
  }, [topHeader.current, setHeaderContentHeight]);

  // header content
  useEffect(() => {
    const headerContentResizeObserver = new ResizeObserver(([headerContent]) => {
      setHeaderContentHeight(headerContent?.contentRect?.height ?? 0);
    });

    if (headerContentRef.current) {
      headerContentResizeObserver.observe(headerContentRef.current);
    }
    return () => {
      headerContentResizeObserver.disconnect();
    };
  }, [headerContentRef.current, setHeaderContentHeight]);

  const anchorBarHeight = anchorBarRef.current?.offsetHeight ?? 33;

  const totalHeaderHeight =
    (noHeader ? 0 : topHeaderHeight + (internalHeaderOpen ? headerContentHeight : 0)) + anchorBarHeight;

  return { topHeaderHeight, headerContentHeight, anchorBarHeight, totalHeaderHeight };
};
