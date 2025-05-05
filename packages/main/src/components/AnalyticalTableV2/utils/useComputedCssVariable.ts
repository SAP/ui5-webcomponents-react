import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

export function useComputedCssVariable<T extends HTMLElement>(ref: RefObject<T>, variableName: string): number | null {
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    if (ref.current) {
      const computedStyles = getComputedStyle(ref.current);
      const variableValue = computedStyles.getPropertyValue(variableName).trim();

      // Attempt to parse the value as a number
      const parsedValue = parseFloat(variableValue);
      setValue(isNaN(parsedValue) ? null : parsedValue);
    }
  }, [variableName, ref]);

  return value;
}
