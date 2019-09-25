import { renderThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { LoaderType } from '@ui5/webcomponents-react/lib/LoaderType';
import { Loader } from '@ui5/webcomponents-react/lib/Loader';

describe('Loader', () => {
  test('small', () => {
    const wrapper = renderThemedComponent(<Loader type={LoaderType.Indeterminate} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('medium', () => {
    const wrapper = renderThemedComponent(<Loader type={LoaderType.Determinate} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('large', () => {
    const wrapper = renderThemedComponent(<Loader type={LoaderType.Determinate} progressBarWidth="42%" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('with custom class name', () => {
    const wrapper = renderThemedComponent(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
