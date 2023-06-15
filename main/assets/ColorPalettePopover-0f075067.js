import{j as o}from"./jsx-runtime-5926aa06.js";import{M as s,d as a,C as l,a as n,A as c}from"./DomRefTable.module-6076c75b.js";import{D as d}from"./DocsHeader-e5da24e3.js";import{F as h}from"./Footer-8ab0d6b4.js";import"./index-ebeaab24.js";import{D as x}from"./DomRefTable-3b2812fa.js";import{C as j,D as p}from"./ColorPalettePopover.stories-7185305d.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{C}from"./ColorPaletteItemDescription-934d5448.js";import{C as u}from"./index-24f8bb5f.js";import{u as m}from"./index-bda0bad7.js";import"./chunk-PCJTTTQV-0876ad95.js";import"./iframe-e0c5cf8c.js";import"../sb-preview/runtime.js";import"./client-d4c2b4b3.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-800a0312.js";import"./mapValues-2c1e4f64.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./react-jss.esm-022ab528.js";import"./index-bfca69ed.js";import"./UI5Element-2e105c8a.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-1927e688.js";import"./Icons-fe8ad928.js";import"./decline-76de6b04.js";import"./i18n-defaults-80781f7e.js";import"./information-bc6b0940.js";import"./class-map-6a9bd920.js";import"./Button-a741ea37.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-2f9956dc.js";import"./index-b9e92427.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-06c3551e.js";import"./index-5adc43b7.js";import"./Link-92895189.js";import"./WrappingType-b81e595a.js";import"./index-4608349c.js";import"./Label-51e84534.js";import"./index-a2f5c8f7.js";import"./Popover-898d0a68.js";import"./Integer-f7f172c9.js";import"./PopupUtils-2e0c5ac0.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-0f627f88.js";import"./FocusableElements-d8460590.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-267f9e5d.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./index-6827276e.js";import"./CSSColor-f91c8158.js";import"./ResponsivePopoverCommon.css-67fc1c09.js";import"./Title-4b970c0e.js";import"./ResponsivePopover-cca20b42.js";import"./Dialog-335e5eae.js";import"./ValueState-2c5e5904.js";import"./ItemNavigation-e091c48d.js";const P=[{name:"openPopover",visibility:"public",since:"1.0.0-rc.16",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover. <b>Note:</b> The method is deprecated and will be removed in future, use <code>showAt</code> instead.",deprecated:{text:"The method is deprecated in favour of <code>showAt</code>."}},{name:"showAt",visibility:"public",since:"1.1.1",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover."}];function No(t={}){const{wrapper:r}=Object.assign({},m(),t.components);return r?o.jsx(r,Object.assign({},t,{children:o.jsx(i,{})})):i();function i(){const e=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",em:"em",pre:"pre",h3:"h3"},m(),t.components);return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:j}),`
`,o.jsx(d,{since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:p}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(l,{of:p}),`
`,o.jsx(x,{rows:P}),`
`,o.jsx(e.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"ColorPalettePopover"}),"s can only be opened by attaching a ",o.jsx(e.code,{children:"ref"})," to the component and then call the corresponding ",o.jsx(e.strong,{children:o.jsx(e.code,{children:"showAt"})})," method. The method receives the target element - ",o.jsxs(e.em,{children:["on which the ",o.jsx(e.code,{children:"ColorPalettePopover"})," is to be opened"]})," - as parameter."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const popoverRef = useRef();
  const onButtonClick = (e) => {
    popoverRef.current.showAt(e.target);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open ColorPalettePopover</Button>
      <ColorPalettePopover ref={popoverRef}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o.jsx(n,{children:f}),`
`,o.jsx(e.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(n,{children:C}),`
`,o.jsx(e.h3,{id:"properties-1",children:"Properties"}),`
`,o.jsx(c,{of:u}),`
`,o.jsx(h,{})]})}}export{No as default};
//# sourceMappingURL=ColorPalettePopover-0f075067.js.map
