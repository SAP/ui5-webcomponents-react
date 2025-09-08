import{j as o}from"./iframe-BxIaMIJ2.js";import{useMDXComponents as i}from"./index-DTW9WkuG.js";import{M as p,C as a}from"./blocks-CHJsxz9e.js";import"./Tag-exOiuXi7.js";import"./index-CiOOHqpr.js";import{C as m}from"./ControlsWithNote-CyUf3Fee.js";import{D as c}from"./DocsHeader-D_5koftR.js";import{F as h}from"./CommandsAndQueries-Di8bJMhG.js";import{C as s,D as e}from"./Toast.stories-CR590hIc.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DrVbI7V6.js";import"./sys-enter-2-CxxS0S6m.js";import"./alert-gJnafO72.js";import"./index-BrdrQHC3.js";import"./index-ozaXSakq.js";import"./Link-6ZN5XN7_.js";import"./copy-gK8ePznw.js";import"./copy-DC4VamtM.js";import"./GitHub-Mark-RxYM8RNf.js";import"./TableOfContent-CjHG1HZ_.js";import"./index-2yLOC2-7.js";import"./index-BSQj9ICh.js";import"./addCustomCSSWithScoping-BJIJHA0f.js";import"./index-DGNtnQKj.js";import"./index-RGR4m0WA.js";import"./index-DiLVqziG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQcSYUZ6.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
