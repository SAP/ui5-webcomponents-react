import{j as o}from"./iframe-DXDeCCXH.js";import{useMDXComponents as s}from"./index-BVVJ9Xmn.js";import{M as i,C as m}from"./blocks-BG5MO-vk.js";import"./Tag-DzUeer7g.js";import"./index-BpNq_jfs.js";import{C as c}from"./ControlsWithNote-hJ8WC7xW.js";import{D as a}from"./DocsHeader-1wDTrNBL.js";import{F as d}from"./CommandsAndQueries-Dq5DBaAz.js";import{C as r,D as t}from"./ResponsivePopover.stories-BsFbDOks.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BWB8PmSI.js";import"./sys-enter-2-DsdlSsi2.js";import"./alert-DDgM_rg5.js";import"./index-CtGW4gqB.js";import"./index-DVXfqmRM.js";import"./Link-BdCp1PFu.js";import"./copy-Bp4cxNkh.js";import"./copy-WTqS65ha.js";import"./GitHub-Mark-DJyWkpqr.js";import"./TableOfContent-Cw9to3Gb.js";import"./index-Dr41l3ov.js";import"./index-B35aGJp7.js";import"./addCustomCSSWithScoping-pbauK9ix.js";import"./index-0UOQT5j_.js";import"./index-CgbMOzL5.js";import"./index-BBizv3Sp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DAjsaoK3.js";import"./index-RrE3NDfc.js";import"./index-BBJBR4cj.js";import"./ListItemStandard-B6LXITg6.js";import"./settings-D-aMw8C7.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
