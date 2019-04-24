import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { MessageStrip } from './index';
import { MessageStripType } from '../../enums/MessageStripType';

storiesOf('UI5 Web Components | MessageStrip', module).add('Default story', () => (
  <MessageStrip
    type={select('type', MessageStripType, MessageStripType.Information)}
    icon={text('icon', 'add')}
    hideIcon={boolean('hideIcon', false)}
    hideCloseButton={boolean('hideCloseButton', false)}
    onClose={action('onClose')}
  >
    Some Content
  </MessageStrip>
));
