import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { AnalyticalTablePropTypes } from '../..';
import {
  AnalyticalTable,
  AnalyticalTableHooks,
  AnalyticalTableScaleWidthMode,
  AnalyticalTableSelectionBehavior,
  Button,
  Input
} from '../..';
import { AnalyticalTableSelectionMode, AnalyticalTableVisibleRowCountMode, ValueState } from '../../enums/index.js';
import { useManualRowSelect } from './pluginHooks/useManualRowSelect';
import { useRowDisableSelection } from './pluginHooks/useRowDisableSelection';
import { cssVarToRgb, cypressPassThroughTestsFactory } from '@/cypress/support/utils';

const generateMoreData = (count) => {
  return new Array(count).fill('').map((item, index) => ({
    name: `Name-${index}`,
    age: index,
    friend: {
      name: `FriendName-${index}`,
      age: index + 10
    }
  }));
};

interface PropTypes {
  onRowSelect: (
    e?: CustomEvent<{
      allRowsSelected: boolean;
      row?: Record<string, unknown>;
      isSelected?: boolean;
      selectedFlatRows: Record<string, unknown>[];
      selectedRowIds: Record<string | number, boolean>;
    }>
  ) => void;
}

const columns = [
  {
    Header: 'Name',
    headerTooltip: 'Full Name',
    accessor: 'name'
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
    name: 'A',
    age: 40,
    friend: {
      name: 'Lorem',
      age: 28
    },
    status: ValueState.Success,
    navigation: ValueState.Error
  },
  {
    name: 'B',
    age: 20,
    friend: {
      name: 'Ipsum',
      age: 50
    }
  },
  {
    name: 'X',
    age: 17,
    friend: {
      name: 'Dolor',
      age: 42
    }
  },
  {
    name: 'C',
    age: 79,
    friend: {
      name: 'Sit',
      age: 50
    }
  }
];

