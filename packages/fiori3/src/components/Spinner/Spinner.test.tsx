import { Size } from '../../lib/Size';
import { Spinner } from '../../lib/Spinner';
import { renderThemedComponent } from '@shared/tests/utils';
import React from 'react';

describe('Spinner', () => {
  test('small', () => {
    const wrapper = renderThemedComponent(<Spinner size={Size.Small} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('medium', () => {
    const wrapper = renderThemedComponent(<Spinner size={Size.Medium} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('large', () => {
    const wrapper = renderThemedComponent(<Spinner size={Size.Large} />);
    expect(wrapper).toMatchSnapshot();
  });
});
