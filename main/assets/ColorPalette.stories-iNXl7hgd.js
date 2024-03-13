function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-mxn2f2_c.js","./UI5Element-9EXj3atz.js","./Boot-vTaFuwdG.js","./VersionInfo-ldzxTIVv.js","./CustomElementsScopeUtils-orabJqjR.js","./withWebComponent-LTFbYRvs.js","./utils-d3BcYjeO.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./slot-HSrR9XJ-.js","./event-lM5HanI-.js","./i18nBundle-j8vDD4VY.js","./ItemNavigation-F0c19DRy.js","./Keys-ZEuNsqmZ.js","./getActiveElement-IIKAy3xo.js","./CSSColor-cu9KZbQi.js","./Integer-kog98579.js","./class-map-gjOVarQw.js","./Icon-kyep1SqZ.js","./Icons-Vbmmw7bO.js","./parameters-bundle.css-EKzfhWK3.js","./Button-DcwyQdV9.js","./AriaLabelHelper-RbKlVwzD.js","./MarkedEvents-aYv14vsS.js","./willShowContent-MSvI8sYo.js","./HasPopup-9BAMrqbD.js","./i18n-defaults-X1FTyPSK.js","./iframe-RNL-KbD1.js","./style-map-tejh5TI3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as m}from"./VersionInfo-ldzxTIVv.js";import{b as u}from"./i18nBundle-j8vDD4VY.js";import c from"./Dialog-Kb1Go7sM.js";import{b as p}from"./Button-DcwyQdV9.js";import d from"./ColorPicker-9ORl0NPq.js";import{C as f,d as h,e as C}from"./i18n-defaults-X1FTyPSK.js";import{C as t}from"./index-mxn2f2_c.js";import{_ as g}from"./iframe-RNL-KbD1.js";import{w as P}from"./withWebComponent-LTFbYRvs.js";const l=P("ui5-color-palette",[],[],[],["item-click"],()=>g(()=>import("./index-mxn2f2_c.js").then(r=>r.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]),import.meta.url));l.displayName="ColorPalette";try{l.displayName="ColorPalette",l.__docgenInfo={description:`The \`ColorPalette\` provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.

### Usage

The \`ColorPalette\` is meant for users that need to select a color from a predefined set.
To define the colors, use the \`ColorPaletteItem\` component inside the default slot of the \`ColorPalette\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"ColorPalette",props:{children:{defaultValue:null,description:"Defines the `ColorPaletteItem` elements.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPaletteDomRef, ColorPaletteItemClickEventDetail>) => void"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}class o{static get dependencies(){return[c,p,d]}static async init(){o.i18nBundle=await u("@ui5/webcomponents")}get colorPaletteDialogTitle(){return o.i18nBundle.getText(f)}get colorPaletteDialogOKButton(){return o.i18nBundle.getText(h)}get colorPaletteCancelButton(){return o.i18nBundle.getText(C)}}m("ColorPaletteMoreColors",o);const _={title:"Data Display / ColorPalette",component:l,argTypes:{children:{control:{disable:!0}}},args:{},tags:["package:@ui5/webcomponents"]},a={render:r=>e.jsxs(l,{...r,children:[e.jsx(t,{value:"darkblue"}),e.jsx(t,{value:"pink"}),e.jsx(t,{value:"#444444"}),e.jsx(t,{value:"rgb(0,200,0)"}),e.jsx(t,{value:"green"}),e.jsx(t,{value:"darkred"}),e.jsx(t,{value:"yellow"}),e.jsx(t,{value:"blue"}),e.jsx(t,{value:"cyan"}),e.jsx(t,{value:"orange"}),e.jsx(t,{value:"#5480e7"}),e.jsx(t,{value:"#ff6699"})]})};var n,s,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const v=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:v,default:_},Symbol.toStringTag,{value:"Module"}));export{k as C,a as D};
