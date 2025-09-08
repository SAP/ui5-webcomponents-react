import{j as e,e as r}from"./iframe-C-EBr6B5.js";import{useMDXComponents as d}from"./index-CsHoO3vp.js";import{A as s}from"./ArgTypesWithNote-CBp7FYYq.js";import{C as x}from"./ControlsWithNote-l5ZPcGPi.js";import{D as h}from"./DocsHeader-DFQCx5wt.js";import{F as l}from"./CommandsAndQueries-uIAr-det.js";import{M as f,C as i,a as j,D as m}from"./blocks-CW6WXKe3.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-CuGNZPZT.js";import{M as a}from"./index-BG_aCk1t.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DCXZOGva.js";import"./index-w0Ow44Ci.js";import"./information-tqFaSeRf.js";import"./sys-enter-2-Bt0bcCDE.js";import"./alert-yTZDtevr.js";import"./Tag-oA_76L9w.js";import"./index-DPNnv8Bc.js";import"./index-D4pu56zs.js";import"./Link-BOxP5Jij.js";import"./copy-CmCcSBUg.js";import"./copy-u5h8VvvF.js";import"./GitHub-Mark--2iq0Lvm.js";import"./TableOfContent-CAVSmF6L.js";import"./index-BUutaB5D.js";import"./index-BI8WG9ur.js";import"./addCustomCSSWithScoping-DyJ9Y5R2.js";import"./index-DuvAH5uD.js";import"./index-CcO_nGqV.js";import"./index-o40X6E60.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B-BNRVJb.js";import"./locked-Cz4zftcQ.js";import"./index-DJuaS2OH.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
`,e.jsx(h,{of:t,since:"0.23.0"}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(x,{of:p}),`
`,e.jsx(n.h2,{id:"opening-menus",children:"Opening Menus"}),`
`,e.jsxs(n.p,{children:["You can open and close the ",e.jsx(n.code,{children:"Menu"})," component in a declarative way using the ",e.jsx(n.code,{children:"open"})," and ",e.jsx(n.code,{children:"opener"})," prop."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithMenu = () => {
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
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"menu-with-submenu",children:"Menu with Submenu"}),`
`,e.jsx(i,{of:M}),`
`,e.jsx(j,{children:C}),`
`,e.jsx(n.h2,{id:"menuitem",children:"MenuItem"}),`
`,e.jsx(m,{of:a}),`
`,e.jsx(s,{metaOf:t,hideHTMLPropsNote:!0,exclude:r,of:a}),`
`,e.jsx(n.h2,{id:"menuitemgroup",children:"MenuItemGroup"}),`
`,e.jsx(m,{of:u}),`
`,e.jsx(s,{metaOf:t,hideHTMLPropsNote:!0,exclude:r,of:u}),`
`,e.jsx(l,{})]})}function ee(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{ee as default};
