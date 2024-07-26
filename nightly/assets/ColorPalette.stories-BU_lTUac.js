const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DoipiCjT.js","./withWebComponent-Bw_l6Ewh.js","./utils-BHgxP_Sc.js","./index-ClU-Tc1p.js","./useIsomorphicLayoutEffect-DCJrFAVs.js","./slot-_4yKMUwC.js","./event-Dq0fpeHi.js","./i18nBundle-CyjtwURt.js","./ItemNavigation-J0QfqElW.js","./Keys-F_3Gvx0K.js","./getActiveElement-kltGt_DR.js","./class-map-DoF19r8m.js","./if-defined-mCyQq_6q.js","./Icon-Bjam5y2n.js","./parameters-bundle.css-BFbT_feV.js","./Button-Bn9nox5u.js","./AriaLabelHelper-C5uDZewF.js","./MarkedEvents-CAur0wxK.js","./willShowContent-CZcfsNXp.js","./i18n-defaults-BuF9xM0k.js","./iframe-ZWGuvtYA.js","./style-map-Bys0Ab5G.js"])))=>i.map(i=>d[i]);
import{j as e}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{s as m}from"./utils-BHgxP_Sc.js";import{f as u}from"./i18nBundle-CyjtwURt.js";import c from"./Dialog-C0sQq9aS.js";import{b as d}from"./Button-Bn9nox5u.js";import p from"./ColorPicker-DHTs5JuN.js";import{C as h,i as f,j as C}from"./i18n-defaults-BuF9xM0k.js";import{C as t}from"./index-DoipiCjT.js";import{_ as g}from"./iframe-ZWGuvtYA.js";import{w as _}from"./withWebComponent-Bw_l6Ewh.js";const o=_("ui5-color-palette",[],[],[],["item-click"],()=>g(()=>import("./index-DoipiCjT.js").then(l=>l.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url));o.displayName="ColorPalette";try{o.displayName="ColorPalette",o.__docgenInfo={description:`The \`ColorPalette\` provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.

### Usage

The \`ColorPalette\` is meant for users that need to select a color from a predefined set.
To define the colors, use the \`ColorPaletteItem\` component inside the default slot of the \`ColorPalette\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ColorPalette",props:{children:{defaultValue:null,description:"Defines the `ColorPaletteItem` elements.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPaletteDomRef, ColorPaletteItemClickEventDetail>) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{o.displayName="ColorPalette",o.__docgenInfo={description:`The \`ColorPalette\` provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.

### Usage

The \`ColorPalette\` is meant for users that need to select a color from a predefined set.
To define the colors, use the \`ColorPaletteItem\` component inside the default slot of the \`ColorPalette\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ColorPalette",props:{children:{defaultValue:null,description:"Defines the `ColorPaletteItem` elements.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:"Fired when the user selects a color.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPaletteDomRef, ColorPaletteItemClickEventDetail>) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}class n{static get dependencies(){return[c,d,p]}static async init(){n.i18nBundle=await u("@ui5/webcomponents")}get colorPaletteDialogTitle(){return n.i18nBundle.getText(h)}get colorPaletteDialogOKButton(){return n.i18nBundle.getText(f)}get colorPaletteCancelButton(){return n.i18nBundle.getText(C)}}m("ColorPaletteMoreColors",n);const P={title:"Data Display / ColorPalette",component:o,argTypes:{children:{control:{disable:!0}}},args:{},tags:["package:@ui5/webcomponents"]},a={render:l=>e.jsxs(o,{...l,children:[e.jsx(t,{value:"darkblue"}),e.jsx(t,{value:"pink"}),e.jsx(t,{value:"#444444"}),e.jsx(t,{value:"rgb(0,200,0)"}),e.jsx(t,{value:"green"}),e.jsx(t,{value:"darkred"}),e.jsx(t,{value:"yellow"}),e.jsx(t,{value:"blue"}),e.jsx(t,{value:"cyan"}),e.jsx(t,{value:"orange"}),e.jsx(t,{value:"#5480e7"}),e.jsx(t,{value:"#ff6699"})]})};var r,s,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const y=["Default"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:y,default:P},Symbol.toStringTag,{value:"Module"}));export{E as C,a as D};
