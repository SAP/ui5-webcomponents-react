import { render } from '@shared/tests';
import { UploadCollection } from '@ui5/webcomponents-react/lib/UploadCollection';
import React from 'react';

describe('UploadCollection', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<UploadCollection />);
    expect(asFragment()).toMatchSnapshot();
  });
});
