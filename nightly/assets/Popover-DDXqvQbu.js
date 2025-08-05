import{j as o}from"./iframe-CS0WNVf3.js";import{useMDXComponents as s}from"./index-DDJWQvBk.js";import{M as i,C as m}from"./blocks-CKA1zSBc.js";import"./Tag-BP97hCxl.js";import"./index-DSXhn2lw.js";import{C as c}from"./ControlsWithNote-BQ2uotKo.js";import{D as a}from"./DocsHeader-D11tTFdv.js";import{F as d}from"./CommandsAndQueries-DZ6pwvzq.js";import"./WrappingType-BBpR8qCJ.js";import{C as r,D as t}from"./Popover.stories-DMiwuhih.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CvdaSHT3.js";import"./sys-enter-2-ySqjHw_c.js";import"./alert-Gh91-OFF.js";import"./index-CvNKNR4d.js";import"./index-BaMTSIaX.js";import"./Link-NB8Z-JgQ.js";import"./copy-JmzkmJ0Q.js";import"./copy-BAUFdAAv.js";import"./GitHub-Mark-7sJAyAvv.js";import"./TableOfContent-CIMB7FlB.js";import"./index-6Qc8M-Ay.js";import"./index-DF926y_l.js";import"./addCustomCSSWithScoping-C76Rlx9D.js";import"./index-DAA990cp.js";import"./index-CSbnywRm.js";import"./index-DDKfF0P0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BSbnBFaN.js";import"./settings-DnXx7g7P.js";import"./index-DGoD02kv.js";import"./index-YClhRCxe.js";import"./ListItemStandard-BH1fH6pr.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
`,o.jsx(d,{})]})}function G(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{G as default};
