import { useEffect, useRef, useState } from 'react';
import { AnalyticalTable, AnalyticalTableHooks, Button, Input, AnalyticalTableScaleWidthMode } from '../..';
import { AnalyticalTableSelectionMode, AnalyticalTableVisibleRowCountMode, ValueState } from '../../enums';

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
    }>
  ) => void;
}

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
    }
    const ScrollTable = (props: ScrollTableProps) => {
      const { scrollFn, args } = props;
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
            header="Table Title"
            data={data}
            columns={columns}
            visibleRows={1}
            minRows={1}
          />
        </>
      );
    };
    cy.mount(<ScrollTable scrollFn="scrollToItem" args={[1, 'start']} />);
    cy.findByText('A').should('be.visible');
    // should not be rendered due to virtualization
    cy.findByText('B').should('not.exist');
    cy.findByText('Click').click();
    cy.findByText('B').should('be.visible');
    cy.findByText('A').should('not.exist');

    cy.mount(<ScrollTable scrollFn="scrollTo" args={[50]} />);
    cy.findByText('Click').click();
    cy.get('[data-component-name="AnalyticalTableBody"]').invoke('scrollTop').should('equal', 50);

    cy.mount(<ScrollTable scrollFn="horizontalScrollToItem" args={[1, 'start']} />);
    cy.findByText('A').should('be.visible');
    cy.findByText('28').should('not.be.visible');
    cy.findByText('Click').click();
    cy.findByText('28').should('be.visible');
    cy.findByText('A').should('not.be.visible');

    cy.mount(<ScrollTable scrollFn="horizontalScrollTo" args={[20]} />);
    cy.findByText('Click').click();
    cy.findByRole('grid').invoke('scrollLeft').should('equal', 20);
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
              const { allRowsSelected, isSelected, row, selectedFlatRows } = e.detail;
              setRelevantPayload({
                allRowsSelected,
                isSelected,
                row: row.id,
                selectedFlatRows: selectedFlatRows.map((item) => ({
                  id: item?.id
                }))
              });
              props.onRowSelect(e);
            }}
            data={dataTree}
            globalFilterValue={filter}
            selectionMode="MultiSelect"
          />
          <div data-testid="payloadHelper">
            {JSON.stringify(relevantPayload?.selectedFlatRows?.filter(Boolean).length)}
          </div>
        </>
      );
    };
    const select = cy.spy().as('onRowSelectSpy');
    cy.mount(<TreeSelectFilterTable onRowSelect={select} />);

    // expand
    cy.findByText('Robin Moreno').should('not.exist');
    cy.findByText('Judith Mathews').should('not.exist');
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
    cy.findByTestId('payloadHelper').should('have.text', '1');
    cy.findByText('Judith Mathews').click();
    cy.get('@onRowSelectSpy').should('have.been.calledWithMatch', {
      detail: { isSelected: true }
    });
    cy.findByTestId('payloadHelper').should('have.text', '2');

    // global filter + select
    cy.findByTestId('input').shadow().find('input').type('Katy Bradshaw');
    cy.findByText('Robin Moreno').should('not.exist');
    cy.findByText('Judith Mathews').should('not.exist');
    cy.findByText('Katy Bradshaw').click();
    cy.get('@onRowSelectSpy').should('have.been.calledWithMatch', {
      detail: { isSelected: true }
    });
    cy.get('@onRowSelectSpy').should('have.been.calledThrice');
    cy.findByTestId('payloadHelper').should('have.text', '3');

    cy.findByTestId('input').shadow().find('input').clear();

    // column filter + select
    cy.findByText('Name').click();
    cy.get(`ui5-input[show-clear-icon]`).shadow().find('input').type('Flowers Mcfarland', { force: true });
    cy.findByText('Robin Moreno').should('not.exist');
    cy.findByText('Judith Mathews').should('not.exist');
    cy.findByText('Katy Bradshaw').should('not.exist');
    cy.findByText('Flowers Mcfarland').click({ force: true });
    cy.get('@onRowSelectSpy').should('have.been.calledWithMatch', {
      detail: { isSelected: true }
    });
    cy.get('@onRowSelectSpy').should('have.callCount', 4);
    cy.findByTestId('payloadHelper').should('have.text', '4');
  });

  it('programmatic and user selection', () => {
    const data = generateMoreData(20);
    const TestComp = ({ onRowSelect }: PropTypes) => {
      const [selectedRowIds, setSelectedRowIds] = useState({});
      const [selectedFlatRows, setSelectedFlatRows] = useState([]);
      return (
        <>
          <Button onClick={() => setSelectedRowIds({ 2: true, 3: false })}>Set selected rows</Button>
          <AnalyticalTable
            data={data}
            columns={columns}
            onRowSelect={(e) => {
              setSelectedFlatRows(e.detail.selectedFlatRows.map((item) => item.id));
              onRowSelect(e);
            }}
            selectionMode={AnalyticalTableSelectionMode.MultiSelect}
            selectedRowIds={selectedRowIds}
          />
          "event.detail.selectedFlatRows:"<div data-testid="payload">{JSON.stringify(selectedFlatRows)}</div>
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
    cy.get('@onRowSelectSpy').should('have.callCount', 4);

    cy.findByText('Set selected rows').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 4);
    cy.findByText('Name-1').click();
    cy.findByTestId('payload').should('have.text', '["1","2"]');
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

    cy.findByTestId('rowHeight').shadow().find('input').type('100');
    cy.findAllByRole('columnheader').invoke('outerHeight').should('equal', 100);
    cy.findAllByRole('cell').invoke('outerHeight').should('equal', 100);

    cy.findByTestId('headerRowHeight').shadow().find('input').type('200');
    cy.findAllByRole('columnheader').invoke('outerHeight').should('equal', 200);
    cy.findAllByRole('cell').invoke('outerHeight').should('equal', 100);

    cy.findByTestId('headerRowHeight').shadow().find('input').clear({ force: true });
    cy.findAllByRole('columnheader').invoke('outerHeight').should('equal', 100);
    cy.findAllByRole('cell').invoke('outerHeight').should('equal', 100);
  });

  it('GroupBy selection', () => {
    interface PropTypes {
      onRowSelect: (
        e?: CustomEvent<{
          allRowsSelected: boolean;
          row?: Record<string, unknown>;
          isSelected?: boolean;
          selectedFlatRows: Record<string, unknown>[];
        }>
      ) => void;
    }
    const GroupBySelectTable = (props: PropTypes) => {
      const { onRowSelect } = props;
      const [relevantPayload, setRelevantPayload] = useState<Record<string, any>>({});
      const tableInstance = useRef();

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
              const { allRowsSelected, isSelected, row, selectedFlatRows } = e.detail;
              setRelevantPayload({
                allRowsSelected,
                isSelected,
                row: row.id,
                selectedFlatRows: selectedFlatRows.map((item) => ({
                  id: item?.id
                }))
              });
              onRowSelect(e);
            }}
            data={groupableData}
            selectionMode="MultiSelect"
          />
          <div data-testid="selectedFlatRowsLength">
            {JSON.stringify(relevantPayload?.selectedFlatRows?.filter(Boolean).length)}
          </div>
          <div data-testid="isSelected">{`${relevantPayload.isSelected}`}</div>
        </>
      );
    };
    const select = cy.spy().as('onRowSelectSpy');
    cy.mount(<GroupBySelectTable onRowSelect={select} />);

    cy.findByText('QWE').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 1);
    cy.findByTestId('selectedFlatRowsLength').should('have.text', '1');
    cy.findByTestId('isSelected').should('have.text', 'true');

    cy.findByText('Friend Name').click();
    cy.findByText('Group').click();
    cy.get('[aria-rowindex="7"] > [aria-colindex="3"] > [title="Expand Node"] > ui5-icon').click();

    cy.findByText('25').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 2);
    cy.findByTestId('selectedFlatRowsLength').should('have.text', '2');
    cy.findByTestId('isSelected').should('have.text', 'true');

    cy.findByText('25').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 3);
    cy.findByTestId('selectedFlatRowsLength').should('have.text', '1');
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
    cy.get('#__ui5wcr__internal_selection_column').click();

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
    cy.get('#__ui5wcr__internal_selection_column [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');

    // deselect all
    cy.get('#__ui5wcr__internal_selection_column').click();
    cy.get('#__ui5wcr__internal_selection_column').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 2);

    // select leaf row
    cy.findByText('Wiggins Cotton').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 3);

    cy.get('[aria-rowindex="4"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[aria-rowindex="2"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('#__ui5wcr__internal_selection_column [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');

    // deselect all
    cy.get('#__ui5wcr__internal_selection_column').click();
    cy.get('#__ui5wcr__internal_selection_column').click();
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
    cy.get('#__ui5wcr__internal_selection_column [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
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
    cy.get('#__ui5wcr__internal_selection_column').click();

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
    cy.get('#__ui5wcr__internal_selection_column [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');

    // deselect all
    cy.get('#__ui5wcr__internal_selection_column').click();
    cy.get('#__ui5wcr__internal_selection_column').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 2);

    // select leaf row
    cy.findByText('Wiggins Cotton').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 3);

    cy.get('[aria-rowindex="4"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('[aria-rowindex="2"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
    cy.get('#__ui5wcr__internal_selection_column [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');

    // deselect all
    cy.get('#__ui5wcr__internal_selection_column').click();
    cy.get('#__ui5wcr__internal_selection_column').click();
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
    cy.get('#__ui5wcr__internal_selection_column [ui5-checkbox]').should('have.attr', 'indeterminate', 'true');
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
    cy.get('#name').invoke('outerWidth').should('equal', 700);

    cy.findByText('Custom maxWidth').click();
    cy.get('#name').invoke('outerWidth').should('equal', 5008);
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
    cy.mount(<TestComp data={data} />);

    cy.findByText('Both').click();
    cy.get('#name').invoke('outerWidth').should('equal', 952);
    cy.get('#age').invoke('outerWidth').should('equal', 952);

    cy.findByText('NameCol').click();
    cy.get('#name').invoke('outerWidth').should('equal', 1904);
    cy.get('#age').should('not.exist');

    cy.findByText('AgeCol').click();
    cy.get('#age').invoke('outerWidth').should('equal', 1904);
    cy.get('#name').should('not.exist');
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
    ['#name', '#age', '#friend\\.name', '#friend\\.age'].forEach((col) => {
      cy.get(col).invoke('outerWidth').should('equal', 300);
    });

    cy.findByText('hide age col').click();
    ['#name', '#friend\\.name', '#friend\\.age'].forEach((col) => {
      cy.get(col).invoke('outerWidth').should('equal', 400);
    });
    cy.get('#age').should('not.exist');
  });
});

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
