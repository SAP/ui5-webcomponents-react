import{j as o}from"./jsx-runtime-5926aa06.js";import{C as s}from"./DomRefTable.module-c49e277b.js";import{D as a}from"./DocsHeader-3ebfe41b.js";import{F as l}from"./Footer-2bb98770.js";import"./index-ebeaab24.js";import{D as c}from"./DomRefTable-71c619bc.js";import{M as d,C as h,a as p,b as x}from"./chunk-PCJTTTQV-d745d1d0.js";import{C as j,D as n}from"./ColorPalettePopover.stories-e2e642d6.js";import{S as f}from"./SubcomponentsSection-6138f2fc.js";import{C}from"./ColorPaletteItemDescription-934d5448.js";import{C as u}from"./index-9c5aa3aa.js";import{u as m}from"./index-bda0bad7.js";import"./react-jss.esm-022ab528.js";import"./inheritsLoose-93e09647.js";import"./index-af4c64e5.js";import"./iframe-c9a3f230.js";import"../sb-preview/runtime.js";import"./UI5Element-74c2a827.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d61dcbbc.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-a2964213.js";import"./Icons-94b91597.js";import"./decline-c0e7c267.js";import"./i18n-defaults-80781f7e.js";import"./information-972c65ef.js";import"./class-map-519e9c6d.js";import"./Button-1eb48b4c.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-8330eb1d.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./Import-3e5f034e.js";import"./TableOfContent-45be38a6.js";import"./index-1c1085f5.js";import"./Link-e0af46e3.js";import"./WrappingType-b81e595a.js";import"./index-e163b211.js";import"./Label-fcb0092c.js";import"./index-9c09ad76.js";import"./index-57035e4f.js";import"./Popover-2de3a0ad.js";import"./Integer-f7f172c9.js";import"./PopupUtils-db5b49db.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-c4ad8573.js";import"./FocusableElements-20734289.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-362c4d65.js";import"./ResizeHandler-0f082c48.js";import"./MediaRange-25b98f31.js";import"./style-map-33b353d0.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./index-f492bfb6.js";import"./CSSColor-f91c8158.js";import"./ResponsivePopoverCommon.css-5b3cf680.js";import"./Title-85313bbf.js";import"./ResponsivePopover-d37f7fd3.js";import"./Dialog-07218916.js";import"./ValueState-2c5e5904.js";import"./ItemNavigation-e9bbb1b9.js";const P=[{name:"openPopover",visibility:"public",since:"1.0.0-rc.16",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover. <b>Note:</b> The method is deprecated and will be removed in future, use <code>showAt</code> instead.",deprecated:{text:"The method is deprecated in favour of <code>showAt</code>."}},{name:"showAt",visibility:"public",since:"1.1.1",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover."}];function _o(t={}){const{wrapper:r}=Object.assign({},m(),t.components);return r?o.jsx(r,Object.assign({},t,{children:o.jsx(i,{})})):i();function i(){const e=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",em:"em",pre:"pre",h3:"h3"},m(),t.components);return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:j}),`
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
`,o.jsx(l,{})]})}}export{_o as default};
//# sourceMappingURL=ColorPalettePopover-49851019.js.map
