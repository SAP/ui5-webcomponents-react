import{j as e,e as r}from"./iframe-DXDeCCXH.js";import{useMDXComponents as d}from"./index-BVVJ9Xmn.js";import{A as s}from"./ArgTypesWithNote-CLRkylU2.js";import{C as x}from"./ControlsWithNote-hJ8WC7xW.js";import{D as h}from"./DocsHeader-1wDTrNBL.js";import{F as l}from"./CommandsAndQueries-Dq5DBaAz.js";import{M as f,C as i,a as j,D as m}from"./blocks-BG5MO-vk.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-uG9MS_58.js";import{M as a}from"./index-BQYtMm1Q.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BpNq_jfs.js";import"./information-BWB8PmSI.js";import"./sys-enter-2-DsdlSsi2.js";import"./alert-DDgM_rg5.js";import"./Tag-DzUeer7g.js";import"./index-CtGW4gqB.js";import"./index-DVXfqmRM.js";import"./Link-BdCp1PFu.js";import"./copy-Bp4cxNkh.js";import"./copy-WTqS65ha.js";import"./GitHub-Mark-DJyWkpqr.js";import"./TableOfContent-Cw9to3Gb.js";import"./index-Dr41l3ov.js";import"./index-B35aGJp7.js";import"./addCustomCSSWithScoping-pbauK9ix.js";import"./index-0UOQT5j_.js";import"./index-CgbMOzL5.js";import"./index-BBizv3Sp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DAjsaoK3.js";import"./locked-DuKIVb7F.js";import"./index-C7U610fB.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
`,e.jsx(l,{})]})}function $(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{$ as default};
