import React from 'react';
import { Table } from './index';
import { mountThemedComponent } from '@shared/tests/utils';
import { matchSnapshot } from 'chai-karma-snapshot';
import { expect, use } from 'chai';
import { StandardListItem } from '../../webComponents/StandardListItem';

const columns = [
  {
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  },
  {
    Header: 'Age',
    accessor: 'age'
  },
  {
    Header: 'Friend Name',
    accessor: 'friend.name' // Custom value accessors!
  },
  {
    Header: () => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
  }
];

use(matchSnapshot);

describe('Table', () => {
  it('with Columns', () => {
    const wrapper = mountThemedComponent(<Table title={'Test'} columns={columns} />);

    console.log(wrapper.debug());
    // wrapper.find('ui5-li').at(1).simulate('click');

    expect(wrapper.debug()).to.matchSnapshot();
  });
});
