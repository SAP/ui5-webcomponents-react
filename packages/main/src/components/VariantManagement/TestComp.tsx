import React from 'react';
import { PopoverPlacementType } from '@ui5/webcomponents-react/dist/PopoverPlacementType';
import { TitleLevel } from '@ui5/webcomponents-react/dist/TitleLevel';
import { Input } from '@ui5/webcomponents-react/dist/Input';
import { VariantManagement } from '@ui5/webcomponents-react/dist/VariantManagement';
import { VariantItem } from './VariantItem';
import { useReducer, useState } from 'react';

export const TestComp = (props) => {
  const [numberOfVariants, setNumberOfVariants] = useState(5);
  return (
    <>
      <Input
        type="Number"
        value={`${numberOfVariants}`}
        onInput={(e) => {
          setNumberOfVariants(parseInt(e.target.value));
        }}
      />
      <VariantManagement
        {...props}
        dirtyState
        onSaveAs={(e) => {
          console.log(e.detail);
        }}
        onSelect={(e) => {
          console.log(e.detail.selectedVariant);
        }}
        onSaveManageViews={(e) => {
          console.log(e.detail);
        }}
        showCancelButton
      >
        <VariantItem labelReadOnly favorite={true} selected>
          Variant 1
        </VariantItem>
        {typeof numberOfVariants === 'number' &&
          new Array(numberOfVariants).fill('').map((item, index) => (
            <VariantItem isDefault author="Guybrush Threepwood">
              {`Variant ${index + 2}`}
            </VariantItem>
          ))}
      </VariantManagement>
    </>
  );
};
