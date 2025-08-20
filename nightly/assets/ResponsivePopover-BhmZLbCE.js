import{j as o}from"./iframe-CgMbHIkI.js";import{useMDXComponents as s}from"./index-uQo7cCLJ.js";import{M as i,C as m}from"./blocks-CFocqrsp.js";import"./Tag-Dk7X5Tny.js";import"./index-D54ieI7L.js";import{C as c}from"./ControlsWithNote-C7undRkV.js";import{D as a}from"./DocsHeader-3KR4B-u4.js";import{F as d}from"./CommandsAndQueries-BXDj4lkb.js";import{C as r,D as t}from"./ResponsivePopover.stories-D4XC9jSi.js";import"./preload-helper-Ct5FWWRu.js";import"./information-DgjoEc_K.js";import"./sys-enter-2-C0WM_GHK.js";import"./alert-wRxwDyfo.js";import"./index-B3DD2XIG.js";import"./index-Bjiw2xBb.js";import"./Link-BqFTwoRG.js";import"./copy-DmOSF1x-.js";import"./copy-Cpi-mOYC.js";import"./GitHub-Mark-Da3mmXpk.js";import"./TableOfContent-BTVE1HTf.js";import"./index-ChYBHoyi.js";import"./index-DXZ48uHs.js";import"./addCustomCSSWithScoping-B687qvo6.js";import"./index-8_dTlaSG.js";import"./index-pQs3Bm3D.js";import"./index-X0m3PPe8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CnkwV5Xd.js";import"./index-CwPWaTl1.js";import"./index-DrhVfMn_.js";import"./ListItemStandard-BdHlyVF_.js";import"./settings-1F-0BWTy.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
