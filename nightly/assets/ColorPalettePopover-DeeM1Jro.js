import{j as o}from"./iframe-BZP9qxoJ.js";import{useMDXComponents as i}from"./index-CniPTHSz.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CNZWeGQ1.js";import"./Tag-BxyquP8A.js";import"./index-DxnggiYi.js";import{C as x}from"./ControlsWithNote-BMy8mcwg.js";import{D as u}from"./DocsHeader-C0PYfigg.js";import{F as h}from"./CommandsAndQueries-CtCNZgsU.js";import{C as n,D as r}from"./ColorPalettePopover.stories-0PP0dG5T.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BJ7Aedl7.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BmFtf2Jh.js";import"./sys-enter-2-s2PLeJyt.js";import"./alert-Cb0aonIe.js";import"./index--Vew3hXz.js";import"./index-xiFcJlxz.js";import"./Link-DSvye9Ik.js";import"./copy-DDKMzXcY.js";import"./copy-BNU1F6ls.js";import"./GitHub-Mark-DbVtln9l.js";import"./TableOfContent-HhhNHGfL.js";import"./index-C-1ECvAU.js";import"./index-Czg7RjtG.js";import"./addCustomCSSWithScoping-BBk-9-X7.js";import"./index-CD1m4nLu.js";import"./index-DwaE3Lty.js";import"./index-CT1vfvrt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-2WJXARYL.js";import"./ResponsivePopoverCommon.css--1qcCkZD.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
