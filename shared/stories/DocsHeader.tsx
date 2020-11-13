import { Header } from '@shared/stories/Header';
import { Description, Subtitle, Title } from '@storybook/addon-docs/blocks';
import React, { useEffect } from 'react';
import tocbot from 'tocbot';
import { TableOfContent } from './TableOfContent';

import { Import } from './Import';

export const DocsHeader = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.js-toc',
      contentSelector: '.sbdocs-wrapper',
      headingSelector: 'h1.sbdocs-title, h1.sbdocs-h1, h2.sbdocs-h2, h3.sbdocs-h3, h4.sbdocs-h4',
      orderedList: false,
      collapseDepth: 6,
      hasInnerContainers: true
    });
    document.querySelectorAll('.toc-link').forEach((x) => x.setAttribute('target', '_self'));
    return () => {
      tocbot.destroy();
    };
  }, []);
  return (
    <>
      <Header />
      <Title />
      <Subtitle />
      <Import />
      <TableOfContent />
      <Description />
    </>
  );
};
