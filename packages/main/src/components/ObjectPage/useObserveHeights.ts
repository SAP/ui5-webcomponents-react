import { useEffect, useState } from 'react';

declare const ResizeObserver;

export const useObserveHeights = (objectPage, topHeader, headerContentRef, anchorBarRef, { noHeader }) => {
  const [topHeaderHeight, setTopHeaderHeight] = useState(0);
  const [headerContentHeight, setHeaderContentHeight] = useState(0);

  useEffect(() => {
    const headerIntersectionObserver = new IntersectionObserver(
      ([header]) => {
        if (header.isIntersecting) {
          setHeaderContentHeight((header.target as HTMLElement).offsetHeight);
        } else {
          setHeaderContentHeight(0);
        }
      },
      { rootMargin: `-${topHeaderHeight}px 0px 0px 0px`, root: objectPage.current, threshold: 0.5 }
    );

    if (headerContentRef.current) {
      headerIntersectionObserver.observe(headerContentRef.current);
    }

    return () => {
      headerIntersectionObserver.disconnect();
    };
  }, [topHeaderHeight, setHeaderContentHeight, headerContentRef]);

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
  const totalHeaderHeight = (noHeader ? 0 : topHeaderHeight + headerContentHeight) + anchorBarHeight;

  return { topHeaderHeight, headerContentHeight, anchorBarHeight, totalHeaderHeight };
};
