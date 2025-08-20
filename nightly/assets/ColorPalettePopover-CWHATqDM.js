import{j as o}from"./iframe-Plj9L4DO.js";import{useMDXComponents as i}from"./index-uN80YAVR.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CBjnjgp2.js";import"./Tag-Chhqj61J.js";import"./index-TPF4FnDa.js";import{C as x}from"./ControlsWithNote-BUu8k3dE.js";import{D as u}from"./DocsHeader-gHpZDn-5.js";import{F as h}from"./CommandsAndQueries-BWyKkggu.js";import{C as n,D as r}from"./ColorPalettePopover.stories-DBu3M2Fi.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BU4WHGfi.js";import"./preload-helper-Ct5FWWRu.js";import"./information-gWqn0Y75.js";import"./sys-enter-2-CA_27ms1.js";import"./alert-p9YyGNnM.js";import"./index-B6F36pGT.js";import"./index-B4Ji1mzc.js";import"./Link-BaW3AGMM.js";import"./copy-9NjNiENk.js";import"./copy-DLXELO5k.js";import"./GitHub-Mark-Dn5luEEb.js";import"./TableOfContent-awrCgv2Y.js";import"./index-DdhKX7PQ.js";import"./index-BQrHmUPn.js";import"./addCustomCSSWithScoping-DiURvOzS.js";import"./index-q1UVXeS8.js";import"./index-8rr5Mrdg.js";import"./index-B8knOcBx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vnxFP9T5.js";import"./ResponsivePopoverCommon.css-DCdKvyYg.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
