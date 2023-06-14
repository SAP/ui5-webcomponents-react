import { Label, Table, TableCell, TableColumn, TableRow } from '@ui5/webcomponents-react';
import './TableShadowRootExampleStyles.css';

export const TableShadowRootExample = () => {
  return (
    <Table
      columns={
        <>
          <TableColumn className="thGreen">
            <Label>Product</Label>
          </TableColumn>
          <TableColumn>
            <Label>Price</Label>
          </TableColumn>
        </>
      }
    >
      <TableRow className="trBlue">
        <TableCell>
          <Label>Notebook Basic</Label>
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
          <Label>1249EUR</Label>
        </TableCell>
      </TableRow>
    </Table>
  );
};
