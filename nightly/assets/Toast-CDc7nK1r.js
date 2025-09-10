import{j as o}from"./iframe-W4A4TPxI.js";import{useMDXComponents as i}from"./index-DR9mRC8k.js";import{M as p,C as a}from"./blocks-CEc_PJPw.js";import"./Tag-B3SXYcEs.js";import"./index-CRDes7m2.js";import{C as m}from"./ControlsWithNote-DJvfCr-6.js";import{D as c}from"./DocsHeader-BspJ71bI.js";import{F as h}from"./CommandsAndQueries-CqKi30YT.js";import{C as s,D as e}from"./Toast.stories-BVhfgc3X.js";import"./preload-helper-D9Z9MdNV.js";import"./information-C_inBRxK.js";import"./sys-enter-2-ROh50Nf_.js";import"./alert-D2pUXI9_.js";import"./index-DKRTY3p_.js";import"./index-Bdj3qaur.js";import"./Link-DvQFsPEt.js";import"./copy-CNHqT_CZ.js";import"./copy-ieRXWhTl.js";import"./GitHub-Mark-D8W3wBw0.js";import"./TableOfContent-C_C61g46.js";import"./index-BPEyrKJO.js";import"./index-BvnHswum.js";import"./addCustomCSSWithScoping-I8zpHlEs.js";import"./index-BhV1V4Z5.js";import"./index-lcn5JMDI.js";import"./index-COHjWP7e.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C9AqO2sR.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
