import '@ui5/webcomponents-icons/dist/icons/add';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React from 'react';

export default {
  title: 'UI5 Web Components / Icon',
  component: Icon,
  args: {
    name: 'add'
  }
};

export const generatedDefaultStory = (props) => (
  <Icon accessibleName={props.accessibleName} name={props.name} showTooltip={props.showTooltip} />
);

generatedDefaultStory.storyName = 'Generated default story';
