import { storiesOf } from '@storybook/react';
import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Icon } from '../../lib/Icon';

storiesOf('UI5 Web Components | Icon', module).add('Default story', () => (
  <Icon src={text('src', 'sap-icon://add')} onPress={action('onPress')} />
));
