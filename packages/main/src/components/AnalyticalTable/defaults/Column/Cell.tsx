import { Text } from '@ui5/webcomponents-react/lib/Text';
import React from 'react';

export const Cell = ({ cell: { value = '', isGrouped }, row }) => {
  let cellContent = `${value ?? ''}`;
  if (isGrouped) {
    cellContent += ` (${row.subRows.length})`;
  }
  return (
    <Text wrapping={false} tooltip={cellContent}>
      {cellContent}
    </Text>
  );
};
