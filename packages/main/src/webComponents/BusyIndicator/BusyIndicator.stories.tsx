import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import React from 'react';

export default {
  title: 'UI5 Web Components / BusyIndicator',
  component: BusyIndicator,
  argTypes: {
    ...createSelectArgTypes({ size: BusyIndicatorSize }),
    children: {
      type: null
    }
  },
  args: {
    active: true,
    text: 'Loading...'
  }
};

export const generatedDefaultStory = (props) => (
  <BusyIndicator active={props.active} size={props.size} text={props.text}>
    <Text>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      sanctus est Lorem ipsum dolor sit amet.
    </Text>
  </BusyIndicator>
);

generatedDefaultStory.storyName = 'Generated default story';
