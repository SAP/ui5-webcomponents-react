import type { ReactElement, ReactNode, ReactPortal } from 'react';

export type ReducedReactNode = Exclude<ReactNode, string | number | boolean | ReactPortal | Iterable<ReactNode>>;

type InternalUI5WCSlotsNode =
  | ReducedReactNode
  | Iterable<ReducedReactNode>
  | false
  | ReactElement /* necessary for React v16 & v17 ReactNode type*/;

export type UI5WCSlotsNode = InternalUI5WCSlotsNode | InternalUI5WCSlotsNode[];

export type Nullable<T> = T | null;

export type { CommonProps } from './CommonProps.js';
export type { Ui5CustomEvent } from './Ui5CustomEvent.js';
export type { Ui5DomRef } from './Ui5DomRef.js';
