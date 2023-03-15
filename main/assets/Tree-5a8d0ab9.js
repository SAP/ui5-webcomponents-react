import{j as e,a as p,F as h}from"./jsx-runtime-670450c2.js";import{C as d,A as s}from"./DomRefTable.module-731ee0d2.js";import{D as c}from"./DocsHeader-ba195ff8.js";import{F as u}from"./Footer-47b89308.js";import"./index-f1f749bf.js";import{D as T}from"./DomRefTable-b2d966ec.js";import{S as y}from"./SubcomponentsSection-6138f2fc.js";import{M as f,C as a,a as o}from"./index-8e2a5d55.js";import{C as g,D as m,L as S,T as C,a as b}from"./Tree.stories-32687132.js";import{u as l}from"./index-4fb8b842.js";import"./chunk-PCJTTTQV-871a82fa.js";import"./iframe-98936aba.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./index-0eaf838d.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-634e3e91.js";import"./event-97133b94.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Icon-459702a7.js";import"./Keys-3acbae73.js";import"./Button-04bad9a0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-d66b3d5e.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-91c50412.js";import"./TableOfContent-fbecd9fc.js";import"./index-70efae5f.js";import"./Link-6d546ee9.js";import"./WrappingType-b81e595a.js";import"./index-062d18aa.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-c56b59c5.js";import"./Popover-907d427e.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7d9fbba1.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./general-leave-request-9453ba73.js";import"./index-12605fbe.js";import"./BusyIndicator-46a9aff5.js";import"./index-1833a897.js";import"./index-7c4dd1a5.js";import"./Tree-3560c798.js";import"./ValueState-2c5e5904.js";import"./ListItem-20b1ed77.js";import"./ListItemBase-16737f88.js";import"./ItemNavigation-18222ac6.js";import"./TabbableElements-8e49b367.js";import"./debounce-9c2fb7dd.js";import"./RadioButton-28647d07.js";import"./CheckBox-90578acd.js";import"./accept-a98baca8.js";import"./HasPopup-47461347.js";import"./slim-arrow-right-bbef5919.js";import"./navigation-right-arrow-d0296b1c.js";import"./navigation-down-arrow-b7eae25c.js";import"./ValueState-ab6838cc.js";const w=`The \`TreeItem\` represents a node in a tree structure, shown as a \`List\`.  
This is the item to use inside a \`Tree\`. You can represent an arbitrary tree structure by recursively nesting tree items.

### CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`TreeItem\` exposes the following CSS Shadow Parts:

- title - Used to style the title of the tree list item
- additionalText - Used to style the additionalText of the tree list item
- icon - Used to style the icon of the tree list item
`,I=`The \`TreeItemCustom\` represents a node in a tree structure, shown as a \`List\`.  
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
*   \\[ENTER\\] - Selects the currently focused item upon keydown.`,v=[{name:"walk",visibility:"public",parameters:[{name:"callback",type:"function",optional:!1,description:"function to execute on each node of the tree with 3 arguments: the node, the level and the index"}],description:"Perform Depth-First-Search walk on the tree and run a callback on each node"}];function lt(r={}){const{wrapper:n}=Object.assign({},l(),r.components);return n?e(n,Object.assign({},r,{children:e(i,{})})):i();function i(){const t=Object.assign({h2:"h2",h1:"h1",h3:"h3",pre:"pre",code:"code"},l(),r.components);return p(h,{children:[e(f,{of:g}),`
`,e(c,{since:"0.10.0"}),`
`,e("br",{}),`
`,e(t.h2,{children:"Example"}),`
`,e(a,{of:m}),`
`,e(t.h2,{children:"Properties"}),`
`,e(d,{of:m}),`
`,e(o,{children:x}),`
`,e(T,{rows:v}),`
`,e(t.h1,{children:"More Examples"}),`
`,e("br",{}),`
`,e(t.h2,{children:"Lazy Load TreeItems"}),`
`,e(a,{of:S}),`
`,e(t.h3,{children:"Code"}),`
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
`,e(t.h2,{children:"TreeItem"}),`
`,e(s,{of:C}),`
`,e(o,{children:w}),`
`,e(t.h2,{children:"TreeItemCustom"}),`
`,e(s,{of:b}),`
`,e(o,{children:I}),`
`,e(u,{})]})}}export{lt as default};
//# sourceMappingURL=Tree-5a8d0ab9.js.map
