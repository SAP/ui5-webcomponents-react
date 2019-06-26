import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { MessageStrip } from '../../lib/MessageStrip';
import { MessageStripType } from '../../lib/MessageStripType';

storiesOf('UI5 Web Components | MessageStrip', module).add('Default story', () => (
  <MessageStrip
    type={select('type', MessageStripType, MessageStripType.Information)}
    icon={text('icon', 'add')}
    noIcon={boolean('noIcon', false)}
    noCloseButton={boolean('noCloseButton', false)}
    onClose={action('onClose')}
  >
    Some Content
  </MessageStrip>
));
