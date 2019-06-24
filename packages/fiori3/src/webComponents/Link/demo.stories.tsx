import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Link } from '../../lib/Link';
import { LinkType } from '../../lib/LinkType';

storiesOf('UI5 Web Components | Link', module).add('Generated default story', () => (
  <Link
    disabled={boolean('disabled', false)}
    href={'generatedString'}
    target={'generatedString'}
    type={select('type', LinkType, null)}
    wrap={boolean('wrap', false)}
    onPress={null}
  >
    Some Content
  </Link>
));
