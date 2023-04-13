import{j as o,a as r,F as s}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-b94d4cf4.js";import{D as c}from"./DocsHeader-e87500c9.js";import{F as d}from"./Footer-5c62ca44.js";import"./index-f1f749bf.js";import{D as h}from"./DomRefTable-e8dc4665.js";import{M as f,C,a as n,b as P}from"./chunk-PCJTTTQV-8096570c.js";import{C as u,D as m}from"./ColorPalettePopover.stories-e7c06264.js";import{S as v}from"./SubcomponentsSection-6138f2fc.js";import{C as b}from"./ColorPaletteItemDescription-934d5448.js";import{C as g}from"./index-4007dc57.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./inheritsLoose-93e09647.js";import"./index-abbdee96.js";import"./iframe-d11ecd2e.js";import"../sb-preview/runtime.mjs";import"./UI5Element-5e77b351.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./slot-76e48863.js";import"./Icon-a70637b5.js";import"./Icons-85b0e9dd.js";import"./decline-07b4d490.js";import"./i18n-defaults-80781f7e.js";import"./information-bce3ba82.js";import"./class-map-6d48ebd3.js";import"./Button-35e7f923.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-55ea55ff.js";import"./TableOfContent-b7af9095.js";import"./index-acee3546.js";import"./Link-8808efba.js";import"./WrappingType-b81e595a.js";import"./index-13cf759c.js";import"./Label-e24223e9.js";import"./index-96c5f47c.js";import"./index-c5256de2.js";import"./Popover-eac39f76.js";import"./Integer-f7f172c9.js";import"./PopupUtils-d0ec75b7.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-ab897c30.js";import"./FocusableElements-2da74965.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-b2c643e0.js";import"./ResizeHandler-653daa1f.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-95b87af5.js";import"./CSSColor-f91c8158.js";import"./ResponsivePopoverCommon.css-19238fee.js";import"./Title-07ee6300.js";import"./ResponsivePopover-fe818bf5.js";import"./Dialog-0e44ed8a.js";import"./ValueState-2c5e5904.js";import"./ItemNavigation-316291cb.js";const w=[{name:"openPopover",visibility:"public",since:"1.0.0-rc.16",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover. <b>Note:</b> The method is deprecated and will be removed in future, use <code>showAt</code> instead.",deprecated:{text:"The method is deprecated in favour of <code>showAt</code>."}},{name:"showAt",visibility:"public",since:"1.1.1",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover."}];function Go(t={}){const{wrapper:i}=Object.assign({},a(),t.components);return i?o(i,Object.assign({},t,{children:o(p,{})})):p();function p(){const e=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",em:"em",pre:"pre",h3:"h3"},a(),t.components);return r(s,{children:[o(f,{of:u}),`
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
//# sourceMappingURL=ColorPalettePopover-94b7d2a7.js.map
