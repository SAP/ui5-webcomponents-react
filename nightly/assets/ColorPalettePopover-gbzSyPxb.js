import{j as o}from"./iframe-113A6qfG.js";import{useMDXComponents as i}from"./index-PjC7U6K4.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-D_3UdGcb.js";import"./Tag-DaeygpfO.js";import"./index-B2xOcofc.js";import{C as x}from"./ControlsWithNote-CbvkaQYM.js";import{D as u}from"./DocsHeader-CU4w8qUD.js";import{F as h}from"./CommandsAndQueries-Bg85p3au.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DU_hVpGf.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CX8BOt5_.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DODfC2QB.js";import"./sys-enter-2-CVSv3UIQ.js";import"./alert-UNIiqPMX.js";import"./index-CWWoZsv-.js";import"./index-AaWwOR4U.js";import"./Link-BPx9Yymb.js";import"./copy-D_4mWOai.js";import"./copy-CcIFyCHE.js";import"./GitHub-Mark-ChlT5k1t.js";import"./TableOfContent-DMFIwU4z.js";import"./index-CcdliY9D.js";import"./index-CnEBtXKD.js";import"./addCustomCSSWithScoping-x2rA9FdH.js";import"./index-BwzRPfoc.js";import"./index-DPN0DnRR.js";import"./index-nQhhjHf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D-4PiXj7.js";import"./ResponsivePopoverCommon.css-Q_FGcyNG.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
`,o.jsx(h,{})]})}function Q(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(s,{...t})}):s(t)}export{Q as default};
