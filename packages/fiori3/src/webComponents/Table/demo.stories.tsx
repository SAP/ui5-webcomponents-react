import React from 'react';
import { storiesOf } from '@storybook/react';

import { boolean } from '@storybook/addon-knobs';
import { Table } from './index';
import { TableColumn } from '../TableColumn';
import { Text } from '@fiori-for-react/core';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';
import { Label } from '../Label';
import { propTablesExclude } from '../../../../docs/.storybook/config';

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
