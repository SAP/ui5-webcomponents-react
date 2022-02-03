import React from 'react';
import { FlexBox } from '@ui5/webcomponents-react/dist/FlexBox';
import { Text } from '@ui5/webcomponents-react/dist/Text';

export const SplitterElementContent = ({ text, background = 'transparent' }) => (
  <FlexBox style={{ height: '100%', width: '100%', background }} alignItems="Center" justifyContent="Center">
    <Text>{text}</Text>
  </FlexBox>
);
