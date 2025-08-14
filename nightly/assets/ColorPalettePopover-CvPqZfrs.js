import{j as o}from"./iframe-DrWv7kqk.js";import{useMDXComponents as i}from"./index-COfklbz7.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CanskeDB.js";import"./Tag-BpxYU6SX.js";import"./index-C2As05th.js";import{C as x}from"./ControlsWithNote-CXKSYXdk.js";import{D as u}from"./DocsHeader-DLUHOqMs.js";import{F as h}from"./CommandsAndQueries-ChjYN9hd.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BLsOfQbX.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-yr2mZmEO.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BlWxhQJP.js";import"./sys-enter-2-yLdXaTo2.js";import"./alert-D-b4CjR7.js";import"./index-DJ9rRFX2.js";import"./index-WYl7sJsX.js";import"./Link-BXBCrxeL.js";import"./copy-BvaLSIQN.js";import"./copy-CdjvYQrK.js";import"./GitHub-Mark-BLcM84le.js";import"./TableOfContent-DXjPHaMB.js";import"./index-DNisCSrq.js";import"./index-BbYicUoT.js";import"./addCustomCSSWithScoping-BHseblXn.js";import"./index-BObiMDAc.js";import"./index-BK7UTMeJ.js";import"./index-wUQSbSJP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHbcK7Ba.js";import"./ResponsivePopoverCommon.css-D-NNNw7j.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
`,o.jsx(u,{of:n,since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:r}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:r}),`
`,o.jsx(e.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(e.p,{children:["You can open and close the ",o.jsx(e.code,{children:"ColorPalettePopover"})," component in a declarative way using the ",o.jsx(e.code,{children:"open"})," and ",o.jsx(e.code,{children:"opener"})," prop."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);
  const onButtonClick = (e) => {
    setShowPopover((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={onButtonClick}>
        Open ColorPalettePopover
      </Button>
      <ColorPalettePopover open={showPopover} opener={buttonRef.current}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o.jsx(l,{children:f}),`
`,o.jsx(e.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(d,{of:p}),`
`,o.jsx(h,{})]})}function K(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(s,{...t})}):s(t)}export{K as default};
