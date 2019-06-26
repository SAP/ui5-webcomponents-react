import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TextArea } from '../../lib/TextArea';

storiesOf('UI5 Web Components | TextArea', module).add('Generated default story', () => (
  <TextArea
    value={'generatedString'}
    disabled={boolean('disabled', false)}
    readonly={boolean('readonly', false)}
    placeholder={'generatedString'}
    rows={42}
    maxLength={42}
    showExceededText={boolean('showExceededText', false)}
    growing={boolean('growing', false)}
    growingMaxLines={42}
    onChange={null}
  />
));
