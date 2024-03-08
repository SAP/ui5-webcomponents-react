import dataSmall from '@sb/mockData/Friends50.json';
import dataLarge from '@sb/mockData/Friends500.json';
import dataManualSelect from '@sb/mockData/FriendsManualSelect25.json';
import dataTree from '@sb/mockData/FriendsTree.json';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useReducer, useState } from 'react';
import { AnalyticalTableSelectionMode, FlexBoxAlignItems, FlexBoxDirection, InputType } from '../../enums';
import { Button, CheckBox, Input, Label, ToggleButton } from '../../webComponents';
import { FlexBox } from '../FlexBox';
import { Text } from '../Text';
import meta from './AnalyticalTable.stories';
import * as AnalyticalTableHooks from './pluginHooks/AnalyticalTableHooks';
import { AnalyticalTable } from './index';

const pluginsMeta = {
  ...meta,
  title: 'Data Display / AnalyticalTable / Plugin Hooks',
  tags: ['excludeFromSidebar']
} satisfies Meta<typeof AnalyticalTable>;
export default pluginsMeta;
type Story = StoryObj<typeof pluginsMeta>;

export const PluginAnnounceEmptyCells: Story = {
  args: {
    data: [
      {
        age: undefined,
        friend: {
          name: null,
          age: 0
        },
        status: 'Error'
      },
      ...dataSmall
    ],
    visibleRows: 5
  },
  render(args) {
    return (
      <AnalyticalTable
        columns={args.columns}
        data={args.data}
        visibleRows={args.visibleRows}
        tableHooks={[AnalyticalTableHooks.useAnnounceEmptyCells]}
      />
    );
  }
};

export const PluginDisableRowSelection: Story = {
  args: {
    data: dataLarge.map((item) => ({ ...item, disableSelection: Math.random() < 0.5 })),
    selectionMode: AnalyticalTableSelectionMode.MultiSelect
  },
  render: (args) => {
    const disableRowFunc = (row) => row.original.age < 40;
    const [isFunc, setIsFunc] = useState(true);
    return (
      <>
        <ToggleButton
          onClick={() => {
            setIsFunc(true);
          }}
          pressed={isFunc}
        >
          with function parameter
        </ToggleButton>
        <ToggleButton
          onClick={() => {
            setIsFunc(false);
          }}
          pressed={!isFunc}
        >
          with string parameter
        </ToggleButton>
        {isFunc ? (
          <AnalyticalTable
            data={args.data}
            columns={args.columns}
            selectionMode={args.selectionMode}
            tableHooks={[AnalyticalTableHooks.useRowDisableSelection(disableRowFunc)]}
            visibleRows={10}
            header="All under 40 are not selectable"
          />
        ) : (
          <AnalyticalTable
            data={args.data}
            columns={args.columns}
            selectionMode={args.selectionMode}
            selectionBehavior={args.selectionBehavior}
            tableHooks={[AnalyticalTableHooks.useRowDisableSelection('disableSelection')]}
            visibleRows={10}
            header={`All with "disableSelection: true" are not selectable`}
          />
        )}
      </>
    );
  }
};

export const PluginIndeterminateRowSelection: Story = {
  render: (args) => {
    const [selectSubRows, setSelectSubRows] = useReducer((prev) => !prev, true);
    return (
      <>
        <ToggleButton onClick={setSelectSubRows} pressed={selectSubRows}>{`${
          selectSubRows ? "Don't " : ''
        }Select Sub-Rows`}</ToggleButton>
        <AnalyticalTable
          selectionMode={AnalyticalTableSelectionMode.MultiSelect}
          data={dataTree}
          columns={args.columns}
          isTreeTable
          tableHooks={[AnalyticalTableHooks.useIndeterminateRowSelection()]}
          reactTableOptions={{ selectSubRows: selectSubRows }}
        />
      </>
    );
  }
};

