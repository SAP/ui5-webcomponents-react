import{j as o,a as r,F as s}from"./jsx-runtime-670450c2.js";import{C as l}from"./DomRefTable.module-796e5b92.js";import{D as c}from"./DocsHeader-275d7057.js";import{F as h}from"./Footer-c24922c1.js";import"./index-f1f749bf.js";import{D as d}from"./DomRefTable-c0cc069b.js";import{M as f,C,a as p,b as P}from"./index-4c6bc1d8.js";import{C as u,D as m}from"./ColorPalettePopover.stories-969e810b.js";import{S as v}from"./SubcomponentsSection-6138f2fc.js";import{C as b}from"./ColorPaletteItemDescription-2583043f.js";import{C as g}from"./index-417392f2.js";import{u as a}from"./index-4fb8b842.js";import"./chunk-PCJTTTQV-e4b5f208.js";import"./iframe-62981b78.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./inheritsLoose-93e09647.js";import"./index-a1d9006c.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./AriaLabelHelper-c82262ef.js";import"./i18n-defaults-ffd92f69.js";import"./decline-5eb6d937.js";import"./Icons-7b82f601.js";import"./i18n-defaults-7dff8409.js";import"./information-0837f136.js";import"./class-map-5d8e4b2b.js";import"./Icon-ce854b74.js";import"./Keys-3acbae73.js";import"./Button-b2f5d653.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./index-cbb29537.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-6eff54b4.js";import"./TableOfContent-6d559a7d.js";import"./index-6328c9d9.js";import"./Link-4cf74d63.js";import"./WrappingType-b81e595a.js";import"./index-87d6c211.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-6454d6ca.js";import"./Popover-9656b900.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-ff32b102.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./index-12eee4c1.js";import"./CSSColor-bdda6dc0.js";import"./ResponsivePopoverCommon.css-187e38b6.js";import"./Title-b986a4bd.js";import"./ResponsivePopover-2c707551.js";import"./Dialog-d6ad04fd.js";import"./ValueState-2c5e5904.js";import"./ItemNavigation-9e1aa83a.js";const w=[{name:"openPopover",visibility:"public",since:"1.0.0-rc.16",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover. <b>Note:</b> The method is deprecated and will be removed in future, use <code>showAt</code> instead.",deprecated:{text:"The method is deprecated in favour of <code>showAt</code>."}},{name:"showAt",visibility:"public",since:"1.1.1",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover."}];function Jo(t={}){const{wrapper:i}=Object.assign({},a(),t.components);return i?o(i,Object.assign({},t,{children:o(n,{})})):n();function n(){const e=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",em:"em",pre:"pre",h3:"h3"},a(),t.components);return r(s,{children:[o(f,{of:u}),`
`,o(c,{since:"0.20.0"}),`
`,o("br",{}),`
`,o(e.h2,{children:"Example"}),`
`,o(C,{of:m}),`
`,o(e.h2,{children:"Properties"}),`
`,o(l,{of:m}),`
`,o(d,{rows:w}),`
`,o(e.h2,{children:"Opening ColorPalettePopovers"}),`
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
`,o(p,{children:v}),`
`,o(e.h2,{children:"ColorPaletteItem"}),`
`,o(p,{children:b}),`
`,o(e.h3,{children:"Properties"}),`
`,o(P,{of:g}),`
`,o(h,{})]})}}export{Jo as default};
//# sourceMappingURL=ColorPalettePopover-7061c059.js.map
