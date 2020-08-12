import { DocsHeader } from '@shared/stories/DocsHeader';
import { ArgsTable, Primary, Stories } from '@storybook/addon-docs/blocks';
import React from 'react';

export const DocsPage = () => {
  return (
    <>
      <DocsHeader />
      <Primary />
      <ArgsTable story="." />
      <Stories />
    </>
  );
};

DocsPage.displayName = 'DocsPage';
