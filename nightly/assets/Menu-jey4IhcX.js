import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./MenuItem-hHhOiuAl.js";import{i,r as a}from"./iframe-B2XIkDRG.js";import{i as o,r as s}from"./react-fLZJfuRT.js";import{_ as c,d as l,o as u,r as d,u as f}from"./blocks-DjpmKyLQ.js";import{S as p,b as m,f as h,t as g,u as _}from"./components-R4kqCctk.js";import{n as v,t as y}from"./SubcomponentsSection-Kv79Q7K7.js";import{a as b,i as x,n as S,o as C,r as w,t as T}from"./Menu.stories-Bfkqa9Nv.js";function E(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...o(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(l,{of:S}),`
`,(0,O.jsx)(h,{of:S,since:`0.23.0`}),`
`,(0,O.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,O.jsx)(d,{of:T}),`
`,(0,O.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,O.jsx)(m,{of:T}),`
`,(0,O.jsx)(t.h2,{id:`opening-menus`,children:`Opening Menus`}),`
`,(0,O.jsxs)(t.p,{children:[`You can open and close the `,(0,O.jsx)(t.code,{children:`Menu`}),` component in a declarative way using the `,(0,O.jsx)(t.code,{children:`open`}),` and `,(0,O.jsx)(t.code,{children:`opener`}),` prop.`]}),`
`,(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-jsx`,children:`const MyComponentWithMenu = () => {
  const buttonRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => {
          setMenuIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <Menu
        opener={buttonRef.current}
        open={menuIsOpen}
        onClose={() => {
          setMenuIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,(0,O.jsx)(t.h2,{id:`more-examples`,children:`More examples`}),`
`,(0,O.jsx)(t.h3,{id:`menu-with-submenu`,children:`Menu with Submenu`}),`
`,(0,O.jsx)(d,{of:w}),`
`,(0,O.jsx)(f,{children:y}),`
`,(0,O.jsx)(t.h2,{id:`menuitem`,children:`MenuItem`}),`
`,(0,O.jsx)(u,{of:r}),`
`,(0,O.jsx)(p,{metaOf:S,hideHTMLPropsNote:!0,exclude:a,of:r}),`
`,(0,O.jsx)(t.h2,{id:`menuitemgroup`,children:`MenuItemGroup`}),`
`,(0,O.jsx)(u,{of:b}),`
`,(0,O.jsx)(p,{metaOf:S,hideHTMLPropsNote:!0,exclude:a,of:b}),`
`,(0,O.jsx)(_,{})]})}function D(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;function k(){return(k=e((()=>{O=t(),s(),g(),c(),x(),n(),C(),v(),i()})))()}k();export{D as default};