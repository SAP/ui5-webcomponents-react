import{j as e,a as p,F as d}from"./jsx-runtime-670450c2.js";import{C as h,A as s}from"./DomRefTable.module-0e24f9a7.js";import{D as c}from"./DocsHeader-c2605bc0.js";import{F as u}from"./Footer-d1a79ade.js";import"./index-f1f749bf.js";import{D as T}from"./DomRefTable-d5f33369.js";import{S as y}from"./SubcomponentsSection-6138f2fc.js";import{M as f,C as a,a as o}from"./chunk-PCJTTTQV-7b7adb6e.js";import{C as g,D as m,L as S,T as C,a as b}from"./Tree.stories-9fe971ef.js";import{u as l}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-a066d069.js";import"./iframe-f1bb0d46.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-6d48ebd3.js";import"./Button-fa05cadd.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-4ed9abe0.js";import"./TableOfContent-a00a5a7f.js";import"./index-d788d3c0.js";import"./Link-3b8926df.js";import"./WrappingType-b81e595a.js";import"./index-e4a4649e.js";import"./Label-528b8168.js";import"./index-96c5f47c.js";import"./index-f0fd9c5f.js";import"./Popover-824d4d7c.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./general-leave-request-eb2be0aa.js";import"./index-8b9c33c7.js";import"./BusyIndicator-c375cd19.js";import"./index-084aaab5.js";import"./index-396a46aa.js";import"./Tree-6441e8ec.js";import"./ValueState-2c5e5904.js";import"./ListItem-843af2c9.js";import"./ListItemBase-780d7053.js";import"./ItemNavigation-01761450.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./RadioButton-412fbbc0.js";import"./CheckBox-f0072def.js";import"./accept-9744f30a.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-78d167a6.js";import"./navigation-right-arrow-9b522e4c.js";import"./navigation-down-arrow-a69745d2.js";import"./ValueState-ab6838cc.js";const w=`**Since:** 0.10.0

The \`TreeItem\` represents a node in a tree structure, shown as a \`List\`.  
This is the item to use inside a \`Tree\`. You can represent an arbitrary tree structure by recursively nesting tree items.

### CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`TreeItem\` exposes the following CSS Shadow Parts:

- title - Used to style the title of the tree list item
- additionalText - Used to style the additionalText of the tree list item
- icon - Used to style the icon of the tree list item
`,I=`**Since:** 1.7.0

The \`TreeItemCustom\` represents a node in a tree structure, shown as a \`List\`.  
This is the item to use inside a \`Tree\`. You can represent an arbitrary tree structure by recursively nesting tree items. You can use this item to put any custom content inside the tree item.

### CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`TreeItemCustom\` exposes the following CSS Shadow Parts:

- title - Used to style the title of the tree list item
- additionalText - Used to style the additionalText of the tree list item
- icon - Used to style the icon of the tree list item
`,x=`## Usage

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
`,v=[{name:"walk",visibility:"public",parameters:[{name:"callback",type:"function",optional:!1,description:"function to execute on each node of the tree with 3 arguments: the node, the level and the index"}],description:"Perform Depth-First-Search walk on the tree and run a callback on each node"}];function nt(r={}){const{wrapper:n}=Object.assign({},l(),r.components);return n?e(n,Object.assign({},r,{children:e(i,{})})):i();function i(){const t=Object.assign({h2:"h2",h1:"h1",h3:"h3",pre:"pre",code:"code"},l(),r.components);return p(d,{children:[e(f,{of:g}),`
`,e(c,{since:"0.10.0"}),`
`,e("br",{}),`
`,e(t.h2,{id:"example",children:"Example"}),`
`,e(a,{of:m}),`
`,e(t.h2,{id:"properties",children:"Properties"}),`
`,e(h,{of:m}),`
`,e(o,{children:x}),`
`,e(T,{rows:v}),`
`,e(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e("br",{}),`
`,e(t.h2,{id:"lazy-load-treeitems",children:"Lazy Load TreeItems"}),`
`,e(a,{of:S}),`
`,e(t.h3,{id:"code",children:"Code"}),`
`,e(t.pre,{children:e(t.code,{className:"language-jsx",children:`const LazyLoadingTree = () => {
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
`,e(o,{children:y}),`
`,e(t.h2,{id:"treeitem",children:"TreeItem"}),`
`,e(s,{of:C}),`
`,e(o,{children:w}),`
`,e(t.h2,{id:"treeitemcustom",children:"TreeItemCustom"}),`
`,e(s,{of:b}),`
`,e(o,{children:I}),`
`,e(u,{})]})}}export{nt as default};
//# sourceMappingURL=Tree-0b7241d1.js.map
