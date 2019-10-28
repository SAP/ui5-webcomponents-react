import { Input } from '@ui5/webcomponents-react/lib/Input';
import React, { useCallback } from 'react';

export const DefaultFilterComponent = ({ column }) => {
  const handleChange = useCallback(
    (e) => {
      column.setFilter(e.getParameter('value'));
    },
    [column.setFilter]
  );
  return <Input onInput={handleChange}>{column.filterValue}</Input>;
};
