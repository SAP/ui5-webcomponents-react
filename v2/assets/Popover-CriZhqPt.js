import{j as o}from"./iframe-wtGyowSu.js";import{useMDXComponents as s}from"./index-CZZ2_hDJ.js";import{M as i,C as m}from"./blocks-DOUzMh6P.js";import"./Tag-CF7bcptF.js";import"./index-DemLuH5_.js";import{C as c}from"./ControlsWithNote-BoV20cXi.js";import{D as a}from"./DocsHeader-WzDk4VE4.js";import{F as d}from"./CommandsAndQueries-DQ0OWp_s.js";import{C as r,D as t}from"./Popover.stories-C_3d_6U_.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DCXZOGva.js";import"./information-B0VTD8Pg.js";import"./sys-enter-2-CvQEzb10.js";import"./alert-Cef964mc.js";import"./index-CR8pF6-t.js";import"./index-KwEy5gb6.js";import"./Link-BV0lLBLc.js";import"./copy-DVo64Gt3.js";import"./copy-fNgmErhy.js";import"./GitHub-Mark-ctp-7qxM.js";import"./TableOfContent-BzO31W1S.js";import"./index-BFewsKyD.js";import"./index-CJ5u_hE4.js";import"./addCustomCSSWithScoping-Bg0OR_5Z.js";import"./index-CeuGV1sB.js";import"./index-klURHLLt.js";import"./index-WPEP5BQu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BeC7vZ35.js";import"./settings-BhXfmtZo.js";import"./index-5w_GDQTo.js";import"./index-UHr40Gn7.js";import"./ListItemStandard-B54pPtmm.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
