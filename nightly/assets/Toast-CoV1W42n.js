import{j as o}from"./iframe-4VeS9m_X.js";import{useMDXComponents as i}from"./index-DEI3eVkK.js";import{M as p,C as a}from"./blocks-CTNIJnm8.js";import"./Tag-DU1032-S.js";import"./index-CQXZWhIk.js";import{C as m}from"./ControlsWithNote-Cd4a9QE9.js";import{D as c}from"./DocsHeader-BBLwt-9L.js";import{F as h}from"./CommandsAndQueries-7kzg9PVA.js";import{C as s,D as e}from"./Toast.stories-CKNQYA4s.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BYyVv8hA.js";import"./sys-enter-2-Yi--Cxct.js";import"./alert-BELJhRBR.js";import"./index-CftSo41I.js";import"./index-CzN5fyXT.js";import"./Link-DgF00I8w.js";import"./copy-CeAEX2cb.js";import"./copy-jnb9sYPg.js";import"./GitHub-Mark-ofnBKzQ-.js";import"./TableOfContent-CuT-m9D7.js";import"./index-C8P7iKVZ.js";import"./index-C9GlwG2P.js";import"./addCustomCSSWithScoping-XwuX-cd5.js";import"./index-DWv4GmHu.js";import"./index-yUZ2I_oB.js";import"./index-BlbvU_99.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xOI-l5fg.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
