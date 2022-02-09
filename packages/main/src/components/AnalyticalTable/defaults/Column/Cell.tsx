import React from 'react';
import { Text } from '../../../Text';

export const Cell = ({ cell: { value = '', isGrouped }, row }) => {
  let cellContent = `${value ?? ''}`;
  if (isGrouped) {
    cellContent += ` (${row.subRows.length})`;
  }
  return (
    <Text wrapping={false} title={cellContent}>
      {cellContent}
    </Text>
  );
};
