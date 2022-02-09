import React, { FC, useCallback } from 'react';
import { Input } from '../../../../webComponents/Input';

export const DefaultFilterComponent: FC<any> = ({ column }) => {
  const handleChange = useCallback(
    (e) => {
      column.setFilter(e.target.value || undefined);
    },
    [column.setFilter]
  );
  return <Input onInput={handleChange} value={column.filterValue ?? ''} />;
};
