import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./MessageStrip-CXt7wSS7.js";import{i,r as a}from"./react-BOKIvUzN.js";import{_ as o,d as s,r as c}from"./blocks-Dgkncsvx.js";import{b as l,f as u,t as d,u as f}from"./components-CyHFkytd.js";import{a as p,i as m,n as h,r as g,t as _}from"./SelectDialog.stories-C_go3RgH.js";function v(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...i(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s,{of:m}),`
`,(0,b.jsx)(u,{of:m}),`
`,(0,b.jsx)(`br`,{}),`
`,(0,b.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,b.jsx)(c,{of:_}),`
`,(0,b.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,b.jsx)(l,{of:_}),`
`,(0,b.jsx)(t.h2,{id:`opening-selectdialogs`,children:`Opening SelectDialogs`}),`
`,(0,b.jsxs)(t.p,{children:[`You can open and close the `,(0,b.jsx)(t.code,{children:`SelectDialog`}),` component in a declarative way using the `,(0,b.jsx)(t.code,{children:`open`}),` and `,(0,b.jsx)(t.code,{children:`opener`}),` prop.`]}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-jsx`,children:`const MyComponentWithSelectDialog = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setDialogIsOpen(true);
        }}
      >
        Open SelectDialog
      </Button>
      <SelectDialog open={dialogIsOpen} headerText="Select Product">
        <ListItemStandard image="pathToImg" description="description" text="Product" />
      </SelectDialog>
    </>
  );
};
`})}),`
`,(0,b.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,b.jsx)(t.h3,{id:`selectdialog-in-multiselect-mode-with-search`,children:`SelectDialog in MultiSelect mode with search`}),`
`,(0,b.jsx)(r,{hideCloseButton:!0,children:(0,b.jsxs)(b.Fragment,{children:[`This example remembers its selection by setting `,(0,b.jsx)(t.code,{children:`rememberSelections`}),` to `,(0,b.jsx)(t.code,{children:`true`}),`.`]})}),`
`,(0,b.jsx)(c,{of:h,sourceState:`none`}),`
`,(0,b.jsxs)(`details`,{children:[(0,b.jsx)(`summary`,{children:`Show Code`}),(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`const MultiSelectDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  // predefined selection
  const selectedProducts = { 'HT-102': true, 'HT-203': true, 'HT-1038': true };
  // number of selected items
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(selectedProducts);
  const selectedItemsBeforeOpen = useRef(selectedItems);
  const [searchVal, setSearchVal] = useState();
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
    const itemDescription = e.detail.targetItem.dataset.description;
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
        mode={ListSelectionMode.Multiple}
        numberOfSelectedItems={Object.keys(selectedItems).length}
        listProps={{ onSelectionChange: handleItemClick }}
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
            const description = \`\${currentProduct.description}\${index}\`;
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
                description={\`\${currentProduct.description}\${index}\`}
                data-description={\`\${currentProduct.description}\${index}\`}
                key={\`\${currentProduct.text}\${index}\`}
                selected={selectedItems[description]}
                text={currentProduct.text}
              />
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
};
`})})]}),`
`,(0,b.jsx)(`br`,{}),`
`,(0,b.jsx)(`br`,{}),`
`,(0,b.jsx)(t.h3,{id:`announcing-search-result-count`,children:`Announcing search result count`}),`
`,(0,b.jsxs)(t.p,{children:[`A common a11y requirement is to announce the number of matches when the user filters the list (e.g. `,(0,b.jsx)(t.em,{children:`"5 results available"`}),`, `,(0,b.jsx)(t.em,{children:`"No results found"`}),`). The result count and the timing of the announcement (on every keystroke vs. on commit, debouncing) depend on your data and UX, so this is wired up in application code rather than by the component.`]}),`
`,(0,b.jsxs)(t.p,{children:[`Use the framework's `,(0,b.jsx)(t.a,{href:`https://ui5.github.io/webcomponents/docs/advanced/accessibility/#invisible-messaging`,rel:`nofollow`,children:`Invisible Messaging`}),` — call `,(0,b.jsx)(t.code,{children:`announce(...)`}),` from your search handler to announce the result count politely.`]}),`
`,(0,b.jsx)(c,{of:g,sourceState:`none`}),`
`,(0,b.jsxs)(`details`,{children:[(0,b.jsx)(`summary`,{children:`Show Code`}),(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import announce from '@ui5/webcomponents-base/dist/util/InvisibleMessage.js';
import InvisibleMessageMode from '@ui5/webcomponents-base/dist/types/InvisibleMessageMode.js';

const items = Array.from({ length: 40 }, (_unused, index) => ({
  id: \`P-\${index.toString().padStart(3, '0')}\`,
  text: ['Gaming Laptop', 'Business Laptop', 'Gaming PC', 'Business PC'][index % 4],
}));

const SearchAnnouncementDialog = () => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const filteredItems = useMemo(() => {
    const query = searchValue.trim().toLowerCase();
    if (!query) {
      return items;
    }
    return items.filter((item) => item.id.toLowerCase().includes(query) || item.text.toLowerCase().includes(query));
  }, [searchValue]);

  const announceCount = (count: number) => {
    announce(count === 0 ? 'No results found' : \`\${count} results available\`, InvisibleMessageMode.Polite);
  };

  const handleSearch: SelectDialogPropTypes['onSearch'] = (event) => {
    setSearchValue(event.detail.value);
    announceCount(filteredItems.length);
  };

  const handleSearchReset = () => {
    setSearchValue('');
    announceCount(items.length);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open SelectDialog</Button>
      <SelectDialog
        headerText="Select Product"
        open={open}
        onClose={() => setOpen(false)}
        onSearch={handleSearch}
        onSearchReset={handleSearchReset}
      >
        {filteredItems.map((item) => (
          <ListItemStandard key={item.id} description={item.id} text={item.text} />
        ))}
      </SelectDialog>
    </>
  );
};
`})})]}),`
`,(0,b.jsx)(`br`,{}),`
`,(0,b.jsx)(`br`,{}),`
`,(0,b.jsx)(f,{})]})}function y(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=t(),a(),d(),o(),n(),p()})))()}x();export{y as default};