import React from 'react';
import { PopoverPlacementType } from '@ui5/webcomponents-react/dist/PopoverPlacementType';
import { TitleLevel } from '@ui5/webcomponents-react/dist/TitleLevel';
import { Input } from '@ui5/webcomponents-react/dist/Input';
import { VariantManagement } from '@ui5/webcomponents-react/dist/VariantManagement';
import { VariantItem } from './VariantItem';
import { useReducer, useState } from 'react';
//todo delete
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
        onSaveAs={(e) => {
          console.log(e.detail);
        }}
        onSelect={(e) => {
          console.log(e.detail.selectedVariant);
        }}
        onSaveManageViews={(e) => {
          console.log(e.detail);
        }}
      >
        <VariantItem selected hideDelete>
          Selected
        </VariantItem>
        <VariantItem isDefault author="Guybrush Threepwood">
          Default w/ author
        </VariantItem>
        <VariantItem favorite>Favorite</VariantItem>
        <VariantItem favorite isDefault>
          Favorite & Default
        </VariantItem>
        <VariantItem favorite isDefault labelReadOnly>
          Favorite & Default & labelReadOnly
        </VariantItem>
        <VariantItem applyAutomatically>Apply Automatically</VariantItem>
        <VariantItem readOnly>Read Only</VariantItem>
        <VariantItem global>Global</VariantItem>
        <VariantItem global readOnly>
          Global & ReadOnly
        </VariantItem>
        <VariantItem applyAutomatically global readOnly favorite isDefault labelReadOnly author="LeChuck">
          Everything
        </VariantItem>
        <VariantItem global>Not deletable - global</VariantItem>
        <VariantItem hideDelete>Not deletable - hideDelete</VariantItem>
        <VariantItem hideDelete global={false}>
          Not deletable - global false
        </VariantItem>
        <VariantItem hideDelete={false} global>
          Deletable - global true, delete false
        </VariantItem>
        {/*{typeof numberOfVariants === 'number' &&*/}
        {/*  new Array(numberOfVariants)*/}
        {/*    .fill('')*/}
        {/*    .map((item, index) => <VariantItem author="Guybrush Threepwood">{`Variant ${index + 2}`}</VariantItem>)}*/}
      </VariantManagement>
    </>
  );
};
