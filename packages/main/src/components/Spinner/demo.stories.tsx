import { select } from '@storybook/addon-knobs';
import React from 'react';
import { Size } from '@ui5/webcomponents-react/lib/Size';
import { Spinner } from '@ui5/webcomponents-react/lib/Spinner';

export const renderSpinner = () => <Spinner size={select('size', Size, Size.Medium)} />;
renderSpinner.story = {
  name: 'Default'
};

export default {
  title: 'Components | Spinner',
  component: Spinner
};
