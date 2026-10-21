import { useRef, useState } from 'react';
import type { InputDomRef } from '../../../webComponents/Input/index.js';
import { Input } from '../../../webComponents/Input/index.js';
import { FilterBar } from '../../FilterBar/index.js';
import { FilterGroupItem } from '../../FilterGroupItem/index.js';
import { FilterBarSearchIcon } from '../index.js';

export const FilterBarSearchIconTestComp = () => {
  const inputRef = useRef<InputDomRef>(null);
  const [clickCount, setClickCount] = useState(0);
  const [submittedTerm, setSubmittedTerm] = useState('');
  // pre-controlled: the consumer decides what "trigger search" means
  const triggerSearch = () => {
    setClickCount((prev) => prev + 1);
    setSubmittedTerm(inputRef.current?.value ?? '');
  };
  return (
    <>
      <FilterBar showGoOnFB search={<Input ref={inputRef} icon={<FilterBarSearchIcon onClick={triggerSearch} />} />}>
        <FilterGroupItem filterKey="input" label="Input">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
      </FilterBar>
      <span data-testid="search-click-count">{clickCount}</span>
      <span data-testid="submitted-term">{submittedTerm}</span>
    </>
  );
};
