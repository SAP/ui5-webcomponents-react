import{j as o}from"./iframe-BohNpW-0.js";import{useMDXComponents as s}from"./index-CNs9TfzQ.js";import{M as i,C as m}from"./blocks-BlqU8BU6.js";import"./Tag-Cz53inHB.js";import"./index-DRrOOsA_.js";import{C as c}from"./ControlsWithNote-QGl7DIf2.js";import{D as a}from"./DocsHeader-CokbDgUt.js";import{F as d}from"./CommandsAndQueries-dvLT1dsP.js";import{C as r,D as t}from"./Popover.stories-r9emR_l-.js";import"./preload-helper-D9Z9MdNV.js";import"./information-Cnc3e4nW.js";import"./sys-enter-2-YVZ7RvKW.js";import"./alert-t6wYPrrQ.js";import"./index-ByPlsUCp.js";import"./index-DbSbZGAD.js";import"./Link-COIjIkbU.js";import"./copy-CU7ZgL8Y.js";import"./copy-CQ_htW6-.js";import"./GitHub-Mark-C90UNHWU.js";import"./TableOfContent-Dqpo1t13.js";import"./index-BoJlElCR.js";import"./index-0TDPNrCO.js";import"./addCustomCSSWithScoping-k_HNs7SN.js";import"./index-BPmVkbH6.js";import"./index-DMJ_2dM-.js";import"./index-RUOWoGP0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-E0sphTwG.js";import"./settings-BLCj6Ktd.js";import"./index-UheYK0zI.js";import"./index-BhN4dH-m.js";import"./ListItemStandard-CZXGuN1Y.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
