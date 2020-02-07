import { RefObject } from 'react';
import { ObjectWithVariableKeys } from './ObjectWithVariableKeys';

export interface ClassProps {
  classes?: ObjectWithVariableKeys;
  innerRef?: RefObject<any>;
}
