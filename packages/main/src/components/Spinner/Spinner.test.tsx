import { createPassThroughPropsTest } from '@shared/tests/utils';
import { mount } from 'enzyme';
import { Size } from '@ui5/webcomponents-react/lib/Size';
import { Spinner } from '@ui5/webcomponents-react/lib/Spinner';
import React from 'react';

describe('Spinner', () => {
  test('small', () => {
    const wrapper = mount(<Spinner size={Size.Small} />).render();
    expect(wrapper).toMatchSnapshot();
  });

  test('medium', () => {
    const wrapper = mount(<Spinner size={Size.Medium} />).render();
    expect(wrapper).toMatchSnapshot();
  });

  test('large', () => {
    const wrapper = mount(<Spinner size={Size.Large} />).render();
    expect(wrapper).toMatchSnapshot();
  });

  test('with custom class name', () => {
    const wrapper = mount(<Spinner size={Size.Large} className="testClassName1337" />).render();
    expect(wrapper).toMatchSnapshot();
  });

  test('with delay', () => {
    const wrapper = mount(<Spinner size={Size.Large} delay={2000} />).render();
    expect(wrapper).toMatchSnapshot();
  });

  createPassThroughPropsTest(Spinner);
});
