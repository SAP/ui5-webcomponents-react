import{j as o}from"./iframe-L-onm66G.js";import{useMDXComponents as s}from"./index-B-8X1idt.js";import{M as i,C as m}from"./blocks-CAXm6uro.js";import"./Tag-o6hxXhYX.js";import"./index-Dko-x7sv.js";import{C as c}from"./ControlsWithNote-D5F52cI6.js";import{D as a}from"./DocsHeader-Bj35IjP-.js";import{F as d}from"./CommandsAndQueries-CjMnaUpZ.js";import{C as r,D as t}from"./Popover.stories-DGnt1f82.js";import"./preload-helper-D9Z9MdNV.js";import"./information-IlAVq7Cq.js";import"./sys-enter-2-CVLUP2WD.js";import"./alert-DwHKgn-N.js";import"./index-8n5QiMPz.js";import"./index-CLaX2vCd.js";import"./Link-CoryH5zD.js";import"./copy-BLNNZART.js";import"./copy-CyGTlTXm.js";import"./GitHub-Mark-BiOcy1h9.js";import"./TableOfContent-Cd4BpqKW.js";import"./index-JuCVJ27S.js";import"./index-CQskOaEx.js";import"./addCustomCSSWithScoping-t6gTkkzF.js";import"./index-DT1EUYqc.js";import"./index-BHqaG8Gu.js";import"./index-ChEZQsiK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D-TcA8Vj.js";import"./settings-BSMVF4P8.js";import"./index-Dvts4QuH.js";import"./index-0iYZ-1q5.js";import"./ListItemStandard-B_8XW66x.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
