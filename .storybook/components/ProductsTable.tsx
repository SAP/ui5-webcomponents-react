import { FlexBox } from '@ui5/webcomponents-react/dist/FlexBox';
import { FlexBoxDirection } from '@ui5/webcomponents-react/dist/FlexBoxDirection';
import { Table } from '@ui5/webcomponents-react/dist/Table';
import { Label } from '@ui5/webcomponents-react/dist/Label';
import { TableCell } from '@ui5/webcomponents-react/dist/TableCell';
import { TableColumn } from '@ui5/webcomponents-react/dist/TableColumn';
import { TableRow } from '@ui5/webcomponents-react/dist/TableRow';
import { Text } from '@ui5/webcomponents-react/dist/Text';
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
