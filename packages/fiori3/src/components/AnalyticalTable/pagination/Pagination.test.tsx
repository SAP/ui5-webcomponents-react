import React from 'react';
import sinon from 'sinon';
import { Pagination, LinkHOC } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

const defaultProps = {
  numItems: 100,
  pages: 10,
  page: 1,
  canNext: true,
  canPrevious: true
};

describe('Table/Pagination', () => {
  test('With props', () => {
    // @ts-ignore
    const wrapper = mountThemedComponent(<Pagination {...defaultProps} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Showing middle numbers', () => {
    // @ts-ignore
    const wrapper = mountThemedComponent(<Pagination {...defaultProps} page={5} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Click handling', () => {
    const onSelectionChange = sinon.spy();
    const dummyOnPageChange = () => null; // method is generally being provided by react-table
    const wrapper = mountThemedComponent(
      // @ts-ignore
      <Pagination {...defaultProps} page={5} onSelectionChange={onSelectionChange} onPageChange={dummyOnPageChange} />
    );
    const links = wrapper.find(LinkHOC);
    links.at(0).simulate('click');
    links.at(3).simulate('click');
    links.at(links.length - 1).simulate('click');
    links.at(1).simulate('click');
    expect(onSelectionChange.callCount).toBe(3);
  });
});
