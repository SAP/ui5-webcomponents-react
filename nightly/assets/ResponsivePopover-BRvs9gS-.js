import{j as o}from"./iframe-Ds_ksB4e.js";import{useMDXComponents as s}from"./index-H-IHaXTw.js";import{M as i,C as m}from"./blocks-BF1agP19.js";import"./Tag-CPZT7-Kj.js";import"./index-CCQ7ngcv.js";import{C as c}from"./ControlsWithNote-COl1xdrJ.js";import{D as a}from"./DocsHeader-CZukLoy9.js";import{F as d}from"./CommandsAndQueries-sjInqy8W.js";import{C as r,D as t}from"./ResponsivePopover.stories-BEodmLhq.js";import"./preload-helper-Ct5FWWRu.js";import"./information-CXQdNqP2.js";import"./sys-enter-2-DgaAD1QG.js";import"./alert-D9-5boQa.js";import"./index-BveKVBSZ.js";import"./index-CCxnn_jg.js";import"./Link-B7c1MguO.js";import"./copy-FKcCl74u.js";import"./copy-CiclUpSF.js";import"./GitHub-Mark-BUFcyxFx.js";import"./TableOfContent-CNAJZVUt.js";import"./index-C9iUZPx4.js";import"./index-Cz-9QImp.js";import"./addCustomCSSWithScoping-C1wNASBp.js";import"./index-BeCgQ8PU.js";import"./index-De0nbQnW.js";import"./index-D0B9W_Us.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B1VftYSW.js";import"./index-pDSMu31p.js";import"./index-p-B7Vzdn.js";import"./ListItemStandard-D3h_gJ31.js";import"./settings-DsdB8amV.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
