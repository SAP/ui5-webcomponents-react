import{j as e}from"./iframe-D3WSfxnn.js";import{useMDXComponents as p}from"./index-INJaxUMc.js";import{A as o}from"./ArgTypesWithNote-PQxTFeL_.js";import{C as c}from"./ControlsWithNote-bBb_VS4m.js";import{D as h}from"./DocsHeader-i6mSv8qc.js";import{F as x}from"./CommandsAndQueries-D0ehjJEo.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-BRQLHU1o.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-CImZCCXZ.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DSpjDgSK.js";import"./index-BVrxhT_e.js";import"./information-DM4h4iXJ.js";import"./sys-enter-2-U9KscTjZ.js";import"./alert-CfwYPci7.js";import"./Tag-tOepiG2u.js";import"./index-BE0SODKX.js";import"./index-5wzk8jTN.js";import"./Link-C5psU7y5.js";import"./copy-CY1Urzho.js";import"./copy-B0_WxO9i.js";import"./GitHub-Mark-B9By78RC.js";import"./TableOfContent-D7UH4733.js";import"./index-C6MhXGTg.js";import"./index-RQ3mlM3E.js";import"./addCustomCSSWithScoping-CLwDIOC8.js";import"./index-BnnkB59L.js";import"./index-BSvrPTPm.js";import"./index-BedbyZ7Q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-kG1BPZBl.js";import"./general-leave-request-Bs6LhgF8.js";import"./index-BqBHLTfL.js";import"./navigation-right-arrow-DwFbgTQb.js";import"./navigation-down-arrow-L5mmSN-n.js";import"./navigation-right-arrow-6g9z3Q1C.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
