import { render } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import React from 'react';

describe('Text', () => {
  test('Render Basic Text', () => {
    const { asFragment } = render(<Text>FioriText</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('No Wrap', () => {
    const { asFragment } = render(<Text wrapping={false}>Lorem Ipsum dolor sit amed</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Render Whitespace', () => {
    const { asFragment } = render(<Text renderWhitespace>Lorem Ipsum dolor sit amed</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Renders correct Text', () => {
    const el = 'My Text';
    const { asFragment } = render(<Text>{el}</Text>);
    expect(asFragment());
  });

  test('custom width', () => {
    const { asFragment } = render(<Text style={{ width: '300px' }}>Test</Text>);
    expect(asFragment());
  });

  createPassThroughPropsTest(Text);
});
