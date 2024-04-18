function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ColorPicker-BhCNh9W2.js","./UI5Element-tLl76uRl.js","./Boot-Cnne3s27.js","./EventProvider-B3ZIXKWe.js","./ManagedStyles-CGOl3myG.js","./index-Dl6G-zuu.js","./CustomElementsScopeUtils-B75AoQkl.js","./withWebComponent-DJIp_RUs.js","./utils-CeXI0Hi-.js","./useIsomorphicLayoutEffect-gsbYElqV.js","./event-CegLCnR0.js","./Keys-BgUkNma0.js","./CSSColor-CzaElTOH.js","./Integer-Dh6YzFpK.js","./Float-BYyKuwHF.js","./i18nBundle-Bsmczzvl.js","./style-map-ZAvUrcXy.js","./Input-B3467WvL.js","./slot-Df15G--e.js","./ResizeHandler-DFfXzzyE.js","./ValueState-Bn-H2OaL.js","./AriaLabelHelper-CzOXVcye.js","./getActiveElement-BL9Yqj8a.js","./decline-BbDtzwS9.js","./Icons-CBAKipU6.js","./i18n-defaults-BdfZArTM.js","./information-I51WcrjF.js","./alert-aIGc7Sj9.js","./Popover-wWOUXlEf.js","./PopupUtils-ChEyoFp6.js","./PopupsCommon.css-CM5pfEqV.js","./FocusableElements-B13w0nQJ.js","./isElementHidden-Bpu2V8BK.js","./getEffectiveScrollbarStyle-DWzHjL-d.js","./MediaRange-CQ-a3KRn.js","./class-map-Cu2l68a-.js","./parameters-bundle.css-DjgCrOcY.js","./BrowserScrollbar.css-CZDKAGTv.js","./Icon-D1vK26qK.js","./i18n-defaults-BS_6etQn.js","./ResponsivePopoverCommon.css-Ci_DuItR.js","./ValueStateMessage.css-CFs8ATbK.js","./Slider-BHt4TtEg.js","./SliderBase-CjYxSkuK.js","./Label-DppxBELH.js","./WrappingType-CW8URInd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-DXNIo9Qj.js";import"./ColorPicker-BhCNh9W2.js";import{w as l}from"./withWebComponent-DJIp_RUs.js";const e=l("ui5-color-picker",["color"],[],[],["change"],()=>a(()=>import("./ColorPicker-BhCNh9W2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]),import.meta.url));e.displayName="ColorPicker";try{e.displayName="ColorPicker",e.__docgenInfo={description:`The \`ColorPicker\` allows users to choose any color and provides different input options for selecting colors.

### Usage

#### When to use
Use the color picker if:

-  users need to select any color freely.

#### When not to use

-  Users need to select one color from a predefined set of colors. Use the ColorPalette component instead.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"ColorPicker",props:{onChange:{defaultValue:null,description:"Fired when the the selected color is changed",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPickerDomRef, never>) => void"}},color:{defaultValue:{value:'"rgba(255, 255, 255, 1)"'},description:`Defines the currently selected color of the component.

**Note**: use HEX, RGB, RGBA, HSV formats or a CSS color name when modifying this property.`,name:"color",required:!1,type:{name:"Color"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="ColorPicker",e.__docgenInfo={description:`The \`ColorPicker\` allows users to choose any color and provides different input options for selecting colors.

### Usage

#### When to use
Use the color picker if:

-  users need to select any color freely.

#### When not to use

-  Users need to select one color from a predefined set of colors. Use the ColorPalette component instead.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"ColorPicker",props:{onChange:{defaultValue:null,description:"Fired when the the selected color is changed",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPickerDomRef, never>) => void"}},color:{defaultValue:{value:'"rgba(255, 255, 255, 1)"'},description:`Defines the currently selected color of the component.

**Note**: use HEX, RGB, RGBA, HSV formats or a CSS color name when modifying this property.`,name:"color",required:!1,type:{name:"Color"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const i={title:"Inputs / ColorPicker",component:e,argTypes:{},args:{},tags:["package:@ui5/webcomponents"]},o={};var n,t,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(r=(t=o.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const c=["Default"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:c,default:i},Symbol.toStringTag,{value:"Module"}));export{d as C,o as D};
