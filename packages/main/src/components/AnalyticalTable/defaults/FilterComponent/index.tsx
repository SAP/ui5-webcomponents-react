import { Input } from '@ui5/webcomponents-react/lib/Input';
import React, { FC, useCallback } from 'react';

export const DefaultFilterComponent: FC<any> = ({ column }) => {
  const handleChange = useCallback(
    (e) => {
      column.setFilter(e.target.value || undefined);
    },
    [column.setFilter]
  );
  return <Input onInput={handleChange} value={column.filterValue} />;
};
