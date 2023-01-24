import { ReactFragment, ReactNode, ReactPortal } from 'react';

type ReducedReactNode = Exclude<ReactNode, string | number | boolean | ReactPortal | ReactFragment>;
export type UI5WCSlotsNode = ReducedReactNode | Iterable<ReducedReactNode> | false;

export type Nullable<T> = T | null;
