import{j as o}from"./iframe-4VeS9m_X.js";import{useMDXComponents as s}from"./index-DEI3eVkK.js";import{M as i,C as m}from"./blocks-CTNIJnm8.js";import"./Tag-DU1032-S.js";import"./index-CQXZWhIk.js";import{C as c}from"./ControlsWithNote-Cd4a9QE9.js";import{D as a}from"./DocsHeader-BBLwt-9L.js";import{F as d}from"./CommandsAndQueries-7kzg9PVA.js";import{C as r,D as t}from"./ResponsivePopover.stories-avHrXIkR.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BYyVv8hA.js";import"./sys-enter-2-Yi--Cxct.js";import"./alert-BELJhRBR.js";import"./index-CftSo41I.js";import"./index-CzN5fyXT.js";import"./Link-DgF00I8w.js";import"./copy-CeAEX2cb.js";import"./copy-jnb9sYPg.js";import"./GitHub-Mark-ofnBKzQ-.js";import"./TableOfContent-CuT-m9D7.js";import"./index-C8P7iKVZ.js";import"./index-C9GlwG2P.js";import"./addCustomCSSWithScoping-XwuX-cd5.js";import"./index-DWv4GmHu.js";import"./index-yUZ2I_oB.js";import"./index-BlbvU_99.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xOI-l5fg.js";import"./index-BLK2G4j5.js";import"./index-BLDjATDM.js";import"./ListItemStandard-Ccnky39J.js";import"./settings-Dh1N9l9x.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
