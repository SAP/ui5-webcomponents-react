import{j as e}from"./jsx-runtime-6b79a019.js";import{C as p,A as s}from"./DomRefTable.module-c9b9b0bd.js";import{D as d}from"./DocsHeader-09ea3454.js";import{F as h}from"./Footer-0461cc23.js";import"./index-ccf6a75d.js";import{D as c}from"./DomRefTable-86d19b7c.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as T,C as a,b as o}from"./chunk-PCJTTTQV-0d108e01.js";import{C as x,D as m,L as y,T as f,a as g}from"./Tree.stories-7b1193f3.js";import{u as l}from"./index-f2208173.js";import"./react-jss.esm-0528916b.js";import"./inheritsLoose-93e09647.js";import"./index-fb3ebbcd.js";import"./iframe-ffe6fb10.js";import"../sb-preview/runtime.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-03662f7f.js";import"./utils-f515de3e.js";import"./useIsomorphicLayoutEffect-0a189966.js";import"./slot-76e48863.js";import"./Icon-3498e12d.js";import"./Icons-234bf59e.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./information-2644a02f.js";import"./class-map-341004db.js";import"./Button-3da2aede.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-1a83921e.js";import"./index-d3b71bde.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-2d3c4974.js";import"./index-1fa7e88d.js";import"./Integer-f7f172c9.js";import"./index-2f920ae6.js";import"./Avatar-d7b74462.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-41a0cc63.js";import"./index-02688c28.js";import"./Link-6cd3dd1c.js";import"./WrappingType-b81e595a.js";import"./index-9da023d2.js";import"./TableOfContent-b1525b5d.js";import"./index-9cf46f6e.js";import"./Label-f867a533.js";import"./index-8d7a8128.js";import"./index-c30ee959.js";import"./index-916b9d9d.js";import"./Popover-1f09fd29.js";import"./PopupsCommon.css-fd974b5a.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-9183c00a.js";import"./BrowserScrollbar.css-bcc05298.js";import"./react-18-74db5ca2.js";import"./mapValues-4f30c9d2.js";import"./_baseForOwn-1047660d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-f4b610e7.js";import"./_baseUniq-a28bb1ec.js";import"./index-356e4a49.js";import"./general-leave-request-1fc311e1.js";import"./index-5cd211c7.js";import"./BusyIndicator-0bd7794e.js";import"./index-b825cc48.js";import"./Tree-8dd82a47.js";import"./ValueState-2c5e5904.js";import"./ListItem-57c44dac.js";import"./ListItemBase-f65eaa12.js";import"./ItemNavigation-a882fb90.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./RadioButton-3124fa96.js";import"./CheckBox-05a648ec.js";import"./accept-6c83709e.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-c0f59065.js";import"./navigation-right-arrow-a67142b4.js";import"./navigation-down-arrow-129d3555.js";import"./ValueState-ab6838cc.js";const S=`**Since:** 0.10.0

The \`TreeItem\` represents a node in a tree structure, shown as a \`List\`.  
This is the item to use inside a \`Tree\`. You can represent an arbitrary tree structure by recursively nesting tree items.

### CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`TreeItem\` exposes the following CSS Shadow Parts:

- title - Used to style the title of the tree list item
- additionalText - Used to style the additionalText of the tree list item
- icon - Used to style the icon of the tree list item
`,j=`**Since:** undefined

The \`TreeItemCustom\` represents a node in a tree structure, shown as a \`List\`.  
This is the item to use inside a \`Tree\`. You can represent an arbitrary tree structure by recursively nesting tree items. You can use this item to put any custom content inside the tree item.

### CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`TreeItemCustom\` exposes the following CSS Shadow Parts:

- title - Used to style the title of the tree list item
- additionalText - Used to style the additionalText of the tree list item
- icon - Used to style the icon of the tree list item
`,C=`## Usage

### When to use:

- To display hierarchically structured items.
- To select one or more items out of a set of hierarchically structured items.

### When not to use:

- To display items not hierarchically strcutured. In this case, use the List component.
- To select one item from a very small number of non-hierarchical items. Select or ComboBox might be more appropriate.
- The hierarchy turns out to have only two levels. In this case, use List with group items.

## Keyboard Handling

The \`Tree\` provides advanced keyboard handling. The user can use the following keyboard shortcuts in order to navigate trough the tree:

- \\[UP/DOWN\\] - Navigates up and down the tree items that are currently visible.
- \\[RIGHT\\] - Drills down the tree by expanding the tree nodes.
- \\[LEFT\\] - Goes up the tree and collapses the tree nodes.

The user can use the following keyboard shortcuts to perform selection, when the \`mode\` property is in use:

- \\[SPACE\\] - Selects the currently focused item upon keyup.
- \\[ENTER\\] - Selects the currently focused item upon keydown.
`,b=[{name:"walk",visibility:"public",parameters:[{name:"callback",type:"function",optional:!1,description:"function to execute on each node of the tree with 3 arguments: the node, the level and the index"}],description:"Perform Depth-First-Search walk on the tree and run a callback on each node"}];function rt(r={}){const{wrapper:n}=Object.assign({},l(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h2:"h2",h1:"h1",h3:"h3",pre:"pre",code:"code"},l(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(T,{of:x}),`
`,e.jsx(d,{since:"0.10.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:m}),`
`,e.jsx(o,{children:C}),`
`,e.jsx(c,{rows:b}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"lazy-load-treeitems",children:"Lazy Load TreeItems"}),`
`,e.jsx(a,{of:y}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const LazyLoadingTree = () => {
  const [lazyChildren, setLazyChildren] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleItemToggle = (e) => {
    if (e.detail.item.dataset.id === 'lazychildren' && !lazyChildren) {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setLazyChildren(
          <>
            <TreeItem text="Tree 3.1" />
            <TreeItem text="Tree 3.2" />
          </>
        );
        e.detail.item.toggle();
      }, 3000);
    }
  };
  return (
    <BusyIndicator active={loading} style={{ width: '100%' }}>
      <Tree onItemToggle={handleItemToggle}>
        <TreeItem text="Has pre-loaded children">
          <TreeItem text="Tree 1.1" />
          <TreeItem text="Tree 1.2" />
        </TreeItem>
        <TreeItem text="Has no children" />
        <TreeItem text="Has children but not yet loaded" hasChildren icon={dlCloutIcon} data-id="lazychildren">
          {lazyChildren}
        </TreeItem>
      </Tree>
    </BusyIndicator>
  );
};
`})}),`
`,e.jsx(o,{children:u}),`
`,e.jsx(t.h2,{id:"treeitem",children:"TreeItem"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(o,{children:S}),`
`,e.jsx(t.h2,{id:"treeitemcustom",children:"TreeItemCustom"}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(o,{children:j}),`
`,e.jsx(h,{})]})}}export{rt as default};
//# sourceMappingURL=Tree-891a1209.js.map
