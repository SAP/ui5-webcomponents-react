import { createContext, useContext } from 'react';
import { ObjectPageMode } from '../../enums/ObjectPageMode.js';
import type { ObjectPagePropTypes } from './types/index.js';

interface ObjectPageContextValue {
  mode: ObjectPagePropTypes['mode'];
  hasOnlySingleSection: boolean;
}

export const ObjectPageContext = createContext<ObjectPageContextValue>({
  mode: ObjectPageMode.Default,
  hasOnlySingleSection: false,
});

export const useObjectPageContext = () => useContext(ObjectPageContext);
