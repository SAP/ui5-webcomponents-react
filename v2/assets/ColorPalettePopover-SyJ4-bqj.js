import{j as o}from"./iframe-CMv2_fr8.js";import{useMDXComponents as i}from"./index-BCZO-1se.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BHuPuGEP.js";import"./Tag-BXu5WVYZ.js";import"./index-CpCRQT6a.js";import{C as x}from"./ControlsWithNote-_PUNWkdQ.js";import{D as u}from"./DocsHeader-Cx6Y1JDI.js";import{F as h}from"./CommandsAndQueries-UgVWTBkO.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CeYYhFUT.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-hSoc7P9b.js";import"./preload-helper-Ct5FWWRu.js";import"./information-BShdYbhS.js";import"./sys-enter-2-BEffbqcW.js";import"./alert-BYv4QL7b.js";import"./index-51EQIK1-.js";import"./index-CZyHaD1B.js";import"./Link-BYFyz2lz.js";import"./copy-ujimQgxv.js";import"./copy-Bp5geyDe.js";import"./GitHub-Mark-BaSZHoZf.js";import"./TableOfContent-CaCWTgrs.js";import"./index-BP5Wh9d8.js";import"./index-mbEJ-Zu7.js";import"./addCustomCSSWithScoping-CYxRppwU.js";import"./index-wL9CVecO.js";import"./index-S6ZiGY2w.js";import"./index-A1613AR-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-9_zKWd9C.js";import"./ResponsivePopoverCommon.css-TrKPArzz.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
