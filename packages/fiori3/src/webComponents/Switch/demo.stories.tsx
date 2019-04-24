import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Switch } from './index';

storiesOf('UI5 Web Components | Switch', module).add('Generated default story', () => (
  <Switch
    checked={boolean('checked', false)}
    disabled={boolean('disabled', false)}
    textOn={text('textOn', 'Yes')}
    textOff={text('textOff', 'No')}
    type={select('type', ['Textual', 'Graphical'], 'Textual')}
    onChange={action('onChange')}
  />
));
