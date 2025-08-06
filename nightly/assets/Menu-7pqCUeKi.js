import{j as e,e as r}from"./iframe-yjMKSaW2.js";import{useMDXComponents as d}from"./index-DX8fpWzX.js";import{A as s}from"./ArgTypesWithNote-BfA98lFl.js";import{C as x}from"./ControlsWithNote-wKta4bY1.js";import{D as h}from"./DocsHeader-CXHyuQiW.js";import{F as l}from"./CommandsAndQueries-ClO5_6SR.js";import{M as f,C as i,a as j,D as m}from"./blocks-qO1HNk-b.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-B-n6iQCf.js";import{M as a}from"./index-CQvPlEix.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-Dp1pzeXC.js";import"./index-EVdkIx1d.js";import"./information-Cn2Ycis7.js";import"./sys-enter-2-CQXBhP7E.js";import"./alert-509BGbEm.js";import"./Tag-BxGYemBH.js";import"./index-D2oaGTxE.js";import"./index-CM3jZrAN.js";import"./Link-hbFO0ZkL.js";import"./copy-CdUOUeib.js";import"./copy-Bx6gkJby.js";import"./GitHub-Mark-zti1AnK_.js";import"./TableOfContent-COrNlak9.js";import"./index-BTcK53Xp.js";import"./index-tTu9lfPG.js";import"./addCustomCSSWithScoping-DI9eG_9m.js";import"./index-BPvXEz4B.js";import"./index-C0kheMH7.js";import"./index-BFYU0Mvp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-wtqIr7A-.js";import"./locked-Bj-NA1ez.js";import"./index-CXF-cWfN.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
