import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { AnalyticalTable } from '../../lib/AnalyticalTable';

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

const data = [
  {
    name: 'Fra',
    age: 40,
    friend: {
      name: 'MAR',
      age: 28
    }
  },
  {
    name: 'bla',
    age: 20,
    friend: {
      name: 'Nei',
      age: 50
    }
  }
];

describe('AnalyticalTable', () => {
  test('test Asc desc', () => {
    const wrapper = mountThemedComponent(<AnalyticalTable data={data} title={'Test'} columns={columns} />);

    // test asc function inside the popover element
    let component = wrapper
      .find('ui5-li')
      .at(1)
      .instance();
    // @ts-ignore
    component.onclick({});

    // test desc function inside the popover element
    component = wrapper
      .find('ui5-li')
      .at(0)
      .instance();
    // @ts-ignore
    component.onclick({});

    expect(wrapper.render()).toMatchSnapshot();
  });
});
