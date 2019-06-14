import { boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { AnalyticalTable } from '../../../lib/AnalyticalTable';
import { Title } from '../../../lib/Title';
import generateData from './generateData';

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
    accessor: 'friend.age',
    filterMethod: (filter, row) => {
      if (filter.value === 'all') {
        return true;
      }
      if (filter.value === 'true') {
        return row[filter.id] >= 21;
      }
      return row[filter.id] < 21;
    },
    Filter: ({ filter, onChange }) => {
      return (
        <select
          onChange={(event) => onChange(event.target.value)}
          style={{ width: '100%' }}
          value={filter ? filter.value : 'all'}
        >
          <option value="all">Show All</option>
          <option value="true">Can Drink</option>
          <option value="false">Can't Drink</option>
        </select>
      );
    }
  }
];

const data = generateData(20);

function renderStory() {
  return (
    <AnalyticalTable
      title="Table Title"
      data={data}
      columns={columns}
      alternateRowColors={boolean('alternateRowColors', false)}
      showPagination={boolean('showPagination', true)}
      loading={boolean('loading', false)}
      sortable={boolean('sortable', true)}
      filterable={boolean('filterable', true)}
      defaultPageSize={number('defaultPageSize', 15)}
      minRows={number('minRows', 10)}
    />
  );
}

function withCroppedPopup() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ width: '400px' }}>
        <AnalyticalTable
          title="Table Title"
          data={data}
          columns={columns}
          alternateRowColors={boolean('alternateRowColors', false)}
          showPagination={boolean('showPagination', true)}
          loading={boolean('loading', false)}
          sortable={boolean('sortable', true)}
          filterable={boolean('filterable', true)}
          defaultPageSize={number('defaultPageSize', 15)}
          minRows={number('minRows', 10)}
        />
      </div>
    </div>
  );
}

const tableWithExtension = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      alternateRowColors={boolean('alternateRowColors', false)}
      showPagination={boolean('showPagination', true)}
      loading={boolean('loading', false)}
      sortable={boolean('sortable', true)}
      filterable={boolean('filterable', true)}
      defaultPageSize={number('defaultPageSize', 15)}
      minRows={number('minRows', 10)}
    />
  );
};

const tableWithCustomTitle = () => {
  return (
    <AnalyticalTable
      title={<Title>Test 123</Title>}
      data={data}
      columns={columns}
      alternateRowColors={boolean('alternateRowColors', false)}
      showPagination={boolean('showPagination', true)}
      loading={boolean('loading', false)}
      sortable={boolean('sortable', true)}
      filterable={boolean('filterable', true)}
      defaultPageSize={number('defaultPageSize', 15)}
      minRows={number('minRows', 10)}
    />
  );
};

storiesOf('F4R Components | Analytical Table', module)
  .add('Default', renderStory)
  .add('with Extension', tableWithExtension)
  .add('with cropped Search/Filter Popup', withCroppedPopup)
  .add('with Custom Title', tableWithCustomTitle);
