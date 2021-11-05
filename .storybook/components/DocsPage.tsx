import { DocsHeader } from '@docs/DocsHeader';
import { Footer } from '@docs/Footer';
import { ArgsTable, Primary, Stories } from '@storybook/addon-docs';
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
