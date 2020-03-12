import { number, select, text } from '@storybook/addon-knobs';
import { Loader } from '@ui5/webcomponents-react/lib/Loader';
import { LoaderType } from '@ui5/webcomponents-react/lib/LoaderType';
import React from 'react';

export const renderLoader = () => (
  <Loader
    type={select('type', LoaderType, LoaderType.Indeterminate)}
    progress={text('progress', '40%')}
    delay={number('delay', 0)}
  />
);
renderLoader.story = {
  name: 'Default'
};

export default {
  title: 'Components / Loader',
  component: Loader
};
