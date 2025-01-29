import{j as e}from"./jsx-runtime-CLpGMVip.js";import{m as d,a as p}from"./utils-DKbukTmU.js";import{w as h,c as s,j as a}from"./withWebComponent-DIBLIPif.js";import{a as i}from"./Button-BYnClEc8.js";import{D as f}from"./Dialog-DUUAZhby.js";import{C}from"./ColorPicker-lWBKDO8R.js";import{K as g,N as P,O as _}from"./i18n-defaults-Cyg2J0QB.js";import{C as t}from"./index-C4XtvDZg.js";const o=h("ui5-color-palette",[],[],[],["item-click"]);o.displayName="ColorPalette";try{o.displayName="ColorPalette",o.__docgenInfo={description:`The \`ColorPalette\` provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.

### Usage

The \`ColorPalette\` is meant for users that need to select a color from a predefined set.
To define the colors, use the \`ColorPaletteItem\` component inside the default slot of the \`ColorPalette\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ColorPalette",props:{children:{defaultValue:null,description:"Defines the `ColorPaletteItem` elements.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:`Fired when the user selects a color.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPaletteDomRef, ColorPaletteItemClickEventDetail>) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{o.displayName="ColorPalette",o.__docgenInfo={description:`The \`ColorPalette\` provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.

### Usage

The \`ColorPalette\` is meant for users that need to select a color from a predefined set.
To define the colors, use the \`ColorPaletteItem\` component inside the default slot of the \`ColorPalette\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ColorPalette",props:{children:{defaultValue:null,description:"Defines the `ColorPaletteItem` elements.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onItemClick:{defaultValue:null,description:`Fired when the user selects a color.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPaletteDomRef, ColorPaletteItemClickEventDetail>) => void"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function b(){return s(f,{headerText:this.colorPaletteDialogTitle,children:[a("div",{class:"ui5-cp-dialog-content",children:a(C,{})}),s("div",{slot:"footer",class:"ui5-cp-dialog-footer",children:[a(i,{design:"Emphasized",onClick:this._chooseCustomColor,children:this.colorPaletteDialogOKButton}),a(i,{design:"Transparent",onClick:this._closeDialog,children:this.colorPaletteCancelButton})]})]})}class n extends p{get template(){return b}get colorPaletteDialogTitle(){return n.i18nBundle.getText(g)}get colorPaletteDialogOKButton(){return n.i18nBundle.getText(P)}get colorPaletteCancelButton(){return n.i18nBundle.getText(_)}}d("ColorPaletteMoreColors",n);const y={title:"Data Display / ColorPalette",component:o,argTypes:{children:{control:{disable:!0}}},args:{},tags:["package:@ui5/webcomponents"]},l={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{value:"darkblue"}),e.jsx(t,{value:"pink"}),e.jsx(t,{value:"#444444"}),e.jsx(t,{value:"rgb(0,200,0)"}),e.jsx(t,{value:"green"}),e.jsx(t,{value:"darkred"}),e.jsx(t,{value:"yellow"}),e.jsx(t,{value:"blue"}),e.jsx(t,{value:"cyan"}),e.jsx(t,{value:"orange"}),e.jsx(t,{value:"#5480e7"}),e.jsx(t,{value:"#ff6699"})]})};var c,u,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const v=["Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:v,default:y},Symbol.toStringTag,{value:"Module"}));export{O as C,l as D};
