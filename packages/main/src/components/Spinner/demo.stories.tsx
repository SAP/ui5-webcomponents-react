import { number, select } from '@storybook/addon-knobs';
import { Size } from '@ui5/webcomponents-react/lib/Size';
import { Spinner } from '@ui5/webcomponents-react/lib/Spinner';
import React, { useMemo } from 'react';

let spinnerKey = 0;

const Demo = (props) => {
  const { delay } = props;

  const spinner = useMemo(() => {
    spinnerKey++;
    return <Spinner key={`${spinnerKey}`} size={select('size', Size, Size.Medium)} delay={delay} />;
  }, [delay]);

  return spinner;
};

export const renderSpinner = () => <Demo delay={number('delay', 2000)} />;
renderSpinner.story = {
  name: 'Default'
};

export default {
  title: 'Components / Spinner',
  component: Spinner
};
