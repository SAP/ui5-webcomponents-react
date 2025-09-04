import{j as o}from"./iframe-BGPLLWda.js";import{useMDXComponents as s}from"./index-CUo1Jk3b.js";import{M as i,C as m}from"./blocks-indAdCXu.js";import"./Tag-BJtvEZ6A.js";import"./index-CQHuRrhk.js";import{C as c}from"./ControlsWithNote-DwWmOGGJ.js";import{D as a}from"./DocsHeader-D7mFShSZ.js";import{F as d}from"./CommandsAndQueries-CMwJiC-3.js";import{C as r,D as t}from"./ResponsivePopover.stories-DQNXq_TM.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DSpjDgSK.js";import"./information-CN6qajRX.js";import"./sys-enter-2-DEzg8GhV.js";import"./alert-CDWQg-Kt.js";import"./index-BUzvoCUF.js";import"./index-DxdciquJ.js";import"./Link-7mG2PaxS.js";import"./copy-BRDDe_qs.js";import"./copy-BU9AAITa.js";import"./GitHub-Mark-DhRpczTj.js";import"./TableOfContent-JH4ytLq7.js";import"./index-BYQsmpt9.js";import"./index-DatG_EGp.js";import"./addCustomCSSWithScoping-C37q5SY_.js";import"./index-Bm9Gzw8H.js";import"./index-7SSPTye2.js";import"./index-DkEMFegB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bg9viRhL.js";import"./index-C5SS4mkA.js";import"./index-I4ELerEx.js";import"./ListItemStandard-gVzTb5tv.js";import"./settings-CFgijcO_.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
`,o.jsx(d,{})]})}function G(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{G as default};
