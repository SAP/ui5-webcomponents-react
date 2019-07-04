import { Badge, Label, Table, TableCell, TableColumn, TableRow, Text, ThemeProvider } from '@ui5/webcomponents-react';
import React from 'react';

const columns = [
  <TableColumn key="name" width="150px">
    <Label>Prop</Label>
  </TableColumn>,
  <TableColumn key="propType" width="150px">
    <Label>PropType</Label>
  </TableColumn>,
  <TableColumn key="required" width="80px">
    <Label>Required</Label>
  </TableColumn>,
  <TableColumn key="defaultValue" width="100px">
    <Label>Default Value</Label>
  </TableColumn>,
  <TableColumn key="desc">
    <Label>Description</Label>
  </TableColumn>
];

export const TableComponent = (props) => {
  const info = props.type.__docgenInfo;

  const componentProps = info && info.props;

  return (
    <ThemeProvider>
      <Table
        showNoData={componentProps === undefined}
        noDataText="Unfortunately, there are no prop types available for this component"
        columns={columns}
      >
        {Object.values(componentProps || {}).map((componentInfo: any) => (
          <TableRow key={componentInfo.name}>
            <TableCell>
              <Text>{componentInfo.name}</Text>
            </TableCell>
            <TableCell>
              <Text>{componentInfo.type.name}</Text>
            </TableCell>
            <TableCell>{componentInfo.required && <Badge colorScheme="8">Yes</Badge>}</TableCell>
            <TableCell>{componentInfo.defaultValue && <Text>{componentInfo.defaultValue.value}</Text>}</TableCell>
            <TableCell>
              <Text>{componentInfo.description}</Text>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </ThemeProvider>
  );
};
