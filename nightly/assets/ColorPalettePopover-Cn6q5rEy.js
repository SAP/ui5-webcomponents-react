import{j as o}from"./iframe-Dh5R3sl2.js";import{useMDXComponents as s}from"./index-D0kyY75e.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-IuY-WHWo.js";import"./Tag-lLVMTbba.js";import"./index-DuupinLA.js";import{C as x}from"./ControlsWithNote-CkzOSnbR.js";import{D as u}from"./DocsHeader-C10mQrqO.js";import{F as h}from"./CommandsAndQueries-YFNvLEil.js";import{C as n,D as r}from"./ColorPalettePopover.stories-at7DYm3S.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-q_7KS53J.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DCXZOGva.js";import"./information-1k13pukw.js";import"./sys-enter-2-Bg-xb7Sg.js";import"./alert-D22kL76Q.js";import"./index-jqGKriQv.js";import"./index-B_8MBugC.js";import"./Link-DL-0s2QE.js";import"./copy-DtvrOkiW.js";import"./copy-DlGd5HR3.js";import"./GitHub-Mark-TQJ1TPXd.js";import"./TableOfContent-DG2LFSrm.js";import"./index-yFvmPqI1.js";import"./index-C6B4Jvhh.js";import"./addCustomCSSWithScoping-BFt5ScaE.js";import"./index-CiXXffOm.js";import"./index-BasyJdtx.js";import"./index-U9nJPHWS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ck5sFlQM.js";import"./ResponsivePopoverCommon.css-CxqRSEww.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
`,o.jsx(h,{})]})}function U(t={}){const{wrapper:e}={...s(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{U as default};
