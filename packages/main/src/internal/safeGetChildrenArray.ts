import type { ReactNode } from 'react';
import { Children, isValidElement } from 'react';

export const safeGetChildrenArray = <T = Exclude<ReactNode, boolean | null | undefined>>(children: unknown): T[] => {
  const childArray = [];

  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      childArray.push(child);
    }
  });

  return childArray as T[];
};
