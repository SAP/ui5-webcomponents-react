import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Link } from '../../lib/Link';
import { LinkDesign } from '../../lib/LinkDesign';

storiesOf('UI5 Web Components | Link', module).add('Generated default story', () => (
  <Link
    disabled={boolean('disabled', false)}
    href={'generatedString'}
    target={'generatedString'}
    design={select('design', LinkDesign, null)}
    wrap={boolean('wrap', false)}
    onPress={null}
  >
    Some Content
  </Link>
));
