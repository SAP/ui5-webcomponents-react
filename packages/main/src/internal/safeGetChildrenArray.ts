import React, { ReactNode } from 'react';

export const safeGetChildrenArray = <T = Exclude<ReactNode, boolean | null | undefined>>(children: unknown): T[] => {
  const childArray = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      childArray.push(child);
    }
  });

  return childArray as T[];
};
