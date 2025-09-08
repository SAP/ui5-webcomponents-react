import{j as o}from"./iframe-zpPFhmqz.js";import{useMDXComponents as s}from"./index-aGUGAxCn.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-q8Nphih1.js";import"./Tag-DF5VPs_L.js";import"./index-DBWFzhv7.js";import{C as x}from"./ControlsWithNote-JGjSe56-.js";import{D as u}from"./DocsHeader-CndVAY3u.js";import{F as h}from"./CommandsAndQueries-DoDYgPNU.js";import{C as n,D as r}from"./ColorPalettePopover.stories-Du5aiGsy.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BSNfyvF6.js";import"./preload-helper-D9Z9MdNV.js";import"./i18n-DCXZOGva.js";import"./information-BG3miSRm.js";import"./sys-enter-2-DUb0BHPN.js";import"./alert-DHhUa2Y-.js";import"./index-C9UnmKjh.js";import"./index-gkv542qS.js";import"./Link-Dx0W1V1U.js";import"./copy-CMd4rKCB.js";import"./copy-CsdqLzsD.js";import"./GitHub-Mark-CWEXDE9I.js";import"./TableOfContent-CoCY-HdJ.js";import"./index-DOk7cku9.js";import"./index-iS2pCHHF.js";import"./addCustomCSSWithScoping-welUcsP2.js";import"./index-6SGI919r.js";import"./index-DihSpOjx.js";import"./index-zsfuzf0m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CiKWeE0m.js";import"./ResponsivePopoverCommon.css-Cb1nsgmq.js";import"./query-CzSBusdE.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
