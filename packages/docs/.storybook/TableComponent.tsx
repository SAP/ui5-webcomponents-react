import {
  ContentDensity,
  InfoLabel,
  Label,
  Table,
  TableCell,
  TableColumn,
  TableRow,
  Text,
  ThemeProvider,
  Themes
} from '@fiori-for-react/fiori3';
import React from 'react';

const columns = [
  <TableColumn key="name" header={<Label>Prop</Label>} width="150px" />,
  <TableColumn key="propType" header={<Label>PropType</Label>} width="150px" />,
  <TableColumn key="required" header={<Label>Required</Label>} width="80px" />,
  <TableColumn key="defaultValue" header={<Label>Default Value</Label>} width="100px" />,
  <TableColumn key="desc" header={<Label>Description</Label>} />
];

export const TableComponent = (props) => {
  const info = props.type.__docgenInfo;
  if (!info || !info.props) {
    return (
      <ThemeProvider theme={Themes.sap_fiori3_light} contentDensity={ContentDensity.Compact}>
        <Text>Unfortunately, there are no prop types available for this component.</Text>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={Themes.sap_fiori3_light} contentDensity={ContentDensity.Compact}>
      <Table
        columns={columns}
        rows={Object.values(info.props).map((componentInfo: any) => (
          <TableRow key={componentInfo.name}>
            <TableCell>
              <Text>{componentInfo.name}</Text>
            </TableCell>
            <TableCell>
              <Text>{componentInfo.type.name}</Text>
            </TableCell>
            <TableCell>{componentInfo.required && <InfoLabel flavour={8}>Yes</InfoLabel>}</TableCell>
            <TableCell>{componentInfo.defaultValue && <Text>{componentInfo.defaultValue.value}</Text>}</TableCell>
            <TableCell>
              <Text>{componentInfo.description}</Text>
            </TableCell>
          </TableRow>
        ))}
      />
    </ThemeProvider>
  );
};
