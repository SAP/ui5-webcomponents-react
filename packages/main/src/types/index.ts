import type { ReactElement, ReactNode, ReactPortal } from 'react';

type ReducedReactNode = Exclude<ReactNode, string | number | boolean | ReactPortal | Iterable<ReactNode>>;
export type UI5WCSlotsNode =
  | ReducedReactNode
  | Iterable<ReducedReactNode>
  | false
  | ReactElement /* necessary for React v16 & v17 ReactNode type*/;

export type Nullable<T> = T | null;
