import{j as o}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-ad47dab3.js";import{D as a}from"./DocsHeader-797aaec6.js";import{F as l}from"./Footer-f528fa13.js";import"./index-ebeaab24.js";import{D as c}from"./DomRefTable-7fcffefa.js";import{M as d,C as h,a as n,b as x}from"./chunk-PCJTTTQV-994f0cbc.js";import{C as j,D as p}from"./ColorPalettePopover.stories-70637adf.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{C}from"./ColorPaletteItemDescription-934d5448.js";import{C as u}from"./index-b3549942.js";import{u as m}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-e3b2ee5c.js";import"./iframe-1f7bc337.js";import"../sb-preview/runtime.js";import"./UI5Element-533070c8.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-2e16c08b.js";import"./Icons-67fab4b0.js";import"./decline-1d33941a.js";import"./i18n-defaults-80781f7e.js";import"./information-e88b206d.js";import"./class-map-6a9bd920.js";import"./Button-21e98691.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-2f9956dc.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-c76a74b2.js";import"./index-73c8b848.js";import"./Link-08f0fbaf.js";import"./WrappingType-b81e595a.js";import"./index-ddd6f982.js";import"./Label-94e3ba9d.js";import"./index-9c09ad76.js";import"./index-e9ea925e.js";import"./Popover-167ff704.js";import"./Integer-f7f172c9.js";import"./PopupUtils-ba2b770f.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97917f6d.js";import"./FocusableElements-eec123c0.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-aaf74c24.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./index-ee36d6d0.js";import"./CSSColor-f91c8158.js";import"./ResponsivePopoverCommon.css-a7286400.js";import"./Title-2e442dfb.js";import"./ResponsivePopover-f849f6e4.js";import"./Dialog-e7dbd17a.js";import"./ValueState-2c5e5904.js";import"./ItemNavigation-211cc58c.js";const P=[{name:"openPopover",visibility:"public",since:"1.0.0-rc.16",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover. <b>Note:</b> The method is deprecated and will be removed in future, use <code>showAt</code> instead.",deprecated:{text:"The method is deprecated in favour of <code>showAt</code>."}},{name:"showAt",visibility:"public",since:"1.1.1",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover."}];function No(t={}){const{wrapper:r}=Object.assign({},m(),t.components);return r?o.jsx(r,Object.assign({},t,{children:o.jsx(i,{})})):i();function i(){const e=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",em:"em",pre:"pre",h3:"h3"},m(),t.components);return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:j}),`
`,o.jsx(a,{since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(h,{of:p}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:p}),`
`,o.jsx(c,{rows:P}),`
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
`,o.jsx(x,{of:u}),`
`,o.jsx(l,{})]})}}export{No as default};
//# sourceMappingURL=ColorPalettePopover-5922b5d2.js.map
