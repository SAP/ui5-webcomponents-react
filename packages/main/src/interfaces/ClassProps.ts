import { ObjectWithVariableKeys } from './ObjectWithVariableKeys';
import { RefObject } from 'react';

export interface ClassProps {
  classes?: ObjectWithVariableKeys;
  innerRef?: RefObject<any>;
}
