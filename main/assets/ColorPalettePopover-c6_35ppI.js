import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{C as s}from"./DomRefTable.module-KFV4vTNP.js";import{D as a}from"./DocsHeader-aw51gcp2.js";import{F as l}from"./Footer-5HE-tmQI.js";import"./index-OjgoNOWw.js";import{M as c,C as d,b as p,A as h}from"./chunk-HLWAVYOI-aRY61EAZ.js";import{D as x}from"./DomRefTable-785j6Hhl.js";import{C as j,D as n}from"./ColorPalettePopover.stories-3N2Uc9QC.js";import{S as f}from"./SubcomponentsSection-pzdPLcqE.js";import{C}from"./ColorPaletteItemDescription-ECR88aH3.js";import{C as u}from"./index-lhMjQMaS.js";import{u as m}from"./index-RwE9nQVW.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-hjlCGKub.js";import"./iframe-jFRpQ-99.js";import"../sb-preview/runtime.js";import"./UI5Element-51XrG2PJ.js";import"./CustomElementsScopeUtils-FvbtGFoH.js";import"./withWebComponent-ceo0jn6D.js";import"./utils-CrDMzPRG.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-HNXZSIOG.js";import"./Icons-3pbvVZUr.js";import"./decline-Q45dXYUl.js";import"./i18n-defaults-n2A5pq_J.js";import"./information-WfdY8QHP.js";import"./alert-TGfQazfI.js";import"./class-map-JXa0-u4l.js";import"./Button-a5xMWTkk.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-S1zyQWjr.js";import"./clsx-2Jv0kmJG.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-PxRYiixA.js";import"./index-oLSBYiL3.js";import"./Integer-kog98579.js";import"./index-OgyC61Zv.js";import"./Avatar-hI9OSh5N.js";import"./ResizeHandler-9pqGT1BJ.js";import"./employee-QIf_hgHb.js";import"./index-2LFs6KZP.js";import"./index-web1D2Sd.js";import"./Link-DluRE2Z1.js";import"./WrappingType-avPrqc94.js";import"./index-ZYxd7chN.js";import"./TableOfContent-CFEEopUN.js";import"./index-5G9NmmK_.js";import"./Label-z__cPwIf.js";import"./index-QYh6idnL.js";import"./index-Nq0B0t7P.js";import"./index-BVOpDmmc.js";import"./Popover-pPQH5XeW.js";import"./PopupUtils-JhQDb1QD.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-q9U65Wkb.js";import"./FocusableElements-W9IwOAGU.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-uWW-8QIe.js";import"./BrowserScrollbar.css-HfEGARrw.js";import"./index--F0XPsCm.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"./CSSColor-cu9KZbQi.js";import"./ResponsivePopoverCommon.css-sOUQDAhm.js";import"./Title-QpYFGHiM.js";import"./ResponsivePopover-ZVeh2WGC.js";import"./Dialog-BkI39EIa.js";import"./ValueState-zUcANXoY.js";import"./ItemNavigation-ETHVU2CC.js";const P=[{name:"openPopover",visibility:"public",since:"1.0.0-rc.16",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover. <b>Note:</b> The method is deprecated and will be removed in future, use <code>showAt</code> instead.",deprecated:{text:"The method is deprecated in favour of <code>showAt</code>."}},{name:"showAt",visibility:"public",since:"1.1.1",parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}],description:"Shows the ColorPalettePopover."}];function Wo(t={}){const{wrapper:r}=Object.assign({},m(),t.components);return r?o.jsx(r,Object.assign({},t,{children:o.jsx(i,{})})):i();function i(){const e=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",em:"em",pre:"pre",h3:"h3"},m(),t.components);return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:j}),`
`,o.jsx(a,{since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(d,{of:n}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:n}),`
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
`,o.jsx(p,{children:f}),`
`,o.jsx(e.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(p,{children:C}),`
`,o.jsx(e.h3,{id:"properties-1",children:"Properties"}),`
`,o.jsx(h,{of:u}),`
`,o.jsx(l,{})]})}}export{Wo as default};
//# sourceMappingURL=ColorPalettePopover-c6_35ppI.js.map
