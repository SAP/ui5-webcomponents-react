import React, { useEffect } from 'react';
import tocbot from 'tocbot';
import classes from './ToC.module.css';

function makeIds(headingSelector) {
  const headings = document.querySelector('.sbdocs-wrapper').querySelectorAll(headingSelector);
  const headingMap = {};

  headings.forEach(function (heading) {
    const id =
      heading.id ??
      heading.textContent
        .trim()
        .toLowerCase()
        .split(' ')
        .join('-')
        .replace(/[!@#$%^&*():]/gi, '')
        .replace(/\//gi, '-');
    headingMap[id] = !isNaN(headingMap[id]) ? ++headingMap[id] : 0;
    if (headingMap[id]) {
      heading.id = id + '-' + headingMap[id];
    } else {
      heading.id = id;
    }
  });
}

export function TableOfContent({ headingSelector = 'h2:not(.noAnchor), h3:not(.noAnchor), h4:not(.noAnchor)' }) {
  useEffect(() => {
    makeIds(headingSelector);

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
      <h3 className={`${classes.header} noAnchor`}>Contents</h3>
      <div className={classes.fixedContainer}>
        <div className={`js-toc ${classes.toc}`} id="toc-container" />
      </div>
    </>
  );
}
