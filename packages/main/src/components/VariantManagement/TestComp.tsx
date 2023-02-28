import React, { useEffect, useState } from 'react';
import { ThemeProvider, VariantManagement, VariantItem, Button } from '../..';

export default function App() {
  const originalList = [
    { children: 'Variant 1' },
    { children: 'Selected', selected: true, isDefault: true, global: true }
  ];
  const newList = [
    { children: 'Variant 1' },
    { children: 'Selected_test', selected: true, isDefault: true, global: true }
  ];
  const [rerender, setRerender] = useState(false);
  const [variants, setVariants] = useState([
    { children: 'Variant 1' },
    { children: 'Selected', selected: true, isDefault: true, global: true }
  ]);

  useEffect(() => {
    if (rerender) {
      setRerender(false);
    }
  }, [rerender]);

  const handleSaveManageViews = (e) => {
    // this codeSandbox rerenders all variants on each save, you can of course adjust this in your application depending on your use-case
    // if you only want to update a specific variant you can for example leverage `e.detail.updatedVariants.prevVariant`
    setVariants(
      e.detail.variants.map((item) => {
        const { variantItem: _omit, ...rest } = item;
        return rest;
      })
    );
    setVariants(originalList);
    setTimeout(() => {
      setVariants(newList);
    }, 2000);
  };

  return (
    <ThemeProvider>
      <Button
        onClick={() => {
          setVariants(newList);
        }}
      >
        Update
      </Button>
      <Button
        onClick={() => {
          setRerender(true);
        }}
      >
        rerender
      </Button>
      {!rerender && (
        <VariantManagement onSaveManageViews={handleSaveManageViews}>
          {variants.map((variant) => (
            <VariantItem {...variant} key={variant.children} />
          ))}
        </VariantManagement>
      )}
    </ThemeProvider>
  );
}
