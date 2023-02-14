import React from 'react';
import { ValueState } from '../../enums';
import { VariantManagement } from './index';
import { VariantItem } from './VariantItem';

//todo
export const VariantManagementWithCustomValidation = (props) => {
  return (
    <VariantManagement {...props}>
      <VariantItem
        saveViewInputProps={{
          valueState: ValueState.Error,
          valueStateMessage: <div>Custom Message</div>,
          onInput: console.log
        }}
      >
        Custom Manage Views Validation (Always Error)
      </VariantItem>
      <VariantItem selected>Selected</VariantItem>
    </VariantManagement>
  );
};
