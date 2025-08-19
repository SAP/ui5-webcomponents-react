import{j as o}from"./iframe-CvU-07By.js";import{useMDXComponents as s}from"./index-DIsCDPQO.js";import{M as i,C as m}from"./blocks-C4k1N9hK.js";import"./Tag-ZBoRMHPo.js";import"./index-DM6nouM-.js";import{C as c}from"./ControlsWithNote-W2TrAeTD.js";import{D as a}from"./DocsHeader-C6jg0uux.js";import{F as d}from"./CommandsAndQueries-DbBqwiyb.js";import{C as r,D as t}from"./Popover.stories-DUIWZxaY.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BzMTjAO7.js";import"./sys-enter-2-q6_NKbGq.js";import"./alert-BRr8PNkH.js";import"./index-DyAIHHB4.js";import"./index-CeymlHoz.js";import"./Link-BhwO4QDY.js";import"./copy-OdRqSv6G.js";import"./copy-TKggWaTM.js";import"./GitHub-Mark-BJRBSu9w.js";import"./TableOfContent-CxFbZHfF.js";import"./index-CrApm23D.js";import"./index-BIUdNoj4.js";import"./addCustomCSSWithScoping-KQt9PdZP.js";import"./index-gFOSdjyI.js";import"./index-BYwB_T6k.js";import"./index-BDAVJKqV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BXaptZ3Y.js";import"./settings-Cz4b_CQ9.js";import"./index-CoUCTNoo.js";import"./index-D3k1OHd9.js";import"./ListItemStandard-B9CyfjI3.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
