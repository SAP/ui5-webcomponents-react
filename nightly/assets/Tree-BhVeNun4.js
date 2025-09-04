import{j as e}from"./iframe-BGPLLWda.js";import{useMDXComponents as p}from"./index-CUo1Jk3b.js";import{A as o}from"./ArgTypesWithNote-D1VuiuEb.js";import{C as c}from"./ControlsWithNote-DwWmOGGJ.js";import{D as h}from"./DocsHeader-D7mFShSZ.js";import{F as x}from"./CommandsAndQueries-CMwJiC-3.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-indAdCXu.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-DEgG2SqX.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DSpjDgSK.js";import"./index-CQHuRrhk.js";import"./information-CN6qajRX.js";import"./sys-enter-2-DEzg8GhV.js";import"./alert-CDWQg-Kt.js";import"./Tag-BJtvEZ6A.js";import"./index-BUzvoCUF.js";import"./index-DxdciquJ.js";import"./Link-7mG2PaxS.js";import"./copy-BRDDe_qs.js";import"./copy-BU9AAITa.js";import"./GitHub-Mark-DhRpczTj.js";import"./TableOfContent-JH4ytLq7.js";import"./index-BYQsmpt9.js";import"./index-DatG_EGp.js";import"./addCustomCSSWithScoping-C37q5SY_.js";import"./index-Bm9Gzw8H.js";import"./index-7SSPTye2.js";import"./index-DkEMFegB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bg9viRhL.js";import"./general-leave-request-0o3jhSwX.js";import"./index-B91ASvCc.js";import"./navigation-right-arrow-CuKMCHYh.js";import"./navigation-down-arrow-BxgwGxy_.js";import"./navigation-right-arrow-wPwk5NCr.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
`,e.jsx(x,{})]})}function te(n={}){const{wrapper:t}={...p(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{te as default};
