import{j as e,e as r}from"./iframe-D47IesGI.js";import{useMDXComponents as d}from"./index-B-Cjj5vb.js";import{A as s}from"./ArgTypesWithNote-CFlNB1uS.js";import{C as x}from"./ControlsWithNote-lj38sMRt.js";import{D as h}from"./DocsHeader-Wj_1zWhv.js";import{F as l}from"./CommandsAndQueries-BUssvnnv.js";import{M as f,C as i,a as j,D as m}from"./blocks-DWAQQ6EB.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-_pCARil4.js";import{M as a}from"./index-BtIJ_pJp.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Cj_ar6Qq.js";import"./information-GnhwVE2w.js";import"./sys-enter-2-FMcsLRqn.js";import"./alert-C1Bd-ATk.js";import"./Tag-DyH9Q3dA.js";import"./index-BYtsHb6f.js";import"./index-D8NvhSag.js";import"./Link-Cbo0X0QC.js";import"./copy-BMTsvkwe.js";import"./copy-CpxPPhhd.js";import"./GitHub-Mark-DvefSS6H.js";import"./TableOfContent-WE_h0rfY.js";import"./index-CbWKu4dM.js";import"./index-CAoIqyrc.js";import"./addCustomCSSWithScoping-vO2X2B4L.js";import"./index-Dxtyr50j.js";import"./index-CfXTMk0G.js";import"./index-ibIc4r1j.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1XHFcI1P.js";import"./locked-qvdOlUei.js";import"./index-yF9wx341.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
