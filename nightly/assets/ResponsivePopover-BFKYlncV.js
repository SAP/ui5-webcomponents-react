import{j as o}from"./iframe-DzQ21Lns.js";import{useMDXComponents as s}from"./index-BP8jxV1P.js";import{M as i,C as m}from"./blocks-DR2wB9AJ.js";import"./Tag-CfB46NJC.js";import"./index-CNaVfoQo.js";import{C as c}from"./ControlsWithNote-DxTvO-sr.js";import{D as a}from"./DocsHeader-tFSNOMKh.js";import{F as d}from"./CommandsAndQueries-BWveXsvx.js";import{C as r,D as t}from"./ResponsivePopover.stories-CSdVjxYv.js";import"./preload-helper-Ct5FWWRu.js";import"./information-Bnz4tjJE.js";import"./sys-enter-2-DRV3a-On.js";import"./alert-DWi3aqX2.js";import"./index-CkGGqXom.js";import"./index-C8zdSeJc.js";import"./Link-CPcAifXQ.js";import"./copy-DQaE8EBM.js";import"./copy-BGzgj4Bd.js";import"./GitHub-Mark-Bk_uBANR.js";import"./TableOfContent-BW0VJaG-.js";import"./index-CWnRvMMQ.js";import"./index-D59XTyXP.js";import"./addCustomCSSWithScoping-BaIeMpA3.js";import"./index-BWETmYtu.js";import"./index-DDsUDeX-.js";import"./index-HmtkbZU0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKgLP4oW.js";import"./index-CFL_93ON.js";import"./index-BhMasU6x.js";import"./ListItemStandard-Yc3QYJD2.js";import"./settings-CSLxx2dL.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-responsivepopovers",children:"Opening ResponsivePopovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"ResponsivePopover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <ResponsivePopover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(d,{})]})}function A(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{A as default};
