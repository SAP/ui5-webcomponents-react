import{j as o}from"./iframe-BxIaMIJ2.js";import{useMDXComponents as s}from"./index-DTW9WkuG.js";import{M as i,C as m}from"./blocks-CHJsxz9e.js";import"./Tag-exOiuXi7.js";import"./index-CiOOHqpr.js";import{C as c}from"./ControlsWithNote-CyUf3Fee.js";import{D as a}from"./DocsHeader-D_5koftR.js";import{F as d}from"./CommandsAndQueries-Di8bJMhG.js";import{C as r,D as t}from"./Popover.stories-DT_NaX7P.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DrVbI7V6.js";import"./sys-enter-2-CxxS0S6m.js";import"./alert-gJnafO72.js";import"./index-BrdrQHC3.js";import"./index-ozaXSakq.js";import"./Link-6ZN5XN7_.js";import"./copy-gK8ePznw.js";import"./copy-DC4VamtM.js";import"./GitHub-Mark-RxYM8RNf.js";import"./TableOfContent-CjHG1HZ_.js";import"./index-2yLOC2-7.js";import"./index-BSQj9ICh.js";import"./addCustomCSSWithScoping-BJIJHA0f.js";import"./index-DGNtnQKj.js";import"./index-RGR4m0WA.js";import"./index-DiLVqziG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQcSYUZ6.js";import"./settings-z3Kqv_H_.js";import"./index-C38ppj6_.js";import"./index-CSVTtRtP.js";import"./ListItemStandard-xKwcd7x4.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
