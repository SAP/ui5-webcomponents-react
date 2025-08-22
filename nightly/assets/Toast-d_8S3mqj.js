import{j as o}from"./iframe-D47IesGI.js";import{useMDXComponents as i}from"./index-B-Cjj5vb.js";import{M as p,C as a}from"./blocks-DWAQQ6EB.js";import"./Tag-DyH9Q3dA.js";import"./index-Cj_ar6Qq.js";import{C as m}from"./ControlsWithNote-lj38sMRt.js";import{D as c}from"./DocsHeader-Wj_1zWhv.js";import{F as h}from"./CommandsAndQueries-BUssvnnv.js";import{C as s,D as e}from"./Toast.stories-BgAEEzGG.js";import"./preload-helper-Ct5FWWRu.js";import"./information-GnhwVE2w.js";import"./sys-enter-2-FMcsLRqn.js";import"./alert-C1Bd-ATk.js";import"./index-BYtsHb6f.js";import"./index-D8NvhSag.js";import"./Link-Cbo0X0QC.js";import"./copy-BMTsvkwe.js";import"./copy-CpxPPhhd.js";import"./GitHub-Mark-DvefSS6H.js";import"./TableOfContent-WE_h0rfY.js";import"./index-CbWKu4dM.js";import"./index-CAoIqyrc.js";import"./addCustomCSSWithScoping-vO2X2B4L.js";import"./index-Dxtyr50j.js";import"./index-CfXTMk0G.js";import"./index-ibIc4r1j.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1XHFcI1P.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