export const PluginManualRowSelect: Story = {
  args: {
    data: dataManualSelect
  },
  render: (args) => {
    const [collapsedCode, setCollapsedCode] = useReducer((coll) => !coll, true);
    const [data, toggleFirstRowSelected] = useReducer((prev) => {
      const [, ...updatedData] = prev;
      if (prev[0].isSelected) {
        return [{ ...prev[0], isSelected: false }, ...updatedData];
      } else {
        return [{ ...prev[0], isSelected: true }, ...updatedData];
      }
    }, args.data);
    return (
      <>
        <Button onClick={toggleFirstRowSelected}>
          Toggle <code>isSelected</code> of 1st row
        </Button>
        <br />
        <Label>Clicking this button will refresh the data array passed to the `data` prop.</Label>
        <br />
        <br />
        <AnalyticalTable
          selectionMode={AnalyticalTableSelectionMode.MultiSelect}
          data={data}
          columns={args.columns}
          tableHooks={[AnalyticalTableHooks.useManualRowSelect('isSelected')]}
        />
        <Button onClick={setCollapsedCode}>Show first entries in data array</Button>
        {!collapsedCode && (
          <FlexBox direction="Column">
            <span>{JSON.stringify(data[0], null, 2)}</span>
            <span>{JSON.stringify(data[1], null, 2)}</span>
            <span>{JSON.stringify(data[2], null, 2)}</span>
            <span>{JSON.stringify(data[3], null, 2)}</span>
            <span>{JSON.stringify(data[4], null, 2)}</span>
            <span>...</span>
          </FlexBox>
        )}
      </>
    );
  }
};

export const PluginOnColumnResize: Story = {
  render: (args) => {
    const [useColResizeEvent, setUseColResizeEvent] = useState({});
    const [liveUpdate, setLiveUpdate] = useState(false);
    const [wait, setWait] = useState(100);
    const handleLiveUpdateChange = (e) => {
      setLiveUpdate(e.target.checked);
    };
    const handleWaitChange = (e) => {
      setWait(parseInt(e.target.value));
    };
    const handleColWidthUpdate = (e) => {
      setUseColResizeEvent(e);
    };
    return (
      <>
        <AnalyticalTable
          extension={
            <>
              <FlexBox alignItems={FlexBoxAlignItems.Center}>
                <Label>liveUpdate: </Label>
                <CheckBox onChange={handleLiveUpdateChange} checked={liveUpdate} />
              </FlexBox>
              <FlexBox alignItems={FlexBoxAlignItems.Center}>
                <Label>wait: </Label>
                <Input onInput={handleWaitChange} type={InputType.Number} value={`${wait}`} />
              </FlexBox>
              <br />
            </>
          }
          data={args.data}
          columns={args.columns}
          tableHooks={[AnalyticalTableHooks.useOnColumnResize(handleColWidthUpdate, { liveUpdate, wait })]}
        />
        {!!Object.keys(useColResizeEvent).length && (
          <FlexBox direction={FlexBoxDirection.Column}>
            <br />
            <Text>Last fired callback of changed column:</Text>
            <br />
            <FlexBox>
              <Label>Column:</Label>
              <Text>{useColResizeEvent.header.id}</Text>
            </FlexBox>
            <FlexBox>
              <Label>Width:</Label>
              <Text>{useColResizeEvent.columnWidth}</Text>
            </FlexBox>
          </FlexBox>
        )}
      </>
    );
  }
};

const orderedMultiSortColumns = [
  {
    Header: 'Name',
    accessor: 'name',
    enableMultiSort: true
  },
  {
    Header: 'Age',
    accessor: 'age',
    enableMultiSort: true
  },
  {
    Header: 'Name 2',
    accessor: 'name2',
    enableMultiSort: true
  },
  {
    Header: 'Age 2',
    accessor: 'age2',
    enableMultiSort: true
  }
];
const orderedMultiSortData = [
  { name: 'Peter', age: 40, name2: 'Alissa', age2: 18 },
  { name: 'Kristen', age: 40, name2: 'Randolph', age2: 21 },
  { name: 'Peter', age: 30, name2: 'Rose', age2: 90 },
  { name: 'Peter', age: 70, name2: 'Rose', age2: 22 },
  { name: 'Kristen', age: 60, name2: 'Willis', age2: 80 },
  { name: 'Kristen', age: 20, name2: 'Alissa', age2: 80 },
  { name: 'Graham', age: 40, name2: 'Alissa', age2: 80 },
  { name: 'Peter', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Willis', age2: 26 },
  { name: 'Graham', age: 62, name2: 'Willis', age2: 26 }
];

export const PluginOrderedMultiSort = {
  args: { orderedIds: ['name', 'name2', 'age', 'age2'] },
  argTypes: {
    orderedIds: {
      control: 'array',
      description:
        'Defines the sort priority when sorting by multiple columns, starting with the first column ID.\n' +
        '\n' +
        '**Note:** Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.'
    }
  },
  render(args) {
    return (
      <AnalyticalTable
        columns={orderedMultiSortColumns}
        data={orderedMultiSortData}
        sortable
        tableHooks={[AnalyticalTableHooks.useOrderedMultiSort(args.orderedIds)]}
      />
    );
  }
};
