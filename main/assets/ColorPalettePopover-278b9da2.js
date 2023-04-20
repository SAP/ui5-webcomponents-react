import{j as o,a as r,F as s}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-33932dca.js";import{D as c}from"./DocsHeader-98dc7ef6.js";import{F as d}from"./Footer-8c79a938.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-0b95f9b6.js";import{M as f,C,a as n,b as P}from"./chunk-PCJTTTQV-807306ae.js";import{C as u,D as m}from"./ColorPalettePopover.stories-ddcbb41c.js";import{S as v}from"./SubcomponentsSection-6138f2fc.js";import{C as b}from"./ColorPaletteItemDescription-934d5448.js";import{C as g}from"./index-0279817f.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-fa6aa1e2.js";import"./iframe-492085dc.js";import"../sb-preview/runtime.mjs";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-6d48ebd3.js";import"./Button-fa05cadd.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-014b4437.js";import"./TableOfContent-db896e85.js";import"./index-90388e72.js";import"./Link-3b8926df.js";import"./WrappingType-b81e595a.js";import"./index-04faef4a.js";import"./Label-528b8168.js";import"./index-96c5f47c.js";import"./index-787dabae.js";import"./Popover-824d4d7c.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-32fd5378.js";import"./CSSColor-f91c8158.js";import"./ResponsivePopoverCommon.css-0466170a.js";import"./Title-0440ec3f.js";import"./ResponsivePopover-152ab708.js";import"./Dialog-610dd06c.js";import"./ValueState-2c5e5904.js";import"./ItemNavigation-01761450.js";const w=[{name:"openPopover",visibility:"public",since:"1.0.0-rc.16",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover. <b>Note:</b> The method is deprecated and will be removed in future, use <code>showAt</code> instead.",deprecated:{text:"The method is deprecated in favour of <code>showAt</code>."}},{name:"showAt",visibility:"public",since:"1.1.1",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover."}];function Go(t={}){const{wrapper:i}=Object.assign({},a(),t.components);return i?o(i,Object.assign({},t,{children:o(p,{})})):p();function p(){const e=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",em:"em",pre:"pre",h3:"h3"},a(),t.components);return r(s,{children:[o(f,{of:u}),`
`,o(c,{since:"0.20.0"}),`
`,o("br",{}),`
`,o(e.h2,{id:"example",children:"Example"}),`
`,o(C,{of:m}),`
`,o(e.h2,{id:"properties",children:"Properties"}),`
`,o(l,{of:m}),`
`,o(h,{rows:w}),`
`,o(e.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,r(e.p,{children:[o(e.code,{children:"ColorPalettePopover"}),"s can only be opened by attaching a ",o(e.code,{children:"ref"})," to the component and then call the corresponding ",o(e.strong,{children:o(e.code,{children:"showAt"})})," method. The method receives the target element - ",r(e.em,{children:["on which the ",o(e.code,{children:"ColorPalettePopover"})," is to be opened"]})," - as parameter."]}),`
`,o(e.pre,{children:o(e.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
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
`,o(n,{children:v}),`
`,o(e.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o(n,{children:b}),`
`,o(e.h3,{id:"properties-1",children:"Properties"}),`
`,o(P,{of:g}),`
`,o(d,{})]})}}export{Go as default};
//# sourceMappingURL=ColorPalettePopover-278b9da2.js.map
