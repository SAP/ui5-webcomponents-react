import{j as o}from"./iframe-DvixYE7k.js";import{useMDXComponents as i}from"./index-DvcP8w-F.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CTAO90yM.js";import"./Tag-CHowEnLY.js";import"./index-BGjL_ZJV.js";import{C as x}from"./ControlsWithNote-s_60twtr.js";import{D as u}from"./DocsHeader-BkkmtBJn.js";import{F as h}from"./CommandsAndQueries-BP59pkyc.js";import{C as n,D as r}from"./ColorPalettePopover.stories-D9D9L3aR.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-bsIJoyYC.js";import"./preload-helper-Dp1pzeXC.js";import"./information-DqheYlV4.js";import"./sys-enter-2-BLeP8wjL.js";import"./alert-B0APzi3M.js";import"./index-BiNCRTue.js";import"./index-hGAVIlM2.js";import"./Link-BZF4G3GW.js";import"./copy-BSDmbcVi.js";import"./copy-CVzsP6l9.js";import"./GitHub-Mark-1hS7OttQ.js";import"./TableOfContent-gAqVWuC4.js";import"./index-YgXxfA7L.js";import"./index-DPl_fZ6u.js";import"./addCustomCSSWithScoping-OBYOAhu2.js";import"./index-Cr8nZe2E.js";import"./index-C2AvZkZh.js";import"./index-_TUZ2Dv_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJ4BRfb7.js";import"./ResponsivePopoverCommon.css-B5iSbHgX.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
