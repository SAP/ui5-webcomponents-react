import { useCallback } from 'react';
import { stopPropagation } from '../../../../internal/stopPropagation.js';
import type { InputPropTypes } from '../../../../webComponents/Input/index.js';
import { Input } from '../../../../webComponents/Input/index.js';
import type { FilterProps } from '../../types/index.js';

export const DefaultFilterComponent = ({ column }: FilterProps) => {
  const handleInput: InputPropTypes['onInput'] = useCallback(
    (e) => {
      // Setting the filter to `undefined` removes it
      column.setFilter(e.target.value || undefined);
    },
    [column.setFilter]
  );

  const handleKeyDown: InputPropTypes['onKeyDown'] = (e) => {
    if (e.key !== 'Enter') {
      stopPropagation(e);
    }
  };

  return <Input onInput={handleInput} value={column.filterValue ?? ''} showClearIcon onKeyDown={handleKeyDown} />;
};

DefaultFilterComponent.displayName = 'DefaultFilterComponent';