describe('AnalyticalTable', () => {
  it('sorting', () => {
    const sort = cy.spy().as('onSortSpy');
    cy.mount(<AnalyticalTable data={data} columns={columns} onSort={sort} />);
    cy.get('[aria-rowindex="3"] > [aria-colindex="1"]').should('text', 'X');

    cy.findByText('Name').click();
    cy.findByText('Sort Ascending').shadow().findByRole('listitem').click({ force: true });
    cy.get('@onSortSpy').should('have.been.calledWithMatch', {
      detail: { column: { id: 'name' }, sortDirection: 'asc' }
    });
    cy.get('[aria-rowindex="3"] > [aria-colindex="1"]').should('text', 'C');

    cy.findByText('Name').click();
    cy.findByText('Clear Sorting').shadow().findByRole('listitem').click({ force: true });
    cy.get('@onSortSpy').should('have.been.calledWithMatch', {
      detail: { column: { id: 'name' }, sortDirection: 'clear' }
    });
    cy.get('[aria-rowindex="3"] > [aria-colindex="1"]').should('text', 'X');

    cy.findByText('Name').click();
    cy.findByText('Sort Descending').shadow().findByRole('listitem').click({ force: true });
    cy.get('@onSortSpy').should('have.been.calledWithMatch', {
      detail: { column: { id: 'name' }, sortDirection: 'desc' }
    });
    cy.get('[aria-rowindex="3"] > [aria-colindex="1"]').should('text', 'B');
  });

  it('row count modes', () => {
    cy.mount(
      <div style={{ height: '200px' }}>
        <AnalyticalTable data={data} columns={columns} visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Auto} />
      </div>
    );
    cy.findByRole('grid').should('have.attr', 'data-per-page', '3');
    cy.findByText('X').should('be.visible');
    cy.findByText('C').should('not.be.visible');

    cy.mount(
      <AnalyticalTable
        style={{ height: '200px' }}
        data={data}
        columns={columns}
        visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Auto}
      />
    );
    cy.findByRole('grid').should('have.attr', 'data-per-page', '3');
    cy.findByText('X').should('be.visible');
    cy.findByText('C').should('not.be.visible');

    cy.wait(1000);

    cy.mount(
      <AnalyticalTable
        style={{ height: '4400px' }}
        data={generateMoreData(200)}
        columns={columns}
        visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Auto}
      />
    );
    cy.findByRole('grid').should('have.attr', 'data-per-page', '99'); //rows(99*44) + header(44) = 4400
    cy.findByText('Name-98').should('be.visible');
    cy.findByText('Name-99').should('not.be.visible');

    //test if visibleRows prop is ignored when row-count-mode is "Auto"
    cy.mount(
      <AnalyticalTable
        style={{ height: '200px' }}
        data={data}
        columns={columns}
        visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Auto}
        visibleRows={1337}
      />
    );
    cy.findByRole('grid').should('have.attr', 'data-per-page', '3');
    cy.findByText('X').should('be.visible');
    cy.findByText('C').should('not.be.visible');

    //test default visibleRow count
    cy.mount(
      <AnalyticalTable
        data={generateMoreData(50)}
        columns={columns}
        visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Fixed}
      />
    );
    cy.findByRole('grid').should('have.attr', 'data-per-page', '15');
    cy.findByText('Name-14').should('be.visible');
    cy.findByText('Name-15').should('not.be.visible');

    cy.mount(
      <AnalyticalTable
        data={generateMoreData(50)}
        columns={columns}
        visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Fixed}
        visibleRows={20}
      />
    );
    cy.findByRole('grid').should('have.attr', 'data-per-page', '20');
    cy.findByText('Name-19').should('be.visible');
    cy.findByText('Name-20').should('not.be.visible');

    cy.mount(
      <AnalyticalTable
        data={generateMoreData(50)}
        columns={columns}
        visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Interactive}
        visibleRows={10}
      />
    );
    cy.findByRole('grid').should('have.attr', 'data-per-page', '10');
    cy.findByText('Name-9').should('be.visible');
    cy.findByText('Name-10').should('not.be.visible');
    cy.findByTitle('Drag to resize')
      .trigger('mousedown')
      .trigger('mousemove', { pageY: 742, force: true })
      .trigger('mouseup', { pageY: 742 });
    cy.findByRole('grid').should('have.attr', 'data-per-page', '15');
    cy.findByText('Name-14').should('be.visible');
    cy.findByText('Name-15').should('not.be.visible');
    cy.findByTitle('Drag to resize')
      .trigger('mousedown')
      .trigger('mousemove', { pageY: 200, force: true })
      .trigger('mouseup', { pageY: 200 });
    cy.findByRole('grid').should('have.attr', 'data-per-page', '3');
    cy.findByText('Name-2').should('be.visible');
    cy.findByText('Name-3').should('not.be.visible');
  });

  it('scrollTo', () => {
    interface ScrollTableProps {
      scrollFn: string;
      args: Array<string | number>;
      onTableScroll?: AnalyticalTablePropTypes['onTableScroll'];
    }
    const scroll = cy.spy().as('scroll');
    const ScrollTable = (props: ScrollTableProps) => {
      const { scrollFn, args, onTableScroll } = props;
      const tableRef = useRef(null);
      const handleScroll = () => {
        tableRef.current[scrollFn](...args);
      };
      return (
        <>
          <Button onClick={handleScroll}>Click</Button>
          <AnalyticalTable
            data-testid="table"
            style={{ width: '170px' }}
            ref={tableRef}
            onTableScroll={onTableScroll}
            header="Table Title"
            data={data}
            columns={columns}
            visibleRows={1}
            minRows={1}
          />
        </>
      );
    };
    cy.mount(<ScrollTable scrollFn="scrollToItem" args={[1, 'start']} onTableScroll={scroll} />);
    cy.findByText('A').should('be.visible');
    // should not be rendered due to virtualization
    cy.findByText('B').should('not.exist', { timeout: 100 });
    cy.findByText('Click').click();
    cy.findByText('B').should('be.visible');
    cy.findByText('A').should('not.exist', { timeout: 100 });

    cy.mount(<ScrollTable scrollFn="scrollTo" args={[50]} onTableScroll={scroll} />);
    cy.findByText('Click').click();
    cy.get('[data-component-name="AnalyticalTableBody"]').invoke('scrollTop').should('equal', 50);

    cy.mount(<ScrollTable scrollFn="horizontalScrollToItem" args={[1, 'start']} onTableScroll={scroll} />);
    cy.findByText('A').should('be.visible');
    cy.findByText('28').should('not.be.visible');
    cy.findByText('Click').click();
    cy.findByText('28').should('be.visible');
    cy.findByText('A').should('not.be.visible');

    cy.mount(<ScrollTable scrollFn="horizontalScrollTo" args={[20]} onTableScroll={scroll} />);
    cy.findByText('Click').click();
    cy.findByRole('grid').invoke('scrollLeft').should('equal', 20);

    cy.get('@scroll').should('have.been.called');
  });

  it('tree selection & filtering', () => {
    const TreeSelectFilterTable = (props: PropTypes) => {
      const [filter, setFilter] = useState('');
      const [relevantPayload, setRelevantPayload] = useState<Record<string, any>>({});
      return (
        <>
          <Input data-testid="input" onInput={(e) => setFilter(e.target.value)} />
          <AnalyticalTable
            {...props}
            isTreeTable
            filterable
            columns={columns}
            onRowSelect={(e) => {
              const { allRowsSelected, isSelected, row, selectedFlatRows, selectedRowIds } = e.detail;
              setRelevantPayload({
                allRowsSelected,
                isSelected,
                row: row.id,
                selectedFlatRows: selectedFlatRows.map((item) => ({
                  id: item?.id
                })),
                selectedRowIds
              });
              props.onRowSelect(e);
            }}
            data={dataTree}
            globalFilterValue={filter}
            selectionMode="MultiSelect"
          />
          <div data-testid="payloadHelper">
            {JSON.stringify(relevantPayload?.selectedFlatRows?.filter(Boolean).length)}
            {JSON.stringify(relevantPayload?.selectedRowIds)}
          </div>
        </>
      );
    };
    const select = cy.spy().as('onRowSelectSpy');
    cy.mount(<TreeSelectFilterTable onRowSelect={select} />);

    // expand
    cy.findByText('Robin Moreno').should('not.exist', { timeout: 100 });
    cy.findByText('Judith Mathews').should('not.exist', { timeout: 100 });
    cy.get('[aria-rowindex="1"] > [aria-colindex="2"] > [title="Expand Node"] > ui5-icon').click();
    cy.findByText('Robin Moreno').should('be.visible');
    cy.get('[aria-rowindex="4"] > [aria-colindex="2"] > [title="Expand Node"] > ui5-icon').trigger('keydown', {
      key: 'Enter'
    });
    cy.findByText('Judith Mathews').should('be.visible');

    // select
    cy.findByText('Robin Moreno').click();
    cy.get('@onRowSelectSpy').should('have.been.calledWithMatch', {
      detail: { isSelected: true }
    });
    cy.findByTestId('payloadHelper').should('have.text', '1{"0.2":true}');
    cy.findByText('Judith Mathews').click();
    cy.get('@onRowSelectSpy').should('have.been.calledWithMatch', {
      detail: { isSelected: true }
    });
    cy.findByTestId('payloadHelper').should('have.text', '2{"0.2":true,"0.2.0":true}');

    // global filter + select
    cy.findByTestId('input').typeIntoUi5Input('Katy Bradshaw');
    cy.findByText('Robin Moreno').should('not.exist', { timeout: 100 });
    cy.findByText('Judith Mathews').should('not.exist', { timeout: 100 });
    cy.findByText('Katy Bradshaw').click();
    cy.get('@onRowSelectSpy').should('have.been.calledWithMatch', {
      detail: { isSelected: true }
    });
    cy.get('@onRowSelectSpy').should('have.been.calledThrice');
    cy.findByTestId('payloadHelper').should('have.text', '3{"1":true,"0.2":true,"0.2.0":true}');

    cy.findByTestId('input').typeIntoUi5Input('{selectall}{backspace}');

    // column filter + select
    cy.findByText('Name').click();
    cy.get(`ui5-input[show-clear-icon]`).typeIntoUi5Input('Flowers Mcfarland', { force: true });
    cy.findByText('Robin Moreno').should('not.exist', { timeout: 100 });
    cy.findByText('Judith Mathews').should('not.exist', { timeout: 100 });
    cy.findByText('Katy Bradshaw').should('not.exist', { timeout: 100 });
    cy.findByText('Flowers Mcfarland').click({ force: true });
    cy.get('@onRowSelectSpy').should('have.been.calledWithMatch', {
      detail: { isSelected: true }
    });
    cy.get('@onRowSelectSpy').should('have.callCount', 4);
    cy.findByTestId('payloadHelper').should('have.text', '4{"0":true,"1":true,"0.2":true,"0.2.0":true}');
  });

  it('programmatic and user selection + filtering', () => {
    const data = [
      ...generateMoreData(20),
      {
        name: `Name-7`,
        age: 22,
        friend: {
          name: `FriendName-X`,
          age: 22 + 10
        }
      }
    ];
    const TestComp = ({ onRowSelect }: PropTypes) => {
      const [selectedRowIds, setSelectedRowIds] = useState({});
      const [selectedFlatRows, setSelectedFlatRows] = useState([]);
      const [selectedRowIdsCb, setSelectedRowIdsCb] = useState({});
      const [allRowsSelected, setAllRowsSelected] = useState(false);
      const [globalFilterVal, setGlobalFilterVal] = useState('');
      return (
        <>
          <Button onClick={() => setSelectedRowIds({ 2: true, 3: false })}>Set selected rows</Button>
          <input
            data-testid="input"
            value={globalFilterVal}
            onInput={(e) => {
              setGlobalFilterVal(e.target.value);
            }}
          />
          <AnalyticalTable
            filterable
            data={data}
            columns={columns}
            globalFilterValue={globalFilterVal}
            onRowSelect={(e) => {
              setSelectedFlatRows(e.detail.selectedFlatRows.map((item) => item.id));
              setSelectedRowIdsCb(e.detail.selectedRowIds);
              setAllRowsSelected(e.detail.allRowsSelected);
              onRowSelect(e);
            }}
            selectionMode={AnalyticalTableSelectionMode.MultiSelect}
            selectedRowIds={selectedRowIds}
          />
          <p>
            "event.detail.selectedFlatRows:"<span data-testid="payload">{JSON.stringify(selectedFlatRows)}</span>
          </p>
          <p>
            "e.detail.selectedRowIds:"<span data-testid="payloadRowsById">{JSON.stringify(selectedRowIdsCb)}</span>
          </p>
          <p>
            "e.detail.allRowsSelected:"
            <span data-testid="payloadAllRowsSelected">{`${allRowsSelected}`}</span>
          </p>
        </>
      );
    };
    const select = cy.spy().as('onRowSelectSpy');
    cy.mount(<TestComp onRowSelect={select} />);

    cy.findByText('Name-0').click();
    cy.findByText('Name-1').click();
    cy.findByText('Name-5').click();
    cy.findByText('Name-5').click();
    cy.findByTestId('payload').should('have.text', '["0","1"]');
    cy.findByTestId('payloadRowsById').should('have.text', '{"0":true,"1":true}');
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'false');
    cy.get('@onRowSelectSpy').should('have.callCount', 4);

    cy.findByText('Set selected rows').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 4);
    cy.findByText('Name-1').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 5);
    cy.findByTestId('payload').should('have.text', '["1","2"]');
    cy.findByTestId('payloadRowsById').should('have.text', '{"1":true,"2":true,"3":false}');
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'false');

    cy.get('[data-row-index="0"][data-column-index="0"]').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 6);
    cy.findByTestId('payload').should(
      'have.text',
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]'
    );
    cy.findByTestId('payloadRowsById').should(
      'have.text',
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"5":true,"6":true,"7":true,"8":true,"9":true,"10":true,"11":true,"12":true,"13":true,"14":true,"15":true,"16":true,"17":true,"18":true,"19":true,"20":true}'
    );
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'true');

    cy.get('[data-row-index="0"][data-column-index="0"]').click();

    cy.findByText('Name-0').click();
    cy.findByText('Name-1').click();
    cy.findByText('Name-5').click();
    cy.findByText('Name').click();
    cy.get('[ui5-li-custom]').shadow().get('[ui5-input]').typeIntoUi5Input('7{enter}');
    cy.findByTestId('payload').should('have.text', '["0","1","5"]');
    cy.findByTestId('payloadRowsById').should('have.text', '{"0":true,"1":true,"5":true}');
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'false');

    cy.get('[data-row-index="0"][data-column-index="0"]').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 11);
    cy.findByTestId('payload').should('have.text', '["0","1","5","7","17","20"]');
    cy.findByTestId('payloadRowsById').should('have.text', '{"0":true,"1":true,"5":true,"7":true,"17":true,"20":true}');
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'false');

    cy.findByText('Name').click();
    cy.get('[ui5-li-custom]').shadow().get('[ui5-input]').typeIntoUi5Input('{selectall}{backspace}{enter}');
    cy.get('[data-row-index="0"][data-column-index="0"]').click();
    cy.findByText('Name-17').click({ force: true });
    cy.findByText('Name').click();
    cy.get('[ui5-li-custom]').shadow().get('[ui5-input]').typeIntoUi5Input('7{enter}');
    cy.findByTestId('payload').should(
      'have.text',
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","18","19","20"]'
    );
    cy.findByTestId('payloadRowsById').should(
      'have.text',
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"5":true,"6":true,"7":true,"8":true,"9":true,"10":true,"11":true,"12":true,"13":true,"14":true,"15":true,"16":true,"18":true,"19":true,"20":true}'
    );
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'false');
    cy.findByText('Name-17').click();
    cy.findByTestId('payload').should(
      'have.text',
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]'
    );
    cy.findByTestId('payloadRowsById').should(
      'have.text',
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"5":true,"6":true,"7":true,"8":true,"9":true,"10":true,"11":true,"12":true,"13":true,"14":true,"15":true,"16":true,"17":true,"18":true,"19":true,"20":true}'
    );
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'true');

    cy.findByText('Name').click();
    cy.get('[ui5-li-custom]').shadow().get('[ui5-input]').typeIntoUi5Input('{selectall}{backspace}{enter}');

    cy.findByText('Name-17').click({ force: true });
    cy.findByTestId('input').type('7{enter}');
    cy.findByTestId('payload').should(
      'have.text',
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","18","19","20"]'
    );
    cy.findByTestId('payloadRowsById').should(
      'have.text',
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"5":true,"6":true,"7":true,"8":true,"9":true,"10":true,"11":true,"12":true,"13":true,"14":true,"15":true,"16":true,"18":true,"19":true,"20":true}'
    );
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'false');
    cy.findByText('Name-17').click();
    cy.findByTestId('payload').should(
      'have.text',
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]'
    );
    cy.findByTestId('payloadRowsById').should(
      'have.text',
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"5":true,"6":true,"7":true,"8":true,"9":true,"10":true,"11":true,"12":true,"13":true,"14":true,"15":true,"16":true,"17":true,"18":true,"19":true,"20":true}'
    );
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'true');
    cy.get('@onRowSelectSpy').should('have.callCount', 16);
  });

  it('row & header height', () => {
    const TestComponent = () => {
      const [rowHeight, setRowHeight] = useState<number>();
      const [headerRowHeight, setHeaderRowHeight] = useState<number>();
      return (
        <>
          <Input
            data-testid="rowHeight"
            onInput={(e) => {
              if (e.target.value === '') {
                setRowHeight(undefined);
              } else {
                setRowHeight(parseInt(e.target.value));
              }
            }}
          />
          <Input
            data-testid="headerRowHeight"
            onInput={(e) => {
              if (e.target.value === '') {
                setHeaderRowHeight(undefined);
              } else {
                setHeaderRowHeight(parseInt(e.target.value));
              }
            }}
          />
          <AnalyticalTable data={data} columns={columns} rowHeight={rowHeight} headerRowHeight={headerRowHeight} />
        </>
      );
    };

    cy.mount(<TestComponent />);

    cy.findAllByRole('columnheader').invoke('outerHeight').should('equal', 44);
    cy.findAllByRole('cell').invoke('outerHeight').should('equal', 44);

    cy.findByTestId('rowHeight').typeIntoUi5Input('100');
    cy.findAllByRole('columnheader').invoke('outerHeight').should('equal', 100);
    cy.findAllByRole('cell').invoke('outerHeight').should('equal', 100);

    cy.findByTestId('headerRowHeight').typeIntoUi5Input('200');
    cy.findAllByRole('columnheader').invoke('outerHeight').should('equal', 200);
    cy.findAllByRole('cell').invoke('outerHeight').should('equal', 100);

    cy.findByTestId('headerRowHeight').typeIntoUi5Input('{selectall}{backspace}');
    cy.findAllByRole('columnheader').invoke('outerHeight').should('equal', 100);
    cy.findAllByRole('cell').invoke('outerHeight').should('equal', 100);
  });

  it('GroupBy selection', () => {
    const GroupBySelectTable = (props: PropTypes) => {
      const { onRowSelect } = props;
      const [relevantPayload, setRelevantPayload] = useState<Record<string, any>>({});
      const tableInstance = useRef<Record<string, any>>();

      useEffect(() => {
        if (tableInstance.current) {
          tableInstance.current.setGroupBy(['name']);
          setTimeout(() => {
            tableInstance.current.toggleAllRowsExpanded();
          }, 100);
        }
      }, []);

      return (
        <>
          <AnalyticalTable
            {...props}
            groupable
            columns={columns}
            tableInstance={tableInstance}
            onRowSelect={(e) => {
              const { allRowsSelected, isSelected, row, selectedFlatRows, selectedRowIds } = e.detail;
              setRelevantPayload({
                allRowsSelected,
                isSelected,
                row: row.id,
                selectedFlatRows: selectedFlatRows.map((item) => ({
                  id: item?.id
                })),
                selectedRowIds
              });
              onRowSelect(e);
            }}
            data={groupableData}
            selectionMode="MultiSelect"
          />
          <div data-testid="selectedFlatRowsLength">
            {JSON.stringify(relevantPayload?.selectedFlatRows?.filter(Boolean).length)}
          </div>
          <div data-testid="selectedRowIds">{JSON.stringify(relevantPayload?.selectedRowIds)}</div>
          <div data-testid="isSelected">{`${relevantPayload.isSelected}`}</div>
        </>
      );
    };
    const select = cy.spy().as('onRowSelectSpy');
    cy.mount(<GroupBySelectTable onRowSelect={select} />);

    cy.findByText('QWE').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 1);
    cy.findByTestId('selectedFlatRowsLength').should('have.text', '1');
    cy.findByTestId('selectedRowIds').should('have.text', '{"2":true}');
    cy.findByTestId('isSelected').should('have.text', 'true');

    cy.findByText('Friend Name').click();
    cy.findByText('Group').click();
    cy.get('[aria-rowindex="7"] > [aria-colindex="3"] > [title="Expand Node"] > ui5-icon').click();

    cy.findByText('25').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 2);
    cy.findByTestId('selectedFlatRowsLength').should('have.text', '2');
    cy.findByTestId('selectedRowIds').should('have.text', '{"2":true,"4":true}');
    cy.findByTestId('isSelected').should('have.text', 'true');

    cy.findByText('25').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 3);
    cy.findByTestId('selectedFlatRowsLength').should('have.text', '1');
    cy.findByTestId('selectedRowIds').should('have.text', '{"2":true}');
    cy.findByTestId('isSelected').should('have.text', 'false');
  });

  it('useIndeterminateRowSelection - select subRows', () => {
    const indeterminateChange = cy.spy().as('onIndeterminateChangeSpy');
    cy.mount(
      <AnalyticalTable
        selectionMode={AnalyticalTableSelectionMode.MultiSelect}
        data={dataTree}
        columns={columns}
        isTreeTable
        tableHooks={[AnalyticalTableHooks.useIndeterminateRowSelection(indeterminateChange)]}
        reactTableOptions={{ selectSubRows: true }}
      />
    );

    // select all
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();

    // expand
    cy.get('[aria-rowindex="2"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-icon]').click();
    cy.get('[aria-rowindex="3"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-icon]').click();
    cy.get('[aria-rowindex="4"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-icon]').click();

    // deselect row
    cy.findByText('Wiggins Cotton').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 1);

    cy.get('[aria-rowindex="4"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[aria-rowindex="2"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"] [ui5-checkbox]').should(
      'have.attr',
      'indeterminate',
      'true'
    );

    // deselect all
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 2);

    // select leaf row
    cy.findByText('Wiggins Cotton').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 3);

    cy.get('[aria-rowindex="4"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[aria-rowindex="2"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"] [ui5-checkbox]').should(
      'have.attr',
      'indeterminate',
      'true'
    );

    // deselect all
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 4);

    // select row with subRows
    cy.findByText('Diann Alvarado').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 5);

    cy.get('[aria-rowindex="4"] > [aria-colindex="1"]').should('have.attr', 'aria-selected', 'true');
    cy.get('[aria-rowindex="5"] > [aria-colindex="1"]').should('have.attr', 'aria-selected', 'true');
    cy.get('[aria-rowindex="6"] > [aria-colindex="1"]').should('have.attr', 'aria-selected', 'true');
    cy.get('[aria-rowindex="7"] > [aria-colindex="1"]').should('have.attr', 'aria-selected', 'true');
    cy.get('[aria-rowindex="8"] > [aria-colindex="1"]').should('have.attr', 'aria-selected', 'true');
    cy.get('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[aria-rowindex="2"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"] [ui5-checkbox]').should(
      'have.attr',
      'indeterminate',
      'true'
    );
  });

  it('useIndeterminateRowSelection', () => {
    const indeterminateChange = cy.spy().as('onIndeterminateChangeSpy');
    cy.mount(
      <AnalyticalTable
        selectionMode={AnalyticalTableSelectionMode.MultiSelect}
        data={dataTree}
        columns={columns}
        isTreeTable
        tableHooks={[AnalyticalTableHooks.useIndeterminateRowSelection(indeterminateChange)]}
      />
    );
    // select all
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();

    // expand
    cy.get('[aria-rowindex="2"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-icon]').click();
    cy.get('[aria-rowindex="3"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-icon]').click();
    cy.get('[aria-rowindex="4"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-icon]').click();

    // deselect row
    cy.findByText('Wiggins Cotton').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 1);

    cy.get('[aria-rowindex="4"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[aria-rowindex="2"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"] [ui5-checkbox]').should(
      'have.attr',
      'indeterminate',
      'true'
    );

    // deselect all
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 2);

    // select leaf row
    cy.findByText('Wiggins Cotton').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 3);

    cy.get('[aria-rowindex="4"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[aria-rowindex="2"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"] [ui5-checkbox]').should(
      'have.attr',
      'indeterminate',
      'true'
    );

    // deselect all
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 4);

    // select row with subRows
    cy.findByText('Diann Alvarado').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 5);

    cy.get('[aria-rowindex="4"] > [aria-colindex="1"]').should('have.attr', 'aria-selected', 'true');
    cy.get('[aria-rowindex="5"] > [aria-colindex="1"]').should('have.attr', 'aria-selected', 'false');
    cy.get('[aria-rowindex="6"] > [aria-colindex="1"]').should('have.attr', 'aria-selected', 'false');
    cy.get('[aria-rowindex="7"] > [aria-colindex="1"]').should('have.attr', 'aria-selected', 'false');
    cy.get('[aria-rowindex="8"] > [aria-colindex="1"]').should('have.attr', 'aria-selected', 'false');
    cy.get('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[aria-rowindex="2"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"] [ui5-checkbox]').should(
      'have.attr',
      'indeterminate',
      'true'
    );
  });

  it('Grow Mode: maxWidth', () => {
    const TableComp = (props) => {
      const headerText =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum aliquet arcu, ac facilisis tellus blandit nec. Etiam justo erat, dictum a ex ac, fermentum fringilla metus. Donec nibh magna, pellentesque ut odio id, feugiat vulputate nibh. In feugiat tincidunt quam, vitae sodales metus lobortis pellentesque. Donec eget rhoncus ante, in posuere nulla. Proin viverra, turpis id fermentum scelerisque, felis ipsum pharetra tortor, sed aliquet mi ex eu nisl. Praesent neque nunc, suscipit non interdum vitae, consequat sit amet velit. Morbi commodo dapibus lobortis. Vestibulum auctor velit sit amet semper egestas.';
      const [columns, setColumns] = useState<{ Header: string; accessor: string; maxWidth?: number }[]>([
        {
          Header: headerText,
          accessor: 'name'
        }
      ]);
      return (
        <>
          <Button
            onClick={() => {
              setColumns([
                {
                  Header: headerText,
                  accessor: 'name',
                  maxWidth: Infinity
                }
              ]);
            }}
          >
            Custom maxWidth
          </Button>
          <AnalyticalTable {...props} columns={columns} scaleWidthMode={AnalyticalTableScaleWidthMode.Grow} />
        </>
      );
    };
    cy.mount(<TableComp data={data} />);
    cy.get('[data-column-id="name"]').invoke('outerWidth').should('equal', 700);

    cy.findByText('Custom maxWidth').click();
    cy.get('[data-column-id="name"]').invoke('outerWidth').should('equal', 5008);
  });

  it('Column Scaling: programatically change cols', () => {
    const TestComp = (props) => {
      const [columns, setColumns] = useState([]);
      return (
        <>
          <Button
            onClick={() => {
              setColumns([
                { accessor: 'name', Header: 'Name' },
                { accessor: 'age', Header: 'Age' }
              ]);
            }}
          >
            Both
          </Button>
          <Button
            onClick={() => {
              setColumns([{ accessor: 'name', Header: 'Name' }]);
            }}
          >
            NameCol
          </Button>
          <Button
            onClick={() => {
              setColumns([{ accessor: 'age', Header: 'Age' }]);
            }}
          >
            AgeCol
          </Button>
          <AnalyticalTable {...props} columns={columns} />
        </>
      );
    };

    [
      { props: {}, bothWidth: 952, onlyNameWidth: 1904, onlyAgeWidth: 1904 },
      {
        props: { selectionMode: AnalyticalTableSelectionMode.MultiSelect },
        bothWidth: 930,
        onlyNameWidth: 1860,
        onlyAgeWidth: 1860
      },
      {
        props: { withRowHighlight: true },
        bothWidth: 949,
        onlyNameWidth: 1898,
        onlyAgeWidth: 1898
      },
      {
        props: { withNavigationHighlight: true },
        bothWidth: 949,
        onlyNameWidth: 1898,
        onlyAgeWidth: 1898
      },
      {
        props: {
          withNavigationHighlight: true,
          withRowHighlight: true,
          selectionMode: AnalyticalTableSelectionMode.SingleSelect
        },
        bothWidth: 924,
        onlyNameWidth: 1848,
        onlyAgeWidth: 1848
      }
    ].forEach((item) => {
      cy.mount(<TestComp data={data} {...item.props} />);

      cy.findByText('Both').click();
      cy.get('[data-column-id="name"]').invoke('outerWidth').should('equal', item.bothWidth);
      cy.get('[data-column-id="age"]').invoke('outerWidth').should('equal', item.bothWidth);

      cy.findByText('NameCol').click();
      cy.get('[data-column-id="name"]').invoke('outerWidth').should('equal', item.onlyNameWidth);
      cy.get('[data-column-id="age"]').should('not.exist', { timeout: 100 });

      cy.findByText('AgeCol').click();
      cy.get('[data-column-id="age"]').invoke('outerWidth').should('equal', item.onlyAgeWidth);
      cy.get('[data-column-id="name"]').should('not.exist', { timeout: 100 });
    });
  });

  it('tableInstance: change state & hide cols', () => {
    const TestComp = (props) => {
      const tableInstanceRef = useRef(null);
      return (
        <>
          <Button
            onClick={() => {
              tableInstanceRef.current.dispatch({ type: 'TABLE_RESIZE', payload: { tableClientWidth: 1200 } });
            }}
          >
            set clientWidth
          </Button>
          <Button
            onClick={() => {
              tableInstanceRef.current.toggleHideColumn('age', true);
            }}
          >
            hide age col
          </Button>
          <AnalyticalTable
            {...props}
            data-testid="at"
            tableInstance={tableInstanceRef}
            reactTableOptions={{
              autoResetHiddenColumns: false
            }}
          />
        </>
      );
    };

    cy.mount(<TestComp columns={columns} data={data} />);
    cy.wait(200);

    cy.findByText('set clientWidth').click();
    [
      '[data-column-id="name"]',
      '[data-column-id="age"]',
      '[data-column-id="friend\\.name"]',
      '[data-column-id="friend\\.age"]'
    ].forEach((col) => {
      cy.get(col).invoke('outerWidth').should('equal', 300);
    });

    cy.findByText('hide age col').click();
    ['[data-column-id="name"]', '[data-column-id="friend\\.name"]', '[data-column-id="friend\\.age"]'].forEach(
      (col) => {
        cy.get(col).invoke('outerWidth').should('equal', 400);
      }
    );
    cy.get('[data-column-id="age"]').should('not.exist', { timeout: 100 });
  });

  it('InfiniteScroll', () => {
    const data = new Array(500).fill('').map((_, index) => ({ name: `Name${index}` }));
    const TestComp = (props: Omit<AnalyticalTablePropTypes, 'data' | 'columns'>) => {
      const tableRef = useRef(null);
      const [internalData, setData] = useState(data.slice(0, 50));
      const offset = useRef(50);
      const onLoadMore = (e) => {
        props.onLoadMore(e);
        setData((prev) => [...prev, ...data.slice(offset.current, offset.current + 50)]);
        offset.current += 50;
      };
      return (
        <>
          <Input
            data-testid="scrollInput"
            onChange={(e) => {
              tableRef.current.scrollToItem(e.target.value);
            }}
          >
            Scroll Down
          </Input>
          <Button
            onClick={() => {
              setData(data.slice(0, 110));
            }}
          >
            Data 110
          </Button>
          <Button
            onClick={() => {
              setData(data.slice(0, 100));
            }}
          >
            Data 100
          </Button>
          <AnalyticalTable
            ref={tableRef}
            data-testid="at"
            data={internalData}
            columns={columns}
            infiniteScroll={true}
            infiniteScrollThreshold={10}
            onLoadMore={onLoadMore}
          />
          {`Rows: ${internalData.length}`}
        </>
      );
    };
    const onLoadMore = cy.spy().as('more');
    cy.mount(<TestComp onLoadMore={onLoadMore} />);

    cy.findByTestId('scrollInput').typeIntoUi5Input('45');
    cy.findByTestId('scrollInput').typeIntoUi5Input('{enter}', { force: true });
    cy.wait(100);
    cy.findByText('Name44').should('be.visible');
    cy.findByText('Rows: 100').should('be.visible');
    cy.get('@more').should('have.been.calledOnce');

    cy.findByText('Data 110').click();
    cy.findByTestId('scrollInput').typeIntoUi5Input('{selectall}{backspace}', { force: true });
    cy.findByTestId('scrollInput').typeIntoUi5Input('99', { force: true });
    cy.findByTestId('scrollInput').typeIntoUi5Input('{enter}', { force: true });
    cy.wait(100);
    cy.findByText('Name99').should('be.visible');
    cy.findByText('Rows: 110').should('be.visible');
    cy.get('@more').should('have.been.calledOnce');

    cy.findByTestId('scrollInput').typeIntoUi5Input('{selectall}{backspace}');
    cy.findByTestId('scrollInput').typeIntoUi5Input('100', { force: true });
    cy.findByTestId('scrollInput').typeIntoUi5Input('{enter}', { force: true });
    cy.wait(100);
    cy.findByText('Name100').should('be.visible');
    cy.findByText('Rows: 160').should('be.visible');
    cy.get('@more').should('have.been.calledTwice');

    cy.findByText('Data 100').click();
    cy.findByText('Rows: 100').should('be.visible');
    cy.findByTestId('scrollInput').typeIntoUi5Input('{selectall}{backspace}', { force: true });
    cy.findByTestId('scrollInput').typeIntoUi5Input('91', { force: true });
    cy.findByTestId('scrollInput').typeIntoUi5Input('{enter}', { force: true });
    cy.wait(100);
    cy.findByText('Name91').should('be.visible');
    cy.findByText('Rows: 150').should('be.visible');
    cy.get('@more').should('have.been.calledThrice');
  });

  it('InfiniteScroll: Tree', () => {
    const subRows = new Array(500).fill('').map((_, index) => ({ name: `Name${index}` }));
    const rootData = { name: 'Root' };
    const TestComp = (props: Omit<AnalyticalTablePropTypes, 'data' | 'columns'>) => {
      const tableRef = useRef(null);
      const [internalSubRows, setInternalSubRows] = useState(subRows.slice(0, 50));
      const offset = useRef(50);
      const onLoadMore = (e) => {
        props.onLoadMore(e);
        setInternalSubRows((prev) => [...prev, ...subRows.slice(offset.current, offset.current + 50)]);
        offset.current += 50;
      };
      return (
        <>
          <Input
            data-testid="scrollInput"
            onChange={(e) => {
              tableRef.current.scrollToItem(e.target.value);
            }}
          >
            Scroll Down
          </Input>
          <Button
            onClick={() => {
              setInternalSubRows(subRows.slice(0, 110));
            }}
          >
            Data 111
          </Button>
          <Button
            onClick={() => {
              setInternalSubRows(subRows.slice(0, 100));
            }}
          >
            Data 101
          </Button>
          <AnalyticalTable
            ref={tableRef}
            data-testid="at"
            data={[{ ...rootData, subRows: internalSubRows }]}
            columns={columns}
            infiniteScroll={true}
            infiniteScrollThreshold={10}
            onLoadMore={onLoadMore}
            isTreeTable
            reactTableOptions={{ autoResetExpanded: false }}
            minRows={1}
          />
          {/*root node => +1*/}
          {`Rows: ${internalSubRows.length + 1}`}
        </>
      );
    };
    const onLoadMore = cy.spy().as('more');
    cy.mount(<TestComp onLoadMore={onLoadMore} />);

    cy.get('[ui5-icon]').click();
    cy.findByTestId('scrollInput').typeIntoUi5Input('45');
    cy.findByTestId('scrollInput').typeIntoUi5Input('{enter}', { force: true });
    cy.wait(100);
    cy.findByText('Name44').should('be.visible');
    cy.findByText('Rows: 101').should('be.visible');
    cy.get('@more').should('have.been.calledOnce');

    cy.findByText('Data 111').click();
    cy.findByTestId('scrollInput').typeIntoUi5Input('{selectall}{backspace}', { force: true });
    cy.findByTestId('scrollInput').typeIntoUi5Input('100', { force: true });
    cy.findByTestId('scrollInput').typeIntoUi5Input('{enter}', { force: true });
    cy.wait(100);
    cy.findByText('Name99').should('be.visible');
    cy.findByText('Rows: 111').should('be.visible');
    cy.get('@more').should('have.been.calledOnce');

    cy.findByTestId('scrollInput').typeIntoUi5Input('{selectall}{backspace}', { force: true });
    cy.findByTestId('scrollInput').typeIntoUi5Input('101', { force: true });
    cy.findByTestId('scrollInput').typeIntoUi5Input('{enter}', { force: true });
    cy.wait(100);
    cy.findByText('Name100').should('be.visible');
    cy.findByText('Rows: 161').should('be.visible');
    cy.get('@more').should('have.been.calledTwice');

    cy.findByText('Data 101').click();
    cy.findByText('Rows: 101').should('be.visible');
    cy.findByTestId('scrollInput').typeIntoUi5Input('{selectall}{backspace}', { force: true });
    cy.findByTestId('scrollInput').typeIntoUi5Input('91', { force: true });
    cy.findByTestId('scrollInput').typeIntoUi5Input('{enter}', { force: true });
    cy.wait(100);
    cy.findByText('Name90').should('be.visible');
    cy.findByText('Rows: 151').should('be.visible');
    cy.get('@more').should('have.been.calledThrice');
  });

  it('custom cell (with markerAllowTableRowSelection) & header', () => {
    const cellClick = cy.spy().as('cellClick');
    const headerClick = cy.spy().as('headerClick');
    const select = cy.spy().as('select');
    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Age',
        accessor: 'age',
        Cell: () => <Button onClick={cellClick}>Custom Cell Button</Button>
      },
      {
        Header: () => <Button onClick={headerClick}>Custom Header Button</Button>,
        accessor: 'friend.name'
      }
    ];
    cy.mount(
      <AnalyticalTable selectionMode="SingleSelect" data={data.slice(0, 2)} columns={columns} onRowSelect={select} />
    );
    cy.findAllByText('Custom Cell Button')
      .should('have.length', 2)
      .each(($cellBtn) => {
        cy.wrap($cellBtn).click();
      });
    cy.get('@cellClick').should('have.been.calledTwice');
    cy.get('@select').should('not.be.called');
    cy.findByText('Custom Header Button').click();
    cy.get('@headerClick').should('have.been.calledOnce');
    const cellClick2 = (e) => {
      e.markerAllowTableRowSelection = true;
      cellClick(e);
    };
    const columns2 = [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Age',
        accessor: 'age',
        Cell: () => <Button onClick={cellClick2}>Custom Cell Button</Button>
      },
      {
        Header: () => <Button onClick={headerClick}>Custom Header Button</Button>,
        accessor: 'friend.name'
      }
    ];
    cy.mount(
      <AnalyticalTable selectionMode="SingleSelect" data={data.slice(0, 2)} columns={columns2} onRowSelect={select} />
    );
    cy.findAllByText('Custom Cell Button')
      .should('have.length', 2)
      .each(($cellBtn) => {
        cy.wrap($cellBtn).click();
      });
    cy.get('@cellClick').should('have.callCount', 4);
    cy.get('@select').should('have.been.calledTwice');
  });

  it('Loading & No Data', () => {
    cy.mount(<AnalyticalTable data={[]} columns={columns} loading />);
    cy.get('[data-component-name="AnalyticalTableLoadingPlaceholder"]').should('be.visible');
    cy.mount(<AnalyticalTable data={data} columns={columns} loading />);
    cy.get('[data-component-name="Loader"]').should('be.visible');
    cy.mount(<AnalyticalTable data={[]} columns={columns} />);
    cy.findByText('No Data').should('be.visible');
  });

  it('Alternate Row Color', () => {
    const standardRowColor = cssVarToRgb(ThemingParameters.sapList_Background);
    const alternatingRowColor = cssVarToRgb(ThemingParameters.sapList_AlternatingBackground);
    cy.mount(<AnalyticalTable data={data} columns={columns} alternateRowColor minRows={7} />);
    cy.get('[data-component-name="AnalyticalTableContainer"]').should('have.css', 'background-color', standardRowColor);
    function testAlternateRowColor() {
      for (let i = 1; i <= 4; i++) {
        if (i % 2) {
          // no color set
          cy.get(`[aria-rowindex="${i}"]`).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
        } else {
          cy.get(`[aria-rowindex="${i}"]`).should('have.css', 'background-color', alternatingRowColor);
        }
      }
      cy.get('[data-empty-row="true"]').each(($emptyRow, i) => {
        if ((i + 1) % 2) {
          // no color set
          cy.wrap($emptyRow).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
        } else {
          cy.wrap($emptyRow).should('have.css', 'background-color', alternatingRowColor);
        }
      });
    }
    testAlternateRowColor();
    cy.findByText('Name').click();
    cy.findByText('Sort Ascending').shadow().findByRole('listitem').click({ force: true });
    testAlternateRowColor();
  });

  it('initial column order', () => {
    const colOrder = ['Age', 'Friend Age', 'Friend Name', 'Name'];
    ['ltr', 'rtl'].forEach((dir) => {
      cy.mount(
        <AnalyticalTable
          dir={dir}
          data={data}
          columns={columns}
          columnOrder={['age', 'friend.age', 'friend.name', 'name']}
        />
      );
      cy.wait(50);
      cy.get('[data-column-id]').each(($col, index) => {
        cy.wrap($col).should('have.text', colOrder[index]);
      });
    });
  });
  it('columns drag & drop', () => {
    columns.pop();
    const updatedCols = [...columns, { accessor: 'friend.age', Header: 'Friend Age', disableDragAndDrop: true }];
    const reorder = cy.spy().as('reorder');
    ['ltr', 'rtl'].forEach((dir) => {
      cy.mount(<AnalyticalTable dir={dir} data={data} columns={updatedCols} onColumnsReorder={reorder} />);
      const dataTransfereById = (colId) => ({
        getData: () => {
          return colId;
        }
      });

      cy.get('[data-column-id="name"]')
        .trigger('dragstart')
        .trigger('drop', { dataTransfer: dataTransfereById('age') });
      const newColOrder = ['Age', 'Name', 'Friend Name', 'Friend Age'];
      cy.get('[data-column-id]').each(($col, index) => {
        cy.wrap($col).should('have.text', newColOrder[index]);
      });
    });
    cy.get('@reorder').should('have.been.calledTwice');
  });

  it('w/o selection column', () => {
    cy.mount(
      <AnalyticalTable
        data={data}
        columns={columns}
        selectionMode={AnalyticalTableSelectionMode.SingleSelect}
        selectionBehavior={AnalyticalTableSelectionBehavior.RowOnly}
      />
    );
    cy.get('[data-selection-cell="true"]', { timeout: 100 }).should('not.exist');
    cy.mount(
      <AnalyticalTable
        data={data}
        columns={columns}
        selectionMode={AnalyticalTableSelectionMode.MultiSelect}
        selectionBehavior={AnalyticalTableSelectionBehavior.RowOnly}
      />
    );
    cy.get('[data-selection-cell="true"]', { timeout: 100 }).should('not.exist');
    cy.mount(<AnalyticalTable data={data} columns={columns} />);
    cy.get('[data-selection-cell="true"]', { timeout: 100 }).should('not.exist');
  });

  it('navigated row', () => {
    const TestComp = () => {
      const [selectedRow, setSelectedRow] = useState<{ id?: boolean }>({});
      const onRowSelect = (e) => {
        setSelectedRow(e.detail.row);
      };
      const markNavigatedRow = useCallback(
        (row) => {
          return selectedRow?.id === row.id;
        },
        [selectedRow]
      );
      return (
        <AnalyticalTable
          data={data}
          columns={columns}
          withNavigationHighlight
          selectionMode={AnalyticalTableSelectionMode.MultiSelect}
          markNavigatedRow={markNavigatedRow}
          onRowSelect={onRowSelect}
        />
      );
    };
    cy.mount(<TestComp />);
    cy.findByText('A').click();
    cy.get('[data-component-name="AnalyticalTableNavigatedCell"]').should('be.visible').should('have.length', 1);
    cy.findByText('B').click();
    cy.get('[data-component-name="AnalyticalTableNavigatedCell"]').should('be.visible').should('have.length', 1);
  });

  it('select row with custom row key', () => {
    const selectedRowColor = cssVarToRgb(ThemingParameters.sapList_SelectionBackgroundColor);
    cy.mount(
      <AnalyticalTable
        selectionMode={AnalyticalTableSelectionMode.SingleSelect}
        data={data}
        columns={columns}
        reactTableOptions={{
          getRowId: (row, relativeIndex) => {
            return `${row.name ?? relativeIndex}`;
          }
        }}
        selectedRowIds={{
          ['A']: true
        }}
      />
    );
    cy.get('[aria-rowindex="1"]').should('be.visible').should('have.css', 'background-color', selectedRowColor);
  });

  it('onRowClick', () => {
    const rowClick = cy.spy().as('rowClick');
    const rowSelect = cy.spy().as('rowSelect');
    cy.mount(
      <AnalyticalTable
        header="Table Title"
        data={data}
        columns={columns}
        selectionBehavior={AnalyticalTableSelectionBehavior.Row}
        selectionMode={AnalyticalTableSelectionMode.SingleSelect}
        onRowClick={rowClick}
        onRowSelect={rowSelect}
      />
    );
    cy.get('[data-selection-cell="true"]')
      .should('have.length', 4)
      .each(($selCell) => {
        cy.wrap($selCell).click();
      });
    cy.get('@rowClick').should('have.callCount', 4);
    cy.get('@rowSelect').should('have.callCount', 4);
    ['A', '20', 'Dolor'].forEach((text) => {
      cy.findByText(text).click();
    });
    cy.get('@rowClick').should('have.callCount', 7);
    cy.get('@rowSelect').should('have.callCount', 7);
    const rowSelectWithoutSelCell = (e) => {
      if (e.target.dataset.selectionCell !== 'true') {
        rowClick(e);
      }
    };
    cy.mount(
      <AnalyticalTable
        header="Table Title"
        data={data}
        columns={columns}
        selectionBehavior={AnalyticalTableSelectionBehavior.Row}
        selectionMode={AnalyticalTableSelectionMode.SingleSelect}
        onRowClick={rowSelectWithoutSelCell}
        onRowSelect={rowSelect}
      />
    );
    cy.get('[data-selection-cell="true"]')
      .should('have.length', 4)
      .each(($selCell) => {
        cy.wrap($selCell).click();
      });
    cy.get('@rowClick').should('have.callCount', 7);
    cy.get('@rowSelect').should('have.callCount', 11);
  });

  it('withRowHighlight', () => {
    const errorColor = cssVarToRgb(ThemingParameters.sapErrorColor);
    const successColor = cssVarToRgb(ThemingParameters.sapSuccessColor);
    const localData = data.map((item, index) => {
      if ((index + 1) % 2) {
        return { ...item, status: ValueState.Error };
      }
      return { ...item, highlight: ValueState.Success };
    });
    cy.mount(<AnalyticalTable header="Table Title" data={localData} columns={columns} withRowHighlight />);
    cy.get('[data-component-name="AnalyticalTableHighlightCell"]')
      .should('have.length', 4)
      .each(($highlightCell, index) => {
        if ((index + 1) % 2) {
          cy.wrap($highlightCell).should('have.css', 'background-color', errorColor);
        } else {
          // no color
          cy.wrap($highlightCell).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
        }
      });
    cy.mount(
      <AnalyticalTable
        header="Table Title"
        data={localData}
        columns={columns}
        withRowHighlight
        highlightField="highlight"
      />
    );
    cy.get('[data-component-name="AnalyticalTableHighlightCell"]')
      .should('have.length', 4)
      .each(($highlightCell, index) => {
        if ((index + 1) % 2) {
          // no color
          cy.wrap($highlightCell).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
        } else {
          cy.wrap($highlightCell).should('have.css', 'background-color', successColor);
        }
      });
  });

  it('header popover open', () => {
    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Age',
        accessor: 'age',
        disableGroupBy: true,
        disableFilters: true,
        disableSortBy: true
      }
    ];
    cy.mount(<AnalyticalTable data={data} columns={columns} />);
    cy.get('[data-column-id="name"]').should('have.attr', 'aria-haspopup', 'menu').click();
    cy.get('[ui5-popover]').should('be.visible');
    cy.get('[data-column-id="age"]').should('not.have.attr', 'aria-haspopup');
    cy.get('[data-column-id="age"]').click();
    cy.get('[ui5-popover]', { timeout: 100 }).should('not.exist');
  });

  it('overlay', (done) => {
    cy.mount(<AnalyticalTable data={data} columns={columns} showOverlay />);
    cy.findByRole('region').should('be.visible').should('have.css', 'opacity', '0.8');
    cy.findByText('A').shouldNotBeClickable(done);
  });

  it('render subcomponents', () => {
    const renderRowSubComponent = () => {
      return <div title="subcomponent">SubComponent</div>;
    };

    const onlyFirstRowWithSubcomponent = (row) => {
      if (row.id === '0') {
        return <div title="subcomponent">SingleSubComponent</div>;
      }
    };
    cy.mount(<AnalyticalTable data={data} columns={columns} renderRowSubComponent={renderRowSubComponent} />);

    cy.findAllByTitle('Expand Node').should('have.length', 4);
    cy.findAllByTitle('Collapse Node').should('not.exist');

    cy.get('[aria-rowindex="1"] > [aria-colindex="1"] > [title="Expand Node"] > [ui5-icon]').click();

    cy.findAllByTitle('Expand Node').should('have.length', 3);
    cy.findAllByTitle('Collapse Node').should('have.length', 1);
    cy.findByText('SubComponent').should('be.visible');

    cy.get('[aria-rowindex="2"] > [aria-colindex="1"] > [title="Expand Node"] > [ui5-icon]').click();

    cy.findAllByTitle('Expand Node').should('have.length', 2);
    cy.findAllByTitle('Collapse Node').should('have.length', 2);
    cy.findAllByText('SubComponent').should('be.visible').should('have.length', 2);

    cy.mount(<AnalyticalTable data={data} columns={columns} renderRowSubComponent={onlyFirstRowWithSubcomponent} />);

    cy.findAllByTitle('Expand Node').should('have.length', 1);
    cy.findAllByTitle('Collapse Node').should('not.exist');

    cy.get('[aria-rowindex="1"] > [aria-colindex="1"] > [title="Expand Node"] > [ui5-icon]').click();

    cy.findAllByTitle('Expand Node').should('not.exist');
    cy.findAllByTitle('Collapse Node').should('have.length', 1);
    cy.findByText('SingleSubComponent').should('be.visible');
    cy.get('[aria-rowindex="2"] > [aria-colindex="1"] > [title="Expand Node"] > [ui5-icon]').should('not.exist');

    cy.mount(
      <AnalyticalTable
        data={data}
        columns={columns}
        renderRowSubComponent={renderRowSubComponent}
        alwaysShowSubComponent
      />
    );
    cy.findAllByText('SubComponent').should('be.visible').should('have.length', 4);
    cy.findByTitle('Expand Node').should('not.exist');
    cy.findByTitle('Collapse Node').should('not.exist');

    cy.mount(
      <AnalyticalTable
        data={data}
        columns={columns}
        renderRowSubComponent={onlyFirstRowWithSubcomponent}
        alwaysShowSubComponent
      />
    );
    cy.findByText('SingleSubComponent').should('be.visible').should('have.length', 1);
    cy.findByTitle('Expand Node').should('not.exist');
    cy.findByTitle('Collapse Node').should('not.exist');
  });

  it('pop-in columns', () => {
    document.body.style.margin = '0px';
    ['ltr', 'rtl'].forEach((dir) => {
      cy.mount(<AnalyticalTable data={data} columns={columnsWithPopIn} dir={dir} />);
      cy.viewport(801, 1024);

      cy.findByText('Name').should('be.visible');
      cy.findByText('Age').should('be.visible');
      cy.findByText('Friend Name').should('be.visible');
      cy.findByText('Custom original Header1').should('be.visible');
      cy.findByText('Custom original Header2').should('be.visible');
      cy.findByText('Custom Header').should('be.visible');
      cy.contains('Custom Cell 2').should('be.visible');

      cy.contains('Custom Header 1').should('not.exist');
      cy.contains('Custom Header 2').should('not.exist');
      cy.contains('pop-in content').should('not.exist');

      cy.viewport(800, 1024);
      cy.wait(200);

      cy.findByText('Name').should('be.visible');
      cy.findByText('Age').should('be.visible');
      // header
      cy.findByText('Friend Name').should('not.exist');
      // cell
      cy.contains('Friend Name').should('be.visible');
      cy.findByText('Custom original Header1').should('not.exist');
      cy.findByText('Custom original Header2').should('not.exist');
      cy.contains('Custom Header').should('exist');
      cy.contains('Custom Cell 2').should('be.visible');

      cy.contains('Custom Header 1').should('be.visible');
      cy.contains('Custom Header 2').should('be.visible');
      cy.contains('pop-in content').should('exist');
      cy.contains('C').should('exist');

      cy.viewport(600, 1024);
      cy.wait(200);
      cy.contains('Age').should('not.exist');
      cy.contains('40').should('not.exist');
    });
  });

  it('pop-in columns: adjustTableHeightOnPopIn ', () => {
    document.body.style.margin = '0px';
    cy.viewport(800, 2000);
    cy.mount(<AnalyticalTable data={data} columns={columnsWithPopIn} adjustTableHeightOnPopIn />);

    cy.findByText('Name').should('be.visible');
    cy.findByText('Age').should('be.visible');
    // header
    cy.findByText('Friend Name').should('not.exist');
    // cell
    cy.contains('Friend Name').should('be.visible');
    cy.findByText('Custom original Header1').should('not.exist');
    cy.findByText('Custom original Header2').should('not.exist');
    cy.contains('Custom Header').should('be.visible');
    cy.contains('Custom Cell 2').should('be.visible');

    cy.contains('Custom Header 1').should('be.visible');
    cy.contains('Custom Header 2').should('be.visible');
    cy.contains('pop-in content').should('be.visible');

    cy.contains('C').should('be.visible');
  });

  it('plugin hook: useRowDisableSelection', () => {
    const select = cy.spy().as('select');
    const click = cy.spy().as('click');
    const TestComponent = (props: Omit<AnalyticalTablePropTypes, 'data' | 'columns'>) => {
      const { onRowSelect, onRowClick } = props;
      const dataWithDisableSelectProp = data.map((item, index) => ({ ...item, disableSelection: index === 0 }));
      return (
        <AnalyticalTable
          data={dataWithDisableSelectProp}
          columns={columns}
          onRowSelect={onRowSelect}
          onRowClick={onRowClick}
          selectionMode={AnalyticalTableSelectionMode.MultiSelect}
          tableHooks={[useRowDisableSelection('disableSelection')]}
          minRows={1}
        />
      );
    };
    cy.mount(<TestComponent onRowSelect={select} onRowClick={click} />);
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"][role="columnheader"]')
      .find('[ui5-checkbox]')
      .should('not.exist');
    let selectCalled = 0;
    let clickCalled = 1;
    // colindex 1 === selection cell
    [1, 2].forEach((colNum) => {
      if (colNum === 1) {
        cy.get(`[aria-rowindex="1"] > [aria-colindex="${colNum}"]`).should('have.attr', 'aria-disabled', 'true');
      }
      cy.get(`[aria-rowindex="1"] > [aria-colindex="${colNum}"]`).should('not.have.attr', 'aria-label');
      cy.get(`[aria-rowindex="1"] > [aria-colindex="${colNum}"]`).click({ force: true });
      cy.get('@select').should('have.callCount', selectCalled);
      cy.get('@click').should('have.callCount', clickCalled);
      clickCalled++;

      cy.get(`[aria-rowindex="2"] > [aria-colindex="${colNum}"]`).should('have.attr', 'aria-label');
      cy.get(`[aria-rowindex="2"] > [aria-colindex="${colNum}"]`).should('not.have.attr', 'aria-disabled', 'true');
      cy.get(`[aria-rowindex="2"] > [aria-colindex="${colNum}"]`).click({ force: true });
      selectCalled++;
      cy.get('@select').should('have.callCount', selectCalled);
      cy.get('@click').should('have.callCount', clickCalled);
      clickCalled++;
    });
  });

  it('plugin hook: useManualRowSelect', () => {
    cy.mount(
      <AnalyticalTable
        selectionMode={AnalyticalTableSelectionMode.MultiSelect}
        data={manualSelectData}
        columns={columns}
        tableHooks={[useManualRowSelect('isSelected')]}
      />
    );
    // header row included
    cy.findAllByRole('row').each(($row, index) => {
      if (index !== 1) {
        cy.wrap($row).should('not.have.attr', 'data-is-selected');
      } else {
        cy.wrap($row).should('have.attr', 'data-is-selected');
      }
    });

    const [, ...updatedManualSelectData] = manualSelectData;
    cy.mount(
      <AnalyticalTable
        selectionMode={AnalyticalTableSelectionMode.MultiSelect}
        data={[
          {
            name: 'Selected',
            age: 40,
            friend: {
              name: 'MAR',
              age: 28
            },
            isSelected: false
          },
          ...updatedManualSelectData
        ]}
        columns={columns}
        tableHooks={[useManualRowSelect('isSelected')]}
      />
    );
    // header row included
    cy.findAllByRole('row').each(($row) => {
      cy.wrap($row).should('not.have.attr', 'data-is-selected');
    });
  });

  it('empty rows', () => {
    const ShowSelectedComp = () => {
      const instance = useRef(null);
      const [selected, setSelected] = useState({});
      return (
        <>
          <Button
            onClick={() => {
              setSelected(instance.current?.state.selectedRowIds);
            }}
          >
            Show Selected
          </Button>
          <AnalyticalTable
            selectionMode={AnalyticalTableSelectionMode.MultiSelect}
            data={data}
            columns={columns}
            tableInstance={instance}
          />
          Selected: {JSON.stringify(selected)}
        </>
      );
    };
    cy.mount(<AnalyticalTable data={[]} columns={columns} />);
    cy.get('[data-empty-row="true"]').should('not.exist');
    cy.mount(<AnalyticalTable data={[...data, ...data]} columns={columns} />);
    cy.get('[data-empty-row="true"]').should('not.exist');
    cy.mount(
      <AnalyticalTable
        data={dataTree}
        columns={columns}
        isTreeTable
        reactTableOptions={{ initialState: { expanded: { 1: true } } }}
      />
    );
    cy.get('[data-empty-row="true"]').should('not.exist');
    cy.mount(<AnalyticalTable data={data} columns={columns} minRows={15} />);
    cy.get('[data-empty-row="true"]').should('have.length', 11);
    cy.mount(<AnalyticalTable data={dataTree} columns={columns} isTreeTable />);
    cy.get('[data-empty-row="true"]').should('have.length', 3);
    cy.mount(<ShowSelectedComp />);
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();
    cy.findByText('Show Selected').click();
    cy.findByText('Selected: {"0":true,"1":true,"2":true,"3":true}').should('be.visible');
    cy.get('[data-empty-row="true"]').click();
    cy.findByText('Show Selected').click();
    cy.findByText('Selected: {"0":true,"1":true,"2":true,"3":true}').should('be.visible');
  });

  it('a11y: grouped, filtered, sorted', () => {
    cy.mount(<AnalyticalTable columns={columns} data={data} groupable filterable sortable />);
    cy.findByText('Name').click();
    cy.findByText('Sort Ascending').shadow().findByRole('listitem').click({ force: true });
    cy.get('[data-column-id="name"]').should('have.attr', 'aria-sort', 'ascending');
    cy.findByText('Name').click();
    cy.findByText('Clear Sorting').shadow().findByRole('listitem').click({ force: true });
    cy.get('[data-column-id="name"]').should('not.have.attr', 'aria-sort');
    cy.findByText('Name').click();
    cy.findByText('Sort Descending').shadow().findByRole('listitem').click({ force: true });
    cy.get('[data-column-id="name"]').should('have.attr', 'aria-sort', 'descending');
    cy.findByText('Name').click();
    cy.findByText('Sort Ascending').shadow().get('[ui5-input]').typeIntoUi5Input('A{enter}');
    cy.get('[data-column-id="name"]')
      .should('have.attr', 'aria-sort', 'descending')
      .and('have.attr', 'aria-label', 'Filtered');

    cy.findByText('Name').click();
    cy.findByText('Group').shadow().findByRole('listitem').click({ force: true });
    cy.get('[data-column-id="name"]')
      .should('have.attr', 'aria-sort', 'descending')
      .and('have.attr', 'aria-label', 'Filtered Grouped');
    cy.get('[data-visible-row-index="1"][data-visible-column-index="0"]').should(
      'have.attr',
      'aria-label',
      'Grouped, To expand the row, press the spacebar'
    );
    cy.get('[name="navigation-right-arrow"]').click();
    cy.get('[data-visible-row-index="1"][data-visible-column-index="0"]').should(
      'have.attr',
      'aria-label',
      'Grouped, To collapse the row, press the spacebar'
    );
    cy.findByText('Name').click();
    cy.findByText('Ungroup').shadow().findByRole('listitem').click({ force: true });
    cy.get('[data-visible-row-index="1"][data-visible-column-index="0"]').should('not.have.attr', 'aria-label');
    cy.get('[data-column-id="name"]')
      .should('have.attr', 'aria-sort', 'descending')
      .and('have.attr', 'aria-label', 'Filtered');

    cy.findByText('Name').click();
    cy.findByText('Sort Ascending').shadow().get('[ui5-input]').typeIntoUi5Input('{selectall}{backspace}{enter}');
    cy.get('[data-column-id="name"]').should('have.attr', 'aria-sort', 'descending').and('not.have.attr', 'aria-label');
  });

  it("Expandable: don't scroll when expanded/collapsed", () => {
    cy.mount(<AnalyticalTable data={[...dataTree, ...dataTree]} columns={columns} isTreeTable visibleRows={5} />);
    cy.findAllByText('Katy Bradshaw').eq(1).trigger('keydown', {
      key: 'Enter'
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').scrollTo('bottom');
    cy.findByText('Carol Perez').trigger('keydown', {
      key: 'Enter'
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').should('not.equal', 0);
    cy.findByText('Carol Perez').trigger('keydown', {
      key: 'Enter'
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').invoke('scrollTop').should('not.equal', 0);

    cy.mount(<AnalyticalTable data={[...data, ...data]} columns={columns} visibleRows={5} groupable />);
    cy.findByText('Name').click();
    cy.findByText('Group').click();
    cy.findByText('A (2)').trigger('keydown', {
      key: 'Enter'
    });
    cy.findByText('B (2)').trigger('keydown', {
      key: 'Enter'
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').scrollTo('bottom');
    cy.findByText('C (2)').trigger('keydown', {
      key: 'Enter'
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').invoke('scrollTop').should('not.equal', 0);
    cy.get('[data-component-name="AnalyticalTableBody"]').scrollTo('bottom');
    cy.findByText('C (2)').trigger('keydown', {
      key: 'Enter'
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').invoke('scrollTop').should('not.equal', 0);

    const renderRowSubComponent = () => {
      return (
        <div style={{ height: '80px' }} title="subcomponent">
          SubComponent
        </div>
      );
    };
    cy.mount(<AnalyticalTable data={data} columns={columns} renderRowSubComponent={renderRowSubComponent} />);
    cy.findByText('A').trigger('keydown', {
      key: 'Enter'
    });
    cy.findByText('B').trigger('keydown', {
      key: 'Enter'
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').scrollTo('bottom');
    cy.findByText('X').trigger('keydown', {
      key: 'Enter'
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').invoke('scrollTop').should('not.equal', 0);
    cy.get('[data-component-name="AnalyticalTableBody"]').scrollTo('bottom');
    cy.findByText('X').trigger('keydown', {
      key: 'Enter'
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').invoke('scrollTop').should('not.equal', 0);
  });

  it('multi-sort', () => {
    const columns = [
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
        accessor: 'name2'
      }
    ];
    const data = [
      { name: 'A', age: 40, name2: 'Y', age2: 18 },
      { name: 'B', age: 40, name2: 'X', age2: 21 },
      { name: 'A', age: 30, name2: 'Z', age2: 90 },
      { name: 'A', age: 70, name2: 'Z', age2: 15 },
      { name: 'B', age: 60, name2: 'Q', age2: 80 },
      { name: 'B', age: 20, name2: 'Y', age2: 80 },
      { name: 'C', age: 40, name2: 'Y', age2: 80 }
    ];
    cy.mount(<AnalyticalTable columns={columns} data={data} sortable />);

    //sort both Name and Age (multi-sort enabled)
    cy.findByText('Name').click();
    cy.findByText('Sort Ascending').shadow().findByRole('listitem').click({ force: true });
    cy.findByText('Age').click();
    cy.findByText('Sort Ascending').shadow().findByRole('listitem').click({ force: true });

    cy.get('[data-column-index="0"][data-row-index="1"]').children().should('have.text', 'A');
    cy.get('[data-column-index="1"][data-row-index="1"]').children().should('have.text', '30');
    cy.get('[data-column-index="0"][data-row-index="2"]').children().should('have.text', 'A');
    cy.get('[data-column-index="1"][data-row-index="2"]').children().should('have.text', '40');
    cy.get('[data-column-index="0"][data-row-index="3"]').children().should('have.text', 'A');
    cy.get('[data-column-index="1"][data-row-index="3"]').children().should('have.text', '70');

    cy.get('[data-column-index="0"][data-row-index="4"]').children().should('have.text', 'B');
    cy.get('[data-column-index="1"][data-row-index="4"]').children().should('have.text', '20');
    cy.get('[data-column-index="0"][data-row-index="5"]').children().should('have.text', 'B');
    cy.get('[data-column-index="1"][data-row-index="5"]').children().should('have.text', '40');
    cy.get('[data-column-index="0"][data-row-index="6"]').children().should('have.text', 'B');
    cy.get('[data-column-index="1"][data-row-index="6"]').children().should('have.text', '60');

    cy.get('[data-column-index="0"][data-row-index="7"]').children().should('have.text', 'C');
    cy.get('[data-column-index="1"][data-row-index="7"]').children().should('have.text', '40');

    //only sort Name2
    cy.findByText('Name 2').click();
    cy.findByText('Sort Ascending').shadow().findByRole('listitem').click({ force: true });

    cy.get('[data-column-index="0"][data-row-index="1"]').children().should('have.text', 'B');
    cy.get('[data-column-index="1"][data-row-index="1"]').children().should('have.text', '60');
    cy.get('[data-column-index="2"][data-row-index="1"]').children().should('have.text', 'Q');
    cy.get('[data-column-index="0"][data-row-index="2"]').children().should('have.text', 'B');
    cy.get('[data-column-index="1"][data-row-index="2"]').children().should('have.text', '40');
    cy.get('[data-column-index="2"][data-row-index="2"]').children().should('have.text', 'X');
    cy.get('[data-column-index="0"][data-row-index="3"]').children().should('have.text', 'A');
    cy.get('[data-column-index="1"][data-row-index="3"]').children().should('have.text', '40');
    cy.get('[data-column-index="2"][data-row-index="3"]').children().should('have.text', 'Y');
  });

  it('select-all', () => {
    const select = cy.spy().as('selectSpy');
    const TestComp = () => {
      const [stringifiedPl, setStringifiedPl] = useState('');
      const handleSelect = (e) => {
        const { allRowsSelected, selectedFlatRows, selectedRowIds } = e.detail;
        setStringifiedPl(
          JSON.stringify({
            selectedRowIds,
            selectedFlatRows: selectedFlatRows.map((item) => ({
              id: item?.id
            })),
            allRowsSelected
          })
        );
        select(e);
      };
      return (
        <>
          <AnalyticalTable
            columns={columns}
            data={data}
            selectionMode={AnalyticalTableSelectionMode.MultiSelect}
            onRowSelect={handleSelect}
          />
          <span data-testid="payload">{stringifiedPl}</span>
        </>
      );
    };
    cy.mount(<TestComp />);
    cy.get('[data-visible-column-index="0"][data-visible-row-index="0"]').click();
    cy.get('@selectSpy').should('have.been.calledOnce');
    cy.findByTestId('payload').should(
      'have.text',
      '{"selectedRowIds":{"0":true,"1":true,"2":true,"3":true},"selectedFlatRows":[{"id":"0"},{"id":"1"},{"id":"2"},{"id":"3"}],"allRowsSelected":true}'
    );
    cy.findByText('X').click();
    cy.get('@selectSpy').should('have.been.calledTwice');
    cy.findByTestId('payload').should(
      'have.text',
      '{"selectedRowIds":{"0":true,"1":true,"3":true},"selectedFlatRows":[{"id":"0"},{"id":"1"},{"id":"3"}],"allRowsSelected":false}'
    );
    cy.get('[data-visible-column-index="0"][data-visible-row-index="0"]').click();
    cy.get('@selectSpy').should('have.been.calledThrice');
    cy.findByTestId('payload').should(
      'have.text',
      '{"selectedRowIds":{"0":true,"1":true,"2":true,"3":true},"selectedFlatRows":[{"id":"0"},{"id":"1"},{"id":"2"},{"id":"3"}],"allRowsSelected":true}'
    );
    cy.get('[data-visible-column-index="0"][data-visible-row-index="0"]').click();
    cy.get('@selectSpy').should('have.callCount', 4);
    cy.findByTestId('payload').should(
      'have.text',
      '{"selectedRowIds":{},"selectedFlatRows":[],"allRowsSelected":false}'
    );
  });

  it('manualGroupBy - backend grouping', () => {
    const cols = [
      {
        accessor: 'values.name',
        Header: 'Name',
        // replace value for grouped rows, otherwise the aggregated value will be added in brackets
        Cell: ({ value }) => value,
        // bug with placeholder (repeated value), for some reason "Simon" is handled as placeholder when manualGroupBy is active
        // --> show value, but hide it for nested row, either here or in the data
        RepeatedValue: (instance) => {
          if (instance.manualGroupBy) {
            // this can be omitted when handled by data
            if (instance.row.id.includes('.')) {
              return null;
            }
            return instance.value;
          }
          return null;
        }
      },
      { accessor: 'values.age', Header: 'Age' }
    ];

    const SERVER_DATA = [
      { values: { name: 'Simon', age: '72', children: undefined } },
      { values: { name: 'Peter', age: '25', children: [] } },
      { values: { name: 'Martha', age: '30', children: [] } }
    ];
    const SERVER_DATA_AGGREGATED = [
      { values: { name: 'Simon', age: '72', children: undefined } },
      { values: { name: 'Peter', age: 'Aggregated', children: [] } },
      { values: { name: 'Martha', age: 'Aggregated', children: [] } }
    ];
    const SERVER_DATA_PETER = [
      { values: { name: 'Simon', age: '72', children: undefined } },
      {
        values: {
          name: 'Peter',
          age: 'Aggregated',
          children: [
            { values: { age: '25' } },
            { values: { age: '25' } },
            { values: { age: '30' } },
            { values: { age: '30' } },
            { values: { age: '30' } }
          ]
        }
      },
      { values: { name: 'Martha', age: 'Aggregated', children: [] } }
    ];

    const SERVER_DATA_MARTHA = [
      { values: { name: 'Simon', age: '72', children: undefined } },
      { values: { name: 'Peter', age: 'Aggregated', children: [] } },
      {
        values: {
          name: 'Martha',
          age: 'Aggregated',
          children: [
            { values: { name: 'Martha', age: '30' } },
            { values: { name: 'Martha', age: '25' } },
            { values: { name: 'Martha', age: '25' } }
          ]
        }
      }
    ];
    const TestComp = () => {
      const [groupedCols, setGroupedCols] = useState([]);
      const [serverData, setServerData] = useState(SERVER_DATA);
      const handleRowExpandChange = (e) => {
        const { isExpanded, original } = e.detail.row;
        const { column } = e.detail;
        if (!isExpanded) {
          if (groupedCols.includes(column.id)) {
            switch (original.values.name) {
              case 'Peter':
                setServerData(SERVER_DATA_PETER);
                break;
              case 'Martha':
                setServerData(SERVER_DATA_MARTHA);
                break;
              default:
                break;
            }
          }
        }
      };

      const handleGrouping = (e) => {
        const { groupedColumns } = e.detail;
        setGroupedCols(groupedColumns);
        if (groupedColumns.includes('values.name')) {
          setServerData(SERVER_DATA_AGGREGATED);
        } else {
          setServerData(SERVER_DATA);
        }
      };
      return (
        <AnalyticalTable
          data={serverData}
          groupable
          columns={cols}
          reactTableOptions={{
            autoResetGroupBy: false,
            autoResetExpanded: false,
            manualGroupBy: true
          }}
          // only use subRowsKey --> can't use subRows as it's always an array (not undefined - internal logic will fail)
          subRowsKey="values.children"
          onRowExpandChange={handleRowExpandChange}
          onGroup={handleGrouping}
        />
      );
    };
    cy.mount(<TestComp />);
    cy.findByText('Simon').should('be.visible').should('have.length', 1);
    cy.findByText('Peter').should('be.visible').should('have.length', 1);
    cy.findByText('Martha').should('be.visible').should('have.length', 1);
    cy.findByText('Aggregated').should('not.exist');

    cy.findByText('Name').click();
    cy.findByText('Group').click();
    cy.findByText('Simon').should('be.visible').should('have.length', 1);
    cy.findAllByText('Aggregated').should('be.visible').should('have.length', 2);
    cy.get('[ui5-icon][name="navigation-right-arrow"]').should('be.visible').should('have.length', 2);

    cy.get('[ui5-icon][name="navigation-right-arrow"]').eq(1).click();
    cy.findByText('Martha').should('be.visible').should('have.length', 1);

    cy.get('[data-visible-column-index="1"][data-visible-row-index="4"]').should('have.text', 30);
    cy.get('[data-visible-column-index="1"][data-visible-row-index="5"]').should('have.text', 25);
    cy.get('[data-visible-column-index="1"][data-visible-row-index="6"]').should('have.text', 25);
  });

  it('plugin hook: useOrderedMultiSort', () => {
    const TestComponent = ({ orderedIds }: { orderedIds: string[] }) => {
      const columns = [
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
      const data = [
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
      return (
        <AnalyticalTable
          columns={columns}
          data={data}
          sortable
          tableHooks={[AnalyticalTableHooks.useOrderedMultiSort(orderedIds)]}
        />
      );
    };

    cy.mount(<TestComponent orderedIds={['name', 'name2', 'age', 'age2']} />);
    cy.findByText('Age').click();
    cy.findByText('Sort Ascending').shadow().findByRole('listitem').click({ force: true });
    cy.findByText('Name').click();
    cy.findByText('Sort Ascending').shadow().findByRole('listitem').click({ force: true });

    cy.get('[data-visible-row-index="1"][data-visible-column-index="0"]').should('have.text', 'Graham');
    cy.get('[data-visible-row-index="1"][data-visible-column-index="1"]').should('have.text', '40');
    cy.get('[data-visible-row-index="5"][data-visible-column-index="0"]').should('have.text', 'Kristen');
    cy.get('[data-visible-row-index="5"][data-visible-column-index="1"]').should('have.text', '20');

    cy.findByText('Name 2').click();
    cy.findByText('Sort Descending').shadow().findByRole('listitem').click({ force: true });

    cy.get('[data-visible-row-index="1"][data-visible-column-index="0"]').should('have.text', 'Graham');
    cy.get('[data-visible-row-index="1"][data-visible-column-index="1"]').should('have.text', '62');
    cy.get('[data-visible-row-index="1"][data-visible-column-index="2"]').should('have.text', 'Willis');
    cy.get('[data-visible-row-index="5"][data-visible-column-index="0"]').should('have.text', 'Kristen');
    cy.get('[data-visible-row-index="5"][data-visible-column-index="1"]').should('have.text', '60');
    cy.get('[data-visible-row-index="5"][data-visible-column-index="2"]').should('have.text', 'Willis');

    cy.findByText('Name 2').click();
    cy.findByText('Clear Sorting').shadow().findByRole('listitem').click({ force: true });

    cy.get('[data-visible-row-index="1"][data-visible-column-index="0"]').should('have.text', 'Graham');
    cy.get('[data-visible-row-index="1"][data-visible-column-index="1"]').should('have.text', '40');
    cy.get('[data-visible-row-index="5"][data-visible-column-index="0"]').should('have.text', 'Kristen');
    cy.get('[data-visible-row-index="5"][data-visible-column-index="1"]').should('have.text', '20');

    cy.mount(<TestComponent orderedIds={['name2']} />);
    cy.findByText('Age').click();
    cy.findByText('Sort Ascending').shadow().findByRole('listitem').click({ force: true });
    cy.findByText('Name').click();
    cy.findByText('Sort Ascending').shadow().findByRole('listitem').click({ force: true });

    cy.get('[data-visible-row-index="1"][data-visible-column-index="0"]').should('have.text', 'Kristen');
    cy.get('[data-visible-row-index="1"][data-visible-column-index="1"]').should('have.text', '20');
    cy.get('[data-visible-row-index="5"][data-visible-column-index="0"]').should('have.text', 'Peter');
    cy.get('[data-visible-row-index="5"][data-visible-column-index="1"]').should('have.text', '40');

    cy.findByText('Age 2').click();
    cy.findByText('Sort Ascending').shadow().findByRole('listitem').click({ force: true });

    cy.get('[data-visible-row-index="1"][data-visible-column-index="0"]').should('have.text', 'Kristen');
    cy.get('[data-visible-row-index="1"][data-visible-column-index="1"]').should('have.text', '20');
    cy.get('[data-visible-row-index="1"][data-visible-column-index="3"]').should('have.text', '80');
    cy.get('[data-visible-row-index="5"][data-visible-column-index="0"]').should('have.text', 'Peter');
    cy.get('[data-visible-row-index="5"][data-visible-column-index="1"]').should('have.text', '40');
    cy.get('[data-visible-row-index="5"][data-visible-column-index="3"]').should('have.text', '18');

    cy.findByText('Name 2').click();
    cy.findByText('Sort Ascending').shadow().findByRole('listitem').click({ force: true });
    cy.get('[data-visible-row-index="1"][data-visible-column-index="0"]').should('have.text', 'Kristen');
    cy.get('[data-visible-row-index="1"][data-visible-column-index="1"]').should('have.text', '20');
    cy.get('[data-visible-row-index="1"][data-visible-column-index="2"]').should('have.text', 'Alissa');
    cy.get('[data-visible-row-index="1"][data-visible-column-index="3"]').should('have.text', '80');
    cy.get('[data-visible-row-index="5"][data-visible-column-index="0"]').should('have.text', 'Peter');
    cy.get('[data-visible-row-index="5"][data-visible-column-index="1"]').should('have.text', '30');
    cy.get('[data-visible-row-index="5"][data-visible-column-index="2"]').should('have.text', 'Rose');
    cy.get('[data-visible-row-index="5"][data-visible-column-index="3"]').should('have.text', '90');
  });

  it('keyboard navigation', () => {
    cy.mount(<AnalyticalTable data={generateMoreData(50)} columns={columns} />);
    cy.findByText('Name-0').should('be.visible');
    cy.get('[tabindex="0"]')
      .should('have.attr', 'data-component-name', 'AnalyticalTableContainer')
      .should('have.length', 1);

    cy.window().focus();
    cy.realPress('Tab');
    cy.focused().should('have.attr', 'data-row-index', '0').should('have.attr', 'data-column-index', '0');

    cy.realPress('ArrowDown');
    cy.focused().should('have.attr', 'data-row-index', '1').should('have.attr', 'data-column-index', '0');
    cy.realPress('ArrowRight');
    cy.focused().should('have.attr', 'data-row-index', '1').should('have.attr', 'data-column-index', '1');
    cy.realPress('ArrowUp');
    cy.focused().should('have.attr', 'data-row-index', '0').should('have.attr', 'data-column-index', '1');
    cy.realPress('ArrowLeft');
    cy.focused().should('have.attr', 'data-row-index', '0').should('have.attr', 'data-column-index', '0');

    cy.realPress('End');
    cy.focused().should('have.attr', 'data-row-index', '0').should('have.attr', 'data-column-index', '2');
    cy.realPress('Home');
    cy.focused().should('have.attr', 'data-row-index', '0').should('have.attr', 'data-column-index', '0');

    cy.realPress('PageDown');
    cy.focused().should('have.attr', 'data-row-index', '1').should('have.attr', 'data-column-index', '0');
    cy.realPress('PageDown');
    // last currently rendered row
    cy.focused().should('have.attr', 'data-row-index', '22').should('have.attr', 'data-column-index', '0');
    cy.realPress('PageDown');
    cy.focused().should('have.attr', 'data-row-index', '36').should('have.attr', 'data-column-index', '0');
    cy.realPress('PageDown');
    cy.focused().should('have.attr', 'data-row-index', '50').should('have.attr', 'data-column-index', '0');
    cy.realPress('PageUp');
    // first currently rendered row
    cy.focused().should('have.attr', 'data-row-index', '29').should('have.attr', 'data-column-index', '0');
    cy.realPress('PageUp');
    cy.focused().should('have.attr', 'data-row-index', '15').should('have.attr', 'data-column-index', '0');
    cy.realPress('PageUp');
    cy.focused().should('have.attr', 'data-row-index', '1').should('have.attr', 'data-column-index', '0');
    cy.realPress('PageUp');
    cy.focused().should('have.attr', 'data-row-index', '0').should('have.attr', 'data-column-index', '0');

    cy.mount(
      <AnalyticalTable
        data={generateMoreData(50)}
        columns={[...columns.slice(0, 2), { id: 'button', Cell: () => <Button>Button</Button> }]}
      />
    );

    cy.findByText('Name-0').should('be.visible');
    cy.window().focus();
    cy.realPress('Tab');
    cy.focused().should('have.attr', 'data-row-index', '0').should('have.attr', 'data-column-index', '0');
    cy.realPress('Tab');
    cy.focused().should('have.attr', 'ui5-button');
    cy.realPress('ArrowLeft');
    cy.focused().should('have.attr', 'data-row-index', '1').should('have.attr', 'data-column-index', '1');
    cy.realPress('Tab');
    cy.focused().should('have.attr', 'ui5-button');
    cy.realPress('ArrowDown');
    cy.focused().should('have.attr', 'data-row-index', '2').should('have.attr', 'data-column-index', '2');
    cy.realPress(['Shift', 'Tab']);
    cy.focused().should('have.attr', 'ui5-button');

    const renderSubComp = (row) => {
      if (row.id === '2') {
        return null;
      }
      return <div style={{ height: '50px', width: '100%', background: 'cadetblue' }}>SubComponent</div>;
    };

    cy.mount(
      <AnalyticalTable
        data={generateMoreData(50)}
        columns={columns.slice(0, 2)}
        alwaysShowSubComponent
        renderRowSubComponent={renderSubComp}
      />
    );
    cy.findByText('Name-0').should('be.visible');
    cy.window().focus();
    cy.realPress('Tab');
    cy.focused().should('have.attr', 'data-row-index', '0').should('have.attr', 'data-column-index', '0');
    cy.realPress('ArrowDown');
    cy.focused().should('have.attr', 'data-row-index', '1').should('have.attr', 'data-column-index', '0');
    cy.realPress('ArrowDown');
    cy.focused().should('have.attr', 'data-subcomponent-row-index', '1');
    cy.realPress('ArrowDown');
    cy.focused().should('have.attr', 'data-row-index', '2').should('have.attr', 'data-column-index', '0');
    cy.realPress('ArrowDown');
    cy.focused().should('have.attr', 'data-subcomponent-row-index', '2');
    cy.realPress('ArrowDown');
    cy.focused().should('have.attr', 'data-row-index', '3').should('have.attr', 'data-column-index', '0');
    cy.realPress('ArrowDown');
    cy.focused().should('have.attr', 'data-row-index', '4').should('have.attr', 'data-column-index', '0');
    cy.realPress('ArrowRight');
    cy.focused().should('have.attr', 'data-row-index', '4').should('have.attr', 'data-column-index', '1');
    cy.realPress('ArrowUp');
    cy.focused().should('have.attr', 'data-row-index', '3').should('have.attr', 'data-column-index', '1');
    cy.realPress('ArrowUp');
    cy.focused().should('have.attr', 'data-subcomponent-row-index', '2');
    cy.realPress('ArrowUp');
    cy.focused().should('have.attr', 'data-row-index', '2').should('have.attr', 'data-column-index', '0');

    const renderSubComp2 = (row) => {
      if (row.id === '2') {
        return null;
      }
      return (
        <div style={{ height: '50px', width: '100%', background: 'cadetblue' }}>
          <Button data-subcomponent-active-element>Active</Button>
        </div>
      );
    };

    cy.mount(
      <AnalyticalTable
        data={generateMoreData(50)}
        columns={columns.slice(0, 2)}
        alwaysShowSubComponent
        renderRowSubComponent={renderSubComp2}
      />
    );
    cy.findByText('Name-0').should('be.visible');
    cy.window().focus();
    cy.realPress('Tab');
    cy.focused().should('have.attr', 'data-row-index', '0').should('have.attr', 'data-column-index', '0');
    cy.realPress('ArrowDown');
    cy.focused().should('have.attr', 'data-row-index', '1').should('have.attr', 'data-column-index', '0');
    cy.realPress('ArrowDown');
    cy.focused().should('have.attr', 'data-subcomponent-row-index', '1');
    cy.realPress('Tab');
    cy.focused().should('have.attr', 'ui5-button');
    cy.realPress('ArrowDown');
    cy.focused().should('have.attr', 'data-subcomponent-row-index', '1');
    cy.realPress('Tab');
    cy.focused().should('have.attr', 'ui5-button');
    cy.realPress('ArrowUp');
    cy.focused().should('have.attr', 'data-subcomponent-row-index', '1');
    cy.realPress('Tab');
    cy.focused().should('have.attr', 'ui5-button');
    cy.realPress('ArrowLeft');
    cy.focused().should('have.attr', 'data-subcomponent-row-index', '1');
    cy.realPress('Tab');
    cy.focused().should('have.attr', 'ui5-button');
    cy.realPress('ArrowRight');
    cy.focused().should('have.attr', 'data-subcomponent-row-index', '1');
    cy.realPress('Tab');
    cy.focused().should('have.attr', 'ui5-button');
  });

  cypressPassThroughTestsFactory(AnalyticalTable, { data, columns });
});

const columnsWithPopIn = [
  {
    Header: 'Name',
    headerTooltip: 'Full Name',
    accessor: 'name'
  },
  {
    responsiveMinWidth: 601,
    Header: 'Age',
    accessor: 'age'
  },
  {
    responsivePopIn: true,
    responsiveMinWidth: 801,
    Header: 'Friend Name',
    accessor: 'friend.name'
  },
  {
    responsivePopIn: true,
    responsiveMinWidth: 801,
    Header: () => <span>Custom original Header1</span>,
    PopInHeader: 'Custom Header 1',
    accessor: 'friend.age'
  },
  {
    responsivePopIn: true,
    responsiveMinWidth: 801,
    Header: () => <span>Custom original Header2</span>,
    PopInHeader: () => {
      return 'Custom Header 2';
    },
    id: 'custom1',
    Cell: 'Custom Cell 2'
  },
  {
    responsivePopIn: true,
    responsiveMinWidth: 801,
    Header: () => 'Custom Header',
    id: 'custom2',
    Cell: ({ isPopIn }) => {
      if (isPopIn) {
        return 'pop-in content';
      }
      return 'original content';
    }
  }
];

const manualSelectData = [
  {
    name: 'Selected',
    age: 40,
    friend: {
      name: 'MAR',
      age: 28
    },
    isSelected: true
  },
  {
    name: 'Not selected',
    age: 20,
    friend: {
      name: 'Nei',
      age: 50
    },
    isSelected: false
  },
  {
    name: 'Not selected2',
    age: 20,
    friend: {
      name: 'Nei',
      age: 50
    }
  }
];

const groupableData = [
  {
    name: 'GroupMe',
    age: 25,
    friend: {
      name: 'Peter',
      age: 42
    }
  },
  {
    name: 'GroupMe',
    age: 56,
    friend: {
      name: 'ASD',
      age: 42
    }
  },
  {
    name: 'GroupMe',
    age: 13,
    friend: {
      name: 'QWE',
      age: 42
    }
  },
  {
    name: 'GroupMe',
    age: 25,
    friend: {
      name: 'ZXC',
      age: 42
    }
  },
  {
    name: 'GroupMe2',
    age: 25,
    friend: {
      name: 'Peter',
      age: 42
    }
  },
  {
    name: 'GroupMe2',
    age: 25,
    friend: {
      name: 'ASD',
      age: 42
    }
  },
  {
    name: 'GroupMe2',
    age: 55,
    friend: {
      name: 'Peter',
      age: 42
    }
  },
  {
    name: 'GroupMe2',
    age: 55,
    friend: {
      name: 'ZXC',
      age: 42
    }
  }
];

const dataTree = [
  {
    name: 'Flowers Mcfarland',
    age: 82,
    friend: {
      name: 'Gardner Chang',
      age: 38
    },

    subRows: [
      {
        name: 'Head Hardy',
        age: 35,
        friend: {
          name: 'Mcmillan Bray',
          age: 85
        },

        subRows: [
          {
            name: 'Deann Thompson',
            age: 42,
            friend: {
              name: 'Meghan Talley',
              age: 40
            },

            subRows: [
              {
                name: 'Barker Perkins',
                age: 24,
                friend: {
                  name: 'Gallegos Morin',
                  age: 77
                }
              },
              {
                name: 'Marquez Fletcher',
                age: 51,
                friend: {
                  name: 'Mia Conway',
                  age: 37
                }
              },
              {
                name: 'Holman Shannon',
                age: 75,
                friend: {
                  name: 'Cleo Newman',
                  age: 77
                }
              },
              {
                name: 'Letitia Blackburn',
                age: 46,
                friend: {
                  name: 'Helena Johnson',
                  age: 37
                }
              }
            ]
          },
          {
            name: 'Rose Lancaster',
            age: 32,
            friend: {
              name: 'Valarie Tanner',
              age: 61
            },

            subRows: [
              {
                name: 'Courtney Ochoa',
                age: 55,
                friend: {
                  name: 'Bartlett Craft',
                  age: 37
                }
              },
              {
                name: 'Holder Gilmore',
                age: 59,
                friend: {
                  name: 'Perry William',
                  age: 64
                }
              },
              {
                name: 'Eve Burke',
                age: 36,
                friend: {
                  name: 'Rhonda Hurley',
                  age: 26
                }
              },
              {
                name: 'Lilia Raymond',
                age: 32,
                friend: {
                  name: 'Leach Spence',
                  age: 60
                }
              }
            ]
          },
          {
            name: 'Kerry Murray',
            age: 65,
            friend: {
              name: 'Madeleine Brown',
              age: 84
            },

            subRows: [
              {
                name: 'Lynn Sanchez',
                age: 64,
                friend: {
                  name: 'Gail Hawkins',
                  age: 62
                }
              },
              {
                name: 'Stevens Valencia',
                age: 66,
                friend: {
                  name: 'Keller Woods',
                  age: 42
                }
              },
              {
                name: 'Wilkerson Solis',
                age: 26,
                friend: {
                  name: 'Wynn Carney',
                  age: 22
                }
              },
              {
                name: 'Booker Hyde',
                age: 21,
                friend: {
                  name: 'Ginger Obrien',
                  age: 47
                }
              }
            ]
          },
          {
            name: 'Graves Larson',
            age: 45,
            friend: {
              name: 'Reid Harrington',
              age: 30
            },

            subRows: [
              {
                name: 'Simone Kane',
                age: 65,
                friend: {
                  name: 'Bobbi Osborn',
                  age: 35
                }
              },
              {
                name: 'Nona Holt',
                age: 56,
                friend: {
                  name: 'Meadows Beach',
                  age: 33
                }
              },
              {
                name: 'Whitney Castro',
                age: 80,
                friend: {
                  name: 'Nichole Roberson',
                  age: 47
                }
              },
              {
                name: 'Lisa Salinas',
                age: 51,
                friend: {
                  name: 'Leona Short',
                  age: 81
                }
              }
            ]
          }
        ]
      },
      {
        name: 'Fleming Cote',
        age: 64,
        friend: {
          name: 'York Buckner',
          age: 60
        },

        subRows: [
          {
            name: 'Helga Franks',
            age: 52,
            friend: {
              name: 'Blankenship Clarke',
              age: 52
            },

            subRows: [
              {
                name: 'Mcknight Le',
                age: 80,
                friend: {
                  name: 'Harris Skinner',
                  age: 17
                }
              },
              {
                name: 'Patrick Boyle',
                age: 31,
                friend: {
                  name: 'Latasha Fitzpatrick',
                  age: 51
                }
              },
              {
                name: 'Kathy Chambers',
                age: 41,
                friend: {
                  name: 'Gwen Russo',
                  age: 61
                }
              },
              {
                name: 'Waters Huff',
                age: 35,
                friend: {
                  name: 'Cook Norton',
                  age: 58
                }
              }
            ]
          },
          {
            name: 'Kate Horne',
            age: 30,
            friend: {
              name: 'Kidd Mays',
              age: 17
            },

            subRows: [
              {
                name: 'Kristi Gillespie',
                age: 61,
                friend: {
                  name: 'Margarita Gallagher',
                  age: 16
                }
              },
              {
                name: 'Molly Sargent',
                age: 64,
                friend: {
                  name: 'Geraldine Bird',
                  age: 25
                }
              },
              {
                name: 'Boone Clayton',
                age: 83,
                friend: {
                  name: 'Dawn Dorsey',
                  age: 84
                }
              },
              {
                name: 'Terra Sawyer',
                age: 67,
                friend: {
                  name: 'Lessie Barnes',
                  age: 36
                }
              }
            ]
          },
          {
            name: 'Nadia Jacobs',
            age: 35,
            friend: {
              name: 'Pratt Vazquez',
              age: 36
            },

            subRows: [
              {
                name: 'Acosta Singleton',
                age: 49,
                friend: {
                  name: 'Burke Reese',
                  age: 57
                }
              },
              {
                name: 'Bridget Meadows',
                age: 74,
                friend: {
                  name: 'Monroe Sparks',
                  age: 79
                }
              },
              {
                name: 'Morse Justice',
                age: 60,
                friend: {
                  name: 'Lily Petty',
                  age: 66
                }
              },
              {
                name: 'Mckinney Riley',
                age: 47,
                friend: {
                  name: 'Brandy Garrison',
                  age: 33
                }
              }
            ]
          },
          {
            name: 'Lilian Horn',
            age: 52,
            friend: {
              name: 'Levy Buck',
              age: 74
            },

            subRows: [
              {
                name: 'Porter Walter',
                age: 67,
                friend: {
                  name: 'Young Welch',
                  age: 52
                }
              },
              {
                name: 'Ingrid Becker',
                age: 30,
                friend: {
                  name: 'Adrian Burnett',
                  age: 41
                }
              },
              {
                name: 'Harding Norman',
                age: 73,
                friend: {
                  name: 'Maribel Watson',
                  age: 71
                }
              },
              {
                name: 'Sparks Mccullough',
                age: 52,
                friend: {
                  name: 'Agnes Bowen',
                  age: 34
                }
              }
            ]
          }
        ]
      },
      {
        name: 'Robin Moreno',
        age: 62,
        friend: {
          name: 'Kristin Warner',
          age: 24
        },

        subRows: [
          {
            name: 'Judith Mathews',
            age: 44,
            friend: {
              name: 'Norton Guzman',
              age: 67
            },

            subRows: [
              {
                name: 'Trudy Roman',
                age: 72,
                friend: {
                  name: 'Ashley Rutledge',
                  age: 57
                }
              },
              {
                name: 'Gates Potts',
                age: 28,
                friend: {
                  name: 'Marsh Whitney',
                  age: 38
                }
              },
              {
                name: 'Shannon Bean',
                age: 43,
                friend: {
                  name: 'Gabriela Heath',
                  age: 77
                }
              },
              {
                name: 'Lorna Mcmahon',
                age: 21,
                friend: {
                  name: 'Leah Pearson',
                  age: 69
                }
              }
            ]
          },
          {
            name: 'Randall Nieves',
            age: 22,
            friend: {
              name: 'Juliette Kline',
              age: 55
            },

            subRows: [
              {
                name: 'Josefa Simmons',
                age: 66,
                friend: {
                  name: 'Madden Johnston',
                  age: 19
                }
              },
              {
                name: 'Michael Contreras',
                age: 56,
                friend: {
                  name: 'Sonya Frost',
                  age: 34
                }
              },
              {
                name: 'Hays Coleman',
                age: 64,
                friend: {
                  name: 'Leta Winters',
                  age: 54
                }
              },
              {
                name: 'Sara Adams',
                age: 46,
                friend: {
                  name: 'Jocelyn Paul',
                  age: 83
                }
              }
            ]
          },
          {
            name: 'Ivy Harvey',
            age: 78,
            friend: {
              name: 'Esperanza Morgan',
              age: 65
            },

            subRows: [
              {
                name: 'Fitzpatrick Scott',
                age: 19,
                friend: {
                  name: 'Mitzi Alford',
                  age: 47
                }
              },
              {
                name: 'Jamie Phillips',
                age: 79,
                friend: {
                  name: 'Ava Watkins',
                  age: 69
                }
              },
              {
                name: 'Irene Perry',
                age: 62,
                friend: {
                  name: 'Crawford Whitfield',
                  age: 50
                }
              },
              {
                name: 'Letha Peterson',
                age: 44,
                friend: {
                  name: 'Brianna Carver',
                  age: 51
                }
              }
            ]
          },
          {
            name: 'Bessie Parrish',
            age: 34,
            friend: {
              name: 'Payne Mcdowell',
              age: 36
            },

            subRows: [
              {
                name: 'Salazar Carson',
                age: 61,
                friend: {
                  name: 'Imelda Avery',
                  age: 72
                }
              },
              {
                name: 'Janna Page',
                age: 41,
                friend: {
                  name: 'Vicky Webster',
                  age: 85
                }
              },
              {
                name: 'Gretchen Maynard',
                age: 68,
                friend: {
                  name: 'Cora Powers',
                  age: 20
                }
              },
              {
                name: 'Kelsey Wade',
                age: 18,
                friend: {
                  name: 'Mills Crosby',
                  age: 50
                }
              }
            ]
          }
        ]
      },
      {
        name: 'Schmidt Mullins',
        age: 27,
        friend: {
          name: 'Erma Tucker',
          age: 52
        },

        subRows: [
          {
            name: 'Kirk Morton',
            age: 21,
            friend: {
              name: 'Vaughn Chaney',
              age: 85
            },

            subRows: [
              {
                name: 'Mccoy Monroe',
                age: 56,
                friend: {
                  name: 'Melody Cobb',
                  age: 50
                }
              },
              {
                name: 'Robbins Strickland',
                age: 79,
                friend: {
                  name: 'Cleveland Stokes',
                  age: 49
                }
              },
              {
                name: 'Patterson Bernard',
                age: 43,
                friend: {
                  name: 'Gamble Knox',
                  age: 53
                }
              },
              {
                name: 'Rose Hammond',
                age: 48,
                friend: {
                  name: 'James Zamora',
                  age: 39
                }
              }
            ]
          },
          {
            name: 'Deleon Edwards',
            age: 31,
            friend: {
              name: 'Petty Roach',
              age: 64
            },

            subRows: [
              {
                name: 'Lester Tate',
                age: 70,
                friend: {
                  name: 'Miles Shaffer',
                  age: 25
                }
              },
              {
                name: 'Autumn Wilkins',
                age: 84,
                friend: {
                  name: 'Yvette Savage',
                  age: 44
                }
              },
              {
                name: 'Jillian Richard',
                age: 74,
                friend: {
                  name: 'Tabatha Morrison',
                  age: 32
                }
              },
              {
                name: 'Evangeline Adkins',
                age: 63,
                friend: {
                  name: 'Eugenia Wright',
                  age: 79
                }
              }
            ]
          },
          {
            name: 'Underwood Tyler',
            age: 44,
            friend: {
              name: 'Irwin Santos',
              age: 31
            },

            subRows: [
              {
                name: 'Clara White',
                age: 81,
                friend: {
                  name: 'Glenn Hall',
                  age: 17
                }
              },
              {
                name: 'Alana Charles',
                age: 41,
                friend: {
                  name: 'Heidi Greer',
                  age: 33
                }
              },
              {
                name: 'Noreen Henderson',
                age: 81,
                friend: {
                  name: 'Marla Lane',
                  age: 23
                }
              },
              {
                name: 'Rebecca Ashley',
                age: 79,
                friend: {
                  name: 'Cathy Gray',
                  age: 84
                }
              }
            ]
          },
          {
            name: 'Chrystal Barron',
            age: 80,
            friend: {
              name: 'Potter Mack',
              age: 53
            },

            subRows: [
              {
                name: 'Riggs Woodward',
                age: 81,
                friend: {
                  name: 'Giles Conner',
                  age: 64
                }
              },
              {
                name: 'Randi Hester',
                age: 81,
                friend: {
                  name: 'Evangelina Hobbs',
                  age: 85
                }
              },
              {
                name: 'Earlene Bell',
                age: 20,
                friend: {
                  name: 'Dorthy Franco',
                  age: 21
                }
              },
              {
                name: 'Lila Smith',
                age: 51,
                friend: {
                  name: 'Stone Marsh',
                  age: 58
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Katy Bradshaw',
    age: 74,
    friend: {
      name: 'Griffin Carpenter',
      age: 39
    },

    subRows: [
      {
        name: 'Mae Dixon',
        age: 36,
        friend: {
          name: 'Esther Mendoza',
          age: 77
        },

        subRows: [
          {
            name: 'Diann Alvarado',
            age: 47,
            friend: {
              name: 'Georgette Osborne',
              age: 74
            },

            subRows: [
              {
                name: 'Wiggins Cotton',
                age: 35,
                friend: {
                  name: 'Ruth Pittman',
                  age: 25
                }
              },
              {
                name: 'Herring Flores',
                age: 68,
                friend: {
                  name: 'Kirkland Suarez',
                  age: 76
                }
              },
              {
                name: 'Allen Kidd',
                age: 82,
                friend: {
                  name: 'Mclaughlin Langley',
                  age: 78
                }
              },
              {
                name: 'Selma Kaufman',
                age: 62,
                friend: {
                  name: 'Hughes Vang',
                  age: 80
                }
              }
            ]
          },
          {
            name: 'Rios Moran',
            age: 16,
            friend: {
              name: 'Alexis Todd',
              age: 41
            },

            subRows: [
              {
                name: 'Morrison Higgins',
                age: 18,
                friend: {
                  name: 'Medina Abbott',
                  age: 50
                }
              },
              {
                name: 'Flores Ortiz',
                age: 24,
                friend: {
                  name: 'Latonya Lara',
                  age: 57
                }
              },
              {
                name: 'Fanny Hernandez',
                age: 77,
                friend: {
                  name: 'Mays Kim',
                  age: 42
                }
              },
              {
                name: 'Lillian Moore',
                age: 26,
                friend: {
                  name: 'Tania Rivas',
                  age: 18
                }
              }
            ]
          },
          {
            name: 'Anderson Pena',
            age: 23,
            friend: {
              name: 'Ortega Rich',
              age: 62
            },

            subRows: [
              {
                name: 'Burns Vaughan',
                age: 16,
                friend: {
                  name: 'Lottie Henson',
                  age: 85
                }
              },
              {
                name: 'Margret Ferguson',
                age: 45,
                friend: {
                  name: 'Rosalie Anderson',
                  age: 83
                }
              },
              {
                name: 'Hewitt Glass',
                age: 73,
                friend: {
                  name: 'Carlson French',
                  age: 39
                }
              },
              {
                name: 'Alyson Rosa',
                age: 85,
                friend: {
                  name: 'Vincent Allison',
                  age: 83
                }
              }
            ]
          },
          {
            name: 'Burnett Nichols',
            age: 74,
            friend: {
              name: 'Mckay Banks',
              age: 76
            },

            subRows: [
              {
                name: 'Ella Travis',
                age: 59,
                friend: {
                  name: 'Johnnie Bishop',
                  age: 64
                }
              },
              {
                name: 'Alicia Hicks',
                age: 46,
                friend: {
                  name: 'Clarice Palmer',
                  age: 75
                }
              },
              {
                name: 'Fry Maldonado',
                age: 28,
                friend: {
                  name: 'Moran Acosta',
                  age: 78
                }
              },
              {
                name: 'Rowena Webb',
                age: 79,
                friend: {
                  name: 'Gaines Poole',
                  age: 59
                }
              }
            ]
          }
        ]
      },
      {
        name: 'Sanchez Duran',
        age: 19,
        friend: {
          name: 'Myers Brennan',
          age: 70
        },

        subRows: [
          {
            name: 'Sheena Schwartz',
            age: 57,
            friend: {
              name: 'Lucile Chapman',
              age: 32
            },

            subRows: [
              {
                name: 'Nunez Campos',
                age: 73,
                friend: {
                  name: 'Sharpe Dyer',
                  age: 33
                }
              },
              {
                name: 'Ilene Hampton',
                age: 29,
                friend: {
                  name: 'Rogers Mckenzie',
                  age: 70
                }
              },
              {
                name: 'Sally Walsh',
                age: 25,
                friend: {
                  name: 'Huber Jones',
                  age: 55
                }
              },
              {
                name: 'Jami Solomon',
                age: 68,
                friend: {
                  name: 'Mara Haley',
                  age: 19
                }
              }
            ]
          },
          {
            name: 'Randolph Casey',
            age: 54,
            friend: {
              name: 'Norman Olsen',
              age: 82
            },

            subRows: [
              {
                name: 'Hopper Gay',
                age: 75,
                friend: {
                  name: 'Kari Holcomb',
                  age: 77
                }
              },
              {
                name: 'Delores Hahn',
                age: 47,
                friend: {
                  name: 'Conley Hoover',
                  age: 84
                }
              },
              {
                name: 'Bridgette Rowland',
                age: 32,
                friend: {
                  name: 'Wheeler Bates',
                  age: 63
                }
              },
              {
                name: 'Harriet Orr',
                age: 82,
                friend: {
                  name: 'Carroll Navarro',
                  age: 34
                }
              }
            ]
          },
          {
            name: 'Queen Cline',
            age: 55,
            friend: {
              name: 'Norma Fowler',
              age: 70
            },

            subRows: [
              {
                name: 'Montoya Farmer',
                age: 62,
                friend: {
                  name: 'Adams Bradley',
                  age: 38
                }
              },
              {
                name: 'Debra Moses',
                age: 79,
                friend: {
                  name: 'Rivas Maxwell',
                  age: 24
                }
              },
              {
                name: 'Bradley Bauer',
                age: 29,
                friend: {
                  name: 'Ida Park',
                  age: 72
                }
              },
              {
                name: 'Church Wilson',
                age: 24,
                friend: {
                  name: 'Krystal Harmon',
                  age: 81
                }
              }
            ]
          },
          {
            name: 'Kathrine Greene',
            age: 81,
            friend: {
              name: 'Carey Cleveland',
              age: 43
            },

            subRows: [
              {
                name: 'Rocha Lawrence',
                age: 33,
                friend: {
                  name: 'Polly Lucas',
                  age: 43
                }
              },
              {
                name: 'Jan Austin',
                age: 57,
                friend: {
                  name: 'Angelina Jefferson',
                  age: 18
                }
              },
              {
                name: 'Jayne Rojas',
                age: 78,
                friend: {
                  name: 'Rae Morales',
                  age: 50
                }
              },
              {
                name: 'Coffey Hart',
                age: 19,
                friend: {
                  name: 'Joyce Jimenez',
                  age: 19
                }
              }
            ]
          }
        ]
      },
      {
        name: 'Teresa Sheppard',
        age: 41,
        friend: {
          name: 'Crane Gordon',
          age: 22
        },

        subRows: [
          {
            name: 'Marci Dawson',
            age: 59,
            friend: {
              name: 'Margaret Miranda',
              age: 36
            },

            subRows: [
              {
                name: 'Janie England',
                age: 69,
                friend: {
                  name: 'Hart Franklin',
                  age: 46
                }
              },
              {
                name: 'Molina Baird',
                age: 63,
                friend: {
                  name: 'Maryellen Hill',
                  age: 19
                }
              },
              {
                name: 'Merrill Estes',
                age: 35,
                friend: {
                  name: 'Deanne Pace',
                  age: 65
                }
              },
              {
                name: 'Martinez Elliott',
                age: 61,
                friend: {
                  name: 'Tia Alston',
                  age: 59
                }
              }
            ]
          },
          {
            name: 'Janice Dale',
            age: 47,
            friend: {
              name: 'Glass Figueroa',
              age: 36
            },

            subRows: [
              {
                name: 'Catherine Griffith',
                age: 38,
                friend: {
                  name: 'Lorena Holloway',
                  age: 69
                }
              },
              {
                name: 'Lilly Sharp',
                age: 17,
                friend: {
                  name: 'Allison Kelley',
                  age: 81
                }
              },
              {
                name: 'Amanda Irwin',
                age: 59,
                friend: {
                  name: 'Mandy Randall',
                  age: 28
                }
              },
              {
                name: 'Lynch Stevens',
                age: 62,
                friend: {
                  name: 'Larson Oconnor',
                  age: 58
                }
              }
            ]
          },
          {
            name: 'Wilda Gilliam',
            age: 41,
            friend: {
              name: 'Brady Williamson',
              age: 61
            },

            subRows: [
              {
                name: 'Macias Underwood',
                age: 40,
                friend: {
                  name: 'Rachel Juarez',
                  age: 23
                }
              },
              {
                name: 'Mullins Rodriquez',
                age: 19,
                friend: {
                  name: 'Estelle Kirby',
                  age: 59
                }
              },
              {
                name: 'Maxwell Sampson',
                age: 42,
                friend: {
                  name: 'Estela Gallegos',
                  age: 47
                }
              },
              {
                name: 'Vance Stewart',
                age: 77,
                friend: {
                  name: 'Higgins Rollins',
                  age: 41
                }
              }
            ]
          },
          {
            name: 'French Trevino',
            age: 33,
            friend: {
              name: 'Rich Romero',
              age: 78
            },

            subRows: [
              {
                name: 'Dionne Odonnell',
                age: 62,
                friend: {
                  name: 'Terrie Mccray',
                  age: 41
                }
              },
              {
                name: 'Tanner Christensen',
                age: 63,
                friend: {
                  name: 'Garrett Blair',
                  age: 34
                }
              },
              {
                name: 'Sasha Mitchell',
                age: 22,
                friend: {
                  name: 'Gale Stein',
                  age: 78
                }
              },
              {
                name: 'Ann Blanchard',
                age: 66,
                friend: {
                  name: 'Aurelia Bonner',
                  age: 84
                }
              }
            ]
          }
        ]
      },
      {
        name: 'Carol Perez',
        age: 66,
        friend: {
          name: 'Cheri Valenzuela',
          age: 80
        },

        subRows: [
          {
            name: 'Linda Snider',
            age: 69,
            friend: {
              name: 'Amber Reynolds',
              age: 52
            },

            subRows: [
              {
                name: 'Lakeisha Whitley',
                age: 18,
                friend: {
                  name: 'Dona Kinney',
                  age: 66
                }
              },
              {
                name: 'Lawanda Nguyen',
                age: 27,
                friend: {
                  name: 'Karen Hancock',
                  age: 36
                }
              },
              {
                name: 'Sherrie Serrano',
                age: 27,
                friend: {
                  name: 'Stacie Cardenas',
                  age: 43
                }
              },
              {
                name: 'Chavez Holmes',
                age: 48,
                friend: {
                  name: 'Jeannette Hopkins',
                  age: 45
                }
              }
            ]
          },
          {
            name: 'Jackie Chase',
            age: 34,
            friend: {
              name: 'Ollie Baker',
              age: 27
            },

            subRows: [
              {
                name: 'Betsy Meyers',
                age: 74,
                friend: {
                  name: 'Katie Knight',
                  age: 59
                }
              },
              {
                name: 'Gutierrez Mcintyre',
                age: 30,
                friend: {
                  name: 'Good Patterson',
                  age: 75
                }
              },
              {
                name: 'Jody Mann',
                age: 48,
                friend: {
                  name: 'Ellis Jenkins',
                  age: 70
                }
              },
              {
                name: 'Edith Hubbard',
                age: 38,
                friend: {
                  name: 'Webb Kent',
                  age: 72
                }
              }
            ]
          },
          {
            name: 'Wendi Norris',
            age: 48,
            friend: {
              name: 'Whitfield House',
              age: 20
            },

            subRows: [
              {
                name: 'Wagner Owen',
                age: 33,
                friend: {
                  name: 'Mclean Stevenson',
                  age: 65
                }
              },
              {
                name: 'Maldonado Rose',
                age: 84,
                friend: {
                  name: 'Cooper Cash',
                  age: 64
                }
              },
              {
                name: 'Osborne Graham',
                age: 18,
                friend: {
                  name: 'Peck Guthrie',
                  age: 76
                }
              },
              {
                name: 'Drake Hartman',
                age: 41,
                friend: {
                  name: 'Stanton Durham',
                  age: 21
                }
              }
            ]
          },
          {
            name: 'Ferrell Baldwin',
            age: 26,
            friend: {
              name: 'Mcgowan Waller',
              age: 57
            },

            subRows: [
              {
                name: 'Mattie Lindsay',
                age: 55,
                friend: {
                  name: 'Meagan Mcintosh',
                  age: 44
                }
              },
              {
                name: 'Hamilton Hooper',
                age: 40,
                friend: {
                  name: 'Welch Harris',
                  age: 29
                }
              },
              {
                name: 'Schneider Dunlap',
                age: 53,
                friend: {
                  name: 'Darla Wallace',
                  age: 18
                }
              },
              {
                name: 'Marian Hess',
                age: 69,
                friend: {
                  name: 'Fields Wilcox',
                  age: 22
                }
              }
            ]
          }
        ]
      }
    ]
  }
];
