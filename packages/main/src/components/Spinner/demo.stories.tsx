import { number, select } from '@storybook/addon-knobs';
import { Size } from '@ui5/webcomponents-react/lib/Size';
import { Spinner } from '@ui5/webcomponents-react/lib/Spinner';
import React from 'react';

export const renderSpinner = () => <Spinner size={select('size', Size, Size.Medium)} delay={number('delay', 0)} />;
renderSpinner.story = {
  name: 'Default'
};

export default {
  title: 'Components | Spinner',
  component: Spinner
};
