import{j as e}from"./iframe-Dxtd3Za_.js";import{useMDXComponents as p}from"./index-DCsMWBUP.js";import{A as o}from"./ArgTypesWithNote-CZ4ovLvd.js";import{C as c}from"./ControlsWithNote-3BXdewA3.js";import{D as h}from"./DocsHeader-CO79EmO_.js";import{F as x}from"./CommandsAndQueries-Bz3F9tKI.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-CGoS-OC2.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-7h5wf9b5.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DFbKywCe.js";import"./information-DIBbce7d.js";import"./sys-enter-2-G2_64HTd.js";import"./alert-DwCbeozZ.js";import"./Tag-2V4Q7cMJ.js";import"./index-DCNonR1q.js";import"./index-C_oxkJx9.js";import"./Link-BJCTkcGT.js";import"./copy-B8UVJgM5.js";import"./copy-BvP7Hkk1.js";import"./GitHub-Mark-B89QRxgx.js";import"./TableOfContent-DBHLjhyw.js";import"./index-BLmvSYxU.js";import"./index-BJ_zprMk.js";import"./addCustomCSSWithScoping-DDKOktfB.js";import"./index-Ul1D90OH.js";import"./index-V59EODhb.js";import"./index-Cb1r7zf9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_3v8Ndp.js";import"./general-leave-request-Bg4QKTYz.js";import"./index-DyEvwlhn.js";import"./navigation-right-arrow-BmUGBCmb.js";import"./navigation-down-arrow-DibqTE1y.js";import"./navigation-right-arrow-j4FtsvBh.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
