import { Children, ReactNode } from 'react';

export const safeGetChildrenArray = <T = Exclude<ReactNode, boolean | null | undefined>>(children: unknown): T[] =>
  Children.toArray(children).filter(Boolean) as T[];
