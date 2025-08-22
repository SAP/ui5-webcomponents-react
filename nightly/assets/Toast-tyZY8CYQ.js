import{j as o}from"./iframe-B9d6tunA.js";import{useMDXComponents as i}from"./index-CHHTqEt5.js";import{M as p,C as a}from"./blocks-DMdqznu7.js";import"./Tag-Ct1r4fFU.js";import"./index-DEzdCF4t.js";import{C as m}from"./ControlsWithNote-D1sa-qp8.js";import{D as c}from"./DocsHeader-DjrY9cie.js";import{F as h}from"./CommandsAndQueries-Dbama0_5.js";import{C as s,D as e}from"./Toast.stories-CXYdNMju.js";import"./preload-helper-Ct5FWWRu.js";import"./information-Kos-K4Y7.js";import"./sys-enter-2-2u8y4JZ8.js";import"./alert-B9GFCC-E.js";import"./index-bjg2761A.js";import"./index-CqnSlkgh.js";import"./Link-DaaF9wPB.js";import"./copy-Dh8i6Ivn.js";import"./copy-DBcroaPr.js";import"./GitHub-Mark-BK_77KI2.js";import"./TableOfContent-BhxtiYa9.js";import"./index-cLcvGVFq.js";import"./index-q-GTYwsa.js";import"./addCustomCSSWithScoping-CmltSw6g.js";import"./index-OkovUTEs.js";import"./index-D_RM7Ke7.js";import"./index-iYjiT_bL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CvcqgxS_.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
