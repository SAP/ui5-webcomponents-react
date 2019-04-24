import React from 'react';
import { storiesOf } from '@storybook/react';
import { LinkType } from '@fiori-for-react/core/enums/LinkType';
import { boolean, select } from '@storybook/addon-knobs';
import { Link } from './index';

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
