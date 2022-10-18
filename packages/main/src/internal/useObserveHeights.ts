import { useCallback, useEffect, useRef, useState } from 'react';

declare const ResizeObserver;

export const useObserveHeights = (
  objectPage,
  topHeader,
  headerContentRef,
  anchorBarRef,
  { noHeader, fixedHeader = false },
  collapsed = undefined
) => {
  const [topHeaderHeight, setTopHeaderHeight] = useState(0);
  const [headerContentHeight, setHeaderContentHeight] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(true);
  const [headerCollapsed, setHeaderCollapsed] = useState(undefined);

  const prevHeaderContentHeight = useRef(0);
  const prevScrollTop = useRef(0);

  const onScroll = useCallback(
    (e) => {
      const scrollDown = prevScrollTop.current <= e.target.scrollTop;
      prevScrollTop.current = e.target.scrollTop;

      if (scrollDown && e.target.scrollTop >= headerContentHeight && !prevHeaderContentHeight.current) {
        prevHeaderContentHeight.current = headerContentHeight;
        setIsIntersecting(false);
        setHeaderCollapsed(true);
      } else if (!scrollDown && e.target.scrollTop <= topHeaderHeight && prevHeaderContentHeight.current) {
        setIsIntersecting(true);
        setHeaderCollapsed(false);
        prevHeaderContentHeight.current = 0;
      }
    },
    [headerContentHeight, topHeaderHeight]
  );

  useEffect(() => {
    if (!fixedHeader) {
      objectPage.current.addEventListener('scroll', onScroll);
    }
    return () => {
      objectPage.current?.removeEventListener('scroll', onScroll);
    };
  }, [onScroll, fixedHeader]);

  // top header
  useEffect(() => {
    const headerContentResizeObserver = new ResizeObserver(([header]) => {
      // Firefox implements `borderBoxSize` as a single content rect, rather than an array
      const borderBoxSize = Array.isArray(header.borderBoxSize) ? header.borderBoxSize[0] : header.borderBoxSize;
      // Safari doesn't implement `borderBoxSize`
      setTopHeaderHeight(borderBoxSize?.blockSize ?? header.target.getBoundingClientRect().height);
    });
    if (topHeader?.current) {
      headerContentResizeObserver.observe(topHeader.current);
    }
    return () => {
      headerContentResizeObserver.disconnect();
    };
  }, [topHeader?.current, setTopHeaderHeight]);

  // header content
  useEffect(() => {
    const headerContentResizeObserver = new ResizeObserver(([headerContent]) => {
      if (isIntersecting) {
        // Firefox implements `borderBoxSize` as a single content rect, rather than an array
        const borderBoxSize = Array.isArray(headerContent.borderBoxSize)
          ? headerContent.borderBoxSize[0]
          : headerContent.borderBoxSize;
        // Safari doesn't implement `borderBoxSize`
        setHeaderContentHeight(borderBoxSize?.blockSize ?? headerContent.target.getBoundingClientRect().height);
      }
    });

    if (headerContentRef?.current) {
      headerContentResizeObserver.observe(headerContentRef.current);
    }
    return () => {
      headerContentResizeObserver.disconnect();
    };
  }, [headerContentRef?.current, setHeaderContentHeight, isIntersecting]);
  const anchorBarHeight = anchorBarRef?.current?.offsetHeight ?? 33;
  const totalHeaderHeight = (noHeader ? 0 : topHeaderHeight + headerContentHeight) + anchorBarHeight;

  useEffect(() => {
    if (collapsed !== undefined) {
      setHeaderCollapsed(collapsed);
    }
  }, [collapsed]);

  return { topHeaderHeight, headerContentHeight, anchorBarHeight, totalHeaderHeight, headerCollapsed };
};
