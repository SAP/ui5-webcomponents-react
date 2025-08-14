import{j as e,e as r}from"./iframe-ecJTvqfE.js";import{useMDXComponents as d}from"./index-DboZxcYT.js";import{A as s}from"./ArgTypesWithNote-DP7duApJ.js";import{C as x}from"./ControlsWithNote--sJtiopn.js";import{D as h}from"./DocsHeader-DRQa0RQI.js";import{F as l}from"./CommandsAndQueries-BpdU-ZQD.js";import{M as f,C as i,a as j,D as m}from"./blocks-qsqxfOd3.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-BMeNE5Kz.js";import{M as a}from"./index-BphTmKUu.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-Ct5FWWRu.js";import"./index-BC9DFcam.js";import"./information-DxOwMn8K.js";import"./sys-enter-2-CERMkNGF.js";import"./alert-Bvw6_neD.js";import"./Tag-ZKnVgoL_.js";import"./index-F3eIUiL2.js";import"./index-D-eR8SSU.js";import"./Link-BtvKGD3A.js";import"./copy-DmHQCbEE.js";import"./copy-BgNjKRC7.js";import"./GitHub-Mark-CJwtkSkN.js";import"./TableOfContent-Ba58XBM3.js";import"./index-DsPSpYGU.js";import"./index-CvbQPYli.js";import"./addCustomCSSWithScoping-DjLfDywf.js";import"./index-gkiYXWNa.js";import"./index-gUQqjp18.js";import"./index-Bnh2IJ03.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CFe2wd2s.js";import"./locked-C3fyHzb8.js";import"./index-Dh1jfRqR.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
