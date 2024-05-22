/* eslint-disable react/prop-types */
import { Bar, Button } from '@ui5/webcomponents-react';

const FaultyBarStart = () => {
  return <div>Start</div>;
};
const FaultyBarEnd = () => {
  return <Button>Close</Button>;
};
export const FaultyBarComponent = () => {
  return (
    <Bar startContent={<FaultyBarStart />} endContent={<FaultyBarEnd />}>
      <div>Not a custom component</div>
    </Bar>
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
    <Bar startContent={<BarStart />} endContent={<BarEnd />}>
      <div>Not a custom component</div>
    </Bar>
  );
};
