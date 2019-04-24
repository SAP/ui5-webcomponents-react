import React from 'react';
import { Spinner } from './index';
import { renderThemedComponent } from '@shared/tests/utils';
import { Size } from '../../enums/Size';

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
