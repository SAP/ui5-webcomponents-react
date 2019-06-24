import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Switch } from '../../lib/Switch';

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
