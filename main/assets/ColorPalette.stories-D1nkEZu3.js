function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-j7OHd0hD.js","./UI5Element-DtnZiShc.js","./Boot-DwA_pgKp.js","./VersionInfo-Bnh5Htkx.js","./CustomElementsScopeUtils-BkU30VC6.js","./withWebComponent-DRPzk8yN.js","./utils-BopS74sX.js","./index-Dl6G-zuu.js","./jsx-runtime-Du8NFWEI.js","./useIsomorphicLayoutEffect-gsbYElqV.js","./slot-Df15G--e.js","./event-CegLCnR0.js","./i18nBundle-CW3QmvUh.js","./ItemNavigation-Bb1SiOBB.js","./Keys-BgUkNma0.js","./getActiveElement-BL9Yqj8a.js","./CSSColor-CzaElTOH.js","./Integer-Dh6YzFpK.js","./class-map-DOxVO0GK.js","./Icon-DvcRDrqS.js","./Icons-Dptlkq46.js","./parameters-bundle.css-DjgCrOcY.js","./Button-L0N45cMZ.js","./AriaLabelHelper-CzOXVcye.js","./MarkedEvents-BPv6Lv4o.js","./willShowContent-BOkh0bwj.js","./HasPopup-Cecjtg2t.js","./i18n-defaults-ByZSnYVg.js","./iframe-LIY3nnSU.js","./style-map-COTFu3zX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as m}from"./VersionInfo-Bnh5Htkx.js";import{b as u}from"./i18nBundle-CW3QmvUh.js";import c from"./Dialog-BNcLqLRY.js";import{b as d}from"./Button-L0N45cMZ.js";import p from"./ColorPicker-Be4tZDQ7.js";import{C as h,d as f,e as C}from"./i18n-defaults-ByZSnYVg.js";import{C as t}from"./index-j7OHd0hD.js";import{_ as g}from"./iframe-LIY3nnSU.js";import{w as _}from"./withWebComponent-DRPzk8yN.js";const o=_("ui5-color-palette",[],[],[],["item-click"],()=>g(()=>import("./index-j7OHd0hD.js").then(l=>l.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]),import.meta.url));o.displayName="ColorPalette";try{o.displayName="ColorPalette",o.__docgenInfo={description:`The \`ColorPalette\` provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.

### Usage

The \`ColorPalette\` is meant for users that need to select a color from a predefined set.
To define the colors, use the \`ColorPaletteItem\` component inside the default slot of the \`ColorPalette\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"ColorPalette",props:{children:{defaultValue:null,description:"Defines the `ColorPaletteItem` elements.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPaletteDomRef, ColorPaletteItemClickEventDetail>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{o.displayName="ColorPalette",o.__docgenInfo={description:`The \`ColorPalette\` provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.

### Usage

The \`ColorPalette\` is meant for users that need to select a color from a predefined set.
To define the colors, use the \`ColorPaletteItem\` component inside the default slot of the \`ColorPalette\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"ColorPalette",props:{children:{defaultValue:null,description:"Defines the `ColorPaletteItem` elements.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPaletteDomRef, ColorPaletteItemClickEventDetail>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}class n{static get dependencies(){return[c,d,p]}static async init(){n.i18nBundle=await u("@ui5/webcomponents")}get colorPaletteDialogTitle(){return n.i18nBundle.getText(h)}get colorPaletteDialogOKButton(){return n.i18nBundle.getText(f)}get colorPaletteCancelButton(){return n.i18nBundle.getText(C)}}m("ColorPaletteMoreColors",n);const y={title:"Data Display / ColorPalette",component:o,argTypes:{children:{control:{disable:!0}}},args:{},tags:["package:@ui5/webcomponents"]},a={render:l=>e.jsxs(o,{...l,children:[e.jsx(t,{value:"darkblue"}),e.jsx(t,{value:"pink"}),e.jsx(t,{value:"#444444"}),e.jsx(t,{value:"rgb(0,200,0)"}),e.jsx(t,{value:"green"}),e.jsx(t,{value:"darkred"}),e.jsx(t,{value:"yellow"}),e.jsx(t,{value:"blue"}),e.jsx(t,{value:"cyan"}),e.jsx(t,{value:"orange"}),e.jsx(t,{value:"#5480e7"}),e.jsx(t,{value:"#ff6699"})]})};var r,s,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    return <ColorPalette {...args}>
        <ColorPaletteItem value="darkblue" />
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="#444444" />
        <ColorPaletteItem value="rgb(0,200,0)" />
        <ColorPaletteItem value="green" />
        <ColorPaletteItem value="darkred" />
        <ColorPaletteItem value="yellow" />
        <ColorPaletteItem value="blue" />
        <ColorPaletteItem value="cyan" />
        <ColorPaletteItem value="orange" />
        <ColorPaletteItem value="#5480e7" />
        <ColorPaletteItem value="#ff6699" />
      </ColorPalette>;
  }
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const P=["Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:P,default:y},Symbol.toStringTag,{value:"Module"}));export{S as C,a as D};
