import{j as e}from"./iframe-DQlP_6Qv.js";import{useMDXComponents as p}from"./index-BXhipMBG.js";import{A as o}from"./ArgTypesWithNote-DSf-S4d9.js";import{C as c}from"./ControlsWithNote-ZFQQfFnf.js";import{D as h}from"./DocsHeader-CDgmi_oK.js";import{F as x}from"./CommandsAndQueries-CYuC6yI9.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-B5a3gZGW.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-DrY3s2t7.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DhT04Xs9.js";import"./information-D9TZ110a.js";import"./sys-enter-2-DbOIPJDN.js";import"./alert-Boy3zLsV.js";import"./Tag-BSiRJmHh.js";import"./index-DMuVL8ZX.js";import"./index-DztBgCxB.js";import"./Link-CIr5Lw-F.js";import"./copy-Db-VMqmG.js";import"./copy-DA6pIWgW.js";import"./GitHub-Mark-rmWf5mhQ.js";import"./TableOfContent-JiosDGXF.js";import"./index-hxdHCcXn.js";import"./index-6SE_GYer.js";import"./addCustomCSSWithScoping-DaYz7Ef_.js";import"./index-5WDw669T.js";import"./index-s0msSqUd.js";import"./index-CAD4wHAa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C-Sr5qI6.js";import"./general-leave-request-BmWVNmbx.js";import"./index-sbxtCj2e.js";import"./navigation-right-arrow-BWmOXN6t.js";import"./navigation-down-arrow-DArtWA0U.js";import"./navigation-right-arrow-BqiGYNmk.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
