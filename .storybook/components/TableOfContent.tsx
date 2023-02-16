import React, { useEffect } from 'react';
import tocbot from 'tocbot';
import classes from './ToC.module.css';

export function TableOfContent({ headingSelector = 'h2.sbdocs-h2, h3.sbdocs-h3, h4.sbdocs-h4' }) {
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
      <h3 className={classes.header}>Contents</h3>
      <div className={classes.fixedContainer}>
        <div className={`js-toc ${classes.toc}`} id="toc-container" />
      </div>
    </>
  );
}
