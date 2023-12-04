import type { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

declare const ResizeObserver;

export const useObserveHeights = (
  pageRef,
  topHeaderRef,
  headerContentRef,
  anchorBarRef,
  [headerCollapsed, setHeaderCollapsed]: [boolean, Dispatch<SetStateAction<boolean>>],
  {
    noHeader,
    fixedHeader = false,
    scrollTimeout = { current: 0 },
    preserveHeaderStateOnScroll
  }: {
    noHeader: boolean;
    fixedHeader?: boolean;
    scrollTimeout?: MutableRefObject<number>;
    preserveHeaderStateOnScroll?: boolean;
  }
) => {
  const [topHeaderHeight, setTopHeaderHeight] = useState(0);
  const [headerContentHeight, setHeaderContentHeight] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(true);

  const prevScrollTop = useRef(0);
  const onScroll = useCallback(
    (e) => {
      const scrollDown = prevScrollTop.current <= e.target.scrollTop;
      prevScrollTop.current = e.target.scrollTop;
      if (scrollTimeout.current >= performance.now()) {
        return;
      }

      if (scrollDown && e.target.scrollTop >= headerContentHeight && !headerCollapsed) {
        setIsIntersecting(false);
        setHeaderCollapsed(true);
      } else if (
        !scrollDown &&
        e.target.scrollTop <= topHeaderHeight + Math.max(0, headerContentHeight - topHeaderHeight) &&
        headerCollapsed
      ) {
        setIsIntersecting(true);
        setHeaderCollapsed(false);
      }
    },
    [headerContentHeight, topHeaderHeight, headerCollapsed]
  );

  useEffect(() => {
    if (headerContentRef.current && headerCollapsed !== undefined) {
      setHeaderContentHeight(headerContentRef.current.getBoundingClientRect().height);
    }
  }, [headerCollapsed]);

  useEffect(() => {
    const page = pageRef.current;
    if (!fixedHeader && !preserveHeaderStateOnScroll) {
      page.addEventListener('scroll', onScroll);
    }
    return () => {
      page.removeEventListener('scroll', onScroll);
    };
  }, [onScroll, fixedHeader, preserveHeaderStateOnScroll]);

  // top header
  useEffect(() => {
    const headerContentResizeObserver = new ResizeObserver(([header]) => {
      // Firefox implements `borderBoxSize` as a single content rect, rather than an array
      const borderBoxSize = Array.isArray(header.borderBoxSize) ? header.borderBoxSize[0] : header.borderBoxSize;
      // Safari doesn't implement `borderBoxSize`
      setTopHeaderHeight(borderBoxSize?.blockSize ?? header.target.getBoundingClientRect().height);
    });
    if (topHeaderRef?.current) {
      headerContentResizeObserver.observe(topHeaderRef.current);
    }
    return () => {
      headerContentResizeObserver.disconnect();
    };
  }, []);

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
  }, [isIntersecting]);
  const anchorBarHeight = anchorBarRef?.current?.offsetHeight ?? 33;
  const totalHeaderHeight = (noHeader ? 0 : topHeaderHeight + headerContentHeight) + anchorBarHeight;

  return { topHeaderHeight, headerContentHeight, anchorBarHeight, totalHeaderHeight, headerCollapsed };
};
