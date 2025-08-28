import{j as e}from"./iframe-ir6pYnmz.js";import{useMDXComponents as p}from"./index-41o0Td7A.js";import{A as o}from"./ArgTypesWithNote-DyrTpNRF.js";import{C as c}from"./ControlsWithNote-m8JvSVba.js";import{D as h}from"./DocsHeader-REPCwOzH.js";import{F as x}from"./CommandsAndQueries-b6zt1eWd.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-D_tGmZuN.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-qieVKvJv.js";import"./preload-helper-Ct5FWWRu.js";import"./index-e4AcpL9G.js";import"./information-B8K6izqM.js";import"./sys-enter-2-CYPsCOvo.js";import"./alert-DQylSe-I.js";import"./Tag-DRGeWEus.js";import"./index-BbtZuvgL.js";import"./index-BTss8I7u.js";import"./Link-Be2dbLkV.js";import"./copy-8vGiL6Nc.js";import"./copy-BlUsduAp.js";import"./GitHub-Mark-LFaeNMf3.js";import"./TableOfContent-COGJEfC8.js";import"./index-CH7s07mV.js";import"./index-1Mik_Y5f.js";import"./addCustomCSSWithScoping-DMyl69E9.js";import"./index-CZ16GD7U.js";import"./index-CKTjdAAk.js";import"./index-8VSCVlQX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5OnWZgu.js";import"./general-leave-request-B0-PYck4.js";import"./index-DAsbl867.js";import"./navigation-right-arrow-vWKMw0EP.js";import"./navigation-down-arrow-Cwg074OW.js";import"./navigation-right-arrow-IPve_ban.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
