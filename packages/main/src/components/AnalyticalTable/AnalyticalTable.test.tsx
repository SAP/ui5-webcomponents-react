import { createPassThroughPropsTest, mountThemedComponent } from '@shared/tests/utils';
import { AnalyticalTable } from '@ui5/webcomponents-react/lib/AnalyticalTable';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import React from 'react';

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

const dataTree = [
  {
    name: 'Fra',
    age: 40,
    friend: {
      name: 'MAR',
      age: 28
    },
    subRows: [
      {
        name: 'asd',
        age: 40,
        friend: {
          name: 'longlonglong',
          age: 28
        },
        subRows: [
          {
            name: 'ABC',
            age: 40,
            friend: {
              name: 'DEF',
              age: 28
            },
            subRows: [
              {
                name: 'GHijkl',
                age: 40,
                friend: {
                  name: 'mnop',
                  age: 28
                },
                subRows: [
                  {
                    name: 'Fra',
                    age: 40,
                    friend: {
                      name: 'MAR',
                      age: 28
                    },
                    subRows: [
                      {
                        name: 'Fra',
                        age: 40,
                        friend: {
                          name: 'MAR',
                          age: 28
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Fra',
        age: 40,
        friend: {
          name: 'MAR',
          age: 28
        }
      },
      {
        name: 'Fra',
        age: 40,
        friend: {
          name: 'MAR',
          age: 28
        },
        subRows: [
          {
            name: 'Peter',
            age: 40,
            friend: {
              name: 'Retep',
              age: 28
            }
          }
        ]
      }
    ]
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
    console.log(component);

    // test desc function inside the popover element
    component = wrapper
      .find('ui5-li')
      .at(0)
      .instance();
    // @ts-ignore
    component.onclick({});

    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Tree Table', () => {
    const wrapper = mountThemedComponent(
      <AnalyticalTable
        title="Table Title"
        data={dataTree}
        columns={columns}
        loading={false}
        busyIndicatorEnabled={true}
        sortable={true}
        filterable={true}
        visibleRows={15}
        minRows={5}
        selectionMode={TableSelectionMode.SINGLE_SELECT}
        subRowsKey="subRows"
        isTreeTable={true}
      />
    );

    let colInst = wrapper
      .find({ role: 'columnheader' })
      .at(0)
      .instance();

    // @ts-ignore
    expect(colInst.draggable).toBeDefined();
    // @ts-ignore
    expect(colInst.draggable).toBeFalsy();
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Loading - Placeholder', () => {
    const wrapper = mountThemedComponent(
      <AnalyticalTable title="Table Title" data={[]} columns={columns} loading visibleRows={15} minRows={5} />
    );

    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Loading - Loader', () => {
    const wrapper = mountThemedComponent(
      <AnalyticalTable title="Table Title" data={data} columns={columns} loading visibleRows={15} minRows={5} />
    );

    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Alternate Row Color', () => {
    const wrapper = mountThemedComponent(
      <AnalyticalTable title="Table Title" data={data} columns={columns} alternateRowColor />
    );

    expect(wrapper.render()).toMatchSnapshot();
  });

  test('custom row height', () => {
    const wrapper = mountThemedComponent(
      <AnalyticalTable title="Table Title" data={data} columns={columns} rowHeight={60} />
    );

    expect(wrapper.render()).toMatchSnapshot();
  });

  test('test drag and drop of a draggable column', () => {
    const wrapper = mountThemedComponent(<AnalyticalTable data={data} title={'Test'} columns={columns} />);

    // get first column of the table and simulate dragging of it
    let componentDrag = wrapper.find('div[role="columnheader"] div[draggable]').at(0);
    let inst = componentDrag.instance();
    // @ts-ignore
    let dragColumnId = inst.dataset.columnId;

    // @ts-ignore
    expect(inst.draggable).toBeDefined();
    // @ts-ignore
    expect(inst.draggable).toBeTruthy();
    // @ts-ignore
    componentDrag.simulate('drag');

    // get second column of the table and simulate dropping on it
    let dataTransfer = {};
    // @ts-ignore
    dataTransfer.getData = () => {
      return dragColumnId;
    };
    let componentDrop = wrapper.find('div[role="columnheader"] div[draggable]').at(1);
    // @ts-ignore
    componentDrop.simulate('drop', { dataTransfer: dataTransfer });

    expect(wrapper.render()).toMatchSnapshot();
  });

  test('render without data', () => {
    const data = [];
    const wrapper = mountThemedComponent(
      <AnalyticalTable title="Table Title" data={data} columns={columns} alternateRowColor />
    );

    expect(wrapper.render()).toMatchSnapshot();
  });

  test('without selection Column', () => {
    const wrapper = mountThemedComponent(
      <AnalyticalTable
        title="Table Title"
        data={data}
        columns={columns}
        selectionMode={TableSelectionMode.SINGLE_SELECT}
        noSelectionColumn
      />
    );

    expect(wrapper.render()).toMatchSnapshot();
  });

  createPassThroughPropsTest(AnalyticalTable);
});
