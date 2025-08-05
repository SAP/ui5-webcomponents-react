import{j as o}from"./iframe-CS0WNVf3.js";import{useMDXComponents as i}from"./index-DDJWQvBk.js";import{M as p,C as a}from"./blocks-CKA1zSBc.js";import"./Tag-BP97hCxl.js";import"./index-DSXhn2lw.js";import{C as m}from"./ControlsWithNote-BQ2uotKo.js";import{D as c}from"./DocsHeader-D11tTFdv.js";import{F as h}from"./CommandsAndQueries-DZ6pwvzq.js";import"./WrappingType-BBpR8qCJ.js";import{C as s,D as e}from"./Toast.stories-UyzW9u3H.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CvdaSHT3.js";import"./sys-enter-2-ySqjHw_c.js";import"./alert-Gh91-OFF.js";import"./index-CvNKNR4d.js";import"./index-BaMTSIaX.js";import"./Link-NB8Z-JgQ.js";import"./copy-JmzkmJ0Q.js";import"./copy-BAUFdAAv.js";import"./GitHub-Mark-7sJAyAvv.js";import"./TableOfContent-CIMB7FlB.js";import"./index-6Qc8M-Ay.js";import"./index-DF926y_l.js";import"./addCustomCSSWithScoping-C76Rlx9D.js";import"./index-DAA990cp.js";import"./index-CSbnywRm.js";import"./index-DDKfF0P0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BSbnBFaN.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
`,o.jsx(h,{})]})}function Y(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{Y as default};
