import { ReactNode, ReactPortal } from 'react';

export type UI5WCSlotsNode = Exclude<ReactNode, string | number | ReactPortal>;

export type Nullable<T> = T | null;
