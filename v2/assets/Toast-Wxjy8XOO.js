import{j as o}from"./iframe-CGUWa3l5.js";import{useMDXComponents as i}from"./index-Cg9cAKJC.js";import{M as p,C as a}from"./blocks-C0vLrpaE.js";import"./Tag-BIHZtDOF.js";import"./index-CL_zuYv3.js";import{C as m}from"./ControlsWithNote-CLRZIdA4.js";import{D as c}from"./DocsHeader-bLXXKsa0.js";import{F as h}from"./CommandsAndQueries-D9MoTrLH.js";import{C as s,D as e}from"./Toast.stories-BUnjJA6s.js";import"./preload-helper-D9Z9MdNV.js";import"./information-gqQAsN3Y.js";import"./sys-enter-2-CDAeFjyO.js";import"./alert-ClZlqLU4.js";import"./index-DVv4DYKP.js";import"./index-Be3QtdR7.js";import"./Link-0YCTvvlv.js";import"./copy-CqMmNhIc.js";import"./copy-WtCMvp6x.js";import"./GitHub-Mark-r0BUaYbl.js";import"./TableOfContent-BXgVIGFG.js";import"./index-BsFrl4mG.js";import"./index-Dagge6tW.js";import"./addCustomCSSWithScoping-C_LLLVaV.js";import"./index-M2L2LSTo.js";import"./index-G9i70mAv.js";import"./index-CqG7yhFq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dmz3vIHQ.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
