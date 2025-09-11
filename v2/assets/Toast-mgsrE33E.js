import{j as o}from"./iframe-Dxtd3Za_.js";import{useMDXComponents as i}from"./index-DCsMWBUP.js";import{M as p,C as a}from"./blocks-CGoS-OC2.js";import"./Tag-2V4Q7cMJ.js";import"./index-DFbKywCe.js";import{C as m}from"./ControlsWithNote-3BXdewA3.js";import{D as c}from"./DocsHeader-CO79EmO_.js";import{F as h}from"./CommandsAndQueries-Bz3F9tKI.js";import{C as s,D as e}from"./Toast.stories-BPF4hPSi.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DIBbce7d.js";import"./sys-enter-2-G2_64HTd.js";import"./alert-DwCbeozZ.js";import"./index-DCNonR1q.js";import"./index-C_oxkJx9.js";import"./Link-BJCTkcGT.js";import"./copy-B8UVJgM5.js";import"./copy-BvP7Hkk1.js";import"./GitHub-Mark-B89QRxgx.js";import"./TableOfContent-DBHLjhyw.js";import"./index-BLmvSYxU.js";import"./index-BJ_zprMk.js";import"./addCustomCSSWithScoping-DDKOktfB.js";import"./index-Ul1D90OH.js";import"./index-V59EODhb.js";import"./index-Cb1r7zf9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_3v8Ndp.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
