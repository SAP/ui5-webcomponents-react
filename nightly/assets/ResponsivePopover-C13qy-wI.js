import{j as o}from"./iframe-D47IesGI.js";import{useMDXComponents as s}from"./index-B-Cjj5vb.js";import{M as i,C as m}from"./blocks-DWAQQ6EB.js";import"./Tag-DyH9Q3dA.js";import"./index-Cj_ar6Qq.js";import{C as c}from"./ControlsWithNote-lj38sMRt.js";import{D as a}from"./DocsHeader-Wj_1zWhv.js";import{F as d}from"./CommandsAndQueries-BUssvnnv.js";import{C as r,D as t}from"./ResponsivePopover.stories-BJhGjTFy.js";import"./preload-helper-Ct5FWWRu.js";import"./information-GnhwVE2w.js";import"./sys-enter-2-FMcsLRqn.js";import"./alert-C1Bd-ATk.js";import"./index-BYtsHb6f.js";import"./index-D8NvhSag.js";import"./Link-Cbo0X0QC.js";import"./copy-BMTsvkwe.js";import"./copy-CpxPPhhd.js";import"./GitHub-Mark-DvefSS6H.js";import"./TableOfContent-WE_h0rfY.js";import"./index-CbWKu4dM.js";import"./index-CAoIqyrc.js";import"./addCustomCSSWithScoping-vO2X2B4L.js";import"./index-Dxtyr50j.js";import"./index-CfXTMk0G.js";import"./index-ibIc4r1j.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1XHFcI1P.js";import"./index-BFyflX6k.js";import"./index-CzfiA05G.js";import"./ListItemStandard-DxLrmdZY.js";import"./settings-D4RCu3f5.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
