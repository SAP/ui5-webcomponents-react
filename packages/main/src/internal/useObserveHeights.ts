import { useEffect, useLayoutEffect, useRef, useState } from 'react';

declare const ResizeObserver;

export const useObserveHeights = (
  objectPage,
  topHeader,
  headerContentRef,
  anchorBarRef,
  { noHeader, fixedHeader = false, isOverflowing = true }
) => {
  const [topHeaderHeight, setTopHeaderHeight] = useState(0);
  const [headerContentHeight, setHeaderContentHeight] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(true);

  
  console.log(isOverflowing);

  const prevHeaderContentHeight = useRef(0);
  const prevScrollTop = useRef(0);
  const scroll = (e) => {
    const scrollDown = prevScrollTop.current <= e.target.scrollTop;
    prevScrollTop.current = e.target.scrollTop;
    console.log(e.target.scrollTop);
    if (scrollDown && e.target.scrollTop >= headerContentHeight && !prevHeaderContentHeight.current) {
      // debugger;
      console.log('hidden', headerContentHeight);
      prevHeaderContentHeight.current = headerContentHeight;
      setIsIntersecting(false);
      setHeaderContentHeight(0);
    } else if (!scrollDown && e.target.scrollTop <= topHeaderHeight && prevHeaderContentHeight.current) {
      // debugger;
      console.log('not hidden', topHeaderHeight);
      // setHeaderContentHeight(prevHeaderContentHeight.current);
      setIsIntersecting(true);
      prevHeaderContentHeight.current = 0;
    }
  };

  // console.log('headerContentHeight', headerContentHeight);

  useEffect(() => {
    if (!fixedHeader) {
      objectPage.current.addEventListener('scroll', scroll);
    }
    return () => {
      objectPage.current?.removeEventListener('scroll', scroll);
    };
  }, [scroll, fixedHeader]);

  // useEffect(() => {
  //   const headerIntersectionObserver = new IntersectionObserver(
  //     ([header]) => {
  //       if (header.isIntersecting) {
  //         setIsIntersecting(true);
  //         console.log('intersecting');
  //       } else {
  //         setIsIntersecting(false);
  //         console.log('not intersecting');
  //         setHeaderContentHeight(0);
  //       }
  //     },
  //     // { rootMargin: `-${topHeaderHeight}px 0px 0px 0px`, root: objectPage?.current, threshold: 0.3 }
  //     { rootMargin: `-${topHeaderHeight}px 0px 0px 0px`, root: objectPage?.current }
  //   );
  //
  //   if (headerContentRef?.current) {
  //     headerIntersectionObserver.observe(headerContentRef.current);
  //   }
  //
  //   return () => {
  //     headerIntersectionObserver.disconnect();
  //   };
  // }, [topHeaderHeight, setHeaderContentHeight, headerContentRef.current, setIsIntersecting]);

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

  // // necessary for dynamically changed font size of the title
  // useLayoutEffect(() => {
  //   if (isIntersecting) {
  //     console.log('up');
  //     objectPage.current.scrollTop = 0;
  //   }
  //   if (!isIntersecting) {
  //     console.log('down');
  //     objectPage.current.scrollTop = totalHeaderHeight;
  //     debugger;
  //   }
  // }, [isIntersecting, totalHeaderHeight]);

  return { topHeaderHeight, headerContentHeight, anchorBarHeight, totalHeaderHeight };
};
