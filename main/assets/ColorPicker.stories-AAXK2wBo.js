import{_ as s}from"./iframe-6VXrt-Ia.js";import"./ColorPicker-rKh6UW2f.js";import{w as a}from"./withWebComponent-c-uI2wMj.js";const o=a("ui5-color-picker",["color"],[],[],["change"],()=>s(()=>import("./ColorPicker-rKh6UW2f.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]),import.meta.url));o.displayName="ColorPicker";try{o.displayName="ColorPicker",o.__docgenInfo={description:`The \`ColorPicker\` allows users to choose any color and provides different input options for selecting colors.

### Usage

#### When to use:

*   users need to select any color freely.

#### When not to use:

*   Users need to select one color from a predefined set of colors. Use the ColorPalette component instead.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"ColorPicker",props:{onChange:{defaultValue:null,description:"Fired when the the selected color is changed",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPickerDomRef, never>) => void"}},color:{defaultValue:{value:'"rgba(255, 255, 255, 1)"'},description:`Defines the currently selected color of the component.

**Note**: use HEX, RGB, RGBA, HSV formats or a CSS color name when modifying this property.`,name:"color",required:!1,type:{name:"Color"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const l={title:"Inputs / ColorPicker",component:o,argTypes:{},args:{},tags:["package:@ui5/webcomponents"]},e={};var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const i=["Default"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:i,default:l},Symbol.toStringTag,{value:"Module"}));export{d as C,e as D};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ColorPicker-rKh6UW2f.js","./UI5Element-ZYvPEp0D.js","./Language-JQ3LAQtE.js","./VersionInfo-zmLW7G4m.js","./CustomElementsScopeUtils-StEZUlti.js","./withWebComponent-c-uI2wMj.js","./utils-_oNUceU3.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./event-lM5HanI-.js","./Keys-ZEuNsqmZ.js","./CSSColor-cu9KZbQi.js","./Integer-kog98579.js","./Float-0fEWDOdp.js","./i18nBundle-1RfbKOQr.js","./style-map-5XXpitLE.js","./Input-4H-tf53k.js","./slot-HSrR9XJ-.js","./ResizeHandler-YURVNHbB.js","./ValueState-zUcANXoY.js","./AriaLabelHelper-RbKlVwzD.js","./getActiveElement-IIKAy3xo.js","./decline-U1O_cqCB.js","./Icons-cAVhCySg.js","./i18n-defaults-SIMqfZL6.js","./information-QdD8C0Qh.js","./alert-dBb1Jp03.js","./Popover-UsQMNwiB.js","./PopupUtils-ihEiSFJi.js","./PopupsCommon.css-ITzmnbbD.js","./FocusableElements-vlqyWKZU.js","./isElementHidden-d3-Fo4V6.js","./getEffectiveScrollbarStyle-Gz48PLeD.js","./MediaRange-sEMt71Ve.js","./class-map-kWxrnrVL.js","./parameters-bundle.css-mPCp9TQx.js","./BrowserScrollbar.css-za47fcqD.js","./Icon-7RzQfNaI.js","./i18n-defaults-5NJLMpyi.js","./ResponsivePopoverCommon.css-qbe5WpYD.js","./ValueStateMessage.css-tLIWhzsS.js","./Slider-tt0hsts9.js","./SliderBase-Jk-yomUE.js","./Label-fARuFZ49.js","./WrappingType-avPrqc94.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
