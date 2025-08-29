import{j as o}from"./iframe-D7jNN5F7.js";import{useMDXComponents as s}from"./index-DKysAdcf.js";import{M as i,C as m}from"./blocks-CKVkbQ2U.js";import"./Tag-B3C9nXYY.js";import"./index-CnuyuUF_.js";import{C as c}from"./ControlsWithNote-E5ssFwis.js";import{D as a}from"./DocsHeader-BTZUlQMm.js";import{F as d}from"./CommandsAndQueries-B3x-n25L.js";import{C as r,D as t}from"./ResponsivePopover.stories-BpclehZE.js";import"./preload-helper-Ct5FWWRu.js";import"./information-fEhQ27Xq.js";import"./sys-enter-2-BHUDT81N.js";import"./alert-dGaMHbZ_.js";import"./index-C3oU0sTK.js";import"./index-DKghAgRr.js";import"./Link-qldH56b9.js";import"./copy-Dndk5unU.js";import"./copy-DjcHAfNd.js";import"./GitHub-Mark-C0A6whC2.js";import"./TableOfContent-DsCXo-br.js";import"./index-DpTP8YTk.js";import"./index-BhDv_qjx.js";import"./addCustomCSSWithScoping-CHnl0xaL.js";import"./index-CjFbPK-F.js";import"./index-Cmma790X.js";import"./index-D08PdQRZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CHZuE3Bl.js";import"./index-B6ReJZeR.js";import"./index-DmxdgylF.js";import"./ListItemStandard-BWHZOOaU.js";import"./settings-ooRwGldT.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
