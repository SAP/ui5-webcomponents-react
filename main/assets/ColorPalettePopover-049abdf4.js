import{j as o}from"./jsx-runtime-d079401a.js";import{C as s}from"./DomRefTable.module-0cb57df1.js";import{D as a}from"./DocsHeader-991d32fe.js";import{F as l}from"./Footer-3f8faf83.js";import"./index-f1f2c4b1.js";import{D as c}from"./DomRefTable-730c5000.js";import{M as d,C as h,b as p,A as x}from"./chunk-S4VUQJ4A-2f00d13c.js";import{C as j,D as n}from"./ColorPalettePopover.stories-21bade9e.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{C}from"./ColorPaletteItemDescription-c6678345.js";import{C as u}from"./index-a7fa8bee.js";import{u as m}from"./index-59d6410c.js";import"./react-jss.esm-c310038c.js";import"./inheritsLoose-93e09647.js";import"./index-099fdb19.js";import"./iframe-95e95fd4.js";import"../sb-preview/runtime.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-8885c1b6.js";import"./utils-626dc1bf.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-6459d230.js";import"./Icons-234bf59e.js";import"./decline-23c167e4.js";import"./i18n-defaults-2d2bf0b6.js";import"./information-1886de07.js";import"./class-map-2a13820b.js";import"./Button-1a04ac66.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-6afa24d0.js";import"./i18n-defaults-183ab1a9.js";import"./index-47d0a85a.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-783dc33d.js";import"./index-f092546e.js";import"./Integer-f7f172c9.js";import"./index-abc2cc05.js";import"./Avatar-60ab180c.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-81ae69cd.js";import"./index-5644339f.js";import"./Link-6bda31f4.js";import"./WrappingType-b81e595a.js";import"./index-14ef1273.js";import"./TableOfContent-0ec8ba6f.js";import"./index-4b7fcd1e.js";import"./Label-78e0be96.js";import"./index-c74c9f7f.js";import"./index-9e4a4085.js";import"./index-acff0a7f.js";import"./Popover-d6899044.js";import"./PopupsCommon.css-a62fa435.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-4f876188.js";import"./BrowserScrollbar.css-7fb20ad4.js";import"./index-92d824d3.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./CSSColor-f91c8158.js";import"./ResponsivePopoverCommon.css-bf040dc8.js";import"./Title-bd8ae788.js";import"./ResponsivePopover-13f9a781.js";import"./Dialog-08d74f85.js";import"./ValueState-2c5e5904.js";import"./ItemNavigation-a882fb90.js";const P=[{name:"openPopover",visibility:"public",since:"1.0.0-rc.16",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover. <b>Note:</b> The method is deprecated and will be removed in future, use <code>showAt</code> instead.",deprecated:{text:"The method is deprecated in favour of <code>showAt</code>."}},{name:"showAt",visibility:"public",since:"1.1.1",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover."}];function zo(t={}){const{wrapper:r}=Object.assign({},m(),t.components);return r?o.jsx(r,Object.assign({},t,{children:o.jsx(i,{})})):i();function i(){const e=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",em:"em",pre:"pre",h3:"h3"},m(),t.components);return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:j}),`
`,o.jsx(a,{since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(h,{of:n}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:n}),`
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
`,o.jsx(p,{children:f}),`
`,o.jsx(e.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(p,{children:C}),`
`,o.jsx(e.h3,{id:"properties-1",children:"Properties"}),`
`,o.jsx(x,{of:u}),`
`,o.jsx(l,{})]})}}export{zo as default};
//# sourceMappingURL=ColorPalettePopover-049abdf4.js.map
