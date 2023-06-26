import{j as e}from"./jsx-runtime-5926aa06.js";import{C as p,A as s}from"./DomRefTable.module-f9fa5af6.js";import{D as d}from"./DocsHeader-0c47c3d1.js";import{F as h}from"./Footer-87804c68.js";import"./index-ebeaab24.js";import{D as c}from"./DomRefTable-a4c05d35.js";import{S as u}from"./SubcomponentsSection-6138f2fc.js";import{M as T,C as a,a as o}from"./chunk-PCJTTTQV-b332e0bb.js";import{C as x,D as m,L as y,T as f,a as g}from"./Tree.stories-0eb37c2c.js";import{u as l}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-2692ea53.js";import"./iframe-8001a06d.js";import"../sb-preview/runtime.js";import"./UI5Element-978c7ec7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-87626f33.js";import"./Icons-24533df9.js";import"./decline-2dc3f691.js";import"./i18n-defaults-80781f7e.js";import"./information-573ff8e0.js";import"./class-map-6a9bd920.js";import"./Button-c3cdbc47.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-ac1c9dde.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-0421cb7d.js";import"./index-42008e49.js";import"./Integer-f7f172c9.js";import"./index-fbb3efce.js";import"./Avatar-02045306.js";import"./ResizeHandler-d96d99c4.js";import"./employee-397ee2c5.js";import"./index-ca06b9a5.js";import"./index-eca7ea3e.js";import"./Link-a59da54b.js";import"./WrappingType-b81e595a.js";import"./index-b9e92427.js";import"./TableOfContent-e34a6ba5.js";import"./index-1632e114.js";import"./Label-3a4ee32a.js";import"./index-9c09ad76.js";import"./index-d4639950.js";import"./index-508f3274.js";import"./Popover-24cfcc49.js";import"./PopupUtils-7b496d9b.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-aca8c783.js";import"./FocusableElements-ba36fca8.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./general-leave-request-00b884d7.js";import"./index-2e48aa50.js";import"./BusyIndicator-34850997.js";import"./index-066d1162.js";import"./Tree-d943f8b6.js";import"./ValueState-2c5e5904.js";import"./ListItem-3c6228ec.js";import"./ListItemBase-81a01599.js";import"./ItemNavigation-e6c8f7b0.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./RadioButton-3919451e.js";import"./CheckBox-81e7fb8c.js";import"./accept-23bea3d0.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-ac42c02c.js";import"./navigation-right-arrow-e72f22fc.js";import"./navigation-down-arrow-823ed876.js";import"./ValueState-ab6838cc.js";const S=`**Since:** 0.10.0

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
`,b=[{name:"walk",visibility:"public",parameters:[{name:"callback",type:"function",optional:!1,description:"function to execute on each node of the tree with 3 arguments: the node, the level and the index"}],description:"Perform Depth-First-Search walk on the tree and run a callback on each node"}];function nt(r={}){const{wrapper:n}=Object.assign({},l(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(i,{})})):i();function i(){const t=Object.assign({h2:"h2",h1:"h1",h3:"h3",pre:"pre",code:"code"},l(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(T,{of:x}),`
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
`,e.jsx(h,{})]})}}export{nt as default};
//# sourceMappingURL=Tree-6b551e81.js.map
