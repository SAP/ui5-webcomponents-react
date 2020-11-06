import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { Table } from '@ui5/webcomponents-react/lib/Table';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { TableCell } from '@ui5/webcomponents-react/lib/TableCell';
import { TableColumn } from '@ui5/webcomponents-react/lib/TableColumn';
import { TableRow } from '@ui5/webcomponents-react/lib/TableRow';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import React from 'react';
import { ProductCollection } from './products.json';

export const ProductsTable = () => {
  return (
    <Table
      columns={
        <>
          <TableColumn>Product</TableColumn>
          <TableColumn>Supplier</TableColumn>
          <TableColumn>Dimensions</TableColumn>
          <TableColumn>Price</TableColumn>
        </>
      }
    >
      {ProductCollection.map((product) => {
        return (
          <TableRow key={product.ProductId}>
            <TableCell>
              <FlexBox direction={FlexBoxDirection.Column}>
                <Text>{product.Name}</Text>
                <Label>{product.ProductId}</Label>
              </FlexBox>
            </TableCell>
            <TableCell>
              <Label>{product.SupplierName}</Label>
            </TableCell>
            <TableCell>
              <Label>
                {product.Width} x {product.Depth} x {product.Height} cm
              </Label>
            </TableCell>
            <TableCell>
              <Label>{product.Price} EUR</Label>
            </TableCell>
          </TableRow>
        );
      })}
    </Table>
  );
};
