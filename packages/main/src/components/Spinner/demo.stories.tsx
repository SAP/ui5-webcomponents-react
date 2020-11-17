import { Size } from '@ui5/webcomponents-react/lib/Size';
import { Spinner } from '@ui5/webcomponents-react/lib/Spinner';
import React, { useMemo } from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

let spinnerKey = 0;

const Demo = (props) => {
  const { delay } = props;

  const spinner = useMemo(() => {
    spinnerKey++;
    return <Spinner key={`${spinnerKey}`} size={props.size} delay={delay} />;
  }, [delay]);

  return spinner;
};

export const renderSpinner = (props) => <Demo delay={props.delay} />;
renderSpinner.storyName = 'Default';

export default {
  title: 'Loading Indicators / Spinner',
  component: Spinner,
  argTypes: {
    ...createSelectArgTypes({ size: Size }),
    ref: {
      type: null
    }
  },
  args: {
    size: Size.Medium,
    delay: 2000
  }
};
