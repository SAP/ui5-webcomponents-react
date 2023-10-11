import Laptop1 from '@sb/demoImages/Laptop1.jpg';
import Laptop2 from '@sb/demoImages/Laptop2.jpg';
import Pc1 from '@sb/demoImages/PC1.jpg';
import Pc2 from '@sb/demoImages/PC2.jpg';
import { isChromatic } from '@sb/utils';
import type { Meta, StoryObj } from '@storybook/react';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { DialogDomRef } from '../..';
import { Button, FlexBox, Label, ListMode, StandardListItem, Text } from '../..';
import type { SelectDialogPropTypes } from './index.js';
import { SelectDialog as OriginalSelectDialog } from './index.js';

const meta = {
  title: 'Modals & Popovers / SelectDialog',
  component: OriginalSelectDialog,
  argTypes: { children: { control: { disable: true } } },
  args: { headerText: 'Select Product' },
  parameters: {
    chromatic: { delay: 1000 }
  }
} satisfies Meta<typeof OriginalSelectDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// todo remove once portals are supported inline, or general popovers are supported w/o having to mount them to the body
const SelectDialog = forwardRef<DialogDomRef, SelectDialogPropTypes>((args, ref) =>
  createPortal(<OriginalSelectDialog {...args} ref={ref} />, document.body)
);
SelectDialog.displayName = 'SelectDialog';

const listItems = [
  { img: Laptop1, description: 'LT-10', text: 'Gaming Laptop' },
  { img: Laptop2, description: 'LT-20', text: 'Business Laptop' },
  { img: Pc2, description: 'HT-10', text: 'Gaming PC' },
  { img: Pc1, description: 'HT-20', text: 'Business PC' }
];
export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState<boolean | undefined>(isChromatic || args.open);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = (e) => {
      setOpen(false);
      args.onAfterClose(e);
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button onClick={onButtonClick}>Open SelectDialog</Button>
        <SelectDialog {...args} open={open} onAfterClose={handleClose}>
          {new Array(40).fill('').map((_, index) => {
            const currentProduct = listItems[index % 4];
            return (
              <StandardListItem
                image={currentProduct.img}
                description={`${currentProduct.description}${index}`}
                key={`${currentProduct.text}${index}`}
              >
                {currentProduct.text}
              </StandardListItem>
            );
          })}
        </SelectDialog>
      </>
    );
  }
};

export const MultiSelect: Story = {
  render: () => {
    const dialogRef = useRef(null);
    // predefined selection
    const selectedProducts = { 'HT-102': true, 'HT-203': true, 'HT-1038': true };
    // number of selected items
    const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(selectedProducts);
    const [searchVal, setSearchVal] = useState();
    const [products, setProducts] = useState(Object.keys(selectedProducts));

    const onButtonClick = () => {
      dialogRef.current.show();
    };

    // search
    const handleSearch = (e) => {
      setSearchVal(e.detail.value);
    };
    const handleSearchReset = () => {
      setSearchVal(undefined);
    };
    const handleItemClick = (e) => {
      const itemDescription = e.detail.item.dataset.description;
      setSelectedItems((prev) => {
        if (prev[itemDescription]) {
          const { [itemDescription]: _omit, ...rest } = prev;
          return rest;
        } else {
          return { ...prev, [itemDescription]: true };
        }
      });
    };
    // clear selection
    const handleClear = () => {
      setSelectedItems({});
    };
    // confirm selection
    const handleConfirm = () => {
      setProducts(Object.keys(selectedItems));
    };

    return (
      <>
        <Button onClick={onButtonClick}>Open Dialog</Button>
        <SelectDialog
          mode={ListMode.MultiSelect}
          ref={dialogRef}
          onSearchInput={handleSearch}
          onSearch={handleSearch}
          onSearchReset={handleSearchReset}
          numberOfSelectedItems={Object.keys(selectedItems).length}
          listProps={{ onItemClick: handleItemClick }}
          showClearButton
          rememberSelections
          onClear={handleClear}
          onConfirm={handleConfirm}
        >
          {new Array(40)
            .fill('')
            .map((_, index) => {
              const currentProduct = listItems[index % 4];
              const description = `${currentProduct.description}${index}`;
              const lowerCaseSearchVal = searchVal?.toLowerCase();
              if (
                searchVal &&
                !description.toLowerCase().includes(lowerCaseSearchVal) &&
                !currentProduct.text.toLowerCase().includes(lowerCaseSearchVal)
              ) {
                return null;
              }
              return (
                <StandardListItem
                  image={currentProduct.img}
                  description={`${currentProduct.description}${index}`}
                  data-description={`${currentProduct.description}${index}`}
                  key={`${currentProduct.text}${index}`}
                  selected={selectedItems[description]}
                >
                  {currentProduct.text}
                </StandardListItem>
              );
            })
            .filter(Boolean)}
        </SelectDialog>
        <FlexBox>
          <Label>Selected: </Label>
          <Text>{products.join(', ')}</Text>
        </FlexBox>
      </>
    );
  }
};
