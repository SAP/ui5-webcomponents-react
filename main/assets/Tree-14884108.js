import{j as e,a as p,F as d}from"./jsx-runtime-670450c2.js";import{C as h,A as s}from"./DomRefTable.module-bb333a3d.js";import{D as c}from"./DocsHeader-de9996e5.js";import{F as u}from"./Footer-e78fbdbd.js";import"./index-f1f749bf.js";import{D as T}from"./DomRefTable-9729f7ce.js";import{S as y}from"./SubcomponentsSection-6138f2fc.js";import{M as f,C as a,a as o}from"./chunk-PCJTTTQV-319b2a40.js";import{C as g,D as m,L as S,T as C,a as b}from"./Tree.stories-3e49e64b.js";import{u as l}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-4031004f.js";import"./iframe-dc780a3d.js";import"../sb-preview/runtime.mjs";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./class-map-95320e87.js";import"./Button-bc3a11a1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-94bcf4c7.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-b4709bb6.js";import"./TableOfContent-06ceadb1.js";import"./index-9e4829ee.js";import"./Link-018547e8.js";import"./WrappingType-b81e595a.js";import"./index-c6f22ce6.js";import"./Label-ccc234fe.js";import"./index-96c5f47c.js";import"./index-2bc31bfb.js";import"./Popover-224d761a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./general-leave-request-617d7b61.js";import"./index-614d7a9a.js";import"./BusyIndicator-15ff681f.js";import"./index-3a87c8c7.js";import"./index-b2bb129d.js";import"./Tree-5a96dbfe.js";import"./ValueState-2c5e5904.js";import"./ListItem-83c0fb9e.js";import"./ListItemBase-a0bc6999.js";import"./ItemNavigation-8e291cfa.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./RadioButton-a8c23c83.js";import"./CheckBox-80dd6e5f.js";import"./accept-d8c33d70.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-52a56681.js";import"./navigation-right-arrow-de34377f.js";import"./navigation-down-arrow-b005863d.js";import"./ValueState-ab6838cc.js";const w=`**Since:** 0.10.0

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

*   To display hierarchically structured items.
*   To select one or more items out of a set of hierarchically structured items.

### When not to use:

*   To display items not hierarchically strcutured. In this case, use the List component.
*   To select one item from a very small number of non-hierarchical items. Select or ComboBox might be more appropriate.
*   The hierarchy turns out to have only two levels. In this case, use List with group items.

## Keyboard Handling

The \`Tree\` provides advanced keyboard handling. The user can use the following keyboard shortcuts in order to navigate trough the tree:

*   \\[UP/DOWN\\] - Navigates up and down the tree items that are currently visible.
*   \\[RIGHT\\] - Drills down the tree by expanding the tree nodes.
*   \\[LEFT\\] - Goes up the tree and collapses the tree nodes.

  
The user can use the following keyboard shortcuts to perform selection, when the \`mode\` property is in use:

*   \\[SPACE\\] - Selects the currently focused item upon keyup.
*   \\[ENTER\\] - Selects the currently focused item upon keydown.`,v=[{name:"walk",visibility:"public",parameters:[{name:"callback",type:"function",optional:!1,description:"function to execute on each node of the tree with 3 arguments: the node, the level and the index"}],description:"Perform Depth-First-Search walk on the tree and run a callback on each node"}];function nt(r={}){const{wrapper:n}=Object.assign({},l(),r.components);return n?e(n,Object.assign({},r,{children:e(i,{})})):i();function i(){const t=Object.assign({h2:"h2",h1:"h1",h3:"h3",pre:"pre",code:"code"},l(),r.components);return p(d,{children:[e(f,{of:g}),`
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
//# sourceMappingURL=Tree-14884108.js.map
