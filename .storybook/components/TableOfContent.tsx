import { useCallback, useEffect } from 'react';
import * as tocbot from 'tocbot';
import classes from './ToC.module.css';

export function TableOfContent({
  headingSelector = 'h2:not(.noAnchor), h3:not(.noAnchor), h4:not(.noAnchor)',
  onlyDisplaySideNav = false,
  tocOverflowHeight = 1080,
}: {
  headingSelector?: string;
  onlyDisplaySideNav?: boolean;
  tocOverflowHeight?: number;
}) {
  const refCallback = useCallback(
    (node: HTMLDivElement) => {
      if (node) {
        if (
          window.matchMedia('(min-width:1330px)').matches &&
          window.matchMedia(`(min-height:${tocOverflowHeight}px)`).matches
        ) {
          node.style.overflowY = 'hidden';
        } else {
          node.style.overflowY = undefined;
        }
      }
    },
    [tocOverflowHeight],
  );

  useEffect(() => {
    tocbot.init({
      tocSelector: '.js-toc',
      contentSelector: '.sbdocs-wrapper',
      headingSelector,
      orderedList: false,
      collapseDepth: 6,
      hasInnerContainers: true,
    });

    document.querySelectorAll('.toc-link').forEach((x) => x.setAttribute('target', '_self'));

    return () => {
      tocbot.destroy();
    };
  }, [headingSelector]);
  return (
    <>
      <h3 className={`${classes.header} noAnchor`} data-show-small={!onlyDisplaySideNav}>
        Contents
      </h3>
      <div ref={refCallback} className={classes.fixedContainer} data-show-small={!onlyDisplaySideNav}>
        <div className={`js-toc ${classes.toc}`} id="toc-container" />
      </div>
    </>
  );
}
