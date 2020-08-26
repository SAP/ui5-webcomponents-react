import { Header } from '@shared/stories/Header';
import { Description, Subtitle, Title } from '@storybook/addon-docs/blocks';
import React from 'react';

import { Import } from './Import';

export const DocsHeader = () => {
  return (
    <>
      <Header />
      <Title />
      <Subtitle />
      <Import />
      <Description />
    </>
  );
};
