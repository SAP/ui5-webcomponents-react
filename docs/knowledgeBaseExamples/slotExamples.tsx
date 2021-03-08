import { Bar } from '@ui5/webcomponents-react/dist/Bar';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import React from 'react';

const FaultyBarStart = () => {
  return <div>Start</div>;
};
const FaultyBarEnd = () => {
  return <Button>Close</Button>;
};
export const FaultyBarComponent = () => {
  return (
    <Bar
      startContent={<FaultyBarStart />}
      middleContent={<div>I'm not a custom component</div>}
      endContent={<FaultyBarEnd />}
    />
  );
};

const BarStart = (props) => {
  return <div slot={props.slot}>Start</div>;
};
const BarEnd = (props) => {
  return <Button slot={props.slot}>Close</Button>;
};
export const BarComponent = () => {
  return (
    <Bar startContent={<BarStart />} middleContent={<div>I'm not a custom component</div>} endContent={<BarEnd />} />
  );
};
