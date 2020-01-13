import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';
import notes from './Link.md';

export default {
  title: 'UI5 Web Components / Link',
  component: Link,
  parameters: { notes }
};

export const generatedDefaultStory = () => (
  <Link
    disabled={boolean('disabled', false)}
    href={'generatedString'}
    target={'generatedString'}
    design={select('design', LinkDesign, null)}
    wrap={boolean('wrap', false)}
    onClick={action('onClick')}
  >
    Some Content
  </Link>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
