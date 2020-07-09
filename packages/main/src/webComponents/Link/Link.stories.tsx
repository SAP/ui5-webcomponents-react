import { Link } from '@ui5/webcomponents-react/lib/Link';
import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export default {
  title: 'UI5 Web Components / Link',
  component: Link,
  argTypes: {
    ...createSelectArgTypes({ design: LinkDesign }),
    children: {
      type: null
    },
    ref: {
      type: null
    }
  },
  args: {
    design: LinkDesign.Default
  }
};

export const generatedDefaultStory = (props) => (
  <Link
    design={props.design}
    disabled={props.disabled}
    href={props.href}
    target={props.target}
    wrap={props.wrap}
    onClick={props.onClick}
  >
    Some Content
  </Link>
);

generatedDefaultStory.storyName = 'Generated default story';
