import{M as l,C as c,e as d,b as u}from"./chunk-HLWAVYOI-UeCpg4wL.js";import{_ as h}from"./iframe-_OlRtZJR.js";import"./ColorPicker-aH1kLlCY.js";import{w as f}from"./withWebComponent-ceo0jn6D.js";import{A as y}from"./DomRefTable.module-rVGi012t.js";import{D as C}from"./DocsHeader-sc4weluW.js";import{F as _}from"./Footer-jfdx2u5v.js";import{j as e}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{u as s}from"./index-RwE9nQVW.js";import"./index--F0XPsCm.js";import"./index-QYh6idnL.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"../sb-preview/runtime.js";import"./UI5Element-51XrG2PJ.js";import"./CustomElementsScopeUtils-FvbtGFoH.js";import"./Icon-HNXZSIOG.js";import"./Icons-3pbvVZUr.js";import"./utils-CrDMzPRG.js";import"./CSSColor-cu9KZbQi.js";import"./Integer-kog98579.js";import"./Float-0fEWDOdp.js";import"./style-map-uWW-8QIe.js";import"./Input-BNiri3bM.js";import"./slot-HSrR9XJ-.js";import"./ResizeHandler-9pqGT1BJ.js";import"./ValueState-zUcANXoY.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./getActiveElement-IIKAy3xo.js";import"./decline-Q45dXYUl.js";import"./i18n-defaults-n2A5pq_J.js";import"./Suggestions.css-OipsoI1z.js";import"./information-WfdY8QHP.js";import"./alert-TGfQazfI.js";import"./Popover-pPQH5XeW.js";import"./PopupUtils-JhQDb1QD.js";import"./PopupsCommon.css-q9U65Wkb.js";import"./FocusableElements-W9IwOAGU.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./class-map-JXa0-u4l.js";import"./BrowserScrollbar.css-HfEGARrw.js";import"./i18n-defaults-RBzcmDt8.js";import"./ResponsivePopoverCommon.css-sOUQDAhm.js";import"./ValueStateMessage.css-YQdKx3t-.js";import"./Slider-NpPV5pie.js";import"./SliderBase-wjyqwkhT.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./Label-z__cPwIf.js";import"./WrappingType-avPrqc94.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-visvyNcT.js";import"./Button-a5xMWTkk.js";import"./MarkedEvents-aYv14vsS.js";import"./index-S1zyQWjr.js";import"./clsx-2Jv0kmJG.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-PxRYiixA.js";import"./index-WbINX23N.js";import"./index-F2xDrKNT.js";import"./Avatar-hI9OSh5N.js";import"./employee-QIf_hgHb.js";import"./index-06AsSkAh.js";import"./index-pvnqkZ_E.js";import"./Link-DluRE2Z1.js";import"./index-ZYxd7chN.js";import"./TableOfContent-bZnE1URh.js";import"./index-nNeIKPnb.js";import"./index-2S6zoQWg.js";import"./index-f2x4nzdX.js";const o=f("ui5-color-picker",["color"],[],[],["change"],()=>h(()=>import("./ColorPicker-aH1kLlCY.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]),import.meta.url));o.displayName="ColorPicker";try{o.displayName="ColorPicker",o.__docgenInfo={description:`The \`ColorPicker\` allows users to choose any color and provides different input options for selecting colors.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ColorPicker)`,displayName:"ColorPicker",props:{onChange:{defaultValue:null,description:"Fired when the the selected color is changed",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPickerDomRef, never>) => void"}},color:{defaultValue:null,description:`Defines the currently selected color of the component.

**Note**: use HEX, RGB, RGBA, HSV formats or a CSS color name when modifying this property.`,name:"color",required:!1,type:{name:"Color"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const g=`## Usage

### When to use:

- users need to select any color freely.

### When not to use:

- Users need to select one color from a predefined set of colors. Use the ColorPalette component instead.
`;function x(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,{...t,children:e.jsx(i,{})}):i();function i(){const m=Object.assign({h2:"h2"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Inputs / ColorPicker",component:o}),`
`,e.jsx(C,{since:"0.14.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(m.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{children:e.jsx(d,{name:"Default",children:a=>e.jsx(o,{...a})})}),`
`,e.jsx(m.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(y,{story:"Default"}),`
`,e.jsx(u,{children:g}),`
`,e.jsx(_,{})]})}}const p=t=>e.jsx(o,{...t});p.storyName="Default";p.parameters={storySource:{source:`args => {
  return <ColorPicker {...args} />;
}`}};const r={title:"Inputs / ColorPicker",component:o,tags:["stories-mdx"],includeStories:["defaultStory"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:x};const Ae=["defaultStory"];export{Ae as __namedExportsOrder,r as default,p as defaultStory};
//# sourceMappingURL=ColorPicker.stories-SQlZ29g-.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ColorPicker-aH1kLlCY.js","./UI5Element-51XrG2PJ.js","./CustomElementsScopeUtils-FvbtGFoH.js","./withWebComponent-ceo0jn6D.js","./utils-CrDMzPRG.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./Icon-HNXZSIOG.js","./Icons-3pbvVZUr.js","./CSSColor-cu9KZbQi.js","./Integer-kog98579.js","./Float-0fEWDOdp.js","./style-map-uWW-8QIe.js","./Input-BNiri3bM.js","./slot-HSrR9XJ-.js","./ResizeHandler-9pqGT1BJ.js","./ValueState-zUcANXoY.js","./AriaLabelHelper-RbKlVwzD.js","./getActiveElement-IIKAy3xo.js","./decline-Q45dXYUl.js","./i18n-defaults-n2A5pq_J.js","./Suggestions.css-OipsoI1z.js","./information-WfdY8QHP.js","./alert-TGfQazfI.js","./Popover-pPQH5XeW.js","./PopupUtils-JhQDb1QD.js","./PopupsCommon.css-q9U65Wkb.js","./FocusableElements-W9IwOAGU.js","./isElementHidden-d3-Fo4V6.js","./MediaRange-sEMt71Ve.js","./class-map-JXa0-u4l.js","./BrowserScrollbar.css-HfEGARrw.js","./i18n-defaults-RBzcmDt8.js","./ResponsivePopoverCommon.css-sOUQDAhm.js","./ValueStateMessage.css-YQdKx3t-.js","./Slider-NpPV5pie.js","./SliderBase-wjyqwkhT.js","./Label-z__cPwIf.js","./WrappingType-avPrqc94.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}