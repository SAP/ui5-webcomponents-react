/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import React from 'react';
import { TableVisibleRowCountMode, ValueState } from '../../enums';
import { AnalyticalTable } from './index';

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
        <AnalyticalTable data={data} columns={columns} visibleRowCountMode={TableVisibleRowCountMode.Auto} />
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
        visibleRowCountMode={TableVisibleRowCountMode.Auto}
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
        visibleRowCountMode={TableVisibleRowCountMode.Auto}
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
        visibleRowCountMode={TableVisibleRowCountMode.Auto}
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
        visibleRowCountMode={TableVisibleRowCountMode.Fixed}
      />
    );
    cy.findByRole('grid').should('have.attr', 'data-per-page', '15');
    cy.findByText('Name-14').should('be.visible');
    cy.findByText('Name-15').should('not.be.visible');

    cy.mount(
      <AnalyticalTable
        data={generateMoreData(50)}
        columns={columns}
        visibleRowCountMode={TableVisibleRowCountMode.Fixed}
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
        visibleRowCountMode={TableVisibleRowCountMode.Interactive}
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
});
