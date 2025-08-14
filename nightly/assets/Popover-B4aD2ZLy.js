import{j as o}from"./iframe-Ckbc0Bmx.js";import{useMDXComponents as s}from"./index-DE-5xG9A.js";import{M as i,C as m}from"./blocks-D8tYWjnn.js";import"./Tag-rdyPterE.js";import"./index-Darg-j2X.js";import{C as c}from"./ControlsWithNote-DLVwlFtc.js";import{D as a}from"./DocsHeader-BLzJKU0S.js";import{F as d}from"./CommandsAndQueries-DKucLITF.js";import{C as r,D as t}from"./Popover.stories-DNZQAFxM.js";import"./preload-helper-Ct5FWWRu.js";import"./information-OBfwqURu.js";import"./sys-enter-2-BD7M3cvb.js";import"./alert-j4aUIFXI.js";import"./index-CuHvomlB.js";import"./index-CzMZkzJI.js";import"./Link-D1WHOsxc.js";import"./copy-DgE2YH3h.js";import"./copy-B7_DIIST.js";import"./GitHub-Mark-9fjhK1SO.js";import"./TableOfContent-BEHGMBJ6.js";import"./index-CrFxuHUZ.js";import"./index-COfW_OVU.js";import"./addCustomCSSWithScoping-Cf-O7l9b.js";import"./index-usyep8x_.js";import"./index-fzfaunU7.js";import"./index-C-9s8bgZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-oJ-6Sn3x.js";import"./settings-sexh0hZI.js";import"./index-BYR58szb.js";import"./index-H2RtG6-s.js";import"./ListItemStandard-C6lS1XXD.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
