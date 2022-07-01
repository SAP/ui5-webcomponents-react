import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import React from 'react';
import { ObjectPageSubSection } from './index';

describe('ObjectPageSubSection', () => {
  test('Render without Crashing', () => {
    const { asFragment } = render(<ObjectPageSubSection id="test">Content</ObjectPageSubSection>);
    expect(asFragment()).toMatchSnapshot();
  });

  createCustomPropsTest(ObjectPageSubSection);
});
