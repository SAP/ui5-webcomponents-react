import { createPassThroughPropsTest } from '@shared/tests/utils';
import { mount } from 'enzyme';
import { Loader } from '@ui5/webcomponents-react/lib/Loader';
import { LoaderType } from '@ui5/webcomponents-react/lib/LoaderType';
import React from 'react';

describe('Loader', () => {
  test('indeterminate', () => {
    const wrapper = mount(<Loader type={LoaderType.Indeterminate} />).render();
    expect(wrapper).toMatchSnapshot();
  });

  test('determinate', () => {
    const wrapper = mount(<Loader type={LoaderType.Determinate} />).render();
    expect(wrapper).toMatchSnapshot();
  });

  test('determinate with progress prop', () => {
    const wrapper = mount(<Loader type={LoaderType.Determinate} progress="42%" />).render();
    expect(wrapper).toMatchSnapshot();
  });

  test('default', () => {
    const wrapper = mount(<Loader />).render();
    expect(wrapper).toMatchSnapshot();
  });

  test('with Custom Class Name', () => {
    const wrapper = mount(<Loader className="myTestClass" />).render();
    expect(wrapper).toMatchSnapshot();
  });

  test('with delay', () => {
    const wrapper = mount(<Loader delay={1000} />).render();
    expect(wrapper).toMatchSnapshot();
  });

  createPassThroughPropsTest(Loader);
});
