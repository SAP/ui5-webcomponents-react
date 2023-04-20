import { useEffect } from 'react';
import * as tocbot from 'tocbot';
import classes from './ToC.module.css';

export function TableOfContent({
  headingSelector = 'h2:not(.noAnchor), h3:not(.noAnchor), h4:not(.noAnchor)',
  onlyDisplaySideNav = false
}) {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.js-toc',
      contentSelector: '.sbdocs-wrapper',
      headingSelector,
      orderedList: false,
      collapseDepth: 6,
      hasInnerContainers: true
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
      <div className={classes.fixedContainer} data-show-small={!onlyDisplaySideNav}>
        <div className={`js-toc ${classes.toc}`} id="toc-container" />
      </div>
    </>
  );
}
