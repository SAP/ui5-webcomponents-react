import{j as o}from"./iframe-W4A4TPxI.js";import{useMDXComponents as i}from"./index-DR9mRC8k.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CEc_PJPw.js";import"./Tag-B3SXYcEs.js";import"./index-CRDes7m2.js";import{C as x}from"./ControlsWithNote-DJvfCr-6.js";import{D as u}from"./DocsHeader-BspJ71bI.js";import{F as h}from"./CommandsAndQueries-CqKi30YT.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DIIbOJm2.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-tt0UFCWs.js";import"./preload-helper-D9Z9MdNV.js";import"./information-C_inBRxK.js";import"./sys-enter-2-ROh50Nf_.js";import"./alert-D2pUXI9_.js";import"./index-DKRTY3p_.js";import"./index-Bdj3qaur.js";import"./Link-DvQFsPEt.js";import"./copy-CNHqT_CZ.js";import"./copy-ieRXWhTl.js";import"./GitHub-Mark-D8W3wBw0.js";import"./TableOfContent-C_C61g46.js";import"./index-BPEyrKJO.js";import"./index-BvnHswum.js";import"./addCustomCSSWithScoping-I8zpHlEs.js";import"./index-BhV1V4Z5.js";import"./index-lcn5JMDI.js";import"./index-COHjWP7e.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C9AqO2sR.js";import"./ResponsivePopoverCommon.css-BiB47G1s.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
