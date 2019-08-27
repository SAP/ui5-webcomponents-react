import { select } from '@storybook/addon-knobs';
import React from 'react';
import { Size } from '../../lib/Size';
import { Spinner } from '../../lib/Spinner';

export const renderSpinner = () => <Spinner size={select('size', Size, Size.Medium)} />;
renderSpinner.story = {
  name: 'Default'
};

export default {
  title: 'Components | Spinner',
  component: Spinner
};
