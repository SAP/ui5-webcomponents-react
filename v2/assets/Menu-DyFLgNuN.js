import{j as e,e as r}from"./iframe-wtGyowSu.js";import{useMDXComponents as d}from"./index-CZZ2_hDJ.js";import{A as s}from"./ArgTypesWithNote-C_ssS23h.js";import{C as x}from"./ControlsWithNote-BoV20cXi.js";import{D as h}from"./DocsHeader-WzDk4VE4.js";import{F as l}from"./CommandsAndQueries-DQ0OWp_s.js";import{M as f,C as i,a as j,D as m}from"./blocks-DOUzMh6P.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-Bn9mGVcl.js";import{M as a}from"./index-BCREopBQ.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DCXZOGva.js";import"./index-DemLuH5_.js";import"./information-B0VTD8Pg.js";import"./sys-enter-2-CvQEzb10.js";import"./alert-Cef964mc.js";import"./Tag-CF7bcptF.js";import"./index-CR8pF6-t.js";import"./index-KwEy5gb6.js";import"./Link-BV0lLBLc.js";import"./copy-DVo64Gt3.js";import"./copy-fNgmErhy.js";import"./GitHub-Mark-ctp-7qxM.js";import"./TableOfContent-BzO31W1S.js";import"./index-BFewsKyD.js";import"./index-CJ5u_hE4.js";import"./addCustomCSSWithScoping-Bg0OR_5Z.js";import"./index-CeuGV1sB.js";import"./index-klURHLLt.js";import"./index-WPEP5BQu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BeC7vZ35.js";import"./locked-Dy--ygoU.js";import"./index-DGE4HEwp.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
