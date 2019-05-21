import React from 'react';
import { ColumnHeader } from './index';
import { mountThemedComponent } from '@shared/tests/utils';
import { ColumnHeaderModal } from '../columnHeaderModal/index';
import { StandardListItem } from '@lib/StandardListItem';

const column = {
  id: 'column1',
  show: true,
  sortable: true
};

const sortedWithColumn = [
  // is usually provided by react-table
  {
    id: 'column1',
    desc: true
  }
];

const filteredWithColumn = [
  // is usually provided by react-table
  {
    id: 'column1'
  }
];

describe('Table/ColumnHeader', () => {
  test('With Props', () => {
    // @ts-ignore
    const wrapper = mountThemedComponent(<ColumnHeader column={column} sorted={[]} filtered={[]} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Render Sorted Column', () => {
    const wrapper = mountThemedComponent(
      // @ts-ignore
      <ColumnHeader column={column} sorted={sortedWithColumn} filtered={filteredWithColumn} />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('invisible Column', () => {
    const col = {
      ...column,
      show: false
    };
    // @ts-ignore
    const wrapper = mountThemedComponent(<ColumnHeader column={col} sorted={[]} filtered={[]} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Sort ascending', () => {
    const dummyToggleSort = () => null; // is usually being provided by react-table
    const wrapper = mountThemedComponent(
      // @ts-ignore
      <ColumnHeader column={column} toggleSort={dummyToggleSort} sortable sorted={[]} filtered={[]} />
    );
    wrapper.simulate('click');
    wrapper.update();
    const items = wrapper.find(ColumnHeaderModal).find(StandardListItem);
    items.at(0).simulate('click');
    wrapper.update();
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Sort descending', () => {
    const dummyToggleSort = () => null; // is usually being provided by react-table
    const wrapper = mountThemedComponent(
      // @ts-ignore
      <ColumnHeader column={column} toggleSort={dummyToggleSort} sortable sorted={[]} filtered={[]} />
    );
    wrapper.simulate('click');
    wrapper.update();
    const items = wrapper.find(ColumnHeaderModal).find(StandardListItem);
    items.at(1).simulate('click');
    wrapper.update();
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Sort when already sorted - ascending', () => {
    const dummyToggleSort = () => null; // is usually being provided by react-table
    const wrapper = mountThemedComponent(
      // @ts-ignore
      <ColumnHeader column={column} toggleSort={dummyToggleSort} sortable sorted={sortedWithColumn} filtered={[]} />
    );
    wrapper.simulate('click');
    wrapper.update();
    const items = wrapper.find(ColumnHeaderModal).find(StandardListItem);
    items.at(0).simulate('click');
    wrapper.update();
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Sort when already sorted - descending', () => {
    const dummyToggleSort = () => null; // is usually being provided by react-table
    const wrapper = mountThemedComponent(
      // @ts-ignore
      <ColumnHeader column={column} toggleSort={dummyToggleSort} sortable sorted={sortedWithColumn} filtered={[]} />
    );
    wrapper.simulate('click');
    wrapper.update();
    const items = wrapper.find(ColumnHeaderModal).find(StandardListItem);
    items.at(1).simulate('click');
    wrapper.update();
    expect(wrapper.render()).toMatchSnapshot();
  });
});
