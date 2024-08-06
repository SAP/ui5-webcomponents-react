import Laptop1 from '@sb/demoImages/Laptop1.jpg';
import Laptop2 from '@sb/demoImages/Laptop2.jpg';
import Pc1 from '@sb/demoImages/PC1.jpg';
import Pc2 from '@sb/demoImages/PC2.jpg';
import { isChromatic } from '@sb/utils.js';
import type { Meta, StoryObj } from '@storybook/react';
import ListSelectionMode from '@ui5/webcomponents/dist/types/ListSelectionMode.js';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../../webComponents/Button/index.js';
import { Label } from '../../webComponents/Label/index.js';
import { ListItemStandard } from '../../webComponents/ListItemStandard/index.js';
import { Text } from '../../webComponents/Text/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { SelectDialog } from './index.js';

const meta = {
  title: 'Modals & Popovers / SelectDialog',
  component: SelectDialog,
  argTypes: { children: { control: { disable: true } } },
  args: { headerText: 'Select Product', open: isChromatic },
  parameters: {
    chromatic: { delay: 1000 }
  },
  tags: ['package:@ui5/webcomponents', 'cem-module:Dialog']
} satisfies Meta<typeof SelectDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const listItems = [
  { img: Laptop1, description: 'LT-10', text: 'Gaming Laptop' },
  { img: Laptop2, description: 'LT-20', text: 'Business Laptop' },
  { img: Pc2, description: 'HT-10', text: 'Gaming PC' },
  { img: Pc1, description: 'HT-20', text: 'Business PC' }
];
export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState<boolean | undefined>(args.open);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = (e) => {
      setOpen(false);
      args.onClose(e);
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button onClick={onButtonClick}>Open SelectDialog</Button>
        <SelectDialog {...args} open={open} onClose={handleClose}>
          {new Array(40).fill('').map((_, index) => {
            const currentProduct = listItems[index % 4];
            return (
              <ListItemStandard
                selected={index === 1}
                image={currentProduct.img}
                description={`${currentProduct.description}${index}`}
                key={`${currentProduct.text}${index}`}
              >
                {currentProduct.text}
              </ListItemStandard>
            );
          })}
        </SelectDialog>
      </>
    );
  }
};

export const MultiSelect: Story = {
  render: () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    // predefined selection
    const selectedProducts = { 'HT-102': true, 'HT-203': true, 'HT-1038': true };
    // number of selected items
    const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(selectedProducts);
    const selectedItemsBeforeOpen = useRef(selectedItems);
    const [searchVal, setSearchVal] = useState<string | undefined>();
    const [products, setProducts] = useState(Object.keys(selectedProducts));

    const handleBeforeOpen = () => {
      selectedItemsBeforeOpen.current = selectedItems;
    };
    const handleOpen = () => {
      setDialogOpen(true);
    };
    const handleClose = () => {
      setDialogOpen(false);
    };
    // search
    const handleSearch = (e) => {
      setSearchVal(e.detail.value);
    };
    // reset input value of search field
    const handleSearchReset = () => {
      setSearchVal(undefined);
    };
    // select/unselect
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
    // cancel selection
    const handleCancel = () => {
      setSelectedItems(selectedItemsBeforeOpen.current);
    };

    return (
      <>
        <Button onClick={handleOpen}>Open Dialog</Button>
        <SelectDialog
          open={dialogOpen}
          selectionMode={ListSelectionMode.Multiple}
          numberOfSelectedItems={Object.keys(selectedItems).length}
          listProps={{ onItemClick: handleItemClick }}
          showClearButton
          rememberSelections
          onClear={handleClear}
          onConfirm={handleConfirm}
          onClose={handleClose}
          onSearchInput={handleSearch}
          onSearch={handleSearch}
          onSearchReset={handleSearchReset}
          onBeforeOpen={handleBeforeOpen}
          onCancel={handleCancel}
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
                <ListItemStandard
                  image={currentProduct.img}
                  description={`${currentProduct.description}${index}`}
                  data-description={`${currentProduct.description}${index}`}
                  key={`${currentProduct.text}${index}`}
                  selected={selectedItems[description]}
                >
                  {currentProduct.text}
                </ListItemStandard>
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
