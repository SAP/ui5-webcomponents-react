import { FlexBox, Text } from '@ui5/webcomponents-react';

export const SplitterElementContent = ({ text, background = 'transparent' }) => (
  <FlexBox style={{ height: '100%', width: '100%', background }} alignItems="Center" justifyContent="Center">
    <Text>{text}</Text>
  </FlexBox>
);
