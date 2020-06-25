import { Loader } from '@ui5/webcomponents-react/lib/Loader';
import { LoaderType } from '@ui5/webcomponents-react/lib/LoaderType';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export const renderLoader = (props) => <Loader type={props.type} progress={props.progress} delay={props.delay} />;
renderLoader.storyName = 'Default';

export default {
  title: 'Components / Loader',
  component: Loader,
  argTypes: {
    ...createSelectArgTypes({ type: LoaderType }),
    ref: {
      type: null
    }
  },
  args: {
    type: LoaderType.Indeterminate,
    progress: '40%',
    delay: 1000
  }
};
