import{j as o}from"./iframe-DzQ21Lns.js";import{useMDXComponents as i}from"./index-BP8jxV1P.js";import{M as p,C as a}from"./blocks-DR2wB9AJ.js";import"./Tag-CfB46NJC.js";import"./index-CNaVfoQo.js";import{C as m}from"./ControlsWithNote-DxTvO-sr.js";import{D as c}from"./DocsHeader-tFSNOMKh.js";import{F as h}from"./CommandsAndQueries-BWveXsvx.js";import{C as s,D as e}from"./Toast.stories-BK16krGH.js";import"./preload-helper-Ct5FWWRu.js";import"./information-Bnz4tjJE.js";import"./sys-enter-2-DRV3a-On.js";import"./alert-DWi3aqX2.js";import"./index-CkGGqXom.js";import"./index-C8zdSeJc.js";import"./Link-CPcAifXQ.js";import"./copy-DQaE8EBM.js";import"./copy-BGzgj4Bd.js";import"./GitHub-Mark-Bk_uBANR.js";import"./TableOfContent-BW0VJaG-.js";import"./index-CWnRvMMQ.js";import"./index-D59XTyXP.js";import"./addCustomCSSWithScoping-BaIeMpA3.js";import"./index-BWETmYtu.js";import"./index-DDsUDeX-.js";import"./index-HmtkbZU0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKgLP4oW.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
