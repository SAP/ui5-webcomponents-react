import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Table } from '@ui5/webcomponents-react/lib/Table';
import { TableCell } from '@ui5/webcomponents-react/lib/TableCell';
import { TableColumn } from '@ui5/webcomponents-react/lib/TableColumn';
import { TableRow } from '@ui5/webcomponents-react/lib/TableRow';
import React from 'react';

export default {
  title: 'UI5 Web Components / Table',
  component: Table,
  parameters: {
    subcomponents: { TableColumn, TableRow, TableCell }
  }
};

export const generatedDefaultStory = () => (
  <Table
    noDataText={text('noDataText', '')}
    showNoData={boolean('showNoData', false)}
    stickyColumnHeader={boolean('stickyColumnHeader', false)}
    columns={[
      <TableColumn style={{ width: '12rem' }}>
        <Label>Product</Label>
      </TableColumn>,
      <TableColumn minWidth={800} popinText="Supplier">
        <Label>Supplier</Label>
      </TableColumn>,
      <TableColumn minWidth={600} popinText="Dimensions" demandPopin>
        <Label>Dimensions</Label>
      </TableColumn>,
      <TableColumn minWidth={600} popinText="Weight" demandPopin>
        <Label>Weight</Label>
      </TableColumn>,
      <TableColumn>
        <Label>Price</Label>
      </TableColumn>
    ]}
    onPopinChange={action('onPopinChange')}
    onRowClick={action('onRowClick')}
  >
    <TableRow>
      <TableCell>
        <Label>Notebook Basic</Label>
      </TableCell>
      <TableCell>
        <Label>Very Best Screens</Label>
      </TableCell>
      <TableCell>
        <Label>30 x 18 x 3cm</Label>
      </TableCell>
      <TableCell>
        <Label>4.2KG</Label>
      </TableCell>
      <TableCell>
        <Label>956EUR</Label>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <Label>Notebook Basic 17HT-1001</Label>
      </TableCell>
      <TableCell>
        <Label>Very Best Screens</Label>
      </TableCell>
      <TableCell>
        <Label>29 x 17 x 3.1cm</Label>
      </TableCell>
      <TableCell>
        <Label>4.5KG</Label>
      </TableCell>
      <TableCell>
        <Label>1249EUR</Label>
      </TableCell>
    </TableRow>
  </Table>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
