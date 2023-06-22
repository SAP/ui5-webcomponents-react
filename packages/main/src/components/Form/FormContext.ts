import { createContext, useContext } from 'react';
import type { FormContextType, GroupContextType } from './types.js';

export const FormContext = createContext<FormContextType>({ labelSpan: null });

export function useFormContext() {
  return useContext(FormContext);
}

//todo types
export const GroupContext = createContext<GroupContextType>({});

export function useFormGroupContext() {
  return useContext(GroupContext);
}
