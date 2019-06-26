import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { propTablesExclude } from '../../../../docs/.storybook/config';
import { Label } from '../../lib/Label';
import { Table } from '../../lib/Table';
import { TableCell } from '../../lib/TableCell';
import { TableColumn } from '../../lib/TableColumn';
import { TableRow } from '../../lib/TableRow';
import { Text } from '../../lib/Text';

storiesOf('UI5 Web Components | Table', module)
  .addParameters({
    info: {
      propTablesExclude: [...propTablesExclude, Text, Label]
    }
  })
  .add('Default', () => (
    <Table
      stickyColumnHeader={boolean('stickyColumnHeader', false)}
      rows={[
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
        </TableRow>,
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
      ]}
      columns={[
        <TableColumn header={<Label>Column 1</Label>} />,
        <TableColumn header={<Text>Column 2</Text>} />,
        <TableColumn header={<Text>Column 3</Text>} />
      ]}
    />
  ));
