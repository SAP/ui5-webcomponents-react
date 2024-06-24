import {
  FlexBox,
  FlexBoxDirection,
  Label,
  Table,
  TableCell,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
  Text
} from '@ui5/webcomponents-react';
import { ProductCollection } from './products.json';

export const ProductsTable = () => {
  return (
    <Table
      headerRow={
        <TableHeaderRow>
          <TableHeaderCell>Product</TableHeaderCell>
          <TableHeaderCell>Supplier</TableHeaderCell>
          <TableHeaderCell>Dimensions</TableHeaderCell>
          <TableHeaderCell>Price</TableHeaderCell>
        </TableHeaderRow>
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
