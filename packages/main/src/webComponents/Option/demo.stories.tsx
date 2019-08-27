import React from 'react';

import { boolean } from '@storybook/addon-knobs';
import { Option } from './index';

export default {
  title: 'UI5 Web Components | Option',
  component: Option
};

export const generatedDefaultStory = () => (
  <Option selected={boolean('selected', false)} icon={'sap-icon://add'} value={'generatedString'} />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
