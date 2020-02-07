import { boolean } from '@storybook/addon-knobs';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Table } from '@ui5/webcomponents-react/lib/Table';
import { TableCell } from '@ui5/webcomponents-react/lib/TableCell';
import { TableColumn } from '@ui5/webcomponents-react/lib/TableColumn';
import { TableRow } from '@ui5/webcomponents-react/lib/TableRow';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import React from 'react';

export default {
  title: 'UI5 Web Components / Table',
  component: Table,
  parameters: {
    subcomponents: { TableColumn, TableRow, TableCell }
  }
};

export const defaultStory = () => (
  <Table
    stickyColumnHeader={boolean('stickyColumnHeader', false)}
    columns={[
      <TableColumn>
        <Label>Column 1</Label>
      </TableColumn>,
      <TableColumn>
        <Text>Column 2</Text>
      </TableColumn>,
      <TableColumn>
        <Text>Column 3</Text>
      </TableColumn>
    ]}
  >
    <TableRow>
      <TableCell>
        <Label>Cell 1</Label>
      </TableCell>
      <TableCell>
        <Label>Cell 2</Label>
      </TableCell>
      <TableCell>
        <Label>Cell 3</Label>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <Label>Cell 2.1</Label>
      </TableCell>
      <TableCell>
        <Label>Cell 2.2</Label>
      </TableCell>
      <TableCell>
        <Label>Cell 2.3</Label>
      </TableCell>
    </TableRow>
  </Table>
);

defaultStory.story = {
  name: 'Default'
};
