import{j as e}from"./iframe-DEht8tsT.js";import{useMDXComponents as p}from"./index-CHmvqmZV.js";import{A as o}from"./ArgTypesWithNote-Cdt2AYQ3.js";import{C as c}from"./ControlsWithNote-9o3rXavj.js";import{D as h}from"./DocsHeader-CHi1snSz.js";import{F as x}from"./CommandsAndQueries-r7FFQXZn.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{M as j,C as i,a as T,D as s}from"./blocks-B9eJfK2p.js";import{C as r,D as m,L as u,T as a,a as d}from"./Tree.stories-5LiN1Ug8.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DCXZOGva.js";import"./index-qqa4-hS-.js";import"./information-qGG1TAK7.js";import"./sys-enter-2-Wo80rP1Y.js";import"./alert-BsRJ2cl_.js";import"./Tag-Bo7VmRFf.js";import"./index-v8e_2LrN.js";import"./index-Dwyff0cB.js";import"./Link-DQiRK5OG.js";import"./copy-CMVPQJQP.js";import"./copy-DdxSmOcQ.js";import"./GitHub-Mark-swxpQ8aX.js";import"./TableOfContent-BBCeB6M5.js";import"./index-DLGND6CU.js";import"./index-Boj5J7Ot.js";import"./addCustomCSSWithScoping-BN-zHrab.js";import"./index-D0y5lDJX.js";import"./index--icAFx10.js";import"./index-BRdP8YZI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cl7xFzXJ.js";import"./general-leave-request-BOgjdJkx.js";import"./index-CXm15WPn.js";import"./navigation-right-arrow-BS0T2xtE.js";import"./navigation-down-arrow-DpGvha-M.js";import"./navigation-right-arrow-DB7Ib3_i.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...p(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:r}),`
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
