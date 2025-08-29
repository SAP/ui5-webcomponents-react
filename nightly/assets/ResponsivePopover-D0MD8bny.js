import{j as o}from"./iframe-B3OL0dJj.js";import{useMDXComponents as s}from"./index-BacKYjfx.js";import{M as i,C as m}from"./blocks-DWSkzL_O.js";import"./Tag-Cz9uoO3f.js";import"./index-ICQad1Jx.js";import{C as c}from"./ControlsWithNote-NJa_WyLA.js";import{D as a}from"./DocsHeader-B8uuK2Lh.js";import{F as d}from"./CommandsAndQueries-CF0BaiA4.js";import{C as r,D as t}from"./ResponsivePopover.stories-B5mj4T0o.js";import"./preload-helper-Ct5FWWRu.js";import"./information-CsT7qq8I.js";import"./sys-enter-2-C6eVrxWF.js";import"./alert-D4Iro2pT.js";import"./index-DpJD6crE.js";import"./index-BM-Dt4Ms.js";import"./Link-B3I1DK3y.js";import"./copy-C3Umbx15.js";import"./copy-BIhehpav.js";import"./GitHub-Mark-dwT1QLL6.js";import"./TableOfContent-CGezDL28.js";import"./index-D7xFIu9y.js";import"./index-bmuDs-E9.js";import"./addCustomCSSWithScoping-QT3VtH-b.js";import"./index-Cl7-VWhy.js";import"./index-BB1lQngG.js";import"./index-BvBfHyAK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DdVXj32r.js";import"./index-BKTQiEpx.js";import"./index-Nwxrqq1G.js";import"./ListItemStandard-C5poq4N5.js";import"./settings-omjh2iI4.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
