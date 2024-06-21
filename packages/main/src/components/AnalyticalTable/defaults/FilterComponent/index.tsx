import type { FC } from 'react';
import { useCallback } from 'react';
import { stopPropagation } from '../../../../internal/stopPropagation.js';
import { Input } from '../../../../webComponents/Input/index.js';

export const DefaultFilterComponent: FC<any> = ({ column }) => {
  const handleChange = useCallback(
    (e) => {
      column.setFilter(e.target.value || undefined);
    },
    [column.setFilter]
  );
  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') {
      stopPropagation(e);
    }
  };
  // todo remove "undefined" check if wc issue has been fixed (https://github.com/SAP/ui5-webcomponents/issues/2616)
  return <Input onInput={handleChange} value={column.filterValue ?? ''} showClearIcon onKeyDown={handleKeyDown} />;
};
