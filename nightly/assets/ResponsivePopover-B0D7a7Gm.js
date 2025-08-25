import{j as o}from"./iframe-Y9u60a80.js";import{useMDXComponents as s}from"./index-Bori-Nod.js";import{M as i,C as m}from"./blocks-C6Tkp4w5.js";import"./Tag-CuXUrZqk.js";import"./index-CpV662zw.js";import{C as c}from"./ControlsWithNote-laTaCTcY.js";import{D as a}from"./DocsHeader-1K3Kbib7.js";import{F as d}from"./CommandsAndQueries-eYIoXNgT.js";import{C as r,D as t}from"./ResponsivePopover.stories-Ds9ICJIO.js";import"./preload-helper-Ct5FWWRu.js";import"./information-CTNCAXjf.js";import"./sys-enter-2-74mIu9T9.js";import"./alert-BGr6HL7r.js";import"./index-BUCogs4k.js";import"./index-CUsGpwJ8.js";import"./Link-BOuAWn99.js";import"./copy-bzJkQwnc.js";import"./copy-DwFBIccM.js";import"./GitHub-Mark-BeVgJP-S.js";import"./TableOfContent-C0xGCGUb.js";import"./index-mYcBdhJ9.js";import"./index-Pi4X_Zbo.js";import"./addCustomCSSWithScoping-CQXmy_CC.js";import"./index-C29vYmbK.js";import"./index-D4D-S1j7.js";import"./index-CGgIhjAE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKtovAer.js";import"./index-DNNFbTMo.js";import"./index-DqWK6Liw.js";import"./ListItemStandard-BKYvsgaA.js";import"./settings-DuH9YHsU.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
