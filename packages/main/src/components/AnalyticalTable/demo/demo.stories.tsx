import { boolean, number } from '@storybook/addon-knobs';
import React from 'react';
import { AnalyticalTable } from '../../../lib/AnalyticalTable';
import { TextAlign } from '../../../lib/TextAlign';
import { Title } from '../../../lib/Title';
import { Button } from '../../../webComponents/Button';
import generateData from './generateData';

const columns = [
  {
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  },
  {
    Header: 'Age',
    accessor: 'age',
    hAlign: TextAlign.End
  },
  {
    Header: 'Friend Name',
    accessor: 'friend.name'
  },
  {
    Header: () => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age',
    filter: (filter, row) => {
      debugger;
      if (filter.value === 'all') {
        return true;
      }
      if (filter.value === 'true') {
        return row[filter.id] >= 21;
      }
      return row[filter.id] < 21;
    },
    Filter: ({ column }) => {
      return (
        <select
          onChange={(event) => column.setFilter(event.target.value)}
          style={{ width: '100%' }}
          value={column.filterValue ? column.filterValue : 'all'}
        >
          <option value="all">Show All</option>
          <option value="true">Can Drink</option>
          <option value="false">Can't Drink</option>
        </select>
      );
    }
  }
];

const data = generateData(200);

export const defaultStory = () => {
  return (
    <AnalyticalTable
      title="Table Title"
      data={data}
      columns={columns}
      loading={boolean('loading', false)}
      sortable={boolean('sortable', true)}
      filterable={boolean('filterable', true)}
      minRows={number('minRows', 10)}
      groupable={boolean('groupable', true)}
      style={{ height: '300px' }}
    />
  );
};

defaultStory.story = {
  name: 'Default'
};

export const withCroppedPopup = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ width: '400px' }}>
        <AnalyticalTable
          title="Table Title"
          data={data}
          columns={columns}
          loading={boolean('loading', false)}
          sortable={boolean('sortable', true)}
          filterable={boolean('filterable', true)}
          minRows={number('minRows', 10)}
          groupable={boolean('groupable', true)}
        />
      </div>
    </div>
  );
};
withCroppedPopup.story = {
  name: 'with Cropped Popup'
};

export const tableWithExtension = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      loading={boolean('loading', false)}
      sortable={boolean('sortable', true)}
      filterable={boolean('filterable', true)}
      minRows={number('minRows', 10)}
      groupable={boolean('groupable', true)}
      renderExtension={() => <Button>Hello from the Table Extension!</Button>}
    />
  );
};
tableWithExtension.story = {
  name: 'with Table Extension'
};

export const tableWithCustomTitle = () => {
  return (
    <AnalyticalTable
      title={<Title>Test 123</Title>}
      data={data}
      columns={columns}
      loading={boolean('loading', false)}
      sortable={boolean('sortable', true)}
      filterable={boolean('filterable', true)}
      minRows={number('minRows', 10)}
      groupable={boolean('groupable', true)}
    />
  );
};
tableWithCustomTitle.story = {
  name: 'with Custom Title'
};

export default {
  title: 'Components | Analytical Table',
  component: AnalyticalTable
};
