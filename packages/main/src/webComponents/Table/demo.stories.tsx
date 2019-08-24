import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Label } from '../../lib/Label';
import { Table } from '../../lib/Table';
import { TableCell } from '../../lib/TableCell';
import { TableColumn } from '../../lib/TableColumn';
import { TableRow } from '../../lib/TableRow';
import { Text } from '../../lib/Text';

storiesOf('UI5 Web Components | Table', module).add('Default', () => (
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
));
