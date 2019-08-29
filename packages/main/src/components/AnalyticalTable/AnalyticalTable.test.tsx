import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { AnalyticalTable } from '@ui5/webcomponents-react/lib/AnalyticalTable';

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
    const wrapper = mountThemedComponent(
      <AnalyticalTable showPagination data={data} title={'Test'} columns={columns} />
    );

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
  test('pagination', () => {
    const wrapper = mountThemedComponent(
      <AnalyticalTable defaultPageSize={1} showPagination data={data} title={'Test'} columns={columns} />
    );

    // test the right arrow of the pagination

    let component = wrapper
      .find('ui5-link')
      .at(3)
      .instance();
    // @ts-ignore
    component.fireEvent('click');

    // test the right page number link of the pagination
    component = wrapper
      .find('ui5-link')
      .at(2)
      .instance();
    // @ts-ignore
    component.fireEvent('click');

    // test the left page number link of the pagination
    component = wrapper
      .find('ui5-link')
      .at(1)
      .instance();
    // @ts-ignore
    component.fireEvent('click');

    // test the left arrow of the pagination
    component = wrapper
      .find('ui5-link')
      .at(0)
      .instance();
    // @ts-ignore
    component.fireEvent('click');

    expect(wrapper.render()).toMatchSnapshot();
  });
});
