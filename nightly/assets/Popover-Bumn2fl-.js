import{j as o}from"./iframe-D9TrNBgU.js";import{useMDXComponents as s}from"./index-DVnXt3Ou.js";import{M as i,C as m}from"./blocks-CZTCdXhi.js";import"./Tag-Dxsn5xSE.js";import"./index-BNvAHmYG.js";import{C as c}from"./ControlsWithNote-CSjZ13nD.js";import{D as a}from"./DocsHeader-0Jjxl0tR.js";import{F as d}from"./CommandsAndQueries-D4YJbg3c.js";import{C as r,D as t}from"./Popover.stories-CAnjbKsn.js";import"./preload-helper-Ct5FWWRu.js";import"./information-Dq_NLOBW.js";import"./sys-enter-2-BRxN4trI.js";import"./alert-BYqnAs_s.js";import"./index-CVrKfxdZ.js";import"./index-X8OlRuzo.js";import"./Link-BksfT5MZ.js";import"./copy-idIQo1yB.js";import"./copy-DLBvKbOK.js";import"./GitHub-Mark-CR-XH0WA.js";import"./TableOfContent-Bm0N_0e1.js";import"./index-mrCdGkzC.js";import"./index-CUfd_MNc.js";import"./addCustomCSSWithScoping-CilyEzf4.js";import"./index-4yoZlSR7.js";import"./index-L-4di-4u.js";import"./index-DFqe2H1-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C7V4inOY.js";import"./settings-CxnE-5K_.js";import"./index-CUBqq7rX.js";import"./index-BL5y2Z3x.js";import"./ListItemStandard-DbZzwl2a.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
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
      <Popover
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
