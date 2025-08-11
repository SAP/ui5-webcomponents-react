import{j as e,e as r}from"./iframe-DvixYE7k.js";import{useMDXComponents as d}from"./index-DvcP8w-F.js";import{A as s}from"./ArgTypesWithNote-DCB2HZQX.js";import{C as x}from"./ControlsWithNote-s_60twtr.js";import{D as h}from"./DocsHeader-BkkmtBJn.js";import{F as l}from"./CommandsAndQueries-BP59pkyc.js";import{M as f,C as i,a as j,D as m}from"./blocks-CTAO90yM.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-CFBGDK1g.js";import{M as a}from"./index-BiTsVC3L.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BGjL_ZJV.js";import"./information-DqheYlV4.js";import"./sys-enter-2-BLeP8wjL.js";import"./alert-B0APzi3M.js";import"./Tag-CHowEnLY.js";import"./index-BiNCRTue.js";import"./index-hGAVIlM2.js";import"./Link-BZF4G3GW.js";import"./copy-BSDmbcVi.js";import"./copy-CVzsP6l9.js";import"./GitHub-Mark-1hS7OttQ.js";import"./TableOfContent-gAqVWuC4.js";import"./index-YgXxfA7L.js";import"./index-DPl_fZ6u.js";import"./addCustomCSSWithScoping-OBYOAhu2.js";import"./index-Cr8nZe2E.js";import"./index-C2AvZkZh.js";import"./index-_TUZ2Dv_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJ4BRfb7.js";import"./locked-B7USHUc4.js";import"./index-byd-ayhq.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
