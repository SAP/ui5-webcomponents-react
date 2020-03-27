import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import React from 'react';

export default {
  title: 'UI5 Web Components / Link',
  component: Link
};

export const generatedDefaultStory = () => (
  <Link
    design={text('design', 'Default')}
    disabled={boolean('disabled', false)}
    href={text('href', '')}
    target={text('target', '')}
    wrap={boolean('wrap', false)}
    onClick={action('onClick')}
  >
    Some Content
  </Link>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
