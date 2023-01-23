import { ReactFragment, ReactNode, ReactPortal } from 'react';

type ReducedReactNode = Exclude<ReactNode, string | number | ReactPortal | ReactFragment>;
export type UI5WCSlotsNode = ReducedReactNode | Iterable<ReducedReactNode>;

export type Nullable<T> = T | null;
