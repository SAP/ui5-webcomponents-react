import{j as o}from"./iframe-S1rR11cQ.js";import{useMDXComponents as i}from"./index-69KsrxW4.js";import{M as p,C as a}from"./blocks-C1kWdW5O.js";import"./Tag-Do4MK6Vd.js";import"./index-DjdMAx9G.js";import{C as m}from"./ControlsWithNote-CHK256Ms.js";import{D as c}from"./DocsHeader-DFJ6mRj_.js";import{F as h}from"./CommandsAndQueries-7fbj5dZq.js";import{C as s,D as e}from"./Toast.stories-CRoAk_bC.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DSpjDgSK.js";import"./information-C758TG9J.js";import"./sys-enter-2-Bxoe1Z_o.js";import"./alert-DLQYOv1s.js";import"./index-BO-Ud12y.js";import"./index-FsTu0RwH.js";import"./Link-BTk9MhA4.js";import"./copy-l8_6TPqW.js";import"./copy-DEUCxjzs.js";import"./GitHub-Mark-DiNZwmzT.js";import"./TableOfContent-Ckuc7xPL.js";import"./index-qWGPhuwe.js";import"./index-0zwvIbNd.js";import"./addCustomCSSWithScoping-B4lS8qF3.js";import"./index-BuHsyiL7.js";import"./index-PoS1N3ma.js";import"./index-R5oM6KDO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cn53W7lk.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
