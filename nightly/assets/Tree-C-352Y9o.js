import{j as e}from"./iframe-Ba8pCVp8.js";import{useMDXComponents as p}from"./index-EJQOh2Id.js";import{A as o}from"./ArgTypesWithNote-9RzLfkHS.js";import{C as c}from"./ControlsWithNote-Bd6pYC1H.js";import{D as h}from"./DocsHeader-C-hjUqfu.js";import{F as x}from"./CommandsAndQueries-BwMOH1SZ.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-CkgJFs4T.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-CSGiOWB3.js";import"./preload-helper-Ct5FWWRu.js";import"./index-ChA7roql.js";import"./information-D2Jo4xNl.js";import"./sys-enter-2-D153taNV.js";import"./alert-D_vJdNjC.js";import"./Tag-D_p_BT-M.js";import"./index-D9TUnkjB.js";import"./index-chGFhN5O.js";import"./Link-x2Qr5Zbu.js";import"./copy-DvB2frbS.js";import"./copy-BQA3UKNo.js";import"./GitHub-Mark-CMsRbTr-.js";import"./TableOfContent-COtDOSzs.js";import"./index-DotiVDwk.js";import"./index-Dl3ePCz7.js";import"./addCustomCSSWithScoping-Bw6JZ75Q.js";import"./index-CfvbnLXm.js";import"./index-COr_Uezf.js";import"./index-D8qxJJnM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CorCBzMG.js";import"./general-leave-request-PdwpTvfF.js";import"./index-KjM22Mkn.js";import"./navigation-right-arrow-NCcFjcdA.js";import"./navigation-down-arrow-CTzJ9Li3.js";import"./navigation-right-arrow-Sp9fSK-u.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
