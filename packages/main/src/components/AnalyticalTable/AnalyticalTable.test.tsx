import { createPassThroughPropsTest } from '@shared/tests/utils';
import { act, render, screen, fireEvent, getByText } from '@shared/tests';
import { AnalyticalTable } from '@ui5/webcomponents-react/lib/AnalyticalTable';
import { TableSelectionBehavior } from '@ui5/webcomponents-react/lib/TableSelectionBehavior';
import { TableSelectionMode } from '@ui5/webcomponents-react/lib/TableSelectionMode';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React, { useRef } from 'react';

const columns = [
  {
    Header: 'Name',
    headerTooltip: 'Full Name', // A more extensive description!
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
    },
    status: ValueState.Success
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
  beforeEach(() => {
    window = Object.assign(window, { innerWidth: 1440 });
  });
  //todo when it's possible to open popovers on click, activate this test again
  test.skip('test Asc desc', async () => {
    const { asFragment } = render(<AnalyticalTable data={data} title={'Test'} columns={columns} />);

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getAllByText('Sort Ascending')[0], { bubbles: false });

    expect(asFragment()).toMatchSnapshot();

    // test desc function inside the popover element
    fireEvent.click(screen.getAllByText('Sort Descending')[0], { bubbles: false });

    expect(asFragment()).toMatchSnapshot();
  });

  test('Tree Table', () => {
    const utils = render(
      <AnalyticalTable
        title="Table Title"
        data={dataTree}
        columns={columns}
        loading={false}
        sortable={true}
        filterable={true}
        visibleRows={15}
        minRows={5}
        selectionMode={TableSelectionMode.SINGLE_SELECT}
        subRowsKey="subRows"
        isTreeTable={true}
      />
    );

    const colInst = utils.container.querySelector<HTMLElement>('div[role="columnheader"]');

    expect(colInst.draggable).toBeDefined();
    expect(colInst.draggable).toBeFalsy();
    expect(utils.asFragment()).toMatchSnapshot();
  });

  test('Loading - Placeholder', () => {
    const { asFragment } = render(
      <AnalyticalTable title="Table Title" data={[]} columns={columns} loading visibleRows={15} minRows={5} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('Loading - Loader', () => {
    const { asFragment } = render(
      <AnalyticalTable title="Table Title" data={data} columns={columns} loading visibleRows={15} minRows={5} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('Alternate Row Color', () => {
    const { asFragment } = render(
      <AnalyticalTable title="Table Title" data={data} columns={columns} alternateRowColor />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('custom row height', () => {
    const { asFragment } = render(<AnalyticalTable title="Table Title" data={data} columns={columns} rowHeight={60} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('with initial column order', () => {
    const { getAllByRole, asFragment } = render(
      <AnalyticalTable
        data={data}
        columns={columns}
        groupable={false}
        filterable={false}
        sortable={false}
        columnOrder={['age', 'friend.age', 'friend.name', 'name']}
      />
    );
    const columnHeaders = getAllByRole('columnheader', { hidden: true });

    ['Age', 'Friend Age', 'Friend Name', 'Name'].forEach((item, index) => {
      getByText(columnHeaders[index], item);
    });
    expect(asFragment()).toMatchSnapshot();
  });

  test('test drag and drop of a draggable column', () => {
    const { asFragment, container } = render(<AnalyticalTable data={data} title={'Test'} columns={columns} />);

    // get first column of the table and simulate dragging of it
    let componentDrag = container.querySelector<HTMLElement>('div[role="columnheader"][draggable]');
    let dragColumnId = componentDrag.dataset.columnId;

    expect(componentDrag.draggable).toBeDefined();
    expect(componentDrag.draggable).toBeTruthy();
    fireEvent.drag(componentDrag);

    // get second column of the table and simulate dropping on it
    let dataTransfer = {
      getData: () => {
        return dragColumnId;
      }
    };
    let componentDrop = container.querySelectorAll('div[role="columnheader"][draggable]')[1];
    fireEvent.drag(componentDrop, { dataTransfer });

    expect(asFragment()).toMatchSnapshot();
  });

  test('render without data', () => {
    const data = [];
    const { asFragment } = render(
      <AnalyticalTable title="Table Title" data={data} columns={columns} alternateRowColor />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('without selection Column', () => {
    const { asFragment } = render(
      <AnalyticalTable
        title="Table Title"
        data={data}
        columns={columns}
        selectionMode={TableSelectionMode.SINGLE_SELECT}
        selectionBehavior={TableSelectionBehavior.ROW_ONLY}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('Check for scrollTo and scrollToItem functions', () => {
    let tableRef;
    const UsingTable = (props) => {
      tableRef = useRef(null);
      return (
        <AnalyticalTable
          style={{ width: '170px' }}
          ref={tableRef}
          title="Table Title"
          data={data}
          columns={columns}
          visibleRows={1}
          minRows={1}
        />
      );
    };

    const { getByRole } = render(<UsingTable />);

    // Check existence + type
    expect(typeof tableRef.current.scrollTo).toBe('function');
    expect(typeof tableRef.current.scrollToItem).toBe('function');
    expect(typeof tableRef.current.horizontalScrollTo).toBe('function');
    expect(typeof tableRef.current.horizontalScrollToItem).toBe('function');

    // call functions
    const tableBodyRef = tableRef.current.querySelector("div[class^='AnalyticalTable-tbody']");
    const tableContainerRef = getByRole('grid', { hidden: true });

    act(() => {
      tableRef.current.scrollToItem(1, 'start');
    });

    expect(tableBodyRef.scrollTop).toBe(44);

    act(() => {
      tableRef.current.scrollTo(2);
    });

    expect(tableBodyRef.scrollTop).toBe(2);

    screen.debug(tableContainerRef, 9999999);
    act(() => {
      tableRef.current.horizontalScrollToItem(1, 'start');
    });

    expect(tableContainerRef.scrollLeft).toBe(150);

    act(() => {
      tableRef.current.horizontalScrollTo(2);
    });

    expect(tableContainerRef.scrollLeft).toBe(2);
  });

  test('with highlight row', () => {
    const { asFragment } = render(
      <AnalyticalTable
        title="Table Title"
        data={data}
        columns={columns}
        selectionMode={TableSelectionMode.SINGLE_SELECT}
        withRowHighlight
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('highlight row with custom row key', () => {
    const utils = render(
      <AnalyticalTable
        selectionMode={TableSelectionMode.SINGLE_SELECT}
        data={data}
        columns={columns}
        reactTableOptions={{
          getRowId: (row, relativeIndex, parent) => {
            return `${row.name ?? relativeIndex}`;
          }
        }}
        selectedRowIds={{
          ['Fra']: true
        }}
      />
    );

    expect(utils.asFragment()).toMatchSnapshot();

    const row = screen.getByText('Fra').parentNode.parentNode;
    expect(row).toHaveAttribute('data-is-selected');
  });

  test('render subcomponents', () => {
    const renderRowSubComponent = () => {
      return <div title="subcomponent">Hi! I'm a subcomponent.</div>;
    };

    const onlyFirstRowWithSubcomponent = (row) => {
      if (row.id === '0') {
        return <div title="subcomponent">Hi! I'm a subcomponent.</div>;
      }
    };
    const { asFragment, rerender } = render(
      <AnalyticalTable data={data} columns={columns} renderRowSubComponent={renderRowSubComponent} />
    );
    expect(screen.getAllByTitle('Toggle Row Expanded')).toHaveLength(2);

    fireEvent.click(screen.getAllByTitle('Toggle Row Expanded')[0]);

    expect(screen.getAllByTitle('subcomponent')).toHaveLength(1);

    fireEvent.click(screen.getAllByTitle('Toggle Row Expanded')[1]);

    expect(screen.getAllByTitle('subcomponent')).toHaveLength(2);

    expect(asFragment()).toMatchSnapshot();

    rerender(<AnalyticalTable data={data} columns={columns} renderRowSubComponent={onlyFirstRowWithSubcomponent} />);

    expect(screen.getAllByTitle('Toggle Row Expanded')).toHaveLength(1);
  });

  createPassThroughPropsTest(AnalyticalTable);
});
