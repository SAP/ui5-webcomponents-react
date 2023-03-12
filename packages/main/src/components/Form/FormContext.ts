import { createContext, useContext } from 'react';

export const FormContext = createContext({ labelSpan: null });

export function useFormContext() {
  return useContext(FormContext);
}
