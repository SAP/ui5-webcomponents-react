import { useEffect, useState } from 'react';

const ANCHOR_BAR_HEIGHT = 44;
declare const ResizeObserver;

export const useObserveHeights = (objectPage, topHeader, headerContentRef, { noHeader, internalHeaderOpen }) => {
  const [topHeaderHeight, setTopHeaderHeight] = useState(0);
  const [headerContentHeight, setHeaderContentHeight] = useState(0);

  // top header
  useEffect(() => {
    const headerContentResizeObserver = new ResizeObserver(([header]) => {
      if (header?.contentRect?.height) {
        setTopHeaderHeight(header?.contentRect?.height);
      }
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
      if (headerContent?.contentRect?.height) {
        setHeaderContentHeight(headerContent?.contentRect?.height);
      }
    });

    if (headerContentRef.current) {
      headerContentResizeObserver.observe(headerContentRef.current);
    }
    return () => {
      headerContentResizeObserver.disconnect();
    };
  }, [headerContentRef.current, setHeaderContentHeight]);

  const totalHeaderHeight =
    (noHeader ? 0 : topHeaderHeight + (internalHeaderOpen ? headerContentHeight : 0)) + ANCHOR_BAR_HEIGHT;

  return { topHeaderHeight, headerContentHeight, totalHeaderHeight };
};
