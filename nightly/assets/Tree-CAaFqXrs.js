import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./react-fLZJfuRT.js";import{_ as i,d as a,o,r as s,u as c}from"./blocks-C9nJVXnz.js";import{S as l,b as u,f as d,t as f,u as p}from"./components-D9mbWqao.js";import{n as m,t as h}from"./SubcomponentsSection-Kv79Q7K7.js";import{a as g,c as _,i as v,n as y,o as b,r as x,s as S,t as C}from"./Tree.stories-DwXjR-Yu.js";function w(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,pre:`pre`,...n(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(a,{of:x}),`
`,(0,E.jsx)(d,{of:x,since:`0.10.0`}),`
`,(0,E.jsx)(`br`,{}),`
`,(0,E.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,E.jsx)(s,{of:C}),`
`,(0,E.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,E.jsx)(u,{of:C}),`
`,(0,E.jsx)(t.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,E.jsx)(`br`,{}),`
`,(0,E.jsx)(t.h2,{id:`lazy-load-treeitems`,children:`Lazy Load TreeItems`}),`
`,(0,E.jsx)(s,{of:y}),`
`,(0,E.jsx)(t.h3,{id:`code`,children:`Code`}),`
`,(0,E.jsx)(t.pre,{children:(0,E.jsx)(t.code,{className:`language-jsx`,children:`const LazyLoadingTree = () => {
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
`,(0,E.jsx)(c,{children:h}),`
`,(0,E.jsx)(t.h2,{id:`treeitem`,children:`TreeItem`}),`
`,(0,E.jsx)(o,{of:S}),`
`,(0,E.jsx)(l,{metaOf:x,of:S}),`
`,(0,E.jsx)(t.h2,{id:`treeitemcustom`,children:`TreeItemCustom`}),`
`,(0,E.jsx)(o,{of:g}),`
`,(0,E.jsx)(l,{metaOf:x,of:g}),`
`,(0,E.jsx)(p,{})]})}function T(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;function D(){return(D=e((()=>{E=t(),r(),f(),m(),i(),_(),b(),v()})))()}D();export{T as default};