import { Input } from '@ui5/webcomponents-react/lib/Input';
import React, { FC, useCallback } from 'react';

export /**
 * <code>import { DefaultFilterComponent } from '@ui5/webcomponents-react/lib/DefaultFilterComponent';</code>
 */
const DefaultFilterComponent: FC<any> = ({ column }) => {
  const handleChange = useCallback(
    (e) => {
      column.setFilter(e.getParameter('value'));
    },
    [column.setFilter]
  );
  return <Input onInput={handleChange}>{column.filterValue}</Input>;
};
