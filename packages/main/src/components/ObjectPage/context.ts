import { createContext, useContext } from 'react';
import { ObjectPageMode } from '../../enums/ObjectPageMode.js';
import type { ObjectPagePropTypes } from './types/index.js';

export const ObjectPageContext = createContext<ObjectPagePropTypes['mode']>(ObjectPageMode.Default);

export const useObjectPageContext = () => useContext(ObjectPageContext);
