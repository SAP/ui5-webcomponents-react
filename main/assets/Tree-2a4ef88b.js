import{j as e}from"./jsx-runtime-5926aa06.js";import{C as p,A as s}from"./DomRefTable.module-1b539386.js";import{D as d}from"./DocsHeader-a5d8fd1b.js";import{F as h}from"./Footer-cd999e94.js";import"./index-ebeaab24.js";import{D as c}from"./DomRefTable-2a6095d9.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as T,C as a,a as o}from"./chunk-PCJTTTQV-3ae44807.js";import{C as x,D as m,L as y,T as f,a as g}from"./Tree.stories-12f43906.js";import{u as l}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-d9639aa3.js";import"./iframe-62076298.js";import"../sb-preview/runtime.js";import"./UI5Element-d19f28b4.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-2e1c5474.js";import"./Icons-d3203353.js";import"./decline-e129c312.js";import"./i18n-defaults-80781f7e.js";import"./information-b0c94f16.js";import"./class-map-519e9c6d.js";import"./Button-b124cb06.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-c65c86f0.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./Import-7dbf9833.js";import"./TableOfContent-801ccff0.js";import"./index-1bdac791.js";import"./Link-9ab31ed2.js";import"./WrappingType-b81e595a.js";import"./index-a085d11d.js";import"./Label-855a552c.js";import"./index-9c09ad76.js";import"./index-828871d8.js";import"./Popover-fe68fced.js";import"./Integer-f7f172c9.js";import"./PopupUtils-565f6d6c.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-8109da93.js";import"./FocusableElements-59b9e9bf.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-388120e7.js";import"./ResizeHandler-d7af0733.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./general-leave-request-62414436.js";import"./index-93f0b09b.js";import"./BusyIndicator-71038705.js";import"./index-8e40db2c.js";import"./index-5ec1ccf8.js";import"./Tree-c7794c03.js";import"./ValueState-2c5e5904.js";import"./ListItem-fb1fa31a.js";import"./ListItemBase-94a42b35.js";import"./ItemNavigation-44b1fe71.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./RadioButton-710ba776.js";import"./CheckBox-95047ef2.js";import"./accept-6bd35a89.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-44a405c5.js";import"./navigation-right-arrow-419e1ef4.js";import"./navigation-down-arrow-6adb41b1.js";import"./ValueState-ab6838cc.js";const S=`**Since:** 0.10.0

The \`TreeItem\` represents a node in a tree structure, shown as a \`List\`.  
This is the item to use inside a \`Tree\`. You can represent an arbitrary tree structure by recursively nesting tree items.

### CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`TreeItem\` exposes the following CSS Shadow Parts:

- title - Used to style the title of the tree list item
- additionalText - Used to style the additionalText of the tree list item
- icon - Used to style the icon of the tree list item
`,j=`**Since:** 1.7.0

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
`,b=[{name:"walk",visibility:"public",parameters:[{name:"callback",type:"function",optional:!1,description:"function to execute on each node of the tree with 3 arguments: the node, the level and the index"}],description:"Perform Depth-First-Search walk on the tree and run a callback on each node"}];function et(r={}){const{wrapper:n}=Object.assign({},l(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h2:"h2",h1:"h1",h3:"h3",pre:"pre",code:"code"},l(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(T,{of:x}),`
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
`,e.jsx(h,{})]})}}export{et as default};
//# sourceMappingURL=Tree-2a4ef88b.js.map
