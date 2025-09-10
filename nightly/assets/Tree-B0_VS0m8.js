import{j as e}from"./iframe-113A6qfG.js";import{useMDXComponents as p}from"./index-PjC7U6K4.js";import{A as o}from"./ArgTypesWithNote-pLrJ2i1I.js";import{C as c}from"./ControlsWithNote-CbvkaQYM.js";import{D as h}from"./DocsHeader-CU4w8qUD.js";import{F as x}from"./CommandsAndQueries-Bg85p3au.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-D_3UdGcb.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-BCg1ZmZH.js";import"./preload-helper-D9Z9MdNV.js";import"./index-B2xOcofc.js";import"./information-DODfC2QB.js";import"./sys-enter-2-CVSv3UIQ.js";import"./alert-UNIiqPMX.js";import"./Tag-DaeygpfO.js";import"./index-CWWoZsv-.js";import"./index-AaWwOR4U.js";import"./Link-BPx9Yymb.js";import"./copy-D_4mWOai.js";import"./copy-CcIFyCHE.js";import"./GitHub-Mark-ChlT5k1t.js";import"./TableOfContent-DMFIwU4z.js";import"./index-CcdliY9D.js";import"./index-CnEBtXKD.js";import"./addCustomCSSWithScoping-x2rA9FdH.js";import"./index-BwzRPfoc.js";import"./index-DPN0DnRR.js";import"./index-nQhhjHf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D-4PiXj7.js";import"./general-leave-request-4qGGxx6h.js";import"./index-CkQDp71V.js";import"./navigation-right-arrow-OXaI-HJX.js";import"./navigation-down-arrow-YzBoi4OT.js";import"./navigation-right-arrow-CVjB9oy3.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
`,e.jsx(h,{of:r,since:"0.10.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:m}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"lazy-load-treeitems",children:"Lazy Load TreeItems"}),`
`,e.jsx(i,{of:u}),`
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
`,e.jsx(T,{children:f}),`
`,e.jsx(t.h2,{id:"treeitem",children:"TreeItem"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(o,{metaOf:r,of:a}),`
`,e.jsx(t.h2,{id:"treeitemcustom",children:"TreeItemCustom"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(o,{metaOf:r,of:d}),`
`,e.jsx(x,{})]})}function ee(n={}){const{wrapper:t}={...p(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{ee as default};
