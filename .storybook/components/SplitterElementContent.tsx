import { FlexBox, Text } from '@ui5/webcomponents-react';
import type { CSSProperties } from 'react';

export const SplitterElementContent = ({
  text,
  background = 'transparent',
}: {
  text: string;
  background: CSSProperties['background'];
}) => (
  <FlexBox style={{ height: '100%', width: '100%', background }} alignItems="Center" justifyContent="Center">
    <Text>{text}</Text>
  </FlexBox>
);
