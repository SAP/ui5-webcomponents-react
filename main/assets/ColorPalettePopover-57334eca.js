import{j as o,a as r,F as s}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-d75b0032.js";import{D as c}from"./DocsHeader-7a75838b.js";import{F as d}from"./Footer-728fca8f.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-89fbddc8.js";import{M as f,C,a as n,b as P}from"./chunk-PCJTTTQV-e425c80a.js";import{C as u,D as m}from"./ColorPalettePopover.stories-da5642f3.js";import{S as v}from"./SubcomponentsSection-6138f2fc.js";import{C as b}from"./ColorPaletteItemDescription-934d5448.js";import{C as g}from"./index-e3fde3ba.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-1ab7e646.js";import"./iframe-3fae4d97.js";import"../sb-preview/runtime.mjs";import"./UI5Element-d1d93200.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-c8fd92f0.js";import"./Icons-efeb15d5.js";import"./decline-41212cdc.js";import"./i18n-defaults-80781f7e.js";import"./information-859245b4.js";import"./class-map-6d48ebd3.js";import"./Button-400e2491.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-2bd17005.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-9e88a6aa.js";import"./TableOfContent-f6cb8f1d.js";import"./index-c077f72e.js";import"./Link-706be030.js";import"./WrappingType-b81e595a.js";import"./index-da28895d.js";import"./Label-e3d88218.js";import"./index-96c5f47c.js";import"./index-0c3ac0fb.js";import"./Popover-4088d87a.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a92cb9f4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-1644cafd.js";import"./FocusableElements-8859c874.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-ab5bee37.js";import"./ResizeHandler-f4ca1209.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-44a62562.js";import"./CSSColor-f91c8158.js";import"./ResponsivePopoverCommon.css-82b1f3cc.js";import"./Title-6041704e.js";import"./ResponsivePopover-f45885b9.js";import"./Dialog-c83d8172.js";import"./ValueState-2c5e5904.js";import"./ItemNavigation-8971fb55.js";const w=[{name:"openPopover",visibility:"public",since:"1.0.0-rc.16",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover. <b>Note:</b> The method is deprecated and will be removed in future, use <code>showAt</code> instead.",deprecated:{text:"The method is deprecated in favour of <code>showAt</code>."}},{name:"showAt",visibility:"public",since:"1.1.1",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover."}];function Go(t={}){const{wrapper:i}=Object.assign({},a(),t.components);return i?o(i,Object.assign({},t,{children:o(p,{})})):p();function p(){const e=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",em:"em",pre:"pre",h3:"h3"},a(),t.components);return r(s,{children:[o(f,{of:u}),`
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
//# sourceMappingURL=ColorPalettePopover-57334eca.js.map
