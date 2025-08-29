import{j as o}from"./iframe-CMv2_fr8.js";import{useMDXComponents as i}from"./index-BCZO-1se.js";import{M as p,C as a}from"./blocks-BHuPuGEP.js";import"./Tag-BXu5WVYZ.js";import"./index-CpCRQT6a.js";import{C as m}from"./ControlsWithNote-_PUNWkdQ.js";import{D as c}from"./DocsHeader-Cx6Y1JDI.js";import{F as h}from"./CommandsAndQueries-UgVWTBkO.js";import{C as s,D as e}from"./Toast.stories-B9N9L-1b.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BShdYbhS.js";import"./sys-enter-2-BEffbqcW.js";import"./alert-BYv4QL7b.js";import"./index-51EQIK1-.js";import"./index-CZyHaD1B.js";import"./Link-BYFyz2lz.js";import"./copy-ujimQgxv.js";import"./copy-Bp5geyDe.js";import"./GitHub-Mark-BaSZHoZf.js";import"./TableOfContent-CaCWTgrs.js";import"./index-BP5Wh9d8.js";import"./index-mbEJ-Zu7.js";import"./addCustomCSSWithScoping-CYxRppwU.js";import"./index-wL9CVecO.js";import"./index-S6ZiGY2w.js";import"./index-A1613AR-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-9_zKWd9C.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
`,o.jsx(c,{of:s,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:e}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(m,{of:e}),`
`,o.jsx(t.h2,{id:"show-a-toast",children:"Show a toast"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"Toaast"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," prop."]}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"Example"})}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`export function MyComponentWithAToast() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setShowToast(true);
        }}
      >
        Show Toast
      </Button>
      <Toast
        open={showToast}
        onClose={() => {
          setShowToast(false);
        }}
      >
        This is my Toast!
      </Toast>
    </>
  );
}
`})}),`
`,o.jsx(h,{})]})}function R(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{R as default};
