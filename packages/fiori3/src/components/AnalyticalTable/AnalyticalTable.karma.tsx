import React from 'react';
import { AnalyticalTable as Table } from './index';
import { mountThemedComponent } from '@shared/tests/utils';
import { matchSnapshot } from 'chai-karma-snapshot';
import { expect, use } from 'chai';

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

use(matchSnapshot);

describe('AnalyticalTable', () => {
  it('with Columns', () => {
    const wrapper = mountThemedComponent(<Table showPagination data={data} title={'Test'} columns={columns} />);

    let component = wrapper
      .find('ui5-li')
      .at(1)
      .instance();
    // @ts-ignore
    component.onclick({});

    component = wrapper
      .find('ui5-li')
      .at(0)
      .instance();
    // @ts-ignore
    component.onclick({});

    expect(wrapper.debug()).to.matchSnapshot();
  });
  it('pagination', () => {
    const wrapper = mountThemedComponent(
      <Table defaultPageSize={1} showPagination data={data} title={'Test'} columns={columns} />
    );

    let component = wrapper
      .find('ui5-link')
      .at(3)
      .instance();
    // @ts-ignore
    component.onclick({});

    component = wrapper
      .find('ui5-link')
      .at(2)
      .instance();
    // @ts-ignore
    component.onclick({});

    component = wrapper
      .find('ui5-link')
      .at(1)
      .instance();
    // @ts-ignore
    component.onclick({});

    component = wrapper
      .find('ui5-link')
      .at(0)
      .instance();
    // @ts-ignore
    component.onclick({});

    expect(wrapper.debug()).to.matchSnapshot();
  });
});
